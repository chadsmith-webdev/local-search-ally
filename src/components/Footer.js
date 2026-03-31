"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Free SEO Grader", href: "/grader" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/localsearchally",
    icon: (
      <svg
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chadsmith-localsearchally/",
    icon: (
      <svg
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z' />
        <circle cx='4' cy='4' r='2' />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className='ft'>
      <style>{`
        .ft {
          background: var(--surface);
          border-top: 1px solid var(--border);
          position: relative;
          padding: 0 2rem;
        }
        .ft-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--carolina), transparent);
          opacity: 0.3;
        }
        .ft-main {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem 0;
        }
        .ft-logo a {
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .ft-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ft-nav a {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.84rem;
          transition: color 0.2s;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
        }
        .ft-nav a:hover {
          color: var(--carolina);
        }
        .ft-nav a:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 3px;
          border-radius: 4px;
        }
        .ft-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .ft-social {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .ft-social a {
          color: var(--muted);
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border);
        }
        .ft-social a:hover {
          color: var(--carolina);
          border-color: rgba(123, 175, 212, 0.3);
        }
        .ft-social a:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 2px;
        }
        .ft-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding: 1.25rem 0;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .ft-bottom p {
          color: var(--muted);
          font-size: 0.75rem;
          margin: 0;
        }
        .ft-legal {
          display: flex;
          gap: 1.25rem;
        }
        .ft-legal a {
          color: var(--muted);
          font-size: 0.75rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-legal a:hover {
          color: var(--carolina);
        }
        .ft-legal a:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 2px;
          border-radius: 2px;
        }
        .ft-location {
          color: var(--muted);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .ft-location svg {
          color: var(--carolina);
          opacity: 0.7;
        }
        @media (max-width: 840px) {
          .ft-main {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .ft-nav {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem 1.5rem;
          }
          .ft-bottom {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
        }
      `}</style>

      <div className='ft-glow' />

      <div className='ft-main'>
        <div className='ft-logo'>
          <Link href='/'>
            <Logo size={28} textSize='0.92rem' />
          </Link>
        </div>

        <nav aria-label='Footer navigation'>
          <ul className='ft-nav'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='ft-right'>
          <div className='ft-social'>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='ft-bottom'>
        <p>
          © {new Date().getFullYear()} Local Search Ally. All rights reserved.
        </p>
        <span className='ft-location'>
          <svg
            width='12'
            height='12'
            fill='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
          </svg>
          Siloam Springs, Arkansas
        </span>
        <div className='ft-legal'>
          <Link href='/privacy'>Privacy</Link>
          <Link href='/terms'>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
