"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <div className="glow-blob" />

      <header 
        className="site-header"
        style={{ boxShadow: scrolled ? '0 8px 20px -12px rgba(32,80,76,0.25)' : 'none' }}
      >
        <div className="wrap header-inner">
          <a href="#top" className="wordmark" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/logo.png" alt="Shreemay Skin Clinic Logo" style={{ height: '40px', width: 'auto', mixBlendMode: 'multiply' }} />
            <span>Shreemay <span>Skin Clinic</span></span>
          </a>
          <nav className="main-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Clinic</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
            <a href="https://booking.appointy.com/en-US/hite123/bookings/calendar" target="_blank" rel="noopener" className="btn btn-small btn-primary">Book Online</a>
            <a href="tel:+917861951664" className="btn btn-small btn-secondary">Call</a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span className="hamburger-box">
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Clinic</a>
        <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
        <a href="#visit" onClick={() => setMenuOpen(false)}>Visit</a>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px', width: '100%' }}>
          <a href="https://booking.appointy.com/en-US/hite123/bookings/calendar" target="_blank" rel="noopener" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Book Online</a>
          <a href="tel:+917861951664" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>Call 78619 51664</a>
        </div>
      </nav>
      {menuOpen && <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)} />}



      <main id="top">
        <section className="hero">
          <div className="wrap hero-inner">
            <h1 className="animate-fade-in-up delay-2">Clear skin, confident you.</h1>
            <p className="hero-sub animate-fade-in-up delay-3">Skin, hair, and vitiligo care from a doctor who actually listens — 4.9★ from 394 patients in Vadodara.</p>
            <p className="hero-desc animate-fade-in-up delay-4">One stop solution for all your skin related diseases, hair disorders and sexually transmitted disorders. Best clinic for treating disease like vitiligo (safed daag) with surgical modality.</p>
          </div>
        </section>



        <section id="about" className="about">
          <div className="wrap about-inner">
            <div className="about-text">
              <h2>Dr. Hiteshree Shah</h2>

              <p className="lede">MBBS, MD (Skin &amp; Venereal Disease) — B.J. Medical College, Ahmedabad. Fellowship in Dermatosurgery.</p>
              <p>Dr. Hiteshree treats the full range of skin, hair and nail conditions — from everyday acne and dandruff to more complex cases like vitiligo and chronic skin disease — combining strong academic training with a calm, unhurried consultation style. Patients often mention how patiently she listens before she treats.</p>
              <div className="chips">
                <span className="chip">Skin &amp; Hair Specialist</span>
                <span className="chip">Vitiligo Surgeon</span>
                <span className="chip">Hair Transplant</span>
                <span className="chip">Laser &amp; Cosmetics</span>
              </div>
            </div>
            <figure className="about-photo">
              <img src="/images/doctor.png" alt="Dr. Hiteshree Shah — Skin &amp; Hair Specialist" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            </figure>
          </div>
        </section>

        <section id="services" className="services">
          <div className="wrap">
            <h2 className="center">Services</h2>


            <div className="service-groups">
              <div className="service-group">
                <h3>Skin</h3>
                <ul>
                  <li>Acne &amp; Acne Scars</li>
                  <li>Chemical Peeling</li>
                  <li>Tinea (Fungal Infections)</li>
                  <li>Warts &amp; Mole Excision</li>
                  <li>Chronic &amp; Recurrent Skin Disease</li>
                </ul>
              </div>
              <div className="service-group">
                <h3>Hair</h3>
                <ul>
                  <li>Hair Transplant</li>
                  <li>Hair Loss &amp; Alopecia</li>
                  <li>Dandruff Treatment</li>
                  <li>Hair &amp; Nail Disease</li>
                </ul>
              </div>
              <div className="service-group">
                <h3>Cosmetic &amp; Laser</h3>
                <ul>
                  <li>Laser Hair Removal</li>
                  <li>PRP Therapy</li>
                  <li>Mesotherapy</li>
                  <li>Skin Rejuvenation</li>
                </ul>
              </div>
              <div className="service-group">
                <h3>Surgical</h3>
                <ul>
                  <li>Vitiligo Surgery</li>
                  <li>Scar Revision</li>
                  <li>STD Treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="wrap">
            <h2 className="center">A calm space to be treated in</h2>

            <div className="gallery-grid">
              <img src="/images/reception.jpg" alt="Reception desk at Shreemay Skin Clinic" />
              <img src="/images/consult-desk.png" alt="Doctor's consultation desk" />
              <img src="/images/treatment-area.png" alt="Treatment seating area with services wall art" />
            </div>
          </div>
        </section>

        <section id="reviews" className="reviews">
          <div className="wrap">
            <h2 className="center">Trusted by 390+ happy patients</h2>

            <div className="review-grid">
              <blockquote>
                <p>“I visited Shrimay Skin Clinic for my daughter’s eye vitiligo treatment. The results are amazing—her vitiligo is now completely cured. Dr. Hiteshree ma’am is extremely kind and patient. She explains everything very politely and makes you feel comfortable throughout the treatment. Highly recommended clinic!”</p>
                <cite>— Jaydeep Nakum</cite>
              </blockquote>
              <blockquote>
                <p>“Highly recommend this clinic for anyone dealing with acne! The doctor took the time to explain the entire procedure, and I’m seeing amazing improvements in my skin texture. Amazing results and mene cosmelan peel krvaya tha best result and Mam ka nature bhi bahot acha hai. Thank you ❤️”</p>
                <cite>— Vrunda Patel</cite>
              </blockquote>
              <blockquote>
                <p>“I recently made an appointment with Dr. Hiteshree Shah. Previously, I had discussed my health problems with several doctors in Hyderabad, Bangalore, and Gurugram, but I didn't get any results. She listened patiently and provided the right guidance and treatment that finally cured my issue. Highly recommended.”</p>
                <cite>— Vinod Gadakh</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="wrap visit-inner">
            <div className="visit-info">
              <h2>Book your consultation</h2>

              <p className="visit-address">Shop No. 8, 1st Floor, Ananya Complex,<br />Old Padra Road, Akshar Chowk,<br />Tandalja, Vadodara, Gujarat 390012</p>
              <table className="timings">
                <tbody>
                  <tr><td>Monday – Saturday</td><td>10:00 AM – 2:00 PM</td></tr>
                  <tr><td>&nbsp;</td><td>5:00 PM – 8:00 PM</td></tr>
                  <tr><td>Sunday</td><td>Closed</td></tr>
                </tbody>
              </table>
              <div className="visit-ctas">
                <a href="https://booking.appointy.com/en-US/hite123/bookings/calendar" target="_blank" rel="noopener" className="btn btn-primary">Book Appointment Online</a>
                <a href="tel:+917861951664" className="btn btn-secondary">Call 78619 51664</a>
                <a href="https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic" target="_blank" rel="noopener" className="btn btn-teal">WhatsApp Us</a>
              </div>


            </div>
            <div className="visit-map">
              <iframe
                title="Shreemay Skin Clinic location map"
                src="https://www.google.com/maps?q=Shreemay+Skin+Clinic+Akshar+Chowk+Vadodara&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ backgroundColor: 'var(--cream)', padding: '6px 12px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/logo.png" alt="Shreemay Skin Clinic Logo" style={{ height: '48px', width: 'auto' }} />
          </div>
          <p className="wordmark small" style={{ marginBottom: 0 }}>Shreemay <span>Skin Clinic</span></p>
          <p style={{ margin: 0 }}>Shop No. 8, Ananya Complex, Old Padra Road, Akshar Chowk, Vadodara — 390012</p>
          <p style={{ margin: 0 }}>
            <a href="tel:+917861951664">78619 51664</a> · <a href="https://instagram.com/dr_hiteshreeshah_mddermat" target="_blank" rel="noopener noreferrer">Instagram</a>
            {/* TODO: confirm this link is live before launch
            · <a href="https://www.facebook.com/104155635670094" target="_blank" rel="noopener noreferrer">Facebook</a>
            · <a href="https://youtube.com/@ShreemaySkinClinic?si=8IuQ0nTUPKyYgEXD" target="_blank" rel="noopener noreferrer">YouTube</a>
            */}
          </p>
        </div>
      </footer>

      <a href="https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic" target="_blank" rel="noopener" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.928.552 3.727 1.507 5.25L2 22l4.859-1.474A9.945 9.945 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.15 8.15 0 01-4.375-1.267l-.314-.187-3.16.958.968-3.09-.204-.317A8.164 8.164 0 013.8 12c0-4.522 3.679-8.2 8.201-8.2 4.521 0 8.199 3.678 8.199 8.2 0 4.521-3.678 8.2-8.199 8.2z"/></svg>
      </a>

    </>
  );
}
