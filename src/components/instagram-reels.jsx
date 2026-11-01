import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";

import { instagramReels } from "@/data/instagram-reels";
import { instagramHref } from "@/data/clinic";

function InstagramIcon(props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

export default function InstagramReels() {
  return (
    <section id="education" className="education-section" aria-labelledby="education-heading">
      <div className="page-container">
        <div className="reels-heading">
          <div>
            <h2 id="education-heading">Follow us on Instagram</h2>
            <p>Skin care conversations, treatment explainers, and life at Shreemay.</p>
          </div>
          <a className="reels-profile" href={instagramHref} target="_blank" rel="noopener noreferrer"><InstagramIcon aria-hidden="true" /><span>@dr_hiteshreeshah_mddermat</span><ArrowUpRightIcon aria-hidden="true" /></a>
        </div>
        <ul className="reel-list">
          {instagramReels.map((reel) => (
            <li key={reel.url}>
              <a className="reel-row" href={reel.url} target="_blank" rel="noopener noreferrer">
                {reel.thumbnail ? (
                  <Image className="reel-thumb" src={reel.thumbnail} alt="" width={72} height={96} sizes="72px" />
                ) : (
                  <span className="reel-thumb reel-thumb-icon"><InstagramIcon aria-hidden="true" /></span>
                )}
                <span className="reel-text"><strong>{reel.title}</strong><span>{reel.description}</span></span>
                <ArrowUpRightIcon className="reel-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
