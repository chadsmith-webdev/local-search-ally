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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        style={{
          backgroundColor: scrolled ? "rgba(6,8,12,0.85)" : "rgba(13,17,23,0.6)",
          borderBottom: `1px solid ${scrolled ? "var(--border-hover)" : "var(--border)"}`,
          padding: "0.85rem 8rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {/* Logo */}
        <Link
          href='/'
          onClick={() => setOpen(false)}
          style={{ textDecoration: "none" }}
        >
          <Logo size={36} textSize='1.1rem' />
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
            margin: 0,
            padding: 0,
          }}
          className='desktop-nav'
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: isActive ? "var(--carolina)" : "var(--muted)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? "600" : "400",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.01em",
                    padding: "0.4rem 0",
                    position: "relative",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--carolina)")
                  }
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "2px",
                      background: "var(--carolina)",
                      borderRadius: "1px",
                      boxShadow: "0 0 8px rgba(123,175,212,0.5)",
                    }} />
                  )}
                </Link>
              </li>
            );
          })}

          <li
            style={{ position: "relative" }}
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <Link
              href='/locations'
              style={{
                color: pathname.startsWith("/locations")
                  ? "var(--carolina)"
                  : "var(--muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontFamily: "var(--font-body)",
                fontWeight: pathname.startsWith("/locations") ? "600" : "400",
                padding: "0.4rem 0",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              Areas <span style={{ fontSize: "0.65rem", opacity: 0.5 }}>▾</span>
            </Link>
            {locationsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(13,17,23,0.95)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid var(--border-hover)",
                  borderRadius: "10px",
                  padding: "0.5rem",
                  minWidth: "200px",
                  zIndex: 200,
                  paddingTop: "0.75rem",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(123,175,212,0.05)",
                }}
              >
                {locationLinks.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    style={{
                      display: "block",
                      padding: "0.6rem 1rem",
                      color: "var(--muted)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-body)",
                      borderRadius: "6px",
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(123,175,212,0.08)";
                      e.currentTarget.style.color = "var(--carolina)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--muted)";
                    }}
                  >
                    {loc.label}, AR
                  </Link>
                ))}
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    margin: "0.5rem 0",
                  }}
                />
                <Link
                  href='/locations'
                  style={{
                    display: "block",
                    padding: "0.6rem 1rem",
                    color: "var(--carolina)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    fontFamily: "var(--font-body)",
                    borderRadius: "6px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(123,175,212,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  View All Areas →
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href='tel:+14793808626'
          className='desktop-nav'
          style={{
            color: "var(--muted)",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontFamily: "var(--font-mono)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--carolina)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <svg
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 24 24'
            style={{ color: "var(--carolina)" }}
          >
            <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
          </svg>
          (479) 380-8626
        </a>

        <Link
          href='/contact'
          className='btn-glow desktop-nav'
          style={{
            padding: "0.6rem 1.25rem",
            fontSize: "0.85rem",
          }}
        >
          Let's Talk
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className='hamburger'
          aria-label='Toggle menu'
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
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--text)",
              borderRadius: "2px",
              transition: "opacity 0.3s",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s",
        }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "300px",
          backgroundColor: "rgba(13,17,23,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "1px solid var(--border-hover)",
          zIndex: 100,
          padding: "5rem 2rem 2rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
      >
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
                fontSize: "1.15rem",
                fontWeight: "600",
                fontFamily: "var(--font-body)",
                padding: "0.85rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s, opacity 0.3s, transform 0.3s",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(20px)",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          href='/locations'
          onClick={() => setOpen(false)}
          style={{
            color: pathname.startsWith("/locations")
              ? "var(--carolina)"
              : "var(--text)",
            textDecoration: "none",
            fontSize: "1.15rem",
            fontWeight: "600",
            fontFamily: "var(--font-body)",
            padding: "0.85rem 0",
            borderBottom: "1px solid var(--border)",
            transition: "color 0.2s, opacity 0.3s, transform 0.3s",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(20px)",
            transitionDelay: `${links.length * 50}ms`,
          }}
        >
          Service Areas
        </Link>

        <a
          href='tel:+14793808626'
          onClick={() => setOpen(false)}
          style={{
            color: "var(--muted)",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--font-mono)",
            padding: "0.85rem 0",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(20px)",
            transitionDelay: `${links.length * 50 + 50}ms`,
            transition: "opacity 0.3s, transform 0.3s, color 0.2s",
          }}
        >
          <svg
            width='18'
            height='18'
            fill='currentColor'
            viewBox='0 0 24 24'
            style={{ color: "var(--carolina)" }}
          >
            <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
          </svg>
          (479) 380-8626
        </a>
        <Link
          href='/contact'
          onClick={() => setOpen(false)}
          className="btn-glow"
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            fontSize: "1rem",
            opacity: open ? 1 : 0,
            transform: open ? "translateX(0)" : "translateX(20px)",
            transitionDelay: `${links.length * 50 + 100}ms`,
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
          nav { padding: 0.85rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
