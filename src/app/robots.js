import { siteConfig } from "@/lib/metadata";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
    other: [
      {
        name: "IndexNow",
        value: `${siteConfig.url}/indexnow-72bc29c911304f96ba476049493d4a6e.txt`,
      },
    ],
  };
}