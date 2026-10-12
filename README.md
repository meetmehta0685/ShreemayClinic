# Shreemay Skin Clinic Website

Next.js website for Shreemay Skin Clinic, Vadodara.

## Commands

- `npm run dev` - start the local development server
- `npm run lint` - run ESLint
- `npm run build` - create a production build

## Deployment

Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final production URL, for example:

```bash
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

This is used for Open Graph images, `robots.txt`, and `sitemap.xml`.

## Appointment booking

The site-owned booking flow is at `/book`; clinic staff use `/admin`. See [BOOKING-SETUP.md](BOOKING-SETUP.md) for Neon, email, staff access, and deployment configuration. The live booking API remains unavailable until the clinic configures its email service credentials.
