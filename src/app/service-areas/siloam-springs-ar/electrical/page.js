import SiloamElectricalClient from "@/components/SiloamElectricalClient";

const pageUrl =
  "https://www.localsearchally.com/service-areas/siloam-springs-ar/electrical";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Siloam Springs, AR Electrician SEO | Local Search Ally",
    description:
      "Electricians in Siloam Springs win on trust — license, reviews, and finished-work photos. I help you build the local search presence that earns the call.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Siloam Springs, AR Electrician SEO | Local Search Ally",
      description:
        "Electricians in Siloam Springs win on trust — license, reviews, and finished-work photos. I help you build the local search presence that earns the call.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Siloam Springs, AR Electrician SEO | Local Search Ally",
      description:
        "Electricians in Siloam Springs win on trust — license, reviews, and finished-work photos. I help you build the local search presence that earns the call.",
    },
  };
}

export default function SiloamSpringsElectricalPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for electricians in Siloam Springs, AR — Google Business Profile optimization, service pages, and citation building.",
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
        name: "Does local SEO really matter for electricians? Most of my work is referrals.",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Referrals carry electrical work farther than most trades — homeowners are nervous about who they let touch their panel, so they ask around. But the bigger jobs — panel upgrades, EV chargers, generator installs, whole-home rewires — almost always end with a homeowner double-checking online before they pick up the phone. If your reviews are thin or your photos are stale, that second look loses you the job even when you were recommended.",
        },
      },
      {
        "@type": "Question",
        name: "How does my license show up in local search?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your Arkansas electrical license is one of the strongest trust signals you can put in front of a homeowner. I make sure it is listed on your GBP, called out on your service pages, and matched across every directory that affects rankings. Most electricians in Siloam Springs leave that field blank or buried — when yours is clearly displayed, the homeowner comparing three Map Pack results picks the one that looks the most legitimate.",
        },
      },
      {
        "@type": "Question",
        name: "I work across multiple towns. Can I rank in Gentry, Cave Springs, and Decatur too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — within reason. Your GBP ranks strongest near your physical address, but service-area pages let you target surrounding towns where you regularly take calls. I build a city-by-city page set tied back to your GBP and verified service area, so homeowners in Gentry searching for an electrician find you the same way Siloam Springs homeowners do.",
        },
      },
      {
        "@type": "Question",
        name: "Do photos of past work actually move the needle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For electrical, more than almost any other trade. Homeowners cannot evaluate your wiring skill — so they read your reviews and look at your photos. A clean panel install, a neatly run conduit, a finished EV charger — those photos do more for your conversion rate than another paragraph of copy. I help you build a simple cadence for capturing and posting them so your GBP keeps signaling activity to Google and trust to homeowners.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with electricians outside Siloam Springs?",
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
        name: "Electrician SEO",
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
      <SiloamElectricalClient auditUrl={auditUrl} />
    </>
  );
}
