import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow, Section, Stat } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { brands, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Rólunk — TEMA Menedzsment Kft.",
  description:
    "A TEMA Menedzsment Kft. generálkivitelezéssel és műszaki épületüzemeltetéssel foglalkozik Budapesten és Pest vármegyében. Ismerje meg a szemléletünket.",
  path: "/rolunk",
  keywords: [
    "TEMA Menedzsment Kft",
    "épületüzemeltető cég",
    "villamos kivitelező cég",
    "gyengeáramú kivitelező",
  ],
});

const principles = [
  {
    title: "Amit megépítünk, azt üzemeltetni is tudjuk",
    text: "Ez nem szlogen, hanem tervezési szempont. Ha tudjuk, hogy három év múlva nekünk kell hibát keresni benne, másképp tervezünk: tartalékkal, jelöléssel, dokumentációval.",
  },
  {
    title: "A dokumentáció nem melléktermék",
    text: "Megvalósulási terv, végpontlista, mérési jegyzőkönyvek. Minden általunk átadott rendszernél alapkövetelmény — mert nélküle minden későbbi hiba drágább.",
  },
  {
    title: "Nem építünk függőséget magunktól",
    text: "Az adminisztrátori hozzáféréseket és a programozott projektfájlokat átadjuk. Egy szolgáltatóváltás lehet kellemetlen, de nem lehet lehetetlen.",
  },
  {
    title: "Megmondjuk, ha valami nem éri meg",
    text: "Ha egy javítás gazdaságosabb, mint a csere — vagy fordítva —, azt megmondjuk, akkor is, ha az nekünk kisebb munkát jelent. Egy elveszített megrendelés olcsóbb, mint egy elveszített ügyfél.",
  },
];

const numbers = [
  { value: "4", label: "szakterület egy szerződésben: erősáram, gyengeáram, IT, automatizálás" },
  { value: "0–24", label: "ügyeleti hibabejelentés szerződéses partnereknek" },
  { value: "8", label: "épülettípusra kidolgozott üzemeltetési megközelítés" },
];

export default function Page() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink-950 pb-16 pt-8 text-white sm:pb-20">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Rólunk", href: "/rolunk" }]} />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <h1 className="display-1 mt-8 max-w-[16ch] text-white">
                Egy műszaki partner az épület teljes életciklusára
              </h1>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
                A TEMA Menedzsment Kft. generálkivitelezéssel és műszaki épületüzemeltetéssel
                foglalkozik Budapesten és Pest vármegyében. Generálkivitelezőként a teljes építési
                feladatot visszük — minden szakággal együtt —, szakmai magunk pedig az épületek
                erős- és gyengeáramú, valamint automatizálási rendszere, amelyet a felméréstől a
                hosszú távú üzemeltetésig kezelünk.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-card border border-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/images/irodahaz-epulet.webp"
                  alt="Modern irodaház homlokzata esti kivilágításban"
                  width={1376}
                  height={768}
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
              {numbers.map((n) => (
                <Stat key={n.label} dark value={n.value} label={n.label} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Amit csinálunk</Eyebrow>
              <h2 className="display-2 mt-4 text-ink-900">
                Nem szakembereket közvetítünk — felelősséget vállalunk
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="prose-tema">
                <p>
                  Az épületek műszaki rendszereit teljes életciklusukon keresztül kezeljük.
                  Foglalkozunk épületvillamossági és erősáramú rendszerek kialakításával és
                  karbantartásával, valamint gyengeáramú és IT-infrastrukturális rendszerek
                  tervezésével, kivitelezésével és üzemeltetésével — ide tartoznak a strukturált
                  informatikai hálózatok, a kamerarendszerek, a beléptetésvezérlő rendszerek, a
                  kaputelefonok, a kaputechnikai rendszerek, valamint az épületautomatizálási és
                  okosépület-megoldások.
                </p>
                <p>
                  Szolgáltatásaink nem korlátozódnak egy-egy rendszer telepítésére. A helyszíni
                  felméréstől és tervezéstől kezdve a kivitelezésen és üzembe helyezésen át a
                  karbantartásig, hibafeltárásig és hosszú távú üzemeltetésig kísérjük végig az
                  épület műszaki működését.
                </p>
                <p>
                  Projektalapon generálkivitelezéssel és műszaki projektmenedzsmenttel is
                  foglalkozunk. Generálkivitelezőként nem csak a villamos szakágat visszük, hanem a
                  teljes építési feladatot: az építőmesteri munkáktól az épületgépészeten át a
                  szárazépítésig, a burkolásig, a festésig és a belsőépítészetig. A projektek során
                  vállaljuk a szakágak koordinációját, a kivitelezés szervezését, a dokumentáció
                  kezelését, a határidők nyomon követését és a projekt végigkísérését az
                  előkészítéstől az átadásig.
                </p>
                <p>
                  Elsősorban Budapesten és Pest vármegyében dolgozunk. Ennek gyakorlati oka van: a
                  generálkivitelezés és az üzemeltetés minőségét egyaránt a napi helyszíni jelenlét
                  dönti el, és ezt csak ésszerű távolságon belül tudjuk felelősen vállalni.
                </p>
                <h2>Miért egy partnerrel érdemes dolgozni?</h2>
                <p>
                  Célunk, hogy ügyfeleinknek ne különálló szakembereket és rendszereket kelljen
                  koordinálniuk, hanem egyetlen, megbízható műszaki partnerrel dolgozhassanak. A
                  több szakágas üzemeltetés legnagyobb rejtett költsége ugyanis nem a munkadíj,
                  hanem a koordináció — és az a hiba, amelyik két szolgáltató között elveszik.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container>
          <Reveal>
            <Eyebrow>Alapelveink</Eyebrow>
            <h2 className="display-2 mt-4 max-w-[16ch] text-ink-900">
              Négy dolog, amiben nem kötünk kompromisszumot
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-stone-200 bg-white p-7">
                  <h3 className="text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.93rem] leading-relaxed text-stone-600">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Alkalmazott márkák</Eyebrow>
            <h2 className="display-2 mt-4 max-w-[18ch] text-ink-900">
              Kiforrott rendszerek, hosszú távú alkatrészellátással
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-stone-600">
              A gyártóválasztásnál nem a legolcsóbb és nem a legdivatosabb megoldást keressük, hanem
              azt, amelyik tíz év múlva is szervizelhető és bővíthető. Ha a megrendelőnek más
              gyártói preferenciája van, vagy meglévő rendszert kell bővíteni, azzal is dolgozunk.
            </p>
          </Reveal>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <StaggerItem key={brand.slug}>
                <div className="h-full rounded-card border border-stone-200 bg-white p-5">
                  <p className="text-[1.05rem] font-bold tracking-[-0.02em] text-ink-900">
                    {brand.name}
                  </p>
                  <p className="mt-1.5 text-[0.83rem] leading-relaxed text-stone-600">
                    {brand.area}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mt-8 text-[0.88rem] text-stone-600">
            A konkrét rendszerekről a{" "}
            <Link href="/rendszerek" className="font-semibold text-signal-700 underline underline-offset-2">
              Rendszereink
            </Link>{" "}
            oldalon olvashat részletesen, a garanciavállalásunkról pedig a{" "}
            <Link
              href="/garancialis-feltetelek"
              className="font-semibold text-signal-700 underline underline-offset-2"
            >
              garanciális feltételek
            </Link>{" "}
            oldalon.
          </p>
        </Container>
      </Section>

      <Section className="bg-stone-50 py-14">
        <Container>
          <div className="rounded-card border border-stone-200 bg-white p-7 sm:p-9">
            <h2 className="text-[1.2rem] font-bold tracking-[-0.02em] text-ink-900">Cégadatok</h2>
            <dl className="mt-5 grid gap-x-10 gap-y-3 text-[0.9rem] sm:grid-cols-2">
              <Row label="Cégnév" value={site.legalName} />
              <Row label="Munkaterület" value={site.areaServed.slice(0, 4).join(", ")} />
              <Row label="Adószám" value={site.contact.taxNumber} />
              <Row label="Cégjegyzékszám" value={site.contact.companyNumber} />
              <Row label="E-mail" value={site.contact.email} />
              <Row label="Telefon" value={site.contact.phone} />
            </dl>
          </div>
        </Container>
      </Section>

      <CtaBand variant="felmeres" />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 border-b border-stone-100 pb-2.5">
      <dt className="shrink-0 font-medium text-stone-500">{label}:</dt>
      <dd className="text-ink-900">{value}</dd>
    </div>
  );
}
