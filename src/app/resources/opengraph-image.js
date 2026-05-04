import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Free Resources for NWA Contractors | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "RESOURCES",
    eyebrow: "DOWNLOADS • GUIDES • TOOLS",
    title: "Free tools and guides",
    titleAlt: "for NWA contractors.",
    subtitle:
      "Practical — not padded. Use them whether you work with me or not.",
  });
}
