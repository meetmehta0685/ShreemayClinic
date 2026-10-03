import assert from "node:assert/strict";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const originals = new URL(".codex/private-clinical-originals/", root);
const images = new URL("public/images/cases/", root);
const photos = [
  { name: "lesion-before", box: [100, 525, 620, 680] },
  { name: "lesion-followup", box: [115, 700, 645, 850] },
  { name: "procedure-before", box: [25, 820, 1325, 1000] },
  { name: "procedure-followup", box: [5, 675, 1345, 880] },
];

await mkdir(originals, { recursive: true, mode: 0o700 });

for (const { name, box: [left, top, right, bottom] } of photos) {
  const source = new URL(`${name}.jpeg`, images);
  const backup = new URL(`${name}.jpeg`, originals);
  const output = new URL(`${name}-redacted.png`, images);
  // On retries the original is already outside the public directory.
  let input;
  try {
    input = await readFile(backup);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    input = await readFile(source);
    await writeFile(backup, input, { flag: "wx", mode: 0o600 });
  }

  const { data, info } = await sharp(input).rotate().removeAlpha().raw()
    .toBuffer({ resolveWithObject: true });
  assert.equal(info.width, 1350);
  assert.equal(info.height, 1800);
  assert.equal(info.channels, 3);
  const redacted = Buffer.from(data);
  for (let y = top; y < bottom; y++) {
    for (let x = left; x < right; x++) {
      const offset = (y * info.width + x) * info.channels;
      redacted.set([18, 59, 61], offset);
    }
  }

  await sharp(redacted, { raw: info }).png().toFile(fileURLToPath(output));
  const decoded = await sharp(fileURLToPath(output)).raw().toBuffer();
  assert.deepEqual(decoded, redacted, "PNG must preserve decoded pixels exactly");
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const offset = (y * info.width + x) * info.channels;
      if (x >= left && x < right && y >= top && y < bottom) {
        assert.deepEqual(decoded.subarray(offset, offset + 3), Buffer.from([18, 59, 61]));
      } else {
        assert.deepEqual(decoded.subarray(offset, offset + 3), data.subarray(offset, offset + 3));
      }
    }
  }
  try {
    await rename(source, new URL(`${name}-removed-from-public.jpeg`, originals));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  console.log(`${name}: verified permanent mask; clinical pixels outside mask unchanged`);
}
