"use client";

import React from "react";
import Link from "next/link";

/**
 * Primary action button (Solid brand color)
 */
export const PrimaryBtn = ({ href, children, className = "", style = {} }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center bg-carolina text-slate font-bold rounded-lg text-[1rem] hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)] active:scale-[0.98] outline-none ${className}`}
    style={{ padding: "1.25rem 2.75rem", ...style }}
  >
    {children}
  </Link>
);

/**
 * Outline action button (Border only)
 */
export const OutlineBtn = ({ href, children, className = "", style = {} }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center bg-transparent border border-white/10 text-white font-semibold rounded-lg text-[1rem] hover:border-carolina hover:text-carolina transition-all active:scale-[0.98] outline-none ${className}`}
    style={{ padding: "1.25rem 2.25rem", ...style }}
  >
    {children}
  </Link>
);

/**
 * Generic Motion Button - Animated with Framer Motion
 */
export const MotionButton = ({ children, className = "", onClick, ...props }) => (
  <button
    onClick={onClick}
    className={`font-mono text-[0.75rem] font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);
