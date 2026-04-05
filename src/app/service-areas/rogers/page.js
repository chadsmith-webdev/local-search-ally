import CityHero from "@/components/CityHero";
import CityWhy from "@/components/CityWhy";
import CityLocalStats from "@/components/CityLocalStats";
import CityProcess from "@/components/CityProcess";
import CityFinal from "@/components/CityFinal";

export const metadata = {
  title: "Rogers Contractor SEO | Get Found on Google | Local Search Ally",
  description:
    "Local SEO for Rogers, AR contractors. Get ranked higher on Google Maps, dominate search results, and book more calls. No contracts. Results in 30 days.",
  openGraph: {
    title: "Rogers Contractor SEO | Get Found on Google",
    description:
      "Local SEO for Rogers, AR contractors. No contracts. Get ranked in the Map Pack.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long until I see results from local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some contractors see calls in week 2 of month 1 from fixing their Google Business Profile alone. Most see consistent volume (3–5 calls/month) by month 2. By month 3, you're typically in the Map Pack for priority keywords.",
      },
    },
    {
      "@type": "Question",
      name: "What if a competitor has been ranking for years?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO changes quickly. Dominance in the Map Pack isn't permanent. We've displaced competitors ranked #1 for 5+ years. Usually takes 2–3 months of consistent optimization (more reviews, better photos, more engagement).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need paid ads with local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Paid ads and local SEO are separate strategies. Local SEO—when done right—gives you free, repeatable calls. Paid ads cost money every month and stop when you stop paying. We focus on organic local search first.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already have a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good. We'll optimize it for local search. If it's not mobile-friendly or doesn't mention Rogers and your service areas, we fix that. You keep your existing website; we make it work for local search.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with other cities like Bentonville or Springdale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, I serve all of Northwest Arkansas including Rogers, Bentonville, Fayetteville, Springdale, and surrounding areas. We recommend focusing on one city at a time. Get Rogers dialed in first, then expand.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't get calls after 3 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're not ranking in the Map Pack after 3 months, we keep optimizing free until you are. The only exception is if you don't follow our review system or stop updating your Google Business Profile.",
      },
    },
  ],
};

export default function RogersPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <CityHero
          city='Rogers'
          state='AR'
          population='67,000+'
          punchline="Rogers Contractor SEO — Get Found on Google (In 3 Months or We'll Keep Optimizing for Free)"
        />

        {/* Opening + Definitions */}
        <section
          style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "1.5rem",
              color: "#f0f0f0",
            }}
          >
            If you're a contractor in Rogers—HVAC, plumbing, electrical,
            roofing, or remodeling—there's a good chance you're losing calls to
            competitors who show up first on Google.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "1.5rem",
              color: "#f0f0f0",
            }}
          >
            Local SEO is how independent contractors in Rogers get found when
            homeowners search "emergency plumber near me" or "HVAC repair
            Rogers." It's not about having a fancy website. It's about showing
            up first when someone in Rogers needs you <em>right now</em>.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "1.5rem",
              color: "#f0f0f0",
            }}
          >
            Here's what I know:{" "}
            <strong>46% of Google searches have local intent.</strong> For home
            service trades in Rogers, that's not a statistic—it's your phone
            ringing or not ringing.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "2rem",
              color: "#f0f0f0",
            }}
          >
            <strong>I'm Chad Smith, I run Local Search Ally.</strong> I just
            moved to Siloam Springs, so I'm new to Northwest Arkansas—which
            means I'm hungry to prove that local SEO works here. I specialize in
            this. No long-term contracts. We work on 3-month engagements, and if
            you're not ranking in the Map Pack by then, I keep optimizing free
            until you do.
          </p>

          {/* Definition Box */}
          <div
            style={{
              background: "#1e1e1e",
              padding: "2rem",
              borderRadius: "8px",
              marginBottom: "3rem",
              borderLeft: "4px solid #7bafd4",
            }}
          >
            <h3
              style={{
                marginBottom: "1.5rem",
                color: "#7bafd4",
                fontWeight: 600,
              }}
            >
              Three Key Terms You Need to Know
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1.5rem" }}>
                <strong style={{ color: "#7bafd4" }}>Local SEO</strong> =
                Optimizing your online presence so you show up in Google search
                results and Map Pack when people in Rogers search for your
                service
              </li>
              <li style={{ marginBottom: "1.5rem" }}>
                <strong style={{ color: "#7bafd4" }}>Map Pack</strong> = The 3
                business location pins that appear at the top of Google search
                results (more valuable than any paid ad)
              </li>
              <li>
                <strong style={{ color: "#7bafd4" }}>
                  Google Business Profile
                </strong>{" "}
                = The listing that controls whether you appear in that Map Pack
              </li>
            </ul>
          </div>
        </section>

        <CityWhy city='Rogers' />
        <CityLocalStats city='Rogers' />
        <CityProcess />

        {/* Services Served */}
        <section
          style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}
        >
          <h2
            style={{ fontSize: "2rem", marginBottom: "2rem", color: "#f0f0f0" }}
          >
            What Services Do You Serve in Rogers?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "2rem",
              color: "#f0f0f0",
            }}
          >
            I work with these home service trades (and others):
          </p>
          <ul style={{ columns: 2, columnGap: "3rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              <strong>HVAC & heating</strong> (air conditioning, furnace repair,
              maintenance)
            </li>
            <li style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              <strong>Plumbing</strong> (emergency repairs, water heater, drain
              cleaning)
            </li>
            <li style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              <strong>Roofing</strong> (repairs, inspections, replacement)
            </li>
            <li style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              <strong>Electrical</strong> (panel upgrades, rewiring, emergency
              calls)
            </li>
            <li style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              <strong>Landscaping</strong> (lawn care, design, maintenance)
            </li>
            <li style={{ marginBottom: "1rem", color: "#f0f0f0" }}>
              <strong>Remodeling</strong> (kitchens, bathrooms, additions)
            </li>
          </ul>
          <p
            style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#f0f0f0" }}
          >
            If you're in a different trade, that's fine. The same principles
            apply. Local search works for any service business.
          </p>
        </section>

        <CityFinal city='Rogers' ctaText='Get Your Free Rogers Audit' />
      </main>
    </>
  );
}
