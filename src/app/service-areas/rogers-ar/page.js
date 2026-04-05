import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/rogers-ar";

const tradeList = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Landscaping",
  "Remodeling",
  "General contracting",
];

const focusAreas = [
  {
    title: "Google Business Profile",
    body: "Category alignment, service-area relevance, and the trust signals that help you earn map visibility.",
  },
  {
    title: "Service-page clarity",
    body: "Pages built around the city + service searches Rogers homeowners actually use when they need help now.",
  },
  {
    title: "Call-path cleanup",
    body: "Mobile-first page structure that makes it easy to call instead of bounce back to the search results.",
  },
];

const rogersSignals = [
  "Fast-growing market with steady search demand for home services.",
  "Higher competition than smaller nearby cities, so weak local signals get exposed fast.",
  "Mobile search matters because many calls start the moment a problem appears.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "61% of consumers say they are more likely to choose a business that has a website (BrightLocal)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Rogers, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Rogers home service trades. I help HVAC, plumbing, roofing, and electrical businesses show up in Google Maps and turn searches into calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Rogers, AR | Local Search Ally",
      description:
        "Rogers local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Do you only work with Rogers businesses?",
    answer:
      "No. I am based in Siloam Springs and work with home service trades across Northwest Arkansas. Rogers is one of the core markets I serve.",
  },
  {
    question: "How fast can rankings improve?",
    answer:
      "It depends on your starting point and how competitive your service category is in Rogers. Some fixes move quickly. Lasting growth usually comes from consistent monthly improvements.",
  },
  {
    question: "Do I need a new website first?",
    answer:
      "Not always. I start by finding your highest-impact gaps first. Sometimes it is GBP and service-page clarity. Sometimes it is site structure and conversion paths.",
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
      name: "Rogers",
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

export default function RogersServiceAreaPage() {
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
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Rogers, Arkansas</span>
              <h1 className={styles.heroTitle}>
                Local SEO for Rogers
                <span className={styles.heroAccent}> home service trades.</span>
              </h1>
              <p className={styles.heroBody}>
                If you run a home service business in Rogers, local SEO is what
                gets you found when people are ready to hire. When someone
                searches for "AC repair Rogers AR" or "plumber near me," Google
                shows a short list. If your business is not in that list, you
                are easy to miss even if your work is better.
              </p>
              <p className={styles.heroBody}>
                I help Rogers home service trades show up where calls start:
                Google Maps, city + service searches, and service pages that
                match what people actually type.
              </p>
              <div className={styles.heroActions}>
                <Link href='/audit' className={styles.primaryBtn}>
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
        </section>

        <section className={`section ${styles.briefSectionWrap}`}>
          <div className={`container ${styles.briefSection}`}>
            <div className={styles.heroPanel}>
              <p className={styles.panelLabel}>Rogers local brief</p>
              <div className={styles.panelStat}>
                <span className={styles.panelNumber}>3</span>
                <p className={styles.panelCopy}>
                  Google&apos;s Map Pack shows three businesses per search. If
                  you are not in that group, you are easy to miss.
                </p>
              </div>
              <ul className={styles.signalList}>
                {rogersSignals.map((signal) => (
                  <li key={signal} className={styles.signalItem}>
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={`section ${styles.problemSectionWrap}`}>
          <div className={`container ${styles.problemLayout}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>The real problem</p>
              <h2 className={styles.sectionTitle}>
                Referrals are fine. Until they are not.
              </h2>
            </div>
            <div className={styles.problemCopy}>
              <p className={styles.bodyCopy}>
                Most home service trades in Rogers are busy until the same
                referral pipeline slows down. When that happens, the companies
                already showing up in search absorb the demand.
              </p>
              <p className={styles.bodyCopy}>
                The problem is usually not a lack of searches. It is weak local
                visibility. Rogers is competitive enough that if your Google
                Business Profile, city pages, and review signals are uneven,
                your competitor gets the call first.
              </p>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className={`container ${styles.fitSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>Built for Rogers</p>
              <h2 className={styles.sectionTitle}>
                Made for home service trades, not generic businesses
              </h2>
              <p className={styles.bodyCopy}>
                I work with home service trades in Northwest Arkansas, including
                Rogers. The work is centered on visibility that supports calls,
                not vague reports.
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
        </section>

        <section className='section'>
          <div className={`container ${styles.processSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>How it works</p>
              <h2 className={styles.sectionTitle}>
                Three steps from invisible to getting calls
              </h2>
            </div>
            <div className={styles.steps}>
              <article className={styles.stepCard}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className={styles.stepTitle}>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Rogers search results, your
                  service pages, your Google Business Profile, and who currently
                  holds the top spots.
                </p>
              </article>
              <article className={styles.stepCard}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: local relevance, on-page
                  clarity, and lead paths that make calling easy.
                </p>
              </article>
              <article className={styles.stepCard}>
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
          <div className={`container ${styles.proofSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>Why Rogers matters</p>
              <h2 className={styles.sectionTitle}>
                The search behavior is already there
              </h2>
              <p className={styles.bodyCopy}>
                Rogers is one of the most active home service markets in
                Northwest Arkansas. More homeowners search before they call, and
                those searches often happen on mobile the moment a problem shows
                up.
              </p>
            </div>
            <div className={styles.proofPanel}>
              <ul className={styles.citationList}>
                {citationStats.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={`section ${styles.faqSectionWrap}`}>
          <div className={`container ${styles.faqSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>FAQ</p>
              <h2 className={styles.sectionTitle}>
                Questions I expect from Rogers trade owners
              </h2>
            </div>
            <div className={styles.faqGrid}>
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
            <h2 className={styles.ctaTitle}>Run your free Rogers SEO audit</h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              seven local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.heroActions}>
              <Link href='/audit' className={styles.primaryBtn}>
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
