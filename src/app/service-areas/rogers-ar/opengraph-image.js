import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Local SEO in Rogers, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "ROGERS, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "High competition.",
    titleAlt: "Higher opportunity.",
    subtitle: "Get found above contractors who never bothered to optimize.",
  });
}
