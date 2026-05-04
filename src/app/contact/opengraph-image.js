import { buildOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Contact Local Search Ally — Start a Free Conversation";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OGImage() {
  return buildOGImage({
    badge: "CONTACT",
    eyebrow: "(479) 380-8626 • SILOAM SPRINGS, AR",
    title: "Start with a free conversation.",
    subtitle:
      "No pressure. No pitch. Just an honest look at where you stand online.",
    cta: "Let's Talk — It's Free",
  });
}
