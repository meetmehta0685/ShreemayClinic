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

export const metadata = {
  title: "Shreemay Skin Clinic | Dr. Hiteshree Shah — Skin & Hair Specialist, Vadodara",
  description: "Shreemay Skin Clinic, Akshar Chowk, Vadodara. Dr. Hiteshree Shah, MBBS MD (Skin & VD), Fellowship in Dermatosurgery. Acne, hair loss, vitiligo surgery, laser & cosmetic dermatology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
