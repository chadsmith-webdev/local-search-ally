import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/lowell-ar";

const tradeList = [
  "Roofing",
  "HVAC",
  "Plumbing",
  "Electrical",
  "General contracting",
  "Remodeling",
  "Landscaping",
];

const focusAreas = [
  {
    title: "Google Business Profile built for small markets",
    body: "Clean setup, strong foundational signals, review momentum. In Lowell, a polished GBP is enough to rank above most competitors who have done nothing.",
  },
  {
    title: "Website showing you are real and local",
    body: "Service pages, local photos, clear call paths. Lowell homeowners need to know you exist. A simple website is enough to beat contractors with no web presence.",
  },
  {
    title: "Review strategy for underserved markets",
    body: "Request process, response strategy, consistency. In Lowell, a few good reviews establish you as trustworthy. Minimal effort yields maximum results.",
  },
];

const lowellSignals = [
  "Smaller market with high demand but minimal local search optimization from competitors.",
  "Most trades rely on referrals and word-of-mouth — contractors showing up online face almost no competition.",
  "Homeowners search for services, but few contractors are visible, which creates opportunity.",
  "Lower effort required to rank high — polished visibility established quickly relative to larger markets.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "78% of local mobile searches result in an offline purchase (Safari Digital)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Lowell, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Lowell home service trades. I help HVAC, plumbing, roofing, and electrical contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Lowell, AR | Local Search Ally",
      description:
        "Lowell local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Is Lowell big enough to matter?",
    answer:
      "Yes. Lowell has enough population and home service demand to support contractors doing this work full-time. The advantage is less competition than in larger markets.",
  },
  {
    question: "How much does local visibility cost in a smaller market?",
    answer:
      "Less than in larger markets. Fewer contractors means less competition. A polished Google Business Profile, a functional website, and consistent reviews are enough to rank high.",
  },
  {
    question: "Will Lowell get more competitive?",
    answer:
      "Probably, eventually. But right now, you can establish visibility with minimal friction. That head start compounds over time.",
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
      name: "Lowell",
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

export default function LowellServiceAreaPage() {
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
                <span className={styles.eyebrow}>Lowell, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Lowell
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Lowell, local SEO is
                  your hidden advantage. Lowell is a smaller market that is
                  significantly underserved in local search. Most trades here
                  are still relying on referrals and word-of-mouth. That means
                  the contractor who shows up in search results faces minimal
                  competition. You can own the top spots in Lowell searches
                  without the battle you would face in Rogers or Bentonville.
                </p>
                <p className={styles.heroBody}>
                  In larger markets, visibility is expensive because competition
                  is fierce. In Lowell, visibility is achievable because few
                  contractors have done the work. A solid Google Business
                  Profile, a functional website, and consistent reviews can put
                  you at the top of local searches. That competitive advantage
                  translates to calls. This is the ideal market for a contractor
                  who wants maximum return on local SEO for minimal effort.
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
                <p className={styles.panelLabel}>Lowell local brief</p>
                <h2 className={styles.briefTitle}>
                  Lowell is underserved. Contractors who show up online face
                  almost no local competition.
                </h2>
                <p className={styles.panelCopy}>
                  Lowell is a smaller market where most trades still rely on
                  referrals. That creates an opportunity: the contractor who
                  shows up in search results captures the demand that would
                  otherwise go unfound.
                </p>
                <div className={styles.briefStat}>
                  <span className={styles.panelNumber}>Low</span>
                  <p className={styles.panelCopy}>
                    Competition for local search in Lowell means contractors
                    with basic visibility rank high naturally.
                  </p>
                </div>
              </div>

              <div className={styles.briefSignals}>
                <p className={styles.cardLabel}>What that means in Lowell</p>
                <ul className={styles.signalList}>
                  {lowellSignals.map((signal) => (
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
                  You are getting left-over demand instead of captured demand.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>
                  Most contractors in Lowell are busy through referrals. But
                  referrals slow down. When they do, homeowners who cannot get a
                  referral search online. The problem is that most Lowell
                  contractors are not showing up in those searches.
                </p>
                <p className={styles.bodyCopy}>
                  The result: demand exists, but it goes to contractors in
                  neighboring towns or to expensive-to-call national services. A
                  simple local presence could capture that demand. Instead, it
                  disappears.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Lowell</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Lowell. The work is centered on visibility that
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
                Three steps from invisible to capturing Lowell search demand
              </h2>
            </div>
            <div className={styles.processRail}>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className={styles.stepTitle}>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Lowell search results, your Google
                  Business Profile, your website, your reviews, and the signals
                  that help you show up for homeowners searching now.
                </p>
              </article>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: Google Business Profile
                  strength, local relevance, clear service pages, and lead paths
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
                <p className={styles.sectionEyebrow}>Why Lowell matters</p>
                <h2 className={styles.sectionTitle}>
                  Demand with minimal competition
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Lowell homeowners search for contractors online. They find the
                  ones showing up. Because few Lowell contractors have optimized
                  locally, the ones who do capture most of the demand.
                </p>
                <p className={styles.bodyCopy}>
                  Lowell is a smaller market where traditional
                  marketing—referrals, word-of-mouth, yard signs—still works.
                  But homeowners increasingly search first. Most Lowell trades
                  are not showing up in those searches.
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
                Questions I expect from Lowell trade owners
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
            <h2 className={styles.ctaTitle}>Run your free Lowell SEO audit</h2>
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
