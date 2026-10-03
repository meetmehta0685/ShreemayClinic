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
  StarIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import InstagramReels from "@/components/InstagramReels";
import MotionReveal from "@/components/motion-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/SiteHeader";
import {
  bookingUrl,
  clinicAddress,
  clinicHours,
  clinicName,
  googleMapsHref,
  phoneDisplay,
  phoneHref,
  whatsAppHref,
} from "@/data/clinic";
import { caseStudies } from "@/data/case-studies";

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
  { title: "Acne & pimples", detail: "Understand active acne and discuss suitable next steps.", href: "/treatments/acne-treatment" },
  { title: "Pigmentation & melasma", detail: "Assessment for uneven tone, melasma, and dark spots.", href: "/pigmentation-melasma" },
  { title: "Hair fall", detail: "Review the pattern, scalp, history, and treatment options.", href: "/hair-loss" },
  { title: "Dandruff & scalp problems", detail: "Discuss itching, scaling, or other scalp concerns.", href: "/hair" },
  { title: "Vitiligo", detail: "Assessment and individual follow-up planning.", href: "/treatments/vitiligo-treatment" },
  { title: "Skin infections", detail: "Get a diagnosis and practical care plan.", href: "/skin" },
  { title: "Laser hair reduction", detail: "Discuss suitability, preparation, and aftercare.", href: "/laser-hair-reduction" },
  { title: "Skin rejuvenation", detail: "Explore options with a dermatologist after assessment.", href: "/laser-aesthetics" },
  { title: "Other skin concerns", detail: "Start with an examination and a clear next step.", href: "/skin" },
];

const whyItems = [
  {
    title: "Doctor-led care",
    body: "Every care plan begins with a consultation and clinical assessment.",
  },
  {
    title: "Personalised options",
    body: "Recommendations reflect your concern, skin or hair history, and individual needs.",
  },
  {
    title: "Clear communication",
    body: "Understand the diagnosis, available options, and follow-up before you begin.",
  },
  {
    title: "A comfortable clinic",
    body: "Meet the team in a calm, professional setting in Vadodara.",
  },
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
    answer: "Booking online is available through the clinic’s appointment calendar. You can also call or WhatsApp the clinic if you need help planning your visit.",
  },
  {
    question: "What are the clinic timings?",
    answer: "Monday to Saturday, 10 AM–2 PM and 5 PM–8 PM. The clinic is closed on Sunday.",
  },
  {
    question: "Where is Shreemay Skin Clinic?",
    answer: "The clinic is at Shop No. 8, 1st Floor, Ananya Complex, Akshar Chowk, O.P. Road, Vadodara.",
  },
  {
    question: "Does the clinic treat hair fall?",
    answer: "Yes. Hair fall, thinning, dandruff, and scalp concerns can be discussed with Dr. Hiteshree Shah.",
  },
  {
    question: "Can I book a consultation for acne?",
    answer: "Yes. The doctor can assess active acne and discuss suitable care after reviewing your skin and history.",
  },
  {
    question: "Are laser treatments available?",
    answer: "Laser hair reduction and other cosmetic or laser options can be discussed during a consultation.",
  },
  {
    question: "Does the clinic provide vitiligo care?",
    answer: "Yes. The clinic offers assessment, treatment planning, and follow-up conversations for vitiligo.",
  },
  {
    question: "Can I consult for pigmentation or melasma?",
    answer: "Yes. Bring details of your routine and previous products or treatments so the doctor can assess the concern.",
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
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />

      <main id="top" tabIndex="-1">
        <section className="welcome" aria-labelledby="hero-heading">
          <div className="welcome-copy">
            <h1 id="hero-heading">Skin &amp; hair care in Vadodara</h1>
            <p className="welcome-lede">
              Consult Dr. Hiteshree Shah, MBBS, MD (Dermatology), for personalised care for skin, hair, vitiligo, and aesthetic concerns.
            </p>
            <div className="welcome-actions">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="welcome-book">
                <CalendarDaysIcon aria-hidden="true" />
                Book an appointment
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
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
              src="/images/doctor-welcome.png"
              alt="Dr. Hiteshree Shah, dermatologist at Shreemay Skin Clinic"
              width={1000}
              height={936}
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

        <section className="welcome-conversation page-container" aria-labelledby="conversation-heading">
          <div>
            <h2 id="conversation-heading">Care that starts with you</h2>
            <p>
              Every skin and hair concern is different. Dr. Hiteshree Shah begins with a detailed consultation and examination before recommending a plan suited to your needs.
            </p>
            <p>
              From everyday skin concerns to hair loss, vitiligo, and aesthetic care, the focus is on appropriate options, realistic expectations, and proper follow-up.
            </p>
            <Link className="text-link" href="/about-dr-hiteshree-shah">
              Meet Dr. Hiteshree Shah<ArrowUpRightIcon aria-hidden="true" />
            </Link>
          </div>
          <Image
            src="/images/reception-welcome.png"
            alt="Reception at Shreemay Skin Clinic"
            width={1024}
            height={768}
            sizes="(max-width: 767px) 100vw, 40vw"
          />
        </section>

        <section className="popular-concerns" aria-labelledby="popular-concerns-heading">
          <div className="page-container">
            <div className="popular-heading">
              <div>
                <h2 id="popular-concerns-heading">Find care for your concern</h2>
              </div>
              <p>Choose a concern to see what to discuss with the dermatologist and how a consultation can help clarify next steps.</p>
            </div>
            <div className="concern-grid">
              {concernCards.map((concern) => (
                <Link className="concern-link" href={concern.href} key={concern.title}>
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
                src="/images/dr-hiteshree-iadvl-optimized.jpg"
                alt="Dr. Hiteshree Shah, dermatologist at Shreemay Skin Clinic"
                width={1000}
                height={936}
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
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  Book an appointment<ArrowUpRightIcon data-icon="inline-end" />
                </a>
                <Link href="/about-dr-hiteshree-shah" className={buttonVariants({ variant: "link", size: "lg" })}>
                  View complete profile<ArrowUpRightIcon data-icon="inline-end" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="why-section" aria-labelledby="why-heading">
          <div className="page-container why-layout">
            <div className="why-intro">
              <h2 id="why-heading">Why choose Shreemay?</h2>
              <p>Care begins with a conversation, a clear assessment, and a plan that fits the person in front of the doctor.</p>
            </div>
            <div className="why-list">
              {whyItems.map((item) => (
                <article className="why-item" key={item.title}>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </article>
              ))}
            </div>
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
              <p>Know what happens next before you book a consultation.</p>
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
              <h2 id="visit-heading">Book your visit</h2>
              <p>Book an appointment with Dr. Hiteshree Shah at Shreemay Skin Clinic, Vadodara.</p>

              <div className="visit-actions">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  <CalendarDaysIcon data-icon="inline-start" />Book an appointment<ArrowUpRightIcon data-icon="inline-end" />
                </a>
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
              <Image src="/images/consult-desk.png" alt="Consultation room at Shreemay Skin Clinic" width={765} height={1020} sizes="(max-width: 1023px) 100vw, 45vw" />
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
