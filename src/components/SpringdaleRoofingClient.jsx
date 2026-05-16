"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SpringdaleRoofingClient.module.css";

const FAQS = [
  {
    q: "Storm chasers flood Springdale after every hail event. How do I compete?",
    a: "You compete by looking unmistakably local before the storm hits. Out-of-state crews can knock on doors, but they can't show years of Springdale-specific reviews, a verified GBP with a local address, and photos of roofs they've actually replaced in town. When a homeowner pulls up Google after a storm, those local signals are the difference between the call going to you or to a truck with an out-of-state plate. I help you build that local shield.",
  },
  {
    q: "Do I really need a website if my Google Business Profile is good?",
    a: "For roofing, yes — because the ticket is too big for a homeowner to call without checking. They tap your GBP, then they tap your website. If the site loads slow, looks dated, or has no photos of finished roofs in the Springdale area, you lose them right there. Your GBP gets you on the shortlist; I make sure your website wins the job.",
  },
  {
    q: "How does insurance work into roofing SEO in Springdale?",
    a: 'After a hail storm, half the searches in Springdale are some version of "roof insurance claim" or "hail damage inspection." If your service pages and GBP don\'t speak that language clearly — what you cover, how you work with adjusters, and what an inspection looks like — homeowners scroll past you. I help you answer those questions on Google before they even ask them.',
  },
  {
    q: "I work all over NWA. Can I rank in surrounding towns too?",
    a: "Yes. Your GBP ranks strongest near your physical Springdale address, but I build service-area pages that target the specific communities you drive to, like Tontitown or Bethel Heights. This ensures homeowners in those areas find you just as easily as those in central Springdale.",
  },
  {
    q: "How many reviews do I need to rank in the Springdale Map Pack?",
    a: "It isn't just about the number; it's about the velocity and the detail. In a competitive market like Springdale, I help you build a system to earn fresh, keyword-rich reviews consistently, which signals to Google that you are the most active and trusted roofer in the city.",
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
export default function SpringdaleRoofingClient({ auditUrl }) {
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
            <Link href='/service-areas/springdale-ar'>Springdale</Link>
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
              Springdale, Arkansas
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUpNoOpacity}>
              Springdale Roofing SEO: Rank Higher in the Map Pack
            </motion.h1>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              Roofing is a high-ticket decision homeowners refuse to make blind. 
              Before they sign a contract — especially after an NWA storm — they 
              compare the top names in the Map Pack, study the photos, and 
              read the reviews. If you aren&apos;t there, you&apos;re losing the 
              consultation before it starts.
            </motion.p>
            <motion.p className={styles.heroBody} variants={fadeUp}>
              I help Springdale roofers build the local search presence that 
              earns the call before the storm chasers roll into town, ensuring 
              your craftsmanship is what homeowners see first.
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
                A high-volume market for storm repair and replacement
              </h2>
            </div>
            <div className={styles.marketCopy}>
              <p className={styles.bodyCopy}>
                Springdale is one of the most active roofing markets in the 
                Northwest Arkansas corridor. With a mix of mature residential 
                neighborhoods needing replacements and rapid new commercial 
                development, the demand for high-quality roofing is consistent 
                but highly competitive.
              </p>
              <p className={styles.bodyCopy}>
                The roofers winning in Springdale are those who look 
                unmistakably established. Homeowners in this area vet 
                contractors heavily, looking for local proof and long-term 
                reliability. If your digital signals are weak, Google defaults 
                to competitors with stronger authority.
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
                Storm-active hub · Dense residential & commercial sectors
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
            The Roofing SEO Problem in Springdale
          </h2>
          <p className={styles.problemLead}>
            Roofing is a high-ticket decision. When a major storm hits, 
            out-of-state crews flood the Map Pack. Local Springdale roofers 
            often lose jobs they should have won because their local search 
            signals weren&apos;t strong enough to differentiate them from the 
            temporary &quot;storm chasers.&quot;
          </p>
          <div className={styles.problemCallout}>
            <span className={styles.calloutLabel}>Search intent</span>
            <span className={styles.calloutStat}>78%</span>
            <p className={styles.calloutText}>
              78% of local mobile searches result in an offline purchase 
              (Safari Digital). For roofing contractors, that mobile search 
              is usually the only thing standing between a storm-damaged roof 
              and a signed contract.
            </p>
          </div>
          <p className={styles.problemLead}>
            The problem isn&apos;t demand. NWA storms are predictable. The 
            problem is whether you are the first local choice homeowners find 
            on Google. Without a fully optimized GBP and specialized storm-repair 
            pages, you&apos;re handing your best leads to out-of-towners.
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
              Roofing SEO services in Springdale
            </h2>
            <p className={styles.servicesLead}>
              I focus on the specific trust signals that drive high-ticket 
              roofing calls in competitive storm-active markets.
            </p>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                01
              </span>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>Local Authority</h3>
              <p className={styles.cardBody}>
                I audit and optimize your Google Business Profile to ensure 
                unmistakable local relevance. From category alignment to 
                geotagging local projects, I make sure you outrank out-of-state 
                competitors in the Springdale Map Pack.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                02
              </span>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>Storm-Ready Pages</h3>
              <p className={styles.cardBody}>
                Homeowners search for solutions, not just trades. I build 
                dedicated service pages for hail damage, insurance claims, 
                and roof replacements that capture high-intent traffic the 
                moment a storm rolls through.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <span className={styles.cardGhost} aria-hidden='true'>
                03
              </span>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>Visual Proof</h3>
              <p className={styles.cardBody}>
                In roofing, photos are your best sales tool. I help you build 
                a project photo strategy that builds instant trust with 
                homeowners and signals to Google that you are actively 
                working in the Springdale area.
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
            How Roofing SEO Wins More Calls in Springdale
          </h2>
          <p className={styles.resultsLead}>
            Local SEO transforms your business from &quot;just another name&quot; 
            to the trusted local choice for roofing.
          </p>

          <div className={styles.contrastGrid}>
            <div className={styles.contrastCol} data-state='before'>
              <span className={styles.contrastLabel}>Before SEO</span>
              <ul className={styles.contrastList}>
                <li>Losing calls to out-of-state crews</li>
                <li>Sparse reviews from two years ago</li>
                <li>Project portfolio hidden on phones</li>
                <li>Referrals are your only source of work</li>
              </ul>
            </div>
            <div className={styles.contrastCol} data-state='after'>
              <span className={styles.contrastLabel}>After SEO</span>
              <ul className={styles.contrastList}>
                <li>Top 3 Map Pack for Springdale searches</li>
                <li>Dominating post-storm search surges</li>
                <li>Fresh review stream building trust</li>
                <li>Steady stream of qualified, pre-sold leads</li>
              </ul>
            </div>
          </div>

          <p className={styles.resultsFootnote}>
            <span className={styles.footnoteValue}>Springdale Guard</span>
            <span className={styles.footnoteLabel}>
              Protecting the local roofing market
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
              Springdale Roofing SEO — Common Questions
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
          <h2 className={styles.ctaTitle}>Free Springdale Roofing SEO Audit</h2>
          <p className={styles.ctaBody}>
            Ready to stop losing roofing leads to out-of-town storm chasers? 
            Run the free audit and I&apos;ll show you exactly where your 
            roofing business stands in Springdale search results.
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
