import { chromium } from 'playwright';
const browser = await chromium.launch();
const sizes = [
  { name: 'desktop-1440', w: 1440, h: 900 },
  { name: 'desktop-1280', w: 1280, h: 800 },
  { name: 'tablet-820', w: 820, h: 1180 },
  { name: 'mobile-390', w: 390, h: 844 },
];
for (const s of sizes) {
  const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:3001/service-areas/rogers-ar', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `/Users/chadsmith/local-search-ally/.audit-screenshots/${s.name}-hero.png`, fullPage: false });
  await page.screenshot({ path: `/Users/chadsmith/local-search-ally/.audit-screenshots/${s.name}-full.png`, fullPage: true });
  await ctx.close();
}
await browser.close();
console.log('done');
