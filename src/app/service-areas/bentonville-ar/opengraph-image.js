import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Local SEO in Bentonville, AR for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "BENTONVILLE, AR",
    eyebrow: "LOCAL SEO • HOME SERVICE TRADES • NORTHWEST ARKANSAS",
    title: "Fortune 500 HQ.",
    titleAlt: "Zero excuse to be invisible.",
    subtitle:
      "Bentonville's growth means more searches — and more missed calls for contractors who don't rank.",
  });
}
