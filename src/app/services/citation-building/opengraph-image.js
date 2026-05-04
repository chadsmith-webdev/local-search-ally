import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Citation Building for NWA Contractors | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "CITATION BUILDING",
    eyebrow: "BUSINESS NAME • ADDRESS • PHONE • EVERYWHERE IT MATTERS",
    title: "Consistency wins the Map Pack.",
    subtitle:
      "Inconsistent listings quietly kill your local rankings. I fix them.",
  });
}
