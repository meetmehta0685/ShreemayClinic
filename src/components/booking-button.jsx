import { CalendarDaysIcon, PhoneIcon } from "lucide-react";

import { bookingAction } from "@/data/clinic";

export default function BookingButton({ className, children }) {
  const Icon = bookingAction.live ? CalendarDaysIcon : PhoneIcon;

  return (
    <a href={bookingAction.href} className={className}>
      <Icon data-icon="inline-start" aria-hidden="true" />
      {bookingAction.label}
      {children}
    </a>
  );
}
