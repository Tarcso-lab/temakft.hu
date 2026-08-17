/**
 * IndexNow-bejelentés.
 *
 * Az élő oldaltérképből kiolvassa az összes címet, és bejelenti őket az
 * IndexNow végpontjának. Ezt a Bing, a Yandex és a Naver veszi figyelembe —
 * náluk percek alatt indexelnek. **A Google nem vesz részt az IndexNow-ban**,
 * ott az oldaltérkép `lastmod` mezője és a belső linkelés dolgozik helyettünk.
 *
 * Használat:
 *   node scripts/indexnow.mjs              — minden cím az oldaltérképből
 *   node scripts/indexnow.mjs /tudastar/uj-cikk /rolunk   — csak a megadottak
 *
 * A kulcsot a `public/<kulcs>.txt` fájl teszi ellenőrizhetővé; a fájlnak és a
 * tartalmának meg kell egyeznie a kulccsal.
 */

const HOST = "temakft.hu";
const KEY = "730faf364e55dcb5a957b43164e404cd";
const ORIGIN = `https://${HOST}`;

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, {
    headers: { "User-Agent": "temakft-indexnow" },
  });
  if (!res.ok) throw new Error(`Az oldaltérkép nem érhető el: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `${ORIGIN}${p.startsWith("/") ? p : `/${p}`}`))
    : await urlsFromSitemap();

  if (urlList.length === 0) {
    console.log("Nincs bejelentendő cím.");
    return;
  }

  // Az IndexNow egy kérésben legfeljebb 10 000 címet fogad el — ez bőven elég.
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  // 200 = elfogadva, 202 = elfogadva, a kulcs ellenőrzése folyamatban.
  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow: ${urlList.length} cím bejelentve (HTTP ${res.status}).`);
    return;
  }

  const text = await res.text().catch(() => "");
  console.error(`IndexNow hiba: HTTP ${res.status} ${text}`.trim());
  process.exitCode = 1;
}

main().catch((err) => {
  console.error("IndexNow hiba:", err.message);
  process.exitCode = 1;
});
