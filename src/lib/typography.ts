const NBSP = " "; // nem törhető szóköz
const NB_HYPHEN = "‑"; // nem törhető kötőjel

/**
 * Magyar tipográfiai finomítás megjelenítés előtt.
 *
 * Három tipikus hibát javít, amitől a szöveg tördelése igénytelenné válik:
 *
 * 1. Árva toldalék. A rövidítéshez kötőjellel kapcsolt toldalék (SLA-ban,
 *    KNX-szel, LED-es, GDPR-megfelelő) sortörésnél leszakadhat a szárától,
 *    így a következő sor „ban”-nal kezdődik. Nem törhető kötőjelre cseréljük.
 *
 * 2. Sorvégi névelő. A magyar helyesírási gyakorlat szerint az „a”, „az”,
 *    „és”, „s”, „ha” nem maradhat a sor végén.
 *
 * 3. Árva szó. A bekezdés utolsó szava ne kerüljön egyedül új sorba.
 *
 * A beszúrt karakterek láthatatlanok, a szöveg másolható és kereshető marad.
 */
export function huTypo(text: string): string {
  if (!text) return text;

  let out = text;

  // 1. Rövidítés + toldalék együtt maradjon (SLA-ban, KNX-szel, Cat6-os, 0-s)
  out = out.replace(
    /([A-ZÁÉÍÓÖŐÚÜŰ0-9]{1,8})-([a-záéíóöőúüű]{1,12})(?![a-záéíóöőúüű-])/g,
    `$1${NB_HYPHEN}$2`,
  );

  // 2. Rövid kötőszó és névelő ne maradjon sorvégen
  out = out.replace(/(^|[\s(„"'])(a|az|és|s|ha)\s+/gi, `$1$2${NBSP}`);

  // 3. Az utolsó két szó ne szakadjon szét (árva szó)
  out = out.replace(/\s+(\S+)\s*$/, `${NBSP}$1`);

  return out;
}

/** Tömbre alkalmazott változat — felsorolásokhoz és táblázatsorokhoz. */
export function huTypoAll(items: string[]): string[] {
  return items.map(huTypo);
}
