export const locations = [
  {
    slug: "siloam-springs",
    city: "Siloam Springs",
    state: "AR",
    region: "NWA",
    desc: "Our home base. We know Siloam Springs inside and out — the local contractors, the competition, and exactly what it takes to rank here.",
    population: "17,000",
    nearby: ["Bentonville", "Rogers", "Fayetteville"],
  },
  {
    slug: "bentonville",
    city: "Bentonville",
    state: "AR",
    region: "NWA",
    desc: "The fastest-growing city in Arkansas. Bentonville contractors face stiff competition — we help you stand out where it counts.",
    population: "60,000",
    nearby: ["Rogers", "Siloam Springs", "Springdale"],
  },
  {
    slug: "rogers",
    city: "Rogers",
    state: "AR",
    region: "NWA",
    desc: "Rogers is booming and so is the competition for local contractors. We help you get found before your competitors do.",
    population: "70,000",
    nearby: ["Bentonville", "Springdale", "Fayetteville"],
  },
  {
    slug: "springdale",
    city: "Springdale",
    state: "AR",
    region: "NWA",
    desc: "One of the largest cities in NWA and a hub for local contractors. We help Springdale businesses dominate local search.",
    population: "85,000",
    nearby: ["Fayetteville", "Rogers", "Bentonville"],
  },
  {
    slug: "fayetteville",
    city: "Fayetteville",
    state: "AR",
    region: "NWA",
    desc: "Home to the University of Arkansas and one of the most competitive local markets in the state. We help contractors rise above the noise.",
    population: "100,000",
    nearby: ["Springdale", "Rogers", "Fort Smith"],
  },
  {
    slug: "fort-smith",
    city: "Fort Smith",
    state: "AR",
    region: "Western Arkansas",
    desc: "The second-largest city in Arkansas with a growing contractor market. We bring the same NWA expertise to Fort Smith businesses.",
    population: "90,000",
    nearby: ["Fayetteville", "Springdale", "Rogers"],
  },
];

export function getLocation(slug) {
  return locations.find((l) => l.slug === slug);
}