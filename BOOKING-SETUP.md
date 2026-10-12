# Clinic booking setup

The site includes online consultation booking at `/book` and a private staff dashboard at `/admin`. The database and sign-in provider are Neon; email is sent through Resend. The API stays unavailable until the required environment variables are set.

## Neon database and staff access

The clinic has a separate Neon project named `shreemay-clinic-db` under the owner's Neon account. It uses the Singapore region and the `production` branch. The clinic tables and indexes from [`neon/schema.sql`](neon/schema.sql) are applied to that branch's `neondb` database. The script can be rerun safely for setup or recovery. Existing deployments created with the earlier schema should also run [`neon/migrations/20261012_remove_patient_email.sql`](neon/migrations/20261012_remove_patient_email.sql); it stops if any appointment rows exist.

Neon Auth is enabled and self-sign-up is disabled. Add each approved staff account from the project's Better Auth user management in Neon Console. Then add the account to the clinic allowlist in the SQL Editor, replacing the example email and display name:

```sql
insert into public.clinic_staff (user_id, display_name)
select id, 'Dr. Hiteshree Shah'
from neon_auth."user"
where email = 'doctor@clinic.example'
on conflict (user_id) do update set display_name = excluded.display_name;
```

Run one statement per staff account. Each must insert or update exactly one row; if it affects zero rows, create that account in Neon Auth first and check that the email matches. Only allowlisted accounts can see patient details or manage bookings. Booking data is queried through server-only API routes.

## Email

The booking API is already wired to send a Resend alert after it reserves an appointment. Each alert goes to the doctor's approved inbox, `hiteeshah30@gmail.com`, and contains the patient's name, contact number, and selected appointment date and time. The dashboard records whether the alert was sent.

The local clinic inbox is configured. `RESEND_API_KEY` and `BOOKING_FROM_EMAIL` are intentionally blank until the clinic has a domain. The API key previously pasted into chat should be revoked and must not be reused. After the clinic controls a domain:

1. Add the domain in Resend and publish the DNS records Resend provides. Wait for sending verification to complete.
2. Create a new API key with **Sending access**, restricted to that verified domain when available.
3. Set `BOOKING_FROM_EMAIL` to a sender on that domain, for example `Shreemay Skin Clinic <appointments@clinic-domain.com>`.
4. Add the key and sender to `.env.local` and the hosting provider's environment variables, then restart the dev server or redeploy.
5. Make one test booking and confirm the alert reaches the clinic inbox before opening online booking to patients.

Until then, keep `BOOKING_FROM_EMAIL` blank. Resend's `resend.dev` test sender is limited to the email associated with the Resend account, so it cannot deliver the clinic alert to the doctor's inbox. With the sender unset, the booking API stays disabled instead of confirming appointments the clinic would not be notified about. Never put the Resend key in a `NEXT_PUBLIC_` variable or paste it into chat.

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local` for local development. Add the same server-side values to the hosting provider before deploying:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Neon pooled connection string for the clinic's `neondb` database |
| `NEON_AUTH_BASE_URL` | Auth URL shown in the Neon project's Better Auth settings |
| `NEON_AUTH_COOKIE_SECRET` | Random secret of at least 32 characters |
| `RESEND_API_KEY` | Resend API key; server only |
| `BOOKING_FROM_EMAIL` | Sender name and address on the verified domain |
| `BOOKING_ALERT_EMAIL` | Doctor or clinic inbox for patient name, contact number, and appointment details |
| `NEXT_PUBLIC_SITE_URL` | Production website origin, such as `https://clinic.example` |

Generate the auth cookie secret with `openssl rand -base64 32`. Never prefix the database URL, cookie secret, or Resend key with `NEXT_PUBLIC_`. Keep `.env.local` out of Git. Restart the development server or redeploy after setting the variables.

## Staff use

Doctor and reception staff sign in at `/admin` with a one-time code sent to their Neon Auth email address. The email OTP provider is configured in Neon Auth. Staff can see the appointment time, patient name, and contact number, and use the contact link to call the patient. Cancelling a booking releases its time; staff should contact the patient about the change. The alert email is a direct booking notice, and the private dashboard remains available for managing appointments.

## Booking rules

- Consultation only, 20 minutes per slot.
- Monday–Saturday, 10 AM–2 PM and 5 PM–8 PM; Sunday closed.
- Slots are available up to 30 days ahead and are automatically confirmed after the database reserves the time.
- The schedule is defined in [`src/lib/booking/schedule.js`](src/lib/booking/schedule.js). Clinic closures and one-off schedule changes are not currently configurable in the dashboard.
- Existing Appointy bookings are not imported. Retain or transfer them separately with someone who can access the Appointy account.
- Add the clinic-approved privacy notice before launch.
