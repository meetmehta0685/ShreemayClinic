import { NextResponse } from "next/server";

import { sendClinicBookingAlert, isBookingEmailConfigured } from "@/lib/booking/notifications";
import { validateBookingPayload } from "@/lib/booking/validation";
import { getNeonDatabase, isNeonDatabaseConfigured } from "@/lib/neon/database";

export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!isNeonDatabaseConfigured() || !isBookingEmailConfigured()) {
    return NextResponse.json(
      { code: "booking_not_ready", error: "Online booking is being set up. Please call the clinic." },
      { status: 503 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Enter your details and choose a time." }, { status: 400 });
  }

  const validation = validateBookingPayload(payload);
  if (validation.error) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const database = getNeonDatabase();
  let booking;

  try {
    const rows = await database.query(
      [
        "insert into public.consultation_bookings",
        "(patient_name, patient_phone, service_name, starts_at, ends_at, status)",
        "values ($1, $2, $3, $4::timestamptz, $5::timestamptz, $6)",
        "returning id, patient_name, patient_phone, service_name, starts_at",
      ].join(" "),
      [
        validation.value.patient_name,
        validation.value.patient_phone,
        validation.value.service_name,
        validation.value.starts_at,
        validation.value.ends_at,
        validation.value.status,
      ]
    );
    booking = rows[0];
  } catch (error) {
    if (error?.code === "23505") {
      return NextResponse.json(
        { error: "That time was just booked. Choose another available appointment." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "We could not save your appointment. Please try again or call the clinic." },
      { status: 500 }
    );
  }

  const date = payload.date;
  const time = payload.time;
  let clinicAlertSent = false;

  try {
    const alert = await sendClinicBookingAlert(booking, date, time);
    clinicAlertSent = alert.sent;
  } catch {
    // An alert failure does not undo the reserved appointment.
  }

  try {
    await database.query(
      "update public.consultation_bookings set clinic_alert_email_status = $1 where id = $2::uuid",
      [clinicAlertSent ? "sent" : "failed", booking.id]
    );
  } catch {
    // The reservation is already confirmed; an email-status update must not invite a duplicate booking.
  }

  return NextResponse.json({
    bookingId: booking.id,
    date,
    time,
    clinicAlertSent,
  }, { status: 201 });
}
