-- This one-time migration removes unused patient email fields. It stops if
-- any appointment rows exist so existing patient data is never silently lost.
do $$
begin
  if exists (select 1 from public.consultation_bookings limit 1) then
    raise exception 'Bookings exist. Preserve or migrate their data before removing patient email columns.';
  end if;
end $$;

alter table public.consultation_bookings
  drop column if exists patient_email,
  drop column if exists confirmation_email_status;
