import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Web Design for NWA Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "WEB DESIGN",
    eyebrow: "MOBILE-FIRST • SEO-BUILT • LEAD-GEN FOCUSED",
    title: "A site built to convert —",
    titleAlt: "not just exist.",
    subtitle:
      "Home service contractors deserve a website that actually brings in calls.",
  });
}
