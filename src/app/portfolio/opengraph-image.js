import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt =
  "Portfolio — Web Design for NWA Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "PORTFOLIO",
    eyebrow: "PLUMBING • HVAC • ELECTRICAL • NWA DEMO BUILDS",
    title: "Sites built to rank.",
    titleAlt: "And convert.",
    subtitle:
      "See what a mobile-first, SEO-built trade website actually looks like.",
  });
}
