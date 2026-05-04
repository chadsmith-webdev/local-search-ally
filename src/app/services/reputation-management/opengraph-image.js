import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Reputation Management for NWA Contractors | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "REPUTATION",
    eyebrow: "REVIEW SYSTEMS • TEMPLATES • MONITORING",
    title: "Reviews close jobs before you",
    titleAlt: "pick up the phone.",
    subtitle: "Build the kind of trust that turns searches into calls.",
  });
}
