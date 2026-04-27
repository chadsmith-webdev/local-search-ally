import GbpChecklistClient from "@/components/GbpChecklistClient";

export const metadata = {
  title: "Free GBP Checklist for Home Service Contractors | Local Search Ally",
  description:
    "44 items. 7 sections. 20 minutes. Find the gaps in your Google Business Profile that are costing you calls. Free download for NWA home service trades.",
  alternates: {
    canonical: "https://localsearchally.com/gbp-checklist",
  },
  openGraph: {
    title: "Free GBP Checklist for Home Service Contractors",
    description:
      "Most contractors have 4–6 gaps in their Google Business Profile they don't know about. This checklist finds them in 20 minutes.",
    url: "https://localsearchally.com/gbp-checklist",
  },
  // Prevent indexing of the thank-you state; the page itself can be indexed
  robots: { index: true, follow: false },
};

export default function GbpChecklistPage() {
  return <GbpChecklistClient />;
}
