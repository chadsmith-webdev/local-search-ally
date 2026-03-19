"use client";
import Link from "next/link";
import { locations } from "@/lib/locations";

export default function LocationsClient() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2rem" }}>
      <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
        Service Areas
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "800", marginBottom: "1rem", lineHeight: 1.1 }}>
        Serving contractors across <span style={{ color: "var(--carolina)" }}>Northwest Arkansas</span>
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "560px", marginBottom: "4rem" }}>
        Based in Siloam Springs, we serve contractors across NWA and Western Arkansas. Click your city to see how we can help your business get found locally.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {locations.map((location) => (
          <Link key={location.slug} href={`/locations/${location.slug}`} style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--duke)",
                borderRadius: "10px",
                padding: "2rem",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--carolina)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--duke)"; e.currentTarget.style.transform = "none"; }}
            >
              <p style={{ color: "var(--carolina)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", marginBottom: "0.5rem" }}>
                {location.region}
              </p>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{location.city}, AR</h2>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>{location.desc}</p>
              <span style={{ color: "var(--carolina)", fontSize: "0.875rem", fontWeight: "bold" }}>
                View {location.city} services →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}