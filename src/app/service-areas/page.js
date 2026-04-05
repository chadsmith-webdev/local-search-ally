import LocationsHero from "@/components/LocationsHero";
import LocationsCities from "@/components/LocationsCities";
import LocationsStats from "@/components/LocationsStats";
import LocationsFAQ from "@/components/LocationsFAQ";
import LocationsCTA from "@/components/LocationsCTA";

export const metadata = {
  title: "Service Areas — Local Search Ally | NWA Contractor SEO",
  description:
    "Local SEO for home service trades in Rogers, Bentonville, Fayetteville, Springdale, and all of Northwest Arkansas. Get found on Google.",
  openGraph: {
    title: "Service Areas — Local Search Ally",
    description:
      "Free SEO audits for NWA contractors. See where you rank, why competitors are winning, and your fastest path to visibility.",
    url: "https://localsearchally.com/service-areas",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Search Ally",
  description: "Local SEO and web design for NWA home service trades",
  telephone: "(479) 380-8626",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siloam Springs",
    addressRegion: "AR",
    postalCode: "72761",
    addressCountry: "US",
  },
  areaServed: [
    "Rogers, AR",
    "Bentonville, AR",
    "Fayetteville, AR",
    "Springdale, AR",
    "Siloam Springs, AR",
    "Bella Vista, AR",
    "Eureka Springs, AR",
    "Gentry, AR",
    "Gravette, AR",
  ],
  url: "https://localsearchally.com",
  serviceType: ["Local SEO", "Web Design", "GBP Optimization"],
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <LocationsHero />
        <LocationsCities />
        <LocationsStats />
        <LocationsFAQ />
        <LocationsCTA />
      </main>
    </>
  );
}
