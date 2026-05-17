import SpringdaleHvacClient from "@/components/SpringdaleHvacClient";

const pageUrl = "https://www.localsearchally.com/service-areas/springdale-ar/hvac";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Springdale, AR HVAC SEO | Local Search Ally",
    description:
      "Win the Springdale, AR HVAC market. I help HVAC contractors rank above competitors in the Map Pack, capture commercial leads, and outrank NWA competitors.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Springdale, AR HVAC SEO | Local Search Ally",
      description:
        "Win the Springdale, AR HVAC market. I help HVAC contractors rank above competitors in the Map Pack, capture commercial leads, and outrank NWA competitors.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Springdale, AR HVAC SEO | Local Search Ally",
      description:
        "Win the Springdale, AR HVAC market. I help HVAC contractors rank above competitors in the Map Pack, capture commercial leads, and outrank NWA competitors.",
    },
  };
}

export default function SpringdaleHvacPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for HVAC contractors in Springdale, AR — Google Business Profile optimization, service pages, and citation building for high-volume NWA markets.",
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
        name: "How long does it take to see results in the Springdale HVAC market?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Springdale is one of the most competitive HVAC markets in Northwest Arkansas. I typically see Map Pack movement within 90 days for established businesses. New businesses or those with filtered profiles may take 4-6 months of consistent work.",
        },
        },
        {
        "@type": "Question",
        name: "Should I focus on 'HVAC Springdale' or service-specific terms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You need both. 'HVAC Springdale' is high volume, but specific terms like 'AC repair Springdale' capture homeowners ready to hire immediately. I optimize for both.",
        },
        },
        {
        "@type": "Question",
        name: "Does local SEO help with commercial HVAC leads in Springdale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Springdale has a large commercial base. By optimizing your GBP for commercial categories and adding commercial project photos, I signal to Google that you handle both residential and industrial HVAC sectors.",
        },
        },
      {
        "@type": "Question",
        name: "What is the biggest mistake Springdale HVAC companies make with their GBP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Poor service-area boundary management. Because Springdale overlaps with Fayetteville and Rogers, many contractors either set their area too small or too large. I dial in these signals to maximize your local visibility.",
        },
      },
      {
        "@type": "Question",
        name: "I'm busy enough with referrals — why do I need SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Referrals are great until they aren't. When a homeowner moves to Springdale or has an emergency at 10 PM, they search. SEO ensures you're their first choice when referrals aren't an option.",
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
      { "@type": "ListItem", position: 4, name: "HVAC SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SpringdaleHvacClient auditUrl={auditUrl} />
    </>
  );
}
