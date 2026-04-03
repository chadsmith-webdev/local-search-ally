"use client";

import React from "react";
import { motion as m } from "framer-motion";

/**
 * Entrance animation variants for consistent typography reveal.
 */
const standardReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
};

const eyebrowReveal = {
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

/**
 * H1 - Massive Cinematic Hero Heading
 * Matches the ServicesHero standard: clamp(2.8rem, 8vw, 5.5rem)
 */
export const H1 = ({ children, className = "", id = "", style = {} }) => (
  <m.h1
    id={id}
    {...standardReveal}
    className={`font-serif font-extrabold leading-[1.02] tracking-[-0.05em] text-text ${className}`}
    style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", ...style }}
  >
    {children}
  </m.h1>
);

/**
 * H2 - Section Heading
 * Matches the ServicesGrid standard: clamp(2.2rem, 5vw, 3.2rem)
 */
export const H2 = ({ children, className = "", id = "", style = {} }) => (
  <m.h2
    id={id}
    {...standardReveal}
    className={`font-serif font-extrabold leading-[1.1] tracking-[-0.03em] text-text ${className}`}
    style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)", ...style }}
  >
    {children}
  </m.h2>
);

/**
 * Body - Standard paragraph text
 * variant="hero" uses the larger scale from ServicesHero: clamp(1.1rem, 2vw, 1.45rem)
 */
export const Body = ({ 
  children, 
  className = "", 
  variant = "standard", 
  style = {}, 
  delay = 0.1 
}) => {
  const isHero = variant === "hero";
  const fontSize = isHero 
    ? "clamp(1.1rem, 2vw, 1.45rem)" 
    : "clamp(1rem, 1.8vw, 1.15rem)";
  const colorClass = isHero ? "text-muted" : "text-muted/80";

  return (
    <m.p
      initial={standardReveal.initial}
      whileInView={standardReveal.whileInView}
      viewport={standardReveal.viewport}
      transition={{ ...standardReveal.transition, delay }}
      className={`${colorClass} leading-[1.65] font-sans font-medium ${className}`}
      style={{ fontSize, ...style }}
    >
      {children}
    </m.p>
  );
};

/**
 * Eyebrow - Standard blue pill label
 * Matches the Services standard: text-[0.65rem] + bg-carolina/10
 */
export const Eyebrow = ({ children, className = "" }) => (
  <m.div variants={eyebrowReveal} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
    <span
      className={`inline-block font-mono text-[0.65rem] font-bold tracking-[0.35em] uppercase text-carolina bg-carolina/10 px-3 py-1.5 rounded ${className}`}
    >
      {children}
    </span>
  </m.div>
);
