"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, PauseIcon, PlayIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { instagramReels } from "@/data/instagramReels";
import { instagramHref } from "@/data/clinic";

function InstagramIcon(props) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function Reel({ reel, paused }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    function update() {
      if (visible && !paused && !motion.matches && !document.hidden) {
        video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
      } else video.pause();
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.3 });
    observer.observe(video);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      video.pause();
    };
  }, [paused, failed]);

  return (
    <article className="reel-tile" aria-label={reel.title}>
      <div className="reel-media">
        {reel.videoSrc && !failed ? (
          <>
            <video ref={videoRef} src={reel.videoSrc} poster={reel.poster || undefined} muted loop playsInline preload="none" controls={paused} onError={() => setFailed(true)} aria-label={reel.title} />
            {!paused && <a className="reel-hover-link" href={reel.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${reel.title} on Instagram`}><InstagramIcon aria-hidden="true" /></a>}
          </>
        ) : (
          <iframe src={`${reel.url}embed/`} title={`${reel.title} on Instagram`} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" />
        )}
      </div>
      <a className="reel-caption" href={reel.url} target="_blank" rel="noopener noreferrer">
        <InstagramIcon aria-hidden="true" /><span>{reel.title}</span><ArrowUpRightIcon aria-hidden="true" />
      </a>
    </article>
  );
}

export default function InstagramReels() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: true });
  const hasVideos = instagramReels.some((reel) => reel.videoSrc);

  useEffect(() => {
    const track = trackRef.current;
    function update() {
      setEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2 });
    }
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); track.removeEventListener("scroll", update); };
  }, []);

  function scroll(direction) {
    const track = trackRef.current;
    const distance = track.firstElementChild?.getBoundingClientRect().width || track.clientWidth;
    track.scrollBy({ left: direction * (distance + 24), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

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
        <div className="reels-track" id="clinic-reels" ref={trackRef} tabIndex={0} role="region" aria-label="Clinic Instagram reels. Swipe or use the arrow buttons to browse.">
          {instagramReels.map((reel) => <Reel key={reel.url} reel={reel} paused={paused} />)}
        </div>
        <div className="reels-footer">
          <p>Watch more from Dr. Hiteshree Shah on Instagram.</p>
          <div className="reels-controls">
            {hasVideos && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play reel previews" : "Pause reel previews"} aria-pressed={paused}>{paused ? <PlayIcon /> : <PauseIcon />}</button>}
            {!(edges.start && edges.end) && <>
              <button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-label="Previous reel" aria-controls="clinic-reels"><ArrowLeftIcon /></button>
              <button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-label="Next reel" aria-controls="clinic-reels"><ArrowRightIcon /></button>
            </>}
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" })}>Follow along<ArrowUpRightIcon data-icon="inline-end" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
