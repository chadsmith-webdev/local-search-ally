import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Local Search Ally Blog — Local SEO tips for NWA contractors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "BLOG",
    eyebrow: "LOCAL SEO EDUCATION • NWA CONTRACTORS",
    title: "Practical tips for getting",
    titleAlt: "found on Google.",
    subtitle: "No fluff. Written for home service trades in Northwest Arkansas.",
  });
}
