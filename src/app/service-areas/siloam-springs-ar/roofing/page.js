import SiloamRoofingClient from "@/components/SiloamRoofingClient";

const pageUrl =
  "https://www.localsearchally.com/service-areas/siloam-springs-ar/roofing";
const auditUrl = process.env.NEXT_PUBLIC_AUDIT_URL ?? "/audit";

export function generateMetadata() {
  return {
    title: "Siloam Springs, AR Roofing SEO | Local Search Ally",
    description:
      "Roofers in Siloam Springs win on proof — finished-roof photos, real reviews, and a verified license. I build the local search presence that earns the call after the next storm.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Siloam Springs, AR Roofing SEO | Local Search Ally",
      description:
        "Roofers in Siloam Springs win on proof — finished-roof photos, real reviews, and a verified license. I build the local search presence that earns the call after the next storm.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Siloam Springs, AR Roofing SEO | Local Search Ally",
      description:
        "Roofers in Siloam Springs win on proof — finished-roof photos, real reviews, and a verified license. I build the local search presence that earns the call after the next storm.",
    },
  };
}

export default function SiloamSpringsRoofingPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description:
      "Local SEO for roofers in Siloam Springs, AR — Google Business Profile optimization, service pages, and citation building.",
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
        name: "Storm chasers flood Siloam Springs after every hail event. How do I compete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You compete by looking unmistakably local before the storm hits. Out-of-state crews can knock on doors, but they can't show three years of Siloam Springs reviews, a verified GBP with a local address, photos of roofs they've replaced in town, and a license that matches Arkansas records. When a homeowner pulls up Google after a storm, those signals are the difference between the call going to you or to a truck with an out-of-state plate.",
        },
      },
      {
        "@type": "Question",
        name: "Do I really need a website if my Google Business Profile is good?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For roofing, yes — because the ticket is too big for a homeowner to call without checking. They tap your GBP, then they tap your website. If the site loads slow, looks dated, or has no photos of finished roofs, you lose them right there. Your GBP gets you in the consideration set; your website is where you actually win the job.",
        },
      },
      {
        "@type": "Question",
        name: "How does insurance work into local SEO for roofers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'After a hail storm, half the searches in Siloam Springs are some version of "roof insurance claim" or "hail damage inspection." If your service pages and GBP don\'t speak that language clearly — what you cover, how you work with adjusters, what an inspection looks like — homeowners scroll past you to the roofer who answers the question already in their head. The work doesn\'t change. The way you describe it on Google does.',
        },
      },
      {
        "@type": "Question",
        name: "I work all over Northwest Arkansas. Can I rank in surrounding towns too?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — within reason. Your GBP ranks strongest near your physical address, but service-area pages let you target the towns you actually drive to. I build a city-by-city page set tied to your GBP and verified service area so homeowners in Gentry, Cave Springs, or Decatur searching for a roofer find you the same way Siloam Springs homeowners do.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with roofers outside Siloam Springs?",
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
        name: "Roofing SEO",
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
      <SiloamRoofingClient auditUrl={auditUrl} />
    </>
  );
}
