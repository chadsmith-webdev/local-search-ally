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
        backgroundColor: "rgba(13,17,23,0.7)",
        border: "1px solid var(--carolina)",
        borderRadius: "12px",
        padding: "3rem 2rem",
        textAlign: "center",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 20px rgba(123,175,212,0.1)",
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
            backgroundColor: "rgba(13,17,23,0.7)", border: "1px solid var(--border)", borderRadius: "8px",
            padding: "0.85rem 1rem", color: "var(--text)", fontSize: "0.95rem", outline: "none",
            width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)",
            backdropFilter: "blur(8px)",
          }} />
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
        {[
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email Address", type: "email" },
        ].map((field) => (
          <input key={field.name} type={field.type} name={field.name} placeholder={field.placeholder} required style={{
            backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px",
            padding: "0.85rem 1rem", color: "var(--text)", fontSize: "0.95rem", outline: "none",
            width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)",
          }} />
        ))}
      </div>
      <textarea name="challenge" placeholder="What's your biggest challenge right now?" rows={4} required style={{
        backgroundColor: "rgba(13,17,23,0.7)", border: "1px solid var(--border)", borderRadius: "8px",
        padding: "0.85rem 1rem", color: "var(--text)", fontSize: "0.95rem", outline: "none",
        width: "100%", boxSizing: "border-box", resize: "vertical", fontFamily: "var(--font-body)",
        backdropFilter: "blur(8px)",
      }} />
      <button type="submit" disabled={submitting} className="btn-glow" style={{
        padding: "1rem",
        width: "100%",
        fontSize: "1rem",
        cursor: submitting ? "not-allowed" : "pointer",
        opacity: submitting ? 0.7 : 1,
      }}>
        {submitting ? "Sending..." : "Let's Talk — It's Free"}
      </button>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem", margin: 0 }}>
        No spam. No sales pitch. Just an honest conversation about your business.
      </p>
    </form>
  );
}