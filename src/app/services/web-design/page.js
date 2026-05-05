import WebDesignHero from "@/components/WebDesignHero";
import WebDesignProblem from "@/components/WebDesignComponents/Problem";
import WebDesignSolution from "@/components/WebDesignComponents/Solution";
import WebDesignProcess from "@/components/WebDesignComponents/Process";
import WebDesignHowItWorks from "@/components/WebDesignComponents/HowItWorks";
import WebDesignProof from "@/components/WebDesignComponents/Proof";
import WebDesignFAQ from "@/components/WebDesignComponents/FAQ";
import FinalCTA from "@/components/FinalCTASection";

export const metadata = {
  title: "Contractor Website Design for NWA | Local Search Ally",
  description:
    "Custom website design built for lead generation, not vanity. Mobile-first, SEO-ready, and built to convert. No templates. No contracts.",
  openGraph: {
    title: "Contractor Website Design Built for Leads",
    description:
      "A website that actually converts visitors into phone calls. Mobile-first design, clear CTAs, and built-in SEO. For HVAC, plumbing, electrical, roofing, and landscaping contractors.",
    url: "https://www.localsearchally.com/services/web-design",
    siteName: "Local Search Ally",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.localsearchally.com/services/web-design",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a contractor website actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A contractor website needs to do three things: rank locally on Google (SEO-ready), load fast on phones (mobile-first design), and convert visitors into calls or bookings (clear CTAs and simple forms). Most contractor websites fail because they look nice but don't perform these functions. I build for results, not awards. Every page has one clear goal: getting the phone to ring.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Every site I build is custom-coded and designed specifically for your business. Templates look like templates — your customers will notice, and competitors using custom designs will outconvert you. I build on Next.js, which gives you speed, SEO performance, and flexibility. Your site is entirely yours.",
      },
    },
    {
      "@type": "Question",
      name: "Will the site be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. According to Google, 88% of consumers who perform a local search call or visit a business within 24 hours. Most of these are on mobile devices. Every site I build is mobile-first — meaning the phone experience is designed first, and everything else follows. Page speed on mobile is also critical for Google rankings, so I optimize for that relentlessly.",
      },
    },
    {
      "@type": "Question",
      name: "How does this include SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web design and SEO are inseparable. I build every page with SEO in mind: clear H1/H2 hierarchy, optimized meta tags, fast load times (Core Web Vitals), mobile responsiveness, and structured data. The design is optimized for both Google's algorithm and human conversion. You get a site that ranks and converts, not one or the other.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update the content myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I build sites using Next.js and deploy on Vercel, which means you can manage content easily. If you need more technical changes, I'm here to help. Most of my clients update their service descriptions, testimonials, and gallery photos independently. You own the site — I'm just the builder.",
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.localsearchally.com/services/web-design#service",
  name: "Custom Website Design for Contractors",
  description:
    "Custom-built contractor websites optimized for lead generation, mobile, and local SEO. No templates. Built on Next.js with fast load times.",
  serviceType: "Web Design & Development",
  dateModified: "2026-05-05",
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
      name: "Web Design",
      item: "https://www.localsearchally.com/services/web-design",
    },
  ],
};

export default function WebDesignPage() {
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
      <WebDesignHero />
      <WebDesignProblem />
      <WebDesignSolution />
      <WebDesignProcess />
      <WebDesignHowItWorks />
      <WebDesignProof />
      <WebDesignFAQ />
      <FinalCTA />
    </>
  );
}
