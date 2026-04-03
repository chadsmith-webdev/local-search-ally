"use client";

import React from "react";

/**
 * Container component that maintains a consistent max-width and horizontal padding (gutter).
 */
export const Container = ({ children, className = "", style = {} }) => (
  <div
    className={`mx-auto w-full px-page-gutter ${className}`}
    style={{ maxWidth: 1400, ...style }}
  >
    {children}
  </div>
);

/**
 * Section component with standard vertical spacing.
 */
export const Section = ({ children, className = "", id = "", style = {} }) => (
  <section
    id={id}
    className={`relative py-section ${className}`}
    style={style}
  >
    <Container>{children}</Container>
  </section>
);

/**
 * Stack component for vertical layout with consistent gaps.
 */
export const Stack = ({ children, gap = "2rem", className = "", style = {} }) => (
  <div 
    className={`flex flex-col ${className}`}
    style={{ gap, ...style }}
  >
    {children}
  </div>
);
