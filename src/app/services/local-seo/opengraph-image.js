import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Local SEO for NWA Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "LOCAL SEO",
    eyebrow: "GBP • CITATIONS • ON-PAGE SEO • MONTHLY REPORTS",
    title: "Get found in the Map Pack.",
    subtitle: "Most contractors are invisible on Google. That's fixable.",
    cta: "See Where You Stand — It's Free",
  });
}
