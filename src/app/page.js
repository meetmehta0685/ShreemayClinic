import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  Clock3Icon,
  ExternalLinkIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  ContrastIcon,
  ScanFaceIcon,
  ShieldPlusIcon,
  SnowflakeIcon,
  SparklesIcon,
  StarIcon,
  StethoscopeIcon,
  SunIcon,
  WavesIcon,
  ZapIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BeforeAfterGallery from "@/components/before-after-gallery";
import BookingButton from "@/components/booking-button";
import InstagramReels from "@/components/instagram-reels";
import MotionReveal from "@/components/motion-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  bookingAction,
  clinicAddress,
  clinicHours,
  clinicName,
  doctorProfilePhoto,
  googleMapsHref,
  mapEmbedUrl,
  phoneDisplay,
  phoneHref,
  whatsAppHref,
} from "@/data/clinic";
import { caseStudies } from "@/data/case-studies";
import doctorWelcomeImage from "../../public/images/doctor-welcome.png";

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

const concernCards = [
  { title: "Acne & acne scars", detail: "Understand active acne and discuss suitable next steps for marks or scars.", href: "/treatments/acne-treatment", Icon: ScanFaceIcon, featured: true },
  { title: "Pigmentation & melasma", detail: "Assessment for uneven tone, melasma, and dark spots.", href: "/pigmentation-melasma", Icon: SunIcon, featured: true },
  { title: "Hair fall", detail: "Review the pattern, scalp, history, and treatment options.", href: "/hair-loss", Icon: WavesIcon, featured: true },
  { title: "Dandruff & scalp problems", detail: "Discuss itching, scaling, or other scalp concerns.", href: "/hair", Icon: SnowflakeIcon },
  { title: "Vitiligo", detail: "Assessment and individual follow-up planning.", href: "/treatments/vitiligo-treatment", Icon: ContrastIcon },
  { title: "Skin infections", detail: "Get a diagnosis and practical care plan.", href: "/skin", Icon: ShieldPlusIcon },
  { title: "Laser hair reduction", detail: "Discuss suitability, preparation, and aftercare.", href: "/laser-hair-reduction", Icon: ZapIcon },
  { title: "Skin rejuvenation", detail: "Explore options with a dermatologist after assessment.", href: "/laser-aesthetics", Icon: SparklesIcon },
  { title: "Other skin concerns", detail: "Start with an examination and a clear next step.", href: "/skin", Icon: StethoscopeIcon },
];

const consultationSteps = [
  ["Consultation", "Discuss your concern, medical history, routine, and expectations."],
  ["Examination", "Dr. Hiteshree Shah examines your skin, hair, or scalp."],
  ["Diagnosis & options", "Understand the assessment and appropriate options for your concern."],
  ["Personalised plan", "Leave with next steps and follow-up guidance suited to your situation."],
];

const homepageFaqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer: "An appointment helps you avoid waiting. Call or WhatsApp the clinic to choose a time for your consultation.",
  },
  {
    question: "Which concerns does the clinic treat?",
    answer: "Acne and acne scars, pigmentation and melasma, hair fall and scalp problems, vitiligo, skin infections, laser hair reduction, and cosmetic concerns. Dr. Hiteshree Shah assesses each concern before recommending care.",
  },
  {
    question: "What should I bring to my first visit?",
    answer: "Bring details of your skin or hair routine and any previous products or treatments, so the doctor can assess the concern.",
  },
  {
    question: "How long does a dermatology consultation take?",
    answer: "Consultation time can vary by concern. Call the clinic when booking if you need an estimate for your visit.",
  },
];

const clinicPhotos = [
  { src: "/images/reception.jpg", alt: "Reception desk at Shreemay Skin Clinic", label: "Reception", width: 1024, height: 768 },
  { src: "/images/consult-desk.png", alt: "Consultation room at Shreemay Skin Clinic", label: "Consultation room", width: 765, height: 1020 },
  { src: "/images/treatment-area.png", alt: "Waiting area at Shreemay Skin Clinic", label: "Waiting area", width: 765, height: 1020 },
  { src: "/images/signage.jpg", alt: "Shreemay Skin Clinic signage at Ananya Complex", label: "Clinic signage", width: 1024, height: 894 },
];

export default function Home() {
  return (
    <div className="home-page">
      <SiteHeader phoneHref={phoneHref} />

      <main id="top" tabIndex="-1">
        <section className="welcome" aria-labelledby="hero-heading">
          <div className="welcome-copy">
            <h1 id="hero-heading">Skin &amp; hair care in Vadodara</h1>
            <p className="welcome-lede">
              Consult Dr. Hiteshree Shah, MBBS, MD (Dermatology), for personalised care for skin, hair, vitiligo, and aesthetic concerns.
            </p>
            <div className="welcome-actions">
              <BookingButton className="welcome-book" />
              <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" className="welcome-call">
                <MessageCircleIcon aria-hidden="true" />
                WhatsApp us
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
            </div>
            <a className="welcome-location" href={googleMapsHref} target="_blank" rel="noopener noreferrer">
              <MapPinIcon aria-hidden="true" />
              Akshar Chowk, Vadodara
            </a>
          </div>

          <figure className="welcome-portrait">
            <Image
              src={doctorWelcomeImage}
              alt="Dr. Hiteshree Shah, dermatologist at Shreemay Skin Clinic"
              placeholder="blur"
              priority
              sizes="(max-width: 767px) 100vw, 40vw"
            />
            <figcaption>
              <strong>Dr. Hiteshree Shah</strong>
              <span>MBBS, MD (Dermatology)</span>
            </figcaption>
          </figure>
        </section>

        <section className="trust-strip" aria-label="Clinic credentials and patient rating">
          <div className="page-container trust-strip-inner">
            <div><strong>MBBS, MD (Dermatology)</strong><span>B.J. Medical College, Ahmedabad</span></div>
            <div><strong>Gujarat Rank 10</strong><span>NEET PG 2017</span></div>
            <div><strong>Dermatology expertise</strong><span>Skin · Hair · Vitiligo · Aesthetics</span></div>
            <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" aria-label="Read Shreemay Skin Clinic Google reviews">
              <strong><span className="trust-rating">4.9 <span aria-hidden="true">★★★★★</span></span></strong>
              <span>Google Reviews</span>
            </a>
          </div>
        </section>

        <nav id="care" className="care-directory" aria-label="Find care by concern">
          <div className="directory-inner">
            <h2>Explore treatments</h2>
            <Link href="/skin">
              <strong>Skin</strong><span>Acne · pigmentation · infections</span><ArrowUpRightIcon aria-hidden="true" />
            </Link>
            <Link href="/hair">
              <strong>Hair &amp; scalp</strong><span>Hair fall · dandruff · scalp concerns</span><ArrowUpRightIcon aria-hidden="true" />
            </Link>
            <Link href="/dermatosurgery">
              <strong>Dermatosurgery</strong><span>Skin lesions · scars · vitiligo care</span><ArrowUpRightIcon aria-hidden="true" />
            </Link>
            <Link href="/laser-aesthetics">
              <strong>Laser &amp; aesthetics</strong><span>Laser · cosmetic care · skin renewal</span><ArrowUpRightIcon aria-hidden="true" />
            </Link>
          </div>
        </nav>

        <section className="popular-concerns" aria-labelledby="popular-concerns-heading">
          <div className="page-container">
            <div className="popular-heading">
              <div>
                <h2 id="popular-concerns-heading">Find care for your concern</h2>
              </div>
              <p>Choose a concern to see what to discuss with the dermatologist and how a consultation can help clarify next steps.</p>
            </div>
            <div className="concern-grid">
              {concernCards.map(({ Icon, ...concern }) => (
                <Link className={"concern-link" + (concern.featured ? " concern-link-featured" : "")} href={concern.href} key={concern.title}>
                  <span className="concern-icon"><Icon aria-hidden="true" /></span>
                  <strong>{concern.title}</strong>
                  <span>{concern.detail}</span>
                  <ArrowUpRightIcon aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="doctor" className="doctor-section" aria-labelledby="doctor-heading">
          <div className="page-container doctor-grid">
            <MotionReveal className="doctor-portrait" preset="clip" amount={0.12}>
              <Image
                src={doctorProfilePhoto.src}
                alt="Dr. Hiteshree Shah, dermatologist at Shreemay Skin Clinic"
                width={doctorProfilePhoto.width}
                height={doctorProfilePhoto.height}
                sizes="(max-width: 900px) 100vw, 44vw"
              />
              <div className="doctor-portrait-caption">
                <strong>Dr. Hiteshree Shah</strong>
                <span>MBBS, MD (Dermatology)</span>
              </div>
            </MotionReveal>

            <MotionReveal className="doctor-copy" delay={0.08} amount={0.14}>
              <h2 id="doctor-heading">Meet Dr. Hiteshree Shah</h2>
              <p className="doctor-subtitle">MBBS, MD (Dermatology) · Dermatologist in Vadodara</p>
              <p className="doctor-lede">
                Dr. Hiteshree Shah focuses on skin, hair, nails, vitiligo, laser, cosmetic, and dermatosurgical concerns.
              </p>
              <p>
                Her training includes dermatology at B.J. Medical College, Ahmedabad, clinical experience in Ahmedabad and Vadodara, and an observership in dermatosurgery. Consultations focus on understanding the concern and explaining options and follow-up.
              </p>

              <dl className="credentials-list">
                <div><dt>Qualification</dt><dd>MBBS, MD (Skin &amp; Venereal Disease)</dd></div>
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
                <Link href="/about-dr-hiteshree-shah" className={buttonVariants({ variant: "link", size: "lg" })}>
                  View complete profile<ArrowUpRightIcon data-icon="inline-end" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>

        <BeforeAfterGallery
          caseStudies={caseStudies}
          heading="Before &amp; follow-up"
          intro="Clinical photographs are shared for educational purposes. Individual results vary depending on diagnosis, care, and response."
        />

        <section className="process-section" aria-labelledby="process-heading">
          <div className="page-container process-layout">
            <div className="process-intro">
              <h2 id="process-heading">Your first visit</h2>
              <p>Every skin and hair concern is different. Dr. Hiteshree Shah begins with a detailed consultation and examination before recommending a plan suited to your needs.</p>
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
              <h2 id="clinic-heading">Inside the clinic</h2>
            </div>
            <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>
              <MapPinIcon data-icon="inline-start" />
              Get directions
            </a>
          </div>

          <div className="clinic-gallery">
            {clinicPhotos.map((photo, index) => (
              <MotionReveal className={index === 0 ? "clinic-image clinic-image-wide" : "clinic-image"} preset="clip" delay={index * 0.04} amount={0.08} key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 767px) 100vw, 25vw" />
                <span>{photo.label}</span>
              </MotionReveal>
            ))}
          </div>
          <p className="page-container clinic-caption">Located at Ananya Complex, near Akshar Chowk, Vadodara.</p>
        </section>

        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="page-container faq-layout">
            <div className="faq-intro">
              <h2 id="faq-heading">Before you visit</h2>
              <p>Find practical details about appointments, care options, and visiting the clinic.</p>
            </div>
            <div className="faq-list">
              {homepageFaqs.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}<span aria-hidden="true">+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews-section" aria-labelledby="reviews-heading">
          <div className="page-container reviews-layout">
            <div className="reviews-intro">
              <h2 id="reviews-heading">What our patients say</h2>
              <div className="reviews-rating">
                <StarIcon aria-hidden="true" />
                <strong>4.9 ★★★★★ on Google</strong>
                <span>Read verified patient reviews about their experience at Shreemay Skin Clinic.</span>
              </div>
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                Read Google reviews<ExternalLinkIcon data-icon="inline-end" />
              </a>
            </div>

            <div className="reviews-list">
              {reviews.map((review, index) => (
                <MotionReveal key={review.name} className="review-item" delay={index * 0.04} amount={0.14}>
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

        <InstagramReels />

        <section id="visit" className="visit-section final-cta" aria-labelledby="visit-heading">
          <div className="page-container visit-layout">
            <div className="visit-copy">
              <h2 id="visit-heading">Visit Shreemay Skin Clinic</h2>
              <p>Contact Dr. Hiteshree Shah’s clinic in Vadodara by phone or WhatsApp.</p>

              <div className="visit-actions">
                {bookingAction.live ? <BookingButton className={buttonVariants({ size: "lg" })} /> : null}
                <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  <MessageCircleIcon data-icon="inline-start" />WhatsApp us
                </a>
                <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
                  <PhoneIcon data-icon="inline-start" />Call {phoneDisplay}
                </a>
              </div>

              <div className="visit-meta">
                {clinicHours.map((item) => (
                  <div key={item.days}><Clock3Icon aria-hidden="true" /><span>{item.days}</span><strong>{item.hours}</strong></div>
                ))}
                <div><MapPinIcon aria-hidden="true" /><span>{clinicName}</span><strong>{clinicAddress}</strong></div>
              </div>
            </div>

            <MotionReveal className="map-frame" preset="clip" delay={0.08} amount={0.1}>
              <iframe
                src={mapEmbedUrl}
                title="Google Maps location for Shreemay Skin Clinic in Vadodara"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="directions-caption"><h3>Visit us near Akshar Chowk</h3><p>Shop No. 8, 1st Floor, Ananya Complex, O.P. Road, Vadodara.</p></div>
              <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className="map-link">
                <MapPinIcon aria-hidden="true" />Open in Google Maps<ArrowUpRightIcon aria-hidden="true" />
              </a>
            </MotionReveal>
          </div>
        </section>
      </main>

      <SiteFooter />

      <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with Shreemay Skin Clinic on WhatsApp" className="floating-contact">
        <MessageCircleIcon aria-hidden="true" /><span>WhatsApp</span>
      </a>
    </div>
  );
}
