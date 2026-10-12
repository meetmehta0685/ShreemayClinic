export const clinicTimeZone = "Asia/Kolkata";
export const consultationDurationMinutes = 20;
export const bookingWindowDays = 30;

const weekdayWindows = {
  1: [["11:00", "14:00"], ["17:00", "20:00"]],
  2: [["11:00", "14:00"], ["17:00", "20:00"]],
  3: [["11:00", "14:00"], ["17:00", "20:00"]],
  4: [["11:00", "14:00"], ["17:00", "20:00"]],
  5: [["11:00", "14:00"], ["17:00", "20:00"]],
  6: [["11:00", "14:00"], ["17:00", "20:00"]],
};

const datePartsFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: clinicTimeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function getClinicDateKey(date = new Date()) {
  const parts = Object.fromEntries(
    datePartsFormatter.formatToParts(date).map(({ type, value }) => [type, value])
  );
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function addDateKeyDays(dateKey, days) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

export function getClinicWeekday(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function isDateBookable(dateKey, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) return false;
  const [year, month, day] = dateKey.split("-").map(Number);
  const parsedDate = new Date(Date.UTC(year, month - 1, day));
  if (parsedDate.toISOString().slice(0, 10) !== dateKey) return false;

  const today = getClinicDateKey(now);
  return dateKey >= today
    && dateKey <= addDateKeyDays(today, bookingWindowDays - 1)
    && Boolean(weekdayWindows[getClinicWeekday(dateKey)]);
}

export function getBookableDates(now = new Date()) {
  const today = getClinicDateKey(now);
  return Array.from({ length: bookingWindowDays }, (_, index) => addDateKeyDays(today, index))
    .filter((dateKey) => isDateBookable(dateKey, now));
}

export function getConsultationTimes(dateKey) {
  const windows = weekdayWindows[getClinicWeekday(dateKey)] ?? [];
  const times = [];

  for (const [windowStart, windowEnd] of windows) {
    const [startHour, startMinute] = windowStart.split(":").map(Number);
    const [endHour, endMinute] = windowEnd.split(":").map(Number);
    const start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;

    for (let minute = start; minute + consultationDurationMinutes <= end; minute += consultationDurationMinutes) {
      const hours = String(Math.floor(minute / 60)).padStart(2, "0");
      const minutes = String(minute % 60).padStart(2, "0");
      times.push(`${hours}:${minutes}`);
    }
  }

  return times;
}

export function clinicDateTimeToIso(dateKey, time) {
  return new Date(`${dateKey}T${time}:00+05:30`).toISOString();
}

export function getClinicDayBounds(dateKey) {
  return {
    start: clinicDateTimeToIso(dateKey, "00:00"),
    end: clinicDateTimeToIso(addDateKeyDays(dateKey, 1), "00:00"),
  };
}

export function formatClinicDate(dateKey, options = {}) {
  const date = new Date(`${dateKey}T12:00:00+05:30`);
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: clinicTimeZone,
    weekday: "long",
    day: "numeric",
    month: "long",
    ...options,
  }).format(date);
}

export function formatClinicTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date(Date.UTC(2020, 0, 1, hour, minute));
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function formatClinicDateTime(isoString) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: clinicTimeZone,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(isoString));
}
