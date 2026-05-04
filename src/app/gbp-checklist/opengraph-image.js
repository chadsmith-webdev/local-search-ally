import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Free GBP Checklist — Is Your Google Business Profile Actually Complete?";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "FREE CHECKLIST",
    eyebrow: "GOOGLE BUSINESS PROFILE • LOCAL SEO",
    title: "Is your GBP actually complete?",
    subtitle: "Most contractors guess. This checklist shows you exactly what's missing.",
    cta: "Get the Free Checklist",
  });
}
