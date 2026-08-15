/** Az ajánlatkérő űrlap választható értékei. A címkéket a levél és az adatbázis is ezekből olvassa. */

export const propertyTypes = [
  { value: "irodahaz", label: "Irodaház" },
  { value: "ipari", label: "Ipari / logisztikai létesítmény" },
  { value: "uzlet", label: "Üzlet / kereskedelmi ingatlan" },
  { value: "szalloda", label: "Szálloda" },
  { value: "intezmeny", label: "Intézmény" },
  { value: "tarsashaz", label: "Társasház" },
  { value: "beruhazas", label: "Beruházás / új építés" },
  { value: "egyeb", label: "Egyéb" },
] as const;

export const serviceOptions = [
  {
    value: "uzemeltetes",
    label: "Műszaki épületüzemeltetés",
    hint: "Folyamatos üzemeltetés, szerződéses keretben",
  },
  {
    value: "karbantartas",
    label: "Karbantartás",
    hint: "Tervezett megelőző karbantartás ütemterv szerint",
  },
  {
    value: "hibaelharitas",
    label: "Hibafeltárás, hibaelhárítás",
    hint: "Meglévő, visszatérő vagy aktuális hiba",
  },
  { value: "tervezes", label: "Tervezés", hint: "Kiviteli terv, műszaki tartalom" },
  { value: "kivitelezes", label: "Kivitelezés", hint: "Új rendszer kiépítése vagy cseréje" },
  {
    value: "felulvizsgalat",
    label: "Felülvizsgálat, mérés",
    hint: "Érintésvédelmi és szabványossági mérés",
  },
  {
    value: "generalkivitelezes",
    label: "Generálkivitelezés",
    hint: "Teljes kivitelezés minden szakággal, egy szerződésben",
  },
  {
    value: "projektmenedzsment",
    label: "Projektmenedzsment, koordináció",
    hint: "Ha van saját kivitelezője, de kell, aki összefogja",
  },
  {
    value: "dokumentacio",
    label: "Dokumentáció pótlása",
    hint: "Felmérés, végpontlista, megvalósulási terv",
  },
] as const;

/**
 * Az érintett rendszerek és szakágak. A lista a generálkivitelezői profilt
 * követi: az építőmesteri, gépészeti és belsőépítészeti szakágak ugyanúgy
 * választhatók, mint az erős- és gyengeáramú rendszerek — enélkül az űrlap
 * nem tudta felvenni a teljes kivitelezési megkereséseket.
 */
export const systemOptions = [
  { value: "epitomesteri", label: "Építőmesteri munkák (bontás, falazás, vakolás)", group: "Építés és belső terek" },
  { value: "gepeszet", label: "Épületgépészet (fűtés, víz, szellőzés, klíma)", group: "Építés és belső terek" },
  { value: "szarazepites", label: "Szárazépítés (gipszkarton, álmennyezet)", group: "Építés és belső terek" },
  { value: "burkolas", label: "Burkolás (hideg- és melegburkolat)", group: "Építés és belső terek" },
  { value: "festes", label: "Festés, mázolás, felületképzés", group: "Építés és belső terek" },
  { value: "nyilaszaro", label: "Nyílászárók, árnyékolástechnika", group: "Építés és belső terek" },
  { value: "asztalos", label: "Asztalos- és belsőépítészeti munka", group: "Építés és belső terek" },
  { value: "homlokzat", label: "Homlokzat, hőszigetelés, tető", group: "Építés és belső terek" },

  { value: "erosaram", label: "Elosztók, villamos hálózat", group: "Villamos (erősáram)" },
  { value: "vilagitas", label: "Világítás, LED-korszerűsítés", group: "Villamos (erősáram)" },
  { value: "erintesvedelem", label: "Érintésvédelmi felülvizsgálat, mérés", group: "Villamos (erősáram)" },
  { value: "almeres", label: "Almérés, fogyasztáskövetés", group: "Villamos (erősáram)" },
  { value: "ups", label: "Szünetmentes ellátás (UPS)", group: "Villamos (erősáram)" },
  { value: "etolto", label: "Elektromos töltőpont", group: "Villamos (erősáram)" },
  { value: "villamvedelem", label: "Villámvédelem, túlfeszültség-védelem", group: "Villamos (erősáram)" },

  { value: "kamera", label: "Kamerarendszer", group: "Biztonságtechnika" },
  { value: "beleptetes", label: "Beléptetőrendszer", group: "Biztonságtechnika" },
  { value: "kaputelefon", label: "Kaputelefon", group: "Biztonságtechnika" },
  { value: "riaszto", label: "Riasztó, betörésjelző", group: "Biztonságtechnika" },
  { value: "kaputechnika", label: "Sorompó, kapuautomatika", group: "Biztonságtechnika" },

  { value: "halozat", label: "Strukturált hálózat, kábelezés", group: "IT és automatizálás" },
  { value: "wifi", label: "WiFi, aktív hálózati eszközök", group: "IT és automatizálás" },
  { value: "szerverszoba", label: "Szerverszoba, rendezőszekrény", group: "IT és automatizálás" },
  { value: "automatizalas", label: "Épületautomatizálás (KNX / Loxone)", group: "IT és automatizálás" },
  { value: "integracio", label: "Rendszerintegráció", group: "IT és automatizálás" },
] as const;

export const urgencyOptions = [
  { value: "surgos_24h", label: "Sürgős — 24 órán belül", hint: "Most áll valami" },
  { value: "1_het", label: "1 héten belül" },
  { value: "1_honap", label: "1 hónapon belül" },
  { value: "tervezes_alatt", label: "Tervezés alatt, még nincs határidő" },
] as const;

export const budgetOptions = [
  { value: "nincs_meg", label: "Még nincs keret meghatározva" },
  { value: "500e_alatt", label: "500 ezer Ft alatt" },
  { value: "500e_2m", label: "500 ezer – 2 millió Ft" },
  { value: "2m_10m", label: "2 – 10 millió Ft" },
  { value: "10m_felett", label: "10 millió Ft felett" },
  { value: "havidijas", label: "Havidíjas üzemeltetés / karbantartás" },
] as const;

/**
 * A korábbi „Telephelyek száma" szabad számmezőt váltja ki. Az volt a baj vele,
 * hogy nem derült ki, mit kérdez: egy lakásfelújítónak értelmezhetetlen, egy
 * több telephelyes cégnél viszont lényeges információ. Így a kérdés magát
 * magyarázza, és üresen is hagyható.
 */
export const siteScopeOptions = [
  { value: "egy", label: "Egy helyszín" },
  { value: "2_5", label: "2–5 helyszín" },
  { value: "5_felett", label: "5-nél több helyszín" },
] as const;

export const sizeOptions = [
  { value: "0-500", label: "500 m² alatt" },
  { value: "500-2000", label: "500 – 2 000 m²" },
  { value: "2000-10000", label: "2 000 – 10 000 m²" },
  { value: "10000+", label: "10 000 m² felett" },
] as const;

type Opt = { value: string; label: string };

function labelOf(list: readonly Opt[], value: string) {
  return list.find((o) => o.value === value)?.label ?? value;
}

export function labelForProperty(value?: string | null) {
  return value ? labelOf(propertyTypes, value) : "";
}
export function labelForService(value: string) {
  return labelOf(serviceOptions, value);
}
export function labelForSystem(value: string) {
  return labelOf(systemOptions, value);
}
export function labelForUrgency(value?: string | null) {
  return value ? labelOf(urgencyOptions, value) : "";
}
export function labelForBudget(value?: string | null) {
  return value ? labelOf(budgetOptions, value) : "";
}
export function labelForSize(value?: string | null) {
  return value ? labelOf(sizeOptions, value) : "";
}
export function labelForSiteScope(value?: string | null) {
  return value ? labelOf(siteScopeOptions, value) : "";
}

export const systemGroups = Array.from(new Set(systemOptions.map((s) => s.group)));
