import "server-only";
import { Resend } from "resend";

import { formatClinicDate, formatClinicTime } from "@/lib/booking/schedule";

export function isBookingEmailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY
    && process.env.BOOKING_FROM_EMAIL
    && process.env.BOOKING_ALERT_EMAIL
  );
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function createResendClient() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendClinicBookingAlert(booking, date, time) {
  const recipient = process.env.BOOKING_ALERT_EMAIL;
  if (!recipient) return { sent: false, skipped: true };

  const resend = createResendClient();
  const dateLabel = formatClinicDate(date);
  const timeLabel = formatClinicTime(time);
  const patientName = escapeHtml(booking.patient_name);
  const patientPhone = escapeHtml(booking.patient_phone);
  const patientPhoneHref = booking.patient_phone.replace(/[^+\d]/g, "");
  const origin = process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000");
  const dashboardUrl = new URL("/admin", origin).toString();
  const { data, error } = await resend.emails.send({
    from: process.env.BOOKING_FROM_EMAIL,
    to: [recipient],
    subject: "New consultation booking",
    text: [
      "A new consultation was booked.",
      "Patient: " + booking.patient_name,
      "Contact number: " + booking.patient_phone,
      "Appointment: " + dateLabel + " at " + timeLabel + " IST",
      "Clinic dashboard: " + dashboardUrl,
    ].join("\n"),
    html: "<p>A new consultation was booked.</p>"
      + "<p><strong>Patient:</strong> " + patientName
      + "<br><strong>Contact number:</strong> <a href=\"tel:" + patientPhoneHref + "\">" + patientPhone + "</a>"
      + "<br><strong>Appointment:</strong> " + dateLabel + " at " + timeLabel + " IST</p>"
      + "<p><a href=\"" + dashboardUrl + "\">Open the clinic dashboard</a></p>",
  });

  return { sent: !error, error, id: data?.id };
}
