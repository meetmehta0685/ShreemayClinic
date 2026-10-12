"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRightIcon, CheckIcon, Clock3Icon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { phoneHref } from "@/data/clinic";
import {
  formatClinicDate,
  formatClinicTime,
  getBookableDates,
  getConsultationTimes,
} from "@/lib/booking/schedule";

export default function BookingForm({ clinicName }) {
  const dates = useMemo(() => getBookableDates(), []);
  const [selectedDate, setSelectedDate] = useState(dates[0] ?? "");
  const [selectedTime, setSelectedTime] = useState("");
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [bookingError, setBookingError] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [booking, setBooking] = useState(null);
  const visibleSlots = useMemo(() => {
    if (previewMode) return selectedDate ? getConsultationTimes(selectedDate) : [];
    return slots;
  }, [previewMode, selectedDate, slots]);

  useEffect(() => {
    if (!selectedDate) {
      setSlots([]);
      setLoadingSlots(false);
      return undefined;
    }

    const controller = new AbortController();
    setLoadingSlots(true);
    setSelectedTime("");
    setBookingError("");
    setPreviewMode(false);

    fetch(`/api/booking/availability?date=${encodeURIComponent(selectedDate)}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          if (result.code === "booking_not_ready") setPreviewMode(true);
          throw new Error(result.error || "We could not load appointment times.");
        }
        setSlots(result.slots ?? []);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setSlots([]);
          setBookingError(error.message);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingSlots(false);
      });

    return () => controller.abort();
  }, [selectedDate]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (previewMode) return;

    if (!selectedDate || !selectedTime) {
      setBookingError("Choose a date and appointment time first.");
      return;
    }

    setSubmitting(true);
    setBookingError("");
    const formData = new FormData(event.currentTarget);
    const attemptedTime = selectedTime;

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: formData.get("patientName"),
          patientPhone: formData.get("patientPhone"),
          website: formData.get("website"),
          date: selectedDate,
          time: selectedTime,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        if (result.code === "booking_not_ready") setPreviewMode(true);
        throw new Error(result.error || "We could not save this appointment.");
      }

      setBooking({ ...result, patientName: formData.get("patientName") });
    } catch (error) {
      setBookingError(error.message);
      if (responseIsSlotConflict(error.message)) {
        setSelectedTime("");
        setSlots((current) => current.filter((time) => time !== attemptedTime));
      }
    } finally {
      setSubmitting(false);
    }
  }

  function startAnotherBooking() {
    setBooking(null);
    setSelectedTime("");
    setBookingError("");
  }

  if (booking) {
    return (
      <section className="booking-panel booking-success" aria-live="polite" aria-labelledby="booking-success-title">
        <span className="booking-success-icon"><CheckIcon aria-hidden="true" /></span>
        <p className="booking-kicker">Appointment booked</p>
        <h2 id="booking-success-title">You’re booked, {booking.patientName}.</h2>
        <p>
          Your consultation with Dr. Hiteshree Shah is scheduled for {formatClinicDate(booking.date)} at {formatClinicTime(booking.time)}.
        </p>
        <div className="booking-success-note">
          {booking.clinicAlertSent
            ? `The clinic has been notified. We look forward to seeing you at ${clinicName}.`
            : "Your appointment is booked, but we could not notify the clinic by email. Please call the clinic to confirm the details."}
        </div>
        <div className="booking-success-actions">
          <button type="button" className={buttonVariants({ size: "lg" })} onClick={startAnotherBooking}>
            Book another consultation
          </button>
          <a href={phoneHref}>Call the clinic</a>
        </div>
      </section>
    );
  }

  return (
    <section className="booking-panel" aria-labelledby="booking-form-title">
      <div className="booking-panel-heading">
        <div>
          <p className="booking-kicker">Online booking</p>
          <h2 id="booking-form-title">Choose a time</h2>
        </div>
        <span className="booking-duration"><Clock3Icon aria-hidden="true" /> 20 min</span>
      </div>

      {previewMode ? (
        <div className="booking-preview-notice" role="status">
          <strong>Preview only</strong>
          <p>
            These are sample times. Your details won’t be sent or saved yet. To book now, <a href={phoneHref}>call the clinic</a>.
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="booking-field">
          <label htmlFor="appointment-date">Date</label>
          <select
            id="appointment-date"
            name="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            required
          >
            {dates.map((date) => (
              <option key={date} value={date}>{formatClinicDate(date)}</option>
            ))}
          </select>
        </div>

        <fieldset className="booking-field booking-time-field">
          <legend>{previewMode ? "Example appointment times" : "Available times"}</legend>
          {loadingSlots && !previewMode ? (
            <p className="booking-inline-status" role="status">Loading available times…</p>
          ) : visibleSlots.length ? (
            <div className="booking-slots">
              {visibleSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={"booking-slot" + (selectedTime === time ? " is-selected" : "")}
                  aria-pressed={selectedTime === time}
                  onClick={() => setSelectedTime(time)}
                >
                  {formatClinicTime(time)}
                </button>
              ))}
            </div>
          ) : (
            <p className="booking-inline-status" role="status">
              {bookingError || "No times are available on this date. Choose another day or call the clinic."}
            </p>
          )}
        </fieldset>

        <div className="booking-form-divider" />
        <div className="booking-details-heading">
          <h3>Your details</h3>
          <p>We’ll use these details to manage your appointment.</p>
        </div>

        <div className="booking-field">
          <label htmlFor="patient-name">Full name</label>
          <input id="patient-name" name="patientName" autoComplete="name" minLength={2} maxLength={120} required />
        </div>
        <div className="booking-field">
          <label htmlFor="patient-phone">Contact number</label>
          <input
            id="patient-phone"
            name="patientPhone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            pattern="[+0-9() -]{10,22}"
            title="Enter a mobile number with its country code if needed."
            required
          />
        </div>

        <div className="booking-honeypot" aria-hidden="true">
          <label htmlFor="booking-website">Leave this field empty</label>
          <input id="booking-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {bookingError && !previewMode ? <p className="booking-error" role="alert">{bookingError}</p> : null}

        <button
          type="submit"
          className={buttonVariants({ size: "lg" }) + " booking-submit"}
          disabled={previewMode || submitting || loadingSlots || !selectedDate || !selectedTime}
        >
          {previewMode ? "Online booking coming soon" : submitting ? "Saving appointment…" : "Confirm consultation"}
          {!previewMode && !submitting ? <ArrowRightIcon data-icon="inline-end" aria-hidden="true" /> : null}
        </button>
      </form>
    </section>
  );
}

function responseIsSlotConflict(message) {
  return message.toLowerCase().includes("just booked");
}
