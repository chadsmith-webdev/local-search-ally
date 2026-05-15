import AboutHero from "@/components/AboutHero";
import AboutOrigin from "@/components/AboutOrigin";
import AboutDifference from "@/components/AboutDifference";
import AboutApproach from "@/components/AboutApproach";
import AboutServiceAreas from "@/components/AboutServiceAreas";
import AboutPledge from "@/components/AboutPledge";

export const metadata = {
  title: "About Chad Smith | Local Search Ally — NWA Contractor SEO",
  description:
    "Local Search Ally is Chad Smith, based in Siloam Springs, AR. I help NWA home service trades get found on Google — no contracts, radical transparency, and diagnostic honesty.",
  alternates: {
    canonical: "https://www.localsearchally.com/about",
  },
  openGraph: {
    title: "About Chad Smith | Local Search Ally",
    description:
      "One person in Siloam Springs helping NWA contractors stop being invisible online. No contracts. No black box marketing.",
    url: "https://www.localsearchally.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.localsearchally.com/about#chad-smith",
  name: "Chad Smith",
  jobTitle: "Founder",
  worksFor: { "@id": "https://www.localsearchally.com/#localbusiness" },
  description:
    "Founder of Local Search Ally, helping NWA home service trades rank on Google with no contracts and radical transparency.",
  url: "https://www.localsearchally.com/about",
  sameAs: [
    "https://www.linkedin.com/in/chadsmith_localsearchally",
    "https://www.facebook.com/localsearchally",
    "https://www.youtube.com/@chadsmith_localsearchally",
  ],
  knowsAbout: [
    "Local SEO",
    "Google Business Profile optimization",
    "Citation building",
    "NAP consistency",
    "Map Pack ranking",
    "Web design for contractors",
    "Reputation management",
    "Northwest Arkansas contractor marketing",
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.localsearchally.com/#localbusiness",
  name: "Local Search Ally",
  url: "https://www.localsearchally.com",
  description:
    "One-person local SEO and web development service in Siloam Springs, AR, helping NWA home service trades — HVAC, plumbing, roofing, electrical, and remodeling — get found on Google. No contracts, month-to-month.",
  telephone: "+14793808626",
  email: "chad@localsearchally.com",
  founder: { "@id": "https://www.localsearchally.com/about#chad-smith" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siloam Springs",
    addressRegion: "AR",
    postalCode: "72761",
    addressCountry: "US",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Northwest Arkansas" },
  sameAs: [
    "https://www.linkedin.com/in/chadsmith_localsearchally",
    "https://www.facebook.com/localsearchally",
    "https://www.youtube.com/@chadsmith_localsearchally",
  ],
  knowsAbout: [
    "Local SEO",
    "Google Business Profile optimization",
    "Citation building",
    "Web design for home service trades",
    "Map Pack ranking",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <AboutHero />
      <AboutOrigin />
      <AboutDifference />
      <AboutApproach />
      <AboutServiceAreas />
      <AboutPledge />
    </>
  );
}
