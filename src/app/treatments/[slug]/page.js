import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTreatment, treatments } from "../../../data/treatments";

const bookingUrl = "https://booking.appointy.com/en-US/hite123/bookings/calendar";
const phoneHref = "tel:+917861951664";
const whatsAppHref = "https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic";

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
    <main className="treatment-page">
      <section className="treatment-hero">
        <div className="wrap treatment-hero-inner">
          <div>
            <Link href="/" className="back-link">Back to clinic home</Link>
            <p className="eyebrow">{treatment.category}</p>
            <h1>{treatment.title}</h1>
            <p className="hero-sub">{treatment.description}</p>
            <div className="hero-ctas">
              <a href={bookingUrl} target="_blank" rel="noopener" className="btn btn-primary">Book Appointment</a>
              <a href={whatsAppHref} target="_blank" rel="noopener" className="btn btn-teal">WhatsApp</a>
              <a href={phoneHref} className="btn btn-secondary">Call 78619 51664</a>
            </div>
          </div>
          <div className="treatment-photo">
            <Image src={treatment.image} alt={treatment.title} width={720} height={720} priority sizes="(max-width: 900px) 92vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="treatment-detail">
        <div className="wrap treatment-detail-grid">
          <div>
            <p className="eyebrow">What the consultation covers</p>
            <h2>Doctor-led care, not one-size-fits-all packages</h2>
            <p>Every treatment starts with a dermatologist consultation so the plan matches your skin type, medical history, symptoms, expectations, and follow-up needs.</p>
          </div>
          <ul className="treatment-highlights">
            {treatment.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
