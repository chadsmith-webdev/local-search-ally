"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CityPageClient.module.css";

// ── Motion variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUpNoOpacity = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/**
 * @param {Object}   props
 * @param {string}   props.cityName       - "Rogers"
 * @param {string}   props.citySlug       - "rogers-ar"
 * @param {string}   props.cityHubPath    - "/service-areas/rogers-ar"
 * @param {string}   props.cityStateAbbr  - "AR"
 * @param {string}   props.tradeDisplay   - "HVAC"
 * @param {string}   props.tradeNoun      - "HVAC contractor"
 * @param {string}   props.tradeMarket    - city.market string
 * @param {string}   props.tradeProblemStatement
 * @param {string}   props.tradeProofStatement
 * @param {Array<{title:string,body:string}>} props.focusAreas
 * @param {string[]} props.signals
 * @param {Array<{question:string,answer:string}>} props.faqItems
 * @param {string}   props.auditUrl       - full URL with city+trade params
 */
export default function TradePageClient({
  cityName,
  citySlug,
  cityHubPath,
  cityStateAbbr,
  tradeDisplay,
  tradeNoun,
  tradeMarket,
  tradeProblemStatement,
  tradeProofStatement,
  focusAreas,
  signals,
  faqItems,
  auditUrl,
}) {
  return (
    <main className={styles.main}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.orb} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroScene}>
            <motion.div
              className={styles.heroContent}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.nav
                className={styles.breadcrumb}
                aria-label="Breadcrumb"
                variants={fadeUp}
              >
                <Link href={cityHubPath} className={styles.breadcrumbLink}>
                  {cityName}, {cityStateAbbr}
                </Link>
                <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
                <span className={styles.breadcrumbCurrent}>{tradeDisplay}</span>
              </motion.nav>

              <motion.span className={styles.eyebrow} variants={fadeUp}>
                {cityName}, {cityStateAbbr} · {tradeDisplay}
              </motion.span>

              <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
                Local SEO for {cityName}{" "}
                <span className={styles.heroAccent}>
                  {tradeDisplay} businesses.
                </span>
              </motion.h1>

              <motion.p className={styles.heroBody} variants={fadeUp}>
                When someone in {cityName} searches for a {tradeNoun}, Google
                shows a short list. If your business is not on it, you are easy
                to miss — even if your work is better than the competitors who
                are showing up.
              </motion.p>

              <motion.p className={styles.heroBody} variants={fadeUp}>
                I help {tradeDisplay} businesses in {cityName} get into that
                list and convert more of those searches into calls.
              </motion.p>

              <motion.div className={styles.heroActions} variants={fadeUp}>
                <Link href={auditUrl} className={styles.primaryBtn}>
                  Run Your Free {tradeDisplay} Audit
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Start With a Free Conversation
                </Link>
              </motion.div>

              <motion.p className={styles.trust} variants={fadeUp}>
                No pitch, no signup — results in about 90 seconds.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Local brief ──────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.briefSectionWrap}`}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={`container ${styles.briefSection}`}>
          <div className={styles.briefShell}>
            <div className={styles.briefLead}>
              <p className={styles.panelLabel}>
                {cityName} {tradeDisplay} brief
              </p>
              <h2 className={styles.briefTitle}>{tradeMarket}</h2>
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
                What that means for {tradeDisplay} in {cityName}
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
      </motion.section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.problemSectionWrap}`}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className={styles.problemEditorial}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>The real problem</p>
              <h2 className={styles.sectionTitle}>
                Referrals are fine. Until they are not.
              </h2>
            </div>
            <div className={styles.problemCopy}>
              <p className={styles.bodyCopy}>{tradeProblemStatement}</p>
              <p className={styles.bodyCopy}>
                The problem is usually not a lack of {tradeDisplay} demand in{" "}
                {cityName}. It is weak local visibility. If your Google Business
                Profile, service pages, and review signals are uneven, a
                competitor with stronger local signals gets the call first.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Fit / focus areas ────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.fitSectionWrap}`}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className={styles.fitStructured}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>
                Built for {tradeDisplay} in {cityName}
              </p>
              <h2 className={styles.sectionTitle}>
                Made for {tradeDisplay} contractors, not generic businesses
              </h2>
              <p className={styles.bodyCopy}>
                I work with home service trades in Northwest Arkansas, including{" "}
                {tradeDisplay} businesses in {cityName}. The work is centered on
                visibility that supports calls, not vague reports.
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
      </motion.section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <motion.section
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
                I review your visibility in {cityName} search results, your
                service pages, your Google Business Profile, and who currently
                holds the top spots for {tradeDisplay}.
              </p>
            </article>
            <article className={styles.processNode}>
              <p className={styles.stepLabel}>Step 02</p>
              <h3 className={styles.stepTitle}>Fix Priority Gaps</h3>
              <p className={styles.bodyCopy}>
                I improve what matters first: local relevance, on-page clarity,
                and lead paths that make calling easy.
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
      </motion.section>

      {/* ── Proof / citations ────────────────────────────────────────── */}
      <motion.section
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className={styles.proofEditorial}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>
                Why {cityName} {tradeDisplay} visibility matters
              </p>
              <h2 className={styles.sectionTitle}>
                The search behavior is already there
              </h2>
            </div>

            <div className={styles.proofLead}>
              <p className={styles.proofStatement}>{tradeProofStatement}</p>
              <p className={styles.bodyCopy}>
                {cityName} {tradeNoun}s already have customers searching for
                them. The businesses that look local, credible, and easy to call
                are the ones that win the first conversation.
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
                  61% of consumers say they are more likely to choose a business
                  that has a website (BrightLocal)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.faqSectionWrap}`}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={`container ${styles.faqSection}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 className={styles.sectionTitle}>
              Questions I expect from {cityName} {tradeDisplay} contractors
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
      </motion.section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.sectionEyebrow}>Next step</p>
          <h2 className={styles.ctaTitle}>
            Run your free {cityName} {tradeDisplay} SEO audit
          </h2>
          <p className={styles.bodyCopy}>
            Enter your business name and city. I will run a live audit across
            eight local SEO sections and show you exactly where you stand.
          </p>
          <div className={styles.heroActions}>
            <Link href={auditUrl} className={styles.primaryBtn}>
              Run Your Free {tradeDisplay} Audit
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Start With a Free Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
