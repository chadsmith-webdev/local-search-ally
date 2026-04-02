"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

const C = {
  bg:      "#0a0a0a",
  surface: "#141414",
  carolina: "#7bafd4",
  steel:   "#4A6B8A",
  muted:   "#888888",
  text:    "#f0f0f0",
  border:  "rgba(255,255,255,0.08)",
};

const links = [
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.7)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.1)" : C.border}`,
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        padding: "0 var(--page-gutter)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 60,
        transition: "background 0.25s, border-color 0.25s",
      }}>
        <Logo size={26} />

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="nav-desktop">
          {links.map(({ label, href }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link key={href} href={href} style={{
                color: active ? C.carolina : C.muted,
                textDecoration: "none", fontSize: "0.84rem",
                fontFamily: "var(--font-ui)", letterSpacing: "0.01em",
                fontWeight: active ? 600 : 400,
                transition: "color 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = C.carolina}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = C.muted; }}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/audit" style={{
            background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
            color: "#1e2a3a", fontWeight: 600, fontSize: "0.72rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
            padding: "8px 16px", borderRadius: 6,
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "opacity 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Free Audit →
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="nav-hamburger" aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none", flexDirection: "column", gap: 5 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: C.text, borderRadius: 2,
              transition: "transform 0.25s, opacity 0.25s",
              transform: open
                ? i === 0 ? "translateY(7px) rotate(45deg)"
                : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none"
                : "none",
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div onClick={() => setOpen(false)} style={{
        position: "fixed", inset: 0, zIndex: 98,
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
        opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none",
        transition: "opacity 0.25s",
      }} />
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: 260, zIndex: 99,
        background: "rgba(14,14,14,0.97)", backdropFilter: "blur(20px)",
        borderLeft: `1px solid ${C.border}`,
        padding: "80px 24px 32px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column", gap: 4,
      }}>
        {links.map(({ label, href }, i) => (
          <Link key={href} href={href} style={{
            color: C.text, textDecoration: "none", fontSize: "1.1rem",
            fontWeight: 600, fontFamily: "var(--font-ui)",
            padding: "14px 0", borderBottom: `1px solid ${C.border}`,
            opacity: open ? 1 : 0, transform: open ? "none" : "translateX(16px)",
            transition: `opacity 0.3s ${i * 50}ms, transform 0.3s ${i * 50}ms`,
          }}>
            {label}
          </Link>
        ))}
        <Link href="/audit" style={{
          marginTop: 20,
          background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
          color: "#1e2a3a", fontWeight: 600, fontSize: "0.75rem",
          letterSpacing: "0.1em", textTransform: "uppercase",
          fontFamily: "var(--font-mono)",
          padding: "13px 20px", borderRadius: 6,
          textDecoration: "none", textAlign: "center",
          opacity: open ? 1 : 0, transform: open ? "none" : "translateX(16px)",
          transition: "opacity 0.3s 100ms, transform 0.3s 100ms",
        }}>
          Run Free Audit →
        </Link>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
