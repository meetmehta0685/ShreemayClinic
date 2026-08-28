import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CalendarDaysIcon,
  Clock3Icon,
  ExternalLinkIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AnnouncementBar from "@/components/AnnouncementBar";
import InstagramReels from "@/components/InstagramReels";
import MotionReveal from "@/components/motion-reveal";
import SiteHeader from "@/components/SiteHeader";
import { treatments } from "@/data/treatments";

const bookingUrl = "https://booking.appointy.com/en-US/hite123/bookings/calendar";
const phoneHref = "tel:+917861951664";
const whatsAppHref =
  "https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic";
const googleMapsHref = "https://share.google/de3czsbRXeYyanmER";
const instagramHref = "https://www.instagram.com/dr_hiteshreeshah_mddermat/";

const reviews = [
  {
    initials: "JN",
    name: "Jaydeep Nakum",
    quote:
      "I visited Shreemay Skin Clinic for my daughter's eye vitiligo treatment. The results are amazing. Dr. Hiteshree ma'am is extremely kind and patient.",
  },
  {
    initials: "VP",
    name: "Vrunda Patel",
    quote:
      "Highly recommend this clinic for anyone dealing with acne. The doctor took the time to explain the entire procedure, and I am seeing amazing improvements in my skin texture.",
  },
  {
    initials: "VG",
    name: "Vinod Gadakh",
    quote:
      "She listened patiently and provided the right guidance and treatment. I had discussed my health problems with several doctors but did not get results.",
  },
];

const consultationSteps = [
  ["Choose how to book", "Use the online calendar, WhatsApp, or call the clinic directly."],
  ["Meet the dermatologist", "Share your symptoms, history, routine, and the change you want to see."],
  ["Leave with a clear plan", "Understand the diagnosis, options, aftercare, and follow-up before you begin."],
];

export default function Home() {
  return (
    <>
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />
      <AnnouncementBar />

      <main id="top" tabIndex="-1">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-shell">
            <MotionReveal className="hero-copy" preset="rise">
              <div className="hero-kicker">
                <span className="hero-kicker-dot" aria-hidden="true" />
                Dermatologist in Vadodara
              </div>
              <h1 id="hero-heading">Care for your skin. Confidence in your plan.</h1>
              <p className="hero-lede">
                Meet Dr. Hiteshree Shah for thoughtful, doctor-led care across skin, hair, laser, cosmetic, and vitiligo concerns.
              </p>
              <div className="hero-actions">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg" })}
                >
                  <CalendarDaysIcon data-icon="inline-start" />
                  Book an appointment
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
                <a
                  href={whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <MessageCircleIcon data-icon="inline-start" />
                  Ask on WhatsApp
                </a>
              </div>
              <div className="hero-assurance">
                <ShieldCheckIcon aria-hidden="true" />
                <span>Consultation first. Clear options. No one-size-fits-all packages.</span>
              </div>
            </MotionReveal>

            <MotionReveal className="hero-portrait" preset="clip" delay={0.08} amount={0.1}>
              <Image
                src="/images/dr-hiteshree-iadvl-optimized.jpg"
                alt="Dr. Hiteshree Shah, dermatologist at Shreemay Skin Clinic"
                width={1228}
                height={1150}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="hero-doctor-card">
                <div>
                  <strong>Dr. Hiteshree Shah</strong>
                  <span>MBBS, MD Dermatology</span>
                </div>
                <Badge variant="secondary">Now booking</Badge>
              </div>
            </MotionReveal>
          </div>

          <div className="hero-proof page-container" aria-label="Clinic proof points">
            <div className="hero-rating">
              <StarIcon aria-hidden="true" />
              <strong>4.9</strong>
              <span>Google rating from 390+ patient reviews</span>
            </div>
            <Separator orientation="vertical" />
            <div>
              <strong>MD Dermatology</strong>
              <span>Doctor-led assessment and treatment planning</span>
            </div>
            <Separator orientation="vertical" />
            <div>
              <strong>Akshar Chowk</strong>
              <span>Old Padra Road, Vadodara</span>
            </div>
          </div>
        </section>

        <section id="care" className="care-section" aria-labelledby="care-heading">
          <div className="page-container care-intro">
            <MotionReveal className="section-heading" amount={0.2}>
              <p className="section-note">What brings you here?</p>
              <h2 id="care-heading">Start with the concern you want to understand.</h2>
            </MotionReveal>
            <p className="care-intro-copy">
              Every path begins with a dermatologist consultation. Explore the concern now, then book the right conversation with the clinic.
            </p>
          </div>

          <div className="page-container care-list" role="list">
            {treatments.map((treatment, index) => (
              <MotionReveal key={treatment.slug} className="care-row-motion" delay={index * 0.035} amount={0.12}>
                <Link href={`/treatments/${treatment.slug}`} className="care-row" role="listitem">
                  <span className="care-row-category">{treatment.category}</span>
                  <span className="care-row-title">{treatment.shortTitle}</span>
                  <span className="care-row-description">{treatment.description}</span>
                  <span className="care-row-arrow" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </MotionReveal>
            ))}
          </div>

          <div className="page-container care-support">
            <span>Not sure where your concern fits?</span>
            <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
              <PhoneIcon data-icon="inline-start" />
              Call the clinic
            </a>
          </div>
        </section>

        <section id="doctor" className="doctor-section" aria-labelledby="doctor-heading">
          <div className="page-container doctor-grid">
            <MotionReveal className="doctor-portrait" preset="clip" amount={0.12}>
              <Image
                src="/images/doctor-hero.png"
                alt="Dr. Hiteshree Shah inside her dermatology clinic"
                width={454}
                height={394}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
              <div className="doctor-portrait-caption">
                <span>Dermatology and dermatosurgery</span>
                <strong>Care explained with patience.</strong>
              </div>
            </MotionReveal>

            <MotionReveal className="doctor-copy" delay={0.08} amount={0.14}>
              <p className="section-note">Meet your dermatologist</p>
              <h2 id="doctor-heading">Medical clarity, with a more human consultation.</h2>
              <p className="doctor-lede">
                Dr. Hiteshree Shah is an MBBS, MD dermatologist with a fellowship in dermatosurgery. She cares for skin, hair, nails, vitiligo, laser, and cosmetic concerns.
              </p>
              <p>
                The clinic keeps the conversation practical. You understand what may be happening, which options suit you, and what follow-up may involve before treatment starts.
              </p>

              <dl className="credentials-list">
                <div><dt>Qualification</dt><dd>MBBS, MD in Skin &amp; Venereal Disease</dd></div>
                <div><dt>Training</dt><dd>B.J. Medical College, Ahmedabad</dd></div>
                <div><dt>Advanced focus</dt><dd>Fellowship in Dermatosurgery</dd></div>
              </dl>

              <div className="doctor-actions">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  Book with Dr. Shah
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
                <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "link", size: "lg" })}>
                  Find the clinic
                  <ExternalLinkIcon data-icon="inline-end" />
                </a>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-heading">
          <div className="page-container process-layout">
            <div className="process-intro">
              <p className="section-note section-note-light">Your first visit</p>
              <h2 id="process-heading">A simple path from concern to care.</h2>
              <p>Know what happens next before you make the appointment.</p>
            </div>
            <div className="process-list">
              {consultationSteps.map(([title, description], index) => (
                <div className="process-item" key={title}>
                  <span className="process-index">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clinic" className="clinic-section" aria-labelledby="clinic-heading">
          <div className="page-container clinic-heading-row">
            <div className="section-heading">
              <p className="section-note">The clinic</p>
              <h2 id="clinic-heading">A familiar, comfortable place to talk about your care.</h2>
            </div>
            <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>
              <MapPinIcon data-icon="inline-start" />
              Get directions
            </a>
          </div>

          <div className="clinic-gallery">
            <MotionReveal className="clinic-image clinic-image-wide" preset="clip" amount={0.08}>
              <Image src="/images/reception.jpg" alt="Reception desk at Shreemay Skin Clinic" width={1024} height={768} sizes="(max-width: 720px) 100vw, 50vw" />
              <span>Reception</span>
            </MotionReveal>
            <MotionReveal className="clinic-image" preset="clip" delay={0.06} amount={0.08}>
              <Image src="/images/consult-desk.png" alt="Consultation room at Shreemay Skin Clinic" width={765} height={1020} sizes="(max-width: 720px) 100vw, 25vw" />
              <span>Consultation room</span>
            </MotionReveal>
            <MotionReveal className="clinic-image" preset="clip" delay={0.12} amount={0.08}>
              <Image src="/images/treatment-area.png" alt="Waiting area at Shreemay Skin Clinic" width={765} height={1020} sizes="(max-width: 720px) 100vw, 25vw" />
              <span>Waiting area</span>
            </MotionReveal>
          </div>
        </section>

        <section id="reviews" className="reviews-section" aria-labelledby="reviews-heading">
          <div className="page-container reviews-layout">
            <div className="reviews-intro">
              <p className="section-note section-note-light">Patient experiences</p>
              <h2 id="reviews-heading">Trust built one conversation at a time.</h2>
              <div className="reviews-rating">
                <StarIcon aria-hidden="true" />
                <strong>4.9 on Google</strong>
                <span>390+ reviews</span>
              </div>
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Read more reviews
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </div>

            <div className="reviews-list">
              {reviews.map((review, index) => (
                <MotionReveal key={review.name} className="review-item" delay={index * 0.06} amount={0.14}>
                  <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
                  <div className="review-author">
                    <Avatar><AvatarFallback>{review.initials}</AvatarFallback></Avatar>
                    <div><strong>{review.name}</strong><span>Google review</span></div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <InstagramReels />

        <section id="visit" className="visit-section" aria-labelledby="visit-heading">
          <div className="page-container visit-layout">
            <div className="visit-copy">
              <p className="section-note">Visit Shreemay</p>
              <h2 id="visit-heading">Your next step can take less than a minute.</h2>
              <p>Choose a time online, send a WhatsApp message, or call the clinic. We are near Akshar Chowk on Old Padra Road.</p>

              <div className="visit-actions">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  <CalendarDaysIcon data-icon="inline-start" />Book online<ArrowUpRightIcon data-icon="inline-end" />
                </a>
                <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  <MessageCircleIcon data-icon="inline-start" />WhatsApp
                </a>
                <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
                  <PhoneIcon data-icon="inline-start" />Call
                </a>
              </div>

              <div className="visit-meta">
                <div><Clock3Icon aria-hidden="true" /><span>Monday to Saturday</span><strong>10 AM to 2 PM · 5 PM to 8 PM</strong></div>
                <div><MapPinIcon aria-hidden="true" /><span>Shreemay Skin Clinic</span><strong>Shop 8, Ananya Complex, Tandalja, Vadodara 390012</strong></div>
              </div>
            </div>

            <MotionReveal className="map-frame" preset="clip" delay={0.08} amount={0.1}>
              <iframe title="Shreemay Skin Clinic location map" src="https://www.google.com/maps?q=Shreemay+Clinic+Vadodara&output=embed" loading="lazy" allowFullScreen />
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className="map-link">
                <MapPinIcon aria-hidden="true" />Open in Google Maps<ArrowUpRightIcon aria-hidden="true" />
              </a>
            </MotionReveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-main">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Shreemay Skin Clinic logo" width={72} height={72} />
            <div><p className="footer-brand-name">Shreemay Skin Clinic</p><p>Skin, hair, laser, cosmetic, and vitiligo care by Dr. Hiteshree Shah in Vadodara.</p></div>
          </div>
          <div className="footer-links">
            <div><span className="footer-label">Explore</span><a href="#care">Treatments</a><a href="#doctor">Dr. Hiteshree Shah</a><a href="#clinic">The clinic</a></div>
            <div><span className="footer-label">Contact</span><a href={phoneHref}>78619 51664</a><a href={whatsAppHref} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a></div>
          </div>
        </div>
        <div className="page-container footer-bottom">
          <span>Shreemay Skin Clinic · Vadodara</span>
          <div><a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book an appointment</a><a href={googleMapsHref} target="_blank" rel="noopener noreferrer">Google Maps</a></div>
        </div>
      </footer>

      <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Shreemay Skin Clinic on WhatsApp" className="floating-contact">
        <MessageCircleIcon aria-hidden="true" /><span>WhatsApp</span>
      </a>
    </>
  );
}
