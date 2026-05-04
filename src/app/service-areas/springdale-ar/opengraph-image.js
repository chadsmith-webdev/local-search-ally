import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Local SEO in Springdale, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "SPRINGDALE, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "Big city.",
    titleAlt: "Underserved search results.",
    subtitle:
      "Springdale home service searches are growing. The contractors ranking there aren't.",
  });
}
