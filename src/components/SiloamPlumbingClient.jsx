"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SiloamPlumbingClient.module.css";

const FAQS = [
  {
    q: "How long does it take to rank in the Siloam Springs Map Pack?",
    a: "Most plumbers I work with start seeing movement in 60 to 90 days. Siloam Springs is a smaller market, which helps — there is less competition to displace than in Rogers or Fayetteville. The first gains usually show up in GBP impressions and direction requests before organic rankings follow.",
  },
  {
    q: "Do I need a website to rank locally?",
    a: "A website helps, but the Map Pack runs on your Google Business Profile. If your GBP is complete and your reviews are current, you can show up in the top three results even with a basic site. That said, service-specific pages on your website strengthen your GBP rankings over time — I look at both together.",
  },
  {
    q: "What makes local SEO different from regular SEO?",
    a: 'Regular SEO targets broad web rankings. Local SEO targets the Map Pack and the local pack results that show up when someone searches "plumber near me" or "plumber Siloam Springs." The ranking signals are different — proximity, GBP completeness, review velocity, and citation consistency matter more than backlinks or domain authority.',
  },
  {
    q: "I already have reviews — do I still need SEO work?",
    a: "Reviews are one signal, not the whole picture. A plumber with 80 reviews but an incomplete GBP, no service pages, and inconsistent business listings will still get outranked by a competitor with fewer reviews who has the rest of it right. Reviews matter — they just work better when everything else is in order.",
  },
  {
    q: "What does working with you actually look like?",
    a: "It starts with the free SEO audit, which shows you exactly where you stand. From there I walk you through what I found and what I would fix first. If it makes sense to work together, we start with the highest-impact gaps. No contracts, no retainer lock-in — you can stop any time.",
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
export default function SiloamPlumbingClient({ auditUrl }) {
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
            <Link href='/service-areas/siloam-springs-ar'>Siloam Springs</Link>
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
              Siloam Springs, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Siloam Springs Plumber SEO
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Most plumbing searches in Siloam Springs happen on a phone,
              usually mid-emergency. Homeowners are not comparing options — they
              are calling the first plumber that looks real and local.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              If your Google Business Profile is thin, your reviews are sparse,
              or you are not showing up in the Map Pack, that call goes to
              whoever is. I help plumbers in Siloam Springs build the local
              search presence that puts them in that spot.
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
                A smaller market with a real opportunity
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Siloam Springs is a smaller market, and that is an advantage for
                a plumber willing to invest in local visibility. Search volume
                is real — homeowners here deal with the same burst pipes, failed
                water heaters, and clogged drains as anywhere else — but fewer
                plumbing businesses have built a strong Google presence.
              </p>
              <p className={styles.bodyCopy}>
                That means the gap between showing up and not showing up is
                easier to close here than in Rogers or Fayetteville, and the
                gains tend to come faster.
              </p>

              <div
                className={styles.marketCompare}
                aria-label='NWA market sizes by population'
              >
                <div className={styles.compareTile} data-state='primary'>
                  <span className={styles.compareCity}>Siloam Springs</span>
                  <span className={styles.compareValue}>~17K</span>
                  <span className={styles.compareUnit}>residents</span>
                </div>
                <div className={styles.compareTile}>
                  <span className={styles.compareCity}>Rogers</span>
                  <span className={styles.compareValue}>~73K</span>
                  <span className={styles.compareUnit}>residents</span>
                </div>
                <div className={styles.compareTile}>
                  <span className={styles.compareCity}>Fayetteville</span>
                  <span className={styles.compareValue}>~98K</span>
                  <span className={styles.compareUnit}>residents</span>
                </div>
              </div>
              <p className={styles.compareNote}>
                Smaller pool of competing GBPs · Lower cost to reach the top
                three
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
            The Plumbing SEO Problem in Siloam Springs
          </h2>
          <p className={styles.problemLead}>
            Plumbing calls are almost always urgent. When a water heater fails
            on a Tuesday night or a drain backs up before a family gathering,
            homeowners are not scrolling through ten options. They search, they
            see three results in the Map Pack, and they call the one that looks
            most trustworthy.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Decision window</span>
            <span className={styles.calloutStat}>8 seconds</span>
            <p className={styles.calloutText}>
              That is about how long a homeowner spends reading reviews, photos,
              and your profile before they tap the phone number. If what they
              see is thin, they move on.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem is rarely a lack of plumbing demand in Siloam Springs.
            The searches are happening. The issue is whether your business is
            visible when they do. A thin GBP, missing service pages, or a
            handful of old reviews means you are invisible to homeowners who are
            ready to hire right now.
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
              Plumber SEO Services in Siloam Springs
            </h2>
            <p className={styles.servicesLead}>
              Three pieces, worked in order. Each one stands on its own, but
              together they decide whether a homeowner finds you or the plumber
              one town over.
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
                Your GBP is the first thing a homeowner sees before they ever
                visit your website. I audit every field, fix what is incomplete,
                add service-specific photos, and build a post cadence that keeps
                your profile active and relevant to Siloam Springs searches.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Service Pages</h3>
              <p className={styles.cardBody}>
                Generic pages do not rank for specific searches. I build
                individual pages for drain cleaning, water heater repair, leak
                detection, and every other service you offer — each one written
                for the search terms plumbers in this market actually get found
                for.
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
                ranking signals there is. I set up a simple review request
                process your crew can actually use, and I make sure your
                business information is consistent across every directory that
                matters.
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
            What Local SEO Does for Your Plumbing Business
          </h2>
          <p className={styles.resultsLead}>
            Same business. Same trucks. Different result when someone in Siloam
            Springs searches for a plumber.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>
                Without local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>Searches happen — calls go to someone else</li>
                <li>Thin GBP gets skipped in eight seconds</li>
                <li>Page-three rankings mean invisible</li>
                <li>Pipeline depends entirely on referrals</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>
                With local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>Map Pack placement for &quot;plumber near me&quot;</li>
                <li>Complete profile earns the click</li>
                <li>Service pages ranking for the work you want</li>
                <li>Phone rings from people ready to hire</li>
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
              Siloam Springs Plumber SEO — Frequently Asked Questions
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
          <h2 className={styles.ctaTitle}>Free Plumber SEO Assessment</h2>
          <p className={styles.ctaBody}>
            Run the free audit and I will show you exactly where your plumbing
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
