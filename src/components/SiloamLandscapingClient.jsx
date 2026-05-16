"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SiloamLandscapingClient.module.css";

const FAQS = [
  {
    q: "I'm a one-truck crew. How do I compete with the big commercial outfits on Google?",
    a: "Big crews win on commercial accounts. You win on residential — and Google ranks residential search locally, not by company size. A clean GBP, a steady stream of recent yard photos from Siloam Springs neighborhoods, and 30+ reviews from homeowners on your route will outrank a regional company with a generic profile every single time. Size doesn't decide who shows up in the Map Pack. Local relevance does.",
  },
  {
    q: "What happens to my SEO during the off-season?",
    a: "November through February is when most landscapers go quiet on Google — which is exactly the wrong move. Homeowners book spring cleanups in late winter, and the crew that's been posting photos, collecting reviews, and updating service pages through the off-season is the one they call in March. I structure the year so December and January build the foundation that gets you booked solid by April.",
  },
  {
    q: "Should I list every service on Google or focus on a few?",
    a: 'List the services you actually want more of. Google rewards specificity — a profile that says "weekly lawn care, mulch installation, and shrub trimming" with photos of each will rank better for those searches than a profile that lists 22 services with no proof behind any of them. Pick the four or five jobs that pay best and build everything — GBP categories, service pages, photos, reviews — around earning more of those.',
  },
  {
    q: "Can I rank for surrounding neighborhoods and nearby towns?",
    a: "Yes. Landscaping has a strong neighborhood effect — once you're mowing two yards on a street, you're already the visible local choice for the rest of the block. I build service-area pages for the surrounding communities you actually run routes in, so homeowners in Gentry, Cave Springs, and Decatur searching for a landscaper find you the same way Siloam Springs homeowners do.",
  },
  {
    q: "Do you work with landscapers outside Siloam Springs?",
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
export default function SiloamLandscapingClient({ auditUrl }) {
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
            <Link href='/service-areas/siloam-springs-ar'>Siloam Springs</Link>
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
              Siloam Springs, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Siloam Springs Landscaping SEO
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Landscaping is a visual business sold on a screen. Homeowners
              don&apos;t hire from a brochure — they scroll your photos, read
              what the neighbors said, and quietly compare your yards to the
              other three crews running on the same block.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              If your Google Business Profile has four blurry photos from two
              summers ago, no recent reviews, and no clear list of what you
              actually do, homeowners scroll past you to the crew that looks
              like they showed up this week. I help landscapers in Siloam
              Springs build the local search presence that turns one yard on a
              street into three.
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
                What triggers a landscaping search in Siloam Springs
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Landscaping demand in Siloam Springs runs on a calendar, not a
                crisis. The search volume curve is predictable — it climbs in
                February, peaks in May, holds through October, and goes quiet
                for the winter. The crews that ride that curve plan for it. The
                crews that don&apos;t scramble every spring trying to fill a
                route.
              </p>
              <p className={styles.bodyCopy}>
                These are the three moments that drive nearly every landscaping
                search in town — each one ends with a homeowner judging a
                handful of profiles on their phone before they pick up to call.
              </p>

              <div
                className={styles.scenarioGrid}
                aria-label='Three moments that trigger a landscaping search in Siloam Springs'
              >
                <div className={styles.scenarioTile} data-state='primary'>
                  <span className={styles.scenarioTag}>Trigger 01</span>
                  <span className={styles.scenarioTitle}>
                    Spring Season Opener
                  </span>
                  <p className={styles.scenarioBody}>
                    Late February through April — homeowners line up cleanup,
                    mulch, and a weekly mowing crew before the grass takes off.
                    Whoever ranks now keeps the slot all season.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 02</span>
                  <span className={styles.scenarioTitle}>Crew Replacement</span>
                  <p className={styles.scenarioBody}>
                    Mid-season frustration with the current landscaper — missed
                    weeks, sloppy edging, no callbacks. The homeowner pulls up
                    Google with a specific complaint in mind.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 03</span>
                  <span className={styles.scenarioTitle}>
                    Project & Design Work
                  </span>
                  <p className={styles.scenarioBody}>
                    New beds, sod, tree work, a full backyard rework — a
                    one-time project the homeowner needs to feel sure about
                    before signing the estimate.
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
            The Landscaping SEO Problem in Siloam Springs
          </h2>
          <p className={styles.problemLead}>
            Landscaping is one of the most visible trades in town — your work
            sits in the front yard, in plain view of every neighbor on the
            street. Which is exactly the problem. Homeowners can see who&apos;s
            already mowing on their block, and when they finally search for a
            crew, they expect Google to confirm what they&apos;ve been watching
            all season.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Search frequency</span>
            <span className={styles.calloutStat}>80% weekly</span>
            <p className={styles.calloutText}>
              80% of US consumers search online for local businesses on a weekly
              basis, and 32% search daily (SOCi Consumer Behavior Index, 2024).
              Landscaping isn&apos;t an emergency call — it&apos;s a recurring,
              compared-and-considered decision, and the neighbors are looking
              long before they ever wave you down at the curb.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of landscaping demand in Siloam
            Springs. Yards grow. Beds need refreshed. Trees need trimmed. The
            problem is whether the homeowner finds you on Google — with photos
            and reviews that match what they&apos;ve already seen on the street
            — the moment they decide to make the call.
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
              Landscaping SEO Services in Siloam Springs
            </h2>
            <p className={styles.servicesLead}>
              Three pieces, worked in order. Each one earns a slice of trust on
              its own, but together they turn one yard on a street into three —
              and keep the route full from March through October.
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
                Your GBP is the first thing a homeowner sees when they pull up
                Google with mud on their boots. I audit every field, set the
                right primary and secondary service categories, build a posting
                cadence around your real route, and make sure new yard photos
                are flowing through your profile weekly during the season — not
                a static gallery from two summers ago.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Service Pages</h3>
              <p className={styles.cardBody}>
                Homeowners rarely search &ldquo;landscaper.&rdquo; They search
                the job — &ldquo;weekly lawn mowing Siloam Springs,&rdquo;
                &ldquo;mulch installation cost,&rdquo; &ldquo;shrub trimming
                near me,&rdquo; &ldquo;sod replacement.&rdquo; I build dedicated
                pages for the work you actually want more of, written the way
                homeowners in this market type the search.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Reviews & Citations</h3>
              <p className={styles.cardBody}>
                For landscaping, reviews are the neighborhood telephone game
                played at scale. I set up a request process your crew can run
                after recurring service visits, not just one-off projects, and I
                make sure your name, address, and phone match across every
                directory homeowners cross-check before they trust a crew with a
                weekly slot on the calendar.
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
            What Local SEO Does for Your Landscaping Business
          </h2>
          <p className={styles.resultsLead}>
            Same truck. Same crew. Same edging discipline. A very different
            result when a Siloam Springs homeowner is deciding who picks up
            their yard for the season.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>
                Without local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Spring slots filled by the first crew on Google, not you
                </li>
                <li>Old, blurry photos with no recent project shots</li>
                <li>Reviews trickle in once a year, mostly from family</li>
                <li>Routes built one referral at a time, never compounded</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>
                With local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Map Pack placement for &quot;lawn care&quot; and
                  &quot;landscaping near me&quot; queries
                </li>
                <li>Fresh weekly photos from real Siloam Springs yards</li>
                <li>30+ active reviews from homeowners on your routes</li>
                <li>Three yards on a street instead of one</li>
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
        <div className={styles.sectionContainer}>
          <div className={styles.faqHeader}>
            <p className={styles.sectionEyebrow}>Common Questions</p>
            <h2 className={styles.sectionTitle}>
              Siloam Springs Landscaping SEO — Frequently Asked Questions
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
          <h2 className={styles.ctaTitle}>Free Landscaping SEO Assessment</h2>
          <p className={styles.ctaBody}>
            Run the free audit and I will show you exactly where your
            landscaping business stands in Siloam Springs search results — your
            GBP completeness, review profile, citation health, and where the
            other crews on your routes are outranking you. No signup, no sales
            call required to see the results.
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
