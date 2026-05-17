"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SpringdaleLandscapingClient.module.css";

const FAQS = [
  {
    q: "How long does it take to see landscaping SEO results in Springdale?",
    a: "Springdale is a dense market with high landscaping demand. For crews with an established route and some reviews, I usually see Map Pack movement within 90 days. If you're just starting or need a full GBP overhaul, expect 4-6 months to build the local authority needed to dominate the top three results.",
  },
  {
    q: "Should I focus on 'Lawn Care Springdale' or 'Landscaping'?",
    a: "Both, but they capture different intent. 'Lawn Care' is often for recurring mowing and maintenance, while 'Landscaping' leans toward projects like mulch, flower beds, or design work. I optimize for both to ensure your routes stay full and your project calendar stays booked.",
  },
  {
    q: "Can I rank for specific neighborhoods in Springdale?",
    a: "Yes. In fact, neighborhood-level relevance is key in Springdale. I build service pages that mention specific areas you serve, and I help you build a photo strategy that proves you're already working in the neighborhoods homeowners are searching from.",
  },
  {
    q: "Do I need to keep doing SEO during the winter?",
    a: "Yes. The winter is when homeowners start planning their spring cleanups and new projects. If I stop your SEO in November, your competitors will spend those four months outranking you by the time the grass starts growing in March. I use the off-season to build the foundation for your busiest spring ever.",
  },
  {
    q: "How do photos affect my landscaping ranking?",
    a: "Photos are everything for landscaping. Google uses the geo-data in your photos to confirm you're actually working in Springdale. I help you build a system to capture and post high-quality project shots that prove your quality to homeowners and your local relevance to Google.",
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
export default function SpringdaleLandscapingClient({ auditUrl }) {
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
          <path d='M12 22V12' />
          <path d='M12 12c0-4 3-7 7-7-1 4-3 7-7 7Z' />
          <path d='M12 14c0-3-2-5-5-5 0 3 2 5 5 5Z' />
          <path d='M5 22h14' />
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
              Landscaping SEO
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
              Springdale Landscaping SEO: Capturing the Map Pack
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Springdale landscaping is built on visibility. Whether a homeowner
              is looking for weekly lawn care or a full backyard rework, they 
              start by comparing the top crews in the Map Pack. If you aren&apos;t 
              there, you&apos;re losing the best yards in town.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              I help Springdale landscapers dominate local search by showcasing 
              real work and building the local authority that turns searchers 
              into long-term clients.
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
                Growing demand in NWA&apos;s most active residential hub
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Springdale is at the center of the Northwest Arkansas housing 
                boom. With thousands of established homes and rapid new 
                residential developments, the demand for high-quality lawn care 
                and landscaping is constant and growing.
              </p>
              <p className={styles.bodyCopy}>
                The landscape companies winning in Springdale aren&apos;t 
                just relying on door hangers. They have optimized digital 
                profiles that capture homeowners at the exact moment they 
                decide to upgrade their curb appeal or hire a new crew.
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
                  <span className={styles.compareCity}>Spring rush</span>
                  <span className={styles.compareValue}>Mar–May</span>
                  <span className={styles.compareUnit}>bulk of bookings in a 10-week window</span>
                </div>
                <div className={styles.compareTile}>
                  <span className={styles.compareCity}>Neighborhoods</span>
                  <span className={styles.compareValue}>Dense</span>
                  <span className={styles.compareUnit}>recurring route demand across the city</span>
                </div>
              </div>
              <p className={styles.compareNote}>
                Residential growth hub · High recurring service demand
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
            The Landscaping SEO Problem in Springdale
          </h2>
          <p className={styles.problemLead}>
            Landscaping is inherently local. Homeowners in Springdale want to 
            know you&apos;re already working in their neighborhood. If your 
            online presence doesn&apos;t reflect your actual route — with 
            recent reviews and local project photos — Google will bypass you 
            for companies with stronger digital footprints.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Visibility gap</span>
            <span className={styles.calloutStat}>Map Pack</span>
            <p className={styles.calloutText}>
              In a crowded market like Springdale, if you aren&apos;t in the 
              top three Map Pack results, you&apos;re missing out on 70% of the 
              calls from homeowners ready to hire for the season.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of yards to mow. It&apos;s a lack 
            of visibility. Without an optimized GBP and specialized service 
            pages, your business is buried under competitors who have 
            sharper local search signals.
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
              Landscaping SEO services in Springdale
            </h2>
            <p className={styles.servicesLead}>
              I focus on the specific signals that drive calls for 
              landscapers in the Northwest Arkansas corridor.
            </p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                01
              </span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>GBP Optimization</h3>
              <p className={styles.cardBody}>
                I audit and optimize your Google Business Profile to ensure 
                you capture the right categories and show up for high-value 
                Springdale searches when it matters most.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Neighborhood Pages</h3>
              <p className={styles.cardBody}>
                I build specialized service pages that capture local intent — 
                from weekly mowing to hardscaping — ensuring you rank in 
                the neighborhoods you actually serve.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Visual Authority</h3>
              <p className={styles.cardBody}>
                I help you build a photo and review strategy that turns 
                your finished projects into your best sales tool, signaling 
                trust to homeowners and relevance to Google.
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
            How Landscaping SEO Wins More Jobs in Springdale
          </h2>
          <p className={styles.resultsLead}>
            Local SEO transforms your route density by making you the 
            undisputed local choice.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>Before SEO</span>
              <ul className={styles.contrastList}>
                <li>Buried on page 2 or 3 of search</li>
                <li>Sparse photos from years ago</li>
                <li>Losing seasonal cleanups to competitors</li>
                <li>Relying on slow-moving referrals</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>After SEO</span>
              <ul className={styles.contrastList}>
                <li>Top 3 Map Pack for Springdale searches</li>
                <li>Recent projects showcasing your quality</li>
                <li>Captured seasonal and project-based calls</li>
                <li>Dense routes built on digital authority</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>Springdale Growth</span>
            <span className={styles.footnoteLabel}>
              Capturing the residential core of NWA
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
              Springdale Landscaping SEO — Common Questions
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
          <h2 className={styles.ctaTitle}>Free Springdale Landscaping SEO Audit</h2>
          <p className={styles.ctaBody}>
            Ready to see why your competitors are winning the Map Pack? Run 
            the free audit and I&apos;ll show you exactly where your 
            landscaping business stands in Springdale search results.
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
          <p className={styles.trust}>
            Prefer a call?{" "}
            <a href="tel:+14793808626">(479) 380-8626</a>
          </p>
          <p className={styles.trust}>
            More in Springdale:{" "}
            <Link href="/service-areas/springdale-ar/roofing">Roofing</Link>
            {" · "}
            <Link href="/service-areas/springdale-ar/remodeling">Remodeling</Link>
            {" · "}
            <Link href="/service-areas/springdale-ar/hvac">HVAC</Link>
          </p>
        </div>
      </motion.section>
    </main>
  );
}
