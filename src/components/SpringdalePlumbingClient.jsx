"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SpringdalePlumbingClient.module.css";

const FAQS = [
  {
    q: "How long does it take to see Map Pack movement in Springdale?",
    a: "Springdale is a dense, competitive market, often overlapping with Fayetteville searches. For plumbers with a baseline presence, we usually see significant Map Pack movement within 90 days. If you are starting from zero or have a suspended/filtered profile, the timeline is closer to 4-6 months of consistent signal building.",
  },
  {
    q: "Should I focus on 'Plumber Springdale' or 'Plumber near me'?",
    a: "Both, but they require different signals. 'Plumber Springdale' relies heavily on your business address and local citations. 'Plumber near me' is driven by the searcher's proximity and your Google Business Profile strength. I optimize for both to ensure you capture homeowners whether they are in downtown Springdale or the residential outskirts.",
  },
  {
    q: "Do I need a separate website for my Springdale office?",
    a: "Not necessarily. If you have one primary office in Springdale, a single, well-optimized website with a dedicated Springdale service page is usually more powerful than splitting your authority across two sites. We focus on making your Springdale page the local authority for plumbing searches.",
  },
  {
    q: "Why are my competitors outranking me with fewer reviews?",
    a: "Reviews are only one part of the local algorithm. If a competitor has a more complete GBP, better service-area boundary definitions, or service-specific pages on their website (like 'drain cleaning' or 'water heater repair'), Google may see them as more relevant despite a lower review count. We fix those relevance gaps first.",
  },
  {
    q: "Can you help if I serve both Springdale and Fayetteville?",
    a: "Yes. In fact, most plumbers in this corridor have to serve both. The challenge is telling Google exactly where your boundaries are so you don't get filtered out of either market. I specialize in setting up service-area signals that maximize your reach across both cities.",
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
export default function SpringdalePlumbingClient({ auditUrl }) {
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
          <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
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
              Plumbing SEO
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
              Springdale Plumber SEO & Map Pack Optimization
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Springdale is a high-demand plumbing market where visibility is everything. When a pipe
              bursts or a water heater fails, homeowners search for the most credible local pro. 
              If you aren't in the Map Pack, those calls go to your competitors.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              I help Springdale plumbers dominate local search by dialing in the
              exact signals Google looks for in a major NWA market — from GBP
              authority to service-page relevance.
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
                High volume, high competition, higher rewards
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Springdale is one of the most active home service markets in
                Northwest Arkansas. With a mix of older residential
                neighborhoods and rapid new commercial growth, the demand for
                plumbing services is constant and varied.
              </p>
              <p className={styles.bodyCopy}>
                Because Springdale sits between Rogers and Fayetteville, the
                search competition is significantly higher than in outlying
                towns. To win here, your local SEO signals have to be sharper,
                your review velocity faster, and your GBP more complete than the
                average contractor.
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
                Major NWA corridor · Dense residential & commercial mix
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
            The Local Search Challenge for Plumbers in Springdale
          </h2>
          <p className={styles.problemLead}>
            Springdale plumbing businesses face a unique challenge: search
            overlap. Google often mixes Springdale results with Fayetteville or
            Rogers listings. If your local relevance isn't strong enough, Google
            will bypass you for a larger company with a stronger digital
            footprint.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Visibility Gap</span>
            <span className={styles.calloutStat}>70%</span>
            <p className={styles.calloutText}>
              The percentage of clicks that go to the top three Map Pack
              results. If you're on page two, you're essentially invisible to
              Springdale homeowners in a rush.
            </p>
          </div>
          <p className={styles.problemLead}>
            It isn't enough to just have a Google Business Profile. In a market
            this size, you need a profile that is actively managed, service
            pages that capture specific search intent, and a digital reputation
            that outshines the national franchises.
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
              Local SEO Strategy for Springdale Plumbing Contractors
            </h2>
            <p className={styles.servicesLead}>
              I focus on the three pillars that actually drive calls for
              plumbers in high-competition markets.
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
                Your Google Business Profile is your storefront. I optimize
                every detail — from service categories to geo-tagged photos — to
                ensure you're the first choice for homeowners searching in
                Springdale.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Intent-Based Pages</h3>
              <p className={styles.cardBody}>
                Homeowners don't just search for &quot;plumber.&quot; They
                search for &quot;emergency drain cleaning&quot; or &quot;water
                heater installation.&quot; I build pages that capture this
                specific intent and rank for it.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Local Trust Signals</h3>
              <p className={styles.cardBody}>
                Review velocity and citation consistency are the backbone of NWA
                rankings. I help you build a system to earn reviews consistently
                and keep your listings accurate across the web.
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
            How Local SEO Grows Your Springdale Plumbing Business
          </h2>
          <p className={styles.resultsLead}>
            Local SEO transforms how Springdale homeowners find your trucks.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>Before Optimization</span>
              <ul className={styles.contrastList}>
                <li>Buried under national franchises</li>
                <li>Losing calls to Fayetteville competitors</li>
                <li>Sparse reviews from three years ago</li>
                <li>One-page website that nobody finds</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>After Optimization</span>
              <ul className={styles.contrastList}>
                <li>Top 3 Map Pack for key Springdale searches</li>
                <li>Dominating &quot;near me&quot; searches locally</li>
                <li>Fresh review stream building trust</li>
                <li>Service pages that act as 24/7 lead generators</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>Springdale Core</span>
            <span className={styles.footnoteLabel}>
              Focused on capturing the dense NWA corridor
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
              Springdale Plumber SEO — Frequently Asked Questions
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
          <h2 className={styles.ctaTitle}>Get Your Free Springdale Plumber SEO Audit</h2>
          <p className={styles.ctaBody}>
            Ready to see why your competitors are winning the Map Pack? Run the
            free audit and I&apos;ll show you exactly where your plumbing
            business stands in Springdale search results. No signup, no sales
            call required.
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
