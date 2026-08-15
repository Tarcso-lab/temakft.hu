/**
 * Központi cégadat- és navigációs konfiguráció.
 *
 * ⚠️ KITÖLTENDŐ: az alábbi, `TODO:` jelöléssel ellátott mezőkben egyelőre
 * helykitöltő érték szerepel. Ezeket a valós cégadatokra kell cserélni —
 * a weboldal (láblécek, kapcsolat oldal, strukturált adatok / JSON-LD)
 * mindenhol innen olvassa be őket, tehát elég egy helyen átírni.
 */

export const site = {
  name: "TEMA Menedzsment Kft.",
  shortName: "TEMA",
  legalName: "TEMA Menedzsment Kft.",
  url: "https://temakft.hu",
  locale: "hu_HU",

  tagline: "Generálkivitelezés és műszaki épületüzemeltetés — egy partner az épület teljes életciklusára",
  description:
    "Generálkivitelezés és műszaki épületüzemeltetés Budapesten és Pest vármegyében: teljes körű kivitelezés minden szakággal, valamint erős- és gyengeáramú rendszerek tervezése, kivitelezése és karbantartása.",

  contact: {
    phone: "+36 (20) 414 0004",
    phoneHref: "tel:+36204140004",
    // TODO: valós e-mail cím
    email: "info@temakft.hu",
    // Ide érkeznek az űrlapok (szerveroldali env változóból felülírható)
    notificationEmail: "tamaskoncsik9@gmail.com",

    /**
     * Postai cím. A cég nem rendelkezik telephellyel, ezért jelenleg üres, és
     * ameddig üres, az oldal sehol nem jelenít meg címet.
     *
     * Ha később lesz megadható cím (pl. székhelyszolgáltatás), elég itt
     * kitölteni: a lábléc és a strukturált adat (JSON-LD) automatikusan
     * átvált. A jogi oldalak (ÁSZF, adatkezelési tájékoztató) szövegébe
     * ilyenkor kézzel kell visszaírni a székhelyet.
     */
    address: {
      street: "",
      city: "",
      postalCode: "",
      country: "HU",
      countryName: "Magyarország",
    },
    taxNumber: "33011033-2-13",
    companyNumber: "13-09-246042",
    openingHours: "H–P 08:00–17:00",
    emergencyNote: "Ügyeleti hibabejelentés szerződéses partnereinknek 0–24",
  },

  /**
   * Földrajzi lefedettség — a helyi SEO és a JSON-LD `areaServed` mezőhöz.
   * A cég elsősorban Budapesten és Pest vármegyében dolgozik; a sorrend
   * szándékos, mert a megjelenítés az első elemeket emeli ki.
   */
  areaServed: ["Budapest", "Pest vármegye", "Budapest agglomeráció"],

  social: {
    // TODO: valós profilok, ha vannak. Üres string = nem jelenik meg.
    linkedin: "",
    facebook: "",
  },
} as const;

/** Van-e megjeleníthető postai cím? Ettől függ, hogy kiírjuk-e bárhol az oldalon. */
export const hasAddress: boolean = Boolean(
  site.contact.address.street && site.contact.address.city,
);

/** Egysoros postai cím, vagy üres string, ha nincs megadva. */
export function formatAddress(): string {
  if (!hasAddress) return "";
  const a = site.contact.address;
  return `${a.postalCode} ${a.city}, ${a.street}`.trim();
}

/** A cég által alkalmazott gyártók — a bizalomépítéshez és a márkás kulcsszavakhoz. */
export const brands = [
  {
    name: "Schneider Electric",
    area: "Épületvillamosság, elosztóberendezések",
    slug: "schneider-electric",
  },
  { name: "Hikvision", area: "Kamerarendszer, beléptetés, kaputelefon", slug: "hikvision" },
  { name: "Ubiquiti", area: "IT-hálózat, WiFi, menedzselt switch", slug: "ubiquiti" },
  { name: "MikroTik", area: "Routing, tűzfal, hálózati gerinc", slug: "mikrotik" },
  { name: "TP-Link", area: "Hálózati eszközök, Omada rendszer", slug: "tp-link" },
  { name: "Loxone", area: "Épületautomatizálás, okosépület", slug: "loxone" },
  { name: "KNX", area: "Szabványos épületautomatizálás", slug: "knx" },
  { name: "Codefon", area: "Kaputelefon rendszerek", slug: "codefon" },
] as const;

/**
 * Beszállítói és szakmai partnerek. Szándékosan csak névvel jelennek meg:
 * idegen logók használata külön engedélyhez kötött, a szöveges említés nem az.
 */
export const partners = [
  "Mentavill",
  "OBI",
  "Praktiker",
  "MAPEI",
  "DSC",
  "Tor Technik",
  "RIEL",
  "Powerbizt",
] as const;

/** Fő navigáció. A `children` elemekből épül a megamenü és a sitemap is. */
export type NavItem = {
  label: string;
  /** Rövidített változat a felső menüsávhoz, ahol kevés a hely. */
  shortLabel?: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "Üzemeltetés",
    href: "/uzemeltetes",
    description: "Folyamatos műszaki működtetés, karbantartás és hibaelhárítás",
    children: [
      {
        label: "Műszaki épületüzemeltetés",
        href: "/uzemeltetes/muszaki-epuletuzemeltetes",
        description: "Teljes körű üzemeltetés egy kézben",
      },
      {
        label: "Villamos üzemeltetés",
        href: "/uzemeltetes/villamos-uzemeltetes",
        description: "Erősáramú rendszerek szakszerű működtetése",
      },
      {
        label: "Gyengeáramú rendszerek üzemeltetése",
        href: "/uzemeltetes/gyengearamu-rendszerek-uzemeltetese",
        description: "Kamera, beléptetés, hálózat felügyelete",
      },
      {
        label: "Érintésvédelmi felülvizsgálat",
        href: "/uzemeltetes/erintesvedelmi-felulvizsgalat",
        description: "Kötelező mérés, jegyzőkönyv és a hibák javítása",
      },
      {
        label: "Karbantartás",
        href: "/uzemeltetes/karbantartas",
        description: "Tervezett megelőző karbantartás ütemterv szerint",
      },
      {
        label: "Hibafeltárás és hibaelhárítás",
        href: "/uzemeltetes/hibafeltaras-hibaelharitas",
        description: "Műszeres diagnosztika, gyors beavatkozás",
      },
      {
        label: "SLA és rendelkezésre állás",
        href: "/uzemeltetes/sla-rendelkezesre-allas",
        description: "Mérhető reakcióidők, szerződéses garanciák",
      },
    ],
  },
  {
    label: "Tervezés és kivitelezés",
    shortLabel: "Kivitelezés",
    href: "/tervezes-kivitelezes",
    description: "Felméréstől az üzembe helyezésig",
    children: [
      {
        label: "Erősáram",
        href: "/tervezes-kivitelezes/erosaram",
        description: "Elosztók, kábelezés, világítás, mérés",
      },
      {
        label: "Gyengeáram",
        href: "/tervezes-kivitelezes/gyengearam",
        description: "Biztonságtechnika és kommunikációs rendszerek",
      },
      {
        label: "IT-hálózat",
        href: "/tervezes-kivitelezes/it-halozat",
        description: "Strukturált hálózat, WiFi, szerverszoba",
      },
      {
        label: "Épületautomatizálás",
        href: "/tervezes-kivitelezes/epuletautomatizalas",
        description: "KNX és Loxone alapú vezérlés",
      },
      {
        label: "Rendszerintegráció",
        href: "/tervezes-kivitelezes/rendszerintegracio",
        description: "Különálló rendszerek egy felületen",
      },
    ],
  },
  {
    label: "Rendszereink",
    href: "/rendszerek",
    description: "A telepített és üzemeltetett technológiák",
    children: [
      {
        label: "Kamerarendszerek",
        href: "/rendszerek/kamerarendszerek",
        description: "IP kamerák, rögzítés, videoanalitika",
      },
      {
        label: "Beléptetőrendszerek",
        href: "/rendszerek/beleptetes",
        description: "Kártyás, mobilos és biometrikus beléptetés",
      },
      {
        label: "Kaputelefon",
        href: "/rendszerek/kaputelefon",
        description: "Társasházi és irodai video-kaputelefon",
      },
      {
        label: "Strukturált hálózat",
        href: "/rendszerek/strukturalt-halozat",
        description: "Cat6/Cat6A, optika, rendezőszekrény",
      },
      {
        label: "Okosépület",
        href: "/rendszerek/okosepulet",
        description: "Világítás, árnyékolás, HVAC vezérlés",
      },
      {
        label: "Egyéb biztonságtechnika",
        href: "/rendszerek/biztonsagtechnika",
        description: "Riasztó, tűzjelző kapcsolat, kaputechnika",
      },
    ],
  },
  {
    label: "Projektek",
    href: "/projektek",
    description: "Generálkivitelezés minden szakággal, egy felelőssel",
    children: [
      {
        label: "Generálkivitelezés",
        href: "/projektek/generalkivitelezes",
        description: "Teljes körű kivitelezés: építés, gépészet, villamosság, festés",
      },
      {
        label: "Projektmenedzsment",
        href: "/projektek/projektmenedzsment",
        description: "Műszaki tartalom, ütemezés, költségkontroll",
      },
      {
        label: "Műszaki koordináció",
        href: "/projektek/muszaki-koordinacio",
        description: "Szakágak összehangolása a helyszínen",
      },
      {
        label: "Dokumentáció",
        href: "/projektek/dokumentacio",
        description: "Megvalósulási terv, mérési jegyzőkönyvek",
      },
      {
        label: "Átadás és üzembe helyezés",
        href: "/projektek/atadas-uzembe-helyezes",
        description: "Beüzemelés, betanítás, garanciaindítás",
      },
    ],
  },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Tudástár", href: "/tudastar" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export const footerLegalNav: NavItem[] = [
  { label: "Garanciális feltételek", href: "/garancialis-feltetelek" },
  { label: "ÁSZF", href: "/aszf" },
  { label: "Adatkezelési tájékoztató", href: "/adatkezelesi-tajekoztato" },
];
