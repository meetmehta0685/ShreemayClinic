create table if not exists public.clinic_staff (
  user_id uuid primary key references neon_auth."user" (id) on delete cascade,
  display_name text not null check (length(display_name) between 1 and 120),
  created_at timestamptz not null default now()
);

create table if not exists public.consultation_bookings (
  id uuid primary key default gen_random_uuid(),
  patient_name text not null check (length(patient_name) between 2 and 120),
  patient_phone text not null check (length(regexp_replace(patient_phone, '[^0-9]', '', 'g')) between 10 and 15),
  service_name text not null default 'Consultation' check (service_name = 'Consultation'),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'confirmed' check (status in ('confirmed', 'cancelled')),
  clinic_alert_email_status text not null default 'pending' check (clinic_alert_email_status in ('pending', 'sent', 'failed')),
  created_at timestamptz not null default now(),
  constraint consultation_duration_is_20_minutes
    check (ends_at = starts_at + interval '20 minutes')
);

alter table public.consultation_bookings
  add column if not exists clinic_alert_email_status text not null default 'pending'
  check (clinic_alert_email_status in ('pending', 'sent', 'failed'));

create unique index if not exists consultation_bookings_active_slot_idx
  on public.consultation_bookings (starts_at)
  where status = 'confirmed';

create index if not exists consultation_bookings_upcoming_idx
  on public.consultation_bookings (starts_at desc)
  where status = 'confirmed';

revoke all on table public.clinic_staff, public.consultation_bookings from public;
