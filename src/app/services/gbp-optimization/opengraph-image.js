import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Google Business Profile Optimization | Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "GBP OPTIMIZATION",
    eyebrow: "PROFILE AUDIT • PHOTO STRATEGY • POST MANAGEMENT",
    title: "Your GBP is your storefront.",
    titleAlt: "Most contractors leave it half-finished.",
    subtitle:
      "A complete, optimized profile is the fastest path into the Map Pack.",
  });
}
