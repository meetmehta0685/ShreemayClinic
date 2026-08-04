import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CheckIcon,
  Clock3Icon,
  ExternalLinkIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  StethoscopeIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
const googleMapsHref =
  "https://share.google/de3czsbRXeYyanmER";
const instagramHref = "https://www.instagram.com/dr_hiteshreeshah_mddermat/";

const careGroups = [
  {
    title: "Skin",
    description: "Acne, marks, texture, infections, and recurrent skin concerns.",
    treatmentSlugs: ["acne-treatment", "chemical-peeling"],
  },
  {
    title: "Hair",
    description: "Hair fall, scalp health, dandruff, and alopecia evaluation.",
    treatmentSlugs: ["hair-fall-treatment"],
  },
  {
    title: "Laser & cosmetic",
    description: "Doctor-guided planning for laser, PRP, and skin rejuvenation.",
    treatmentSlugs: ["laser-hair-removal", "prp-therapy"],
  },
  {
    title: "Surgical",
    description: "Vitiligo care and procedure planning with clinical follow-up.",
    treatmentSlugs: ["vitiligo-treatment"],
  },
];

const reviews = [
  {
    initials: "JN",
    name: "Jaydeep Nakum",
    quote:
      "I visited Shreemay Skin Clinic for my daughter’s eye vitiligo treatment. The results are amazing. Dr. Hiteshree ma’am is extremely kind and patient.",
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

function getTreatment(slug) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export default function Home() {
  return (
    <>
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />
      <AnnouncementBar />

      <main id="top" tabIndex="-1">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="page-container hero-grid">
            <MotionReveal className="hero-copy" preset="rise">
              <h1 id="hero-heading">Dermatology care, recorded clearly.</h1>
              <p className="hero-lede">
                A thoughtful starting point for skin, hair, laser, and vitiligo concerns in Vadodara — led by Dr. Hiteshree Shah.
              </p>
              <div className="hero-context-row">
                <Badge variant="secondary">Shreemay Clinic · Vadodara</Badge>
                <span>MBBS, MD Dermatology</span>
              </div>
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
                  WhatsApp the clinic
                </a>
              </div>
              <div className="hero-assurance">
                <ShieldCheckIcon aria-hidden="true" />
                <span>Understand the plan before treatment begins.</span>
              </div>
              <dl className="hero-facts" aria-label="Clinic proof points">
                <div>
                  <dt>4.9</dt>
                  <dd>Google rating</dd>
                </div>
                <div>
                  <dt>390+</dt>
                  <dd>patient reviews</dd>
                </div>
                <div>
                  <dt>MD</dt>
                  <dd>dermatology</dd>
                </div>
              </dl>
            </MotionReveal>

            <MotionReveal className="hero-record-motion" preset="clip" delay={0.08} amount={0.12}>
              <Card className="hero-record-card">
              <CardHeader className="hero-record-header">
                <div>
                  <CardTitle>Clinical note</CardTitle>
                  <CardDescription>Doctor-led care at Akshar Chowk.</CardDescription>
                </div>
                <CardAction>
                  <Badge variant="outline">Open for consultation</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="hero-record-media">
                <Image
                  src="/images/dr-hiteshree-iadvl-optimized.jpg"
                  alt="Dr. Hiteshree Shah, dermatologist at Shreemay Clinic Vadodara"
                  width={1228}
                  height={1150}
                  priority
                  sizes="(max-width: 1023px) 92vw, 46vw"
                  className="hero-record-image"
                />
                <div className="hero-record-caption">
                  <span>01 / consultation</span>
                  <strong>Listen first. Treat with clarity.</strong>
                </div>
              </CardContent>
              <CardFooter className="hero-record-footer">
                <div className="hero-doctor-line">
                  <Avatar size="sm">
                    <AvatarFallback>HS</AvatarFallback>
                  </Avatar>
                  <span>Dr. Hiteshree Shah</span>
                </div>
                <span className="hero-record-location">Vadodara, Gujarat</span>
              </CardFooter>
              </Card>
            </MotionReveal>
          </div>
        </section>

        <section id="care" className="care-section" aria-labelledby="care-heading">
          <div className="page-container">
            <div className="section-heading section-heading-split">
              <div>
                <h2 id="care-heading">Find your starting point.</h2>
                <p>
                  Browse by the concern you came in with. Each path opens with a dermatologist consultation and a plan shaped around you.
                </p>
              </div>
              <Badge variant="outline">Six focused pathways</Badge>
            </div>

            <div className="care-layout">
              <MotionReveal className="care-lead-motion" delay={0.04} amount={0.12}>
                <Card className="care-lead-card">
                <CardHeader>
                  <Badge variant="secondary" className="care-lead-badge">
                    <StethoscopeIcon data-icon="inline-start" />
                    The first step
                  </Badge>
                  <CardTitle>Start with the concern, not a package.</CardTitle>
                  <CardDescription>
                    Tell us what has changed, what you have tried, and what you want to understand. The consultation sets the right next step.
                  </CardDescription>
                </CardHeader>
                <CardContent className="care-lead-media">
                  <Image
                    src="/images/doctor-hero.png"
                    alt="Dr. Hiteshree Shah at the consultation desk"
                    width={454}
                    height={394}
                    sizes="(max-width: 1023px) 92vw, 42vw"
                  />
                  <div className="care-lead-note">
                    <CheckIcon aria-hidden="true" />
                    <span>Clear diagnosis before a treatment path.</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="#visit" className={buttonVariants({ variant: "outline", size: "sm" })}>
                    See how to visit
                    <ArrowRightIcon data-icon="inline-end" />
                  </a>
                </CardFooter>
                </Card>
              </MotionReveal>

              <div className="care-groups">
                {careGroups.map((group, index) => (
                  <MotionReveal key={group.title} className="care-group-motion" delay={0.1 + index * 0.05} amount={0.14}>
                    <Card className="care-group-card">
                    <CardHeader>
                      <CardTitle>{group.title}</CardTitle>
                      <CardDescription>{group.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="care-list">
                      {group.treatmentSlugs.map((slug) => {
                        const treatment = getTreatment(slug);
                        return (
                          <Link key={slug} href={`/treatments/${slug}`} className="care-list-link">
                            <span>{treatment.shortTitle}</span>
                            <ArrowUpRightIcon aria-hidden="true" />
                          </Link>
                        );
                      })}
                    </CardContent>
                    </Card>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="doctor" className="doctor-section" aria-labelledby="doctor-heading">
          <div className="page-container doctor-grid">
            <div className="doctor-image-frame">
              <MotionReveal className="doctor-image-motion" preset="clip" amount={0.18}>
                <Image
                  src="/images/dr-hiteshree-profile-card.png"
                  alt="Dr. Hiteshree Shah, MD Dermatology"
                  width={447}
                  height={447}
                  sizes="(max-width: 1023px) 92vw, 38vw"
                  className="doctor-image"
                />
              </MotionReveal>
              <Badge variant="secondary" className="doctor-image-label">
                Dr. Hiteshree Shah
              </Badge>
            </div>

            <MotionReveal className="doctor-copy" delay={0.08} amount={0.16}>
              <h2 id="doctor-heading">A doctor who explains before she treats.</h2>
              <p className="doctor-lede">
                Dr. Hiteshree Shah is an MBBS, MD dermatologist with a fellowship in dermatosurgery, caring for skin, hair, nails, vitiligo, and cosmetic concerns.
              </p>
              <p>
                From acne and dandruff to more complex and chronic conditions, the clinic keeps the conversation clear: what is happening, what the options are, and what follow-up may look like.
              </p>

              <Card className="credential-card">
                <CardHeader>
                  <CardTitle>Credentials & focus</CardTitle>
                  <CardDescription>Clinical experience across skin, hair, laser, and surgical care.</CardDescription>
                </CardHeader>
                <CardContent className="credential-list">
                  <div>
                    <span>Qualification</span>
                    <strong>MBBS, MD (Skin &amp; Venereal Disease)</strong>
                  </div>
                  <Separator />
                  <div>
                    <span>Training</span>
                    <strong>B.J. Medical College, Ahmedabad · Fellowship in Dermatosurgery</strong>
                  </div>
                </CardContent>
              </Card>

              <div className="doctor-actions">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  Meet with Dr. Shah
                  <ArrowUpRightIcon data-icon="inline-end" />
                </a>
                <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "link", size: "lg" })}>
                  Find the clinic on Maps
                  <ExternalLinkIcon data-icon="inline-end" />
                </a>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="process-section" aria-labelledby="process-heading">
          <div className="page-container">
            <MotionReveal className="section-heading process-heading" amount={0.24}>
              <h2 id="process-heading">A consultation has a simple rhythm.</h2>
              <p>From booking to follow-up, know what the visit is for before you arrive.</p>
            </MotionReveal>
            <div className="process-list">
              <div className="process-item">
                <span className="process-index">01</span>
                <div>
                  <h3>Book a time</h3>
                  <p>Choose online booking, WhatsApp, or a direct call.</p>
                </div>
              </div>
              <Separator />
              <div className="process-item">
                <span className="process-index">02</span>
                <div>
                  <h3>Talk through the concern</h3>
                  <p>Discuss symptoms, history, routine, and what you want to change.</p>
                </div>
              </div>
              <Separator />
              <div className="process-item">
                <span className="process-index">03</span>
                <div>
                  <h3>Get a clear care path</h3>
                  <p>Understand the diagnosis and recommended next steps.</p>
                </div>
              </div>
              <Separator />
              <div className="process-item">
                <span className="process-index">04</span>
                <div>
                  <h3>Continue with guidance</h3>
                  <p>Leave with aftercare, progress checks, and maintenance advice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clinic" className="clinic-section" aria-labelledby="clinic-heading">
          <div className="page-container">
            <div className="section-heading section-heading-split">
              <div>
                <h2 id="clinic-heading">A calm place to arrive.</h2>
              <p>See the reception, consultation desk, and waiting room at Shreemay Skin Clinic.</p>
              </div>
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                <MapPinIcon data-icon="inline-start" />
                Akshar Chowk, Vadodara
              </a>
            </div>
            <div className="clinic-gallery">
              <MotionReveal className="clinic-gallery-motion" preset="clip" amount={0.1}>
                <figure className="clinic-gallery-item">
                  <Image src="/images/reception.jpg" alt="Reception desk at Shreemay Skin Clinic" width={1024} height={768} sizes="(max-width: 720px) 92vw, 36vw" />
                  <figcaption>Reception</figcaption>
                </figure>
              </MotionReveal>
              <MotionReveal className="clinic-gallery-motion" preset="clip" delay={0.06} amount={0.1}>
                <figure className="clinic-gallery-item">
                  <Image src="/images/consult-desk.png" alt="Consultation desk at Shreemay Skin Clinic" width={765} height={1020} sizes="(max-width: 720px) 92vw, 27vw" loading="eager" />
                  <figcaption>Consultation</figcaption>
                </figure>
              </MotionReveal>
              <MotionReveal className="clinic-gallery-motion" preset="clip" delay={0.12} amount={0.1}>
                <figure className="clinic-gallery-item">
                  <Image src="/images/treatment-area.png" alt="Waiting room at Shreemay Skin Clinic" width={765} height={1020} sizes="(max-width: 720px) 92vw, 27vw" />
                  <figcaption>Waiting room</figcaption>
                </figure>
              </MotionReveal>
            </div>
          </div>
        </section>

        <InstagramReels />

        <section id="reviews" className="reviews-section" aria-labelledby="reviews-heading">
          <div className="page-container">
            <div className="section-heading section-heading-split reviews-heading">
              <div>
                <h2 id="reviews-heading">Patient notes, in their own words.</h2>
                <p>Real experiences shared by patients of Shreemay Clinic, Vadodara.</p>
              </div>
              <div className="reviews-rating">
                <StarIcon aria-hidden="true" />
                <strong>4.9 on Google</strong>
                <span>390+ reviews</span>
              </div>
            </div>

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <MotionReveal key={review.name} className="review-motion" delay={index * 0.06} amount={0.16}>
                  <Card className="review-card">
                  <CardHeader>
                    <div className="review-author">
                      <Avatar>
                        <AvatarFallback>{review.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{review.name}</CardTitle>
                        <CardDescription>Google review</CardDescription>
                      </div>
                    </div>
                    <CardAction>
                      <Badge variant="outline">Patient note</Badge>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <blockquote>“{review.quote}”</blockquote>
                  </CardContent>
                  </Card>
                </MotionReveal>
              ))}
            </div>
            <div className="section-action-row">
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Read more on Google Maps
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </div>
          </div>
        </section>

        <section id="visit" className="visit-section" aria-labelledby="visit-heading">
          <div className="page-container">
            <div className="section-heading">
              <h2 id="visit-heading">Make the next step easy.</h2>
              <p>Book online, call, or message the clinic. We are at Akshar Chowk on Old Padra Road.</p>
            </div>

            <div className="visit-grid">
              <MotionReveal className="visit-motion" amount={0.14}>
                <Card className="visit-card">
                <CardHeader>
                  <Badge variant="secondary" className="visit-card-badge">
                    <Clock3Icon data-icon="inline-start" />
                    Clinic hours
                  </Badge>
                  <CardTitle>Visit Shreemay Skin Clinic.</CardTitle>
                  <CardDescription>Shop No. 8, 1st Floor, Ananya Complex, Old Padra Road, Akshar Chowk, Tandalja, Vadodara, Gujarat 390012.</CardDescription>
                </CardHeader>
                <CardContent className="visit-details">
                  <div className="visit-detail-row">
                    <span>Monday – Saturday</span>
                    <strong>10:00 AM – 2:00 PM<br />5:00 PM – 8:00 PM</strong>
                  </div>
                  <Separator />
                  <div className="visit-detail-row">
                    <span>Sunday</span>
                    <strong>Closed</strong>
                  </div>
                </CardContent>
                <CardFooter className="visit-card-footer">
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                    <CalendarDaysIcon data-icon="inline-start" />
                    Book online
                  </a>
                  <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
                    <PhoneIcon data-icon="inline-start" />
                    Call
                  </a>
                  <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                    <MessageCircleIcon data-icon="inline-start" />
                    WhatsApp
                  </a>
                </CardFooter>
                </Card>
              </MotionReveal>

              <MotionReveal className="visit-motion" preset="clip" delay={0.08} amount={0.14}>
                <div className="map-frame">
                <iframe
                  title="Shreemay Skin Clinic location map"
                  src="https://www.google.com/maps?q=Shreemay+Clinic+Vadodara&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="map-label">
                  <MapPinIcon aria-hidden="true" />
                  <span>Akshar Chowk · Vadodara</span>
                </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container">
          <div className="footer-main">
            <div className="footer-brand">
              <Image src="/images/logo.png" alt="Shreemay Skin Clinic logo" width={64} height={64} />
              <div>
                <p className="footer-brand-name">Shreemay Skin Clinic</p>
                <p>Skin, hair, laser, and vitiligo care by Dr. Hiteshree Shah in Vadodara.</p>
              </div>
            </div>
            <div className="footer-links">
              <div>
                <span className="footer-label">Explore</span>
                <a href="#care">Care index</a>
                <a href="#doctor">Doctor</a>
                <a href="#clinic">The clinic</a>
              </div>
              <div>
                <span className="footer-label">Connect</span>
                <a href={phoneHref}>78619 51664</a>
                <a href={whatsAppHref} target="_blank" rel="noopener noreferrer">WhatsApp the clinic</a>
                <a href={instagramHref} target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
          <Separator />
          <div className="footer-bottom">
            <span>Shreemay Skin Clinic · Vadodara</span>
            <div>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book an appointment</a>
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer">Google Maps</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shreemay Skin Clinic on WhatsApp"
        className="floating-contact"
      >
        <MessageCircleIcon aria-hidden="true" />
      </a>
    </>
  );
}
