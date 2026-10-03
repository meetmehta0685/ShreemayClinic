import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/SiteHeader";
import { bookingUrl, phoneHref } from "@/data/clinic";
import { serviceGroups, treatments } from "@/data/treatments";

const serviceGroupPaths = {
  skin: "/skin",
  hair: "/hair",
  "cosmetic-laser": "/laser-aesthetics",
  "dermatosurgery-vitiligo": "/dermatosurgery",
};

export const metadata = {
  title: "Dermatology Treatments in Vadodara | Shreemay Skin Clinic",
  description: "Explore skin, hair, laser, cosmetic, vitiligo, and dermatosurgery care at Shreemay Skin Clinic, Vadodara. Start with a consultation with Dr. Hiteshree Shah.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <>
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />
      <main id="top" className="content-page" tabIndex="-1">
        <section className="content-hero">
          <div className="page-container content-hero-inner">

            <h1>Explore dermatology care</h1>
            <p>Browse common skin, hair, laser, and cosmetic concerns. A consultation helps determine which options are suitable for you.</p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="treatment-directory-heading">
          <div className="page-container">
            <div className="content-heading">
              <h2 id="treatment-directory-heading">Browse by area of care</h2>
              <p>Start with a concern or explore one of the clinic’s care areas.</p>
            </div>
            <div className="directory-cards">
              {serviceGroups.map((group) => (
                <Link className="directory-card" href={serviceGroupPaths[group.slug] || `/care/${group.slug}`} key={group.slug}>
                  <Image src={group.image} alt={group.imageAlt} width={720} height={440} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                        <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <span className="directory-card-link">Explore care <ArrowUpRightIcon aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section content-section-soft" aria-labelledby="concern-directory-heading">
          <div className="page-container">
            <div className="content-heading">
              <h2 id="concern-directory-heading">Common concerns</h2>
              <p>Each page explains what to discuss during an assessment and what next steps may involve.</p>
            </div>
            <div className="treatment-directory-list">
              {treatments.map((treatment) => (
                <Link href={`/treatments/${treatment.slug}`} className="treatment-directory-item" key={treatment.slug}>
                  <div><h3>{treatment.shortTitle}</h3><p>{treatment.description}</p></div>
                  <ArrowUpRightIcon aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
