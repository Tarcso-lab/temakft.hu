/**
 * IndexNow-bejelentés.
 *
 * Az élő oldaltérképből kiolvassa az összes címet, és bejelenti őket az
 * IndexNow-t támogató keresőknek. **A Google nem vesz részt az IndexNow-ban**,
 * ott az oldaltérkép `lastmod` mezője és a belső linkelés dolgozik helyettünk.
 *
 * Használat:
 *   node scripts/indexnow.mjs              — minden cím az oldaltérképből
 *   node scripts/indexnow.mjs /tudastar/uj-cikk /rolunk   — csak a megadottak
 *
 * A kulcsot a `public/<kulcs>.txt` fájl teszi ellenőrizhetővé; a fájlnak és a
 * tartalmának meg kell egyeznie a kulccsal.
 *
 * A Bing (és rajta keresztül az `api.indexnow.org`) addig `403
 * UserForbiddedToAccessSite` hibával válaszol, amíg a domain nincs
 * hitelesítve a Bing Webmaster Toolsban — a kulcsfájl önmagában nem elég
 * neki. A Yandex ugyanezt a kulcsot elfogadja. Ezért a szkript több
 * végpontnak is bejelent, és csak akkor jelez hibát, ha egyik sem fogadta el.
 */

const HOST = "temakft.hu";
const KEY = "730faf364e55dcb5a957b43164e404cd";
const ORIGIN = `https://${HOST}`;

/** Az `api.indexnow.org` elvileg továbbítja a többi résztvevőnek is. */
const ENDPOINTS = [
  { name: "api.indexnow.org (Bing, Seznam)", url: "https://api.indexnow.org/indexnow" },
  { name: "Yandex", url: "https://yandex.com/indexnow" },
];

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, {
    headers: { "User-Agent": "temakft-indexnow" },
  });
  if (!res.ok) throw new Error(`Az oldaltérkép nem érhető el: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function submit(endpoint, urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList,
  };

  try {
    const res = await fetch(endpoint.url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    // 200 = elfogadva, 202 = elfogadva, a kulcs ellenőrzése folyamatban.
    if (res.status === 200 || res.status === 202) {
      console.log(`  ${endpoint.name}: elfogadva (HTTP ${res.status})`);
      return true;
    }

    const text = (await res.text().catch(() => "")).trim().slice(0, 200);
    console.warn(`  ${endpoint.name}: elutasítva — HTTP ${res.status} ${text}`);
    return false;
  } catch (err) {
    console.warn(`  ${endpoint.name}: nem elérhető — ${err.message}`);
    return false;
  }
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

  console.log(`IndexNow: ${urlList.length} cím bejelentése.`);

  const results = [];
  for (const endpoint of ENDPOINTS) {
    results.push(await submit(endpoint, urlList));
  }

  if (results.some(Boolean)) {
    return;
  }

  console.error("Egyik végpont sem fogadta el a bejelentést.");
  process.exitCode = 1;
}

main().catch((err) => {
  console.error("IndexNow hiba:", err.message);
  process.exitCode = 1;
});
