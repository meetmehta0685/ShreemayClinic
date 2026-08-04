import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
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
        url: "/images/signage.jpg",
        width: 1200,
        height: 900,
        alt: "Shreemay Skin Clinic in Vadodara",
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
  name: "Shreemay Skin Clinic",
  alternateName: "Shreemay Clinic",
  url: siteUrl,
  medicalSpecialty: ["Dermatology", "Cosmetic Dermatology"],
  telephone: "+91-78619-51664",
  image: `${siteUrl}/images/signage.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 8, 1st Floor, Ananya Complex, Old Padra Road, Akshar Chowk, Tandalja",
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
    name: "Dr. Hiteshree Shah",
    medicalSpecialty: "Dermatology",
    description: "MBBS, MD Skin and Venereal Disease, Fellowship in Dermatosurgery.",
  },
  availableService: [
    "Acne treatment",
    "Hair fall treatment",
    "Vitiligo surgery",
    "Laser hair removal",
    "PRP therapy",
    "Chemical peeling",
    "Skin rejuvenation",
  ],
};

const directionContract = `<!--
THESIS: Make the consultation feel like a clear clinical record, not a generic clinic landing page.
OWN-WORLD: Ink, celadon, saffron, and paper tokens; shadcn Base UI primitives; register-like labels, separators, and image-led records.
STORY: Visitors identify their concern, understand doctor-led care, trust the evidence, and book or message the clinic.
FIRST VIEWPORT: Sticky wordmark and action rail, concise hero headline and booking action on the left, doctor record card with real imagery on the right.
FORM: Apothecary register, grounded direction 3 of 7, seed b2b4d75f.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <div hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
