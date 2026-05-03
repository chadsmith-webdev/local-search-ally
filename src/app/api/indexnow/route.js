import { siteConfig } from "@/lib/metadata";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_API = "https://api.indexnow.org/indexnow";

export async function POST(request) {
  if (!INDEXNOW_KEY) {
    return new Response("Missing INDEXNOW_KEY", { status: 500 });
  }

  let payload;
  try {
    const body = await request.json();
    const urlList = Array.isArray(body?.urlList)
      ? body.urlList
      : body?.urls || [`${siteConfig.url}/sitemap.xml`];

    payload = {
      host: new URL(siteConfig.url).host,
      key: INDEXNOW_KEY,
      keyLocation: `${siteConfig.url}/indexnow-${INDEXNOW_KEY}.txt`,
      urlList,
    };
  } catch (error) {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const response = await fetch(INDEXNOW_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  return new Response(text, {
    status: response.status,
    headers: { "content-type": "text/plain" },
  });
}
