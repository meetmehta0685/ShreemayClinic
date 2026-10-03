import Image from "next/image";
import Link from "next/link";

import {
  bookingUrl,
  clinicAddress,
  clinicHours,
  clinicName,
  googleMapsHref,
  instagramHref,
  phoneDisplay,
  phoneHref,
  whatsAppHref,
} from "@/data/clinic";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-main">
        <div className="footer-brand">
          <Image src="/images/logo.png" alt="Shreemay Skin Clinic logo" width={206} height={206} unoptimized />
          <div>
            <p className="footer-brand-name">{clinicName}</p>
            <p>Dr. Hiteshree Shah · MBBS, MD (Dermatology)</p>
            <p>Skin, hair, laser, cosmetic, and vitiligo care in Vadodara.</p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/treatments">Treatments</Link>
            <Link href="/about-dr-hiteshree-shah">Dr. Hiteshree Shah</Link>
            <Link href="/clinic">The clinic</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <span className="footer-label">Contact</span>
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={whatsAppHref} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a>
            <address>{clinicAddress}</address>
          </div>
          <div className="footer-hours">
            <span className="footer-label">Clinic hours</span>
            {clinicHours.map((item) => (
              <p key={item.days}><strong>{item.days}</strong><span>{item.hours}</span></p>
            ))}
          </div>
        </div>
      </div>
      <div className="page-container footer-bottom">
        <span>Shreemay Skin Clinic · Vadodara</span>
        <div>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book an appointment</a>
          <a href={googleMapsHref} target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
      </div>
    </footer>
  );
}
