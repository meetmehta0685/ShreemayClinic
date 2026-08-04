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
import MotionReveal from "@/components/motion-reveal";
import SiteHeader from "@/components/SiteHeader";
import { getTreatment, treatments } from "@/data/treatments";

const bookingUrl = "https://booking.appointy.com/en-US/hite123/bookings/calendar";
const phoneHref = "tel:+917861951664";
const whatsAppHref =
  "https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic";

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
    description: `${treatment.description} Consult Dr. Hiteshree Shah at Shreemay Skin Clinic, Akshar Chowk, Vadodara.`,
    openGraph: {
      title: `${treatment.title} | Shreemay Skin Clinic`,
      description: treatment.description,
      images: [{ url: treatment.image, alt: treatment.title }],
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
      <AnnouncementBar />

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
                  <CardDescription>A focused conversation about your concern.</CardDescription>
                </div>
                <CardAction>
                  <Badge variant="outline">Care record</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="treatment-visual-media">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  width={720}
                  height={720}
                  priority
                  sizes="(max-width: 1023px) 92vw, 43vw"
                />
                <div className="treatment-image-caption">
                  <span>Consultation focus</span>
                  <strong>{treatment.category} care</strong>
                </div>
              </CardContent>
              <CardFooter>
                <span>Dr. Hiteshree Shah · MD Dermatology</span>
              </CardFooter>
              </Card>
            </MotionReveal>
          </div>
        </section>

        <section className="treatment-detail-section" aria-labelledby="detail-heading">
          <div className="page-container treatment-detail-grid">
            <MotionReveal className="treatment-detail-copy" amount={0.16}>
              <h2 id="detail-heading">A care plan built around the consultation.</h2>
              <p>
                Every treatment starts with a dermatologist consultation so the plan matches your skin type, medical history, symptoms, expectations, and follow-up needs.
              </p>
              <div className="detail-proof-line">
                <CheckIcon aria-hidden="true" />
                <span>Doctor-led guidance before a procedure or product plan.</span>
              </div>
              <a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })}>
                <PhoneIcon data-icon="inline-start" />
                Call 78619 51664
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
                    <AccordionItem key={highlight} value={`highlight-${index}`}>
                      <AccordionTrigger>{highlight}</AccordionTrigger>
                      <AccordionContent>
                        Discuss this focus with Dr. Hiteshree Shah during your consultation so the next step is clear for you.
                      </AccordionContent>
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
          <Link href="/" className="treatment-footer-brand">Shreemay Skin Clinic</Link>
          <span>Skin, hair, laser, and vitiligo care in Vadodara.</span>
          <Link href="/" className={buttonVariants({ variant: "link", size: "sm" })}>
            Return to home
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </div>
      </footer>
    </>
  );
}
