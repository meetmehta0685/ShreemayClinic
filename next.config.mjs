// Online booking is live only when its database and alert email are configured.
// Until then, every "Book" button calls the clinic instead of opening a preview-only form.
const onlineBookingLive = Boolean(
  process.env.DATABASE_URL
  && process.env.SMTP_USER
  && process.env.SMTP_PASS
  && process.env.BOOKING_ALERT_EMAIL
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ONLINE_BOOKING: onlineBookingLive ? "on" : "",
  },
};

export default nextConfig;
