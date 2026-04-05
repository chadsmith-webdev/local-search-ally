import Link from "next/link";
import styles from "./page.module.css";

const pageUrl = "https://localsearchally.com/service-areas/rogers-ar";

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
        <section className={styles.heroSection}>
          <div className={styles.contentWrap}>
            <span className={styles.eyebrow}>Rogers, Arkansas</span>
            <h1 className={`${styles.heroTitle} text-text`}>
              Local SEO for Home Service Trades in Rogers, AR
            </h1>
            <p className={styles.lede}>
              If you run a home service business in Rogers, local SEO is what
              gets you found when people are ready to hire. When someone
              searches for "AC repair Rogers AR" or "plumber near me," Google
              shows a short list. If your business is not in that list, you are
              easy to miss even if your work is better.
            </p>
            <p className={styles.lede}>
              I help Rogers home service trades show up where calls start:
              Google Maps, city + service searches, and service pages that match
              what people actually type.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentWrap}>
            <h2 className={`${styles.sectionTitle} text-text`}>
              If you are not in Rogers Map Pack, you are losing calls
            </h2>
            <p className={styles.bodyCopy}>
              Google's Map Pack shows three businesses per local search. In real
              life, that means most calls go to the same small group of
              companies over and over.
            </p>
            <p className={styles.bodyCopy}>
              Referrals still matter. But referrals are not a full pipeline.
              When referrals slow down, search visibility decides who gets the
              next call.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentWrap}>
            <h2 className={`${styles.sectionTitle} text-text`}>
              Built for Rogers home service trades
            </h2>
            <p className={styles.bodyCopy}>
              I work with home service trades in Northwest Arkansas, including
              Rogers.
            </p>
            <ul className={styles.list}>
              <li>HVAC</li>
              <li>Plumbing</li>
              <li>Roofing</li>
              <li>Electrical</li>
              <li>Landscaping</li>
              <li>Remodeling</li>
              <li>General contracting</li>
            </ul>
            <p className={styles.bodyCopy}>
              I focus on visibility work that supports calls: GBP relevance,
              service-page clarity, review signals, and mobile call paths.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentWrap}>
            <h2 className={`${styles.sectionTitle} text-text`}>
              Three steps from invisible to getting calls
            </h2>
            <div className={styles.steps}>
              <article className={styles.stepCard}>
                <p className={styles.stepLabel}>Step 01</p>
                <h3 className='text-text'>Audit</h3>
                <p className={styles.bodyCopy}>
                  I review your visibility in Rogers search results, your
                  service pages, your Google Business Profile, and who currently
                  holds the top spots.
                </p>
              </article>
              <article className={styles.stepCard}>
                <p className={styles.stepLabel}>Step 02</p>
                <h3 className='text-text'>Fix Priority Gaps</h3>
                <p className={styles.bodyCopy}>
                  I improve what matters first: local relevance, on-page
                  clarity, and lead paths that make calling easy.
                </p>
              </article>
              <article className={styles.stepCard}>
                <p className={styles.stepLabel}>Step 03</p>
                <h3 className='text-text'>Grow and Track</h3>
                <p className={styles.bodyCopy}>
                  I track what changes visibility and call quality, then adjust
                  based on what the data shows. No contracts.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentWrap}>
            <h2 className={`${styles.sectionTitle} text-text`}>
              Why this matters in Rogers
            </h2>
            <p className={styles.bodyCopy}>
              Rogers is one of the most active home service markets in Northwest
              Arkansas. More homeowners search before they call, and many of
              those searches happen on mobile at the moment a problem appears.
            </p>
            <ul className={styles.citationList}>
              <li>
                88% of consumers who search for a local business on mobile call
                or visit within 24 hours (Think With Google)
              </li>
              <li>
                51% of consumers use Google Maps for local search (Backlinko)
              </li>
              <li>
                61% of consumers say they are more likely to choose a business
                that has a website (BrightLocal)
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.contentWrap}>
            <h2 className={`${styles.sectionTitle} text-text`}>
              Frequently asked questions
            </h2>
            <div className={styles.faqGrid}>
              {faqItems.map((item) => (
                <article key={item.question} className={styles.faqItem}>
                  <h3 className='text-text'>{item.question}</h3>
                  <p className={styles.bodyCopy}>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.contentWrap}>
            <h2 className={`${styles.ctaTitle} text-text`}>
              Run your free Rogers SEO audit
            </h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              seven local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                href='/audit'
                className={`${styles.ctaPrimary} text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--carolina)]`}
              >
                Run Your Free Audit
              </Link>
              <Link
                href='/contact'
                className={`${styles.ctaSecondary} text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--carolina)]`}
              >
                Start With a Free Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
