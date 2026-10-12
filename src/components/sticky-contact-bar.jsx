"use client";

import { MessageCircleIcon, PhoneIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { phoneDisplay, phoneHref, whatsAppHref } from "@/data/clinic";

export default function StickyContactBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav
      className={"sticky-contact-bar" + (isHome ? " sticky-contact-bar-home" : "")}
      aria-label="Quick contact"
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
    </nav>
  );
}
