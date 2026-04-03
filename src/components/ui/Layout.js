"use client";

import React from "react";

/**
 * Container component that maintains a consistent max-width and horizontal padding (gutter).
 * Uses identical centering approach as the Navbar inner div (physical margin shorthand).
 */
export const Container = ({ children, className = "", style = {} }) => (
  <div
    className={className}
    style={{
      maxWidth: 1400,
      width: "100%",
      margin: "0 auto",
      paddingLeft: "var(--page-gutter)",
      paddingRight: "var(--page-gutter)",
      ...style,
    }}
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
    className={`relative ${className}`}
    style={{
      paddingTop: "var(--section-spacing)",
      paddingBottom: "var(--section-spacing)",
      ...style,
    }}
  >
    <Container>{children}</Container>
  </section>
);

/**
 * Stack component for vertical layout with consistent gaps.
 */
export const Stack = ({
  children,
  gap = "2rem",
  className = "",
  style = {},
}) => (
  <div className={`flex flex-col ${className}`} style={{ gap, ...style }}>
    {children}
  </div>
);
