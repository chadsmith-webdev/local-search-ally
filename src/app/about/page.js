import AboutHero from "@/components/AboutHero";
import AboutOrigin from "@/components/AboutOrigin";
import AboutDifference from "@/components/AboutDifference";
import AboutPledge from "@/components/AboutPledge";

export const metadata = {
  title: "About Chad Smith | Local Search Ally — NWA Contractor SEO",
  description:
    "Local Search Ally is Chad Smith, based in Siloam Springs, AR. I help NWA home service trades get found on Google — no contracts, radical transparency, and work you can actually see.",
  alternates: {
    canonical: "https://localsearchally.com/about",
  },
  openGraph: {
    title: "About Chad Smith | Local Search Ally",
    description:
      "One person in Siloam Springs helping NWA contractors stop being invisible online. No contracts. No black box marketing.",
    url: "https://localsearchally.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  dateModified: "2026-04-29",
  name: "Chad Smith",
  jobTitle: "Founder",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Local Search Ally",
    url: "https://localsearchally.com",
    telephone: "+14793808626",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siloam Springs",
      addressRegion: "AR",
      addressCountry: "US",
    },
  },
  description:
    "Founder of Local Search Ally, helping NWA home service trades rank on Google with no contracts and radical transparency.",
  url: "https://localsearchally.com/about",
  sameAs: ["https://www.linkedin.com/in/chadsmith/"],
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
  "@type": "Organization",
  "@id": "https://localsearchally.com/#organization",
  name: "Local Search Ally",
  url: "https://localsearchally.com",
  dateModified: "2026-04-29",
  description:
    "One-person local SEO and web development service in Siloam Springs, AR, helping NWA home service trades — HVAC, plumbing, roofing, electrical, and remodeling — get found on Google. No contracts, month-to-month.",
  telephone: "+14793808626",
  email: "chad@localsearchally.com",
  founder: {
    "@type": "Person",
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
  areaServed: "Northwest Arkansas",
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
      <AboutPledge />
    </>
  );
}
