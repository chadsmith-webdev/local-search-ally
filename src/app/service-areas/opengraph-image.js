import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "NWA Service Areas — Local SEO for Home Service Trades | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "SERVICE AREAS",
    eyebrow: "ROGERS • BENTONVILLE • FAYETTEVILLE • SPRINGDALE • AND MORE",
    title: "If you're in NWA,",
    titleAlt: "I can help.",
    subtitle: "Local SEO for home service trades across Northwest Arkansas.",
  });
}
