import SiloamHvacClient from "@/components/SiloamHvacClient";

const pageUrl = "https://www.localsearchally.com/service-areas/siloam-springs-ar/hvac";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Siloam Springs HVAC SEO | Local Search Ally",
    description:
      "Siloam Springs runs on referrals — until someone searches. I help HVAC contractors show up in the Map Pack when it matters most: GBP, service pages, reviews.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Siloam Springs HVAC SEO | Local Search Ally",
      description:
        "Siloam Springs runs on referrals — until someone searches. Make sure you're there when they do.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Siloam Springs HVAC SEO | Local Search Ally",
      description:
        "Siloam Springs runs on referrals — until someone searches. Make sure you're there when they do.",
    },
  };
}

export default function SiloamSpringHvacPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for HVAC contractors in Siloam Springs, AR — Google Business Profile optimization, service pages, and citation building.",
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
        name: "How quickly do HVAC contractors see results in Siloam Springs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Siloam Springs is a smaller market, which works in your favor. Fewer competing GBPs means less ground to close. Most HVAC contractors start seeing movement in impressions and direction requests within 60 to 90 days of consistent work on GBP signals, service pages, and citations. Organic rankings tend to follow after that.",
        },
      },
      {
        "@type": "Question",
        name: "My HVAC business is seasonal. Does that change how we approach SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It changes the timing. Ranking takes weeks to move, so the goal is to build your local presence before the summer peak or winter rush — not during it. If you start in June, you are building for next summer. Starting in late winter or early spring sets you up for the season when it matters most.",
        },
      },
      {
        "@type": "Question",
        name: "Most of my HVAC work still comes from referrals. Do I actually need local SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Referrals work well until they don't — when someone moves to Siloam Springs and doesn't know anyone, when your usual referral source is already booked, or when the AC fails at 9pm and they need someone fast. All of those moments end in a search. The question is whether your name shows up when they do.",
        },
      },
      {
        "@type": "Question",
        name: "I claimed my Google Business Profile a while ago. Isn't that enough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claiming it is the starting point. What drives Map Pack rankings is what you do with it — accurate service categories, current photos, regular posts, a steady stream of recent reviews, and business information that matches your website and every directory. A claimed but inactive profile rarely beats one that is actively managed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with HVAC contractors outside of Siloam Springs?",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.localsearchally.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.localsearchally.com/service-areas" },
      { "@type": "ListItem", position: 3, name: "Siloam Springs", item: "https://www.localsearchally.com/service-areas/siloam-springs-ar" },
      { "@type": "ListItem", position: 4, name: "HVAC SEO", item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiloamHvacClient auditUrl={auditUrl} />
    </>
  );
}
