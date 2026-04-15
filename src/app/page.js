import HeroSection from "@/components/HeroSection";
import StakesSection from "@/components/StakesSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import GuideSection from "@/components/GuideSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export const metadata = {
  title: "Local SEO for NWA Contractors | Local Search Ally",
  description:
    "46% of Google searches have local intent. If you're not in the Map Pack, those calls are going to someone else. Free visibility audit for NWA home service trades.",
  alternates: {
    canonical: "https://localsearchally.com",
  },
  openGraph: {
    title: "Local SEO for NWA Contractors | Local Search Ally",
    description:
      "46% of Google searches have local intent. If you're not in the Map Pack, those calls are going to someone else.",
    url: "https://localsearchally.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://localsearchally.com/#localbusiness",
  name: "Local Search Ally",
  description:
    "Local SEO and web development for NWA home service trades — HVAC, plumbing, roofing, electrical, landscaping, and remodeling.",
  url: "https://localsearchally.com",
  telephone: "+14793808626",
  image: "https://localsearchally.com/icon.png",
  founder: {
    "@type": "Person",
    "@id": "https://localsearchally.com/about#chad-smith",
    name: "Chad Smith",
    url: "https://localsearchally.com/about",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siloam Springs",
    addressRegion: "AR",
    postalCode: "72761",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.18808",
    longitude: "-94.54064",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-12:00", "Su 14:00-18:00"],
  areaServed: [
    { "@type": "City", name: "Rogers", containedInPlace: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Bentonville", containedInPlace: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Fayetteville", containedInPlace: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Springdale", containedInPlace: { "@type": "State", name: "Arkansas" } },
    { "@type": "City", name: "Siloam Springs", containedInPlace: { "@type": "State", name: "Arkansas" } },
    { "@type": "AdministrativeArea", name: "Northwest Arkansas" },
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroSection />
        <StakesSection />
        <ProblemSection />
        <ServicesSection />
        <GuideSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  );
}
