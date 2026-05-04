import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt =
  "Local Search Ally — Local SEO & Web Dev for NWA Contractors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    eyebrow: "LOCAL SEO & WEB DEVELOPMENT • SILOAM SPRINGS, AR",
    title: "Your next customer just searched Google.",
    titleAlt: "They found your competitor.",
    subtitle: "Helping NWA home service trades get found and get calls.",
    cta: "Book a Free Conversation →",
  });
}
