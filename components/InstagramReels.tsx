'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { instagramReels } from '../data/instagramReels';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramReels() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [loadedCards, setLoadedCards] = useState<Record<number, boolean>>({});

  // Intersection observer for section fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Update Instagram embeds whenever reels array is processed or updated
  const processEmbeds = () => {
    if (typeof window !== 'undefined' && window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  };

  useEffect(() => {
    processEmbeds();
  }, []);

  // Check scroll position for navigation arrows
  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    checkScroll();
    carousel.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      carousel.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Smooth scroll handler for carousel navigation arrows
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Monitor DOM for Instagram embed rendering completion per card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: MutationObserver[] = [];

    cardRefs.current.forEach((cardEl, index) => {
      if (!cardEl) return;

      const observer = new MutationObserver(() => {
        const hasIframe = cardEl.querySelector('iframe') !== null || cardEl.querySelector('.instagram-media-rendered') !== null;
        if (hasIframe) {
          setLoadedCards((prev) => ({ ...prev, [index]: true }));
        }
      });

      observer.observe(cardEl, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class'],
      });

      // Initial check in case iframe was rendered immediately
      if (cardEl.querySelector('iframe') !== null || cardEl.querySelector('.instagram-media-rendered') !== null) {
        setLoadedCards((prev) => ({ ...prev, [index]: true }));
      }

      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [instagramReels]);

  return (
    <>
      {/* Load Instagram Embed script once lazily */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          processEmbeds();
        }}
      />

      <section
        id="reels"
        ref={sectionRef}
        className={`reels-section ${isVisible ? 'animate-fade-in-up' : ''}`}
        aria-label="Learn From Our Experts"
      >
        <div className="wrap">
          <div className="reels-header">
            <h2 className="center">Learn From Our Experts</h2>
            <p>
              Watch expert skincare tips, treatment insights, and patient education videos from Dr. Hiteshree Shah.
            </p>
          </div>

          <div className="reels-carousel-wrapper">
            {/* Left Nav Arrow */}
            <button
              type="button"
              className="nav-arrow left"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="reels-carousel" ref={carouselRef}>
              {instagramReels.map((reelUrl, index) => (
                <div
                  key={reelUrl}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="reel-card"
                >
                  {/* Skeleton Placeholder */}
                  <div className={`reel-skeleton ${loadedCards[index] ? 'hidden' : 'skeleton-shimmer'}`}>
                    <div className="skeleton-header">
                      <div className="skeleton-avatar" />
                      <div className="skeleton-user-info">
                        <div className="skeleton-line short" />
                        <div className="skeleton-line tiny" />
                      </div>
                    </div>
                    <div className="skeleton-media">
                      <svg className="skeleton-instagram-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <div className="skeleton-footer">
                      <div className="skeleton-line short" />
                      <div className="skeleton-line" />
                    </div>
                  </div>

                  {/* Embed Container */}
                  <div className="reel-embed-container">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={reelUrl}
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '14px',
                        boxShadow: 'none',
                        margin: '0 auto',
                        maxWidth: '540px',
                        minWidth: '260px',
                        padding: 0,
                        width: '100%',
                      }}
                    >
                      <a href={reelUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '16px', color: 'var(--teal-deep)', textAlign: 'center', fontSize: '0.85rem' }}>
                        View Reel on Instagram
                      </a>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              className="nav-arrow right"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* View More on Instagram Button */}
          <div className="reels-cta-wrapper">
            <a
              href="https://www.instagram.com/dr_hiteshreeshah_mddermat/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary instagram-cta-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>View More on Instagram &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
