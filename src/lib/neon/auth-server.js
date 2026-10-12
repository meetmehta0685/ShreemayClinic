import "server-only";
import { createNeonAuth } from "@neondatabase/auth/next/server";

let neonAuth;

export function isNeonAuthConfigured() {
  return Boolean(process.env.NEON_AUTH_BASE_URL && process.env.NEON_AUTH_COOKIE_SECRET);
}

export function getNeonAuth() {
  if (!isNeonAuthConfigured()) return null;

  if (!neonAuth) {
    neonAuth = createNeonAuth({
      baseUrl: process.env.NEON_AUTH_BASE_URL,
      cookies: {
        secret: process.env.NEON_AUTH_COOKIE_SECRET,
        sessionDataTtl: 300,
      },
    });
  }

  return neonAuth;
}

export async function getSignedInUser() {
  const auth = getNeonAuth();
  if (!auth) return null;

  try {
    const result = await auth.getSession();
    return result?.user
      ?? result?.session?.user
      ?? result?.data?.user
      ?? result?.data?.session?.user
      ?? null;
  } catch {
    return null;
  }
}
