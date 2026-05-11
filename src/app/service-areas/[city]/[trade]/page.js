import Link from "next/link";
import {
  CITY_SLUGS,
  TRADE_SLUGS,
  CITY_META,
  TRADE_META,
  TRADE_AUDIT_PARAM,
  getCityTradeSignals,
  getCityTradeFAQs,
} from "@/lib/tradePageData";
import styles from "@/app/service-areas/trade.module.css";

export async function generateStaticParams() {
  const params = [];
  for (const city of CITY_SLUGS) {
    for (const trade of TRADE_SLUGS) {
      params.push({ city, trade });
    }
  }
  return params;
}

export function generateMetadata({ params }) {
  const { city: citySlug, trade: tradeSlug } = params;
  const city = CITY_META[citySlug];
  const trade = TRADE_META[tradeSlug];
  if (!city || !trade) return {};

  const pageUrl = `https://www.localsearchally.com/service-areas/${citySlug}/${tradeSlug}`;
  const title = `${trade.display} SEO in ${city.name}, AR | Local Search Ally`;
  const description = `Local SEO for ${trade.noun}s in ${city.name}, Arkansas. I help ${trade.display} businesses get into the Google Map Pack and convert more searches into calls.`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Local Search Ally",
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function CityTradePage({ params }) {
  const { city: citySlug, trade: tradeSlug } = params;
  const city = CITY_META[citySlug];
  const trade = TRADE_META[tradeSlug];

  if (!city || !trade) return null;

  const pageUrl = `https://www.localsearchally.com/service-areas/${citySlug}/${tradeSlug}`;
  const auditUrl = `${process.env.NEXT_PUBLIC_AUDIT_URL}?city=${encodeURIComponent(city.auditParam)}&trade=${encodeURIComponent(TRADE_AUDIT_PARAM[tradeSlug])}`;
  const signals = getCityTradeSignals(citySlug, tradeSlug);
  const faqItems = getCityTradeFAQs(citySlug, tradeSlug);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.localsearchally.com/#localbusiness",
    name: "Local Search Ally",
    url: "https://www.localsearchally.com",
    telephone: "+14793808626",
    description: `Local SEO and web design for home service trades in Northwest Arkansas.`,
    areaServed: [
      {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "State", name: city.state },
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
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.localsearchally.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://www.localsearchally.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://www.localsearchally.com/service-areas/${citySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: trade.display,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.grid} aria-hidden="true" />
          <div className={styles.orb} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroScene}>
              <div className={styles.heroContent}>
                <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                  <Link href={city.hubPath} className={styles.breadcrumbLink}>
                    {city.name}, {city.stateAbbr}
                  </Link>
                  <span className={styles.breadcrumbSep} aria-hidden="true">
                    /
                  </span>
                  <span className={styles.breadcrumbCurrent}>
                    {trade.display}
                  </span>
                </nav>
                <span className={styles.eyebrow}>
                  {city.name}, {city.stateAbbr} · {trade.display}
                </span>
                <h1 className={styles.heroTitle}>
                  Local SEO for {city.name}{" "}
                  <span className={styles.heroAccent}>
                    {trade.display} businesses.
                  </span>
                </h1>
                <p className={styles.heroBody}>
                  When someone in {city.name} searches for a {trade.noun}, Google
                  shows a short list. If your business is not on it, you are easy
                  to miss — even if your work is better than the competitors who
                  are showing up.
                </p>
                <p className={styles.heroBody}>
                  I help {trade.display} businesses in {city.name} get into that
                  list and convert more of those searches into calls.
                </p>
                <div className={styles.heroActions}>
                  <Link href={auditUrl} className={styles.primaryBtn}>
                    Run Your Free {trade.display} Audit
                  </Link>
                  <Link href="/contact" className={styles.secondaryBtn}>
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

        {/* LOCAL BRIEF */}
        <section className={`section ${styles.briefSectionWrap}`}>
          <div className={`container ${styles.briefSection}`}>
            <div className={styles.briefShell}>
              <div className={styles.briefLead}>
                <p className={styles.panelLabel}>
                  {city.name} {trade.display} brief
                </p>
                <h2 className={styles.briefTitle}>{city.market}</h2>
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
                  What that means for {trade.display} in {city.name}
                </p>
                <ul className={styles.signalList}>
                  {signals.map((signal) => (
                    <li key={signal} className={styles.signalItem}>
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className={`section ${styles.problemSectionWrap}`}>
          <div className="container">
            <div className={styles.problemEditorial}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>The real problem</p>
                <h2 className={styles.sectionTitle}>
                  Referrals are fine. Until they are not.
                </h2>
              </div>
              <div className={styles.problemCopy}>
                <p className={styles.bodyCopy}>{trade.problemStatement}</p>
                <p className={styles.bodyCopy}>
                  The problem is usually not a lack of {trade.display} demand in{" "}
                  {city.name}. It is weak local visibility. If your Google
                  Business Profile, service pages, and review signals are uneven,
                  a competitor with stronger local signals gets the call first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FIT / FOCUS AREAS */}
        <section className={`section ${styles.fitSectionWrap}`}>
          <div className="container">
            <div className={styles.fitStructured}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>
                  Built for {trade.display} in {city.name}
                </p>
                <h2 className={styles.sectionTitle}>
                  Made for {trade.display} contractors, not generic businesses
                </h2>
                <p className={styles.bodyCopy}>
                  I work with home service trades in Northwest Arkansas,
                  including {trade.display} businesses in {city.name}. The work
                  is centered on visibility that supports calls, not vague
                  reports.
                </p>
              </div>
              <div className={styles.fitGrid}>
                <article className={styles.surfaceCard}>
                  <p className={styles.cardLabel}>Trades I work with</p>
                  <div className={styles.tradeChips}>
                    {["HVAC", "Plumbing", "Electrical", "Roofing", "Landscaping", "Remodeling"].map(
                      (t) => (
                        <span key={t} className={styles.tradeChip}>
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </article>
                <div className={styles.focusGrid}>
                  {trade.focusAreas.map((area) => (
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

        {/* PROCESS */}
        <section className="section">
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
                  I review your visibility in {city.name} search results, your
                  service pages, your Google Business Profile, and who currently
                  holds the top spots for {trade.display}.
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

        {/* PROOF */}
        <section className="section">
          <div className="container">
            <div className={styles.proofEditorial}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionEyebrow}>
                  Why {city.name} {trade.display} visibility matters
                </p>
                <h2 className={styles.sectionTitle}>
                  The search behavior is already there
                </h2>
              </div>
              <div className={styles.proofLead}>
                <p className={styles.proofStatement}>
                  {trade.proofStatement}
                </p>
                <p className={styles.bodyCopy}>
                  {city.name} {trade.noun}s already have customers searching for
                  them. The businesses that look local, credible, and easy to
                  call are the ones that win the first conversation.
                </p>
              </div>
              <div className={styles.proofPanel}>
                <p className={styles.cardLabel}>What the data says</p>
                <ul className={styles.citationList}>
                  <li>
                    88% of consumers who search for a local business on mobile
                    call or visit within 24 hours (Think With Google)
                  </li>
                  <li>
                    51% of consumers use Google Maps for local search (Backlinko)
                  </li>
                  <li>
                    61% of consumers say they are more likely to choose a
                    business that has a website (BrightLocal)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faqSectionWrap}`}>
          <div className={`container ${styles.faqSection}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>FAQ</p>
              <h2 className={styles.sectionTitle}>
                Questions I expect from {city.name} {trade.display} contractors
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

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.sectionEyebrow}>Next step</p>
            <h2 className={styles.ctaTitle}>
              Run your free {city.name} {trade.display} SEO audit
            </h2>
            <p className={styles.bodyCopy}>
              Enter your business name and city. I will run a live audit across
              eight local SEO sections and show you exactly where you stand.
            </p>
            <div className={styles.heroActions}>
              <Link href={auditUrl} className={styles.primaryBtn}>
                Run Your Free {trade.display} Audit
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Start With a Free Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
