"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SiloamElectricalClient.module.css";

const FAQS = [
  {
    q: "Does local SEO really matter for electricians? Most of my work is referrals.",
    a: "Referrals carry electrical work farther than most trades — homeowners are nervous about who they let touch their panel, so they ask around. But the bigger jobs — panel upgrades, EV chargers, generator installs, whole-home rewires — almost always end with a homeowner double-checking online before they pick up the phone. If your reviews are thin or your photos are stale, that second look loses you the job even when you were recommended.",
  },
  {
    q: "How does my license show up in local search?",
    a: "Your Arkansas electrical license is one of the strongest trust signals you can put in front of a homeowner. I make sure it is listed on your GBP, called out on your service pages, and matched across every directory that affects rankings. Most electricians in Siloam Springs leave that field blank or buried — when yours is clearly displayed, the homeowner comparing three Map Pack results picks the one that looks the most legitimate.",
  },
  {
    q: "I work across multiple towns. Can I rank in Gentry, Cave Springs, and Decatur too?",
    a: "Yes — within reason. Your GBP ranks strongest near your physical address, but service-area pages let you target surrounding towns where you regularly take calls. I build a city-by-city page set tied back to your GBP and verified service area, so homeowners in Gentry searching for an electrician find you the same way Siloam Springs homeowners do.",
  },
  {
    q: "Do photos of past work actually move the needle?",
    a: "For electrical, more than almost any other trade. Homeowners cannot evaluate your wiring skill — so they read your reviews and look at your photos. A clean panel install, a neatly run conduit, a finished EV charger — those photos do more for your conversion rate than another paragraph of copy. I help you build a simple cadence for capturing and posting them so your GBP keeps signaling activity to Google and trust to homeowners.",
  },
  {
    q: "Do you work with electricians outside Siloam Springs?",
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
export default function SiloamElectricalClient({ auditUrl }) {
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
            <Link href='/service-areas/siloam-springs-ar'>Siloam Springs</Link>
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
              Siloam Springs, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Siloam Springs Electrician SEO
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Electrical is the one trade homeowners refuse to gamble on. Before
              they let anyone near their panel, they read the reviews, study the
              photos, and check that the license is real. The electrician they
              call is the one who passes that test in the Map Pack.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              If your Google Business Profile looks thin, your reviews are old,
              or your license and photos of finished work aren&apos;t front and
              center, homeowners quietly move on to the next result. I help
              electricians in Siloam Springs build the local search presence
              that earns that trust before the phone ever rings.
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
                What triggers an electrician search in Siloam Springs
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Electrical demand in Siloam Springs is steady, but the calls
                that turn into real work tend to come from a handful of specific
                moments. Each one ends with a homeowner on their phone, looking
                at the same three Map Pack results — and picking the electrician
                who looks the most credible.
              </p>
              <p className={styles.bodyCopy}>
                These are the moments most contractors miss, because the search
                isn&apos;t coming from a referral conversation. It&apos;s coming
                from a homeowner who needs proof, fast, that you&apos;re the
                right call.
              </p>

              <div
                className={styles.scenarioGrid}
                aria-label='Three moments that trigger an electrician search in Siloam Springs'
              >
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 01</span>
                  <span className={styles.scenarioTitle}>
                    Panel & Service Upgrade
                  </span>
                  <p className={styles.scenarioBody}>
                    EV chargers, heat pumps, and additions push older homes past
                    what their panel can handle.
                  </p>
                </div>
                <div className={styles.scenarioTile}>
                  <span className={styles.scenarioTag}>Trigger 02</span>
                  <span className={styles.scenarioTitle}>
                    Storm & Outage Repair
                  </span>
                  <p className={styles.scenarioBody}>
                    Spring storms knock out service entrances and meter bases —
                    and homeowners need it fixed before the power company will
                    reconnect.
                  </p>
                </div>
                <div className={styles.scenarioTile} data-state='primary'>
                  <span className={styles.scenarioTag}>Trigger 03</span>
                  <span className={styles.scenarioTitle}>Safety Red Flags</span>
                  <p className={styles.scenarioBody}>
                    A buzzing breaker, a warm outlet, or flickering lights —
                    homeowners who suspect a hazard search carefully and call
                    the most trusted name.
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
        className={styles.problemSection}
        variants={sectionReveal}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={styles.problemInner}>
          <p className={styles.sectionEyebrow}>The Problem</p>
          <h2 className={styles.problemTitle}>
            The Electrical SEO Problem in Siloam Springs
          </h2>
          <p className={styles.problemLead}>
            Electrical work runs higher in price and higher in stakes than most
            home services. A homeowner deciding who to trust with their panel
            doesn&apos;t pick fast — they read every review, scan every photo,
            and quietly rule out anyone who looks thin. The Map Pack is where
            that vetting happens, and electricians without a complete profile
            get filtered out before the phone even rings.
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Reviews drive trust</span>
            <span className={styles.calloutStat}>97%</span>
            <p className={styles.calloutText}>
              97% of consumers read reviews for local businesses (Local Consumer
              Review Survey, 2026). For higher-ticket electrical work, that
              number effectively rounds to everyone — and what they see decides
              the call.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t a lack of electrical demand in Siloam
            Springs. Panel upgrades, EV chargers, and storm repairs all happen
            here. The problem is whether you look credible the moment a
            homeowner is comparing you to two other names — because a thin GBP,
            a missing license field, and no photos of finished work send them
            straight to a competitor.
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
              Electrician SEO Services in Siloam Springs
            </h2>
            <p className={styles.servicesLead}>
              Three pieces, worked in order. Each one earns a slice of trust on
              its own, but together they decide whether a homeowner picks up the
              phone for you or for the electrician one Map Pack spot above you.
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
                Your GBP is the first thing a homeowner sees, and for electrical
                work it has to do extra work. I audit every field, add service
                entries for panel upgrades, EV charger installation, generators,
                and rewiring, surface your Arkansas license, and build a posting
                cadence that keeps real photos of finished work flowing through
                your profile.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Service Pages</h3>
              <p className={styles.cardBody}>
                Homeowners almost never search &ldquo;electrician.&rdquo; They
                search the job — &ldquo;panel upgrade Siloam Springs,&rdquo;
                &ldquo;EV charger installer near me,&rdquo; &ldquo;generator
                hookup.&rdquo; I build dedicated pages for the services you
                actually offer, each written for the way homeowners in this
                market type the search.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Reviews & Citations</h3>
              <p className={styles.cardBody}>
                For electrical, reviews aren&apos;t just a ranking signal — they
                are the decision. I set up a request process your crew can run
                without thinking, and I make sure your name, address, phone, and
                license number match across every directory homeowners (and
                Google) cross-check before they trust you with the wiring.
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
            What Local SEO Does for Your Electrical Business
          </h2>
          <p className={styles.resultsLead}>
            Same license. Same trucks. Same craftsmanship. A very different
            result when a Siloam Springs homeowner is deciding who to trust with
            their panel.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>
                Without local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>Homeowners quietly rule you out before the call</li>
                <li>License and credentials are buried or missing</li>
                <li>No photos of finished panel or EV charger work</li>
                <li>
                  Higher-ticket jobs go to the most credible Map Pack name
                </li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>
                With local visibility
              </span>
              <ul className={styles.contrastList}>
                <li>
                  Map Pack placement for &quot;panel upgrade&quot; and &quot;EV
                  charger installer&quot;
                </li>
                <li>License front and center, recent reviews stacking up</li>
                <li>Project photos doing the trust work for you</li>
                <li>Calls come in already pre-qualified to hire you</li>
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
              Siloam Springs Electrician SEO — Frequently Asked Questions
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
          <h2 className={styles.ctaTitle}>Free Electrician SEO Assessment</h2>
          <p className={styles.ctaBody}>
            Run the free audit and I will show you exactly where your electrical
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
          <p className={styles.trust}>
            Prefer a call?{" "}
            <a href="tel:+14793808626">(479) 380-8626</a>
          </p>
          <p className={styles.trust}>
            More in Siloam Springs:{" "}
            <Link href="/service-areas/siloam-springs-ar/hvac">HVAC</Link>
            {" · "}
            <Link href="/service-areas/siloam-springs-ar/plumbing">Plumbing</Link>
            {" · "}
            <Link href="/service-areas/siloam-springs-ar/roofing">Roofing</Link>
          </p>
        </div>
      </motion.section>
    </main>
  );
}
