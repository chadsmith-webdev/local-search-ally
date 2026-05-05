import LocalSeoHero from "@/components/LocalSeoHero";
import Problem from "@/components/LocalSeoComponents/Problem";
import Solution from "@/components/LocalSeoComponents/Solution";
import Process from "@/components/LocalSeoComponents/Process";
import Proof from "@/components/LocalSeoComponents/Proof";
import SignalMapDiagram from "@/components/SignalMapDiagram";
import FAQ from "@/components/LocalSeoComponents/FAQ";
import FinalCTA from "@/components/FinalCTASection";

export const metadata = {
  title: "Local SEO for NWA Contractors | Map Pack Visibility",
  description:
    "Get found by homeowners searching on Google. I optimize your Google Business Profile, local citations, and rankings in the Map Pack. No contracts.",
  openGraph: {
    title: "Local SEO for NWA Contractors | Get into the Google Map Pack",
    description:
      "Get found by homeowners searching on Google. Local SEO optimization for HVAC, plumbing, electrical, roofing, and landscaping contractors in Northwest Arkansas.",
    url: "https://www.localsearchally.com/services/local-seo",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.localsearchally.com/services/local-seo",
  },
};

// FAQ Schema for AI Search Engine citations
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is local SEO and why does it matter for contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO is the practice of optimizing your website, Google Business Profile, and local citations to rank higher in local search results — particularly on Google Maps and Google Search for location-specific queries. According to research from Think With Google, 46% of all Google searches have local intent, and 78% of local mobile searches result in an offline purchase. For home service contractors, local SEO is essential because homeowners searching 'plumber near me' or 'HVAC repair in Rogers' are actively looking to hire — they're not just browsing. If you're not visible in those top results, a competitor is getting that call instead.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to rank in the Google Map Pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Map Pack visibility typically improves within 30–90 days with consistent optimization. Timeline depends on how competitive your trade is in your city, how complete your GBP currently is, and the state of your local citations. I prioritize highest-impact factors first: GBP optimization, citation building, and on-page SEO for your service pages.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Google Business Profile and why is it critical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Google Business Profile (GBP) is the listing that appears on Google Maps and in the local search results. It includes your business name, address, phone number, hours, photos, and customer reviews. According to BrightLocal, 97% of consumers use Google to evaluate local businesses, and 51% use Google Maps specifically for local search. If your GBP is incomplete, has outdated information, or lacks photos and reviews, you're losing visibility and customer trust. A fully optimized GBP is the foundation of local SEO.",
      },
    },
    {
      "@type": "Question",
      name: "What is a citation and why do I need them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A citation is any online mention of your business name, address, and phone number (NAP). Citations come from directories like Yelp, Angie's List, HomeAdvisor, and industry-specific platforms. Google uses citations as a trust signal — the more consistent mentions of your business across trusted directories, the higher Google ranks you for local searches. Citations also improve your visibility on those platforms themselves. I build citations strategically across the directories that matter most in your trade.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a blog for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A blog isn't required for local SEO, but it helps. Blog posts give you opportunities to rank for long-tail keywords related to your services ('how to winterize your HVAC' or 'signs you need a new roof'). These posts also give you something to promote to your Google Business Profile. For contractors just getting started, I focus on perfecting your core local SEO first — GBP, citations, and on-page optimization. Once that's solid, blog content becomes a multiplier. You won't waste effort on a blog that nobody can find.",
      },
    },
    {
      "@type": "Question",
      name: "Will this guarantee I rank #1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No single person can guarantee #1 rankings — anyone promising that is selling you something false. What I can promise is transparency. I'll show you exactly what I'm doing, why I'm doing it, and how it's performing. What I can guarantee: I focus on the factors that actually move rankings (GBP optimization, citations, on-page relevance, review growth). If done right, you'll see map pack visibility improve. If something isn't working, I'll tell you and we'll adjust. You'll never wonder what's happening with your SEO.",
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.localsearchally.com/services/local-seo#service",
  name: "Local SEO for Contractors",
  description:
    "Local SEO optimization for home service contractors in Northwest Arkansas. Includes Google Business Profile optimization, local citation building, on-page SEO, and monthly reporting.",
  serviceType: "Search Engine Optimization",
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
      name: "Local SEO",
      item: "https://www.localsearchally.com/services/local-seo",
    },
  ],
};

export default function LocalSEOPage() {
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
      <LocalSeoHero />
      <Problem />
      <Solution />
      <Process />
      <SignalMapDiagram />
      <Proof />
      <FAQ />
      <FinalCTA />
    </>
  );
}
