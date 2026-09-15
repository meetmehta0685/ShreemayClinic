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
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import InstagramReels from "@/components/InstagramReels";
import MotionReveal from "@/components/motion-reveal";
import SiteHeader from "@/components/SiteHeader";
import {
  bookingUrl,
  clinicAddress,
  clinicHours,
  clinicName,
  googleMapsHref,
  instagramHref,
  mapEmbedUrl,
  phoneDisplay,
  phoneHref,
  whatsAppHref,
} from "@/data/clinic";
import { caseStudies } from "@/data/case-studies";
import { serviceGroups } from "@/data/treatments";

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

      <main id="top" tabIndex="-1">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-shell">
            <MotionReveal className="hero-copy" preset="rise">
              <p className="hero-location">Shreemay Skin Clinic · Vadodara</p>
              <h1 id="hero-heading">Your skin. Your story. Our care.</h1>
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
                <span>MBBS, MD Dermatology · Care led by Dr. Hiteshree Shah</span>
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
                  <Badge variant="secondary">Book a consultation</Badge>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="care" className="care-section" aria-labelledby="care-heading">
          <div className="page-container care-intro care-intro-centered">
            <MotionReveal className="section-heading" amount={0.2}>
              <p className="section-note">What we can help with</p>
              <h2 id="care-heading">What brings you to Shreemay?</h2>
              <p className="care-intro-copy">
                Start with a dermatologist consultation, then choose the right next step for your skin, hair, or treatment goal.
              </p>
            </MotionReveal>
          </div>

          <div className="page-container care-grid" role="list">
            {serviceGroups.map((group, groupIndex) => (
              <MotionReveal
                key={group.slug}
                className="care-group-motion"
                delay={groupIndex * 0.05}
                amount={0.12}
                role="listitem"
              >
                <article className="care-group">
                  <div className="care-group-heading">
                    <h3>{group.eyebrow}</h3>
                    <p>{group.description}</p>
                  </div>

                  <Link
                    href={`/care/${group.slug}`}
                    className="care-feature"
                    aria-label={`Explore ${group.title} treatments`}
                  >
                    <div className="care-feature-media">
                      <Image
                        src={group.image}
                        alt={group.imageAlt}
                        width={720}
                        height={440}
                        sizes="(max-width: 760px) 92vw, (max-width: 1023px) 44vw, 22vw"
                      />
                    </div>
                    <div className="care-feature-copy">
                      <span>Explore</span>
                      <strong>{group.title}</strong>
                      <span className="care-feature-arrow" aria-hidden="true">
                        <ArrowUpRightIcon />
                      </span>
                    </div>
                  </Link>
                </article>
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

        <BeforeAfterGallery caseStudies={caseStudies} />

        <section id="doctor" className="doctor-section" aria-labelledby="doctor-heading">
          <div className="page-container doctor-grid">
            <MotionReveal className="doctor-portrait" preset="clip" amount={0.12}>
              <Image
                src="/images/dr-hiteshree-iadvl-optimized.jpg"
                alt="Dr. Hiteshree Shah, dermatologist at Shreemay Skin Clinic"
                width={1000}
                height={936}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
              <div className="doctor-portrait-caption">
                <span>Dermatology and dermatosurgery</span>
                <strong>Care explained with patience.</strong>
              </div>
            </MotionReveal>

            <MotionReveal className="doctor-copy" delay={0.08} amount={0.14}>
              <p className="section-note">Meet your dermatologist</p>
              <h2 id="doctor-heading">Meet Dr. Hiteshree Shah.</h2>
              <p className="doctor-lede">
                Dr. Hiteshree Shah is an MBBS, MD dermatologist focused on skin, hair, nails, vitiligo, laser, cosmetic, and dermatosurgical concerns.
              </p>
              <p>
                Her training includes dermatology at B.J. Medical College, Ahmedabad, clinical experience in Ahmedabad and Vadodara, and observership in dermatosurgery. The clinic keeps the conversation practical so you understand the options and follow-up before treatment starts.
              </p>

              <dl className="credentials-list">
                <div><dt>Qualification</dt><dd>MBBS, MD in Skin &amp; Venereal Disease</dd></div>
                <div><dt>Training</dt><dd>B.J. Medical College, Ahmedabad</dd></div>
                <div><dt>Advanced focus</dt><dd>Observership in Dermatosurgery</dd></div>
              </dl>

              <div className="doctor-evidence" aria-label="Doctor education and experience">
                <div>
                  <h3>Education</h3>
                  <ul>
                    <li>MBBS, Government Medical College, Surat</li>
                    <li>MD Skin, B.J. Medical College, Ahmedabad</li>
                    <li>NEET PG 2017: Gujarat Rank 10</li>
                  </ul>
                </div>
                <div>
                  <h3>Experience</h3>
                  <ul>
                    <li>Junior Resident, B.J. Medical College, Ahmedabad</li>
                    <li>Senior Resident, B.J. Medical College, Ahmedabad</li>
                    <li>Senior Resident, GMERS Gotri Medical College, Vadodara</li>
                  </ul>
                </div>
                <div>
                  <h3>Research &amp; memberships</h3>
                  <ul>
                    <li>Co-author of an IADVL book chapter on immuno-modulators</li>
                    <li>Member of ACSI and IADVL</li>
                    <li>Seminars and observerships in vitiligo surgery, hair transplantation, and acne-scar surgery</li>
                  </ul>
                </div>
              </div>

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

        <InstagramReels />

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
              <h2 id="clinic-heading">Take a look around the clinic.</h2>
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
                <span>Read the clinic listing for current review details</span>
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
                    <div><strong>{review.name}</strong><span>Patient feedback</span></div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>


        <section id="visit" className="visit-section" aria-labelledby="visit-heading">
          <div className="page-container visit-layout">
            <div className="visit-copy">
              <p className="section-note">Visit Shreemay</p>
              <h2 id="visit-heading">Let’s make time for your skin.</h2>
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
                <div><Clock3Icon aria-hidden="true" /><span>{clinicHours[0].days}</span><strong>{clinicHours[0].hours}</strong></div>
                <div><Clock3Icon aria-hidden="true" /><span>{clinicHours[1].days}</span><strong>{clinicHours[1].hours}</strong></div>
                <div><MapPinIcon aria-hidden="true" /><span>{clinicName}</span><strong>{clinicAddress}</strong></div>
              </div>
            </div>

            <MotionReveal className="map-frame" preset="clip" delay={0.08} amount={0.1}>
              <iframe title="Shreemay Skin Clinic location map" src={mapEmbedUrl} loading="lazy" allowFullScreen />
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
            <div><p className="footer-brand-name">{clinicName}</p><p>Skin, hair, laser, cosmetic, and vitiligo care by Dr. Hiteshree Shah in Vadodara.</p></div>
          </div>
          <div className="footer-links">
            <div><span className="footer-label">Explore</span><a href="#care">Treatments</a><a href="#doctor">Dr. Hiteshree Shah</a><a href="#clinic">The clinic</a></div>
            <div><span className="footer-label">Contact</span><a href={phoneHref}>{phoneDisplay}</a><a href={whatsAppHref} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a><address>{clinicAddress}</address></div>
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
