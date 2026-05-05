import CitationHero from "@/components/CitationHero";
import Problem from "@/components/CitationComponents/Problem";
import Solution from "@/components/CitationComponents/Solution";
import Process from "@/components/CitationComponents/Process";
import CitationWebDiagram from "@/components/CitationWebDiagram";
import Proof from "@/components/CitationComponents/Proof";
import FAQ from "@/components/CitationComponents/FAQ";
import FinalCTA from "@/components/FinalCTASection";

export const metadata = {
  title: "Citation Building for NWA Contractors | NAP Consistency",
  description:
    "Inconsistent listings hurt your local rankings. I audit, fix, and build citations across 50+ directories for NWA contractors. No contracts.",
  openGraph: {
    title: "Citation Building & Management for NWA Contractors | Local Search Ally",
    description:
      "Inconsistent business listings hurt your Google rankings. I audit, fix, and build citations across the directories that matter — Yelp, Angi, HomeAdvisor, Bing, Apple Maps, and more.",
    url: "https://www.localsearchally.com/services/citation-building",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.localsearchally.com/services/citation-building",
  },
};

// FAQ Schema for AI Search Engine citations
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a citation and why does it matter for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A citation is any online mention of your business name, address, and phone number (NAP). Citations appear on directories like Yelp, Angi, HomeAdvisor, Bing Places, and dozens of others. Google uses citations to verify that your business is real and located where you say it is. The more consistently your NAP appears across trusted directories, the more confidence Google has in ranking your listing. Inconsistencies — even small ones like an old suite number or a forwarding phone number — create doubt, and doubt costs you rankings.",
      },
    },
    {
      "@type": "Question",
      name: "How many citations do I need to rank locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no magic number. What matters is being listed consistently in the directories Google actually checks — a specific set of core platforms plus trade-specific and local directories. For most NWA home service contractors, building and cleaning up 50-100 quality citations across the right platforms is sufficient to remove citation inconsistency as a ranking barrier. I focus on quality and relevance, not volume.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my NAP is wrong on some directories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's more common than you'd think — and it does hurt your rankings. Google cross-references your business information across multiple sources. When it finds mismatches, it has to decide which version to trust. That uncertainty reduces your ranking in the Map Pack. The fix is to systematically audit every listing, correct the errors, and monitor for drift going forward.",
      },
    },
    {
      "@type": "Question",
      name: "Which directories matter most for contractors in NWA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For home service trades in Northwest Arkansas, the highest-priority directories are Google Business Profile, Yelp, Bing Places for Business, Apple Maps, and Facebook — these are the core platforms Google weights most heavily. From there, trade-specific platforms like Angi (formerly Angie's List), HomeAdvisor, and Houzz add authority in your industry. I also build citations on local NWA platforms and the Better Business Bureau.",
      },
    },
    {
      "@type": "Question",
      name: "Do you manage citations on an ongoing basis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Citations don't stay accurate on their own. Data aggregators push incorrect information, someone edits your Google Business Profile, or a directory auto-populates an old address from public records. I monitor your citations monthly and fix errors as they appear. You'll see every change in your monthly report.",
      },
    },
    {
      "@type": "Question",
      name: "Will citation building guarantee I rank #1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Anyone making that guarantee is being dishonest. Citation consistency is one factor in local rankings — an important one — but not the only one. What I can tell you: if citation inconsistency is hurting your rankings, fixing it will help. I'll show you your audit results so you can see exactly how big a factor it is for your business before committing to anything.",
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.localsearchally.com/services/citation-building#service",
  name: "Citation Building & Management for Contractors",
  description:
    "Citation audit, cleanup, and building for home service contractors in Northwest Arkansas. Includes NAP consistency fixes across 50+ directories, trade-specific platform submissions, and ongoing citation monitoring.",
  serviceType: "Local Citation Building",
  dateModified: "2026-05-04",
  areaServed: [
    {
      "@type": "City",
      name: "Siloam Springs",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Rogers",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Bentonville",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Fayetteville",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    {
      "@type": "City",
      name: "Springdale",
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
  ],
  provider: { "@id": "https://www.localsearchally.com/#localbusiness" },
};

// Breadcrumb Schema
const breadcrumbSchema = {
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
      name: "Services",
      item: "https://www.localsearchally.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Citation Building & Management",
      item: "https://www.localsearchally.com/services/citation-building",
    },
  ],
};

export default function CitationBuildingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CitationHero />
      <Problem />
      <Solution />
      <Process />
      <CitationWebDiagram />
      <Proof />
      <FAQ />
      <FinalCTA />
    </>
  );
}
