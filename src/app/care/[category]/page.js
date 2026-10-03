import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowUpRightIcon, CalendarDaysIcon, PhoneIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import MotionReveal from "@/components/motion-reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/SiteHeader";
import {
  bookingUrl,
  clinicName,
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
      canonical: {
        skin: "/skin",
        hair: "/hair",
        "cosmetic-laser": "/laser-aesthetics",
        "dermatosurgery-vitiligo": "/dermatosurgery",
      }[group.slug] || `/care/${group.slug}`,
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
            <Link href="/treatments" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <ArrowLeftIcon data-icon="inline-start" />
              All treatments
            </Link>
            <h1 id="category-heading">{group.title} care in Vadodara</h1>
            <p>{group.description}</p>
          </div>
        </section>

        <section className="care-category-section" aria-labelledby="category-treatments-heading">
          <div className="page-container care-category-heading">
            <div>
              <h2 id="category-treatments-heading">Explore {group.title.toLowerCase()} treatments</h2>
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

          {group.options?.length > 0 && (
            <div className="page-container category-options">
              <div>
                <h2>{group.optionsTitle || "More care options"}</h2>
                <p>The dermatologist will explain suitability, preparation, and aftercare before treatment.</p>
              </div>
              <ul>
                {group.options.map((option) => <li key={option.title}>
                    <h3>{option.href ? <Link href={option.href}>{option.title}</Link> : option.title}</h3>
                    <p>{option.description}</p>
                  </li>)}
              </ul>
            </div>
          )}

          <div className="page-container care-category-actions">
            <span>Not sure which option fits?</span>
            <div>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                <CalendarDaysIcon data-icon="inline-start" />
                Book an appointment
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
      <SiteFooter />
    </>
  );
}
