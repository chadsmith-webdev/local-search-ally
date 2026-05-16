"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SiloamHvacClient.module.css";

const FAQS = [
  {
    q: "How quickly do HVAC contractors see results in Siloam Springs?",
    a: "Siloam Springs is a smaller market, which works in your favor. Fewer competing GBPs means less ground to close. Most HVAC contractors start seeing movement in impressions and direction requests within 60 to 90 days of consistent work — GBP signals, service pages, and citations. Organic rankings tend to follow after that.",
  },
  {
    q: "My business is seasonal. Does that change the SEO approach?",
    a: "It changes the timing. Ranking takes weeks to move, so the goal is to build your local presence before the summer peak or winter rush — not during it. If you start in June, you are building for next summer. Starting in late winter or early spring sets you up for the season when it matters most.",
  },
  {
    q: "Most of my work still comes from referrals. Do I actually need this?",
    a: "Referrals work well until they don't — when someone moves to Siloam Springs and doesn't know anyone, when your usual referral source is already booked, or when the AC fails at 9pm and they need someone fast. All of those moments end in a search. The question is whether your name shows up when they do.",
  },
  {
    q: "I claimed my GBP a while ago. Isn't that enough?",
    a: "Claiming it is the starting point. What drives Map Pack rankings is what you do with it — accurate service categories, current photos, regular posts, a steady stream of recent reviews, and business information that matches your website and every directory. A claimed but inactive profile rarely beats one that is actively managed.",
  },
  {
    q: "Do you work with HVAC contractors outside Siloam Springs?",
    a: "Yes — I work with home service trades across Northwest Arkansas, including Rogers, Bentonville, Fayetteville, Springdale, and surrounding communities.",
  },
];

// ── Motion variants ───────────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// LCP h1 — y-only, no opacity fade (protects Largest Contentful Paint)
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
export default function SiloamHvacClient({ auditUrl }) {
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
          <path d='M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618z' />
          <path d='M12 12v.01' />
        </svg>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label='Breadcrumb'>
            <Link href='/service-areas'>Service Areas</Link>
            <span className={styles.breadcrumbSep} aria-hidden='true'>
              ›
            </span>
            <Link href='/service-areas/siloam-springs-ar'>Siloam Springs</Link>
            <span className={styles.breadcrumbSep} aria-hidden='true'>
              ›
            </span>
            <span className={styles.breadcrumbCurrent} aria-current='page'>
              HVAC SEO
            </span>
          </nav>
          <motion.div
            className={styles.heroContent}
            variants={container}
            initial='hidden'
            animate='visible'
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Siloam Springs, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Siloam Springs HVAC SEO
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              When the AC stops working in July, homeowners in Siloam Springs
              don&apos;t ask around — they search. They need someone today, and
              they call whoever looks real and local in the Map Pack.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              If your Google Business Profile is thin, your reviews haven&apos;t
              moved in a year, or you&apos;re not showing up during peak season,
              those calls go to someone else. I help HVAC contractors in Siloam
              Springs build the local search presence that puts them in that
              spot.
            </motion.p>
            <motion.div className={styles.heroActions} variants={fadeUp}>
              <Link
                href={`${auditUrl}?city=Siloam%20Springs`}
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
                Siloam runs on referrals — until it doesn&apos;t
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                HVAC referrals in Siloam Springs are reliable — when a neighbor
                or coworker can vouch for you, the job usually follows. But
                referrals have a gap, and it&apos;s wider than most contractors
                realize.
              </p>
              <p className={styles.bodyCopy}>
                When someone moves here and the AC fails their first summer,
                they don&apos;t know anyone to ask. When it&apos;s 96° and your
                usual guy is slammed, homeowners search. That&apos;s the moment
                local visibility matters — and most HVAC contractors in Siloam
                Springs aren&apos;t there.
              </p>

              <div
                className={styles.scenarioGrid}
                aria-label='Three moments when referrals fail and search takes over'
              >
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Scenario 01</span>
                  <span className={styles.scenarioTitle}>New to Siloam</span>
                  <p className={styles.scenarioBody}>
                    No referral network yet. Google is their first call.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Scenario 02</span>
                  <span className={styles.scenarioTitle}>
                    Usual Guy&apos;s Booked
                  </span>
                  <p className={styles.scenarioBody}>
                    The referral came in — but they need a backup right now.
                  </p>
                </div>
                <div className={styles.scenarioTile} data-state='primary'>
                  <span className={styles.scenarioTag}>Scenario 03</span>
                  <span className={styles.scenarioTitle}>AC Fails in July</span>
                  <p className={styles.scenarioBody}>
                    No time to ask around. They call whoever&apos;s in the Map
                    Pack.
                  </p>
                </div>
              </div>
              <p className={styles.scenarioNote}>
                Three moments referrals don&apos;t deliver · Three moments
                search decides the call
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
            The HVAC SEO Problem in Siloam Springs
          </h2>
          <p className={styles.problemLead}>
            HVAC demand spikes in summer and winter — the exact moments when
            homeowners are most uncomfortable and most ready to call someone
            fast. In those windows, the Map Pack is the decision-maker. Most
            searches end at the top three results, and the contractor who
            isn&apos;t there doesn&apos;t get considered.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Local search intent</span>
            <span className={styles.calloutStat}>46%</span>
            <p className={styles.calloutText}>
              46% of all Google searches have local intent. The people searching
              &ldquo;HVAC near me&rdquo; or &ldquo;AC repair Siloam
              Springs&rdquo; are ready to hire — and the Map Pack gets the call.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of HVAC demand in Siloam Springs. The
            problem is whether you&apos;re visible when that demand peaks. A
            thin GBP, no service pages, and stale reviews means the summer rush
            passes and the calls went to whoever ranked.
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
              HVAC SEO Services in Siloam Springs
            </h2>
            <p className={styles.servicesLead}>
              Three pieces, worked in order. Each one matters on its own, but
              together they decide whether a homeowner finds you or the HVAC
              contractor one search result above you.
            </p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                01
              </span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Google Business Profile</h3>
              <p className={styles.cardBody}>
                Your GBP is what earns the Map Pack placement — and for HVAC,
                the details matter. I audit every field, fix what&apos;s
                incomplete or wrong, add service entries for AC repair, furnace
                installation, and heat pump service, and build a posting cadence
                that keeps your profile active year-round — not just when you
                remember to update it.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Service Pages</h3>
              <p className={styles.cardBody}>
                &ldquo;HVAC near me&rdquo; is broad. Homeowners often search the
                specific job — AC tune-up, mini-split installation, furnace
                replacement. I build individual pages for the services you
                actually offer, each written for the search terms HVAC
                contractors in this market get found for.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Reviews & Citations</h3>
              <p className={styles.cardBody}>
                A steady stream of recent reviews is one of the strongest local
                ranking signals there is. I set up a review request process your
                crew can actually run, and I make sure your business information
                is accurate and consistent across every directory that affects
                your rankings — before peak season, not after it.
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
            What Local SEO Does for Your HVAC Business
          </h2>
          <p className={styles.resultsLead}>
            Same business. Same trucks. Different result when someone in Siloam
            Springs searches for HVAC help.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>
                Without local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>Summer rush passed — calls went to ranked contractors</li>
                <li>Stale reviews signal an inactive profile</li>
                <li>No pages for AC repair or furnace work</li>
                <li>New residents search right past you</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>
                With local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Map Pack placement for &quot;HVAC near me&quot; and &quot;AC
                  repair Siloam Springs&quot;
                </li>
                <li>
                  Active profile with seasonal posts earns trust before they
                  dial
                </li>
                <li>Service pages ranking for the work you want</li>
                <li>Positioned before demand peaks, not scrambling after</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>60–90 days</span>
            <span className={styles.footnoteLabel}>
              Typical timeline to visible movement
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
              Siloam Springs HVAC SEO — Frequently Asked Questions
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
          <h2 className={styles.ctaTitle}>Free HVAC SEO Assessment</h2>
          <p className={styles.ctaBody}>
            Run the free audit and I will show you exactly where your HVAC
            business stands in Siloam Springs search results — your GBP
            completeness, review profile, citation health, and where your
            closest competitors are outranking you. No signup, no sales call
            required to see the results.
          </p>
          <div className={styles.ctaActions}>
            <Link
              href={`${auditUrl}?city=Siloam%20Springs`}
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
