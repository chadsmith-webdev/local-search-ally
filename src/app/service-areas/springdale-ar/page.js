import CityPageClient from "@/components/CityPageClient";
import { cityPageData } from "@/lib/cityPageData";

const d = cityPageData["springdale-ar"];
const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar";

export function generateMetadata() {
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: d.ogTitle,
      description: d.ogDescription,
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: d.ogTitle,
      description: d.ogDescription,
    },
  };
}

export default function SpringdaleServiceAreaPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    image: "https://www.localsearchally.com/icon.png",
    description:
      "Local SEO and web development for NWA home service trades — HVAC, plumbing, roofing, electrical, landscaping, and remodeling.",
    founder: { "@id": "https://www.localsearchally.com/about#chad-smith" },
    areaServed: [
      {
        "@type": "City",
        name: d.jsonLdAreaServed,
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
      { "@type": "AdministrativeArea", name: "Northwest Arkansas" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siloam Springs",
      addressRegion: "AR",
      addressCountry: "US",
      postalCode: "72761",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.18808",
      longitude: "-94.54064",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-12:00", "Su 14:00-18:00"],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile",
      "Web Development",
      "Contractor Marketing",
    ],
    sameAs: [
      "https://www.linkedin.com/in/chadsmith_localsearchally",
      "https://www.facebook.com/localsearchally",
      "https://www.youtube.com/@chadsmith_localsearchally",
    ],
    priceRange: "$$",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.localsearchally.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://www.localsearchally.com/service-areas",
      },
      { "@type": "ListItem", position: 3, name: d.city, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CityPageClient
        city={d.city}
        slug={d.slug}
        heroAccent={d.heroAccent}
        heroBody1={d.heroBody1}
        heroBody2={d.heroBody2}
        briefLabel={d.briefLabel}
        briefTitle={d.briefTitle}
        briefBody={d.briefBody}
        signalsLabel={d.signalsLabel}
        signals={d.signals}
        problemBody1={d.problemBody1}
        problemBody2={d.problemBody2}
        fitEyebrow={d.fitEyebrow}
        tradeList={d.tradeList}
        focusAreas={d.focusAreas}
        auditEyebrow={d.auditEyebrow}
        auditTitle={d.auditTitle}
        auditStatement={d.auditStatement}
        auditBody={d.auditBody}
        citationStats={d.citationStats}
        faqTitle={d.faqTitle}
        faqItems={d.faqItems}
        processAuditBody={d.processAuditBody}
        spokesEyebrow={d.spokesEyebrow}
        spokesTitle={d.spokesTitle}
        auditUrl={process.env.NEXT_PUBLIC_AUDIT_URL}
      />
    </>
  );
}
