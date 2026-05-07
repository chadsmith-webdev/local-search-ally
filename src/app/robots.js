import { siteConfig } from "@/lib/metadata";

export default function robots() {
  return {
    rules: [
      // Main crawler rules — allow all indexable content
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Explicit allow for AI search crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      // Google AI (Gemini / AI Overviews)
      { userAgent: "Google-Extended", allow: "/" },
      // Bing / Microsoft Copilot
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
