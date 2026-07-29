export const treatments = [
  {
    slug: "acne-treatment",
    title: "Acne Treatment in Vadodara",
    shortTitle: "Acne & Acne Scars",
    category: "Skin",
    description: "Personalized acne care for active acne, marks, texture changes, and acne scars.",
    image: "/images/doctor.png",
    highlights: ["Active acne control", "Acne marks and scars", "Chemical peels", "Long-term maintenance"],
  },
  {
    slug: "hair-fall-treatment",
    title: "Hair Fall Treatment in Vadodara",
    shortTitle: "Hair Fall & Alopecia",
    category: "Hair",
    description: "Medical evaluation and treatment planning for hair fall, dandruff, alopecia, and scalp concerns.",
    image: "/images/consult-desk.png",
    highlights: ["Scalp evaluation", "Hair fall diagnosis", "PRP therapy", "Dandruff treatment"],
  },
  {
    slug: "vitiligo-treatment",
    title: "Vitiligo Treatment in Vadodara",
    shortTitle: "Vitiligo Surgery",
    category: "Surgical",
    description: "Dermatology-led vitiligo care, including medical and surgical treatment options where appropriate.",
    image: "/images/treatment-area.png",
    highlights: ["Vitiligo assessment", "Medical care", "Surgical options", "Follow-up planning"],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal in Vadodara",
    shortTitle: "Laser Hair Removal",
    category: "Cosmetic & Laser",
    description: "Laser-based hair reduction planning with doctor-guided suitability and session guidance.",
    image: "/images/reception.jpg",
    highlights: ["Skin type evaluation", "Session planning", "Aftercare guidance", "Doctor supervision"],
  },
  {
    slug: "prp-therapy",
    title: "PRP Therapy in Vadodara",
    shortTitle: "PRP Therapy",
    category: "Cosmetic & Laser",
    description: "PRP therapy consultation for suitable hair and skin concerns after clinical evaluation.",
    image: "/images/doctor-hero.png",
    highlights: ["Suitability check", "Hair-focused PRP", "Skin rejuvenation", "Progress tracking"],
  },
  {
    slug: "chemical-peeling",
    title: "Chemical Peeling in Vadodara",
    shortTitle: "Chemical Peeling",
    category: "Skin",
    description: "Doctor-selected chemical peels for acne, pigmentation, uneven tone, and skin texture concerns.",
    image: "/images/signage.jpg",
    highlights: ["Acne care", "Pigmentation support", "Texture improvement", "Post-peel care"],
  },
];

export function getTreatment(slug) {
  return treatments.find((treatment) => treatment.slug === slug);
}
