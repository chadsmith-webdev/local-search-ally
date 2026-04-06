import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/siloam-springs-ar";

const tradeList = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Landscaping",
  "Remodeling",
  "General contracting",
  "Well repair",
  "Septic services",
  "Masonry",
];

const focusAreas = [
  {
    title: "Google Business Profile",
    body: "Category alignment, service-area relevance, and the trust signals that help you earn map visibility.",
  },
  {
    title: "Service-page clarity",
    body: "Pages built around the city + service searches Siloam Springs homeowners actually use when they need help now.",
  },
  {
    title: "Call-path cleanup",
    body: "Mobile-first page structure that makes it easy to call instead of bounce back to the search results.",
  },
];

const siloamSignals = [
  "Established community with stable housing stock and ongoing maintenance demand.",
  "Tight-knit market where being found on Google matters more than word-of-mouth alone.",
  "Mobile search is critical because homeowners often search the moment a problem happens.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "61% of consumers say they are more likely to choose a business that has a website (BrightLocal)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Siloam Springs, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Siloam Springs home service trades. I help HVAC, plumbing, roofing, and electrical businesses show up in Google Maps and turn searches into calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Siloam Springs, AR | Local Search Ally",
      description:
        "Siloam Springs local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Do you only work with Siloam Springs businesses?",
    answer:
      "No. I'm based in Siloam Springs and work with home service trades across Northwest Arkansas. But Siloam Springs is my home market—I know the competition, the search trends, and the customer behavior here better than anywhere else.",
  },
  {
    question: "How long before I see results?",
    answer:
      "It depends on where you're starting and how competitive your service is locally. Some gaps (like outdated GBP info) fix quickly. Lasting growth usually comes from consistent monthly improvements that compound.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We start with an audit to see where the biggest gaps are. Sometimes it's GBP and service-page clarity. Sometimes it's site structure and the path visitors take to call. Most of the time, it's a combination.",
  },
  {
    question: "Are there contracts or hidden fees?",
    answer:
      "No contracts. You're not locked in. No hidden fees—I quote upfront based on the scope. If this isn't working for you, you can stop anytime.",
  },
  {
    question: "What's the first step?",
    answer:
      "Run the free audit. It takes about 10 minutes and you get a clear baseline across seven local SEO sections. Then we can talk about what comes next if we're a good fit.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Search Ally",
  url: "https://localsearchally.com",
  telephone: "+14793808626",
  description:
    "Local SEO and web design for home service trades in Siloam Springs.",
  areaServed: [
    {
      "@type": "City",
      name: "Siloam Springs",
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

export default function SiloamSpringsServiceAreaPage() {
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
                <span className={styles.eyebrow}>Siloam Springs, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Siloam Springs
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Siloam Springs, local
                  SEO is what gets you found when people are ready to hire. When
                  someone searches for "plumber in Siloam Springs" or "HVAC near
                  me," Google shows a short list. If your business is not in
                  that list, you are easy to miss even if your work is better.
                </p>
                <p className={styles.heroBody}>
                  I help Siloam Springs home service trades show up where calls
                  start: Google Maps, city + service searches, and service pages
                  that match what people actually type.
                </p>
                <div className={styles.heroActions}>
                  <Link href='/services/audit' className={styles.primaryBtn}>
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
                <p className={styles.panelLabel}>Siloam Springs local brief</p>
                <h2 className={styles.briefTitle}>
                  It&apos;s a tight-knit market. Being found on Google is now
                  table stakes.
                </h2>
                <p className={styles.panelCopy}>
                  Word-of-mouth used to be enough in Siloam Springs. It&apos;s
                  not anymore. Homeowners start on Google first. If you&apos;re
                  not there clearly, they call someone else.
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
                  What that means in Siloam Springs
                </p>
                <ul className={styles.signalList}>
                  {siloamSignals.map((signal) => (
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
                  Most home service trades in Siloam Springs are busy until the
                  same referral pipeline slows down. When that happens, the
                  companies already showing up in search absorb the demand.
                </p>
                <p className={styles.bodyCopy}>
                  The problem is usually not a lack of searches. It is weak
                  local visibility. If your Google Business Profile, city pages,
                  and review signals are uneven, your competitor gets the call
                  first.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>
                  Built for Siloam Springs
                </p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas, and
                  Siloam Springs is my home market. The work is centered on
                  visibility that supports calls, not vague reports.
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
                  I review your visibility in Siloam Springs search results,
                  your service pages, your Google Business Profile, and who
                  currently holds the top spots.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: local relevance, on-page
                  clarity, and lead paths that make calling easy.
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
                <p className={styles.sectionEyebrow}>Why this matters</p>
                <h2 className={styles.sectionTitle}>
                  The search behavior is already there
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Siloam Springs homeowners already search when something
                  breaks. The businesses that look local, credible, and easy to
                  call are the ones that win the first conversation.
                </p>
                <p className={styles.bodyCopy}>
                  Siloam Springs is an established market with steady search
                  demand for home services. Those searches often happen on
                  mobile the moment a problem shows up.
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
                Questions I expect from Siloam Springs trade owners
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
              Run your free Siloam Springs SEO audit
            </h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              seven local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.heroActions}>
              <Link href='/services/audit' className={styles.primaryBtn}>
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
