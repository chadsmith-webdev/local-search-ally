import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Local Search Ally Services — Local SEO and web development for NWA contractors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "SERVICES",
    eyebrow: "LOCAL SEO • WEB DESIGN • CITATIONS • REPUTATION",
    title: "Local SEO. Web Dev. No Contracts.",
    subtitle: "One person. Every service you need to get found and get calls.",
  });
}
