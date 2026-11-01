"use client";

import { CalendarDaysIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { bookingAction, phoneDisplay, phoneHref, whatsAppHref } from "@/data/clinic";

export default function StickyContactBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav
      className={"sticky-contact-bar" + (isHome ? " sticky-contact-bar-home" : "") + (bookingAction.live ? " has-booking" : "")}
      aria-label="Quick contact"
    >
      {bookingAction.live ? (
        <a href={bookingAction.href} className="sticky-contact-book">
          <CalendarDaysIcon aria-hidden="true" />
          <span>Book</span>
        </a>
      ) : null}
      <a href={phoneHref} className={bookingAction.live ? undefined : "sticky-contact-book"}>
        <PhoneIcon aria-hidden="true" />
        <span>{bookingAction.live ? "Call" : "Call to book"}</span>
        <span className="sr-only">{phoneDisplay}</span>
      </a>
      <a href={whatsAppHref} target="_blank" rel="noopener noreferrer">
        <MessageCircleIcon aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
