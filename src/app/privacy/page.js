export const metadata = {
  title: "Privacy Policy | Local Search Ally",
  description: "How Local Search Ally collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "5rem 2rem" }}>
      <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
        Legal
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", marginBottom: "0.75rem" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.9rem" }}>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="prose">

        <p>This privacy policy explains what information Local Search Ally collects when you visit localsearchally.com, how we use it, and what your rights are. We've written it in plain English because that's how we operate.</p>

        <h2>Who We Are</h2>
        <p>Local Search Ally is a local SEO and web development service based in Siloam Springs, Arkansas, owned and operated by Chad Smith. If you have any questions about this policy, you can reach us at <a href="mailto:contact@localsearchally.com">contact@localsearchally.com</a>.</p>

        <h2>What Information We Collect</h2>

        <h3>Information you give us</h3>
        <p>When you fill out a contact form on this site, we collect the information you provide — typically your name, business name, phone number, email address, and a description of your challenge. This information is submitted through Formspree and delivered to our inbox. We use it solely to respond to your inquiry.</p>

        <h3>Information collected automatically</h3>
        <p>We use Google Analytics to understand how visitors use this site. Google Analytics collects anonymized data such as which pages you visit, how long you stay, what device you're using, and roughly where you're located. This data is aggregated — we can't identify you personally from it.</p>

        <h3>Cookies</h3>
        <p>Google Analytics uses cookies — small text files stored in your browser — to track visits over time. These cookies don't contain personal information. You can disable cookies in your browser settings at any time, though some site features may not work as expected.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to respond to your inquiries, improve the website based on how people use it, and understand which content is most helpful to our visitors. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2>Third-Party Services</h2>
        <p>This site uses the following third-party services that may process your data:</p>
        <ul>
          <li><strong>Google Analytics</strong> — website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's privacy policy</a></li>
          <li><strong>Formspree</strong> — contact form processing. <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree's privacy policy</a></li>
          <li><strong>Vercel</strong> — website hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel's privacy policy</a></li>
        </ul>

        <h2>Data Retention</h2>
        <p>Contact form submissions are retained in our email inbox for as long as needed to respond to and manage your inquiry. Google Analytics data is retained for 26 months by default. You can request deletion of your personal data at any time by contacting us.</p>

        <h2>Your Rights</h2>
        <p>You have the right to request access to the personal data we hold about you, ask us to correct inaccurate data, request deletion of your data, and opt out of Google Analytics tracking by using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</p>

        <h2>Children's Privacy</h2>
        <p>This site is not directed at children under 13. We do not knowingly collect personal information from children.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy from time to time. When we do, we'll update the date at the top of this page. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this privacy policy or how we handle your data, reach out at <a href="mailto:contact@localsearchally.com">contact@localsearchally.com</a> or call <a href="tel:+14793808626">(479) 380-8626</a>.</p>

      </div>
    </div>
  );
}