"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SpringdaleHvacClient.module.css";

const FAQS = [
  {
    q: "How long does it take to see results in the Springdale HVAC market?",
    a: "Springdale is one of the most competitive HVAC markets in Northwest Arkansas. If you have an established business with a decent review base, I typically see movement in Map Pack rankings within 90 days. For new businesses or those with flagged profiles, it can take 4 to 6 months of consistent work on GBP signals and local citations to break into the top three.",
  },
  {
    q: "Should I focus on 'HVAC Springdale' or service-specific terms?",
    a: "You need both. 'HVAC Springdale' is high volume but high competition. Often, homeowners search for specific problems like 'AC repair Springdale' or 'furnace installation near me.' I build dedicated service pages for each to ensure you capture the 'ready-to-hire' traffic, not just broad searches.",
  },
  {
    q: "Does local SEO help with commercial HVAC leads in Springdale?",
    a: "Absolutely. Springdale has a massive commercial and industrial base. Facility managers and business owners search for local pros just like homeowners do. By optimizing your GBP categories and adding commercial-specific project photos, I signal to Google that you handle both sectors.",
  },
  {
    q: "What is the biggest mistake Springdale HVAC companies make with their GBP?",
    a: "Poor service-area boundary management. Because Springdale overlaps with Fayetteville and Rogers, many contractors either set their area too small and miss leads, or too large and get filtered out of local results. I dial in your service-area signals to maximize visibility across the core NWA corridor.",
  },
  {
    q: "I'm busy enough with referrals — why do I need SEO?",
    a: "Referrals are great until they aren't. When a homeowner moves to Springdale or their AC fails at 10 PM on a Saturday, they don't wait to ask a neighbor; they search. SEO ensures you're the backup plan for referral clients and the first choice for everyone else.",
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
export default function SpringdaleHvacClient({ auditUrl }) {
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
            <Link href='/service-areas/springdale-ar'>Springdale</Link>
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
              Springdale, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Springdale HVAC SEO: Get Found in the Map Pack
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Springdale homeowners search when they are most uncomfortable.
              Whether the AC is out in July or the furnace is dead in January,
              they need a local pro right now. If you aren&apos;t in the Map
              Pack, you don&apos;t exist in their decision window.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              I help Springdale HVAC contractors win more calls by building the
              local search authority that puts them in front of homeowners and
              business owners at the exact moment they need a technician.
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
                A major market with industrial and residential demand
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Springdale is the heart of the NWA corridor, offering a massive
                residential population mixed with a deep industrial and
                commercial sector. For an HVAC business, that means diverse
                revenue streams — but it also means competing against every
                major player in the region.
              </p>
              <p className={styles.bodyCopy}>
                The contractors winning in Springdale aren&apos;t just lucky.
                They have dialed-in local SEO signals that tell Google they are
                the most relevant option for everything from residential AC
                repair to complex commercial rooftop units.
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
                High-volume market · Diverse residential & industrial demand
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
            The HVAC SEO Problem in Springdale
          </h2>
          <p className={styles.problemLead}>
            Many Springdale HVAC businesses get &quot;filtered&quot; out of
            search results because Google sees them as too close to
            Fayetteville. If your local signals are weak or inconsistent, Google
            defaults to the largest companies in the next town over, even if
            you&apos;re only three blocks from the homeowner.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Decision window</span>
            <span className={styles.calloutStat}>3 results</span>
            <p className={styles.calloutText}>
              Homeowners in an HVAC emergency rarely look past the top three Map
              Pack results. If you aren&apos;t there, you aren&apos;t even in
              the conversation.
            </p>
          </div>
          <p className={styles.problemLead}>
            Winning in Springdale requires more than just a business card. You
            need a Google Business Profile built for high-competition markets,
            service pages that target specific high-value jobs, and a digital
            presence that outshines the Fayetteville franchises.
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
              HVAC SEO Services for Springdale
            </h2>
            <p className={styles.servicesLead}>
              I focus on the three pillars that actually drive service calls in
              competitive NWA markets.
            </p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                01
              </span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>GBP Dominance</h3>
              <p className={styles.cardBody}>
                Your GBP is your most valuable asset. I optimize your
                categories, service-area boundaries, and photo stream to ensure
                you outrank competitors and capture the Map Pack for Springdale
                searches.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>High-Intent Pages</h3>
              <p className={styles.cardBody}>
                I build service-specific pages for AC repair, furnace install,
                and preventative maintenance. Generic pages don&apos;t rank in
                Springdale — high-intent, specialized content does.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>NWA Authority</h3>
              <p className={styles.cardBody}>
                I build your local citations and review systems to signal to
                Google that you are the authoritative local choice for
                Springdale, reducing the risk of being filtered out by Rogers or
                Fayetteville competitors.
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
            How HVAC SEO Wins More Calls in Springdale
          </h2>
          <p className={styles.resultsLead}>
            Local SEO transforms your digital footprint into a lead-generating
            machine.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>Without SEO</span>
              <ul className={styles.contrastList}>
                <li>Buried under Fayetteville competitors</li>
                <li>Losing calls during peak summer heat</li>
                <li>GBP ignored because of thin content</li>
                <li>Referrals are your only source of work</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>With Local SEO</span>
              <ul className={styles.contrastList}>
                <li>Top 3 Map Pack for Springdale HVAC</li>
                <li>Capturing high-value commercial searches</li>
                <li>Fresh review stream building instant trust</li>
                <li>Service pages acting as 24/7 salesmen</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>Springdale Growth</span>
            <span className={styles.footnoteLabel}>
              Capturing the core of the NWA market
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
            <h2 className={styles.sectionTitle}>Springdale HVAC SEO — FAQ</h2>
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
          <h2 className={styles.ctaTitle}>Free Springdale HVAC SEO Audit</h2>
          <p className={styles.ctaBody}>
            Ready to stop losing calls to your competitors? Run the free audit
            and I&apos;ll show you exactly where your HVAC business stands in
            Springdale search results. No strings, no pitch — just the data.
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
