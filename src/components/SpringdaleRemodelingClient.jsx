"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SpringdaleRemodelingClient.module.css";

const FAQS = [
  {
    q: "How long does it take for remodeling SEO to show results in Springdale?",
    a: "Remodeling is a high-consideration market. While we can often see Map Pack movement within 90 days for established businesses, the true lead-generation impact usually takes 4-6 months of consistent signal building. This is because I focus on high-value terms like 'kitchen remodel' and 'home additions' which are more competitive.",
  },
  {
    q: "Can I rank for surrounding neighborhoods like Tontitown or Bethel Heights?",
    a: "Yes. In fact, neighborhood-level authority is a major part of my strategy. I build service-area pages for the specific communities you serve, so homeowners in those areas find you just as easily as those in central Springdale.",
  },
  {
    q: "I mostly work from referrals. Why do I need local SEO?",
    a: "Referrals are how your name gets out there, but Google is where the vetting happens. Nearly every referral in Springdale will look you up online before booking a consultation. If your reviews are thin or your project photos are missing, you lose those referrals to competitors who look more established online. I help you protect those referrals.",
  },
  {
    q: "Do photos of my remodeling projects really help with ranking?",
    a: "Absolutely. For remodeling, photos are one of your strongest trust signals. I help you build a system to capture and post high-quality project shots that prove your craftsmanship to homeowners and signal your local activity to Google through geo-tagged metadata.",
  },
  {
    q: "Why are my competitors outranking me for 'kitchen remodel' searches?",
    a: "Competition for 'kitchen remodel' in Springdale is high. If a competitor has more detailed service pages, a more active Google Business Profile, or a stronger set of local reviews, Google will rank them higher. I focus on closing those authority gaps to put you back in the top three.",
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
export default function SpringdaleRemodelingClient({ auditUrl }) {
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
          <path d='M3 21h18' />
          <path d='M5 21V8l7-5 7 5v13' />
          <path d='M10 21v-6h4v6' />
          <path d='M9 11h6' />
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
              Remodeling SEO
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
              Springdale Remodeling SEO: Winning High-Value Projects
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Remodeling is a high-consideration trade. Homeowners don&apos;t 
              hire the first name they see — they vet your portfolio, study 
              your reviews, and look for proof that you can handle a major 
              transformation. If you aren&apos;t in the Map Pack, you&apos;re losing 
              the best projects in town.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              I help Springdale remodelers build the local search authority 
              that earns trust instantly, turning searchers into high-value 
              consultations through better visibility and proof.
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
                A growing market for home transformation in Springdale
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Springdale is at the heart of the NWA home improvement boom. 
                With thousands of older homes being updated and a massive influx 
                of new residents looking to personalize their spaces, the 
                demand for high-end remodeling has never been higher.
              </p>
              <p className={styles.bodyCopy}>
                But because these are high-ticket jobs, the research phase is 
                long. The contractors winning in Springdale aren&apos;t just 
                lucky; they are the ones who appear most authoritative and 
                trustworthy the moment a homeowner begins their search.
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
                High-ticket hub · Rapid residential modernization
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
            The Remodeling SEO Problem in Springdale
          </h2>
          <p className={styles.problemLead}>
            Remodeling is a high-ticket, high-consideration trade. Homeowners 
            in Springdale don&apos;t just call the first name they see — they 
            vet your portfolio, study your reviews, and look for proof that 
            you can handle a major transformation. If your digital authority 
            doesn&apos;t match your craftsmanship, you&apos;re filtered out 
            before they ever see your work.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Reputation Impact</span>
            <span className={styles.calloutStat}>60%</span>
            <p className={styles.calloutText}>
              60% of consumers say a business&apos;s website quality affects 
              their perception (BrightLocal). For high-end remodeling, your 
              website is the first &quot;room&quot; a client enters — if it 
              looks unfinished, they assume your projects are too.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of demand. Springdale is growing 
            fast. The issue is visibility. Without an optimized Google 
            Business Profile and dedicated service pages that showcase your 
            finished projects, you&apos;re losing high-value jobs to 
            competitors who are easier to find and trust online.
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
              Remodeling SEO services in Springdale
            </h2>
            <p className={styles.servicesLead}>
              I focus on the specific trust signals that drive high-ticket 
              remodeling leads in the Springdale market.
            </p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                01
              </span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>GBP Portfolio</h3>
              <p className={styles.cardBody}>
                I transform your Google Business Profile into a visual 
                portfolio. By optimizing categories and building a cadence 
                of high-quality project photos, I ensure you&apos;re the first 
                choice for homeowners comparing remodelers in Springdale.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Project Pages</h3>
              <p className={styles.cardBody}>
                Homeowners search for specific transformations. I build dedicated 
                service pages for kitchen remodels, bathroom renovations, and 
                home additions that capture this intent and showcase your 
                expertise in those areas.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Authority Building</h3>
              <p className={styles.cardBody}>
                I build your local authority through consistent citation 
                management and a review system that encourages detailed, 
                high-trust feedback from your best Springdale clients.
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
            How Remodeling SEO Wins More Jobs in Springdale
          </h2>
          <p className={styles.resultsLead}>
            Local SEO transforms how serious homeowners find and vet your 
            remodeling craftsmanship.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>Before SEO</span>
              <ul className={styles.contrastList}>
                <li>Buried under national franchises</li>
                <li>Losing leads after homeowners vet you online</li>
                <li>Portfolio hidden on personal phones</li>
                <li>Relying on unpredictable word-of-mouth</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>After SEO</span>
              <ul className={styles.contrastList}>
                <li>Top 3 Map Pack for high-value searches</li>
                <li>Website acts as a 24/7 high-end showroom</li>
                <li>Fresh reviews building immediate trust</li>
                <li>Steady stream of pre-sold, qualified leads</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>Springdale Core</span>
            <span className={styles.footnoteLabel}>
              Capturing the NWA home improvement corridor
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
              Springdale Remodeling SEO — Common Questions
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
          <h2 className={styles.ctaTitle}>Free Springdale Remodeling SEO Audit</h2>
          <p className={styles.ctaBody}>
            Ready to see why your competitors are winning the Map Pack? Run the 
            free audit and I&apos;ll show you exactly how your remodeling 
            business compares to the top three results in Springdale.
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
