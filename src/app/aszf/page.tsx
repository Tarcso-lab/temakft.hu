import type { Metadata } from "next";
import { LegalPageView } from "@/components/templates/LegalPageView";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import type { ContentBlock } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Általános Szerződési Feltételek (ÁSZF)",
  description:
    "A TEMA Menedzsment Kft. általános szerződési feltételei: szolgáltatások, ajánlatadás, teljesítés, díjazás, felelősség és a szerződés megszűnése.",
  path: "/aszf",
});

const blocks: ContentBlock[] = [
  { type: "h2", text: "1. A Szolgáltató adatai" },
  {
    type: "table",
    head: ["Megnevezés", "Adat"],
    rows: [
      ["Cégnév", site.legalName],
      ["Cégjegyzékszám", site.contact.companyNumber],
      ["Adószám", site.contact.taxNumber],
      ["E-mail", site.contact.email],
      ["Telefon", site.contact.phone],
      ["Nyilvántartó hatóság", "Budapest Környéki Törvényszék Cégbírósága"],
    ],
  },

  { type: "h2", text: "2. Az ÁSZF hatálya és alkalmazása" },
  {
    type: "p",
    text: "A jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a Szolgáltató és a Megrendelő között létrejövő, műszaki épületüzemeltetési, karbantartási, tervezési, kivitelezési és projektmenedzsment szolgáltatásokra irányuló szerződések általános feltételeit tartalmazzák.",
  },
  {
    type: "p",
    text: "Az egyedi szerződés és annak mellékletei az ÁSZF-hez képest elsőbbséget élveznek. Amennyiben az egyedi szerződés valamely kérdésről nem rendelkezik, a jelen ÁSZF rendelkezései az irányadók. Az ÁSZF-ben nem szabályozott kérdésekben a Polgári Törvénykönyv és a vonatkozó jogszabályok rendelkezései alkalmazandók.",
  },

  { type: "h2", text: "3. A szolgáltatások tárgya" },
  {
    type: "ul",
    items: [
      "Generálkivitelezés: építési beruházások és felújítások teljes műszaki tartalommal, valamennyi szakág (építőmesteri munkák, épületgépészet, épületvillamosság, szárazépítés, burkolás, felületképzés, nyílászárók, asztalos- és belsőépítészeti munkák) megvalósításával.",
      "Műszaki épületüzemeltetés és létesítménygazdálkodási műszaki szolgáltatások.",
      "Erősáramú (épületvillamossági) rendszerek tervezése, kivitelezése, karbantartása.",
      "Gyengeáramú rendszerek (kamerarendszer, beléptetés, kaputelefon, kaputechnika) tervezése, kivitelezése, karbantartása.",
      "IT-hálózati és strukturált hálózati rendszerek tervezése, kiépítése, üzemeltetése.",
      "Épületautomatizálási és okosépület-megoldások megvalósítása és üzemeltetése.",
      "Műszaki projektmenedzsment, generálkivitelezés, szakági koordináció.",
      "Műszaki állapotfelmérés, felülvizsgálat, mérés, dokumentáció készítése.",
    ],
  },

  { type: "h2", text: "4. Ajánlatadás és a szerződés létrejötte" },
  {
    type: "ol",
    items: [
      "A Megrendelő megkeresését — weboldali űrlap, e-mail vagy telefon útján — a Szolgáltató visszaigazolja.",
      "A Szolgáltató szükség esetén helyszíni felmérést végez. A felmérés — eltérő megállapodás hiányában — díjmentes és nem jár szerződéskötési kötelezettséggel.",
      "A Szolgáltató írásbeli, tételes árajánlatot ad, amely tartalmazza a műszaki tartalmat, a vállalási határidőt, a díjat és azt is, mi nem képezi az ajánlat részét.",
      "Az ajánlat — eltérő rendelkezés hiányában — a kiállítástól számított [30] napig érvényes.",
      "A szerződés az ajánlat írásbeli elfogadásával, illetve az egyedi szerződés aláírásával jön létre.",
    ],
  },
  {
    type: "p",
    text: "A weboldalon megjelenő tartalmak, leírások és tájékoztató jellegű adatok nem minősülnek ajánlattételnek.",
  },

  { type: "h2", text: "5. Teljesítés" },
  {
    type: "p",
    text: "A Szolgáltató a szerződésben rögzített műszaki tartalmat a vonatkozó szabványok, jogszabályok és a szakma szabályai szerint teljesíti. A teljesítés helye a Megrendelő által megjelölt ingatlan.",
  },
  {
    type: "ul",
    items: [
      "A Megrendelő köteles a munkavégzéshez szükséges helyszíni hozzáférést, energiaellátást és — ahol releváns — a meglévő rendszerek dokumentációját biztosítani.",
      "Üzemelő épületben a Szolgáltató a munkavégzés ütemezését előre egyezteti; a feszültségmentesítést és a rendszerleállást igénylő munkák időpontját írásban rögzítik.",
      "A Megrendelő érdekkörében felmerülő akadályoztatás (hozzáférés hiánya, hiányzó döntés, munkaterület átadásának késedelme) a vállalási határidőt az akadályoztatás időtartamával meghosszabbítja.",
      "A teljesítés átadás-átvételi eljárással zárul, amelyről jegyzőkönyv készül. Az esetleges hiánylistát a felek tételesen rögzítik, felelőssel és határidővel.",
    ],
  },

  { type: "h2", text: "6. Pótmunka és a műszaki tartalom változása" },
  {
    type: "p",
    text: "Amennyiben a kivitelezés során a szerződésben rögzített műszaki tartalmon túli munkavégzés válik szükségessé, a Szolgáltató a felmerülést követően haladéktalanul, írásban tájékoztatja a Megrendelőt annak műszaki és költségvonzatáról. Pótmunka kizárólag a Megrendelő előzetes írásbeli jóváhagyásával végezhető el.",
  },
  {
    type: "callout",
    title: "Kivétel: azonnali beavatkozást igénylő helyzet",
    text: "Ha a munkavégzés során élet-, baleset- vagy vagyonbiztonsági kockázat merül fel, a Szolgáltató jogosult és köteles a veszély elhárításához szükséges minimális beavatkozást előzetes jóváhagyás nélkül is elvégezni, a Megrendelő egyidejű értesítése mellett.",
  },

  { type: "h2", text: "7. Díjazás és fizetési feltételek" },
  {
    type: "ul",
    items: [
      "A szolgáltatás díja az elfogadott árajánlat, illetve az egyedi szerződés szerint kerül meghatározásra.",
      "Üzemeltetési és karbantartási szerződés esetén a Szolgáltató havidíjat számláz; az anyagköltség és a cserealkatrészek díja ettől elkülönülten, előzetes egyeztetés után kerül felszámításra.",
      "Eseti munkavégzés esetén a Szolgáltató a mindenkori óradíja és a felhasznált anyagok alapján számláz.",
      "A fizetési határidő — eltérő megállapodás hiányában — a számla kiállításától számított 8 nap.",
      "Késedelmes fizetés esetén a Szolgáltató a jogszabály szerinti késedelmi kamat és behajtási költségátalány érvényesítésére jogosult.",
      "A Szolgáltató nagyobb volumenű kivitelezés esetén előleg és részszámlázás alkalmazására jogosult, az egyedi szerződésben rögzített ütemezés szerint.",
    ],
  },

  { type: "h2", text: "8. Rendelkezésre állás, hibabejelentés" },
  {
    type: "p",
    text: "Üzemeltetési vagy karbantartási szerződés esetén a felek a szolgáltatási szintet (SLA) az egyedi szerződés mellékletében rögzítik: a hibaosztályokat, a vállalt reakció- és hibaelhárítási időket, a bejelentés csatornáit és a riportálás módját. Szerződés hiányában a Szolgáltató a rendelkezésre álló kapacitás függvényében teljesít, garantált reakcióidő vállalása nélkül.",
  },

  { type: "h2", text: "9. Garancia és szavatosság" },
  {
    type: "p",
    text: "A Szolgáltató az elvégzett munkára és a beépített eszközökre a Garanciális feltételek oldalon közzétett feltételek szerint vállal garanciát. A garanciális feltételek a jelen ÁSZF elválaszthatatlan részét képezik.",
  },

  { type: "h2", text: "10. Felelősség" },
  {
    type: "ul",
    items: [
      "A Szolgáltató felel a szerződésszegéssel okozott kárért a vonatkozó jogszabályok szerint.",
      "A Szolgáltató nem felel a Megrendelő vagy harmadik személy által a rendszereken végzett, a Szolgáltató tudta és jóváhagyása nélküli beavatkozásból eredő károkért.",
      "A Szolgáltató nem felel a szolgáltatás nyújtását akadályozó, ellenőrzési körén kívül eső, elháríthatatlan körülményekből (vis maior) eredő késedelemért.",
      "A Szolgáltató nem felel a közszolgáltatások (villamos energia, internetszolgáltatás) kiesésének következményeiért.",
      "A Szolgáltató felelősségbiztosítással rendelkezik; annak részleteiről kérésre tájékoztatást ad.",
    ],
  },

  { type: "h2", text: "11. Titoktartás és adatkezelés" },
  {
    type: "p",
    text: "A felek kötelesek a szerződés teljesítése során tudomásukra jutott üzleti titkot bizalmasan kezelni. A Szolgáltató a Megrendelő épületére vonatkozó műszaki adatokat kizárólag a szerződés teljesítéséhez használja fel, és azokat harmadik félnek nem adja át — kivéve, ha erre jogszabály kötelezi.",
  },
  {
    type: "p",
    text: "A személyes adatok kezelésének részleteit az Adatkezelési tájékoztató tartalmazza.",
  },

  { type: "h2", text: "12. A szerződés megszűnése" },
  {
    type: "ul",
    items: [
      "A határozott idejű szerződés a határidő lejártával, illetve a teljesítéssel szűnik meg.",
      "A határozatlan idejű üzemeltetési és karbantartási szerződést bármelyik fél írásban, [60] napos felmondási idővel, indokolás nélkül felmondhatja.",
      "Súlyos szerződésszegés esetén a sérelmet szenvedett fél a szerződést azonnali hatállyal felmondhatja.",
      "A szerződés megszűnése esetén a Szolgáltató átadja a Megrendelő tulajdonát képező dokumentációt és a rendszerek adminisztrátori hozzáféréseit.",
    ],
  },

  { type: "h2", text: "13. Panaszkezelés és jogviták" },
  {
    type: "p",
    text: `A Megrendelő panaszát a ${site.contact.email} címen vagy a ${site.contact.phone} telefonszámon jelentheti be. A Szolgáltató a panaszt kivizsgálja, és arra 15 napon belül írásban válaszol.`,
  },
  {
    type: "p",
    text: "A felek a jogvitáikat elsődlegesen egyeztetéssel kívánják rendezni. Ennek eredménytelensége esetén a hatáskörrel és illetékességgel rendelkező magyar bíróság jár el. Fogyasztónak minősülő Megrendelő esetén a fogyasztóvédelmi és békéltető testületi eljárás lehetősége is fennáll.",
  },

  { type: "h2", text: "14. Az ÁSZF módosítása" },
  {
    type: "p",
    text: "A Szolgáltató fenntartja a jogot a jelen ÁSZF egyoldalú módosítására. A módosítás a weboldalon való közzététellel lép hatályba, és a hatálybalépést követően kötött szerződésekre vonatkozik. A már megkötött szerződésekre a szerződéskötéskor hatályos ÁSZF az irányadó, kivéve, ha a felek eltérően állapodnak meg.",
  },
];

export default function Page() {
  return (
    <LegalPageView
      title="Általános Szerződési Feltételek"
      href="/aszf"
      effectiveFrom="2026. február 1."
      lead="A jelen dokumentum a TEMA Menedzsment Kft. szolgáltatásaira vonatkozó általános szerződési feltételeket tartalmazza. Az egyedi szerződés eltérő rendelkezései minden esetben elsőbbséget élveznek."
      blocks={blocks}
      reviewNote={false}
    />
  );
}
