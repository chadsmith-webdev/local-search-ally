import SiloamLandscapingClient from "@/components/SiloamLandscapingClient";

const pageUrl =
  "https://www.localsearchally.com/service-areas/siloam-springs-ar/landscaping";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Siloam Springs Landscaping SEO | Local Search Ally",
    description:
      "Landscaping in Siloam Springs is won on photos and neighbor reviews. I help local crews show up first when homeowners search for lawn care, mulch, and design.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Siloam Springs Landscaping SEO | Local Search Ally",
      description:
        "Landscaping in Siloam Springs is won on photos and neighbor reviews. I help local crews show up first when homeowners search for lawn care, mulch, and design.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Siloam Springs Landscaping SEO | Local Search Ally",
      description:
        "Landscaping in Siloam Springs is won on photos and neighbor reviews. I help local crews show up first when homeowners search for lawn care, mulch, and design.",
    },
  };
}

export default function SiloamSpringsLandscapingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for landscapers in Siloam Springs, AR — Google Business Profile optimization, service pages, and citation building.",
    areaServed: [
      {
        "@type": "City",
        name: "Siloam Springs",
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
      latitude: "36.18808",
      longitude: "-94.54064",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "I'm a one-truck crew. How do I compete with the big commercial outfits on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Big crews win on commercial accounts. You win on residential — and Google ranks residential search locally, not by company size. A clean GBP, a steady stream of recent yard photos from Siloam Springs neighborhoods, and 30+ reviews from homeowners on your route will outrank a regional company with a generic profile every single time. Size doesn't decide who shows up in the Map Pack. Local relevance does.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to my SEO during the off-season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "November through February is when most landscapers go quiet on Google — which is exactly the wrong move. Homeowners book spring cleanups in late winter, and the crew that's been posting photos, collecting reviews, and updating service pages through the off-season is the one they call in March. I structure the year so December and January build the foundation that gets you booked solid by April.",
        },
      },
      {
        "@type": "Question",
        name: "Should I list every service on Google or focus on a few?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'List the services you actually want more of. Google rewards specificity — a profile that says "weekly lawn care, mulch installation, and shrub trimming" with photos of each will rank better for those searches than a profile that lists 22 services with no proof behind any of them. Pick the four or five jobs that pay best and build everything — GBP categories, service pages, photos, reviews — around earning more of those.',
        },
      },
      {
        "@type": "Question",
        name: "Can I rank for surrounding neighborhoods and nearby towns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Landscaping has a strong neighborhood effect — once you're mowing two yards on a street, you're already the visible local choice for the rest of the block. I build service-area pages for the surrounding communities you actually run routes in, so homeowners in Gentry, Cave Springs, and Decatur searching for a landscaper find you the same way Siloam Springs homeowners do.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with landscapers outside Siloam Springs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — I work with home service trades across Northwest Arkansas, including Rogers, Bentonville, Fayetteville, Springdale, and surrounding communities.",
        },
      },
    ],
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Siloam Springs",
        item: "https://www.localsearchally.com/service-areas/siloam-springs-ar",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Landscaping SEO",
        item: pageUrl,
      },
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
      <SiloamLandscapingClient auditUrl={auditUrl} />
    </>
  );
}
