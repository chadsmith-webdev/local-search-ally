export const metadata = {
  title: "Terms of Service | Local Search Ally",
  description: "Terms and conditions for using Local Search Ally's website and services.",
};

export default function TermsOfService() {
  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "5rem 2rem" }}>
      <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
        Legal
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: "800", marginBottom: "0.75rem" }}>
        Terms of Service
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: "3rem", fontSize: "0.9rem" }}>
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="prose">

        <p>By using localsearchally.com or engaging Local Search Ally for services, you agree to these terms. We've kept them straightforward — no legal maze, just clear expectations on both sides.</p>

        <h2>Who These Terms Apply To</h2>
        <p>These terms apply to anyone who visits localsearchally.com or engages Local Search Ally for local SEO, web development, or related services. Local Search Ally is owned and operated by Chad Smith, based in Siloam Springs, Arkansas.</p>

        <h2>Using This Website</h2>
        <p>You're welcome to browse, share, and link to content on this site. You may not copy, reproduce, or republish our content without written permission. You may not use this site for any unlawful purpose or in a way that could damage or overburden the site.</p>

        <h2>Our Services</h2>
        <p>Local Search Ally provides local SEO, web development, Google Business Profile optimization, SEO audits, and related digital marketing services to contractors and local businesses. The specifics of any engagement — scope, deliverables, pricing, and timeline — are agreed upon before work begins.</p>

        <h3>What we commit to</h3>
        <p>We commit to delivering the services agreed upon, communicating clearly and honestly throughout the engagement, and telling you if something changes or falls outside our capabilities.</p>

        <h3>What we don't guarantee</h3>
        <p>We do not guarantee specific search ranking positions, a specific number of leads, or particular revenue outcomes. SEO and digital marketing results depend on many factors outside our control, including Google's algorithm, your market competition, and your business's ability to convert leads. We will always work hard and be transparent about what's working and what isn't.</p>

        <h2>Payments</h2>
        <p>Payment terms are outlined in individual service agreements. We do not lock clients into long-term contracts. Either party may end an engagement with reasonable notice as specified in the service agreement.</p>

        <h2>Intellectual Property</h2>
        <p>Content we create for your business — website copy, blog posts, graphics — belongs to you once payment is received in full. The tools, processes, and frameworks we use to deliver services remain our intellectual property.</p>

        <h2>Limitation of Liability</h2>
        <p>Local Search Ally is not liable for indirect, incidental, or consequential damages arising from use of our services or this website. Our total liability for any claim is limited to the amount paid for the specific service in question.</p>

        <h2>Third-Party Links</h2>
        <p>This site may link to third-party websites. We are not responsible for the content or privacy practices of those sites. Links do not constitute endorsement.</p>

        <h2>Changes to These Terms</h2>
        <p>We may update these terms from time to time. When we do, we'll update the date at the top of this page. Continued use of the site after changes are posted means you accept the updated terms.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the state of Arkansas. Any disputes will be resolved in the courts of Benton County, Arkansas.</p>

        <h2>Contact Us</h2>
        <p>Questions about these terms? Reach out at <a href="mailto:contact@localsearchally.com">contact@localsearchally.com</a> or call <a href="tel:+14793808626">(479) 380-8626</a>.</p>

      </div>
    </div>
  );
}