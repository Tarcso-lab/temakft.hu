import type { Metadata } from "next";
import { LegalPageView } from "@/components/templates/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import type { ContentBlock } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Adatkezelési tájékoztató",
  description:
    "Tájékoztató a temakft.hu űrlapjain megadott személyes adatok kezeléséről: cél, jogalap, megőrzési idő, adatfeldolgozók és az érintetti jogok.",
  path: "/adatkezelesi-tajekoztato",
});

const blocks: ContentBlock[] = [
  { type: "h2", text: "1. Az adatkezelő" },
  {
    type: "p",
    text: `Az adatkezelő a ${site.legalName} (cégjegyzékszám: ${site.contact.companyNumber}; adószám: ${site.contact.taxNumber}; e-mail: ${site.contact.email}; telefon: ${site.contact.phone}).`,
  },
  {
    type: "p",
    text: "A jelen tájékoztató a temakft.hu weboldalon keresztül megadott személyes adatok kezelésére vonatkozik, az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR) és a vonatkozó magyar jogszabályok alapján.",
  },

  { type: "h2", text: "2. A kezelt adatok köre és az adatkezelés célja" },
  {
    type: "table",
    head: ["Adatkezelési cél", "Kezelt adatok", "Jogalap"],
    rows: [
      [
        "Kapcsolatfelvétel, megkeresés megválaszolása",
        "Név, e-mail cím, telefonszám, cég neve, az üzenet tartalma",
        "Az érintett hozzájárulása (GDPR 6. cikk (1) a))",
      ],
      [
        "Árajánlat készítése, szerződéskötés előkészítése",
        "A fentiek, valamint az ingatlanra és az igényre vonatkozó adatok (típus, helyszín, méret, érintett rendszerek, határidő, költségkeret)",
        "Szerződés megkötését megelőző lépések (GDPR 6. cikk (1) b))",
      ],
      [
        "Hibabejelentés fogadása és kezelése",
        "Név, telefonszám, helyszín, a hiba leírása",
        "Szerződés teljesítése, illetve hozzájárulás",
      ],
      [
        "Visszaélésszerű beküldések kiszűrése, a szolgáltatás biztonsága",
        "IP-cím sózott, visszafejthetetlen lenyomata, böngésző-azonosító (user agent), a beküldés időpontja",
        "Az adatkezelő jogos érdeke (GDPR 6. cikk (1) f))",
      ],
      [
        "Szakmai hírlevél küldése (külön jelölés esetén)",
        "Név, e-mail cím",
        "Az érintett külön hozzájárulása",
      ],
    ],
  },
  {
    type: "p",
    text: "A weboldal űrlapjain a kötelezően megadandó adatok körét minden esetben jelöljük. Kérjük, az űrlapokon ne adjon meg olyan személyes adatot, amelyre a megkeresés megválaszolásához nincs szükség — különösen ne adjon meg egészségügyi vagy más különleges adatot.",
  },

  { type: "h2", text: "3. Az adatkezelés időtartama" },
  {
    type: "ul",
    items: [
      "Megkeresés, ajánlatkérés esetén: a megkeresés lezárásától számított [24] hónapig, hogy egy későbbi kapcsolatfelvételnél az előzmények elérhetők legyenek.",
      "Szerződés létrejötte esetén: a szerződéses jogviszony megszűnését követően a jogszabályi megőrzési kötelezettségek szerinti ideig.",
      "Számviteli bizonylatokhoz kapcsolódó adatok esetén: a számvitelről szóló törvény szerint 8 évig.",
      "Biztonsági célú technikai adatok (IP-lenyomat, user agent) esetén: [12] hónapig.",
      "Hírlevél esetén: a hozzájárulás visszavonásáig.",
    ],
  },
  {
    type: "p",
    text: "A hozzájáruláson alapuló adatkezelés esetén az érintett a hozzájárulását bármikor, indokolás nélkül visszavonhatja. A visszavonás nem érinti a visszavonás előtti adatkezelés jogszerűségét.",
  },

  { type: "h2", text: "4. Adatfeldolgozók és címzettek" },
  {
    type: "p",
    text: "Az adatkezelő az adatok kezeléséhez az alábbi adatfeldolgozókat veszi igénybe. Az adatfeldolgozók az adatokat kizárólag az adatkezelő utasítása szerint kezelik.",
  },
  {
    type: "table",
    head: ["Adatfeldolgozó", "Tevékenység", "Adattárolás helye"],
    rows: [
      [
        "Supabase, Inc.",
        "Adatbázis-szolgáltatás: a beküldött űrlapok tárolása",
        "Európai Unió (Frankfurt, Németország)",
      ],
      [
        "Resend (Plus Five Five, Inc.)",
        "E-mail továbbító szolgáltatás: az értesítő levelek kézbesítése",
        "Európai Unió / Egyesült Államok, megfelelő garanciák mellett",
      ],
      [
        "[Tárhelyszolgáltató]",
        "A weboldal üzemeltetése, kiszolgálása",
        "[kitöltendő]",
      ],
    ],
  },
  {
    type: "p",
    text: "Az adatkezelő a személyes adatokat harmadik félnek marketing célból nem adja át és nem értékesíti. Adattovábbításra kizárólag jogszabályi kötelezettség alapján, hatósági megkeresés esetén kerülhet sor.",
  },

  { type: "h2", text: "5. Sütik (cookie-k) és mérés" },
  {
    type: "p",
    text: "A weboldal működéséhez feltétlenül szükséges technikai sütiket használ. Ezek használatához a vonatkozó szabályozás szerint nem szükséges hozzájárulás, mert nélkülük az oldal nem működne megfelelően.",
  },
  {
    type: "p",
    text: "Amennyiben a weboldalon a jövőben statisztikai vagy marketing célú mérőkód kerül elhelyezésre, annak működése előzetes hozzájáruláshoz kötött, és a hozzájárulás bármikor visszavonható. [Ezt a bekezdést a ténylegesen alkalmazott mérőeszközökre kell pontosítani.]",
  },

  { type: "h2", text: "6. Adatbiztonsági intézkedések" },
  {
    type: "ul",
    items: [
      "Az adatok titkosított kapcsolaton (HTTPS) keresztül kerülnek továbbításra.",
      "Az adatbázisban tárolt megkeresések nem érhetők el a weboldal látogatói számára; az adatbázis sorszintű biztonsági szabályokkal védett, olvasási hozzáférés nélkül.",
      "Az IP-címeket nem nyers formában, hanem sózott, visszafejthetetlen lenyomatként tároljuk.",
      "Az adatokhoz kizárólag az adatkezelő azon munkatársai férnek hozzá, akiknek ez a feladataik ellátásához szükséges.",
    ],
  },

  { type: "h2", text: "7. Az érintett jogai" },
  {
    type: "ul",
    items: [
      "Hozzáféréshez való jog: tájékoztatást kérhet arról, hogy kezelünk-e Önről személyes adatot, és ha igen, milyet.",
      "Helyesbítéshez való jog: kérheti a pontatlan adatok javítását vagy a hiányos adatok kiegészítését.",
      "Törléshez való jog: kérheti adatai törlését, ha az adatkezelésnek nincs (már) jogalapja.",
      "Az adatkezelés korlátozásához való jog: bizonyos esetekben kérheti az adatkezelés felfüggesztését.",
      "Adathordozhatósághoz való jog: kérheti adatai géppel olvasható formátumban történő kiadását.",
      "Tiltakozáshoz való jog: tiltakozhat a jogos érdeken alapuló adatkezelés ellen.",
      "Hozzájárulás visszavonásához való jog: a hozzájárulását bármikor visszavonhatja.",
    ],
  },
  {
    type: "p",
    text: `Kérelmét a ${site.contact.email} címre küldheti. Kérelmére legkésőbb egy hónapon belül válaszolunk. A válaszadás a kérelem összetettsége esetén további két hónappal meghosszabbítható, erről a határidő lejárta előtt tájékoztatjuk.`,
  },

  { type: "h2", text: "8. Jogorvoslati lehetőségek" },
  {
    type: "p",
    text: "Amennyiben úgy ítéli meg, hogy az adatkezelés nem felel meg a jogszabályi követelményeknek, panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH — 1055 Budapest, Falk Miksa utca 9-11.; ugyfelszolgalat@naih.hu; naih.hu), illetve bírósághoz fordulhat.",
  },

  { type: "h2", text: "9. A tájékoztató módosítása" },
  {
    type: "p",
    text: "Az adatkezelő fenntartja a jogot a jelen tájékoztató módosítására. A mindenkor hatályos változat a weboldalon érhető el; a lényeges változásokról az érintetteket megfelelő módon tájékoztatjuk.",
  },
];

export default function Page() {
  return (
    <LegalPageView
      title="Adatkezelési tájékoztató"
      href="/adatkezelesi-tajekoztato"
      effectiveFrom="[2026. ____ ____.]"
      lead="Ez a tájékoztató azt írja le, milyen személyes adatokat kezelünk a weboldalon keresztül, milyen célból és meddig, kik férnek hozzájuk, és Önnek milyen jogai vannak."
      blocks={blocks}
    />
  );
}
