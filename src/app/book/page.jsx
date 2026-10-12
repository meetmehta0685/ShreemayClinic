import Image from "next/image";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import BookingForm from "@/components/booking-form";
import { clinicHours, clinicName, doctorName, phoneHref, phoneDisplay } from "@/data/clinic";

export const metadata = {
  title: "Book a consultation | Shreemay Skin Clinic",
  description: "Choose a 20-minute consultation time with Dr. Hiteshree Shah at Shreemay Skin Clinic in Vadodara.",
};

export default function BookingPage() {
  return (
    <>
      <SiteHeader phoneHref={phoneHref} />
      <main id="top" className="booking-page">
        <div className="page-container booking-layout">
          <section className="booking-intro" aria-labelledby="booking-title">
            <p className="booking-kicker">Shreemay Skin Clinic · Vadodara</p>
            <h1 id="booking-title">Book your consultation</h1>
            <p className="booking-lead">
              Select a date and time for a 20-minute consultation with Dr. Hiteshree Shah.
            </p>

            <div className="booking-doctor">
              <Image
                className="booking-doctor-image"
                src="/images/dr-hiteshree-iadvl-optimized.jpg"
                alt="Dr. Hiteshree Shah"
                width={1000}
                height={936}
                sizes="52px"
              />
              <div>
                <strong>{doctorName}</strong>
                <span>Dermatologist</span>
              </div>
            </div>

            <dl className="booking-facts">
              <div>
                <dt>Appointment</dt>
                <dd>Consultation · 20 minutes</dd>
              </div>
              <div>
                <dt>Clinic hours</dt>
                <dd>
                  {clinicHours.map((item) => (
                    <span key={item.days}>{item.days}: {item.hours}</span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Clinic notification</dt>
                <dd>The clinic receives your details by email when online booking is active</dd>
              </div>
            </dl>

            <p className="booking-help">
              Need help choosing a time? <a href={phoneHref}>Call {phoneDisplay}</a>.
            </p>
          </section>

          <BookingForm clinicName={clinicName} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
