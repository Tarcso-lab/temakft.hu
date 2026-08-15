import { Container } from "@/components/ui/primitives";

/**
 * Hány példányban ismételjük a névsort.
 *
 * A `-50%`-os eltolás a pálya felét mozdítja, és ennek legalább akkorának kell
 * lennie, mint a képernyő szélessége — különben a ciklus végén üres sáv marad a
 * jobb szélen. Nyolc másolatnál az eltolás négy listányi (a jelenlegi
 * névsoroknál ~3400 px), ami a nagy monitorokat is lefedi. Páros számnak kell
 * lennie, hogy az eltolás egész számú listányi maradjon.
 */
const COPIES = 8;

/**
 * Vízszintesen, végtelenítve futó névsor — a márkákhoz és a partnerekhez.
 *
 * A varrat nélküli ismétlés két feltételtől függ, és mindkettőt könnyű elrontani:
 *
 * 1. A pálya (`track`) csak azonos szélességű listákból állhat. Ezért a
 *    térköz és a jobb oldali levegő KIZÁRÓLAG a listákon van — a pályán nincs
 *    sem `gap`, sem `padding`. Ha a pályán is lenne, a `-50%`-os eltolás nem
 *    pontosan egész számú listányit mozdítana, és a ciklus végén megugrana.
 *
 * 2. Az eltolás egész számú másolatnyi legyen. Négy másolatnál a `-50%`
 *    pontosan kettőt mozdít, így az újrakezdéskor a 3–4. másolat kerül oda,
 *    ahol az 1–2. volt — a váltás láthatatlan. Négy másolat egyben azt is
 *    biztosítja, hogy széles képernyőn se maradjon üres rész a sáv szélén.
 *
 * Akadálymentesség: csak az ELSŐ példány olvasható, a többi `aria-hidden` —
 * így a képernyőolvasó pontosan egyszer mondja fel a neveket. Csökkentett
 * mozgás beállításnál a globális CSS leállítja az animációt; a nevek ilyenkor
 * statikusan, olvashatóan maradnak a helyükön.
 */
export function MarqueeStrip({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="border-y border-stone-200 bg-stone-50 py-6">
      <Container>
        <h2 className="text-center text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
          {title}
        </h2>
      </Container>

      <div className="mt-5 overflow-hidden">
        {/* A pályán szándékosan nincs gap és padding — lásd a fenti 1. pontot. */}
        <div className="animate-marquee flex w-max will-change-transform">
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center gap-12 pr-12"
              aria-hidden={copy > 0 || undefined}
            >
              {items.map((item) => (
                <li
                  key={`${copy}-${item}`}
                  className="whitespace-nowrap text-[1.05rem] font-bold tracking-[-0.02em] text-stone-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
