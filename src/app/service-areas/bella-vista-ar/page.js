import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/bella-vista-ar";

const tradeList = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Remodeling",
  "Landscaping",
  "General contracting",
];

const focusAreas = [
  {
    title: "Google Business Profile built for trust markets",
    body: "Strong reviews, clear service areas, response to all feedback, and professional photos. In Bella Vista, a polished GBP is expected. Homeowners check reviews before they call.",
  },
  {
    title: "Website built for quality-conscious buyers",
    body: "Service pages that explain your process and build trust. Case studies or before/after work. Clear call paths. Fast load times. Bella Vista homeowners are willing to spend for quality—your website needs to justify that investment.",
  },
  {
    title: "Review strategy and reputation management",
    body: "Request system that keeps momentum going, response strategy so you're engaged, and consistent messaging. In Bella Vista, reviews are often the deciding factor between you and a competitor.",
  },
];

const bellaVistaSignals = [
  "Established community with older housing stock that drives steady demand for maintenance and replacement.",
  "Homeowners here expect professional contractors with polished online presence and strong reviews.",
  "Trust and reputation matter more than price — homeowners are willing to invest in quality.",
  "Predictable, year-round demand from HVAC, roofing, plumbing, electrical, and remodeling work.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "60% of consumers say quality of website affects perception of the business (BrightLocal)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Bella Vista, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Bella Vista home service trades. I help HVAC, plumbing, roofing, electrical, and remodeling contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Bella Vista, AR | Local Search Ally",
      description:
        "Bella Vista local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Do you work with established trades in Bella Vista?",
    answer:
      "Yes. Many of the contractors I work with in Bella Vista have been in business for years. Their work is solid, but they needed stronger online visibility to match their reputation.",
  },
  {
    question: "How much does it cost to show up in Bella Vista searches?",
    answer:
      "Varies. The question is not what it costs — it is what invisibility costs. If you are not showing up clearly when Bella Vista homeowners search, you lose calls to contractors who are. One job is thousands of dollars. Strong visibility pays for itself fast.",
  },
  {
    question: "Will this work if I'm already busy?",
    answer:
      "Yes. Better visibility means more calls to choose from. You can be selective about which jobs you take, which improves margins and workload quality.",
  },
  {
    question: "Are there long-term contracts?",
    answer: "No. I do not lock you into contracts.",
  },
  {
    question: "What is the first step?",
    answer:
      "Run the free audit. You get a clear baseline across seven local SEO sections before we talk about next steps.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Search Ally",
  url: "https://localsearchally.com",
  telephone: "+14793808626",
  description:
    "Local SEO and web design for home service trades in Northwest Arkansas.",
  areaServed: [
    {
      "@type": "City",
      name: "Bella Vista",
      containedInPlace: {
        "@type": "State",
        name: "Arkansas",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siloam Springs",
    addressRegion: "AR",
    addressCountry: "US",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BellaVistaServiceAreaPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.grid} aria-hidden='true' />
          <div className={styles.orb} aria-hidden='true' />
          <div className={styles.heroInner}>
            <div className={styles.heroScene}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>Bella Vista, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Bella Vista
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Bella Vista, local SEO
                  is what separates the contractors getting steady work from the
                  ones struggling to find consistent calls. Bella Vista is an
                  established community with older housing stock. That means
                  steady, predictable demand for HVAC replacement, roofing
                  repairs, plumbing work, and remodeling. Homeowners here know
                  they need help. The contractors they find online are the ones
                  they call.
                </p>
                <p className={styles.heroBody}>
                  In Bella Vista, trust and reviews matter more than price.
                  Homeowners are willing to spend for quality work and peace of
                  mind. But they search before they hire. If you're not showing
                  up clearly in Google Maps and search results—with good
                  reviews, a polished website, and strong local signals—you lose
                  calls to contractors who did the work to show up.
                </p>
                <div className={styles.heroActions}>
                  <Link href='https://audit.localsearchally.com/free-local-seo-audit' className={styles.primaryBtn}>
                    Run Your Free Audit
                  </Link>
                  <Link href='/contact' className={styles.secondaryBtn}>
                    Start With a Free Conversation
                  </Link>
                </div>
                <p className={styles.trust}>
                  No pitch. No signup. Real findings in about 90 seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.briefSectionWrap}`}>
          <div className={`container ${styles.briefSection}`}>
            <div className={styles.briefShell}>
              <div className={styles.briefLead}>
                <p className={styles.panelLabel}>Bella Vista local brief</p>
                <h2 className={styles.briefTitle}>
                  Bella Vista homeowners search for trusted contractors. Weak
                  visibility means losing work to competitors with better online
                  presence.
                </h2>
                <p className={styles.panelCopy}>
                  Bella Vista is an established, affluent community with homes
                  that need regular maintenance and upgrades. HVAC systems fail.
                  Roofs age. Plumbing breaks. That creates steady, predictable
                  demand for the contractors who show up when searches happen.
                </p>
                <div className={styles.briefStat}>
                  <span className={styles.panelNumber}>60</span>
                  <p className={styles.panelCopy}>
                    Percent of consumers say quality of website affects
                    perception of the business. In Bella Vista, a polished
                    online presence is expected.
                  </p>
                </div>
              </div>

              <div className={styles.briefSignals}>
                <p className={styles.cardLabel}>
                  What that means in Bella Vista
                </p>
                <ul className={styles.signalList}>
                  {bellaVistaSignals.map((signal) => (
                    <li key={signal} className={styles.signalItem}>
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.problemSectionWrap}`}>
          <div className='container'>
            <div className={styles.problemEditorial}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>The real problem</p>
                <h2 className={styles.sectionTitle}>
                  Reputation built on work, but visibility built on search.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>
                  Most established contractors in Bella Vista have great
                  reputations. Their work is solid. But reputation alone does
                  not bring calls anymore. Homeowners search first. If you are
                  not in the search results, they never know you exist.
                </p>
                <p className={styles.bodyCopy}>
                  Bella Vista homeowners expect to find contractors online. They
                  expect to see reviews. They expect a professional website. If
                  your online presence is weak, you look less trustworthy than a
                  competitor with a polished profile and good reviews.
                  Perception matters as much as reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Bella Vista</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Bella Vista. The work is centered on visibility that
                  supports calls, not vague reports.
                </p>
              </div>

              <div className={styles.fitGrid}>
                <article className={styles.surfaceCard}>
                  <p className={styles.cardLabel}>Common fits</p>
                  <div className={styles.tradeChips}>
                    {tradeList.map((trade) => (
                      <span key={trade} className={styles.tradeChip}>
                        {trade}
                      </span>
                    ))}
                  </div>
                </article>

                <div className={styles.focusGrid}>
                  {focusAreas.map((area) => (
                    <article key={area.title} className={styles.surfaceCard}>
                      <p className={styles.cardTitle}>{area.title}</p>
                      <p className={styles.bodyCopy}>{area.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className={`container ${styles.processSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>How it works</p>
              <h2 className={styles.sectionTitle}>
                Three steps from invisible to getting calls
              </h2>
            </div>
            <div className={styles.processRail}>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className={styles.stepTitle}>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Bella Vista search results, your
                  Google Business Profile, your website, your reviews, and the
                  signals that help you show up for homeowners searching now.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: Google Business Profile
                  strength, review momentum, on-page clarity, and lead paths
                  that build trust.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 03</p>
                <h3 className={styles.stepTitle}>Grow and Track</h3>
                <p className={styles.bodyCopy}>
                  I track what changes visibility and call quality, then adjust
                  based on what the data shows. You see what changed and why.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <div className={styles.proofEditorial}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Why Bella Vista matters</p>
                <h2 className={styles.sectionTitle}>
                  Steady demand from homeowners who search
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Bella Vista homes are aging. That creates predictable demand
                  for HVAC, roofing, plumbing, and electrical work. Homeowners
                  here have money to spend and expect professional contractors.
                  The ones they find online are the ones they hire.
                </p>
                <p className={styles.bodyCopy}>
                  Bella Vista is an established community with a large base of
                  older homes. That means steady, consistent demand for
                  maintenance and replacement work. Unlike new-construction
                  markets where demand is sporadic, Bella Vista homeowners need
                  reliable contractors year-round.
                </p>
              </div>

              <div className={styles.proofPanel}>
                <p className={styles.cardLabel}>What the data says</p>
                <ul className={styles.citationList}>
                  {citationStats.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.faqSectionWrap}`}>
          <div className={`container ${styles.faqSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>FAQ</p>
              <h2 className={styles.sectionTitle}>
                Questions I expect from Bella Vista trade owners
              </h2>
            </div>
            <div className={styles.faqStack}>
              {faqItems.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.bodyCopy}>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.sectionEyebrow}>Next step</p>
            <h2 className={styles.ctaTitle}>
              Run your free Bella Vista SEO audit
            </h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              seven local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.heroActions}>
              <Link href='https://audit.localsearchally.com/free-local-seo-audit' className={styles.primaryBtn}>
                Run Your Free Audit
              </Link>
              <Link href='/contact' className={styles.secondaryBtn}>
                Start With a Free Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
