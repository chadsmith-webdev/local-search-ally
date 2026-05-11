import TradePageClient from "@/components/TradePageClient";
import {
  CITY_SLUGS,
  TRADE_SLUGS,
  CITY_META,
  TRADE_META,
  TRADE_AUDIT_PARAM,
  getCityTradeSignals,
  getCityTradeFAQs,
} from "@/lib/tradePageData";

export async function generateStaticParams() {
  const params = [];
  for (const city of CITY_SLUGS) {
    for (const trade of TRADE_SLUGS) {
      params.push({ city, trade });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { city: citySlug, trade: tradeSlug } = await params;
  const city = CITY_META[citySlug];
  const trade = TRADE_META[tradeSlug];
  if (!city || !trade) return {};

  const pageUrl = `https://www.localsearchally.com/service-areas/${citySlug}/${tradeSlug}`;
  const title = `${trade.display} SEO in ${city.name}, AR | Local Search Ally`;
  const description = `Local SEO for ${trade.noun}s in ${city.name}, Arkansas. I help ${trade.display} businesses get into the Google Map Pack and convert more searches into calls.`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityTradePage({ params }) {
  const { city: citySlug, trade: tradeSlug } = await params;
  const city = CITY_META[citySlug];
  const trade = TRADE_META[tradeSlug];

  if (!city || !trade) return null;

  const pageUrl = `https://www.localsearchally.com/service-areas/${citySlug}/${tradeSlug}`;
  const auditUrl = `${process.env.NEXT_PUBLIC_AUDIT_URL}?city=${encodeURIComponent(city.auditParam)}&trade=${encodeURIComponent(TRADE_AUDIT_PARAM[tradeSlug])}`;
  const signals = getCityTradeSignals(citySlug, tradeSlug);
  const faqItems = getCityTradeFAQs(citySlug, tradeSlug);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description: "Local SEO and web design for home service trades in Northwest Arkansas.",
    areaServed: [
      {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: city.state },
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
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.localsearchally.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.localsearchally.com/service-areas" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://www.localsearchally.com/service-areas/${citySlug}` },
      { "@type": "ListItem", position: 4, name: trade.display, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TradePageClient
        cityName={city.name}
        citySlug={citySlug}
        cityHubPath={city.hubPath}
        cityStateAbbr={city.stateAbbr}
        tradeDisplay={trade.display}
        tradeNoun={trade.noun}
        tradeMarket={city.market}
        tradeProblemStatement={trade.problemStatement}
        tradeProofStatement={trade.proofStatement}
        focusAreas={trade.focusAreas}
        signals={signals}
        faqItems={faqItems}
        auditUrl={auditUrl}
      />
    </>
  );
}
