import Image from "next/image";

export const metadata = {
  title: "About | Local Search Ally",
  description: "Meet Chad, the local SEO and web development specialist behind Local Search Ally.",
};

export default function About() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1rem" }}>
          The Person Behind the Work
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: "800" }}>
          Hey, I'm Chad
        </h1>
      </div>

      {/* Photo + Intro */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        gap: "3rem",
        alignItems: "start",
        marginBottom: "4rem",
      }}>
        <div style={{ borderRadius: "10px", overflow: "hidden" }}>
  <Image
    src="/images/chad.jpg"
    alt="Chad Smith — Local Search Ally"
    width={250}
    height={250}
    style={{ width: "100%", height: "auto", display: "block" }}
  />
</div>
        <div>
          <p style={{ lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--muted)" }}>
            I grew up in North Carolina — where local businesses are the backbone of every community. 
            These days I'm based in Siloam Springs, Arkansas, a small town that feels a lot like home: 
            cow pastures, tight-knit neighborhoods, and local contractors who work hard and deserve to 
            be found online.
          </p>
          <p style={{ lineHeight: 1.8, color: "var(--muted)" }}>
            That shared experience is why I work exclusively with contractors. I understand your world — 
            and I know what it takes to get your phone ringing from Google.
          </p>
        </div>
      </div>

      {/* Story Sections */}
      <div style={{ display: "grid", gap: "2.5rem" }}>
        {[
          {
            title: "5+ Years in Local SEO",
            body: "My local SEO experience didn't start in an agency — it started in the trenches. I spent years doing SEO for my own projects, learning what actually moves the needle in local search. No theory, just results. That hands-on background is what I bring to every client.",
          },
          {
            title: "Now Adding Web Development",
            body: "Good SEO deserves a good website. I'm currently pursuing a degree in Web Development so I can offer contractors a complete solution — a fast, modern site built with local SEO baked in from day one. No more piecing together two separate vendors.",
          },
          {
            title: "Contractor-Focused, Always",
            body: "I don't work with everyone. Contractors are my niche — plumbers, roofers, HVAC techs, landscapers, electricians. Your industry has specific local search patterns, and I've built my entire skillset around understanding them.",
          },
          {
            title: "Roots That Ground the Work",
            body: "Whether it's the red clay hills of North Carolina or the rolling pastures of Northwest Arkansas, I've always been drawn to places where local businesses matter. That's not a marketing line — it's why I do this work.",
          },
        ].map((section) => (
          <div key={section.title} style={{
            borderLeft: "3px solid var(--carolina)",
            paddingLeft: "1.5rem",
          }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>{section.title}</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{section.body}</p>
          </div>
        ))}
      </div>

    </div>
  );
}