import { serviceGroups, treatments } from "../data/treatments";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export default function sitemap() {
  const friendlyCategoryPath = {
    skin: "/skin",
    hair: "/hair",
    "cosmetic-laser": "/laser-aesthetics",
        "dermatosurgery-vitiligo": "/dermatosurgery",
  };

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...[
      "/treatments",
      "/about-dr-hiteshree-shah",
      "/clinic",
      "/contact",
    ].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "/treatments" ? 0.95 : 0.85,
    })),
    ...serviceGroups.map((group) => ({
      url: `${siteUrl}${friendlyCategoryPath[group.slug] || `/care/${group.slug}`}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...treatments.map((treatment) => ({
      url: `${siteUrl}/treatments/${treatment.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
