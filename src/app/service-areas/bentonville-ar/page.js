import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://www.localsearchally.com/service-areas/bentonville-ar";

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
    title: "Google Business Profile built for quality-focused buyers",
    body: "Category alignment, service-area relevance, strong reviews, and high-quality photos that showcase professionalism. Bentonville buyers compare options. Your GBP needs to prove you're the professional choice.",
  },
  {
    title: "Reviews as your primary sales tool",
    body: "Review request workflow that works consistently. Response strategy so you're engaged. Your reviews are proof of quality in a market where Bentonville homeowners compare based on feedback.",
  },
  {
    title: "Website built for Bentonville's research-heavy market",
    body: "Pages optimized for city + service searches, trust signals (testimonials, credentials, complex projects), mobile-first design, and clear call paths. When homeowners research Bentonville contractors online, your site needs to show you're the right choice.",
  },
];

const bentonvilleSignals = [
  "Higher-income homeowners who invest in quality contractors — not price shoppers.",
  "Research-heavy market where Google reviews are decision-drivers.",
  "A polished website, full Google Business Profile, and strong reviews are expected — not optional.",
  "Mix of newer subdivisions and established neighborhoods creates consistent demand across remodeling, upgrades, and maintenance.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "61% of consumers say they are more likely to choose a business that has a website (BrightLocal)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Bentonville, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Bentonville home service trades. I help HVAC, plumbing, roofing, electrical, and remodeling contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Bentonville, AR | Local Search Ally",
      description:
        "Bentonville local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Do you only work with Bentonville businesses?",
    answer:
      "No. I am based in Siloam Springs and work with home service trades across Northwest Arkansas. Bentonville is one of the core markets I serve.",
  },
  {
    question: "How fast can rankings improve?",
    answer:
      "It depends on your starting point and how competitive your service category is in Bentonville. Some fixes move quickly. Lasting growth usually comes from consistent monthly improvements.",
  },
  {
    question: "Do I need a new website first?",
    answer:
      "Not always. I start by finding your highest-impact gaps first. Sometimes it is Google Business Profile and reviews. Sometimes it is website structure and conversion paths.",
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
      name: "Bentonville",
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

export default function BentonvilleServiceAreaPage() {
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
                <span className={styles.eyebrow}>Bentonville, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Bentonville
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Bentonville, local SEO
                  is what gets you found when people are ready to hire. When
                  someone searches for "AC repair Bentonville" or "plumber near
                  me," Google shows a short list. If your business is not in
                  that list, you are easy to miss even if your work is better.
                </p>
                <p className={styles.heroBody}>
                  I help Bentonville home service trades show up where calls
                  start: Google Maps, city + service searches, and service pages
                  that match what people actually type. Bentonville homeowners
                  research heavily. Reviews matter. Your website, GBP, and
                  service pages need to be sharp. I make sure you show up
                  clearly in all three.
                </p>
                <div className={styles.heroActions}>
                  <Link
                    href={process.env.NEXT_PUBLIC_AUDIT_URL}
                    className={styles.primaryBtn}
                  >
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
                <p className={styles.panelLabel}>Bentonville local brief</p>
                <h2 className={styles.briefTitle}>
                  Bentonville is competitive. Reviews and polish actually
                  determine visibility.
                </h2>
                <p className={styles.panelCopy}>
                  This is not a market where a thin Google Business Profile and
                  outdated website slide by quietly. Bentonville homeowners
                  research. They compare. They read reviews. When demand spikes,
                  the businesses with stronger local signals — better GBP,
                  sharper service pages, more reviews — get calls first.
                </p>
                <div className={styles.briefStat}>
                  <span className={styles.panelNumber}>3</span>
                  <p className={styles.panelCopy}>
                    Google&apos;s Map Pack shows three businesses per search. If
                    you are not in that group, you are easy to miss.
                  </p>
                </div>
              </div>

              <div className={styles.briefSignals}>
                <p className={styles.cardLabel}>
                  What that means in Bentonville
                </p>
                <ul className={styles.signalList}>
                  {bentonvilleSignals.map((signal) => (
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
                  Referrals are fine. Until they are not.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>
                  Most home service trades in Bentonville are busy until the
                  same referral pipeline slows down. When that happens, the
                  companies already showing up in search absorb the demand.
                </p>
                <p className={styles.bodyCopy}>
                  The problem is usually not a lack of searches. It is weak
                  local visibility. Bentonville is competitive enough that if
                  your Google Business Profile, reviews, website, and local
                  signals are thin or uneven, your competitor gets the call
                  first. Homeowners here research online before they call. If
                  you don't show up clearly, they move on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Bentonville</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Bentonville. The work is centered on visibility that
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
                  I review your visibility in Bentonville search results, your
                  Google Business Profile, your website, your reviews, and who
                  currently holds the top spots.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: review momentum, local
                  relevance, on-page clarity, and lead paths that make calling
                  easy.
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
                <p className={styles.sectionEyebrow}>Why Bentonville matters</p>
                <h2 className={styles.sectionTitle}>
                  The search behavior is already there
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Bentonville homeowners already search when they need a
                  contractor. They research online, compare reviews, and call
                  whoever shows up first and looks most professional. The
                  businesses that look local, credible, and easy to call are the
                  ones that win.
                </p>
                <p className={styles.bodyCopy}>
                  Bentonville is one of the most active home service markets in
                  Northwest Arkansas. Homeowners here have higher budgets,
                  expect quality, and trust reviews. More of them search before
                  they call, and those searches often happen on mobile the
                  moment a problem shows up. If you show up clearly in that
                  search, you get the call.
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
                Questions I expect from Bentonville trade owners
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
              Run your free Bentonville SEO audit
            </h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              seven local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.heroActions}>
              <Link
                href={process.env.NEXT_PUBLIC_AUDIT_URL}
                className={styles.primaryBtn}
              >
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
