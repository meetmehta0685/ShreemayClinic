import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon, CalendarDaysIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
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
import { getServiceGroup, treatments } from "@/data/treatments";

const categoryRoutes = {
  skin: "skin",
  hair: "hair",
  "laser-aesthetics": "cosmetic-laser",
  dermatosurgery: "dermatosurgery-vitiligo",
};

const aliases = {
  "acne-treatment": "/treatments/acne-treatment",
  "pigmentation-melasma": "/treatments/pigmentation-melasma",
  "hair-loss": "/treatments/hair-fall-treatment",
  "laser-hair-reduction": "/treatments/laser-hair-removal",
};

const staticPages = ["about-dr-hiteshree-shah", "clinic", "contact"];

export function generateStaticParams() {
  return [
    ...Object.keys(categoryRoutes),
    ...Object.keys(aliases),
    ...staticPages,
  ].map((page) => ({ page }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { page } = await params;
  const groupSlug = categoryRoutes[page];
  const group = groupSlug ? getServiceGroup(groupSlug) : null;

  if (group) {
    return {
      title: `${group.title} Care in Vadodara | ${clinicName}`,
      description: `${group.description} Explore treatments and consultation-first next steps at ${clinicName}.`,
      alternates: { canonical: `/${page}` },
      openGraph: { title: `${group.title} Care in Vadodara | ${clinicName}`, description: group.description, images: [{ url: group.image, alt: group.imageAlt }] },
    };
  }

  const pageMetadata = {
    "about-dr-hiteshree-shah": {
      title: "Dr. Hiteshree Shah | Dermatologist in Vadodara | Shreemay Skin Clinic",
      description: "Meet Dr. Hiteshree Shah, MBBS, MD (Skin & Venereal Disease), dermatologist at Shreemay Skin Clinic, Vadodara.",
    },
    clinic: {
      title: "Visit Shreemay Skin Clinic | Vadodara",
      description: "Find Shreemay Skin Clinic at Ananya Complex, near Akshar Chowk, O.P. Road, Vadodara. View clinic photos, hours, and directions.",
    },
    contact: {
      title: "Contact Shreemay Skin Clinic | Book an Appointment",
      description: "Call, WhatsApp, or book an appointment with Shreemay Skin Clinic, Akshar Chowk, Vadodara.",
    },
  };

  const entry = pageMetadata[page];
  return entry ? { ...entry, alternates: { canonical: `/${page}` } } : {};
}

function CategoryPage({ group }) {
  return (
    <>
      <section className="content-hero">
        <div className="page-container content-hero-inner">
          <Link className="content-back-link" href="/treatments"><ArrowLeftIcon aria-hidden="true" /> All treatments</Link>

          <h1>{group.title} care in Vadodara</h1>
          <p>{group.description}</p>
        </div>
      </section>
      <section className="content-section" aria-labelledby="category-treatments-heading">
        <div className="page-container">
          <div className="content-heading">
            <h2 id="category-treatments-heading">Explore {group.title.toLowerCase()} care</h2>
            <p>Each page explains what the concern may involve and what to discuss during a consultation.</p>
          </div>
          <div className="treatment-directory-list">
            {group.slugs.map((slug) => {
              const treatment = treatments.find((item) => item.slug === slug);
              if (!treatment) return null;
              return (
                <Link href={`/treatments/${treatment.slug}`} className="treatment-directory-item" key={treatment.slug}>
                  <div><h3>{treatment.shortTitle}</h3><p>{treatment.description}</p></div>
                  <ArrowUpRightIcon aria-hidden="true" />
                </Link>
              );
            })}
          </div>
          {group.options?.length > 0 && (
            <div className="category-options">
              <div><h2>{group.optionsTitle || "More care options"}</h2><p>The dermatologist will explain suitability, preparation, and aftercare before treatment.</p></div>
              <ul>{group.options.map((option) => <li key={option.title}>
                    <h3>{option.href ? <Link href={option.href}>{option.title}</Link> : option.title}</h3>
                    <p>{option.description}</p>
                  </li>)}</ul>
            </div>
          )}
          <div className="content-cta-row">
            <span>Not sure which care area fits?</span>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
              <CalendarDaysIcon data-icon="inline-start" />Book an appointment<ArrowUpRightIcon data-icon="inline-end" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutDoctorPage() {
  return (
    <>
      <section className="content-hero">
        <div className="page-container content-hero-inner">

          <h1>Dr. Hiteshree Shah</h1>
          <p>MBBS, MD (Dermatology) · Dermatologist in Vadodara</p>
        </div>
      </section>
      <section className="content-section">
        <div className="page-container profile-layout">
          <figure className="profile-photo">
            <Image src="/images/dr-hiteshree-iadvl-optimized.jpg" alt="Dr. Hiteshree Shah at Shreemay Skin Clinic" width={1000} height={936} sizes="(max-width: 767px) 100vw, 40vw" />
            <figcaption>Dr. Hiteshree Shah · Dermatologist</figcaption>
          </figure>
          <div className="profile-copy">

            <h2>Meet your dermatologist</h2>
            <p>Dr. Hiteshree Shah provides dermatologist-led assessment for skin, hair, nail, vitiligo, laser, cosmetic, and dermatosurgical concerns at Shreemay Skin Clinic.</p>
            <p>Her training includes dermatology at B.J. Medical College, Ahmedabad, clinical experience in Ahmedabad and Vadodara, and an observership in dermatosurgery. Consultations focus on understanding the concern and explaining options and follow-up.</p>
            <dl className="profile-facts">
              <div><dt>Medical qualification</dt><dd>MBBS, MD (Skin &amp; Venereal Disease)</dd></div>
              <div><dt>Undergraduate training</dt><dd>Government Medical College, Surat</dd></div>
              <div><dt>Postgraduate training</dt><dd>B.J. Medical College, Ahmedabad</dd></div>
              <div><dt>Advanced focus</dt><dd>Observership in dermatosurgery</dd></div>
              <div><dt>Professional memberships</dt><dd>ACSI and IADVL</dd></div>
            </dl>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>Book an appointment<ArrowUpRightIcon data-icon="inline-end" /></a>
          </div>
        </div>
        <div className="page-container profile-additional">
          <article><h3>Education</h3><ul><li>MBBS, Government Medical College, Surat</li><li>MD Skin, B.J. Medical College, Ahmedabad</li><li>NEET PG 2017: Gujarat Rank 10</li></ul></article>
          <article><h3>Clinical experience</h3><ul><li>Junior and Senior Resident, B.J. Medical College, Ahmedabad</li><li>Senior Resident, GMERS Gotri Medical College, Vadodara</li></ul></article>
          <article><h3>Research &amp; memberships</h3><ul><li>Co-author of an IADVL book chapter on immuno-modulators</li><li>Member of ACSI and IADVL</li><li>Seminars and observerships in vitiligo surgery, hair transplantation, and acne-scar surgery</li></ul></article>
        </div>
      </section>
    </>
  );
}

const clinicPhotos = [
  { src: "/images/reception.jpg", alt: "Reception desk at Shreemay Skin Clinic", label: "Reception", width: 1024, height: 768 },
  { src: "/images/consult-desk.png", alt: "Consultation room at Shreemay Skin Clinic", label: "Consultation room", width: 765, height: 1020 },
  { src: "/images/treatment-area.png", alt: "Waiting area at Shreemay Skin Clinic", label: "Waiting area", width: 765, height: 1020 },
  { src: "/images/signage.jpg", alt: "Shreemay Skin Clinic signage at Ananya Complex", label: "Clinic signage", width: 1024, height: 894 },
];

function ClinicPage() {
  return (
    <>
      <section className="content-hero">
        <div className="page-container content-hero-inner">

          <h1>Visit Shreemay Skin Clinic</h1>
          <p>Find the clinic at Ananya Complex, near Akshar Chowk, Vadodara.</p>
          <a href={googleMapsHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}><MapPinIcon data-icon="inline-start" />Get directions<ArrowUpRightIcon data-icon="inline-end" /></a>
        </div>
      </section>
      <section className="content-section">
        <div className="page-container content-heading"><h2>Inside Shreemay Skin Clinic</h2><p>Reception, consultation, waiting, and clinic signage photographs.</p></div>
        <div className="page-container content-photo-grid">
          {clinicPhotos.map((photo) => <figure key={photo.src}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 767px) 100vw, 50vw" /><figcaption>{photo.label}</figcaption></figure>)}
        </div>
        <div className="page-container clinic-address-card">
          <div><h2>Plan your visit</h2><p>{clinicAddress}</p></div>
          <div className="clinic-hours-list">{clinicHours.map((item) => <p key={item.days}><strong>{item.days}</strong><span>{item.hours}</span></p>)}</div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="content-hero">
        <div className="page-container content-hero-inner">

          <h1>Book an appointment or get in touch</h1>
          <p>Call or WhatsApp the clinic, or use the online appointment calendar.</p>
          <div className="content-hero-actions">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}><CalendarDaysIcon data-icon="inline-start" />Book an appointment<ArrowUpRightIcon data-icon="inline-end" /></a>
            <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}><PhoneIcon data-icon="inline-start" />Call {phoneDisplay}</a>
            <a href={whatsAppHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}><MessageCircleIcon data-icon="inline-start" />WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="page-container contact-layout">
          <div className="contact-details">
            <div><span>Address</span><strong>{clinicAddress}</strong></div>
            <div><span>Phone</span><a href={phoneHref}>{phoneDisplay}</a></div>
            {clinicHours.map((item) => <div key={item.days}><span>{item.days}</span><strong>{item.hours}</strong></div>)}
            <a className="text-link" href={googleMapsHref} target="_blank" rel="noopener noreferrer">Open directions in Google Maps<ArrowUpRightIcon aria-hidden="true" /></a>
          </div>
          <div className="contact-map"><Image src="/images/signage.jpg" alt="Shreemay Skin Clinic entrance and signage at Ananya Complex" width={1024} height={894} sizes="(max-width: 767px) 100vw, 55vw" /><a href={googleMapsHref} target="_blank" rel="noopener noreferrer">Open in Google Maps<ArrowUpRightIcon aria-hidden="true" /></a></div>
        </div>
      </section>
    </>
  );
}

export default async function RootContentPage({ params }) {
  const { page } = await params;
  if (aliases[page]) redirect(aliases[page]);

  const groupSlug = categoryRoutes[page];
  const group = groupSlug ? getServiceGroup(groupSlug) : null;
  let content;

  if (group) content = <CategoryPage group={group} />;
  else if (page === "about-dr-hiteshree-shah") content = <AboutDoctorPage />;
  else if (page === "clinic") content = <ClinicPage />;
  else if (page === "contact") content = <ContactPage />;
  else notFound();

  return (
    <>
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />
      <main id="top" className="content-page" tabIndex="-1">{content}</main>
      <SiteFooter />
    </>
  );
}
