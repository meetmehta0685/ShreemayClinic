import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  CheckIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MotionReveal from "@/components/motion-reveal";
import SiteHeader from "@/components/SiteHeader";
import {
  bookingUrl,
  clinicAddress,
  clinicName,
  doctorName,
  googleMapsHref,
  phoneDisplay,
  phoneHref,
  whatsAppHref,
} from "@/data/clinic";
import { getCaseStudiesForTreatment } from "@/data/case-studies";
import { getTreatment, treatments } from "@/data/treatments";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {};
  }

  return {
    title: `${treatment.title} | Shreemay Skin Clinic`,
    description: `${treatment.metaDescription} Consult Dr. Hiteshree Shah at Shreemay Skin Clinic, Akshar Chowk, Vadodara.`,
    alternates: {
      canonical: `/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.title} | Shreemay Skin Clinic`,
      description: treatment.metaDescription,
      images: [{ url: treatment.image, alt: treatment.imageAlt }],
    },
  };
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />

      <main id="top" className="treatment-page" tabIndex="-1">
        <section className="treatment-hero" aria-labelledby="treatment-heading">
          <div className="page-container treatment-hero-grid">
            <MotionReveal className="treatment-copy" preset="rise">
              <Link href="/#care" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                <ArrowLeftIcon data-icon="inline-start" />
                Back to care index
              </Link>
              <div className="treatment-context">
                <Badge variant="secondary">{treatment.category}</Badge>
                <span>Shreemay Clinic · Vadodara</span>
              </div>
              <h1 id="treatment-heading">{treatment.title}</h1>
              <p className="treatment-lede">{treatment.description}</p>
              <div className="treatment-actions">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg" })}
                >
                  <CalendarDaysIcon data-icon="inline-start" />
                  Book a consultation
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
              <div className="treatment-assurance">
                <ShieldCheckIcon aria-hidden="true" />
                <span>Suitability and next steps are discussed during consultation.</span>
              </div>
            </MotionReveal>

            <MotionReveal className="treatment-visual-motion" preset="clip" delay={0.08} amount={0.12}>
              <Card className="treatment-visual-card">
              <CardHeader>
                <div>
                  <CardTitle>{treatment.shortTitle}</CardTitle>
                  <CardDescription>A treatment-focused visual for a doctor-led consultation.</CardDescription>
                </div>
                <CardAction>
                  <Badge variant="outline">Treatment focus</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="treatment-visual-media">
                <Image
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  width={720}
                  height={720}
                  priority
                  sizes="(max-width: 1023px) 92vw, 43vw"
                />
                <div className="treatment-image-caption">
                  <span>{treatment.group}</span>
                  <strong>{treatment.imageLabel}</strong>
                </div>
              </CardContent>
              <CardFooter>
                <span>{doctorName} · MD Dermatology</span>
              </CardFooter>
              </Card>
            </MotionReveal>
          </div>
        </section>

        <section className="treatment-detail-section" aria-labelledby="detail-heading">
          <div className="page-container treatment-detail-grid">
            <MotionReveal className="treatment-detail-copy" amount={0.16}>
              <h2 id="detail-heading">Start with a consultation, then choose the right path.</h2>
              <p>{treatment.overview}</p>
              <div className="detail-proof-line">
                <CheckIcon aria-hidden="true" />
                <span>{treatment.consultation}</span>
              </div>
              <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
                <PhoneIcon data-icon="inline-start" />
                Call {phoneDisplay}
              </a>
            </MotionReveal>

            <MotionReveal className="treatment-highlights-motion" preset="clip" delay={0.08} amount={0.16}>
              <Card className="treatment-highlights-card">
              <CardHeader>
                <CardTitle>What to discuss</CardTitle>
                <CardDescription>Bring the questions that matter to your skin, hair, or treatment goal.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion defaultValue={["highlight-0"]} className="treatment-accordion">
                  {treatment.highlights.map((highlight, index) => (
                    <AccordionItem key={highlight.title} value={`highlight-${index}`}>
                      <AccordionTrigger>{highlight.title}</AccordionTrigger>
                      <AccordionContent>
                        {highlight.body}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              </Card>
            </MotionReveal>
          </div>
        </section>

        <BeforeAfterGallery
          caseStudies={getCaseStudiesForTreatment(treatment.slug)}
          heading="See how follow-up is documented."
          intro="These clinic-shared photos show why timing, examination, and review matter. They are examples, not a promise of outcome."
          compact
        />

        <section className="treatment-journey-section" aria-labelledby="journey-heading">
          <div className="page-container treatment-journey-grid">
            <MotionReveal className="treatment-journey-copy" amount={0.16}>
              <p className="section-note">What happens next</p>
              <h2 id="journey-heading">Care is planned in three clear conversations.</h2>
              <p>
                The right plan depends on your symptoms, history, examination, and goals. A consultation helps you understand the options before deciding what to do.
              </p>
              <p className="treatment-journey-note">
                A diagnosis and personalised plan can only be confirmed after an in-person clinical assessment.
              </p>
            </MotionReveal>

            <ol className="treatment-journey-list">
              <li className="treatment-journey-step">
                <span className="treatment-journey-index">01</span>
                <div>
                  <h3>Assess the concern</h3>
                  <p>The doctor reviews your symptoms, medical history, skin or scalp findings, and what you want to change.</p>
                </div>
              </li>
              <li className="treatment-journey-step">
                <span className="treatment-journey-index">02</span>
                <div>
                  <h3>Choose what is suitable</h3>
                  <p>You discuss the diagnosis or clinical impression, available options, preparation, possible limits, and whether a procedure is appropriate.</p>
                </div>
              </li>
              <li className="treatment-journey-step">
                <span className="treatment-journey-index">03</span>
                <div>
                  <h3>Review the plan</h3>
                  <p>The clinic explains aftercare and follow-up so you know what to monitor and when to return for review.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="treatment-faq-section" aria-labelledby="faq-heading">
          <div className="page-container treatment-faq-grid">
            <MotionReveal className="treatment-faq-intro" amount={0.16}>
              <p className="section-note">Before you book</p>
              <h2 id="faq-heading">Good questions make the first visit easier.</h2>
              <p>
                Use these answers as a starting point. Your doctor will tailor the advice to your examination and history.
              </p>
            </MotionReveal>

            <MotionReveal className="treatment-faq-motion" preset="clip" delay={0.08} amount={0.16}>
              <Card className="treatment-faq-card">
                <CardContent>
                  <Accordion className="treatment-accordion">
                    {treatment.faqs.map((faq, index) => (
                      <AccordionItem key={faq.question} value={`faq-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </MotionReveal>
          </div>
        </section>

        <section className="treatment-next-section" aria-labelledby="next-heading">
          <div className="page-container treatment-next-inner">
            <div>
              <h2 id="next-heading">Ready to take the next step?</h2>
              <p>Book online, call the clinic, or ask your first question on WhatsApp.</p>
            </div>
            <div className="treatment-next-actions">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                Book an appointment
                <ArrowRightIcon data-icon="inline-end" />
              </a>
              <Link href="/#care" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Explore all care
              </Link>
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
