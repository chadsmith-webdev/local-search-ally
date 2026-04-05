import FreeAuditHero from "@/components/FreeAuditHero";
import AuditWhat from "@/components/AuditComponents/What";
import AuditHow from "@/components/AuditComponents/How";
import AuditValue from "@/components/AuditComponents/Value";
import AuditCTA from "@/components/AuditComponents/CTA";
import FinalCTA from "@/components/FinalCTASection";

export const metadata = {
  title: "Free SEO Audit Tool | See Your Online Visibility | Local Search Ally",
  description:
    "Get a detailed report on your current SEO visibility, Google Business Profile optimization, and local ranking potential. Free. No strings attached.",
  keywords:
    "free SEO audit, local SEO audit, Google ranking check, business visibility, NWA",
  openGraph: {
    title: "Free SEO Audit for Your Business",
    description:
      "Find out exactly where you stand online. Free detailed audit showing your visibility, rankings, and opportunities.",
    url: "https://localsearchally.com/services/free-audit",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://localsearchally.com/services/free-audit",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What will the audit show me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll get a detailed report showing your current visibility on Google, how you rank for local keywords, your Google Business Profile optimization status, citation consistency, page speed, mobile performance, and competitors in your area.",
      },
    },
    {
      "@type": "Question",
      name: "Is it really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Completely free. No credit card needed. No hidden upsell. I just want to show you where you stand and what's possible.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll get your full audit report within 24-48 hours. It's a detailed analysis, not a quick automated scan.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after I get the audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audit is yours to keep. No pressure to hire me. If you want to discuss what's possible and next steps, I'm happy to talk. But the audit alone gives you useful insight into your visibility.",
      },
    },
  ],
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Free SEO Audit Tool",
  description:
    "Free SEO audit for local businesses to assess online visibility and ranking opportunities.",
  applicationCategory: "BusinessApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://localsearchally.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://localsearchally.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Free Audit",
      item: "https://localsearchally.com/services/free-audit",
    },
  ],
};

export default function FreeAuditPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FreeAuditHero />
      <AuditWhat />
      <AuditHow />
      <AuditValue />
      <AuditCTA />
      <FinalCTA />
    </>
  );
}
