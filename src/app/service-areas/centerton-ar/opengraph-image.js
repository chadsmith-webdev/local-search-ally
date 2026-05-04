import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Local SEO in Centerton, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "CENTERTON, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "One of NWA's fastest-growing cities.",
    subtitle:
      "The homeowners are there. Most of the contractors aren't visible online.",
  });
}
