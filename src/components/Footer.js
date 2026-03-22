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
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--carolina)", marginRight: "0.25rem" }}>
<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
</svg> Siloam Springs, Arkansas
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
              { label: "Local SEO", href: "/services#local-seo" },
{ label: "Web Development", href: "/services#web-development" },
{ label: "GBP Optimization", href: "/services#gbp-optimization" },
{ label: "SEO Audits", href: "/services#seo-audits" },
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
      { label: "Springdale", href: "/locations/springdale"},
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

        {/* Contact column */}
<div>
  <p style={{ color: "var(--text)", fontWeight: "600", marginBottom: "1.25rem", fontSize: "0.9rem" }}>Get in Touch</p>
  <div style={{ display: "grid", gap: "1rem" }}>
    <a href="tel:+14793808626" style={{
      color: "var(--muted)",
      textDecoration: "none",
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "color 0.2s",
    }}
      onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
      onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
    >
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--carolina)" }}>
<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
</svg>
      (479) 380-8626
    </a>
    <a href="mailto:contact@localsearchally.com" style={{
      color: "var(--muted)",
      textDecoration: "none",
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "color 0.2s",
    }}
      onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
      onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
    >
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--carolina)" }}>
<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
      contact@localsearchally.com
    </a>
    <a href="https://calendly.com/smithchadlamont/30min" target="_blank" rel="noopener noreferrer" style={{
      color: "var(--muted)",
      textDecoration: "none",
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "color 0.2s",
    }}
      onMouseEnter={(e) => e.currentTarget.style.color = "var(--carolina)"}
      onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
    >
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--carolina)" }}>
<path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
</svg>
      Book a Free Call
    </a>
    <div style={{ paddingTop: "0.5rem", borderTop: "1px solid var(--duke)" }}>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Mon–Fri 8am–6pm CT</p>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>Sat 9am–12pm CT</p>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>Sun 2pm–6pm CT</p>
    </div>
  </div>
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