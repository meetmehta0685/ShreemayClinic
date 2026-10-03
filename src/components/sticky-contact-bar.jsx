"use client";

import { CalendarDaysIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  bookingUrl,
  phoneDisplay,
  phoneHref,
  whatsAppHref,
} from "@/data/clinic";

export default function StickyContactBar() {
  const isHome = usePathname() === "/";

  return (
    <nav
      className={"sticky-contact-bar" + (isHome ? " sticky-contact-bar-home" : "")}
      aria-label="Quick contact and booking"
    >
      <a href={phoneHref}>
        <PhoneIcon aria-hidden="true" />
        <span>Call</span>
        <span className="sr-only">{phoneDisplay}</span>
      </a>
      <a href={whatsAppHref} target="_blank" rel="noopener noreferrer">
        <MessageCircleIcon aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a className="sticky-book" aria-label="Book an appointment" href={bookingUrl} target="_blank" rel="noopener noreferrer">
        <CalendarDaysIcon aria-hidden="true" />
        <span>Book now</span>
      </a>
    </nav>
  );
}
