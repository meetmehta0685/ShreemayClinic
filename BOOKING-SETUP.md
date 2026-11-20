# Clinic booking setup

The site includes online consultation booking at `/book` and a private staff dashboard at `/admin`. The database and sign-in provider are Neon; email is sent through a Gmail account using Nodemailer. The API stays unavailable until the required environment variables are set.

## Neon database and staff access

The clinic has a separate Neon project named `shreemay-clinic-db` under the owner's Neon account. It uses the Singapore region and the `production` branch. The clinic tables and indexes from [`neon/schema.sql`](neon/schema.sql) are applied to that branch's `neondb` database. The script can be rerun safely for setup or recovery.

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

The booking API sends an email alert through Gmail SMTP (Nodemailer) after it reserves an appointment. Each alert goes to the doctor's approved inbox, `hiteeshah30@gmail.com`, and contains the patient's name, contact number, and selected appointment date and time. The dashboard records whether the alert was sent. No domain is needed.

To turn on online booking:

1. Choose the Gmail account that will send alerts, for example a dedicated clinic account.
2. Turn on 2-Step Verification for that account, then create an App Password at https://myaccount.google.com/apppasswords.
3. Set `SMTP_USER` to the Gmail address and `SMTP_PASS` to the 16-character App Password (spaces optional).
4. Add both to `.env.local` and the hosting provider's environment variables, then restart the dev server or redeploy.
5. Make one test booking and confirm the alert reaches the clinic inbox before opening online booking to patients.

Until both are set, every "Book" button on the site reads "Call to book" and dials the clinic; after they are set and the site is rebuilt or redeployed, the buttons open `/book` automatically. Until both are set, the booking API stays disabled instead of confirming appointments the clinic would not be notified about. Gmail allows roughly 500 messages a day from a personal account, far above the clinic's booking volume. Never put the App Password in a `NEXT_PUBLIC_` variable or paste it into chat.

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local` for local development. Add the same server-side values to the hosting provider before deploying:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Neon pooled connection string for the clinic's `neondb` database |
| `NEON_AUTH_BASE_URL` | Auth URL shown in the Neon project's Better Auth settings |
| `NEON_AUTH_COOKIE_SECRET` | Random secret of at least 32 characters |
| `SMTP_USER` | Gmail address that sends booking alerts |
| `SMTP_PASS` | Gmail App Password for that account; server only |
| `BOOKING_ALERT_EMAIL` | Doctor or clinic inbox for patient name, contact number, and appointment details |
| `NEXT_PUBLIC_SITE_URL` | Production website origin, such as `https://clinic.example` |

Generate the auth cookie secret with `openssl rand -base64 32`. Never prefix the database URL, cookie secret, or Gmail App Password with `NEXT_PUBLIC_`. Keep `.env.local` out of Git. Restart the development server or redeploy after setting the variables.

## Staff use

Doctor and reception staff sign in at `/admin` with a one-time code sent to their Neon Auth email address. The email OTP provider is configured in Neon Auth. Staff can see the appointment time, patient name, and contact number, and use the contact link to call the patient. Cancelling a booking releases its time; staff should contact the patient about the change. The alert email is a direct booking notice, and the private dashboard remains available for managing appointments.

## Booking rules

- Consultation only, 20 minutes per slot.
- Monday–Saturday, 11 AM–2 PM and 5 PM–8 PM; Sunday closed.
- Slots are available up to 30 days ahead and are automatically confirmed after the database reserves the time.
- The schedule is defined in [`src/lib/booking/schedule.js`](src/lib/booking/schedule.js). Clinic closures and one-off schedule changes are not currently configurable in the dashboard.
- Existing Appointy bookings are not imported. Retain or transfer them separately with someone who can access the Appointy account.
- Add the clinic-approved privacy notice before launch.
