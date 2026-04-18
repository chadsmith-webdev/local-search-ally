"use client";

import { motion } from "framer-motion";
import styles from "./GhostListing.module.css";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

function StarRating({ filled }) {
  return (
    <span className={styles.stars} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= filled ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </span>
  );
}

function Listing({ number, name, stars, ratingNum, reviewCount, openStatus, openColor, phone, delay }) {
  return (
    <motion.div className={styles.listing} {...fadeUp(delay)}>
      <span className={styles.listingNum}>{number}</span>
      <div className={styles.listingContent}>
        <span className={styles.listingName}>{name}</span>
        <div className={styles.listingRating}>
          <StarRating filled={stars} />
          <span className={styles.ratingNum}>{ratingNum}</span>
          <span className={styles.reviewCount}>({reviewCount})</span>
        </div>
        <div className={styles.listingMeta}>
          <span>HVAC contractor</span>
          <span className={styles.dot}>·</span>
          <span style={{ color: openColor }}>{openStatus}</span>
        </div>
        <div className={styles.listingPhone}>{phone}</div>
      </div>
    </motion.div>
  );
}

function GhostSlot({ delay }) {
  return (
    <motion.div
      className={styles.ghostSlot}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      <span className={styles.listingNumGhost}>3</span>
      <div className={styles.listingContent}>
        <div className={`${styles.skeletonBar} ${styles.skeletonName}`} />
        <div className={`${styles.skeletonBar} ${styles.skeletonRating}`} />
        <div className={`${styles.skeletonBar} ${styles.skeletonMeta}`} />
        <div className={`${styles.skeletonBar} ${styles.skeletonPhone}`} />
        <span className={styles.ghostLabel}>Not in the Map Pack</span>
      </div>
    </motion.div>
  );
}

function NWAMap() {
  return (
    <div className={styles.mapPanel}>
      <svg
        viewBox="0 0 200 320"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <defs>
          <filter id="glPin" x="-80%" y="-80%" width="260%" height="260%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#7bafd4" floodOpacity="0.6" />
          </filter>
          <linearGradient id="mFadeTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="1" />
            <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mFadeBot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111111" stopOpacity="0" />
            <stop offset="100%" stopColor="#111111" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Base */}
        <rect width="200" height="320" fill="#0d1117" />

        {/* Urban corridor — Rogers/Bentonville built zone */}
        <polygon points="56,0 178,0 182,320 52,320" fill="rgba(18,26,42,0.85)" />

        {/* Natural/wooded areas west */}
        <path d="M 0,0 C 18,12 42,6 56,0 L 56,130 C 38,125 18,128 0,130 Z" fill="rgba(10,20,10,0.5)" />
        <path d="M 0,170 C 15,178 38,172 54,174 L 54,320 L 0,320 Z" fill="rgba(10,20,10,0.45)" />

        {/* ── Roads: casings first, surfaces second ── */}

        {/* I-49 — primary N-S interstate */}
        <path d="M 104 0 C 106 80 109 160 112 320" stroke="rgba(0,0,0,0.55)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 104 0 C 106 80 109 160 112 320" stroke="#c8a84b" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* AR-72 E-W — Bentonville (y≈55) */}
        <path d="M 0 55 C 66 53 133 52 200 51" stroke="rgba(0,0,0,0.4)" strokeWidth="4" fill="none" />
        <path d="M 0 55 C 66 53 133 52 200 51" stroke="rgba(205,198,158,0.52)" strokeWidth="2.2" fill="none" />

        {/* US-62 E-W — Rogers (y≈118) */}
        <path d="M 0 118 C 66 116 133 115 200 114" stroke="rgba(0,0,0,0.4)" strokeWidth="4" fill="none" />
        <path d="M 0 118 C 66 116 133 115 200 114" stroke="rgba(205,198,158,0.52)" strokeWidth="2.2" fill="none" />

        {/* AR-264 — connector (y≈178) */}
        <path d="M 44 178 L 200 175" stroke="rgba(255,255,255,0.12)" strokeWidth="1.4" fill="none" />

        {/* AR-412 E-W — Springdale (y≈240) */}
        <path d="M 0 240 L 200 237" stroke="rgba(255,255,255,0.18)" strokeWidth="1.8" fill="none" />

        {/* AR-102 — upper Bentonville (y≈22) */}
        <path d="M 38 22 L 200 19" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" fill="none" />

        {/* US-71B — N-S east (x≈152) */}
        <path d="M 152 0 C 150 80 148 160 146 320" stroke="rgba(205,198,158,0.28)" strokeWidth="2" fill="none" />

        {/* AR-112 — N-S west (x≈62) */}
        <path d="M 62 0 C 65 80 68 160 70 320" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" fill="none" />

        {/* Local streets — very faint */}
        <path d="M 104 51 L 106 118" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7" fill="none" />
        <path d="M 80 0 L 82 55" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" fill="none" />
        <path d="M 136 51 L 134 118" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" fill="none" />
        <path d="M 118 118 C 116 150 114 175 113 240" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7" fill="none" />
        <path d="M 88 118 L 86 178" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" fill="none" />
        <path d="M 168 0 L 166 55" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7" fill="none" />

        {/* I-49 highway shield */}
        <rect x="95" y="278" width="22" height="15" rx="3" fill="#1a3a8a" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" />
        <text x="106" y="289" fill="white" fontSize="7.5" textAnchor="middle" fontFamily="monospace" fontWeight="bold">49</text>

        {/* City labels with pill backgrounds */}
        <rect x="6" y="46" width="56" height="13" rx="2" fill="rgba(13,17,23,0.85)" />
        <text x="34" y="56" fill="rgba(255,255,255,0.75)" fontSize="7.5" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="500">Bentonville</text>

        <rect x="10" y="109" width="40" height="13" rx="2" fill="rgba(13,17,23,0.85)" />
        <text x="30" y="119" fill="rgba(255,255,255,0.75)" fontSize="7.5" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="500">Rogers</text>

        <rect x="4" y="231" width="50" height="12" rx="2" fill="rgba(13,17,23,0.72)" />
        <text x="29" y="240.5" fill="rgba(255,255,255,0.5)" fontSize="7" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif">Springdale</text>

        {/* Pin 2 — NWA Heating & Cooling (I-49 × AR-72, tip at 110,69) */}
        <g filter="url(#glPin)">
          <path d="M 110,69 C 105,61 100,55 100,50 A 10 10 0 0 1 120,50 C 120,55 115,61 110,69 Z" fill="#7bafd4" />
          <circle cx="110" cy="50" r="4.5" fill="white" opacity="0.92" />
          <text x="110" y="53.5" fill="#0d1117" fontSize="7" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700">2</text>
        </g>

        {/* Pin 1 — Rogers HVAC Pro (I-49 × US-62, tip at 113,132) */}
        <g filter="url(#glPin)">
          <path d="M 113,132 C 108,124 103,118 103,113 A 10 10 0 0 1 123,113 C 123,118 118,124 113,132 Z" fill="#7bafd4" />
          <circle cx="113" cy="113" r="4.5" fill="white" opacity="0.92" />
          <text x="113" y="116.5" fill="#0d1117" fontSize="7" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700">1</text>
        </g>

        {/* Pin 3 — Ozark Comfort Systems (I-49 × AR-264, tip at 111,192) */}
        <g filter="url(#glPin)">
          <path d="M 111,192 C 106,184 101,178 101,173 A 10 10 0 0 1 121,173 C 121,178 116,184 111,192 Z" fill="#7bafd4" />
          <circle cx="111" cy="173" r="4.5" fill="white" opacity="0.92" />
          <text x="111" y="176.5" fill="#0d1117" fontSize="7" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontWeight="700">3</text>
        </g>

        {/* Ghost pin 4 — not on map (I-49 × AR-412, tip at 109,254) */}
        <path d="M 109,254 C 104,246 99,240 99,235 A 10 10 0 0 1 119,235 C 119,240 114,246 109,254 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <circle cx="109" cy="235" r="13" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="2.5 2.5" />
        <circle className={styles.ghostRing} cx="109" cy="235" r="13" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />

        {/* North indicator */}
        <g transform="translate(185,14)">
          <circle cx="0" cy="0" r="10" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
          <text x="0" y="4.5" fill="rgba(255,255,255,0.55)" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">N</text>
        </g>

        {/* Edge fades */}
        <rect width="200" height="20" fill="url(#mFadeTop)" />
        <rect y="300" width="200" height="20" fill="url(#mFadeBot)" />
      </svg>
    </div>
  );
}

export default function GhostListing() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        {/* Browser chrome */}
        <div className={styles.chrome}>
          <span className={styles.googleText}>Google</span>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <span className={styles.searchQuery}>hvac near me rogers ar</span>
          </div>
        </div>

        {/* Body: listings left, map right */}
        <div className={styles.cardBody}>
          <div className={styles.listingsPanel}>
            <Listing
              number={1}
              name="Rogers HVAC Pro"
              stars={5}
              ratingNum="4.9"
              reviewCount={127}
              openStatus="Open now"
              openColor="#34a853"
              phone="(479) 555-0142"
              delay={0.45}
            />
            <div className={styles.divider} />
            <Listing
              number={2}
              name="NWA Heating & Cooling"
              stars={4}
              ratingNum="4.7"
              reviewCount={89}
              openStatus="Closes 5 PM"
              openColor="#888"
              phone="(479) 555-0198"
              delay={0.6}
            />
            <div className={styles.divider} />
            <Listing
              number={3}
              name="Ozark Comfort Systems"
              stars={4}
              ratingNum="4.5"
              reviewCount={54}
              openStatus="Open now"
              openColor="#34a853"
              phone="(479) 555-0317"
              delay={0.72}
            />
            <div className={styles.divider} />
            <GhostSlot delay={0.86} />
          </div>

          <NWAMap />
        </div>

        {/* Card footer */}
        <div className={styles.cardFooter}>
          <span>More businesses</span>
          <span className={styles.dot}>·</span>
          <span>Google Maps</span>
        </div>
      </motion.div>

      {/* Stat line */}
      <p className={styles.statLine}>
        8.5B searches like this happen every day
      </p>
    </div>
  );
}
