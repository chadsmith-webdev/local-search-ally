"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SiloamRoofingClient.module.css";

const FAQS = [
  {
    q: "Storm chasers flood Siloam Springs after every hail event. How do I compete?",
    a: "You compete by looking unmistakably local before the storm hits. Out-of-state crews can knock on doors, but they can't show three years of Siloam Springs reviews, a verified GBP with a local address, photos of roofs they've replaced in town, and a license that matches Arkansas records. When a homeowner pulls up Google after a storm, those signals are the difference between the call going to you or to a truck with an out-of-state plate.",
  },
  {
    q: "Do I really need a website if my Google Business Profile is good?",
    a: "For roofing, yes — because the ticket is too big for a homeowner to call without checking. They tap your GBP, then they tap your website. If the site loads slow, looks dated, or has no photos of finished roofs, you lose them right there. Your GBP gets you in the consideration set; your website is where you actually win the job.",
  },
  {
    q: "How does insurance work into local SEO for roofers?",
    a: 'After a hail storm, half the searches in Siloam Springs are some version of "roof insurance claim" or "hail damage inspection." If your service pages and GBP don\'t speak that language clearly — what you cover, how you work with adjusters, what an inspection looks like — homeowners scroll past you to the roofer who answers the question already in their head. The work doesn\'t change. The way you describe it on Google does.',
  },
  {
    q: "I work all over Northwest Arkansas. Can I rank in surrounding towns too?",
    a: "Yes — within reason. Your GBP ranks strongest near your physical address, but service-area pages let you target the towns you actually drive to. I build a city-by-city page set tied to your GBP and verified service area so homeowners in Gentry, Cave Springs, or Decatur searching for a roofer find you the same way Siloam Springs homeowners do.",
  },
  {
    q: "Do you work with roofers outside Siloam Springs?",
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
export default function SiloamRoofingClient({ auditUrl }) {
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
          <path d='M3 12 12 4l9 8' />
          <path d='M5 10v10h14V10' />
          <path d='M9 20v-6h6v6' />
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
              Roofing SEO
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
              Siloam Springs Roofing SEO
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Roofing is a five-figure decision homeowners refuse to make blind.
              Before they sign a contract — especially after a storm — they
              compare three names on Google, study the photos, read the reviews,
              and quietly rule out anyone who looks out-of-town or
              under-prepared.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              If your Google Business Profile is thin, your reviews are stale,
              or your finished-roof photos aren&apos;t doing the heavy lifting,
              homeowners hand the job to a competitor — sometimes a crew from
              two states away. I help roofers in Siloam Springs build the local
              search presence that earns the call before the storm chasers roll
              into town.
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
        className={`section-sm ${styles.marketSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div className={styles.marketEditorial}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>The Market</p>
              <h2 className={styles.sectionTitle}>
                What triggers a roofing search in Siloam Springs
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Roofing demand in Siloam Springs is bursty, not steady. Most of
                the year the phone is quiet — and then a hail storm rolls
                through, and every homeowner with a damaged shingle is on Google
                at the same time. The roofer who&apos;s already visible gets the
                call. The roofer who has to start optimizing after the storm is
                too late.
              </p>
              <p className={styles.bodyCopy}>
                These are the three moments that drive nearly every roofing
                search in town — each one ends with a homeowner comparing the
                same three names in the Map Pack.
              </p>

              <div
                className={styles.scenarioGrid}
                aria-label='Three moments that trigger a roofing search in Siloam Springs'
              >
                <div className={styles.scenarioTile} data-state='primary'>
                  <span className={styles.scenarioTag}>Trigger 01</span>
                  <span className={styles.scenarioTitle}>
                    Hail & Storm Damage
                  </span>
                  <p className={styles.scenarioBody}>
                    Spring and summer storms drive the largest search surge of
                    the year — homeowners need an inspection and an insurance
                    estimate, fast.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 02</span>
                  <span className={styles.scenarioTitle}>
                    Aging Roof Replacement
                  </span>
                  <p className={styles.scenarioBody}>
                    20-year-old shingles, curling tabs, missing granules — the
                    roof is failing visually and the homeowner finally starts
                    researching.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 03</span>
                  <span className={styles.scenarioTitle}>Active Leak</span>
                  <p className={styles.scenarioBody}>
                    A ceiling stain after a hard rain — the homeowner needs a
                    roofer today, and they call whoever looks most credible on
                    Google.
                  </p>
                </div>
              </div>
              <p className={styles.scenarioNote}>
                Three triggers · Three searches · Three chances to be the one
                they call
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Problem ──────────────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.problemSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.problemInner}>
          <p className={styles.sectionEyebrow}>The Problem</p>
          <h2 className={styles.problemTitle}>
            The Roofing SEO Problem in Siloam Springs
          </h2>
          <p className={styles.problemLead}>
            Roofing is one of the highest-ticket decisions a homeowner makes,
            and after a major storm every roofer within 200 miles shows up
            looking for work. Local crews lose jobs they should have won because
            they didn&apos;t look unmistakably local on Google — and the
            homeowner picked the out-of-state truck that did.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Reviews drive trust</span>
            <span className={styles.calloutStat}>97%</span>
            <p className={styles.calloutText}>
              97% of consumers read reviews for local businesses (Local Consumer
              Review Survey, 2026). For a roof replacement, that number
              effectively rounds to everyone — and what they see is what decides
              the call.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of roofing demand in Siloam Springs.
            Storms hit. Roofs age. Leaks happen. The problem is whether you show
            up first — and look more trustworthy than the crew from out of state
            — the moment a homeowner finally opens Google to find someone.
          </p>
        </div>
      </motion.section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <motion.section
        className={`section-sm ${styles.servicesSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div className={styles.servicesHeader}>
            <p className={styles.sectionEyebrow}>My Approach</p>
            <h2 className={styles.sectionTitle}>
              Roofing SEO Services in Siloam Springs
            </h2>
            <p className={styles.servicesLead}>
              Three pieces, worked in order. Each one earns a slice of trust on
              its own, but together they decide whether a homeowner calls you or
              the storm chaser parked in their neighbor&apos;s driveway.
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
                Your GBP is the first thing a homeowner sees after a storm. I
                audit every field, add service entries for full roof
                replacement, repair, hail damage inspection, and insurance claim
                work, surface your Arkansas license, and build a posting cadence
                that keeps real photos of completed roofs flowing through your
                profile.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Service Pages</h3>
              <p className={styles.cardBody}>
                Homeowners almost never search &ldquo;roofer.&rdquo; They search
                the job — &ldquo;hail damage inspection Siloam Springs,&rdquo;
                &ldquo;roof replacement cost,&rdquo; &ldquo;insurance claim
                roofer near me.&rdquo; I build dedicated pages for the jobs you
                actually run, written for the way homeowners in this market type
                the search.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Reviews & Citations</h3>
              <p className={styles.cardBody}>
                For roofing, reviews aren&apos;t just a ranking signal — they
                are how a homeowner decides between you and a crew they&apos;ve
                never heard of. I set up a request process your crew can run
                after every job, and I make sure your name, address, phone, and
                license number match across every directory homeowners (and
                Google) cross-check before they trust you with the roof.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <motion.section
        className={`section ${styles.resultsSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.resultsInner}>
          <p className={styles.sectionEyebrow}>What Changes</p>
          <h2 className={styles.resultsTitle}>
            What Local SEO Does for Your Roofing Business
          </h2>
          <p className={styles.resultsLead}>
            Same license. Same crew. Same workmanship. A very different result
            when a Siloam Springs homeowner is deciding who to trust with a
            five-figure roof.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>
                Without local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>Out-of-state storm chasers win the post-storm Map Pack</li>
                <li>License and insurance details are buried or missing</li>
                <li>No photos of finished Siloam Springs roofs</li>
                <li>Homeowners default to whoever knocked on the door first</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>
                With local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Map Pack placement for &quot;roof replacement&quot; and
                  &quot;hail damage&quot; queries
                </li>
                <li>License front and center, recent reviews stacking up</li>
                <li>Finished-roof photos doing the trust work for you</li>
                <li>Calls come in already pre-qualified and pre-trusting</li>
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
        className={`section ${styles.faqSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='container'>
          <div className={styles.faqHeader}>
            <p className={styles.sectionEyebrow}>Common Questions</p>
            <h2 className={styles.sectionTitle}>
              Siloam Springs Roofing SEO — Frequently Asked Questions
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
        className={`section ${styles.ctaSection}`}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.ctaInner}>
          <p className={styles.sectionEyebrow}>Get Started</p>
          <h2 className={styles.ctaTitle}>Free Roofing SEO Assessment</h2>
          <p className={styles.ctaBody}>
            Run the free audit and I will show you exactly where your roofing
            business stands in Siloam Springs search results — your GBP
            completeness, review profile, citation health, and where your
            closest competitors (including out-of-state storm chasers) are
            outranking you. No signup, no sales call required to see the
            results.
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
