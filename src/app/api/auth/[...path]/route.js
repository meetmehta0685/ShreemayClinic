import { NextResponse } from "next/server";

import { getNeonAuth } from "@/lib/neon/auth-server";

export const dynamic = "force-dynamic";

const auth = getNeonAuth();
const handlers = auth?.handler();
const unavailable = () => NextResponse.json(
  { error: "The clinic sign-in service is not configured." },
  { status: 503 }
);

export const GET = handlers?.GET ?? unavailable;
export const POST = handlers?.POST ?? unavailable;
export const PUT = handlers?.PUT ?? unavailable;
export const DELETE = handlers?.DELETE ?? unavailable;
export const PATCH = handlers?.PATCH ?? unavailable;
