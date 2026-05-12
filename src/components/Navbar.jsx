"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Downloads & Guides", href: "/resources" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    // Check initial scroll position (e.g. after back-navigation)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${isHome && !scrolled ? styles.transparent : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href='/' className={styles.logo}>
          <svg
            className={styles.logoIcon}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            aria-hidden='true'
          >
            <defs>
              <linearGradient
                id='needleGrad'
                x1='0'
                x2='1'
                gradientUnits='objectBoundingBox'
              >
                <stop offset='0' stopColor='white' stopOpacity='0.5' />
                <stop offset='0.45' stopColor='white' stopOpacity='1' />
                <stop offset='1' stopColor='white' stopOpacity='0.35' />
              </linearGradient>
              <clipPath id='ballClip'>
                <circle cx='50' cy='33' r='20' />
              </clipPath>
            </defs>
            <polygon points='48,52 52,52 50,93' fill='url(#needleGrad)' />
            <circle cx='50' cy='33' r='20' fill='#7bafd4' />
            <g clipPath='url(#ballClip)'>
              <circle cx='46' cy='28' r='10' fill='white' opacity='0.88' />
              <circle cx='49.5' cy='30.5' r='10.1' fill='#7bafd4' />
            </g>
          </svg>
          <span className={styles.logoText}>
            Local Search <span>Ally</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav aria-label='Main navigation'>
          <ul className={styles.links}>
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href} className={styles.dropdownParent}>
                  <Link href={link.href} className={styles.dropdownTrigger}>
                    {link.label}
                    <svg
                      viewBox='0 0 10 10'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      aria-hidden='true'
                    >
                      <path d='M2 3.5l3 3 3-3' />
                    </svg>
                  </Link>
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownInner}>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Desktop phone CTA */}
        <a
          href='tel:+147****8626'
          className={`${styles.phone} ${styles.desktopCta}`}
        >
          (479) 380-8626
        </a>

        {/* Log in link */}
        <a
          href='https://audit.localsearchally.com/login'
          className={styles.loginLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          Log in
        </a>

        {/* Mobile phone icon (sticky bar only) */}
        <a
          href='tel:+14793808626'
          className={styles.mobilePhoneBtn}
          aria-label='Call (479) 380-8626'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.75'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path d='M18.5 15c0 .4-.1.8-.3 1.2-.2.4-.4.7-.7 1-.5.4-1 .7-1.6.8-.6.1-1.3.1-2-.1-1.5-.4-3-.1-4.5-2.3C7.9 13.5 6.5 12 5.3 10.4 3.1 8 2.6 5.8 3 4.3c.1-.6.4-1.1.8-1.6.3-.3.6-.5 1-.7.4-.2.8-.3 1.2-.3.2 0 .3 0 .5.1.2.1.3.2.4.4l2.1 2.9c.1.2.2.3.2.5 0 .2-.1.4-.2.5l-.7.8c-.1.1-.1.3-.1.4 0 .1.1.3.1.4.4.7 1 1.4 1.6 2 .6.6 1.3 1.1 2 1.6.1.1.3.1.4.1.2 0 .3-.1.4-.2l.8-.7c.2-.1.3-.2.5-.2.2 0 .4.1.5.2l2.9 2.1c.2.1.3.3.4.4.1.2.1.4.1.5z' />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          ) : (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <line x1='3' y1='7' x2='21' y2='7' />
              <line x1='3' y1='12' x2='21' y2='12' />
              <line x1='3' y1='17' x2='21' y2='17' />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) =>
          link.children ? (
            <div key={link.href} className={styles.mobileGroup}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={styles.mobileSubItem}
                  onClick={() => setMenuOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
        <a href='tel:+14793808626' className={styles.mobilePhone}>
          (479) 380-8626
        </a>
        <Link
          href={process.env.NEXT_PUBLIC_AUDIT_URL}
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Run Your Free SEO Audit →
        </Link>
      </div>
    </header>
  );
}
