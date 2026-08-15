# Hogyan írj új cikket a Tudástárba?

## Röviden

1. Nyisd meg: `src/lib/content/articles.ts`
2. Illessz be egy új objektumot az `articles` tömbbe (sablon lentebb).
3. Mentsd el. Ha fut a dev szerver, a böngésző magától frissül.

Az oldal címe, az URL, a menü, az oldaltérkép (sitemap), a Google felé küldött
strukturált adat és a főoldali cikkajánló **automatikusan** frissül. Nem kell
sehol máshol hozzányúlni semmihez.

Az új cikk URL-je: `temakft.hu/tudastar/<slug>`

---

## Mit hova írj?

| Mező | Kötelező | Mire való |
|---|---|---|
| `slug` | igen | Az URL vége. Csak kisbetű, szám és kötőjel — **ékezet nélkül**. |
| `title` | igen | A cikk H1 címe az oldalon. |
| `metaTitle` | igen | Ami a Google találati listájában és a böngészőfülön látszik. **Max 58 karakter**, a végén ` \| TEMA`. |
| `metaDescription` | igen | A Google-találat alatti leírás. **110–155 karakter**, ennél hosszabbat levág. |
| `keywords` | igen | 3–6 kulcsszó. Ezeknek a szövegben is szerepelniük kell, különben nem érnek semmit. |
| `category` | igen | Kategóriacímke. Ha újat írsz be, magától megjelenik a Tudástár tetején. |
| `readingMinutes` | igen | Becsült olvasási idő percben (kb. 200 szó = 1 perc). |
| `publishedAt` | igen | `"2026-08-20"` formátumban. |
| `updatedAt` | nem | Ha később frissíted a cikket. A Google szereti látni. |
| `excerpt` | igen | 1–2 mondatos felvezető. A listaoldalon és a cikk tetején is ez jelenik meg. |
| `body` | igen | A cikk törzse, blokkokból (lásd alább). |
| `faq` | nem | Gyakori kérdések. **Ezek külön is megjelenhetnek a Google-ben**, ezért érdemes kitölteni. |
| `related` | nem | Kapcsolódó szolgáltatásoldalak URL-jei — belső linkek, SEO szempontból fontos. |

---

## A `body` blokktípusai

```ts
{ type: "h2", text: "Alcím" }                    // fő alcím
{ type: "h3", text: "Kisebb alcím" }             // alárendelt alcím
{ type: "p",  text: "Egy bekezdés szövege." }    // bekezdés

{ type: "ul", items: ["Első pont.", "Második pont."] }   // felsorolás
{ type: "ol", items: ["Első lépés.", "Második lépés."] } // számozott lista

{ type: "callout", title: "Kiemelt doboz címe", text: "A kiemelt tartalom." }

{
  type: "table",
  head: ["Első oszlop", "Második oszlop"],
  rows: [
    ["sor 1 / cella 1", "sor 1 / cella 2"],
    ["sor 2 / cella 1", "sor 2 / cella 2"],
  ],
}
```

---

## Másolható sablon

```ts
  {
    slug: "pelda-cikk-url-reszlete",
    title: "A cikk címe, ahogy az oldalon megjelenik",
    metaTitle: "Rövid cím a Google-nek | TEMA",
    metaDescription:
      "Egy mondat arról, miről szól a cikk és kinek szól. 110 és 155 karakter között tartsd, különben a Google levágja.",
    keywords: [
      "fő kulcsszó",
      "másodlagos kulcsszó",
      "hosszabb keresési kifejezés",
    ],
    category: "Üzemeltetés",
    readingMinutes: 6,
    publishedAt: "2026-08-20",
    excerpt:
      "Egy-két mondatos felvezető, ami elárulja, mit nyer az olvasó a cikkel. Ez jelenik meg a listaoldalon is.",
    body: [
      {
        type: "p",
        text: "Nyitó bekezdés. Érdemes rögtön a problémával kezdeni, amivel az olvasó szembesül — nem a cég bemutatásával.",
      },
      { type: "h2", text: "Első fő szempont" },
      {
        type: "p",
        text: "Kifejtő bekezdés.",
      },
      {
        type: "ul",
        items: [
          "Konkrét, ellenőrizhető állítás.",
          "Még egy.",
        ],
      },
      {
        type: "callout",
        title: "Amit a gyakorlatban látunk",
        text: "Ide jön egy tapasztalati megfigyelés — ez teszi hitelessé a cikket.",
      },
      { type: "h2", text: "Második fő szempont" },
      {
        type: "p",
        text: "További kifejtés.",
      },
    ],
    faq: [
      {
        q: "Egy gyakori kérdés a témában?",
        a: "Rövid, konkrét válasz. Kerüld a marketingszöveget — a Google és az olvasó is a tényszerű választ díjazza.",
      },
    ],
    related: ["/uzemeltetes/karbantartas", "/rendszerek/kamerarendszerek"],
  },
```

---

## Amire figyelj

**Magyar idézőjel.** A szövegen belül a nyitó `„` mellé a **záró `”`** karaktert
használd, ne a sima `"`-t — az utóbbi kettévágja a szöveget, és a build elszáll.
Ha ilyen hibát kapsz, ez az első hely, ahol keresd.

**Aposztróf.** Ugyanez igaz az aposztrófra: a szövegen belül nem gond, de idézőjel
helyett soha ne használd.

**A tömb sorrendje számít.** A `articles.ts` **első** eleme lesz a Tudástár
kiemelt cikke, a főoldalon pedig az első három jelenik meg. Ha egy új cikket ki
akarsz emelni, tedd a tömb elejére.

**A `related` csak létező oldalra mutasson.** Például
`/uzemeltetes/karbantartas` vagy `/projektek/generalkivitelezes`. A cikk alján
ezek automatikusan a helyes névvel jelennek meg.

**Hosszúság.** 800–1500 szó a jó tartomány. Ennél rövidebb nem verseng jól,
hosszabbat pedig ritkán olvasnak végig — inkább bontsd két cikkre.

---

## Ellenőrzés publikálás előtt

```bash
npm run build
```

Ha ez hiba nélkül lefut, a cikk rendben van. Utána a dev szerveren nézd meg:
`http://localhost:3000/tudastar/<slug>`

---

## Ha nem szeretnél kódot szerkeszteni

Ez a megoldás gyors és nem igényel külön rendszert, de fejlesztői felület.
Ha rendszeresen, több ember írna cikket, két irány közül érdemes választani:

- **Markdown-fájlok**: a cikkek `.md` fájlok lennének a projektben, egyszerűbb
  szintaxissal — továbbra is fájlszerkesztés, de kód nélkül.
- **Supabase-alapú admin felület**: bejelentkezés után böngészőből lehetne
  cikket írni és szerkeszteni. Nagyobb munka, de nem igényel fejlesztőt a napi
  használathoz.

Szólj, ha valamelyiket szeretnéd, és megcsinálom.
