import { NextResponse } from "next/server";

import {
  clinicDateTimeToIso,
  getClinicDayBounds,
  getConsultationTimes,
  isDateBookable,
} from "@/lib/booking/schedule";
import { isBookingEmailConfigured } from "@/lib/booking/notifications";
import { getNeonDatabase, isNeonDatabaseConfigured } from "@/lib/neon/database";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !isDateBookable(date)) {
    return NextResponse.json({ error: "Choose a date within the next 30 days." }, { status: 400 });
  }

  if (!isNeonDatabaseConfigured() || !isBookingEmailConfigured()) {
    return NextResponse.json(
      { code: "booking_not_ready", error: "Online booking is being set up. Please call the clinic." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  const database = getNeonDatabase();
  const { start, end } = getClinicDayBounds(date);
  let data;
  try {
    data = await database.query(
      "select starts_at from public.consultation_bookings where status = 'confirmed' and starts_at >= $1::timestamptz and starts_at < $2::timestamptz",
      [start, end]
    );
  } catch {
    return NextResponse.json(
      { error: "We could not load appointment times. Please try again or call the clinic." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }

  const bookedTimes = new Set(data.map((booking) => {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date(booking.starts_at));
    const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
    return `${values.hour}:${values.minute}`;
  }));

  const now = new Date();
  const slots = getConsultationTimes(date)
    .filter((time) => new Date(clinicDateTimeToIso(date, time)) > now && !bookedTimes.has(time));

  return NextResponse.json({ date, slots }, { headers: { "Cache-Control": "no-store" } });
}
