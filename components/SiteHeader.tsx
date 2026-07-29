'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type SiteHeaderProps = {
  bookingUrl: string;
  phoneHref: string;
};

export default function SiteHeader({ bookingUrl, phoneHref }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
      >
        <div className="wrap header-inner">
          <a href="#top" className="wordmark">
            <Image src="/images/logo.png" alt="Shreemay Skin Clinic logo" width={96} height={48} priority />
            <span>Shreemay <span>Skin Clinic</span></span>
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Clinic</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>
          <div className="header-actions">
            <a href={bookingUrl} target="_blank" rel="noopener" className="btn btn-small btn-primary">Book Online</a>
            <a href={phoneHref} className="btn btn-small btn-secondary">Call</a>
            <button
              ref={toggleRef}
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
            >
              <span className="hamburger-box" aria-hidden="true">
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#gallery" onClick={closeMenu}>Clinic</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a href="#visit" onClick={closeMenu}>Visit</a>
        <div className="mobile-nav-actions">
          <a href={bookingUrl} target="_blank" rel="noopener" className="btn btn-primary" onClick={closeMenu}>Book Online</a>
          <a href={phoneHref} className="btn btn-secondary" onClick={closeMenu}>Call 78619 51664</a>
        </div>
      </nav>
      {menuOpen && <button type="button" className="mobile-nav-overlay" onClick={closeMenu} aria-label="Close menu" />}
    </>
  );
}
