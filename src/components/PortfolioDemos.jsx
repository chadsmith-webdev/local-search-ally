"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./PortfolioDemos.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DEMOS = [
  {
    trade: "Plumbing",
    name: "NWA Plumbing Co.",
    slug: "plumbing",
    description:
      "Built for the two moments that drive plumbing calls: emergencies and scheduled maintenance. Optimized for searches like \u201cplumber near me,\u201d \u201cemergency plumber Bentonville,\u201d and \u201cwater heater replacement Rogers.\u201d",
    features: [
      "Click-to-call above the fold on every page",
      "Dedicated service area pages for Rogers, Bentonville, Fayetteville, and Springdale",
      "Emergency service page structured for high-intent, middle-of-the-night searches",
      "Google Business Profile integration with review prompts",
    ],
    url: null,
    accent: "#7bafd4",
    icon: (
      <svg
        viewBox='0 0 48 48'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M16 8h4a4 4 0 0 1 4 4v4H16V8Z' />
        <path d='M20 16v20' />
        <path d='M16 32h8' />
        <path d='M20 36v4' />
        <path d='M28 20c4 0 8 2 8 6s-4 6-8 6' />
        <circle cx='36' cy='26' r='2' />
      </svg>
    ),
  },
  {
    trade: "HVAC",
    name: "Ozark Air & Heat",
    slug: "hvac",
    description:
      "HVAC is seasonal. This site is built to capture demand before the panic sets in \u2014 spring tune-ups before temperatures spike, fall checkups before the first cold week. Clear booking paths so a homeowner doesn\u2019t have to hunt for a phone number.",
    features: [
      "Seasonal service pages (cooling season, heating season, annual maintenance)",
      "Financing section \u2014 because a new unit is a $5,000 conversation",
      "Short booking form that works on a phone with one thumb",
      "FAQ pages targeting common HVAC questions people actually Google",
    ],
    url: null,
    accent: "#7bafd4",
    icon: (
      <svg
        viewBox='0 0 48 48'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x='8' y='10' width='32' height='20' rx='3' />
        <path d='M16 30v8' />
        <path d='M32 30v8' />
        <path d='M12 38h24' />
        <path d='M18 20h12' />
        <path d='M24 17v6' />
      </svg>
    ),
  },
  {
    trade: "Electrical",
    name: "NWA Electric",
    slug: "electrical",
    description:
      "Electrical work is high-stakes. Before a homeowner calls any electrician, they\u2019re vetting \u2014 checking reviews, looking for licenses, reading service descriptions. This site earns that trust before the phone rings.",
    features: [
      "Licensing and insurance info in the header \u2014 not buried in an about page",
      "Panel upgrade page built for high-value search traffic",
      "Service descriptions that explain what\u2019s involved, not just what it costs",
      "Project gallery section to show real residential work",
    ],
    url: null,
    accent: "#7bafd4",
    icon: (
      <svg
        viewBox='0 0 48 48'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M26 8l-10 16h10l-4 16 14-20H26L30 8z' />
      </svg>
    ),
  },
  {
    trade: "Roofing",
    name: "Ridge Line Roofing",
    slug: "roofing",
    description:
      "Roofing calls come in two ways: storm damage panic and long-planned replacements. This site handles both \u2014 urgent trust-builders for the homeowner whose ceiling is leaking, and thorough service pages for the one who\u2019s been thinking about it for a year.",
    features: [
      "Storm damage landing page for post-weather search spikes",
      "Insurance claim process page \u2014 answers the question before the call",
      "Financing section for full replacement jobs",
      "Service area pages for Bentonville, Rogers, Fayetteville, and surrounding NWA communities",
    ],
    url: null,
    accent: "#7bafd4",
    icon: (
      <svg
        viewBox='0 0 48 48'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8 24L24 10l16 14' />
        <path d='M14 24v14h20V24' />
        <rect x='19' y='30' width='10' height='8' />
      </svg>
    ),
  },
  {
    trade: "Remodeling",
    name: "Summit Home Remodeling",
    slug: "remodeling",
    description:
      "Remodeling clients spend months researching before they call anyone. This site earns trust over that entire window \u2014 portfolio, process, and pricing transparency \u2014 so when they\u2019re ready, they call you.",
    features: [
      "Project gallery with before/after photos optimized for image search",
      "Service pages for kitchens, bathrooms, additions, and basement finishes",
      "\u201cOur Process\u201d page that answers the questions clients are afraid to ask",
      "Local testimonials and review prompts tied to Google Business Profile",
    ],
    url: null,
    accent: "#7bafd4",
    icon: (
      <svg
        viewBox='0 0 48 48'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x='8' y='8' width='14' height='14' rx='1' />
        <rect x='26' y='8' width='14' height='14' rx='1' />
        <rect x='8' y='26' width='14' height='14' rx='1' />
        <rect x='26' y='26' width='14' height='14' rx='1' />
      </svg>
    ),
  },
  {
    trade: "Landscaping",
    name: "Ozark Outdoor Living",
    slug: "landscaping",
    description:
      "Landscaping is a visual sell. The site leads with imagery, but the structure underneath is built to rank \u2014 service area pages, seasonal content, and a clear path from \u201cI like what I see\u201d to \u201clet me get a quote.\u201d",
    features: [
      "Visual-first layout \u2014 photo-led service pages that load fast on mobile",
      "Seasonal service pages (spring cleanups, fall prep, irrigation winterization)",
      "Quote request form that qualifies leads by project type and zip code",
      "Google Business Profile integration with photo strategy",
    ],
    url: null,
    accent: "#7bafd4",
    icon: (
      <svg
        viewBox='0 0 48 48'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M24 40V28' />
        <path d='M24 28c0-8-8-10-8-10s2 10 8 10Z' />
        <path d='M24 32c0-6 8-8 8-8s-2 8-8 8Z' />
        <path d='M14 40h20' />
      </svg>
    ),
  },
];

function DemoCard({ demo, index }) {
  return (
    <motion.div className={styles.card} variants={fadeUp} custom={index}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap} aria-hidden='true'>
          {demo.icon}
        </div>
        <span className={styles.tradeBadge}>{demo.trade}</span>
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.demoName}>{demo.name}</h2>
        <p className={styles.demoDesc}>{demo.description}</p>

        <ul className={styles.features}>
          {demo.features.map((f) => (
            <li key={f} className={styles.feature}>
              <span className={styles.featureDot} aria-hidden='true' />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.cardFooter}>
        {demo.url ? (
          <Link
            href={demo.url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.demoLink}
          >
            View Demo
            <svg
              viewBox='0 0 16 16'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M3 8h10M9 4l4 4-4 4' />
            </svg>
          </Link>
        ) : (
          <span className={styles.comingSoon}>Demo coming soon</span>
        )}
      </div>
    </motion.div>
  );
}

export default function PortfolioDemos() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.grid}
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {DEMOS.map((demo, i) => (
            <DemoCard key={demo.slug} demo={demo} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
