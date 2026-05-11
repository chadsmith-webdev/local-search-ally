/**
 * Data for city × trade landing pages.
 * 9 cities × 6 trades = 54 static pages via generateStaticParams.
 */

export const CITY_SLUGS = [
  "rogers-ar",
  "springdale-ar",
  "bentonville-ar",
  "centerton-ar",
  "siloam-springs-ar",
  "bella-vista-ar",
  "cave-springs-ar",
  "lowell-ar",
  "fayetteville-ar",
];

export const TRADE_SLUGS = [
  "hvac",
  "plumbing",
  "electrical",
  "roofing",
  "landscaping",
  "remodeling",
];

/** Audit tool ?trade= param must match TRADES array in AuditTool.tsx */
export const TRADE_AUDIT_PARAM = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
  roofing: "Roofing",
  landscaping: "Landscaping",
  remodeling: "Remodeling",
};

export const TRADE_DISPLAY = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
  roofing: "Roofing",
  landscaping: "Landscaping",
  remodeling: "Remodeling",
};

export const CITY_META = {
  "rogers-ar": {
    name: "Rogers",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Rogers",
    lat: "36.3320",
    lng: "-94.1185",
    market:
      "Rogers is one of the most active home service markets in Northwest Arkansas. High growth means strong search demand — and enough competition that weak local signals get exposed fast.",
    competitive: "high",
    hubPath: "/service-areas/rogers-ar",
  },
  "springdale-ar": {
    name: "Springdale",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Springdale",
    lat: "36.1867",
    lng: "-94.1288",
    market:
      "Springdale is a large, working-class market with steady year-round demand for home services. Businesses that show up in the Map Pack here get consistent call volume.",
    competitive: "high",
    hubPath: "/service-areas/springdale-ar",
  },
  "bentonville-ar": {
    name: "Bentonville",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Bentonville",
    lat: "36.3729",
    lng: "-94.2088",
    market:
      "Bentonville attracts well-paid homeowners and a lot of new construction. Homeowners here research before they hire — a complete, polished local presence matters more than in most markets.",
    competitive: "high",
    hubPath: "/service-areas/bentonville-ar",
  },
  "centerton-ar": {
    name: "Centerton",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Centerton",
    lat: "36.3595",
    lng: "-94.2844",
    market:
      "Centerton is growing fast with new subdivisions and first-time homeowners. Contractors who get established here early have an advantage before the market gets crowded.",
    competitive: "medium",
    hubPath: "/service-areas/centerton-ar",
  },
  "siloam-springs-ar": {
    name: "Siloam Springs",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Siloam Springs",
    lat: "36.1882",
    lng: "-94.5406",
    market:
      "Siloam Springs is a smaller, less saturated market. There is real search demand but fewer businesses competing for it — which means local SEO improvements move faster here.",
    competitive: "low",
    hubPath: "/service-areas/siloam-springs-ar",
  },
  "bella-vista-ar": {
    name: "Bella Vista",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Bella Vista",
    lat: "36.4812",
    lng: "-94.2727",
    market:
      "Bella Vista has a large population of older, established homeowners. Home services are in constant demand — especially for aging systems and renovation projects.",
    competitive: "medium",
    hubPath: "/service-areas/bella-vista-ar",
  },
  "cave-springs-ar": {
    name: "Cave Springs",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Cave Springs",
    lat: "36.3967",
    lng: "-94.2333",
    market:
      "Cave Springs is a small, fast-growing suburb. New homes mean new customers who do not have an established contractor relationship yet — they go straight to Google.",
    competitive: "low",
    hubPath: "/service-areas/cave-springs-ar",
  },
  "lowell-ar": {
    name: "Lowell",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Lowell",
    lat: "36.2592",
    lng: "-94.1377",
    market:
      "Lowell sits along the I-49 corridor with a mix of residential and commercial properties. Home service businesses here compete with both local and regional players.",
    competitive: "medium",
    hubPath: "/service-areas/lowell-ar",
  },
  "fayetteville-ar": {
    name: "Fayetteville",
    state: "Arkansas",
    stateAbbr: "AR",
    auditParam: "Fayetteville",
    lat: "36.0626",
    lng: "-94.1574",
    market:
      "Fayetteville is the largest market in NWA with a mix of homeowners, rentals, and older housing stock. There is strong year-round demand and enough competition that visibility gaps are costly.",
    competitive: "high",
    hubPath: "/service-areas/fayetteville-ar",
  },
};

export const TRADE_META = {
  hvac: {
    display: "HVAC",
    fullName: "HVAC (Heating and Cooling)",
    noun: "HVAC contractor",
    serviceVerb: "repairs and installs heating and cooling systems",
    urgencyNote:
      "HVAC calls are often urgent — a failed AC in July or no heat in January means customers call the first credible business they see.",
    focusAreas: [
      {
        title: "Seasonal search spikes",
        body: "I target the searches that spike in summer and winter — not just generic 'HVAC near me' but the city-specific emergency and maintenance queries.",
      },
      {
        title: "Google Business Profile",
        body: "Category alignment, service-area relevance, and the photo and review signals that build trust before a customer even clicks your listing.",
      },
      {
        title: "Service-page clarity",
        body: "Pages built around city + service searches — AC repair, furnace replacement, heat pump installation — that convert visitors into callers.",
      },
    ],
    problemStatement:
      "When an AC fails in July, homeowners do not scroll through options. They call the first business that looks trustworthy and local. If your listing is thin or buried, that call goes elsewhere.",
    proofStatement:
      "HVAC searches spike hard in extreme weather. The businesses with consistent local signals pick up the bulk of those calls.",
  },
  plumbing: {
    display: "Plumbing",
    fullName: "Plumbing",
    noun: "plumber",
    serviceVerb: "handles drain, pipe, and water heater work",
    urgencyNote:
      "Plumbing calls are almost always urgent — burst pipe, backed-up drain, water heater failure. Customers call fast and rarely shop around.",
    focusAreas: [
      {
        title: "Emergency search visibility",
        body: "I target the high-intent emergency queries — burst pipe, water heater, clogged drain — that bring in calls the same day.",
      },
      {
        title: "Google Business Profile",
        body: "Plumbing customers check reviews and photos fast. A complete, well-managed profile is often the difference between the call and the scroll.",
      },
      {
        title: "Mobile-first call paths",
        body: "Most plumbing searches happen on a phone with water already on the floor. I make sure the path from search to call is as short as possible.",
      },
    ],
    problemStatement:
      "When a pipe bursts at midnight, people Google it and call the first plumber that looks real and local. If your listing is sparse or buried, you do not get that call.",
    proofStatement:
      "Plumbing is one of the highest-urgency home service categories. Customers act fast — which means local visibility directly determines who gets the call.",
  },
  electrical: {
    display: "Electrical",
    fullName: "Electrical",
    noun: "electrician",
    serviceVerb: "handles panel upgrades, wiring, and electrical repairs",
    urgencyNote:
      "Electrical work covers both emergencies and higher-ticket planned projects like panel upgrades and EV chargers. Visibility matters for both.",
    focusAreas: [
      {
        title: "Trust signals for higher-ticket work",
        body: "Panel replacements and whole-home rewires are significant investments. I build the review and profile signals that make homeowners comfortable hiring you.",
      },
      {
        title: "Google Business Profile",
        body: "License, photos, service categories — the signals that make your listing look credible before a customer even visits your website.",
      },
      {
        title: "Service-page targeting",
        body: "Pages that rank for city + service searches — panel upgrades, generator install, EV charger — so you capture planned projects, not just emergencies.",
      },
    ],
    problemStatement:
      "Electrical is a high-trust category. Homeowners spend more time deciding — which means if your online presence looks thin or outdated, they move on before they ever contact you.",
    proofStatement:
      "Electrical customers research before they call, especially for larger jobs. A strong local presence is the difference between getting the estimate and getting passed over.",
  },
  roofing: {
    display: "Roofing",
    fullName: "Roofing",
    noun: "roofing contractor",
    serviceVerb: "handles roof repair and replacement",
    urgencyNote:
      "Roofing demand spikes after severe weather. Businesses with strong local SEO pick up that surge — businesses without it watch competitors absorb the calls.",
    focusAreas: [
      {
        title: "Storm-surge visibility",
        body: "After a hail event or wind damage, search volume spikes fast. I build the local presence that captures those searches before competitors do.",
      },
      {
        title: "Google Business Profile",
        body: "Photos, reviews, and service categories that communicate credibility for a high-dollar purchase decision.",
      },
      {
        title: "City + service targeting",
        body: "Pages built around roof repair, roof replacement, and storm damage for your specific service cities — not generic roofing content.",
      },
    ],
    problemStatement:
      "After a storm, homeowners search fast and call the first company that looks established and local. If your profile is thin and your city pages are weak, that business goes to a competitor with better local signals.",
    proofStatement:
      "Roofing has some of the highest search-to-call conversion rates in home services. The businesses that show up in the Map Pack after a storm absorb a disproportionate share of the work.",
  },
  landscaping: {
    display: "Landscaping",
    fullName: "Landscaping",
    noun: "landscaping contractor",
    serviceVerb: "handles lawn care, irrigation, and outdoor projects",
    urgencyNote:
      "Landscaping demand is seasonal and competitive. Customers often search multiple times before deciding — strong local visibility keeps you in the consideration set.",
    focusAreas: [
      {
        title: "Seasonal search targeting",
        body: "Spring cleanup, irrigation startup, fall leaf removal — I target the seasonal queries that bring in calls when customers are ready to hire.",
      },
      {
        title: "Google Business Profile",
        body: "Photos and reviews do more work in landscaping than almost any other trade. I help you build a profile that shows the quality of your work.",
      },
      {
        title: "City + service pages",
        body: "Pages built around lawn care, irrigation, and hardscaping in your specific service cities — not generic landscaping content.",
      },
    ],
    problemStatement:
      "In landscaping, customers often search more than once before hiring. If you are not showing up consistently in their city + service searches, your competitors are collecting those leads.",
    proofStatement:
      "Landscaping is a repeat-service business — the first call is the start of a long relationship. Strong local visibility means more of those first calls come to you.",
  },
  remodeling: {
    display: "Remodeling",
    fullName: "Remodeling",
    noun: "remodeling contractor",
    serviceVerb: "handles kitchen, bathroom, and home renovation projects",
    urgencyNote:
      "Remodeling is a high-consideration purchase. Homeowners research extensively before contacting anyone — which means your online presence needs to communicate trust and quality at every touchpoint.",
    focusAreas: [
      {
        title: "Trust and credibility signals",
        body: "Portfolio photos, reviews, and a complete profile are the baseline for any remodeling business trying to win online. I help you build and maintain them.",
      },
      {
        title: "Project-type targeting",
        body: "Kitchen remodels, bathroom renovations, additions — I build pages around the specific projects homeowners search for in your city.",
      },
      {
        title: "Multi-touch visibility",
        body: "Remodeling customers research across Google, Maps, and websites before deciding. I make sure your presence is strong at every stage of that process.",
      },
    ],
    problemStatement:
      "Remodeling customers do their homework. If your online presence is incomplete or hard to find, they move on to someone who looks more established — even if your work is better.",
    proofStatement:
      "Remodeling is one of the highest-value home service categories. A single project won from better local visibility can justify months of SEO investment.",
  },
};

/**
 * Returns per-city-per-trade local signals (3 bullets on the brief panel).
 * Falls back to generic trade + city signals if no override.
 */
export function getCityTradeSignals(citySlug, tradeSlug) {
  const city = CITY_META[citySlug];
  const trade = TRADE_META[tradeSlug];
  const comp = city.competitive;

  const competitionLine =
    comp === "high"
      ? `${city.name} is competitive — strong local signals are the difference between ranking and being invisible.`
      : comp === "medium"
        ? `${city.name} has enough competition that a thin profile will cost you calls.`
        : `${city.name} is less saturated — local SEO improvements tend to move faster here than in larger markets.`;

  const tradeLine = {
    hvac: `${trade.urgencyNote}`,
    plumbing: `${trade.urgencyNote}`,
    electrical: `${trade.urgencyNote}`,
    roofing: `${trade.urgencyNote}`,
    landscaping: `Landscaping searches in ${city.name} peak in spring and fall. Businesses with strong local visibility capture a larger share of that seasonal surge.`,
    remodeling: `Remodeling customers in ${city.name} research extensively before calling. Your online presence needs to be complete enough to make that shortlist.`,
  }[tradeSlug];

  const mobileLine = `Most ${trade.noun} searches in ${city.name} happen on mobile — often the moment a problem appears or a project is decided.`;

  return [competitionLine, tradeLine, mobileLine];
}

/**
 * Returns 5 FAQ items for a city + trade combo.
 */
export function getCityTradeFAQs(citySlug, tradeSlug) {
  const city = CITY_META[citySlug];
  const trade = TRADE_META[tradeSlug];

  return [
    {
      question: `Do you only work with ${trade.display} businesses in ${city.name}?`,
      answer: `No. I am based in Siloam Springs and work with home service trades across Northwest Arkansas. ${city.name} is one of the core markets I serve for ${trade.display}.`,
    },
    {
      question: `How long does it take to rank in ${city.name}?`,
      answer: `It depends on your starting point and how competitive ${trade.display} is in ${city.name}. Some improvements move within weeks. Lasting Map Pack presence usually takes consistent monthly work over several months.`,
    },
    {
      question: `Do I need a new website before starting SEO?`,
      answer: `Not always. I start by auditing your full local presence — GBP, service pages, citations, and competitors. Sometimes the fastest wins are off-site. Sometimes the site needs work first. The audit tells us which.`,
    },
    {
      question: `Are there long-term contracts?`,
      answer: `No. I do not lock you into contracts. If the work is not producing results, you should be able to walk away.`,
    },
    {
      question: `What is the first step?`,
      answer: `Run the free audit. You get a clear baseline across eight local SEO sections — then reach out and I can walk through what makes sense for a ${trade.display} business in ${city.name}.`,
    },
  ];
}
