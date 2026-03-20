"use client";
import { useState } from "react";

export default function CTAForm({ action = "https://formspree.io/f/mkoqvkzr" }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target);
    await fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        maxWidth: "560px",
        margin: "0 auto",
        backgroundColor: "var(--surface)",
        border: "1px solid var(--carolina)",
        borderRadius: "10px",
        padding: "3rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
        <h3 style={{ color: "var(--carolina)", marginBottom: "0.75rem", fontSize: "1.25rem" }}>
          Message received!
        </h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
          Thanks for reaching out. I'll review your situation and get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "560px", margin: "0 auto", display: "grid", gap: "1rem" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
        {[
          { name: "name", placeholder: "Your Name", type: "text" },
          { name: "business", placeholder: "Business Name", type: "text" },
        ].map((field) => (
          <input key={field.name} type={field.type} name={field.name} placeholder={field.placeholder} required style={{
            backgroundColor: "var(--surface)", border: "1px solid var(--duke)", borderRadius: "6px",
            padding: "0.85rem 1rem", color: "var(--text)", fontSize: "0.95rem", outline: "none",
            width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body, sans-serif)",
          }} />
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
        {[
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email Address", type: "email" },
        ].map((field) => (
          <input key={field.name} type={field.type} name={field.name} placeholder={field.placeholder} required style={{
            backgroundColor: "var(--surface)", border: "1px solid var(--duke)", borderRadius: "6px",
            padding: "0.85rem 1rem", color: "var(--text)", fontSize: "0.95rem", outline: "none",
            width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body, sans-serif)",
          }} />
        ))}
      </div>
      <textarea name="challenge" placeholder="What's your biggest challenge right now?" rows={4} required style={{
        backgroundColor: "var(--surface)", border: "1px solid var(--duke)", borderRadius: "6px",
        padding: "0.85rem 1rem", color: "var(--text)", fontSize: "0.95rem", outline: "none",
        width: "100%", boxSizing: "border-box", resize: "vertical", fontFamily: "var(--font-body, sans-serif)",
      }} />
      <button type="submit" disabled={submitting} style={{
        backgroundColor: "var(--carolina)", color: "#000", padding: "1rem", borderRadius: "6px",
        fontWeight: "bold", border: "none", cursor: submitting ? "not-allowed" : "pointer",
        fontSize: "1rem", fontFamily: "var(--font-body, sans-serif)",
        opacity: submitting ? 0.7 : 1, transition: "opacity 0.2s",
      }}>
        {submitting ? "Sending..." : "Let's Talk — It's Free"}
      </button>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem", margin: 0 }}>
        No spam. No sales pitch. Just an honest conversation about your business.
      </p>
    </form>
  );
}