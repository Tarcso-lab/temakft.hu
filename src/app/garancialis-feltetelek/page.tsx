import type { Metadata } from "next";
import { LegalPageView } from "@/components/templates/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import type { ContentBlock } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Garanciális feltételek",
  description:
    "A TEMA garanciális feltételei: időtartamok, mire terjed ki a garancia, mi esik ki alóla, és hogyan lehet garanciális igényt bejelenteni.",
  path: "/garancialis-feltetelek",
});

const blocks: ContentBlock[] = [
  { type: "h2", text: "1. A garanciavállalás tárgya" },
  {
    type: "p",
    text: `A jelen garanciális feltételek a ${site.legalName} (a továbbiakban: Vállalkozó) által elvégzett kivitelezési, telepítési, szerelési és karbantartási munkákra, valamint a Vállalkozó által beszerzett és beépített anyagokra, eszközökre vonatkoznak.`,
  },
  {
    type: "p",
    text: "A garancia a Vállalkozó saját teljesítésére (munkavégzés, szerelési minőség) vonatkozó vállalás, míg a beépített eszközökre elsősorban a gyártó által biztosított garancia érvényes. A Vállalkozó a gyártói garancia érvényesítésében a Megrendelő oldalán közreműködik.",
  },

  { type: "h2", text: "2. A garancia időtartama" },
  {
    type: "table",
    head: ["Teljesítés típusa", "Garancia időtartama", "Megjegyzés"],
    rows: [
      [
        "Szerelési, kivitelezési munka",
        "[12] hónap",
        "Az átadás-átvételi jegyzőkönyv aláírásának napjától",
      ],
      [
        "Beépített eszközök, berendezések",
        "A gyártó által vállalt időtartam",
        "Jellemzően 12–36 hónap, eszközönként eltérő",
      ],
      [
        "Kopó alkatrészek (akkumulátor, fényforrás, tömítés)",
        "[6] hónap",
        "A rendeltetésszerű elhasználódás nem garanciális esemény",
      ],
      [
        "Javítási munka",
        "[6] hónap",
        "Kizárólag a javítással érintett hibajelenségre",
      ],
    ],
  },
  {
    type: "p",
    text: "A garanciális időtartam kezdete minden esetben az átadás-átvételi eljárás lezárásának, illetve javítás esetén a javítás elvégzésének a napja. A garancia időtartamát a szerződés ettől eltérően is megállapíthatja; ilyenkor a szerződésben foglaltak az irányadók.",
  },

  { type: "h2", text: "3. Mire terjed ki a garancia?" },
  {
    type: "ul",
    items: [
      "A szerelési munka hibájából eredő meghibásodás javítására.",
      "A hibás vagy nem megfelelően rögzített kötések, csatlakozások helyreállítására.",
      "A Vállalkozó által beépített eszköz gyártói garancia keretében történő cseréjének megszervezésére.",
      "A hibaelhárítás munkadíjára és a garanciális javításhoz szükséges kiszállásra.",
      "A javítás utáni ismételt működési próbára és — ahol releváns — újramérésre.",
    ],
  },

  { type: "h2", text: "4. Mire nem terjed ki a garancia?" },
  {
    type: "ul",
    items: [
      "Rendeltetésellenes, a rendszer műszaki paramétereit meghaladó vagy a kezelési útmutatóval ellentétes használatból eredő hibára.",
      "Harmadik személy által a Vállalkozó tudta nélkül végzett beavatkozásra, átalakításra, bővítésre visszavezethető hibára.",
      "Elemi kárból, villámcsapásból, túlfeszültségből, áramkimaradásból, tűzből, beázásból vagy rongálásból eredő meghibásodásra.",
      "A kötelező karbantartás elmulasztásából eredő hibára, amennyiben a rendszerre karbantartási kötelezettség vonatkozik.",
      "A rendeltetésszerű használatból eredő elhasználódásra és kopásra (például akkumulátorok kapacitásvesztése).",
      "A Megrendelő által biztosított anyagokra, eszközökre és a Megrendelő által előírt, a Vállalkozó által írásban kifogásolt műszaki megoldásokra.",
      "Szoftveres szolgáltatások szolgáltatói oldalon bekövetkező kiesésére, valamint az internetszolgáltatás hibájára.",
    ],
  },
  {
    type: "callout",
    title: "Karbantartás és garancia összefüggése",
    text: "Számos rendszernél — így különösen a szünetmentes tápellátásnál, a kaputechnikánál és a tűzvédelmi vonatkozású berendezéseknél — a gyártói garancia feltétele a dokumentált, rendszeres karbantartás. Ennek elmaradása a gyártói garancia elvesztésével járhat, amelyért a Vállalkozó nem tud felelősséget vállalni.",
  },

  { type: "h2", text: "5. A garanciális igény bejelentése" },
  {
    type: "ol",
    items: [
      `A hibát a Megrendelő a felfedezését követően haladéktalanul bejelenti a ${site.contact.email} címen vagy a ${site.contact.phone} telefonszámon.`,
      "A bejelentésnek tartalmaznia kell a helyszínt, a hibajelenség leírását, az első észlelés időpontját és egy kapcsolattartót.",
      "A Vállalkozó a bejelentést visszaigazolja, és — üzemeltetési szerződés esetén az SLA-ban rögzített határidőn belül — megkezdi a hiba vizsgálatát.",
      "A Vállalkozó a helyszíni vizsgálat során megállapítja, hogy a hiba garanciális körbe tartozik-e, és erről a Megrendelőt tájékoztatja.",
      "Garanciális hiba esetén a javítás díjmentes. Nem garanciális hiba esetén a Vállalkozó a javítás megkezdése előtt árajánlatot ad.",
    ],
  },
  {
    type: "p",
    text: "Amennyiben a kivizsgálás során megállapítást nyer, hogy a bejelentett hiba nem tartozik a garancia hatálya alá, a Vállalkozó a kiszállás és a vizsgálat munkadíját a mindenkori díjszabása szerint jogosult felszámítani. Erről a Megrendelőt a helyszínen, a további munkavégzés megkezdése előtt tájékoztatja.",
  },

  { type: "h2", text: "6. A garanciális javítás módja és határideje" },
  {
    type: "p",
    text: "A Vállalkozó a garanciális hibát elsősorban javítással orvosolja. Amennyiben a javítás nem lehetséges vagy nem gazdaságos, a hibás elem cseréjére kerül sor. Ha az alkatrész beszerzése miatt a javítás elhúzódik, a Vállalkozó — ahol ez műszakilag megoldható — ideiglenes megoldást biztosít a működés helyreállítására.",
  },
  {
    type: "p",
    text: "A garanciális javítás elvégzésének határideje a hiba jellegétől és az alkatrész beszerezhetőségétől függ; a Vállalkozó a kivizsgálást követően közli a várható határidőt.",
  },

  { type: "h2", text: "7. A Megrendelő kötelezettségei" },
  {
    type: "ul",
    items: [
      "A rendszerek rendeltetésszerű használata és az átadott kezelési útmutató betartása.",
      "A hiba haladéktalan bejelentése; a bejelentés elmulasztásából eredő további károkért a Vállalkozó nem felel.",
      "A hibás rendszer további használatának mellőzése, ha az a kár növekedésével járhat.",
      "A garanciális javításhoz szükséges helyszíni hozzáférés biztosítása egyeztetett időpontban.",
      "Az előírt karbantartások elvégeztetése és dokumentálása.",
    ],
  },

  { type: "h2", text: "8. Kellékszavatosság, termékszavatosság" },
  {
    type: "p",
    text: "A jelen garanciális feltételek nem érintik a Megrendelőt a vonatkozó jogszabályok alapján megillető kellékszavatossági és termékszavatossági jogokat. Fogyasztónak minősülő Megrendelő esetén a fogyasztóvédelmi jogszabályok rendelkezései az irányadók, és a jelen feltételek a fogyasztót megillető jogokat nem korlátozhatják.",
  },

  { type: "h2", text: "9. Kapcsolat" },
  {
    type: "p",
    text: `Garanciális kérdésekben a következő elérhetőségeken állunk rendelkezésre: ${site.contact.email}, ${site.contact.phone}. A garanciális bejelentést írásban, e-mailben kérjük megtenni, hogy a bejelentés időpontja utólag is igazolható legyen.`,
  },
];

export default function Page() {
  return (
    <LegalPageView
      title="Garanciális feltételek"
      href="/garancialis-feltetelek"
      effectiveFrom="[2026. ____ ____.]"
      lead="Az alábbiakban összefoglaljuk, mire terjed ki a garanciánk, mi az, ami nem tartozik a hatálya alá, és hogyan lehet garanciális igényt bejelenteni. Célunk, hogy ez ne utólagos vita kérdése legyen."
      blocks={blocks}
    />
  );
}
