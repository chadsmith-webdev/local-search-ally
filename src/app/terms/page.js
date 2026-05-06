import Link from "next/link";
import { Container, Section, Stack } from "@/components/ui/Layout";
import { H1, H2, Body, Eyebrow } from "@/components/ui/Typography";

export const metadata = {
  title: "Terms of Service | Local Search Ally",
  description:
    "Terms governing use of localsearchally.com and any services provided by Local Search Ally, operated by Chad Smith of Siloam Springs, AR.",
  openGraph: {
    title: "Terms of Service | Local Search Ally",
    description:
      "Terms governing use of localsearchally.com and Local Search Ally services.",
    url: "https://www.localsearchally.com/terms",
  },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className='bg-bg min-h-screen'>
      <Section className='pt-32 pb-20'>
        <Stack gap='4rem' style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Header */}
          <Stack gap='1.5rem'>
            <Eyebrow>LEGAL</Eyebrow>
            <H1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
              Terms of Service
            </H1>
            <p className='text-[0.65rem] text-text-muted/40 uppercase tracking-widest'>
              Effective: Jan 16, 2024 · Updated: Apr 3, 2026
            </p>
            <div className='h-px bg-white/5 w-full' />
            <Body>
              These Terms of Service govern your use of localsearchally.com and
              any services provided by Local Search Ally, operated by Chad Smith
              of Siloam Springs, AR. By using this site, you agree to these
              terms.
            </Body>
          </Stack>

          {/* Sections */}
          <Stack gap='3rem'>
            <Stack gap='1.5rem'>
              <H2 style={{ fontSize: "1.5rem" }}>1. The Free Audit Tool</H2>
              <Body>
                The free audit tool provides an automated analysis based on
                publicly available data. Results are intended for general
                assessment and do not constitute professional or legal advice.
              </Body>
              <Body>
                You may use the tool to assess your own business. You may not
                use it to scrape data at scale or circumvent rate limits (5
                audits per IP per 24h).
              </Body>
            </Stack>

            <div className='h-px bg-white/5' />

            <Stack gap='1.5rem'>
              <H2 style={{ fontSize: "1.5rem" }}>
                2. Paid Services & No Contracts
              </H2>
              <Body>
                All ongoing services are provided on a month-to-month basis. No
                long-term contract is required. Either party may terminate with
                written notice at any time.
              </Body>
              <Body>
                We do not guarantee specific ranking positions or call volumes,
                as these depend on third-party algorithms and market factors.
              </Body>
            </Stack>

            <div className='h-px bg-white/5' />

            <Stack gap='1.5rem'>
              <H2 style={{ fontSize: "1.5rem" }}>
                3. Liability & Governing Law
              </H2>
              <Body>
                Local Search Ally&apos;s liability is limited to the total
                amount paid by you in the three months preceding any claim.
                These terms are governed by the laws of the State of Arkansas.
              </Body>
            </Stack>

            <div className='h-px bg-white/5' />

            <Stack
              gap='1.5rem'
              className='p-8 bg-slate rounded-xl border border-white/5'
            >
              <Eyebrow>CONTACT</Eyebrow>
              <p className='font-serif text-lg font-bold text-text'>
                Chad Smith
              </p>
              <Body className='text-sm'>
                Local Search Ally · Siloam Springs, AR
              </Body>
              <a
                href='mailto:chad@localsearchally.com'
                className='text-brand text-sm underlineDecoration-carolina/20 underline underline-offset-4'
              >
                chad@localsearchally.com
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </div>
  );
}
