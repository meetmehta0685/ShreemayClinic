export const caseStudies = [
  {
    id: "vitiligo",
    eyebrow: "Documented follow-up",
    title: "Vitiligo care",
    note: "A clinic-shared photo pair showing a depigmented area at two points in care.",
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
    title: "Pigmented lesion assessment",
    note: "A facial case pair shared for education around examination and follow-up.",
    before: {
      src: "/images/cases/lesion-before.jpeg",
      alt: "Clinical photo of facial skin with pigmented lesions before follow-up",
      width: 1800,
      height: 1350,
    },
    after: {
      src: "/images/cases/lesion-followup.jpeg",
      alt: "Clinical follow-up photo of facial skin after assessment",
      width: 1350,
      height: 1800,
    },
  },
  {
    id: "procedure",
    eyebrow: "Documented follow-up",
    title: "Clinical skin follow-up",
    note: "A clinic-shared photo pair showing how follow-up documentation can support a treatment plan.",
    before: {
      src: "/images/cases/procedure-before.jpeg",
      alt: "Clinical photo before a skin treatment follow-up",
      width: 1800,
      height: 1350,
    },
    after: {
      src: "/images/cases/procedure-followup.jpeg",
      alt: "Clinical follow-up photo after a skin treatment",
      width: 1800,
      height: 1350,
    },
  },
  {
    id: "focused-area",
    eyebrow: "Documented follow-up",
    title: "Focused area follow-up",
    note: "A close-up case pair shared by the clinic for context; suitability and response vary by person.",
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
  "scar-revision": ["procedure"],
  "warts-skin-tags": ["focused-area"],
};

export function getCaseStudiesForTreatment(slug) {
  const ids = treatmentCaseMap[slug] || [];
  return ids.map((id) => caseStudies.find((caseStudy) => caseStudy.id === id)).filter(Boolean);
}
