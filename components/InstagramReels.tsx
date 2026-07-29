'use client';

import Image from 'next/image';
import { instagramReels } from '../data/instagramReels';

export default function InstagramReels() {
  return (
    <section id="reels" className="reels-section" aria-label="Learn From Our Experts">
      <div className="wrap">
        <div className="reels-header">
          <p className="eyebrow center">Patient education</p>
          <h2 className="center">Learn From Our Experts</h2>
          <p>Short skincare tips, treatment explainers, and clinic updates from Dr. Hiteshree Shah.</p>
        </div>

        <div className="reels-static-grid">
          {instagramReels.map((reel) => (
            <a key={reel.url} href={reel.url} target="_blank" rel="noopener noreferrer" className="reel-static-card">
              <Image src={reel.image} alt="" width={520} height={640} sizes="(max-width: 760px) 92vw, 360px" />
              <span className="reel-static-content">
                <span className="reel-label">Instagram Reel</span>
                <strong>{reel.title}</strong>
                <span>{reel.description}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="reels-cta-wrapper">
          <a href="https://www.instagram.com/dr_hiteshreeshah_mddermat/" target="_blank" rel="noopener noreferrer" className="btn btn-primary instagram-cta-btn">
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
