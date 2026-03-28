"use client";
import { useState } from "react";

export default function CTAForm({
  action = "https://formspree.io/f/mkoqvkzr",
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    const data = new FormData(e.target);
    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      e.target.reset();
    } catch (error) {
      setSubmitError(
        "Could not send your request right now. Please try again in a minute.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          backgroundColor: "rgba(13,17,23,0.7)",
          border: "1px solid var(--carolina)",
          borderRadius: "12px",
          padding: "3rem 2rem",
          textAlign: "center",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 20px rgba(123,175,212,0.1)",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
        <h3
          style={{
            color: "var(--carolina)",
            marginBottom: "0.75rem",
            fontSize: "1.25rem",
          }}
        >
          Request received
        </h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
          Thanks for reaching out. I will review your situation and follow up
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "560px",
        margin: "0 auto",
        display: "grid",
        gap: "1rem",
      }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
        className='form-row'
      >
        {[
          { name: "name", placeholder: "Owner name", type: "text" },
          { name: "business", placeholder: "Business name", type: "text" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
            style={{
              backgroundColor: "rgba(13,17,23,0.7)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "0.85rem 1rem",
              color: "var(--text)",
              fontSize: "0.95rem",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "var(--font-body)",
              backdropFilter: "blur(8px)",
            }}
          />
        ))}
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
        className='form-row'
      >
        {[
          { name: "phone", placeholder: "Phone number", type: "tel" },
          { name: "email", placeholder: "Work email", type: "email" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "0.85rem 1rem",
              color: "var(--text)",
              fontSize: "0.95rem",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "var(--font-body)",
            }}
          />
        ))}
      </div>
      <textarea
        name='challenge'
        placeholder='What trade are you in, and what is your biggest local lead challenge?'
        rows={4}
        required
        style={{
          backgroundColor: "rgba(13,17,23,0.7)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "0.85rem 1rem",
          color: "var(--text)",
          fontSize: "0.95rem",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          resize: "vertical",
          fontFamily: "var(--font-body)",
          backdropFilter: "blur(8px)",
        }}
      />
      {submitError && (
        <p
          style={{
            margin: 0,
            color: "var(--error)",
            fontSize: "0.85rem",
            lineHeight: 1.5,
          }}
        >
          {submitError}
        </p>
      )}
      <button
        type='submit'
        disabled={submitting}
        className='btn-glow'
        style={{
          padding: "1rem",
          width: "100%",
          fontSize: "1rem",
          cursor: submitting ? "not-allowed" : "pointer",
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {submitting ? "Sending..." : "Book my strategy call"}
      </button>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem", margin: 0 }}>
        No hard pitch. You will leave with a clear next step whether we work
        together or not.
      </p>
    </form>
  );
}
