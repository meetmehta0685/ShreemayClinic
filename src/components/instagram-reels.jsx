import Image from "next/image";
import { ArrowUpRightIcon, PlayCircleIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { instagramReels } from "@/data/instagramReels";
import MotionReveal from "@/components/motion-reveal";

const instagramHref = "https://www.instagram.com/dr_hiteshreeshah_mddermat/";

export default function InstagramReels() {
  return (
    <section id="education" className="education-section" aria-labelledby="education-heading">
      <div className="page-container">
        <div className="section-heading section-heading-split">
          <div>
            <h2 id="education-heading">Helpful context before you choose care.</h2>
          </div>
          <p className="section-intro">
            Short treatment explainers and dermatologist-led guidance from Dr. Hiteshree Shah.
          </p>
        </div>

        <div className="education-grid">
          {instagramReels.map((reel, index) => (
            <MotionReveal key={reel.url} className="education-card-motion" preset="clip" delay={index * 0.08} amount={0.16}>
              <Card className="education-card">
              <a href={reel.url} target="_blank" rel="noopener noreferrer" className="education-card-link">
                <Image
                  src={reel.image}
                  alt=""
                  width={520}
                  height={640}
                  sizes="(max-width: 720px) 92vw, 40vw"
                  className="education-card-image"
                />
                <div className="education-card-overlay">
                  <Badge variant="secondary">
                    <PlayCircleIcon data-icon="inline-start" />
                    Instagram reel
                  </Badge>
                  <strong>{reel.title}</strong>
                  <span>{reel.description}</span>
                  <span className="education-card-arrow" aria-hidden="true">
                    <ArrowUpRightIcon />
                  </span>
                </div>
              </a>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <div className="section-action-row">
          <a
            href={instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Follow the clinic on Instagram
            <ArrowUpRightIcon data-icon="inline-end" />
          </a>
        </div>
      </div>
    </section>
  );
}
