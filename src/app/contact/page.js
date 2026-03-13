export const metadata = {
  title: "Contact | Local Search Ally",
  description: "Get in touch with Local Search Ally for local SEO and web development services.",
};

export default function Contact() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "1rem" }}>
          Let's Talk
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: "800", marginBottom: "1rem" }}>
          Get in Touch
        </h1>
        <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Ready to get found online? Reach out and we'll figure out the best next step for your business.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }}>

        {/* Contact Info */}
        <div style={{ display: "grid", gap: "2rem" }}>
          {[
            {
              label: "Email",
              value: "contact@localsearchally.com",
              href: "mailto:contact@localsearchally.com",
            },
            {
              label: "Phone",
              value: "(479) 380-8626",
              href: "tel:+14793808626",
            },
            {
              label: "Schedule a Call",
              value: "Book a free 30-min consultation",
              href: "https://calendly.com/smithchadlamont/30min",
            },
          ].map((item) => (
            <div key={item.label} style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--duke)",
              borderRadius: "8px",
              padding: "1.5rem",
            }}>
              <p style={{ color: "var(--carolina)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                {item.label}
              </p>
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}>
                {item.value}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ display: "grid", gap: "1.25rem" }}
        >
          <input type="hidden" name="form-name" value="contact" />

          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
          ].map((field) => (
            <div key={field.name} style={{ display: "grid", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                required
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--duke)",
                  borderRadius: "6px",
                  padding: "0.75rem 1rem",
                  color: "var(--text)",
                  fontSize: "0.95rem",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label style={{ fontSize: "0.85rem", color: "var(--muted)" }}>How Can We Help?</label>
            <textarea
              name="message"
              rows={5}
              required
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--duke)",
                borderRadius: "6px",
                padding: "0.75rem 1rem",
                color: "var(--text)",
                fontSize: "0.95rem",
                outline: "none",
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          <button type="submit" style={{
            backgroundColor: "var(--carolina)",
            color: "#000",
            padding: "0.85rem 2rem",
            borderRadius: "6px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}>
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}