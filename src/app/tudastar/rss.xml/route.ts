import { articles } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * RSS-csatorna a tudástárhoz.
 *
 * Miért van rá szükség, ha van oldaltérkép? Mert a hírcsatornát a keresők és az
 * AI-robotok gyakrabban és célzottabban kérdezik le, mint a teljes
 * oldaltérképet — új cikknél ez a leggyorsabb felfedezési út. A Google
 * kiegészítő oldaltérképként is elfogadja, tehát a Search Console-ba is
 * beküldhető.
 */
export const dynamic = "force-static";

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.updatedAt ?? b.publishedAt).getTime() -
      new Date(a.updatedAt ?? a.publishedAt).getTime(),
  );

  const lastBuild = sorted[0]
    ? new Date(sorted[0].updatedAt ?? sorted[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const items = sorted
    .map((article) => {
      const link = `${site.url}/tudastar/${article.slug}`;
      return `    <item>
      <title>${esc(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(article.excerpt)}</description>
      <category>${esc(article.category)}</category>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} — Tudástár</title>
    <link>${site.url}/tudastar</link>
    <description>Gyakorlati útmutatók épületüzemeltetőknek, ingatlankezelőknek és beruházóknak.</description>
    <language>hu-HU</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${site.url}/tudastar/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
