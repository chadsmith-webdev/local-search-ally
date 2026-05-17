import SpringdaleElectricalClient from "@/components/SpringdaleElectricalClient";

const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar/electrical";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Springdale, AR Electrician SEO | Local Search Ally",
    description:
      "Win the Springdale, AR electrical market. I help electricians rank above competitors in the Map Pack, capture commercial leads, and outrank NWA competitors.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Springdale, AR Electrician SEO | Local Search Ally",
      description:
        "Win the Springdale, AR electrical market. I help electricians rank above competitors in the Map Pack, capture commercial leads, and outrank NWA competitors.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Springdale, AR Electrician SEO | Local Search Ally",
      description:
        "Win the Springdale, AR electrical market. I help electricians rank above competitors in the Map Pack, capture commercial leads, and outrank NWA competitors.",
    },
  };
}

export default function SpringdaleElectricalPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for electricians in Springdale, AR — Google Business Profile optimization, service pages, and citation building for high-volume NWA markets.",
    areaServed: [
      {
        "@type": "City",
        name: "Springdale",
        containedInPlace: { "@type": "State", name: "Arkansas" },
      },
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
      latitude: "36.18670",
      longitude: "-94.12880",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to see results for electrician SEO in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Springdale is a competitive market for electricians. Most contractors I work with start seeing Map Pack movement within 90 days. For new businesses or those needing significant GBP cleanup, a 4-6 month timeline is more realistic for consistent lead flow.",
        },
      },
      {
        "@type": "Question",
        name: "Should I focus on 'Electrician Springdale' or service-specific searches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You need both. 'Electrician Springdale' is broad, but terms like 'EV charger installer' or 'emergency electrical repair' capture homeowners ready to hire immediately. I optimize for both.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a physical office in Springdale to rank in the Map Pack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A physical address in Springdale is the strongest signal. If you are a service-area business (SAB), I can still rank you, but your service-area boundaries and local citations must be perfectly aligned.",
        },
        },
        {
        "@type": "Question",
        name: "Why are my competitors outranking me with fewer reviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Review count is just one signal. If a competitor has a more complete GBP, better service categories, or a website with dedicated pages for Springdale services, Google may rank them higher. I focus on fixing those structural gaps.",
        },
        },
        {
        "@type": "Question",
        name: "Can you help me get more commercial electrical leads in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. By optimizing your GBP for commercial categories and building service pages for property managers, I can capture high-ticket commercial demand alongside residential calls.",
        },
        },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.localsearchally.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.localsearchally.com/service-areas" },
      { "@type": "ListItem", position: 3, name: "Springdale", item: "https://www.localsearchally.com/service-areas/springdale-ar" },
      { "@type": "ListItem", position: 4, name: "Electrician SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SpringdaleElectricalClient auditUrl={auditUrl} />
    </>
  );
}
