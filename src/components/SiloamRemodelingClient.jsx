"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SiloamRemodelingClient.module.css";

const FAQS = [
  {
    q: "Remodeling jobs come from referrals. Do I really need SEO?",
    a: "Referrals are how the homeowner hears your name. Google is where they decide if they actually call. Nearly every remodeling referral in Siloam Springs gets a second-opinion search before the phone rings — your name, your reviews, your project photos. If what they find online doesn't match what their neighbor said about you, the referral leaks. SEO doesn't replace referrals. It protects them.",
  },
  {
    q: "My work is in private homes. I can't post addresses or before-and-afters publicly. How do I show proof?",
    a: "Most of my remodeling clients had the same concern, and it's solvable. Interior project photography rarely shows anything identifying — a finished kitchen, a tiled walk-in shower, a built-in mudroom. The room is the proof, not the address. With written permission, the photos go on your GBP, your service pages, and your reviews. I help you build a release process that protects the homeowner and gives you the visual portfolio Google needs.",
  },
  {
    q: "I do kitchens, baths, additions, and finish carpentry. Should one site cover all of it?",
    a: 'One site, separate pages. Homeowners researching a kitchen remodel don\'t search the same way someone planning a primary suite addition does — and Google knows that. A dedicated page for each major service type, each with its own photos, scope, and FAQ, ranks far better than a single "services" page that lists everything. The homepage anchors your brand. The service pages do the actual ranking work.',
  },
  {
    q: "My typical job is $40k+. Are homeowners really finding contractors that way on Google?",
    a: "Higher the ticket, deeper the research. A homeowner spending $40,000 on a kitchen will spend weeks comparing remodelers — GBP profile, photos, recent reviews, website portfolio, the Houzz profile, the Facebook page. They are not picking based on the first ad. They are vetting. If your online presence holds up against scrutiny, you make the shortlist. If it doesn't, you get cut before the consultation is ever booked.",
  },
  {
    q: "Do you work with remodelers outside Siloam Springs?",
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
export default function SiloamRemodelingClient({ auditUrl }) {
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
            <Link href='/service-areas/siloam-springs-ar'>Siloam Springs</Link>
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
              Siloam Springs, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Siloam Springs Remodeling SEO
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Remodeling is the highest-stakes purchase most homeowners make
              outside of buying the house itself. They don&apos;t pick a
              contractor the way they pick a plumber. They research, they
              compare, they ask the neighbor, then they research again — and
              they keep researching long after the first quote is signed.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              If your Google presence looks thin, dated, or thrown together,
              homeowners spending $40,000 on a kitchen will move on to the
              remodeler whose online presence matches the size of the
              investment. I help remodelers in Siloam Springs build the kind of
              local search footprint a serious homeowner expects before they
              ever pick up the phone.
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
                What triggers a remodeling search in Siloam Springs
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Remodeling demand in Siloam Springs is patient. Nobody calls a
                kitchen contractor on the way home from work the way they call a
                plumber. The decision starts months — sometimes years — before a
                contract gets signed, and the homeowner researches the entire
                time. By the time they reach out, they already have a shortlist.
              </p>
              <p className={styles.bodyCopy}>
                These are the three moments that send a homeowner into the
                deep-research phase — and each one ends with a small group of
                remodelers being quietly compared against one another online.
              </p>

              <div
                className={styles.scenarioGrid}
                aria-label='Three moments that trigger a remodeling search in Siloam Springs'
              >
                <div className={styles.scenarioTile} data-state='primary'>
                  <span className={styles.scenarioTag}>Trigger 01</span>
                  <span className={styles.scenarioTitle}>
                    The Kitchen or Bath
                  </span>
                  <p className={styles.scenarioBody}>
                    Years of staring at a dated kitchen finally tips into
                    action. The homeowner spends a weekend on Pinterest, then
                    starts looking up remodelers nearby — and the comparison
                    begins.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 02</span>
                  <span className={styles.scenarioTitle}>
                    Growing Family Addition
                  </span>
                  <p className={styles.scenarioBody}>
                    A new baby, an aging parent moving in, a home office that
                    became permanent. The house no longer fits the life, and
                    additions or basement finishes go from someday to this year.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 03</span>
                  <span className={styles.scenarioTitle}>
                    Pre-Sale Improvement
                  </span>
                  <p className={styles.scenarioBody}>
                    The homeowner is planning to list within 12 months. A
                    targeted kitchen refresh or primary bath remodel goes from
                    optional to ROI-driven, and the timeline tightens fast.
                  </p>
                </div>
              </div>
              <p className={styles.scenarioNote}>
                Three triggers · Three searches · Three chances to make the
                shortlist
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
            The Remodeling SEO Problem in Siloam Springs
          </h2>
          <p className={styles.problemLead}>
            Remodeling is a trust purchase before it is a craftsmanship
            purchase. The homeowner has to believe — before they ever invite you
            into the house — that you will show up on time, manage the mess,
            communicate when things change, and finish what you started. Long
            before that belief is built in person, it is built online.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Website perception</span>
            <span className={styles.calloutStat}>60%</span>
            <p className={styles.calloutText}>
              60% of consumers say a business&apos;s website quality affects
              their perception of the business (BrightLocal). For a $40,000
              kitchen, the website isn&apos;t a brochure — it&apos;s the
              portfolio, the proof, and the first read on whether your work is
              worth the money you&apos;re asking for it.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t whether homeowners in Siloam Springs are
            remodeling. They are. The problem is whether your online presence —
            your GBP, your project photos, your service pages, your reviews —
            survives the weeks of quiet research that happen before they ever
            reach out for a quote.
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
              Remodeling SEO Services in Siloam Springs
            </h2>
            <p className={styles.servicesLead}>
              Three pieces, worked in order. Each one earns part of the trust a
              homeowner needs to spend tens of thousands of dollars in their own
              house — and together they make sure the comparison stops at your
              name.
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
                Your GBP is the first impression — before the website, before
                the referral callback, before the consultation. I audit every
                field, set the right primary and secondary service categories,
                build a posting cadence for completed projects, and make sure
                the photo gallery shows finished kitchens, baths, and additions
                — not stock shots or jobsite snapshots from three years ago.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Service Pages</h3>
              <p className={styles.cardBody}>
                Homeowners don&apos;t search &ldquo;remodeler.&rdquo; They
                search the job — &ldquo;kitchen remodel cost Siloam
                Springs,&rdquo; &ldquo;bathroom renovation contractor,&rdquo;
                &ldquo;home addition near me.&rdquo; I build dedicated pages for
                each major service, written in the language of homeowners in
                this market, with the scope, photos, and questions a serious
                buyer needs answered before they call.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Reviews & Citations</h3>
              <p className={styles.cardBody}>
                For remodeling, reviews are the deciding factor — homeowners
                read them line by line looking for cleanliness, communication,
                and timeline honesty. I set up a request process tied to project
                milestones, not just final payment, and I make sure your name,
                address, and phone match across every directory serious buyers
                cross-check before they trust a remodeler in their home.
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
            What Local SEO Does for Your Remodeling Business
          </h2>
          <p className={styles.resultsLead}>
            Same crew. Same craftsmanship. Same attention to the finish work
            most homeowners never even notice. A very different conversation
            when a Siloam Springs homeowner is deciding who they trust inside
            their house for the next four months.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>
                Without local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Referrals leak after the homeowner searches your name and
                  finds nothing
                </li>
                <li>
                  Project photos scattered across personal phones, never online
                </li>
                <li>A handful of reviews, most over two years old</li>
                <li>
                  Compared against the same three competitors on every quote
                </li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>
                With local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Map Pack placement for &quot;kitchen remodel&quot; and
                  &quot;bathroom contractor&quot; searches
                </li>
                <li>
                  A real portfolio of finished Siloam Springs project photos
                </li>
                <li>Recent, detailed reviews that read like case studies</li>
                <li>
                  Homeowners arrive at the consultation already pre-sold on you
                </li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>90–120 days</span>
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
              Siloam Springs Remodeling SEO — Frequently Asked Questions
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
          <h2 className={styles.ctaTitle}>Free Remodeling SEO Assessment</h2>
          <p className={styles.ctaBody}>
            Run the free audit and I will show you exactly where your remodeling
            business stands in Siloam Springs search results — your GBP
            completeness, review profile, citation health, and where the other
            contractors in the same trade are outranking you. No signup, no
            sales call required to see the results.
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
