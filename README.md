# TEMA Menedzsment Kft. — weboldal

Next.js 16 (App Router) + Tailwind CSS 4 + Supabase + Resend.

---

## 1. Indítás

```bash
npm run dev
```

A weboldal a http://localhost:3000 címen érhető el. Éles build:

```bash
npm run build
```

---

## 2. Amit még ki kell tölteni

### 2.1 Cégadatok — `src/lib/site.ts`

Ez az egyetlen hely, ahol a cégadatokat meg kell adni. Innen olvassa be a lábléc, a
kapcsolat oldal, az ÁSZF, az adatkezelési tájékoztató és a Google felé küldött
strukturált adat (JSON-LD) is. A `TODO:` megjegyzéssel jelölt mezők:

- telefonszám (`phone` és `phoneHref` — utóbbi szóköz nélkül, pl. `tel:+36301234567`)
- e-mail cím
- székhely
- adószám, cégjegyzékszám
- LinkedIn / Facebook oldal (ha nincs, hagyd üresen — akkor nem jelenik meg)

### 2.2 E-mail értesítés — `.env.local`

Az űrlapok **már most rögzülnek** a Supabase adatbázisban, de az értesítő e-mail
küldéséhez egy Resend API kulcs kell:

1. Regisztrálj a https://resend.com oldalon (ingyenes csomag: 3000 e-mail/hó).
2. **API Keys → Create API Key**, majd másold a kulcsot a `.env.local` fájl
   `RESEND_API_KEY=` sorába.
3. Indítsd újra a fejlesztői szervert.

**Fontos:** a Resendbe a `tamaskoncsik9@gmail.com` címmel regisztrálj. Saját
domain hitelesítése nélkül a Resend csak a regisztrációs címre enged levelet
küldeni — így viszont azonnal működik, DNS-beállítás nélkül.

**Ellenőrzés:**

```bash
powershell -ExecutionPolicy Bypass -File .\docs\resend-teszt.ps1
```

Ez küld egy próbalevelet, és hiba esetén megmondja, mi a baj.

Amíg nincs kulcs, a beküldés működik és mentődik, csak e-mail nem megy ki (ezt a
`leads` tábla `email_sent` és `email_error` oszlopa is jelzi).

**Saját domainről küldés:** a Resendben a **Domains** menüben add hozzá a
`temakft.hu` domaint, állítsd be a kapott DNS rekordokat, majd írd át:

```
LEAD_EMAIL_FROM=TEMA weboldal <noreply@temakft.hu>
```

Addig a `onboarding@resend.dev` feladó működik, de a levél könnyebben a spam
mappába kerülhet.

### 2.3 Jogi szövegek

A `/aszf`, `/garancialis-feltetelek` és `/adatkezelesi-tajekoztato` oldalak
**szerkesztésre kész tervezetek**, amelyek jogi felülvizsgálatot igényelnek. A
szögletes zárójeles értékeket (`[12] hónap`, `[15] nap`, dátumok) a tényleges
gyakorlatra kell cserélni. Az oldalak tetején addig figyelmeztető sáv látszik —
ezt a `reviewNote={false}` beállítással lehet eltüntetni az adott oldalon.

### 2.4 Fényképek

A `public/images/` mappában **34 szemléltető kép** van (AI-val generált,
egységes stílusú illusztrációk). Ezek **nem a cég saját referenciafotói** — a
kódban mindenhol így is vannak jelölve. Amint lesznek valódi helyszíni fotók,
ezekre kell cserélni őket: elég a fájlt felülírni ugyanazon a néven, vagy a
`src` értéket átírni az alábbi három helyen:

| Hol | Fájl |
|---|---|
| Szolgáltatásoldalak | `src/components/templates/ServicePageView.tsx` → `pageImages` |
| Hub oldalak | `src/components/templates/HubPageView.tsx` → `hubImages` |
| Megoldásoldalak | `src/app/megoldasok/[slug]/page.tsx` → `segmentImages` |

A Tudástár cikkeihez **szándékosan nincs kép** — a cikkoldalak szövegre
optimalizáltak.

Kép nélkül maradt oldal: `/projektek/atadas-uzembe-helyezes`.

A képek `next/image`-dzsel jelennek meg, tehát a Next.js automatikusan
átméretezi és WebP/AVIF formátumra konvertálja őket kiszolgáláskor — a nagy
PNG-forrásfájlok emiatt nem lassítják az oldalt.

---

## 3. Az űrlapok

| Űrlap | Hol található | `form_type` |
|---|---|---|
| Részletes, 4 lépéses ajánlatkérő | `/ajanlatkeres` | `ajanlatkeres` |
| Kapcsolatfelvétel | `/kapcsolat`, minden CTA-sáv | `kapcsolat` |
| Gyors visszahívás (név + telefon) | főoldal, cikkoldalak oldalsávja | `visszahivas` |
| Díjmentes helyszíni felmérés | üzemeltetési és rendszeroldalak | `felmeres` |
| Hibabejelentés | hibaelhárítás oldal | `hibabejelentes` |

Minden beküldés a `public.leads` táblába kerül, és e-mailt küld a
`LEAD_EMAIL_TO` címre (alapértelmezetten `tamaskoncsik9@gmail.com`).

**Spamvédelem:** rejtett csapdamező (honeypot), 2 másodperces minimum kitöltési
idő, és IP-alapú sebességkorlát (10 percenként 5 beküldés).

### Beérkezett megkeresések megtekintése

Supabase Dashboard → **Table Editor** → `leads` tábla. A `status` oszloppal
követhető az ügymenet: `uj` → `folyamatban` → `ajanlat_kiadva` → `megnyert` /
`elveszett`.

---

## 4. Adatbázis

Supabase projekt: **TEMA Menedzsment** (`lckevvhawyieiegghsgl`, eu-central-1 /
Frankfurt).

Táblák: `leads`, `subscribers`.

**Biztonság:** mindkét táblán be van kapcsolva a sorszintű biztonság (RLS), és
kizárólag BESZÚRÁS engedélyezett a publikus kulccsal. Olvasni, módosítani és
törölni csak a Supabase felületről vagy a service role kulccsal lehet — a
beérkezett megkereséseket tehát a böngészőből senki nem tudja lekérdezni.

Opcionálisan megadható a `SUPABASE_SERVICE_ROLE_KEY` (Dashboard → Project
Settings → API). Ha be van állítva, a szerver ezt használja.

---

## 5. Tartalom szerkesztése

A weboldal szövegei adatfájlokban vannak, nem a komponensekben — így új oldal
felvételéhez nem kell React-et írni:

```
src/lib/content/
  uzemeltetes.ts            Üzemeltetés aloldalai
  tervezes-kivitelezes.ts   Tervezés és kivitelezés aloldalai
  rendszerek.ts             Rendszereink aloldalai
  projektek.ts              Projektek aloldalai
  segments.ts               Célcsoport-oldalak (/megoldasok/...)
  articles.ts               Tudástár cikkek
```

Egy új szolgáltatásoldal = egy új objektum a megfelelő tömbben. Az útvonal, a
menü, az oldaltérkép (sitemap) és a belső linkek automatikusan frissülnek.

**Új cikk a Tudástárba:** lépésről lépésre, másolható sablonnal →
[docs/uj-cikk.md](docs/uj-cikk.md)

**Fontos:** a magyar idézőjelnél a nyitó `„` mellé a záró `”` karaktert kell
használni (nem a sima `"`-t), különben a TypeScript-szöveg elhasad.

---

## 6. SEO

- Minden oldalnak egyedi `title`, `description`, kanonikus URL és OG-képe van
  (a `/og` útvonal generálja dinamikusan).
- Strukturált adatok: `Organization` + `LocalBusiness`, `Service`, `FAQPage`,
  `Article`, `BreadcrumbList`.
- `sitemap.xml` és `robots.txt` automatikusan generálódik a tartalomból.
- A tartalom kulcsszókutatás alapján, kereséstípus szerint van szétosztva:
  - **szolgáltatás-kulcsszavak** → szolgáltatásoldalak (pl. „gyengeáramú rendszerek üzemeltetése”),
  - **épülettípus + igény** → megoldásoldalak (pl. „irodaház üzemeltetés”),
  - **információs keresés** → Tudástár (pl. „érintésvédelmi felülvizsgálat gyakorisága”).

### Élesítés előtt

1. `site.url` ellenőrzése a `src/lib/site.ts` fájlban (jelenleg `https://temakft.hu`).
2. Google Search Console: tulajdon hitelesítése, `sitemap.xml` beküldése.
3. Google Cégprofil (Business Profile) létrehozása — a helyi keresésekhez ez a
   legnagyobb hatású lépés, a weboldal szövegén kívül.

---

## 7. Márkaarculat

**Színek** (`src/app/globals.css`):

| Szerep | Érték |
|---|---|
| Alap sötét | `#0b100d` (ink-900) |
| Jelzőzöld akcentus | `#a8e10c` (signal-400) |
| Zöld szöveghez világos háttéren | `#6d9407` (signal-600) |

A munkaruha neon zöld–fekete párosából származik, de a neon csak akcentusként
(gomb, kiemelés, aktív állapot) jelenik meg, hogy a megjelenés professzionális
maradjon.

**Logó:** hatszög keretben egy geometrikus „T”, amelynek szárát átlós rés —
szikraköz — vágja ketté. Egyszínű, zárt kontúrú, ezért hímzéssel,
szitanyomással és vágott fóliával is reprodukálható.

```
public/brand/
  tema-logo-mark.svg           jel, kétszínű
  tema-logo-mark-mono.svg      jel, egyszínű — ezt add a munkaruha-készítőnek
  tema-logo-full-dark-bg.svg   teljes logó felirattal, sötét háttérre
```
