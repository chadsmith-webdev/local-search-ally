"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SpringdaleElectricalClient.module.css";

const FAQS = [
  {
    q: "How long does it take to see results for electrician SEO in Springdale?",
    a: "Springdale is a competitive market for electricians, especially for high-value terms like 'panel upgrades' or 'EV charger installation.' Most contractors I work with start seeing Map Pack movement within 90 days. For new businesses or those needing significant GBP cleanup, a 4-6 month timeline is more realistic for consistent lead flow.",
  },
  {
    q: "Should I focus on 'Electrician Springdale' or service-specific searches?",
    a: "You need both. 'Electrician Springdale' is a broad search for general needs, but specific terms like 'EV charger installer' or 'emergency electrical repair' often capture homeowners who are ready to hire immediately. I optimize for both to ensure you're visible for the full range of Springdale demand.",
  },
  {
    q: "Do I need a physical office in Springdale to rank in the Map Pack?",
    a: "A physical address in Springdale is the strongest signal for the Map Pack. If you are a service-area business (SAB) without a storefront, I can still rank you, but your service-area boundaries and local citations must be perfectly aligned to compete with brick-and-mortar competitors.",
  },
  {
    q: "Why are my competitors outranking me with fewer reviews?",
    a: "Review count is just one signal. If a competitor has a more complete GBP, better service category alignment, or a website with dedicated pages for Springdale-specific services, Google may rank them higher. I focus on fixing those structural gaps so your reviews carry more weight.",
  },
  {
    q: "Can you help me get more commercial electrical leads in Springdale?",
    a: "Yes. Springdale has a massive industrial and commercial sector. By optimizing your GBP for commercial categories and building service pages that speak to property managers and business owners, I can capture high-ticket commercial demand alongside residential calls.",
  },
];

// ── Motion variants ───────────────────────────────────────────────────────────
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/**
 * @param {Object} props
 * @param {string} props.auditUrl
 */
export default function SpringdaleElectricalClient({ auditUrl }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className={styles.main}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden='true' />
        <div className={styles.orb} aria-hidden='true' />
        <svg
          className={styles.heroIcon}
          aria-hidden='true'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13 2 3 14h9l-1 8 10-12h-9l1-8z' />
        </svg>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label='Breadcrumb'>
            <Link href='/service-areas'>Service Areas</Link>
            <span className={styles.breadcrumbSep} aria-hidden='true'>
              ›
            </span>
            <Link href='/service-areas/springdale-ar'>Springdale</Link>
            <span className={styles.breadcrumbSep} aria-hidden='true'>
              ›
            </span>
            <span className={styles.breadcrumbCurrent} aria-current='page'>
              Electrician SEO
            </span>
          </nav>
          <motion.div
            className={styles.heroContent}
            variants={container}
            initial='hidden'
            animate='visible'
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Springdale, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Springdale Electrical SEO: Winning the Map Pack
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Springdale homeowners don&apos;t take chances with electrical
              work. They search for the most credible local pro who shows up
              first. If you aren&apos;t in the Map Pack, you&apos;re missing out on the 
              highest-intent calls in the city.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              I help Springdale electricians build the local search authority 
              that earns trust instantly — from verified license signals to 
              showcasing your best local projects.
            </motion.p>
            <motion.div className={styles.heroActions} variants={fadeUp}>
              <Link
                href={`${auditUrl}?city=Springdale`}
                className={styles.primaryBtn}
              >
                Run Your Free SEO Audit
              </Link>
              <Link href='/contact' className={styles.secondaryBtn}>
                Schedule a Call
              </Link>
            </motion.div>
            <motion.p className={styles.trust} variants={fadeUp}>
              No pitch, no signup — results in about 90 seconds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── The Market ───────────────────────────────────────────────────── */}
      <motion.section
        className={styles.marketSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.marketEditorial}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>The Market</p>
              <h2 className={styles.sectionTitle}>
                A diverse market with deep industrial and residential needs
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Springdale is a powerhouse in Northwest Arkansas, combining a 
                massive residential population with a deep industrial core. 
                For an electrical business, this means a steady stream of 
                residential calls mixed with high-value commercial and 
                industrial opportunities.
              </p>
              <p className={styles.bodyCopy}>
                Because of this density, the competition for the top three 
                spots in Google Maps is fierce. To win, your business needs 
                stronger local signals and more relevant content than the 
                national franchises and Fayetteville competitors.
              </p>

              <div
                className={styles.marketCompare}
                aria-label='NWA market sizes by population'
              >
                <div className={styles.compareTile} data-state='primary'>
                  <span className={styles.compareCity}>Springdale</span>
                  <span className={styles.compareValue}>~87K</span>
                  <span className={styles.compareUnit}>residents</span>
                </div>
                <div className={styles.compareTile}>
                  <span className={styles.compareCity}>Siloam Springs</span>
                  <span className={styles.compareValue}>~17K</span>
                  <span className={styles.compareUnit}>residents</span>
                </div>
                <div className={styles.compareTile}>
                  <span className={styles.compareCity}>Fayetteville</span>
                  <span className={styles.compareValue}>~98K</span>
                  <span className={styles.compareUnit}>residents</span>
                </div>
              </div>
              <p className={styles.compareNote}>
                High-demand hub · Diverse residential & industrial sectors
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Problem ──────────────────────────────────────────────────────── */}
      <motion.section
        className={styles.problemSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.problemInner}>
          <p className={styles.sectionEyebrow}>The Problem</p>
          <h2 className={styles.problemTitle}>
            The Electrical SEO Problem in Springdale
          </h2>
          <p className={styles.problemLead}>
            Electrical work is high-stakes. Whether it&apos;s a flickering 
            light or a full panel upgrade, homeowners vet their options 
            thoroughly. They scan reviews, look for licenses, and check 
            project photos. If your digital presence is thin, they move on 
            to the next electrician in the Map Pack.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Decision window</span>
            <span className={styles.calloutStat}>3 results</span>
            <p className={styles.calloutText}>
              Homeowners rarely look past the top three results in Google 
              Maps. If you aren&apos;t there, you&apos;re effectively 
              invisible to the most motivated callers in Springdale.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of demand. Springdale is growing 
            fast. The issue is visibility. Without a fully optimized Google 
            Business Profile and dedicated service pages, you&apos;re losing 
            high-value jobs to competitors who are easier to find.
          </p>
        </div>
      </motion.section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <motion.section
        className={styles.servicesSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.servicesHeader}>
            <p className={styles.sectionEyebrow}>My Approach</p>
            <h2 className={styles.sectionTitle}>
              Electrician SEO services in Springdale
            </h2>
            <p className={styles.servicesLead}>
              I focus on the three pillars that actually drive electrical 
              calls in high-competition markets.
            </p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                01
              </span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>GBP Authority</h3>
              <p className={styles.cardBody}>
                Your GBP is your digital storefront. I optimize your 
                categories, service-area signals, and photo stream to ensure 
                you outrank competitors and capture the Map Pack for 
                Springdale electrical searches.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Specialized Pages</h3>
              <p className={styles.cardBody}>
                I build service-specific pages for panel upgrades, EV charger 
                installs, and emergency repairs. Generic pages don&apos;t 
                rank in Springdale — high-intent, specialized content does.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Local Trust Signals</h3>
              <p className={styles.cardBody}>
                I help you build a review system that builds trust 
                automatically and ensure your business info is consistent 
                across every directory that matters in Northwest Arkansas.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <motion.section
        className={styles.resultsSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.resultsInner}>
          <p className={styles.sectionEyebrow}>What Changes</p>
          <h2 className={styles.resultsTitle}>
            How Electrical SEO Wins More Calls in Springdale
          </h2>
          <p className={styles.resultsLead}>
            Local SEO transforms your business into the first call for 
            Springdale homeowners.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>Before SEO</span>
              <ul className={styles.contrastList}>
                <li>Buried under Fayetteville competitors</li>
                <li>Losing high-value panel upgrade jobs</li>
                <li>Thin profile looks &quot;untrustworthy&quot;</li>
                <li>Relying solely on unpredictable referrals</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>After SEO</span>
              <ul className={styles.contrastList}>
                <li>Top 3 Map Pack for Springdale Electricians</li>
                <li>Dominating EV charger and generator searches</li>
                <li>Fresh reviews and license visibility building trust</li>
                <li>Steady stream of qualified, ready-to-hire leads</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>Springdale Power</span>
            <span className={styles.footnoteLabel}>
              Capturing the industrial and residential core
            </span>
          </p>
        </div>
      </motion.section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <motion.section
        className={styles.faqSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.faqHeader}>
            <p className={styles.sectionEyebrow}>Common Questions</p>
            <h2 className={styles.sectionTitle}>
              Springdale Electrician SEO — Common Questions
            </h2>
          </div>
          <ul className={styles.faqList}>
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <li key={i} className={styles.faqItem}>
                  <button
                    type='button'
                    className={styles.faqTrigger}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className={styles.faqQuestion}>{item.q}</span>
                    <span
                      className={styles.faqChevron}
                      data-open={isOpen}
                      aria-hidden='true'
                    >
                      <svg
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <polyline points='6 9 12 15 18 9' />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        className={styles.faqPanel}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className={styles.faqAnswer}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <motion.section
        className={styles.ctaSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.ctaInner}>
          <p className={styles.sectionEyebrow}>Get Started</p>
          <h2 className={styles.ctaTitle}>Free Springdale Electrician SEO Audit</h2>
          <p className={styles.ctaBody}>
            Ready to stop being invisible in Springdale? Run the free audit 
            and I&apos;ll show you exactly how your electrical business 
            compares to the top three Map Pack results. No signup required.
          </p>
          <div className={styles.ctaActions}>
            <Link
              href={`${auditUrl}?city=Springdale`}
              className={styles.primaryBtn}
            >
              Run Your Free SEO Audit
            </Link>
            <Link href='/contact' className={styles.secondaryBtn}>
              Schedule a Call
            </Link>
          </div>
          <p className={styles.trust}>
            No contracts. No pitch. Results in about 90 seconds.
          </p>
        </div>
      </motion.section>
    </main>
  );
}
