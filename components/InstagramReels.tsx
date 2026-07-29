'use client';

import { useEffect, useRef, useState } from 'react';
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [loadedCards, setLoadedCards] = useState<Record<number, boolean>>({});

  const processEmbeds = () => {
    if (typeof window !== 'undefined' && window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  };

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    processEmbeds();
  }, []);

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

  useEffect(() => {
    const observers: MutationObserver[] = [];

    cardRefs.current.forEach((cardEl, index) => {
      if (!cardEl) return;

      const observer = new MutationObserver(() => {
        const hasEmbed = cardEl.querySelector('iframe') || cardEl.querySelector('.instagram-media-rendered');
        if (hasEmbed) {
          setLoadedCards((prev) => ({ ...prev, [index]: true }));
        }
      });

      observer.observe(cardEl, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

      if (cardEl.querySelector('iframe') || cardEl.querySelector('.instagram-media-rendered')) {
        setLoadedCards((prev) => ({ ...prev, [index]: true }));
      }

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={processEmbeds} />

      <section id="reels" className="reels-section" aria-label="Learn From Our Experts">
        <div className="wrap">
          <div className="reels-header">
            <p className="eyebrow center">Patient education</p>
            <h2 className="center">Learn From Our Experts</h2>
            <p>Watch real skincare tips, treatment explainers, and clinic updates from Dr. Hiteshree Shah.</p>
          </div>

          <div className="reels-carousel-wrapper">
            <button
              type="button"
              className="nav-arrow left"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="reels-carousel" ref={carouselRef}>
              {instagramReels.map((reelUrl, index) => (
                <div
                  key={reelUrl}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="reel-card reel-embed-card"
                >
                  <div className={`reel-skeleton ${loadedCards[index] ? 'hidden' : 'skeleton-shimmer'}`}>
                    <div className="skeleton-header">
                      <div className="skeleton-avatar" />
                      <div className="skeleton-user-info">
                        <div className="skeleton-line short" />
                        <div className="skeleton-line tiny" />
                      </div>
                    </div>
                    <div className="skeleton-media">
                      <span>Loading clinic reel</span>
                    </div>
                    <div className="skeleton-footer">
                      <div className="skeleton-line short" />
                      <div className="skeleton-line" />
                    </div>
                  </div>

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
                      <a href={reelUrl} target="_blank" rel="noopener noreferrer" className="reel-fallback-link">
                        View Reel on Instagram
                      </a>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="nav-arrow right"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="reels-cta-wrapper">
            <a href="https://www.instagram.com/dr_hiteshreeshah_mddermat/" target="_blank" rel="noopener noreferrer" className="btn btn-primary instagram-cta-btn">
              <span>View More on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
