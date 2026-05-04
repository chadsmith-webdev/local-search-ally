import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt =
  "Local SEO in Cave Springs, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "CAVE SPRINGS, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "Small town.",
    titleAlt: "Big opportunity for the right contractor.",
    subtitle:
      "Minimal competition. High search intent. Easy wins for trades willing to show up.",
  });
}
