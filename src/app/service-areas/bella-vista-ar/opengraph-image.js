import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt =
  "Local SEO in Bella Vista, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "BELLA VISTA, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "Retirees, homeowners, and steady demand.",
    subtitle:
      "Bella Vista runs on home services. Most trades aren't visible when people search.",
  });
}
