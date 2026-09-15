import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, CalendarDaysIcon, PhoneIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import MotionReveal from "@/components/motion-reveal";
import SiteHeader from "@/components/SiteHeader";
import {
  bookingUrl,
  clinicAddress,
  clinicName,
  googleMapsHref,
  phoneDisplay,
  phoneHref,
} from "@/data/clinic";
import { getServiceGroup, getTreatment, serviceGroups } from "@/data/treatments";

export function generateStaticParams() {
  return serviceGroups.map((group) => ({ category: group.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const group = getServiceGroup(category);

  if (!group) {
    return {};
  }

  return {
    title: `${group.title} Care in Vadodara | ${clinicName}`,
    description: `${group.description} Explore treatments and consultation-first next steps at ${clinicName}.`,
    alternates: {
      canonical: `/care/${group.slug}`,
    },
    openGraph: {
      title: `${group.title} Care in Vadodara | ${clinicName}`,
      description: group.description,
      images: [{ url: group.image, alt: group.imageAlt }],
    },
  };
}

export default async function CareCategoryPage({ params }) {
  const { category } = await params;
  const group = getServiceGroup(category);

  if (!group) {
    notFound();
  }

  const groupTreatments = group.slugs.map((slug) => getTreatment(slug));

  return (
    <>
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />

      <main id="top" className="care-category-page" tabIndex="-1">
        <section className="care-category-hero" aria-labelledby="category-heading">
          <div className="page-container care-category-hero-inner">
            <Link href="/#care" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <ArrowLeftIcon data-icon="inline-start" />
              Back to care categories
            </Link>
            <p className="care-category-eyebrow">{group.eyebrow}</p>
            <h1 id="category-heading">{group.title} care in Vadodara.</h1>
            <p>{group.description}</p>
          </div>
        </section>

        <section className="care-category-section" aria-labelledby="category-treatments-heading">
          <div className="page-container care-category-heading">
            <div>
              <p className="section-note">Choose what you want to understand</p>
              <h2 id="category-treatments-heading">Explore {group.title.toLowerCase()} treatments.</h2>
            </div>
            <p>
              Each page explains what the concern may involve, what to discuss during consultation, and how follow-up is planned.
            </p>
          </div>

          <div className="page-container care-category-list">
            {groupTreatments.map((treatment, index) => (
              <MotionReveal key={treatment.slug} delay={index * 0.04} amount={0.16}>
                <Link href={`/treatments/${treatment.slug}`} className="care-category-item">
                  <div>
                    <span>{treatment.category}</span>
                    <h3>{treatment.shortTitle}</h3>
                    <p>{treatment.description}</p>
                  </div>
                  <span className="care-category-arrow" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </Link>
              </MotionReveal>
            ))}
          </div>

          <div className="page-container care-category-actions">
            <span>Not sure which option fits?</span>
            <div>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                <CalendarDaysIcon data-icon="inline-start" />
                Book a consultation
                <ArrowUpRightIcon data-icon="inline-end" />
              </a>
              <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
                <PhoneIcon data-icon="inline-start" />
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="treatment-footer">
        <div className="page-container treatment-footer-inner">
          <Link href="/" className="treatment-footer-brand">{clinicName}</Link>
          <span>{clinicAddress}</span>
          <a href={googleMapsHref} target="_blank" rel="noopener noreferrer">
            Get directions
            <ArrowUpRightIcon data-icon="inline-end" />
          </a>
          <Link href="/" className={buttonVariants({ variant: "link", size: "sm" })}>
            Return to home
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </div>
      </footer>
    </>
  );
}
