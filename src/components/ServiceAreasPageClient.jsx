"use client";

import dynamic from "next/dynamic";

const ServiceAreasHero = dynamic(() => import("@/components/ServiceAreasHero"), { ssr: false });
const ServiceAreasCities = dynamic(() => import("@/components/ServiceAreasCities"), { ssr: false });
const ServiceAreasProof = dynamic(() => import("@/components/ServiceAreasProof"), { ssr: false });
const ServiceAreasProcess = dynamic(() => import("@/components/ServiceAreasProcess"), { ssr: false });

export default function ServiceAreasPageClient({ content }) {
  return (
    <>
      <ServiceAreasHero content={content.hero} />
      <ServiceAreasCities content={content.cities} />
      <ServiceAreasProof
        problem={content.problem}
        trades={content.trades}
      />
      <ServiceAreasProcess
        content={content.process}
        cta={content.cta}
      />
    </>
  );
}
