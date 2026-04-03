"use client";

import React from "react";
import { motion as m } from "framer-motion";

/**
 * Standard Glassmorphism Card with consistent animations and styling.
 */
export const GlassCard = ({ children, className = "", delay = 0, style = {} }) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    className={`glass-premium rounded-2xl border border-white/5 hover:border-carolina/30 transition-all ${className}`}
    style={{ padding: "2.5rem", ...style }}
  >
    {children}
  </m.div>
);

/**
 * Darker Surface Card
 */
export const SurfaceCard = ({ children, className = "", delay = 0, style = {} }) => (
  <m.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    className={`bg-surface-2/80 rounded-2xl border border-white/5 hover:border-carolina/20 transition-all ${className}`}
    style={{ padding: "2rem", ...style }}
  >
    {children}
  </m.div>
);
