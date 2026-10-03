"use client";

import Image from "next/image";
import { useState } from "react";
import { MoveVerticalIcon } from "lucide-react";

function PhotoStage({ image, label }) {
  const frameRatio = 4 / 3;
  const imageRatio = image.width / image.height;
  const width = Math.min(100, (imageRatio / frameRatio) * 100);
  const height = Math.min(100, (frameRatio / imageRatio) * 100);

  return (
    <div
      className="case-photo-stage"
      style={{ width: width + "%", height: height + "%" }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 760px) 88vw, (max-width: 1023px) 44vw, 28vw"
        className="case-photo"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

function CompareSlider({ before, after, title }) {
  const [position, setPosition] = useState(50);
  const afterClip = "inset(" + position + "% 0 0 0)";

  function updateFromPointer(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextPosition = ((event.clientY - bounds.top) / bounds.height) * 100;
    setPosition(Math.round(Math.max(0, Math.min(100, nextPosition))));
  }

  function handlePointerDown(event) {
    const fromHandle = event.target.closest(".compare-divider > span");
    if (event.pointerType === "touch" && !fromHandle) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.querySelector("input")?.focus({ preventScroll: true });
    updateFromPointer(event);
  }

  function handleKeyDown(event) {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    setPosition((current) => Math.max(0, Math.min(100, current + (event.key === "ArrowDown" ? 1 : -1))));
  }

  return (
    <div
      className="before-after-compare"
      aria-label={"Before and follow-up comparison for " + title}
      onPointerDown={handlePointerDown}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) updateFromPointer(event);
      }}
    >
      <div className="compare-photo compare-photo-before">
        <PhotoStage image={before} label="Before" />
      </div>
      <div className="compare-photo compare-photo-after" style={{ clipPath: afterClip }}>
        <PhotoStage image={after} label="Follow-up" />
      </div>
      <span className="compare-label compare-label-before">Before</span>
      <span className="compare-label compare-label-after">Follow-up</span>
      <span className="compare-divider" style={{ top: position + "%" }} aria-hidden="true">
        <span><MoveVerticalIcon aria-hidden="true" /></span>
      </span>
      <input
        className="compare-range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        onKeyDown={handleKeyDown}
        aria-orientation="vertical"
        aria-valuetext={`${position}% before photo visible`}
        aria-label={"Drag vertically to compare before and follow-up photos for " + title}
      />
    </div>
  );
}

function CasePhoto({ image, label }) {
  return (
    <figure>
      <div className="before-after-frame">
        <PhotoStage image={image} label={label} />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function framesAlign(before, after) {
  const beforeRatio = before.width / before.height;
  const afterRatio = after.width / after.height;
  return Math.abs(beforeRatio - afterRatio) < 0.03;
}

export default function BeforeAfterGallery({
  caseStudies: studies,
  heading = "Before & follow-up",
  intro = "Selected clinic photos help explain why examination and follow-up matter. Individual response, timing, and suitability vary.",
  compact = false,
}) {
  if (!studies?.length) {
    return null;
  }

  return (
    <section className={"before-after-section" + (compact ? " before-after-section-compact" : "")} aria-labelledby="case-studies-heading">
      <div className="page-container">
        <div className="before-after-heading">
          <div><h2 id="case-studies-heading">{heading}</h2></div>
          <p>{intro}</p>
        </div>

        <div className="before-after-grid">
          {studies.map((study) => {
            const useSlider = Boolean(study.comparison === "slider" && study.after && framesAlign(study.before, study.after));

            return (
              <article className="before-after-card" key={study.id}>
                <div className={"before-after-media" + (study.detail ? " before-after-media-with-detail" : "") + (useSlider ? " before-after-media-with-slider" : "")}>
                  {useSlider ? (
                    <figure className="before-after-compare-figure">
                      <CompareSlider before={study.before} after={study.after} title={study.title} />
                      <figcaption>Drag the divider to compare</figcaption>
                    </figure>
                  ) : (
                    <>
                      <CasePhoto image={study.before} label="Before" />
                      {study.after && <CasePhoto image={study.after} label="Follow-up" />}
                    </>
                  )}
                  {study.detail && <CasePhoto image={study.detail} label="Clinical detail" />}
                </div>
                <div className="before-after-copy">
                  <h3>{study.title}</h3>
                  <p>{study.note}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="before-after-disclaimer">
          Eye areas in facial photographs are permanently masked for privacy. Clinical photographs are shared for educational purposes and are not a promise of outcome; individual response, timing, and suitability vary.
        </p>
      </div>
    </section>
  );
}
