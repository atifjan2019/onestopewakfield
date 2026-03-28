
import { services } from "@/data/services";
import { areas } from "@/data/areas";

const BASE_URL = "https://onestopewakfield.co.uk";

export default function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const areaPages = areas.map((a) => ({
    url: `${BASE_URL}/areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
