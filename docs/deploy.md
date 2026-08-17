# Élesítés és üzemeltetés — Cloudflare Workers

**A weboldal jelenleg élesben van:** [https://temakft.hu](https://temakft.hu),
Cloudflare Workersen. Ez a dokumentum egyrészt leírja, hogyan áll össze a
rendszer, másrészt segít, ha valamit újra kell csinálni vagy hiba lép fel.

> A korábbi változat a Vercel-utat írta le. A Vercel ingyenes csomagja céges
> weboldalra a feltételei szerint nem használható (kereskedelmi felhasználás
> Pro csomagot igényel, ~$20/hó), ezért esett a választás a Cloudflare-re,
> ahol ez a méret elfér az ingyenes keretben.

---

## 1. A rendszer felépítése

| Réteg | Hol van | Megjegyzés |
|---|---|---|
| Domain regisztráció | **Rackhost** | Itt marad, itt hosszabbítod |
| DNS | **Cloudflare** | A névszerverek a Cloudflare-re mutatnak |
| Weboldal | **Cloudflare Workers** | `temakft-hu` nevű Worker |
| Adatbázis | **Supabase** | Frankfurt, `leads` tábla |
| E-mail küldés | **Resend** | `noreply@temakft.hu` feladóval |
| Levelezés (bejövő) | **Rackhost** | MX rekordok, független a weboldaltól |

**Miért nem elég egy sima PHP-s tárhely?** Mert az oldal Node.js-t igényel: az
űrlapok szerveroldalon dolgoznak fel (adatbázisba írás + e-mail küldés), és a
megosztási képek futásidőben generálódnak.

**Hogyan fut a Next.js a Cloudflare-en?** Az `@opennextjs/cloudflare` adapter
fordítja Worker formátumra. A konfiguráció a `wrangler.jsonc` és az
`open-next.config.ts` fájlban van.

---

## 2. Napi használat

**Élesítés:** minden `git push` a `main` ágra automatikusan új építést és
élesítést indít. Az építés 2–4 perc.

```bash
git push origin main
```

**Kézi élesítés a saját gépről** (ritkán kell, a CI megkerülésével):

```bash
npm run cf:deploy
```

Első alkalommal bejelentkeztet a böngészőn keresztül. Figyelj rá, hogy ilyenkor
a **helyi** kódot tölti fel — érdemes előtte mindent commitolni.

**Helyi próba valódi Workers környezetben** (nem a `next dev`, hanem az, ami
élesben is futni fog):

```bash
npm run cf:preview
```

Ez azért hasznos, mert néhány dolog máshogy viselkedik a Workersen, mint a
fejlesztői szerveren.

---

## 3. Környezeti változók — **a leggyakoribb hibaforrás**

A Cloudflare **két külön helyen** tárolja őket, és a kettő nem cserélhető fel.
Ez a projekt élesítésénél a legtöbb időt elvivő probléma volt.

| Hely | Mi kerül ide | Mikor él |
|---|---|---|
| Worker → **Settings → Build** (*Build variables and secrets*) | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **csak az építés idején** |
| Worker → **Settings → Variables and Secrets** | `RESEND_API_KEY`, `IP_HASH_SALT`, `LEAD_EMAIL_FROM`, `LEAD_EMAIL_TO` | **a kérések kiszolgálásakor** |

**Miért ez a felosztás?** A `NEXT_PUBLIC_` előtagú változókat a Next.js
beégeti a lefordított kódba, tehát az építés előtt kell megadni őket — utólag
csak új építéssel jutnak érvényre. A többit a Worker futás közben olvassa,
ezekhez nem kell újraépítés, csak új verzió telepítése.

**Hogyan ismered fel, melyik szekcióban vagy?** Ahol **API token** mezőt látsz
a közelben, az a build-szekció.

**Ellenőrzés egy paranccsal** — ez megmondja, mit lát a futó Worker:

```bash
npx wrangler secret list
```

Ha üres listát ad, a futásidejű változók hiányoznak. Beállításuk:

```bash
npx wrangler secret put RESEND_API_KEY
```

A parancs bekéri az értéket. Ugyanígy a többi háromnál. A `.env.local` fájlból
másolható minden, **két kivétellel**: az `IP_HASH_SALT`-nak élesben egyedi
értéket kell adni (a fejlesztőit ne használd), a `LEAD_EMAIL_FROM` pedig
`TEMA weboldal <noreply@temakft.hu>`.

A `SUPABASE_SERVICE_ROLE_KEY` **nem kell.** Az adatbázison olyan szabály van,
ami a publikus kulccsal is engedi a beszúrást (de az olvasást nem).

---

## 4. Az előre legenerált oldalak gyorsítótára

Az 51 tartalmi oldal építéskor előre elkészül. Ezek **nem** a statikus fájlok
közé kerülnek, hanem egy külön inkrementális gyorsítótárba, amit be kell kötni
— ez az `open-next.config.ts` fájlban történik:

```ts
incrementalCache: staticAssetsIncrementalCache
```

**Enélkül élesben az oldalak nagy része nem érhető el**, miközben helyben
minden működik (a helyi gépen van fájlrendszer, a Cloudflare-en nincs). Ez a
hiba egyszer már előfordult, ezért szerepel itt külön.

---

## 5. Ha a domaint újra kellene kötni

### 5.1 Előkészítés — a levelezés a tét

Amint a névszerverek a Cloudflare-re mutatnak, a Rackhost DNS-zónája
érvényét veszti. Ami nincs átvezetve, az leáll — a legveszélyesebb az e-mail.

**Ezeknek a rekordoknak mind meg kell lenniük a Cloudflare zónájában, még a
névszerver-váltás előtt:**

| Hosztnév | Típus | Mire való |
|---|---|---|
| `temakft.hu` | MX (10, 20) | Bejövő levelezés (Rackhost) |
| `temakft.hu` | TXT | SPF |
| `temakft.hu` | TXT | Apple-domain-hitelesítés |
| `_dmarc` | TXT | DMARC szabály |
| `resend._domainkey` | TXT | Resend DKIM — enélkül nem megy ki űrlap-értesítés |
| `k2._domainkey`, `k3._domainkey` | CNAME | Mailchimp DKIM |
| `send` | MX + TXT | A Resend visszaútja (Amazon SES) |

A Cloudflare a zóna hozzáadásakor beolvassa a meglévő rekordokat, de **a
DKIM-eket gyakran kihagyja** — tételesen vesd össze a két listát.

### 5.2 Névszerver-váltás a Rackhostnál

A Rackhostnál nem „törölni" kell a névszervereket, hanem **lecserélni**. Az
ügyfélkapun a domain adatlapján keresd a névszerver-módosítást. Ha nem
találod, egy ügyfélszolgálati levél elég — rutinkérés.

A jelenlegi névszerverek: `chuck.ns.cloudflare.com`, `mckinley.ns.cloudflare.com`
(a sajátodat mindig a Cloudflare felületéről másold).

### 5.3 A domain rákötése a Workerre

A Worker oldalán: **Domains & Routes → Add Custom Domain** → `temakft.hu`.

Ha ezt a hibát kapod:

> *Hostname 'temakft.hu' already has externally managed DNS records*

…akkor a Cloudflare **DNS** fülén előbb törölni kell az adott hosztnévhez
tartozó `A` vagy `CNAME` rekordot. **Csak azt** — a TXT és MX rekordokhoz ne
nyúlj. A Cloudflare ezután magától létrehozza a saját rekordját és kiállítja a
tanúsítványt.

### 5.4 A `www` átirányítása

A weboldal kanonikus címe **www nélküli**. A www-s változatot 301-gyel
irányítjuk át. Ez **nem az alkalmazásban** van megoldva, és ez szándékos:

- a `next.config.ts` `redirects()` gazdanév-feltétele a Workers környezetben
  nem lép működésbe;
- a `proxy.ts` (a Next.js 16-ban átnevezett middleware) Node.js
  futtatókörnyezetet igényel, amit az OpenNext nem támogat;
- a Workers `_redirects` fájlja nem tud gazdanév szerint illeszteni.

Ezért a Cloudflare zóna szintjén készül, ami amúgy is kedvezőbb: le sem
futtatja a Workert.

**1. DNS-rekord** — `AAAA`, név `www`, tartalom `100::`, **Proxied**.
Ez egy szándékosan „üres" cím; csak arra kell, hogy a kérés a Cloudflare-ig
eljusson.

**2. Rules → Redirect Rules**, a szabály tartalma:

| Mező | Érték |
|---|---|
| Feltétel | `(http.host eq "www.temakft.hu")` |
| Művelet | URL redirect, típus **Dynamic** |
| Célcím | `concat("https://temakft.hu", http.request.uri.path)` |
| Státusz | 301 |
| Query string | megőrizve |

> **Figyelem, könnyű elrontani:** a felületen a feltétel mezőjében a
> *Hostname* mezőt kell választani, nem az *URI Path*-t. Ha az útvonalat
> hasonlítod a hosztnévhez, a feltétel soha nem teljesül, a kérés a `100::`
> címre fut, és **522-es hibát** kapsz.

---

## 6. Ellenőrzés élesítés után

- [ ] `https://temakft.hu` betölt, lakat ikon látszik
- [ ] `https://www.temakft.hu` átirányít a www nélküli címre — **aloldallal is
      próbáld**, nem csak a főoldallal
- [ ] `https://temakft.hu/sitemap.xml` és `/robots.txt` elérhető
- [ ] A képek megjelennek
- [ ] **Küldj egy próba-ajánlatkérést**, és nézd meg, megérkezik-e az e-mail

Az utolsó pont ellenőrzi egyszerre a Supabase- és a Resend-beállítást.

---

## 7. Hibakeresés

### Nem érkezik e-mail az űrlapokról

A megkeresés ilyenkor is elmentődik — a kód szándékosan csak akkor jelez hibát
a látogatónak, ha sem a mentés, sem az értesítés nem sikerült. **A hiba okát a
Supabase `leads` táblájának `email_error` oszlopában találod** (Table Editor,
legfelső sor).

| Amit ott látsz | Mit jelent |
|---|---|
| `RESEND_API_KEY nincs beállítva` | A kulcs nem a futásidejű szekcióban van — lásd a 3. pontot |
| „You can only send testing emails to your own email address" | A feladó még `onboarding@resend.dev`; állítsd `noreply@temakft.hu`-ra |
| Domain- vagy jogosultsági hiba | A Resendben a `temakft.hu` hitelesítése vagy a kulcs domain-korlátozása a gond |
| üres, és `email_sent` igaz | Kiment. Nézd meg a spam mappát is |

### Az oldalak nagy része nem érhető el élesben

Az inkrementális gyorsítótár nincs bekötve — lásd a 4. pontot.

### A weboldal nem jön be, de a szerver válaszol

Valószínűleg a saját géped DNS-gyorsítótára őriz egy régi bejegyzést:

```bash
ipconfig /flushdns
```

Chrome-ban a `chrome://net-internals/#dns` oldalon a **Clear host cache** gomb.

---

## 8. Költségek

| Tétel | Havidíj |
|---|---|
| Cloudflare Workers | 0 Ft ezen a méreten |
| Supabase | 0 Ft ezen a méreten |
| Resend | 0 Ft (napi 100 levélig) |
| Domain (Rackhost) | a szokásos éves díj |

A Worker feltöltési mérete jelenleg **2,3 MB tömörítve**, az ingyenes csomag
korlátja 3 MB. Ha ez szűkössé válna, a legnagyobb tartalék a képek további
optimalizálásában van — bár azok a statikus fájlok közé kerülnek, nem a
Worker kódjába.
