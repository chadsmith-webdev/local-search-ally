import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/springdale-ar";

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
    title: "Google Business Profile built for dense markets",
    body: "Category alignment, service-area boundaries, strong review momentum, and consistent signals across phone, website, and hours. In Springdale, clear boundaries mean you show up for both Springdale and nearby searches without confusion.",
  },
  {
    title: "Website built for search-first markets",
    body: "Service pages optimized for 'HVAC near me,' 'plumber Springdale,' and related searches. Mobile-first design, fast load times, and clear call paths. Springdale homeowners search before they call.",
  },
  {
    title: "Local relevance and citation strength",
    body: "Presence across directories with consistent name, address, phone, and categories. Response to reviews. Clear service-area definition. In Springdale, trades with tight local signals capture more calls.",
  },
];

const springdaleSignals = [
  "Dense residential and commercial market with high search volume for home services.",
  "Trades here compete across both Springdale and Fayetteville searches — local relevance signals have to be dialed in exactly right.",
  "Mobile-first searching from homeowners and property managers looking for immediate help.",
  "Mixed demand creates opportunities across residential maintenance, repairs, and commercial property management.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "61% of consumers say they are more likely to choose a business that has a website (BrightLocal)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Springdale, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Springdale home service trades. I help HVAC, plumbing, roofing, electrical, and remodeling contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Springdale, AR | Local Search Ally",
      description:
        "Springdale local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Do you only work with Springdale businesses?",
    answer:
      "No. I work with home service trades across Northwest Arkansas. Springdale is one of the core markets I serve.",
  },
  {
    question: "How much does it cost to rank in Springdale?",
    answer:
      "Varies. The question is not what it costs — it is what invisibility costs. If you are not showing up in Springdale searches, you are losing calls to competitors who do. One job means thousands of dollars. Proper visibility pays for itself fast.",
  },
  {
    question: "Should I focus on Springdale or Fayetteville searches?",
    answer:
      "Both. Trades in Springdale often get searches from both cities. A well-configured Google Business Profile and service boundaries mean you show up for both without confusion or duplicate listings.",
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
      name: "Springdale",
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

export default function SpringdaleServiceAreaPage() {
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
                <span className={styles.eyebrow}>Springdale, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Springdale
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Springdale, local SEO is
                  what separates the busy contractors from the ones watching
                  competitors capture most of the calls. Springdale is a dense
                  residential and commercial market. Homeowners search when they
                  need you. The contractors showing up clearly in Google Maps
                  and search results get the work.
                </p>
                <p className={styles.heroBody}>
                  Springdale is unique because trades here compete across both
                  Springdale and Fayetteville searches. Local relevance signals
                  have to be dialed in exactly right. A weak Google Business
                  Profile or confusing service-area boundaries mean you lose
                  visibility when it matters most.
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
          </div>
        </section>

        <section className={`section ${styles.briefSectionWrap}`}>
          <div className={`container ${styles.briefSection}`}>
            <div className={styles.briefShell}>
              <div className={styles.briefLead}>
                <p className={styles.panelLabel}>Springdale local brief</p>
                <h2 className={styles.briefTitle}>
                  Springdale is dense and mixed-market. Weak local signals cost
                  you calls to competitors with clearer visibility.
                </h2>
                <p className={styles.panelCopy}>
                  Springdale is one of the most active home service markets in
                  Northwest Arkansas. It has both established residential
                  neighborhoods and growing commercial districts. That means
                  more types of demand and more competition fighting for the top
                  spots.
                </p>
                <div className={styles.briefStat}>
                  <span className={styles.panelNumber}>4</span>
                  <p className={styles.panelCopy}>
                    Service categories show up in Springdale and Fayetteville
                    searches. Weak local signals in either market mean losing
                    calls.
                  </p>
                </div>
              </div>

              <div className={styles.briefSignals}>
                <p className={styles.cardLabel}>
                  What that means in Springdale
                </p>
                <ul className={styles.signalList}>
                  {springdaleSignals.map((signal) => (
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
                  Referrals work until search matters more.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>
                  Most home service trades in Springdale are busy through
                  referrals. But referrals slow down. When they do, the
                  contractors already showing up in Map Pack and service-area
                  searches absorb the demand.
                </p>
                <p className={styles.bodyCopy}>
                  Springdale&apos;s density and commercial mix mean that local
                  relevance has to be tight across Google Business Profile,
                  service categories, service-area boundaries, and reviews. If
                  any of those signals are weak, you lose calls to competitors
                  with stronger visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Springdale</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Springdale. The work is centered on visibility that
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
                  I review your visibility in Springdale search results, your
                  Google Business Profile, your website, your reviews, and the
                  signals that help you show up for searches that matter.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: Google Business Profile
                  strength, local relevance, on-page clarity, and lead paths
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
                <p className={styles.sectionEyebrow}>Why Springdale matters</p>
                <h2 className={styles.sectionTitle}>
                  The search behavior is already there
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Springdale homeowners search when they need a contractor. High
                  volume, consistent demand across residential and commercial,
                  and homeowners ready to hire now. The contractors that show up
                  first get the calls.
                </p>
                <p className={styles.bodyCopy}>
                  Springdale is one of the most active home service markets in
                  NWA. More searches happen here than in many surrounding
                  cities. The residential neighborhoods drive steady demand for
                  HVAC, plumbing, roofing, and remodeling. The commercial mix
                  drives additional demand from property managers and small
                  business owners.
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
                Questions I expect from Springdale trade owners
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
              Run your free Springdale SEO audit
            </h2>
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
