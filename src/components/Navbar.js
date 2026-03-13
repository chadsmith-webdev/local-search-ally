import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: "var(--surface)",
      borderBottom: "1px solid var(--duke)",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <Link href="/" style={{
        color: "var(--carolina)",
        fontWeight: "bold",
        fontSize: "1.25rem",
        textDecoration: "none",
      }}>
        Local Search Ally
      </Link>

      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "2rem",
        margin: 0,
        padding: 0,
      }}>
        {[
          { label: "Services", href: "/services" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map((link) => (
          <li key={link.href}>
            <Link href={link.href} style={{
              color: "var(--text)",
              textDecoration: "none",
              fontSize: "0.95rem",
            }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}