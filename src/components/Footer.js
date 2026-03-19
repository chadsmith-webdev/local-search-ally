'use client'

import Link from "next/link";
import Logo from "@/components/Logo";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/localsearchally",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOURPROFILE",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/YOURHANDLE",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/smithchad.bsky.social",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 6.5c.5 1.5-1 4-4.5 6-3.5-2-5-4.5-4.5-6 .4-1.2 1.8-1.8 3-1.2.5.3.9.7 1.5.7s1-.4 1.5-.7c1.2-.6 2.6 0 3 1.2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--surface)",
      borderTop: "1px solid var(--duke)",
      padding: "4rem 2rem 2rem",
    }}>
      <div className="footer-grid" style={{
  maxWidth: "1100px",
  margin: "0 auto",
}}>

        {/* Brand column */}
        <div>
         <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
  <Logo size={32} textSize="1rem" />
</Link>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "300px" }}>
            A startup built to help NWA contractors get found online. Transparent by default. Growing every day.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
            📍 Siloam Springs, Arkansas
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  color: "var(--muted)",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <p style={{ color: "var(--text)", fontWeight: "600", marginBottom: "1.25rem", fontSize: "0.9rem" }}>Services</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
            {[
              { label: "Local SEO", href: "/services" },
              { label: "Web Development", href: "/services" },
              { label: "GBP Optimization", href: "/services" },
              { label: "SEO Audits", href: "/services" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

{/* Locations column */}
<div>
  <p style={{ color: "var(--text)", fontWeight: "600", marginBottom: "1.25rem", fontSize: "0.9rem" }}>Service Areas</p>
  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
    {[
      { label: "Siloam Springs", href: "/locations/siloam-springs" },
      { label: "Bentonville", href: "/locations/bentonville" },
      { label: "Rogers", href: "/locations/rogers" },
      { label: "Fayetteville", href: "/locations/fayetteville" },
      { label: "Spingdale", href: "/locations/springdale"},
      { label: "Fort Smith", href: "/locations/fort-smith"},
    ].map((item) => (
      <li key={item.label}>
        <Link href={item.href} style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Company column */}
        <div>
          <p style={{ color: "var(--text)", fontWeight: "600", marginBottom: "1.25rem", fontSize: "0.9rem" }}>Company</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
            {[
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio"},
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        maxWidth: "1100px",
        margin: "0 auto",
        paddingTop: "2rem",
        borderTop: "1px solid var(--duke)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <p style={{ color: "var(--muted)", fontSize: "0.8rem", margin: 0 }}>
          © {new Date().getFullYear()} Local Search Ally. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
          ].map((item) => (
            <Link key={item.label} href={item.href} style={{ color: "var(--muted)", fontSize: "0.8rem", textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }
  .footer-social a:hover { color: var(--carolina) !important; }
  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    .footer-bottom {
      flex-direction: column !important;
      text-align: center !important;
      gap: 0.75rem !important;
    }
  }
`}</style>
    </footer>
  );
}