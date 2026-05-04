import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Local SEO in Fayetteville, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "FAYETTEVILLE, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "90K+ residents.",
    titleAlt: "Most contractors are missing them.",
    subtitle: "Fayetteville's size rewards contractors who show up on Google.",
  });
}
