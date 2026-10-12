import { NextResponse } from "next/server";

import { getSignedInUser, isNeonAuthConfigured } from "@/lib/neon/auth-server";
import { getNeonDatabase, isNeonDatabaseConfigured } from "@/lib/neon/database";
import { getClinicStaff } from "@/lib/neon/staff";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isNeonAuthConfigured() || !isNeonDatabaseConfigured()) {
    return NextResponse.json({ error: "The clinic dashboard is not configured." }, { status: 503 });
  }

  const user = await getSignedInUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in to view appointments." }, { status: 401 });
  }

  const database = getNeonDatabase();
  let staff;
  let data;
  try {
    staff = await getClinicStaff(database, user.id);
    if (staff) {
      data = await database.query(
        [
          "select id, patient_name, patient_phone, service_name, starts_at, ends_at, status,",
          "clinic_alert_email_status, created_at",
          "from public.consultation_bookings order by starts_at desc limit 250",
        ].join(" ")
      );
    }
  } catch {
    return NextResponse.json({ error: "We could not load the appointment list." }, { status: 500 });
  }

  if (!staff) {
    return NextResponse.json({ error: "This account does not have clinic dashboard access." }, { status: 403 });
  }

  return NextResponse.json({ bookings: data }, { headers: { "Cache-Control": "no-store" } });
}
