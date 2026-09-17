import { Lato } from "next/font/google";
import "./globals.css";
import {
  clinicAddress,
  clinicName,
  doctorName,
  instagramHref,
} from "@/data/clinic";
import { treatments } from "@/data/treatments";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const title = "Shreemay Clinic Vadodara | Dr. Hiteshree Shah, Dermatologist";
const description = "Shreemay Skin Clinic, also searched as Shreemay Clinic Vadodara, offers skin, hair, laser, cosmetic dermatology and vitiligo care by Dr. Hiteshree Shah, MBBS MD.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  applicationName: "Shreemay Skin Clinic",
  keywords: [
    "dermatologist in Vadodara",
    "Shreemay Clinic Vadodara",
    "skin clinic Vadodara",
    "hair fall treatment Vadodara",
    "vitiligo treatment Vadodara",
    "laser hair removal Vadodara",
    "acne treatment Vadodara",
    "Dr Hiteshree Shah",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Shreemay Skin Clinic",
    images: [
      {
        url: "/images/dr-hiteshree-iadvl-optimized.jpg",
        width: 1000,
        height: 936,
        alt: "Dr. Hiteshree Shah at Shreemay Skin Clinic",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinicName,
  alternateName: "Shreemay Clinic",
  url: siteUrl,
  medicalSpecialty: ["Dermatology", "Cosmetic Dermatology"],
  telephone: "+91-78619-51664",
  image: `${siteUrl}/images/dr-hiteshree-iadvl-optimized.jpg`,
  sameAs: [instagramHref],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 8, 1st Floor, Ananya Complex, Akshar Chowk, O.P. Road",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390012",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "20:00",
    },
  ],
  physician: {
    "@type": "Physician",
    name: doctorName,
    medicalSpecialty: "Dermatology",
    description: "MBBS, MD Skin and Venereal Disease. Observership in dermatosurgery.",
  },
  availableService: treatments.map((treatment) => treatment.shortTitle),
  description: `${clinicName} provides dermatologist-led skin, hair, laser, cosmetic, vitiligo, and dermatosurgical consultations in Vadodara.`,
  disambiguatingDescription: clinicAddress,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={lato.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
