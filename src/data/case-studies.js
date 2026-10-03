export const caseStudies = [
  {
    id: "vitiligo",
    comparison: "slider",
    eyebrow: "Documented follow-up",
    title: "Vitiligo follow-up",
    note: "Before and follow-up photographs of the same area during vitiligo care. Changes are reviewed alongside the clinical assessment.",
    before: {
      src: "/images/cases/vitiligo-before.png",
      alt: "Clinical photo of depigmented patches before follow-up",
      width: 322,
      height: 426,
    },
    after: {
      src: "/images/cases/vitiligo-followup.png",
      alt: "Clinical follow-up photo of the same area",
      width: 324,
      height: 429,
    },
  },
  {
    id: "lesion",
    eyebrow: "Documented follow-up",
    title: "Skin lesion follow-up",
    note: "Facial photographs taken before and at follow-up. Skin lesions are assessed individually before care or removal is planned.",
    before: {
      src: "/images/cases/lesion-before-redacted.png",
      alt: "Clinical photo of facial skin with pigmented lesions before follow-up",
      width: 1350,
      height: 1800,
    },
    after: {
      src: "/images/cases/lesion-followup-redacted.png",
      alt: "Clinical follow-up photo of facial skin after assessment",
      width: 1350,
      height: 1800,
    },
  },
  {
    id: "procedure",
    eyebrow: "Documented follow-up",
    title: "Facial skin follow-up",
    note: "Facial skin photographed before and at follow-up. Each care plan depends on the examination, skin history, and individual response.",
    before: {
      src: "/images/cases/procedure-before-redacted.png",
      alt: "Clinical photo before a skin treatment follow-up",
      width: 1350,
      height: 1800,
    },
    after: {
      src: "/images/cases/procedure-followup-redacted.png",
      alt: "Clinical follow-up photo after a skin treatment",
      width: 1350,
      height: 1800,
    },
  },
  {
    id: "focused-area",
    eyebrow: "Documented follow-up",
    title: "Earlobe follow-up",
    note: "Close-up views of the earlobe before and at follow-up, with a photograph taken during care. The procedure and follow-up plan are specific to the individual case.",
    before: {
      src: "/images/cases/focused-before.jpeg",
      alt: "Close-up clinical photo before follow-up",
      width: 1237,
      height: 1800,
    },
    after: {
      src: "/images/cases/focused-followup.jpeg",
      alt: "Close-up clinical follow-up photo",
      width: 1800,
      height: 1350,
    },
    detail: {
      src: "/images/cases/focused-detail.jpeg",
      alt: "Additional clinical detail photo shared by the clinic",
      width: 1800,
      height: 1350,
    },
  },
];

const treatmentCaseMap = {
  "vitiligo-treatment": ["vitiligo"],
  "cyst-mole-removal": ["lesion"],
};

export function getCaseStudiesForTreatment(slug) {
  const ids = treatmentCaseMap[slug] || [];
  return ids.map((id) => caseStudies.find((caseStudy) => caseStudy.id === id)).filter(Boolean);
}
