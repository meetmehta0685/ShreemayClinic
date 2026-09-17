import Image from "next/image";

export default function BeforeAfterGallery({
  caseStudies: studies,
  heading = "Before and follow-up, shown with context.",
  intro = "Selected clinic photos help explain why examination and follow-up matter. Individual response, timing, and suitability vary.",
  compact = false,
}) {
  if (!studies?.length) {
    return null;
  }

  return (
    <section className={`before-after-section${compact ? " before-after-section-compact" : ""}`} aria-labelledby="case-studies-heading">
      <div className="page-container">
        <div className="before-after-heading">
          <div>
            <h2 id="case-studies-heading">{heading}</h2>
          </div>
          <p>{intro}</p>
        </div>

        <div className="before-after-grid">
          {studies.map((study) => (
            <article className="before-after-card" key={study.id}>
              <div className={`before-after-media${study.detail ? " before-after-media-with-detail" : ""}`}>
                <figure>
                  <div className="before-after-frame">
                    <Image
                      src={study.before.src}
                      alt={study.before.alt}
                      width={study.before.width}
                      height={study.before.height}
                      sizes="(max-width: 760px) 88vw, (max-width: 1023px) 44vw, 28vw"
                    />
                  </div>
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  <div className="before-after-frame">
                    <Image
                      src={study.after.src}
                      alt={study.after.alt}
                      width={study.after.width}
                      height={study.after.height}
                      sizes="(max-width: 760px) 88vw, (max-width: 1023px) 44vw, 28vw"
                    />
                  </div>
                  <figcaption>After / follow-up</figcaption>
                </figure>
                {study.detail && (
                  <figure className="before-after-detail">
                    <div className="before-after-frame">
                      <Image
                        src={study.detail.src}
                        alt={study.detail.alt}
                        width={study.detail.width}
                        height={study.detail.height}
                        sizes="(max-width: 760px) 88vw, (max-width: 1023px) 44vw, 28vw"
                      />
                    </div>
                    <figcaption>Clinical detail</figcaption>
                  </figure>
                )}
              </div>
              <div className="before-after-copy">
                <h3>{study.title}</h3>
                <p>{study.note}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="before-after-disclaimer">
          Photos are shared by the clinic for education. They are not a promise of outcome, and your doctor will assess your situation individually.
        </p>
      </div>
    </section>
  );
}
