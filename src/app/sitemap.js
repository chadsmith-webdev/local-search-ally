import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/metadata";

const BASE = siteConfig.url;

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const staticUrls = [
    { url: BASE, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/services`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/services/local-seo`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/services/web-design`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/services/gbp-optimization`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/services/reputation-management`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/services/citation-building`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/about`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/contact`, lastModified: new Date("2026-04-03") },
    { url: `${BASE}/portfolio`, lastModified: new Date("2026-04-03") },
    { url: `${BASE}/resources`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/blog`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/rogers-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/bentonville-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/fayetteville-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/springdale-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/siloam-springs-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/centerton-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/bella-vista-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/cave-springs-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/service-areas/lowell-ar`, lastModified: new Date("2026-05-07") },
    { url: `${BASE}/gbp-checklist`, lastModified: new Date("2026-04-27") },
  ];

  return [...staticUrls, ...blogUrls];
}
