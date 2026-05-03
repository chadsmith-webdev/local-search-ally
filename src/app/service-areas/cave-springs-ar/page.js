import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://www.localsearchally.com/service-areas/cave-springs-ar";

const tradeList = [
  "HVAC",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "Roofing",
  "Remodeling",
  "General contracting",
];

const focusAreas = [
  {
    title: "Google Business Profile built for emerging markets",
    body: "Fast setup, strong foundational signals, review momentum. In Cave Springs, being visible as the market grows means you show up automatically as search volume increases.",
  },
  {
    title: "Website showing capability and local presence",
    body: "Service pages, project photos, clear call paths. Builders and new homeowners need confidence. A polished website shows you are established and trustworthy.",
  },
  {
    title: "Review strategy for growing markets",
    body: "Request process that builds momentum, consistent response, clear communication. In Cave Springs, early reviews establish credibility as the market grows.",
  },
];

const caveSpringsSignals = [
  "Growing suburb with new residential developments and active construction.",
  "Builders and new homeowners search online — early visibility captures demand upstream.",
  "Most trades still rely on relationships and word-of-mouth, creating opportunity for contractors showing up in search.",
  "Market is in growth phase — establishing visibility now means dominance as demand increases.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "28% of searches for something nearby result in a purchase (Think With Google)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Cave Springs, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Cave Springs home service trades. I help HVAC, electrical, plumbing, and remodeling contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Cave Springs, AR | Local Search Ally",
      description:
        "Cave Springs local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Is Cave Springs big enough to matter?",
    answer:
      "Yes. Cave Springs has active construction and growing residential demand. The market is small now but growing, which is exactly when early visibility creates the most advantage.",
  },
  {
    question: "Should I focus on Cave Springs or neighboring markets?",
    answer:
      "Both, likely. But Cave Springs specifically is worth visibility because the growth is happening now. Being found in Cave Springs specifically captures builder work and residential demand.",
  },
  {
    question: "Will Cave Springs become more competitive?",
    answer:
      "Yes, probably. That's why the move is now. Establish visibility while few contractors have done the work. By the time the market matures, you are already established.",
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
  "@id": "https://www.localsearchally.com/#localbusiness",
  name: "Local Search Ally",
  url: "https://www.localsearchally.com",
  telephone: "+14793808626",
  description:
    "Local SEO and web design for home service trades in Northwest Arkansas.",
  areaServed: [
    {
      "@type": "City",
      name: "Cave Springs",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.18808",
    longitude: "-94.54064",
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

export default function CaveSpringsServiceAreaPage() {
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
                <span className={styles.eyebrow}>Cave Springs, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Cave Springs
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Cave Springs, local SEO
                  is your opportunity to establish dominance before the market
                  matures. Cave Springs is a growing suburb with new residential
                  developments. Most trades here are still relying on
                  word-of-mouth. That means the contractor who shows up in
                  search results now captures the demand from the builders,
                  property managers, and homeowners searching online before
                  anyone else establishes visibility.
                </p>
                <p className={styles.heroBody}>
                  In established markets, visibility is competitive and
                  expensive. In Cave Springs, the window is still open. A solid
                  Google Business Profile, a functional website, and consistent
                  reviews can put you at the top of searches with minimal
                  competition. Early visibility here compounds—you become the
                  known contractor as the market grows. The opportunity is now,
                  before visibility becomes crowded.
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
                <p className={styles.panelLabel}>Cave Springs local brief</p>
                <h2 className={styles.briefTitle}>
                  Cave Springs is growing and open. The contractor who shows up
                  first gets the market as it grows.
                </h2>
                <p className={styles.panelCopy}>
                  Cave Springs is experiencing growth. New developments, new
                  residents, new demand. Builders need reliable trades. New
                  homeowners need contractors they can trust. The ones showing
                  up in search results when builders and homeowners look online
                  capture most of the work.
                </p>
                <div className={styles.briefStat}>
                  <span className={styles.panelNumber}>Early</span>
                  <p className={styles.panelCopy}>
                    Window advantage. The first movers in growing suburbs
                    establish dominance before the market matures.
                  </p>
                </div>
              </div>

              <div className={styles.briefSignals}>
                <p className={styles.cardLabel}>
                  What that means in Cave Springs
                </p>
                <ul className={styles.signalList}>
                  {caveSpringsSignals.map((signal) => (
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
                  You are competing on relationships, not being found online.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>
                  In Cave Springs, builder relationships and word-of-mouth are
                  still the primary paths. But the market is growing. As more
                  builders arrive and more homeowners move in, search becomes
                  the default way to find contractors.
                </p>
                <p className={styles.bodyCopy}>
                  The problem is that most trades have not prepared for that
                  transition. When the market flips to search-first, the
                  contractors ready will capture most of the demand. The ones
                  still relying on relationships will struggle to adapt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Cave Springs</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Cave Springs. The work is centered on visibility
                  that supports calls, not vague reports.
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
                Three steps from unknown to owning your market
              </h2>
            </div>
            <div className={styles.processRail}>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className={styles.stepTitle}>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Cave Springs search results, your
                  Google Business Profile, your website, your reviews, and the
                  signals that help you show up for builders and homeowners
                  searching now.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: Google Business Profile
                  strength, clear service offerings, professional presence, and
                  lead paths that build trust.
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
                <p className={styles.sectionEyebrow}>
                  Why Cave Springs matters
                </p>
                <h2 className={styles.sectionTitle}>
                  The market is arriving. Be ready.
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Cave Springs is growing. New development means new demand. New
                  builders mean new work. New homeowners mean new search
                  behavior. The contractors visible now will own the market as
                  it grows.
                </p>
                <p className={styles.bodyCopy}>
                  Growing suburbs follow predictable patterns. Early growth
                  happens through builder relationships and word-of-mouth. But
                  as the market matures, search becomes the primary discovery
                  method. Builders bring projects. Homeowners bring residential
                  work. Both search online.
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
                Questions I expect from Cave Springs trade owners
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
              Run your free Cave Springs SEO audit
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
