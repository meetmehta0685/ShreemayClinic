import Image from 'next/image';
import InstagramReels from '../components/InstagramReels';
import AnnouncementBar from '../components/AnnouncementBar';
import SiteHeader from '../components/SiteHeader';

const bookingUrl = 'https://booking.appointy.com/en-US/hite123/bookings/calendar';
const phoneHref = 'tel:+917861951664';
const whatsAppHref = 'https://wa.me/917861951664?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Shreemay%20Skin%20Clinic';
const googleMapsHref = 'https://www.google.com/maps/search/?api=1&query=Shreemay+Clinic+Vadodara';

export default function Home() {
  return (
    <>
      <div className="glow-blob" />
      <SiteHeader bookingUrl={bookingUrl} phoneHref={phoneHref} />
      <AnnouncementBar />

      <main id="top">
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Shreemay Clinic, Vadodara</p>
              <h1 className="animate-fade-in-up delay-1">Dermatologist-led skin, hair, laser and vitiligo care in Vadodara.</h1>
              <p className="hero-sub animate-fade-in-up delay-2">Consult Dr. Hiteshree Shah for calm, evidence-led dermatology care at Akshar Chowk.</p>
              <div className="hero-ctas animate-fade-in-up delay-3">
                <a href={bookingUrl} target="_blank" rel="noopener" className="btn btn-primary">Book Appointment</a>
                <a href={whatsAppHref} target="_blank" rel="noopener" className="btn btn-teal">WhatsApp</a>
                <a href={phoneHref} className="btn btn-secondary">Call 78619 51664</a>
              </div>
              <div className="hero-trust animate-fade-in-up delay-4" aria-label="Clinic trust highlights">
                <div><strong>4.9</strong><span>patient rating</span></div>
                <div><strong>390+</strong><span>reviews</span></div>
                <div><strong>MD</strong><span>dermatology</span></div>
              </div>
              <a href={googleMapsHref} target="_blank" rel="noopener" className="google-proof animate-fade-in-up delay-4">
                Find Shreemay Clinic on Google Maps
              </a>
            </div>

            <div className="hero-visual animate-fade-in-up delay-2">
              <Image
                src="/images/dr-hiteshree-iadvl-optimized.jpg"
                alt="Dr. Hiteshree Shah, dermatologist at Shreemay Clinic Vadodara"
                width={1228}
                height={1150}
                priority
                sizes="(max-width: 900px) 92vw, 44vw"
                className="hero-visual-main"
              />
              <div className="hero-doctor-card">
                <div>
                  <strong>Dr. Hiteshree Shah</strong>
                  <span>MBBS, MD Dermatology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="wrap trust-inner">
            <div>
              <p className="eyebrow">Why patients choose us</p>
              <h2>Care that starts with listening, then treats with clarity.</h2>
            </div>
            <div className="trust-grid">
              <div>
                <strong>Doctor-led consultation</strong>
                <span>Every visit is guided by Dr. Hiteshree Shah, not a generic package.</span>
              </div>
              <div>
                <strong>Clear diagnosis first</strong>
                <span>Treatment plans are explained before medicines, lasers, or procedures begin.</span>
              </div>
              <div>
                <strong>Skin, hair and vitiligo focus</strong>
                <span>Medical, cosmetic, laser, hair and dermatosurgery care under one roof.</span>
              </div>
              <div>
                <strong>Easy Vadodara access</strong>
                <span>Located at Akshar Chowk on Old Padra Road with online booking support.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="wrap about-inner">
            <div className="about-text">
              <p className="eyebrow">Meet your doctor</p>
              <h2>Dr. Hiteshree Shah</h2>
              <p className="lede">MBBS, MD (Skin &amp; Venereal Disease), B.J. Medical College, Ahmedabad. Fellowship in Dermatosurgery.</p>
              <p>Dr. Hiteshree treats the full range of skin, hair and nail conditions, from everyday acne and dandruff to more complex cases like vitiligo and chronic skin disease. Patients often mention how patiently she listens before she treats.</p>
              <div className="chips">
                <span className="chip">Skin &amp; Hair Specialist</span>
                <span className="chip">Vitiligo Surgeon</span>
                <span className="chip">Hair Transplant</span>
                <span className="chip">Laser &amp; Cosmetics</span>
              </div>
            </div>
            <figure className="about-photo">
              <Image src="/images/dr-hiteshree-profile-card.png" alt="Dr. Hiteshree Shah, MD Dermatology" width={447} height={447} sizes="(max-width: 900px) 92vw, 42vw" />
            </figure>
          </div>
        </section>

        <section id="services" className="services">
          <div className="wrap">
            <div className="services-header">
              <p className="eyebrow center">Treatments</p>
              <h2 className="center">Comprehensive Dermatology Care</h2>
              <p className="services-sub center">From medical dermatology to cosmetic, laser, and surgical procedures, personalized care for healthier skin, hair, and lasting confidence.</p>
            </div>

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

        <section className="process-section">
          <div className="wrap">
            <div className="process-header">
              <p className="eyebrow center">Consultation flow</p>
              <h2 className="center">What happens when you visit</h2>
            </div>
            <div className="process-grid">
              <div><span>01</span><strong>Book appointment</strong><p>Choose online booking, WhatsApp, or a direct call.</p></div>
              <div><span>02</span><strong>Doctor consultation</strong><p>Discuss symptoms, history, routine, and treatment goals.</p></div>
              <div><span>03</span><strong>Diagnosis and plan</strong><p>Understand the condition and the recommended care path.</p></div>
              <div><span>04</span><strong>Follow-up guidance</strong><p>Get aftercare, progress checks, and maintenance advice.</p></div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="wrap">
            <p className="eyebrow center">Clinic environment</p>
            <h2 className="center">A calm space to be treated in</h2>
            <div className="gallery-grid">
              <Image src="/images/reception.jpg" alt="Reception desk at Shreemay Skin Clinic" width={520} height={700} sizes="(max-width: 520px) 92vw, (max-width: 900px) 44vw, 31vw" />
              <Image src="/images/consult-desk.png" alt="Doctor consultation desk at Shreemay Skin Clinic" width={520} height={700} sizes="(max-width: 520px) 92vw, (max-width: 900px) 44vw, 31vw" />
              <Image src="/images/treatment-area.png" alt="Treatment area at Shreemay Skin Clinic" width={520} height={700} sizes="(max-width: 520px) 92vw, (max-width: 900px) 44vw, 31vw" />
            </div>
          </div>
        </section>

        <InstagramReels />

        <section id="reviews" className="reviews">
          <div className="wrap">
            <p className="eyebrow center">Patient stories</p>
            <h2 className="center">Trusted by 390+ happy patients</h2>
            <div className="reviews-summary">
              <strong>4.9★ on Google</strong>
              <span>390+ patient reviews for Shreemay Clinic, Vadodara</span>
              <a href={googleMapsHref} target="_blank" rel="noopener">View on Google Maps</a>
            </div>
            <div className="review-grid">
              <blockquote>
                <p>“I visited Shreemay Skin Clinic for my daughter’s eye vitiligo treatment. The results are amazing. Dr. Hiteshree ma’am is extremely kind and patient. She explains everything very politely and makes you feel comfortable throughout the treatment.”</p>
                <cite>Jaydeep Nakum</cite>
              </blockquote>
              <blockquote>
                <p>“Highly recommend this clinic for anyone dealing with acne. The doctor took the time to explain the entire procedure, and I am seeing amazing improvements in my skin texture.”</p>
                <cite>Vrunda Patel</cite>
              </blockquote>
              <blockquote>
                <p>“I had discussed my health problems with several doctors in Hyderabad, Bangalore, and Gurugram, but did not get results. She listened patiently and provided the right guidance and treatment.”</p>
                <cite>Vinod Gadakh</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="wrap visit-inner">
            <div className="visit-info">
              <p className="eyebrow">Visit the clinic</p>
              <h2>Book your consultation</h2>
              <p className="visit-address">Shop No. 8, 1st Floor, Ananya Complex,<br />Old Padra Road, Akshar Chowk,<br />Tandalja, Vadodara, Gujarat 390012</p>
              <table className="timings">
                <tbody>
                  <tr><td>Monday - Saturday</td><td>10:00 AM - 2:00 PM</td></tr>
                  <tr><td>&nbsp;</td><td>5:00 PM - 8:00 PM</td></tr>
                  <tr><td>Sunday</td><td>Closed</td></tr>
                </tbody>
              </table>
              <div className="visit-ctas">
                <a href={bookingUrl} target="_blank" rel="noopener" className="btn btn-primary">Book Appointment Online</a>
                <a href={phoneHref} className="btn btn-secondary">Call 78619 51664</a>
                <a href={whatsAppHref} target="_blank" rel="noopener" className="btn btn-teal">WhatsApp Us</a>
              </div>
            </div>
            <div className="visit-map">
              <iframe
                title="Shreemay Skin Clinic location map"
                src="https://www.google.com/maps?q=Shreemay+Clinic+Vadodara&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/images/logo.png" alt="Shreemay Skin Clinic logo" width={206} height={206} />
            </div>
            <div>
              <p className="wordmark small">Shreemay <span>Skin Clinic</span></p>
              <p className="footer-tagline">Skin, hair, laser and vitiligo care by Dr. Hiteshree Shah in Vadodara.</p>
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <h3>Visit</h3>
              <p>Shop No. 8, 1st Floor, Ananya Complex,<br />Old Padra Road, Akshar Chowk,<br />Tandalja, Vadodara - 390012</p>
            </div>
            <div>
              <h3>Timings</h3>
              <p>Monday - Saturday<br />10:00 AM - 2:00 PM<br />5:00 PM - 8:00 PM</p>
              <p>Sunday Closed</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p><a href={phoneHref}>78619 51664</a></p>
              <p><a href={whatsAppHref} target="_blank" rel="noopener">WhatsApp the clinic</a></p>
              <p><a href="https://instagram.com/dr_hiteshreeshah_mddermat" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <p><a href="#about">Meet the doctor</a></p>
              <p><a href="#services">Treatments</a></p>
              <p><a href="#reviews">Patient reviews</a></p>
              <p><a href="#visit">Map & booking</a></p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>Shreemay Skin Clinic, Vadodara</span>
            <div>
              <a href={bookingUrl} target="_blank" rel="noopener">Book Appointment</a>
              <a href={googleMapsHref} target="_blank" rel="noopener">Google Maps</a>
            </div>
          </div>
        </div>
      </footer>

      <a href={whatsAppHref} target="_blank" rel="noopener" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.928.552 3.727 1.507 5.25L2 22l4.859-1.474A9.945 9.945 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.15 8.15 0 01-4.375-1.267l-.314-.187-3.16.958.968-3.09-.204-.317A8.164 8.164 0 013.8 12c0-4.522 3.679-8.2 8.201-8.2 4.521 0 8.199 3.678 8.199 8.2 0 4.521-3.678 8.2-8.199 8.2z"/></svg>
      </a>
    </>
  );
}
