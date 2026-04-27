const baseStyles = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: #f8f9fa;
  background: #0a0a0a;
  margin: 0;
  padding: 0;
`;

const wrapperStyles = `
  background: #0a0a0a;
  padding: 40px 0;
  min-height: 100%;
`;

const innerStyles = `
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 32px;
  background: #0a0a0a;
`;

const logoStyles = `
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

const logoTextStyles = `
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const pStyles = `
  color: #f8f9fa;
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 20px;
`;

const mutedPStyles = `
  color: #a0a0a0;
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 20px;
`;

const linkStyles = `color: #7bafd4; text-decoration: underline;`;

const dividerStyles = `
  border: none;
  border-top: 1px solid rgba(255,255,255,0.08);
  margin: 32px 0;
`;

const footerStyles = `
  color: #6c757d;
  font-size: 13px;
  line-height: 1.6;
  margin-top: 40px;
`;

const buttonStyles = `
  display: inline-block;
  background: linear-gradient(135deg, #7bafd4 0%, #3a5570 100%);
  color: #0a0a0a;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
  margin: 8px 0 24px;
`;

const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="28" height="28" style="flex-shrink:0">
  <defs>
    <linearGradient id="ng" x1="0" x2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="white" stop-opacity="0.5"/>
      <stop offset="0.45" stop-color="white" stop-opacity="1"/>
      <stop offset="1" stop-color="white" stop-opacity="0.35"/>
    </linearGradient>
    <clipPath id="bc"><circle cx="50" cy="33" r="20"/></clipPath>
  </defs>
  <polygon points="48,52 52,52 50,93" fill="url(#ng)"/>
  <circle cx="50" cy="33" r="20" fill="#7bafd4"/>
  <g clip-path="url(#bc)">
    <circle cx="46" cy="28" r="10" fill="white" opacity="0.88"/>
    <circle cx="49.5" cy="30.5" r="10.1" fill="#7bafd4"/>
  </g>
</svg>`;

function logoBlock() {
  return `
    <div style="${logoStyles}">
      ${logoSvg}
      <span style="${logoTextStyles}">
        <span style="color:#f8f9fa">Local Search</span><span style="color:#7bafd4"> Ally</span>
      </span>
    </div>
  `;
}

function footer(includeUnsubscribe = false) {
  return `
    <hr style="${dividerStyles}" />
    <div style="${footerStyles}">
      <p style="margin:0 0 6px">Chad Smith &middot; Local Search Ally &middot; <a href="https://localsearchally.com" style="${linkStyles}">localsearchally.com</a></p>
      <p style="margin:0 0 6px"><a href="tel:+14793808626" style="color:#6c757d">(479) 380-8626</a></p>
      ${includeUnsubscribe ? `<p style="margin:12px 0 0">You're receiving this because you downloaded the GBP Checklist for Home Services at localsearchally.com. <a href="{{unsubscribe_url}}" style="color:#6c757d">Unsubscribe</a></p>` : ''}
    </div>
  `;
}

export function email1Html(firstName) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your GBP Checklist</title>
</head>
<body style="${baseStyles}">
  <div style="${wrapperStyles}">
    <div style="${innerStyles}">
      ${logoBlock()}

      <p style="${pStyles}">Hi ${firstName},</p>
      <p style="${pStyles}">Here it is.</p>

      <a href="https://localsearchally.com/downloads/gbp-checklist.pdf" style="${buttonStyles}">Download Your GBP Checklist &rarr;</a>

      <p style="${pStyles}">It's 7 sections, 44 items. You can run through it in about 20 minutes.</p>
      <p style="${pStyles}">A few things worth knowing before you start:</p>

      <p style="${pStyles}"><strong style="color:#f8f9fa">Section 1 is the one that matters most.</strong> Profile foundation issues &mdash; address setup, category selection, business name &mdash; are the reason a lot of contractors rank nowhere even when everything else looks fine. Start there.</p>

      <p style="${pStyles}"><strong style="color:#f8f9fa">Section 4 (Reviews) is the long game.</strong> The businesses showing up in the top 3 Map Pack results average 240 reviews. You don't build that in a week, but you don't build it at all if you're not asking.</p>

      <p style="${pStyles}"><strong style="color:#f8f9fa">Section 7 is the one people skip entirely.</strong> Google suspensions are more common than most contractors realize, and you only get one appeal. The prep takes 20 minutes. It's worth it.</p>

      <p style="${pStyles}">Go through it, circle what's missing, and fix the circled ones in order of which section they're in.</p>

      <p style="${pStyles}">If anything in there raises a question, reply to this email. I read every one.</p>

      <p style="${pStyles}">&mdash; Chad<br />Local Search Ally<br /><a href="https://localsearchally.com" style="${linkStyles}">localsearchally.com</a></p>

      ${footer()}
    </div>
  </div>
</body>
</html>`;
}

export function email2Html(firstName) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The GBP fix most contractors haven't done</title>
</head>
<body style="${baseStyles}">
  <div style="${wrapperStyles}">
    <div style="${innerStyles}">
      ${logoBlock()}

      <p style="${pStyles}">Hi ${firstName},</p>

      <p style="${pStyles}">If you've had a chance to go through the checklist, you've probably hit Section 2 &mdash; Services.</p>

      <p style="${pStyles}">This one is worth spending a few extra minutes on.</p>

      <p style="${pStyles}">Most contractors pick a category (&ldquo;Plumbing&rdquo;) and move on. That's leaving calls on the table.</p>

      <p style="${pStyles}">Here's why: AI Overviews and voice search don't match people to categories. They match people to specific problems.</p>

      <p style="${mutedPStyles}">When someone says &ldquo;Hey Google, who can fix my water heater in Fayetteville tonight,&rdquo; Google is looking for a profile that specifically lists emergency water heater repair &mdash; not just &ldquo;plumbing.&rdquo;</p>

      <p style="${pStyles}">The fix is simple:</p>

      <p style="${pStyles}">Go into your GBP dashboard &rarr; Services &rarr; Add each specific service you actually offer. Write the names the way a stressed homeowner would type them at 11pm. &ldquo;Emergency AC Repair.&rdquo; &ldquo;Clogged Drain.&rdquo; &ldquo;Roof Leak Repair.&rdquo;</p>

      <p style="${pStyles}">Then fill in the description fields. 1&ndash;3 sentences. What's the problem, what do you do about it, and where do you serve.</p>

      <p style="${pStyles}">That's it. Takes 10&ndash;15 minutes. Most of your competitors haven't done it.</p>

      <p style="${pStyles}">&mdash; Chad</p>

      <p style="${mutedPStyles}">P.S. &mdash; If you want me to pull a quick look at your profile and tell you what's actually missing, that's what the free audit is for. No pitch involved. &rarr; <a href="https://localsearchally.com" style="${linkStyles}">localsearchally.com</a></p>

      ${footer()}
    </div>
  </div>
</body>
</html>`;
}

export function email3Html(firstName) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The HVAC company that was invisible</title>
</head>
<body style="${baseStyles}">
  <div style="${wrapperStyles}">
    <div style="${innerStyles}">
      ${logoBlock()}

      <p style="${pStyles}">Hi ${firstName},</p>

      <p style="${pStyles}">I want to tell you about a call I had a few months back.</p>

      <p style="${pStyles}">I pulled an audit on a local HVAC company &mdash; been in business for years, solid reviews from the customers they had, good reputation around town. But their GBP was a wreck. Address showing when it shouldn't have been. Service list was basically just &ldquo;HVAC.&rdquo; Zero posts. Photos hadn't been updated in over a year.</p>

      <p style="${pStyles}">When I looked at where they ranked for basic searches &mdash; &ldquo;AC repair [city],&rdquo; &ldquo;furnace tune-up [city]&rdquo; &mdash; they were buried. Competitors with half their experience were showing up first.</p>

      <p style="${pStyles}">The work wasn't the problem. The visibility was.</p>

      <p style="${mutedPStyles}">That's the thing about local search in 2026. Google doesn't know how good you are at your trade. It only knows what your profile tells it. So if your profile is thin, vague, or out of date, Google defaults to whoever did a better job filling theirs out.</p>

      <p style="${pStyles}">It's not fair. But it's how it works.</p>

      <p style="${pStyles}">The checklist I sent you covers the parts of your profile that Google actually reads when deciding who to show. If you haven't had a chance to go through it, it's worth 20 minutes.</p>

      <p style="${pStyles}">And if you want a second set of eyes on your profile specifically &mdash; where you're ranking now, what's pulling you down, what would actually move things &mdash; that's what the free audit is for.</p>

      <p style="${pStyles}">No contract. No pitch. Just an honest look at what's happening and what I'd do about it.</p>

      <p style="${pStyles}">&rarr; <a href="https://localsearchally.com" style="${linkStyles}">localsearchally.com</a></p>

      <p style="${pStyles}">&mdash; Chad</p>

      ${footer()}
    </div>
  </div>
</body>
</html>`;
}

export function email4Html(firstName) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Last thing I'll send you about this</title>
</head>
<body style="${baseStyles}">
  <div style="${wrapperStyles}">
    <div style="${innerStyles}">
      ${logoBlock()}

      <p style="${pStyles}">Hi ${firstName},</p>

      <p style="${pStyles}">Last email about the GBP checklist &mdash; I don't want to be in your inbox every day.</p>

      <p style="${pStyles}">Quick summary of what I've shared:</p>

      <ol style="color:#f8f9fa; font-size:16px; line-height:1.7; margin:0 0 20px; padding-left:24px;">
        <li style="margin-bottom:8px">The checklist (44 items, 7 sections &mdash; if you haven't gone through it, it's still in Email 1)</li>
        <li style="margin-bottom:8px">The service list fix that most contractors skip</li>
        <li style="margin-bottom:8px">Why good work alone doesn't get you ranked</li>
      </ol>

      <p style="${pStyles}">If you've gone through the checklist and found gaps, or if you're not sure whether your profile is actually doing its job, the next logical step is a free audit.</p>

      <p style="${pStyles}">Here's what that looks like:</p>

      <p style="${mutedPStyles}">I pull your current rankings, look at your GBP against your top local competitors, check your citation consistency, and give you a plain-English summary of what's hurting you and what I'd fix first. Takes about 30 minutes on a call.</p>

      <p style="${pStyles}">No sales pitch at the end. If there's nothing I can help you with, I'll say so.</p>

      <p style="${pStyles}">If you want one: &rarr; <a href="https://localsearchally.com" style="${linkStyles}">localsearchally.com</a></p>

      <p style="${pStyles}">If you don't, no hard feelings. Keep the checklist. Use it.</p>

      <p style="${pStyles}">&mdash; Chad<br />Local Search Ally &middot; <a href="tel:+14793808626" style="${linkStyles}">(479) 380-8626</a><br /><a href="https://localsearchally.com" style="${linkStyles}">localsearchally.com</a></p>

      ${footer(true)}
    </div>
  </div>
</body>
</html>`;
}
