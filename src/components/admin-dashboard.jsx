"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CalendarDaysIcon, PhoneIcon, RefreshCwIcon, UserRoundIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { formatClinicDateTime } from "@/lib/booking/schedule";

const filters = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
  { id: "cancelled", label: "Cancelled" },
];

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [activeFilter, setActiveFilter] = useState("upcoming");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancellingId, setCancellingId] = useState("");

  const loadBookings = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/bookings", { cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not load appointments.");
      setBookings(result.bookings ?? []);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  const visibleBookings = useMemo(() => {
    const now = Date.now();
    return bookings
      .filter((booking) => {
        if (activeFilter === "cancelled") return booking.status === "cancelled";
        if (booking.status !== "confirmed") return false;
        return activeFilter === "upcoming"
          ? new Date(booking.starts_at).getTime() >= now
          : new Date(booking.starts_at).getTime() < now;
      })
      .sort((first, second) => new Date(first.starts_at) - new Date(second.starts_at));
  }, [activeFilter, bookings]);

  async function cancelBooking(booking) {
    const appointmentLabel = formatClinicDateTime(booking.starts_at);
    if (!window.confirm(`Cancel ${booking.patient_name}'s consultation on ${appointmentLabel}? The clinic will need to contact the patient about the change.`)) {
      return;
    }

    setCancellingId(booking.id);
    setError("");
    try {
      const response = await fetch(`/api/admin/bookings/${booking.id}`, { method: "PATCH" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not cancel this appointment.");
      setBookings((current) => current.map((item) => item.id === booking.id ? { ...item, status: "cancelled" } : item));
    } catch (cancelError) {
      setError(cancelError.message);
    } finally {
      setCancellingId("");
    }
  }

  const upcomingCount = bookings.filter((booking) => booking.status === "confirmed" && new Date(booking.starts_at).getTime() >= Date.now()).length;

  return (
    <section className="admin-content" aria-labelledby="admin-title">
      <div className="admin-page-heading">
        <div>
          <p className="booking-kicker">Appointment calendar</p>
          <h1 id="admin-title">Consultations</h1>
          <p>Patient names, contact numbers, and confirmed appointment times.</p>
        </div>
        <button className="admin-refresh-button" type="button" onClick={loadBookings} disabled={loading}>
          <RefreshCwIcon aria-hidden="true" /> Refresh
        </button>
      </div>

      <div className="admin-summary">
        <span className="admin-summary-icon"><CalendarDaysIcon aria-hidden="true" /></span>
        <div><strong>{upcomingCount}</strong><span>upcoming consultations</span></div>
        <span className="admin-summary-date">Times shown in India Standard Time</span>
      </div>

      <div className="admin-list-toolbar">
        <div className="admin-tabs" role="tablist" aria-label="Filter consultations">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={activeFilter === filter.id ? "is-active" : ""}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span>{visibleBookings.length} {visibleBookings.length === 1 ? "appointment" : "appointments"}</span>
      </div>

      {error ? <p className="booking-error admin-error" role="alert">{error}</p> : null}
      {loading ? (
        <div className="admin-empty" role="status">Loading appointments…</div>
      ) : visibleBookings.length ? (
        <div className="admin-booking-list">
          {visibleBookings.map((booking) => (
            <article className="admin-booking-row" key={booking.id}>
              <div className="admin-booking-person">
                <span className="admin-person-icon"><UserRoundIcon aria-hidden="true" /></span>
                <div>
                  <h2>{booking.patient_name}</h2>
                  <span>{booking.service_name}</span>
                </div>
              </div>
              <div className="admin-booking-time">
                <strong>{formatClinicDateTime(booking.starts_at)}</strong>
                <span>20-minute consultation</span>
              </div>
              <div className="admin-booking-contact">
                <a href={`tel:${booking.patient_phone.replace(/[^+\d]/g, "")}`}>
                  <PhoneIcon aria-hidden="true" /> {booking.patient_phone}
                </a>
              </div>
              <div className="admin-booking-meta">
                <span className={`admin-status admin-status-${booking.status}`}>
                  {booking.status === "confirmed" ? "Confirmed" : "Cancelled"}
                </span>
                {booking.status === "confirmed" ? (
                  <button type="button" className="admin-cancel-button" onClick={() => cancelBooking(booking)} disabled={cancellingId === booking.id}>
                    {cancellingId === booking.id ? "Cancelling…" : "Cancel appointment"}
                  </button>
                ) : null}
                {booking.clinic_alert_email_status === "failed" ? (
                  <span className="admin-email-warning">Clinic alert email failed</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="admin-empty">
          <CalendarDaysIcon aria-hidden="true" />
          <h2>{activeFilter === "upcoming" ? "No upcoming consultations" : `No ${activeFilter} consultations`}</h2>
          <p>New online bookings will appear here.</p>
        </div>
      )}
    </section>
  );
}
