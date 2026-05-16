"use client";

import dynamic from "next/dynamic";

const AboutHero = dynamic(() => import("@/components/AboutHero"), { ssr: false });
const AboutOrigin = dynamic(() => import("@/components/AboutOrigin"), { ssr: false });
const AboutDifference = dynamic(() => import("@/components/AboutDifference"), { ssr: false });
const AboutApproach = dynamic(() => import("@/components/AboutApproach"), { ssr: false });
const AboutServiceAreas = dynamic(() => import("@/components/AboutServiceAreas"), { ssr: false });
const AboutPledge = dynamic(() => import("@/components/AboutPledge"), { ssr: false });
const AboutScrollController = dynamic(() => import("@/components/AboutScrollController"), { ssr: false });

export default function AboutPageClient() {
  return (
    <AboutScrollController>
      <AboutHero />
      <AboutOrigin />
      <AboutDifference />
      <AboutApproach />
      <AboutServiceAreas />
      <AboutPledge />
    </AboutScrollController>
  );
}
