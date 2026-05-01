import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/fayetteville-ar";

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
    title: "Google Business Profile built for high-volume markets",
    body: "Category alignment, service-area boundaries, strong review momentum, and consistency across all signals. In Fayetteville, weak GBP signals mean you lose to competitors with stronger profiles.",
  },
  {
    title: "Website built for competitive search markets",
    body: "Service pages optimized for high-search-volume keywords, mobile-first design, clear call paths, and fast load times. You're competing with dozens of contractors. Your website needs to make calling obvious.",
  },
  {
    title: "Local authority and review strategy",
    body: "Consistent citations across directories, review request workflow that keeps momentum going, and response strategy so you're engaged. In Fayetteville, proof of legitimacy separates you from competitors.",
  },
];

const fayettevilleSignals = [
  "Largest market in Northwest Arkansas with high search volume for home services.",
  "More demand, more visibility, more competition — the contractors at the top capture most calls.",
  "Mobile-first market where emergency searches happen the moment a problem appears.",
  "Established residential base creates consistent demand across maintenance, repairs, and upgrades.",
];

const citationStats = [
  "88% of consumers who search for a local business on mobile call or visit within 24 hours (Think With Google)",
  "51% of consumers use Google Maps for local search (Backlinko)",
  "61% of consumers say they are more likely to choose a business that has a website (BrightLocal)",
];

export function generateMetadata() {
  return {
    title:
      "Local SEO in Fayetteville, AR for Home Service Trades | Local Search Ally",
    description:
      "Local SEO and web design for Fayetteville home service trades. I help HVAC, plumbing, roofing, electrical, and remodeling contractors show up in Google Maps and turn searches into booked calls.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Local SEO in Fayetteville, AR | Local Search Ally",
      description:
        "Fayetteville local SEO for home service trades. See where you stand, fix priority gaps, and get found in Google Maps.",
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
  };
}

const faqItems = [
  {
    question: "Do you only work with Fayetteville businesses?",
    answer:
      "No. I am based in Siloam Springs and work with home service trades across Northwest Arkansas. Fayetteville is one of the core markets I serve.",
  },
  {
    question: "How much does it cost to rank in Fayetteville?",
    answer:
      "Varies. The question is not what it costs — it is what invisibility costs. If you are not showing up in Fayetteville searches, you are losing calls to competitors who do. One HVAC job, one remodel, one electrical project means thousands of dollars. Proper visibility pays for itself fast.",
  },
  {
    question:
      "My competitors' sites look more polished than mine. What do I do?",
    answer:
      "Two options: Rebuild or optimize. If your site is 5+ years old, a rebuild makes sense. You get mobile-first design, current standards, and proper local SEO. If your site is newer but underperforming, optimization often works just as well and costs less.",
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
      name: "Fayetteville",
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

export default function FayettevilleServiceAreaPage() {
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
                <span className={styles.eyebrow}>Fayetteville, Arkansas</span>
                <h1 className={styles.heroTitle}>
                  Local SEO for Fayetteville
                  <span className={styles.heroAccent}>
                    {" "}
                    home service trades.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  If you run a home service business in Fayetteville, local SEO
                  is what separates the busy contractors from the ones getting
                  crushed by competition. When someone searches for "AC repair
                  Fayetteville" or "plumber near me," Google shows a short list.
                  The contractors in that list get the calls. Everyone else is
                  invisible.
                </p>
                <p className={styles.heroBody}>
                  Fayetteville is the largest market in Northwest Arkansas. More
                  searches happen here. More competition fights for those same
                  spots. I help Fayetteville home service trades cut through the
                  noise and show up where calls start: Google Maps, city +
                  service searches, and service pages built specifically for
                  your market.
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
                <p className={styles.panelLabel}>Fayetteville local brief</p>
                <h2 className={styles.briefTitle}>
                  Fayetteville is large and competitive. Weak visibility means
                  losing calls to competitors with better search presence.
                </h2>
                <p className={styles.panelCopy}>
                  Fayetteville is the biggest market in NWA. That means more
                  searches, more demand, and more contractors fighting for the
                  top spots. If you're not showing up clearly in Map Pack,
                  you're invisible to the homeowners searching right now.
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
                  What that means in Fayetteville
                </p>
                <ul className={styles.signalList}>
                  {fayettevilleSignals.map((signal) => (
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
                  Most home service trades in Fayetteville are busy until the
                  referral pipeline slows. When that happens, the contractors
                  already showing up in Map Pack absorb the demand.
                </p>
                <p className={styles.bodyCopy}>
                  Fayetteville is large enough and competitive enough that weak
                  visibility is not an option. Your Google Business Profile,
                  website, reviews, and local signals need to be solid. If
                  they're not, your competitor with better visibility gets the
                  call. Period.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.fitSectionWrap}`}>
          <div className='container'>
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>Built for Fayetteville</p>
                <h2 className={styles.sectionTitle}>
                  Made for home service trades, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including Fayetteville. The work is centered on visibility
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
                Three steps from invisible to getting calls
              </h2>
            </div>
            <div className={styles.processRail}>
              <article className={styles.processNode}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className={styles.stepTitle}>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Fayetteville search results, your
                  Google Business Profile, your website, your reviews, and who
                  currently holds the top spots.
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
                <p className={styles.sectionEyebrow}>
                  Why Fayetteville matters
                </p>
                <h2 className={styles.sectionTitle}>
                  The search behavior is already there
                </h2>
              </div>

              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  Fayetteville homeowners search when they need a contractor.
                  High volume, consistent demand, and homeowners ready to hire
                  now. The contractors that show up first get the calls.
                </p>
                <p className={styles.bodyCopy}>
                  Fayetteville is the most active home service market in
                  Northwest Arkansas. More searches happen here than anywhere
                  else in the region. That means more opportunity, but also more
                  competition. You need strong visibility to stand out. If you
                  show up clearly when someone searches "HVAC repair
                  Fayetteville" or "plumber near me," you get the call.
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
                Questions I expect from Fayetteville trade owners
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
              Run your free Fayetteville SEO audit
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
