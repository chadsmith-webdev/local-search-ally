import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/centerton-ar";

const tradeList = [
  "HVAC",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "Remodeling",
  "Roofing",
  "General contracting",
];

const focusAreas = [
  {
    title: "Google Business Profile built for growth markets",
    body: "Fast setup, strong foundational signals, rapid review momentum. In Centerton, being visible from day one matters. A polished GBP shows you are established even if you are new to the market.",
  },
  {
    title: "Website built for first-time searchers",
    body: "Clear service offerings, trust-building content, mobile-first design, easy call paths. New homeowners often search on phones. Your website needs to make hiring obvious.",
  },
  {
    title: "Review strategy for new markets",
    body: "Review request process that builds momentum fast, consistent response strategy, clear communication. In Centerton, early reviews establish you as trustworthy before competitors move in.",
  },
];

const centertonSignals = [
  "One of the fastest-growing cities in Arkansas with new construction and new homeowners.",
  "New homeowners are first-time searchers for home services — less reliance on referrals.",
  "Market is underserved in local search compared to mature cities like Rogers or Fayetteville.",
  "Early visibility advantage — contractors who show up first establish dominance before the market matures.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "28% of searches for something nearby result in a purchase (Think With Google)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Centerton, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Centerton home service trades. I help HVAC, electrical, plumbing, and remodeling contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Centerton, AR | Local Search Ally",
      description:
        "Centerton local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Should I focus on Centerton specifically?",
    answer:
      "Yes. Centerton is growing and underserved in local search. Early visibility here means less competition than in mature markets like Rogers or Fayetteville.",
  },
  {
    question: "How much does it cost to be visible in a growing market?",
    answer:
      "Less than in mature markets. Early visibility is easier because fewer contractors have done the work. One job in Centerton early compounds into steady work as the market grows.",
  },
  {
    question: "Will the market become saturated with contractors?",
    answer:
      "Probably, eventually. That's why the move is now. Establish visibility while the market is underserved. By the time competing contractors move in, you are already known.",
  },
  {
    question: "Are there long-term contracts?",
    answer: "No. I do not lock you into contracts.",
  },
  {
    question: "What is the first step?",
    answer:
      "Run the free audit. You get a clear baseline across seven local SEO sections then reach out and we can talk through what makes sense.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://localsearchally.com/#localbusiness",
  name: "Local Search Ally",
  url: "https://localsearchally.com",
  telephone: "+14793808626",
  description:
    "Local SEO and web design for home service trades in Northwest Arkansas.",
  areaServed: [
    {
      "@type": "City",
      name: "Centerton",
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
    postalCode: "72761",
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

export default function CentertonServiceAreaPage() {
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
                <span className={styles.eyebrow}>Centerton, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Centerton
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Centerton, local SEO is
                  what separates the contractors capturing early market
                  dominance from the ones arriving late to a growing market.
                  Centerton is one of the fastest-growing cities in Arkansas.
                  New construction means new homeowners. New homeowners search
                  for contractors they can trust. The contractors showing up
                  first in Google Maps and search results establish dominance
                  before a crowded market forms.
                </p>
                <p className={styles.heroBody}>
                  Most new homeowners are first-time Google searchers for home
                  services. They don&apos;t have established contractors. They
                  search. The contractor they find first becomes their
                  contractor. In Centerton, visibility now means owning this
                  market before it matures and becomes competitive. Once the
                  market fills with established contractors, visibility becomes
                  exponentially harder to achieve.
                </p>
                <div className={styles.heroActions}>
                  <Link href={process.env.NEXT_PUBLIC_AUDIT_URL} className={styles.primaryBtn}>
                    Run Your Free Audit
                  </Link>
                  <Link href='/contact' className={styles.secondaryBtn}>
                    Start With a Free Conversation
                  </Link>
                </div>
                <p className={styles.trust}>
                  No pitch, no signup — results in about 90 seconds.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.briefSectionWrap}`}>
          <div className={`container ${styles.briefSection}`}>
            <div className={styles.briefShell}>
              <div className={styles.briefLead}>
                <p className={styles.panelLabel}>Centerton local brief</p>
                <h2 className={styles.briefTitle}>
                  Centerton is growing fast. Early visibility means owning the
                  market before competition establishes itself.
                </h2>
                <p className={styles.panelCopy}>
                  Centerton is experiencing rapid growth. New construction, new
                  neighborhoods, new residents. Every new home means demand for
                  HVAC, electrical, plumbing, roofing, and remodeling. The
                  opportunity is now.
                </p>
                <div className={styles.briefStat}>
                  <span className={styles.panelNumber}>First</span>
                  <p className={styles.panelCopy}>
                    Mover advantage. New homeowners in fastest-growing markets
                    create opportunity for the contractor who shows up first.
                  </p>
                </div>
              </div>

              <div className={styles.briefSignals}>
                <p className={styles.cardLabel}>What that means in Centerton</p>
                <ul className={styles.signalList}>
                  {centertonSignals.map((signal) => (
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
                  Growth happens fast. The window for early dominance is narrow.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>
                  Centerton is growing. But growth is not permanent opportunity.
                  As more contractors move into the market and build visibility,
                  the advantage of being discovered first fades. New homeowners
                  stop becoming &quot;easy to find&quot; and start becoming
                  &quot;competitive to find.&quot;
                </p>
                <p className={styles.bodyCopy}>
                  The contractors who establish visibility now—in
                  Centerton&apos;s growth phase—will own the market for years.
                  The ones waiting to see how the market develops will be
                  fighting an uphill battle against established competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Centerton</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Centerton. The work is centered on visibility that
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
                Three steps from invisible to owning the market
              </h2>
            </div>
            <div className={styles.processRail}>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className={styles.stepTitle}>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Centerton search results, your
                  Google Business Profile, your website, your reviews, and the
                  signals that help you show up for new homeowners searching
                  now.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: Google Business Profile
                  strength, trust signals, clear service pages, and lead paths
                  that make calling easy.
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
                <p className={styles.sectionEyebrow}>Why Centerton matters</p>
                <h2 className={styles.sectionTitle}>
                  The market is forming now
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Centerton is one of the fastest-growing cities in Arkansas.
                  New homes mean new demand. New homeowners mean new search
                  volume. The contractors visible now will handle most of the
                  work as the market matures.
                </p>
                <p className={styles.bodyCopy}>
                  Markets follow patterns. Early growth creates demand from
                  buyers with minimal competition for visible contractors. As
                  the market matures, more contractors enter and visibility
                  becomes competitive. The smart move is to establish visibility
                  during the growth phase, before the market becomes crowded.
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
                Questions I expect from Centerton trade owners
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
              Run your free Centerton SEO audit
            </h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              seven local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.heroActions}>
              <Link href={process.env.NEXT_PUBLIC_AUDIT_URL} className={styles.primaryBtn}>
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
