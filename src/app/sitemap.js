import { serviceGroupPaths, treatments } from "@/data/treatments";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export default function sitemap() {
  const lastModified = new Date();
  const entry = (path, priority, changeFrequency = "monthly") => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    entry("/treatments", 0.95),
    ...["/about-dr-hiteshree-shah", "/clinic", "/contact"].map((path) => entry(path, 0.85)),
    ...Object.values(serviceGroupPaths).map((path) => entry(path, 0.9)),
    ...treatments.map((treatment) => entry(`/treatments/${treatment.slug}`, 0.8)),
  ];
}
