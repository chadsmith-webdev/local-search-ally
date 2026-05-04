import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt =
  "Local SEO in Siloam Springs, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "SILOAM SPRINGS, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "My home market.",
    titleAlt: "I know the competition.",
    subtitle:
      "I'm based here. I know who's ranking and why — and how to get you there.",
  });
}
