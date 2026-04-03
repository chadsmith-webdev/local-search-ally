"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Free Audit", href: "/audit" },
];

const SECONDARY_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer style={{
      background: "#0d0d0d",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px clamp(1.25rem, 4vw, 2.5rem)",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem", marginBottom: 28,
        }}>
          <Logo size={24} />
          <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} style={{
                color: "#888", textDecoration: "none", fontSize: "0.82rem",
                fontFamily: "var(--font-ui)", transition: "color 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#7bafd4"}
                onMouseLeave={e => e.currentTarget.style.color = "#888"}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "0.75rem",
        }}>
          <p style={{ color: "#555", fontSize: "0.72rem", fontFamily: "var(--font-ui)", margin: 0 }}>
            © {year} Local Search Ally · Siloam Springs, AR
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {SECONDARY_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} style={{
                color: "#555", textDecoration: "none", fontSize: "0.72rem",
                fontFamily: "var(--font-ui)", transition: "color 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#7bafd4"}
                onMouseLeave={e => e.currentTarget.style.color = "#555"}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
