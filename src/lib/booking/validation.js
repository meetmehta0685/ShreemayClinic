import {
  clinicDateTimeToIso,
  getConsultationTimes,
  isDateBookable,
  consultationDurationMinutes,
} from "@/lib/booking/schedule";

export function validateBookingPayload(payload, now = new Date()) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { error: "Enter your details and choose a time." };
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return { error: "We could not submit this booking. Please try again." };
  }

  const patientName = typeof payload.patientName === "string" ? payload.patientName.trim() : "";
  const patientPhone = typeof payload.patientPhone === "string" ? payload.patientPhone.trim() : "";
  const date = typeof payload.date === "string" ? payload.date : "";
  const time = typeof payload.time === "string" ? payload.time : "";
  const phoneDigits = patientPhone.replace(/\D/g, "");

  if (patientName.length < 2 || patientName.length > 120) {
    return { error: "Enter your name using 2 to 120 characters." };
  }

  if (!/^[+0-9() -]{10,22}$/.test(patientPhone) || phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { error: "Enter a mobile number with 10 to 15 digits." };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !isDateBookable(date, now)) {
    return { error: "Choose an available date within the next 30 days." };
  }

  if (!getConsultationTimes(date).includes(time)) {
    return { error: "Choose an available appointment time." };
  }

  const startsAt = clinicDateTimeToIso(date, time);
  const endsAt = new Date(new Date(startsAt).getTime() + consultationDurationMinutes * 60_000).toISOString();

  if (new Date(startsAt) <= now) {
    return { error: "Choose a future appointment time." };
  }

  return {
    value: {
      patient_name: patientName,
      patient_phone: patientPhone,
      service_name: "Consultation",
      starts_at: startsAt,
      ends_at: endsAt,
      status: "confirmed",
    },
  };
}
