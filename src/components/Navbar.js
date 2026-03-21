"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const locationLinks = [
  { label: "Siloam Springs", href: "/locations/siloam-springs" },
  { label: "Bentonville", href: "/locations/bentonville" },
  { label: "Rogers", href: "/locations/rogers" },
  { label: "Springdale", href: "/locations/springdale" },
  { label: "Fayetteville", href: "/locations/fayetteville" },
  { label: "Fort Smith", href: "/locations/fort-smith" },
];



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "var(--surface)",
        borderBottom: "1px solid var(--duke)",
        padding: "1rem 8rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s",
        
      }}>
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{ textDecoration: "none" }}>
  <Logo size={36} textSize="1.1rem" />
</Link>

        {/* Desktop links */}
        <ul style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }} className="desktop-nav">
          {links.map((link) => {
  const isActive = pathname === link.href;
  return (
    <li key={link.href}>
      <Link href={link.href} style={{
        color: isActive ? "var(--carolina)" : "var(--text)",
        textDecoration: "none",
        fontSize: "0.95rem",
        borderBottom: isActive ? "2px solid var(--carolina)" : "2px solid transparent",
        paddingBottom: "4px",
        transition: "color 0.2s, border-color 0.2s",
      }}
        onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "var(--text)"; }}
      >
        {link.label}
      </Link>
    </li>
  );
})}

         <li style={{ position: "relative" }}
  onMouseEnter={() => setLocationsOpen(true)}
  onMouseLeave={() => setLocationsOpen(false)}
>
  <Link href="/locations" style={{
    color: pathname.startsWith("/locations") ? "var(--carolina)" : "var(--text)",
    textDecoration: "none",
    fontSize: "0.95rem",
    borderBottom: pathname.startsWith("/locations") ? "2px solid var(--carolina)" : "2px solid transparent",
    paddingBottom: "4px",
    transition: "color 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  }}>
    Areas <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>▾</span>
  </Link>
  {locationsOpen && (
    <div style={{
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "var(--surface)",
      border: "1px solid var(--duke)",
      borderRadius: "8px",
      padding: "0.5rem",
      minWidth: "180px",
      zIndex: 200,
      marginTop: "0.5rem",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    }}>
      {locationLinks.map((loc) => (
        <Link
          key={loc.href}
          href={loc.href}
          style={{
            display: "block",
            padding: "0.6rem 1rem",
            color: "var(--muted)",
            textDecoration: "none",
            fontSize: "0.875rem",
            borderRadius: "6px",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(123,175,212,0.1)"; e.currentTarget.style.color = "var(--carolina)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--muted)"; }}
        >
          {loc.label}, AR
        </Link>
      ))}
      <div style={{ borderTop: "1px solid var(--duke)", margin: "0.5rem 0" }} />
      <Link
        href="/locations"
        style={{
          display: "block",
          padding: "0.6rem 1rem",
          color: "var(--carolina)",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: "bold",
          borderRadius: "6px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(123,175,212,0.1)"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
      >
        View All Areas →
      </Link>
    </div>
  )}
</li> 
        </ul>

        {/* Desktop CTA */}
        <a href="tel:+14793808626" className="desktop-nav" style={{
  color: "var(--muted)",
  textDecoration: "none",
  fontSize: "0.85rem",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  transition: "color 0.2s",
}}
  onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
  onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
>
  <span style={{ color: "var(--carolina)", fontSize: "0.8rem" }}>📞</span>
  (479) 380-8626
</a>

        <Link href="/contact" className="nav-cta desktop-nav" style={{
          backgroundColor: "var(--carolina)",
          color: "#000",
          padding: "0.6rem 1.25rem",
          borderRadius: "6px",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "0.875rem",
          transition: "opacity 0.2s",
        }}>
          Let's Talk
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "var(--text)",
            borderRadius: "2px",
            transition: "transform 0.3s, opacity 0.3s",
            transform: open ? "translateY(7px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "var(--text)",
            borderRadius: "2px",
            transition: "opacity 0.3s",
            opacity: open ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "var(--text)",
            borderRadius: "2px",
            transition: "transform 0.3s, opacity 0.3s",
            transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 99,
        backgroundColor: "rgba(0,0,0,0.5)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "opacity 0.3s",
      }} onClick={() => setOpen(false)} />

      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "280px",
        backgroundColor: "var(--surface)",
        borderLeft: "1px solid var(--duke)",
        zIndex: 100,
        padding: "5rem 2rem 2rem",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}>
        {links.map((link, i) => {
  const isActive = pathname === link.href;
  return (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setOpen(false)}
      style={{
        color: isActive ? "var(--carolina)" : "var(--text)",
        textDecoration: "none",
        fontSize: "1.25rem",
        fontWeight: "600",
        padding: "0.75rem 0",
        borderBottom: "1px solid var(--duke)",
        transition: "color 0.2s",
        opacity: open ? 1 : 0,
        transform: open ? "translateX(0)" : "translateX(20px)",
        transitionDelay: `${i * 60}ms`,
        fontFamily: "var(--font-body)",
      }}
    >
      {link.label}
    </Link>
  );
})}

<Link
  href="/locations"
  onClick={() => setOpen(false)}
  style={{
    color: pathname.startsWith("/locations") ? "var(--carolina)" : "var(--text)",
    textDecoration: "none",
    fontSize: "1.25rem",
    fontWeight: "600",
    padding: "0.75rem 0",
    borderBottom: "1px solid var(--duke)",
    transition: "color 0.2s",
    opacity: open ? 1 : 0,
    transform: open ? "translateX(0)" : "translateX(20px)",
    transitionDelay: `${links.length * 60}ms`,
    fontFamily: "var(--font-cabinet)",
  }}
>
  Service Areas
</Link>

<a 
href="tel:+14793808626"
  onClick={() => setOpen(false)}
  style={{
    color: "var(--muted)",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "600",
    padding: "0.75rem 0",
    borderBottom: "1px solid var(--duke)",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    opacity: open ? 1 : 0,
    transform: open ? "translateX(0)" : "translateX(20px)",
    transitionDelay: `${links.length * 60 + 60}ms`,
    transition: "opacity 0.3s, transform 0.3s, color 0.2s",
  }}
>
  <span style={{ color: "var(--carolina)" }}>📞</span>
  (479) 380-8626
</a>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          style={{
            backgroundColor: "var(--carolina)",
            color: "#000",
            padding: "1rem",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "1rem",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(20px)",
            transitionDelay: `${links.length * 60}ms`,
            transition: "opacity 0.3s, transform 0.3s",
          }}
        >
          Let's Talk — It's Free
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-padding { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}