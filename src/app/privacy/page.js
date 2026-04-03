import Link from "next/link";
import { Container, Section, Stack } from "@/components/ui/Layout";
import { H1, H2, Body, Eyebrow } from "@/components/ui/Typography";

export const metadata = {
  title: "Privacy Policy | Local Search Ally",
  description:
    "How Local Search Ally collects, uses, and stores your information when you use this website and the free SEO audit tool.",
  openGraph: {
    title: "Privacy Policy | Local Search Ally",
    description:
      "How Local Search Ally collects, uses, and stores your information.",
    url: "https://localsearchally.com/privacy",
  },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-bg min-h-screen">
      <Section className="pt-32 pb-20">
        <Stack gap="4rem" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          {/* Header */}
          <Stack gap="1.5rem">
            <Eyebrow>LEGAL</Eyebrow>
            <H1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>Privacy Policy</H1>
            <p className="font-mono text-[0.65rem] text-muted/40 uppercase tracking-widest">
              Effective: Jan 16, 2024 · Updated: Apr 3, 2026
            </p>
            <div className="h-px bg-white/5 w-full" />
            <Body>
              This privacy policy explains what information Local Search Ally collects when you use this website, how it&apos;s used, and how it&apos;s stored. This site is operated by Chad Smith, based in Siloam Springs, AR. Questions?{" "}
              <a href="mailto:chad@localsearchally.com" className="text-carolina hover:underline">
                chad@localsearchally.com
              </a>
            </Body>
          </Stack>

          {/* Sections */}
          <Stack gap="3rem">
            
            <Stack gap="1.5rem">
              <H2 style={{ fontSize: "1.5rem" }}>What this site collects and why</H2>
              <Stack gap="1rem">
                <h3 className="font-serif font-bold text-text">1. The free audit tool</h3>
                <Body>When you run a free local SEO audit, you provide: Business name, Website URL, Primary trade, and Service city.</Body>
                <Body>
                  This information is used to run the audit and return your scored results. It&apos;s stored in a database so your results can be accessed again via a shareable link.
                </Body>
                <Body>
                  No account is required. You don&apos;t need to provide your name or any personal contact information to see your audit results.
                </Body>
              </Stack>
            </Stack>

            <div className="h-px bg-white/5" />

            <Stack gap="1.5rem">
              <H2 style={{ fontSize: "1.5rem" }}>Third-party services</H2>
              <Body>
                We use Google Analytics 4 to understand site traffic, Supabase for storing audit results, and Resend for sending optional PDF reports. We use Upstash for rate limiting to prevent abuse of the free tool, and the Anthropic Claude API to generate the diagnostic reports.
              </Body>
            </Stack>

            <div className="h-px bg-white/5" />

            <Stack gap="1.5rem">
              <H2 style={{ fontSize: "1.5rem" }}>Data retention & Your rights</H2>
              <Body>
                Audit results are stored indefinitely to support shareable result URLs. You have the right to request deletion of your data at any time by emailing chad@localsearchally.com.
              </Body>
            </Stack>

            <div className="h-px bg-white/5" />

            <Stack gap="1.5rem" className="p-8 bg-slate rounded-xl border border-white/5">
               <Eyebrow>CONTACT</Eyebrow>
               <p className="font-serif text-lg font-bold text-text">Chad Smith</p>
               <Body className="text-sm">Local Search Ally · Siloam Springs, AR</Body>
               <a href="mailto:chad@localsearchally.com" className="text-carolina font-mono text-sm underlineDecoration-carolina/20 underline underline-offset-4">chad@localsearchally.com</a>
            </Stack>

          </Stack>
        </Stack>
      </Section>
    </div>
  );
}
