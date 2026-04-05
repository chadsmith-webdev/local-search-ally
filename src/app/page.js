import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StakesSection from "@/components/StakesSection";
import SuccessSection from "@/components/SuccessSection";
import GuideSection from "@/components/GuideSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Local SEO for NWA Contractors | Local Search Ally",
  description:
    "97% of people use Google to find a local contractor. If you're not in the results, the call goes to whoever is. Free audit for NWA home service trades.",
  openGraph: {
    title: "Local SEO for NWA Contractors | Local Search Ally",
    description:
      "97% of people use Google to find a local contractor. If you're not in the results, the call goes to whoever is.",
    url: "https://localsearchally.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Search Ally",
  description:
    "Local SEO and web development for NWA home service trades — HVAC, plumbing, roofing, electrical, landscaping, and remodeling.",
  url: "https://localsearchally.com",
  telephone: "+14793808626",
  founder: { "@type": "Person", name: "Chad Smith" },
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
    "Northwest Arkansas",
  ],
  knowsAbout: [
    "Local SEO",
    "Google Business Profile",
    "Web Development",
    "Contractor Marketing",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection />
        <ProblemSection />
        <StakesSection />
        <SuccessSection />
        <GuideSection />
        <HowItWorksSection />
        <ServicesSection />
        <StatsSection />
        <FinalCTASection />
      </main>
    </>
  );
}
