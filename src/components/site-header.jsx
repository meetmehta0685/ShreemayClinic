"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarDaysIcon, MenuIcon, PhoneIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Treatments", href: "#care" },
  { label: "Doctor", href: "#doctor" },
  { label: "The clinic", href: "#clinic" },
  { label: "Patient stories", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function SiteHeader({ bookingUrl, phoneHref }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState(null);
  const routeNavigation = useMemo(
    () => navigation.map((item) => ({ ...item, href: isHome ? item.href : `/${item.href}` })),
    [isHome]
  );

  useEffect(() => {
    if (!isHome) {
      return undefined;
    }

    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -56% 0px", threshold: [0, 0.12, 0.4] }
    );

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.36;
      const currentSection = sections.reduce((current, section) => {
        return section.getBoundingClientRect().top <= marker ? section : current;
      }, null);

      setActiveSection(currentSection ? `#${currentSection.id}` : null);
    };

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    const frame = window.requestAnimationFrame(updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.cancelAnimationFrame(frame);
    };
  }, [isHome]);

  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <header className="site-header">
      <div className="page-container site-header-inner">
        <a className="brand-lockup" href={isHome ? "#top" : "/#top"} aria-label="Shreemay Skin Clinic home">
          <Image
            src="/images/logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="brand-mark"
          />
          <span className="brand-copy">
            <span>Shreemay</span>
            <span>Skin Clinic</span>
          </span>
        </a>

        <nav className="site-nav hidden lg:flex" aria-label="Primary navigation">
          {routeNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isHome && activeSection === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions">
          <a
            href={phoneHref}
            className={`${buttonVariants({ variant: "outline", size: "sm" })} header-call hidden sm:inline-flex`}
          >
            <PhoneIcon data-icon="inline-start" />
            Call
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({ size: "sm" })} header-book hidden sm:inline-flex`}
          >
            <CalendarDaysIcon data-icon="inline-start" />
            Book online
          </a>

          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  className="mobile-menu-trigger lg:hidden"
                  aria-label="Open navigation"
                />
              }
            >
              <MenuIcon aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="site-sheet">
              <SheetHeader className="site-sheet-header">
                <SheetTitle className="site-sheet-title">Shreemay Skin Clinic</SheetTitle>
                <SheetDescription>
                  A clear next step for skin, hair, laser, and vitiligo care in Vadodara.
                </SheetDescription>
              </SheetHeader>
              <nav className="site-sheet-nav" aria-label="Mobile navigation">
                {routeNavigation.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={<a href={item.href} className="site-sheet-link" />}
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="site-sheet-actions">
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ size: "lg" })}
                    />
                  }
                >
                  <CalendarDaysIcon data-icon="inline-start" />
                  Book an appointment
                </SheetClose>
                <SheetClose
                  nativeButton={false}
                  render={<a href={phoneHref} className={buttonVariants({ variant: "outline", size: "lg" })} />}
                >
                  <PhoneIcon data-icon="inline-start" />
                  Call 78619 51664
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </header>
    </>
  );
}
