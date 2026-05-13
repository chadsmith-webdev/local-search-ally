"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./CityPageClient.module.css";

// ── Motion variants (mirror homepage HeroSection patterns) ────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// LCP h1 — y-only, no opacity fade (protects Largest Contentful Paint)
const fadeUpNoOpacity = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// All other hero children — y-only so SSR/no-JS still renders content
const fadeUp = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Scroll-triggered sections — y-only so SSR/no-JS still renders content
const sectionReveal = {
  hidden: { y: 24 },
  visible: { y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const tradeSpokes = [
  {
    slug: "hvac",
    label: "HVAC",
    hint: "Heating, cooling, and seasonal search spikes",
  },
  {
    slug: "plumbing",
    label: "Plumbing",
    hint: "Emergency and maintenance search visibility",
  },
  {
    slug: "electrical",
    label: "Electrical",
    hint: "Panel upgrades, repairs, and high-trust jobs",
  },
  {
    slug: "roofing",
    label: "Roofing",
    hint: "Storm surge and replacement search capture",
  },
  {
    slug: "landscaping",
    label: "Landscaping",
    hint: "Seasonal demand and repeat-service visibility",
  },
  {
    slug: "remodeling",
    label: "Remodeling",
    hint: "High-consideration projects and trust signals",
  },
];

/**
 * @param {Object} props
 * @param {string} props.city
 * @param {string} props.slug         - URL slug, e.g. "rogers-ar"
 * @param {string} props.heroAccent
 * @param {string} props.heroBody1
 * @param {string} props.heroBody2
 * @param {string} props.briefLabel
 * @param {string} props.briefTitle
 * @param {string} props.briefBody
 * @param {string} props.signalsLabel
 * @param {string[]} props.signals
 * @param {string} props.problemBody1
 * @param {string} props.problemBody2
 * @param {string} props.fitEyebrow
 * @param {string[]} props.tradeList
 * @param {Array<{title:string,body:string}>} props.focusAreas
 * @param {string} props.auditEyebrow
 * @param {string} props.auditTitle
 * @param {string} props.auditStatement
 * @param {string} props.auditBody
 * @param {string[]} props.citationStats
 * @param {string} props.faqTitle
 * @param {Array<{question:string,answer:string}>} props.faqItems
 * @param {string} props.processAuditBody
 * @param {string} props.spokesEyebrow
 * @param {string} props.spokesTitle
 * @param {string} props.auditUrl     - NEXT_PUBLIC_AUDIT_URL from server
 */
export default function CityPageClient({
  city,
  slug,
  heroAccent,
  heroBody1,
  heroBody2,
  briefLabel,
  briefTitle,
  briefBody,
  signalsLabel,
  signals,
  problemBody1,
  problemBody2,
  fitEyebrow,
  tradeList,
  focusAreas,
  auditEyebrow,
  auditTitle,
  auditStatement,
  auditBody,
  citationStats,
  faqTitle,
  faqItems,
  processAuditBody,
  spokesEyebrow,
  spokesTitle,
  auditUrl,
}) {
  return (
    <main className={styles.main}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden='true' />
        <div className={styles.orb} aria-hidden='true' />
        <div className={styles.heroInner}>
          <div className={styles.heroScene}>
            <motion.div
              className={styles.heroContent}
              variants={container}
              initial='hidden'
              animate='visible'
            >
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                {city}, Arkansas
              </motion.span>
              <motion.h1
                className={styles.heroTitle}
                variants={fadeUpNoOpacity}
              >
                Local SEO for {city}
                <span className={styles.heroAccent}> {heroAccent}</span>
              </motion.h1>
              <motion.p className={styles.heroBody} variants={fadeUp}>
                {heroBody1}
              </motion.p>
              <motion.p className={styles.heroBody} variants={fadeUp}>
                {heroBody2}
              </motion.p>
              <motion.div className={styles.heroActions} variants={fadeUp}>
                <Link
                  href={`${auditUrl}?city=${encodeURIComponent(city)}`}
                  className={styles.primaryBtn}
                >
                  Run Your Free Audit
                </Link>
                <Link href='/contact' className={styles.secondaryBtn}>
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

      {/* ── City brief ───────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.briefSectionWrap}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={`container ${styles.briefSection}`}>
          <div className={styles.briefShell}>
            <div className={styles.briefLead}>
              <p className={styles.panelLabel}>{briefLabel}</p>
              <h2 className={styles.briefTitle}>{briefTitle}</h2>
              <p className={styles.panelCopy}>{briefBody}</p>
              <div className={styles.briefStat}>
                <span className={styles.panelNumber}>3</span>
                <p className={styles.panelCopy}>
                  Google&apos;s Map Pack shows three businesses per search. If
                  you are not in that group, you are easy to miss.
                </p>
              </div>
            </div>

            <div className={styles.briefSignals}>
              <p className={styles.cardLabel}>{signalsLabel}</p>
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
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div className={styles.problemEditorial}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>The real problem</p>
              <h2 className={styles.sectionTitle}>
                Referrals are fine. Until they are not.
              </h2>
            </div>
            <div className={styles.problemCopy}>
              <p className={styles.bodyCopy}>{problemBody1}</p>
              <p className={styles.bodyCopy}>{problemBody2}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Fit / trades ─────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.fitSectionWrap}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div className={styles.fitStructured}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>{fitEyebrow}</p>
              <h2 className={styles.sectionTitle}>
                Made for home service trades, not generic businesses
              </h2>
              <p className={styles.bodyCopy}>
                I work with home service trades in Northwest Arkansas, including{" "}
                {city}. The work is centered on visibility that supports calls,
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
        </div>
      </motion.section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <motion.section
        className='section'
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
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
              <p className={styles.bodyCopy}>{processAuditBody}</p>
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
        className='section'
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div className={styles.proofEditorial}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>{auditEyebrow}</p>
              <h2 className={styles.sectionTitle}>{auditTitle}</h2>
            </div>

            <div className={styles.proofLead}>
              <p className={styles.proofStatement}>{auditStatement}</p>
              <p className={styles.bodyCopy}>{auditBody}</p>
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
      </motion.section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.faqSectionWrap}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={`container ${styles.faqSection}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 className={styles.sectionTitle}>{faqTitle}</h2>
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

      {/* ── Trade spokes ─────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.spokeSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div
            className={styles.sectionIntro}
            style={{ marginBottom: "1.35rem" }}
          >
            <p className={styles.sectionEyebrow}>{spokesEyebrow}</p>
            <h2 className={styles.sectionTitle}>{spokesTitle}</h2>
            <p className={styles.bodyCopy}>
              Each trade has different search patterns, urgency levels, and
              competitive dynamics. Pick yours for a more specific look at what
              local SEO means for your business in {city}.
            </p>
          </div>
          <div className={styles.spokeGrid}>
            {tradeSpokes.map((spoke) => (
              <Link
                key={spoke.slug}
                href={`/service-areas/${slug}/${spoke.slug}`}
                className={styles.spokeCard}
              >
                <span className={styles.spokeTrade}>{spoke.label}</span>
                <span className={styles.spokeHint}>{spoke.hint}</span>
                <span className={styles.spokeArrow}>
                  See {city} {spoke.label} SEO →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.sectionEyebrow}>Next step</p>
          <h2 className={styles.ctaTitle}>Run your free {city} SEO audit</h2>
          <p className={styles.bodyCopy}>
            Enter your business name and city. I will run a live audit across
            eight local SEO sections and show you exactly where you stand.
          </p>
          <div className={styles.heroActions}>
            <Link
              href={`${auditUrl}?city=${encodeURIComponent(city)}`}
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
  );
}
