import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "About Chad Smith — Local Search Ally";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "ABOUT",
    eyebrow: "LOCAL SEO SPECIALIST • SILOAM SPRINGS, AR",
    title: "The best contractor in town",
    titleAlt: "shouldn't be hard to find.",
    subtitle: "I'm Chad. I make sure they're not.",
  });
}
