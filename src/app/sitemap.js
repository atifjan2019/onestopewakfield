import { services } from "@/data/services";
import { areas } from "@/data/areas";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.onestoptyreswakefield.co.uk";

function getFileDate(filePath) {
  try {
    const stats = fs.statSync(path.join(process.cwd(), filePath));
    return new Date(stats.mtime);
  } catch (error) {
    return new Date();
  }
}

export default function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: getFileDate('src/app/page.js'), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/areas`, lastModified: getFileDate('src/app/areas/page.js'), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: getFileDate('src/app/about/page.js'), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: getFileDate('src/app/contact/page.js'), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/book`, lastModified: getFileDate('src/app/book/page.js'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sitemap-page`, lastModified: getFileDate('src/app/sitemap-page/page.js'), changeFrequency: "monthly", priority: 0.3 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/${s.slug}`,
    lastModified: getFileDate('src/data/services.js'),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const areaPages = areas.map((a) => ({
    url: `${BASE_URL}/areas/${a.slug}`,
    lastModified: getFileDate('src/data/areas.js'),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
