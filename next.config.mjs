// Online booking is live only when its database and alert email are configured.
// Until then, every "Book" button calls the clinic instead of opening a preview-only form.
const onlineBookingLive = Boolean(
  process.env.DATABASE_URL
  && process.env.SMTP_USER
  && process.env.SMTP_PASS
  && process.env.BOOKING_ALERT_EMAIL
);

const redirects = {
  "/care/skin": "/skin",
  "/care/hair": "/hair",
  "/care/cosmetic-laser": "/laser-aesthetics",
  "/care/dermatosurgery-vitiligo": "/dermatosurgery",
  "/acne-treatment": "/treatments/acne-treatment",
  "/pigmentation-melasma": "/treatments/pigmentation-melasma",
  "/hair-loss": "/treatments/hair-fall-treatment",
  "/laser-hair-reduction": "/treatments/laser-hair-removal",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ONLINE_BOOKING: onlineBookingLive ? "on" : "",
  },
  async redirects() {
    return Object.entries(redirects).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
