import CityHero from "@/components/CityHero";
import CityWhy from "@/components/CityWhy";
import CityLocalStats from "@/components/CityLocalStats";
import CityProcess from "@/components/CityProcess";
import CityFinal from "@/components/CityFinal";

export const metadata = {
  title: "Rogers Contractor SEO | Local Search Ally | Get Found on Google",
  description:
    "Local SEO for Rogers, AR contractors. See where you rank, why you're losing calls to competitors, and your fastest path to visibility. Free audit.",
  openGraph: {
    title: "Rogers Contractor SEO | Local Search Ally",
    description:
      "HVAC, plumbing, roofing, electrical, and landscaping contractors in Rogers—tired of being invisible on Google? Free ranking analysis.",
    url: "https://localsearchally.com/service-areas/rogers",
    type: "website",
  },
  alternates: {
    canonical: "https://localsearchally.com/service-areas/rogers",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Search Ally",
  description: "Local SEO for Rogers, AR contractors",
  telephone: "+14793808626",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rogers",
    addressRegion: "AR",
    postalCode: "72756",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Rogers, AR",
  },
  serviceType: ["Local SEO", "Web Design", "GBP Optimization"],
  url: "https://localsearchally.com",
};

export default function RogersPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <CityHero
          city='Rogers'
          state='AR'
          population='67,000+'
          punchline="Invisible on Google? You're losing calls to contractors ranking above you."
        />
        <CityWhy city='Rogers' />
        <CityLocalStats city='Rogers' />
        <CityProcess />
        <CityFinal city='Rogers' ctaText='Get Your Free Rogers Audit' />
      </main>
    </>
  );
}
