import ServiceAreasCities from "@/components/ServiceAreasCities";
import ServiceAreasHero from "@/components/ServiceAreasHero";
import ServiceAreasProcess from "@/components/ServiceAreasProcess";
import ServiceAreasProof from "@/components/ServiceAreasProof";
import { serviceAreasLandingContent } from "@/content/serviceAreasLanding";

export const metadata = {
  title: serviceAreasLandingContent.metadata.title,
  description: serviceAreasLandingContent.metadata.description,
  alternates: {
    canonical: serviceAreasLandingContent.metadata.canonical,
  },
  openGraph: serviceAreasLandingContent.metadata.openGraph,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Service Areas | Local Search Ally",
  description: serviceAreasLandingContent.metadata.description,
  url: serviceAreasLandingContent.metadata.canonical,
  author: {
    "@type": "Person",
    name: "Chad Smith",
    worksFor: {
      "@type": "LocalBusiness",
      name: "Local Search Ally",
      url: "https://www.localsearchally.com",
      telephone: "+14793808626",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Siloam Springs",
        addressRegion: "AR",
        addressCountry: "US",
      },
    },
  },
  areaServed: serviceAreasLandingContent.cities.cards.map((card) => ({
    "@type": "City",
    name: `${card.city}, AR`,
  })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServiceAreasHero content={serviceAreasLandingContent.hero} />
        <ServiceAreasCities content={serviceAreasLandingContent.cities} />
        <ServiceAreasProof
          problem={serviceAreasLandingContent.problem}
          trades={serviceAreasLandingContent.trades}
        />
        <ServiceAreasProcess
          content={serviceAreasLandingContent.process}
          cta={serviceAreasLandingContent.cta}
        />
      </main>
    </>
  );
}
