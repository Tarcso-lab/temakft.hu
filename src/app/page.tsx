import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  Stat,
} from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { BuildingVisual } from "@/components/visuals/BuildingVisual";
import { Icon } from "@/components/visuals/Icon";
import { Faq } from "@/components/content/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { brands, mainNav, partners, site } from "@/lib/site";
import { articles, hubs, segments } from "@/lib/content";
import { formatDateHu } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Generálkivitelezés és műszaki épületüzemeltetés | TEMA",
  description:
    "Generálkivitelezés és műszaki épületüzemeltetés Budapesten és Pest vármegyében: teljes körű kivitelezés minden szakággal, egyetlen felelős partnerrel.",
  path: "/",
  keywords: [
    "műszaki épületüzemeltetés",
    "épületüzemeltetés",
    "villamos üzemeltetés",
    "gyengeáramú rendszerek",
    "kamerarendszer telepítés",
    "beléptető rendszer",
    "épületautomatizálás",
    "generálkivitelezés",
  ],
});

const homeFaq = [
  {
    q: "Mit jelent pontosan a műszaki épületüzemeltetés?",
    a: "Az épület műszaki rendszereinek folyamatos működtetését jelenti: tervezett megelőző karbantartást, hibaelhárítást, mérések és felülvizsgálatok elvégzését, valamint a műszaki dokumentáció naprakészen tartását. A TEMA ezt erős- és gyengeáramú rendszerekre egyaránt vállalja, egyetlen szerződés keretében.",
  },
  {
    q: "Milyen épületekkel foglalkoznak?",
    a: "Elsősorban irodaházakkal, ipari és logisztikai létesítményekkel, kereskedelmi ingatlanokkal, szállodákkal, intézményekkel és társasházakkal dolgozunk. Emellett beruházók és generálkivitelezők szakági partnereként is jelen vagyunk projektekben.",
  },
  {
    q: "Csak üzemeltetést vállalnak, vagy kivitelezést is?",
    a: "Mindkettőt. Vállalunk tervezést és kivitelezést, projektalapon generálkivitelezést, és hosszú távú üzemeltetést is. A legtöbb ügyfelünknél ez a három egymásra épül: amit megtervezünk és megépítünk, azt utána mi is üzemeltetjük.",
  },
  {
    q: "Mennyi idő alatt kapok ajánlatot?",
    a: "Egyszerűbb feladatnál a helyszíni felmérés után néhány munkanap, összetettebb, több szakágas projektnél egy–két hét. Az ajánlatot megelőző helyszíni felmérés díjmentes és nem jár kötelezettséggel.",
  },
  {
    q: "Van ügyeleti elérhetőség hiba esetén?",
    a: "Üzemeltetési szerződéssel rendelkező partnereinknek igen: az SLA-ban rögzítjük, mely hibatípusok számítanak kritikusnak, és ezekre milyen reakcióidőt vállalunk munkaidőben és azon kívül.",
  },
];

const pillars = [
  {
    title: "Egy partner, nem öt alvállalkozó",
    text: "Erősáram, gyengeáram, hálózat és automatizálás egy kézben. A szakágak közötti egyeztetés a mi dolgunk — nem az Öné.",
  },
  {
    title: "Mérhető, nem ígért szolgáltatás",
    text: "Szerződésben rögzített reakcióidők, hibajegyek időbélyeggel, havi riport. Az üzemeltetés minősége így számonkérhető.",
  },
  {
    title: "Dokumentált, átvehető rendszerek",
    text: "Megvalósulási terv, végpontlista, mérési jegyzőkönyvek — és a hozzáférések átadása. Nem építünk függőséget magunktól.",
  },
];

const process = [
  { step: "01", title: "Felmérés", text: "Helyszíni bejárás, a rendszerek tényleges állapotának felvétele." },
  { step: "02", title: "Állapotjelentés", text: "Írásos jelentés a kockázatokról, prioritási sorrendbe rendezve." },
  { step: "03", title: "Tervezés", text: "Műszaki tartalom, ütemterv és tételes, átlátható árajánlat." },
  { step: "04", title: "Kivitelezés", text: "Szakági koordináció, ellenőrzött minőség, ütemezett munkavégzés." },
  { step: "05", title: "Üzembe helyezés", text: "Mérések, próbaüzem, betanítás és teljes dokumentáció átadása." },
  { step: "06", title: "Üzemeltetés", text: "Karbantartási ütemterv, SLA-alapú hibaelhárítás, havi riport." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />

      {/* ---------------------------------------------------------------- HERO */}
      <section className="noise relative overflow-hidden bg-ink-950 pb-20 pt-14 text-white sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0" />
        <div
          aria-hidden
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-signal-400/10 blur-[120px]"
        />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <Reveal>
                <Eyebrow dark>Generálkivitelezés · Budapest és Pest vármegye</Eyebrow>
              </Reveal>

              <Reveal delay={0.05}>
                {/* A H1 szándékosan tartalmazza a „generálkivitelezés" szót:
                    a kutatás szerint ez a legnagyobb volumenű (1 300/hó),
                    reálisan megnyerhető kifejezés (nehézségi pontszám 13). */}
                <h1 className="display-1 mt-6 max-w-[17ch] text-white">
                  <span className="text-signal-400">Generálkivitelezés</span> és
                  épületüzemeltetés egy kézben.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-stone-400">
                  Teljes körű kivitelezés minden szakággal — építőmesteri munkáktól a gépészeten
                  és a villamosságon át a festésig. Emellett erős- és gyengeáramú rendszerek
                  tervezése, karbantartása és folyamatos üzemeltetése. Egy szerződés, egy
                  határidő, egy felelős partner.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                  <ButtonLink href="/ajanlatkeres" size="lg">
                    Ajánlatot kérek
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  {/* A telefonszám szándékosan nem gomb: egyetlen elsődleges
                      műveletet hagyunk a heróban, a hívás másodlagos út. */}
                  <span className="flex items-center gap-2.5 text-[0.95rem] text-stone-400">
                    <Phone className="h-4 w-4 shrink-0 text-signal-400" />
                    vagy hívjon:
                    <a
                      href={site.contact.phoneHref}
                      className="font-semibold text-white underline decoration-white/25 underline-offset-4 transition-colors hover:text-signal-400 hover:decoration-signal-400"
                    >
                      {site.contact.phone}
                    </a>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-3">
                  <Stat dark value="0–24" label="ügyeleti hibabejelentés szerződéses partnereknek" />
                  <Stat dark value="1 szerződés" label="erős- és gyengeáram együtt" />
                  <Stat dark value="Díjmentes" label="helyszíni felmérés és állapotjelentés" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative">
              <BuildingVisual className="mx-auto w-full max-w-[520px]" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- MÁRKÁK */}
      <MarqueeStrip
        title="Az általunk alkalmazott rendszerek"
        items={brands.map((b) => b.name)}
      />

      {/* --------------------------------------------------------- ÉRTÉKAJÁNLAT */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Miért a TEMA?</Eyebrow>
              <h2 className="display-2 mt-4 max-w-[15ch] text-ink-900">
                Ne rendszereket koordináljon — dolgozzon egy partnerrel.
              </h2>
              <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-stone-600">
                A legtöbb épületben nem a szakmunka minősége a probléma, hanem az, hogy a
                villanyszerelő, a hálózatos és a biztonságtechnikus külön dolgozik. A hibák a
                szakágak között keletkeznek — és ott is ragadnak.
              </p>
              <ButtonLink href="/rolunk" variant="ghost" className="mt-7 -ml-2">
                Ismerje meg a csapatot
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>

            <Stagger className="flex flex-col divide-y divide-stone-200 border-t border-stone-200">
              {pillars.map((pillar) => (
                <StaggerItem key={pillar.title} className="py-7 first:pt-7">
                  <h3 className="text-[1.15rem] font-bold tracking-[-0.02em] text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-stone-600">
                    {pillar.text}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------- SZOLGÁLTATÁSOK */}
      <Section className="bg-stone-50">
        <Container>
          <Reveal>
            <Eyebrow>Szolgáltatásaink</Eyebrow>
            <h2 className="display-2 mt-4 max-w-[20ch] text-ink-900">
              Négy terület, amely lefedi az épület teljes műszaki életciklusát
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {hubs.map((hub) => {
              const navItem = mainNav.find((n) => n.href === hub.slug);
              return (
                <StaggerItem key={hub.key}>
                  <div className="group relative flex h-full flex-col rounded-card border border-stone-200 bg-white p-7 transition-all duration-300 hover:border-signal-400 hover:shadow-lg hover:shadow-ink-900/5">
                    <h3 className="text-[1.3rem] font-bold tracking-[-0.025em] text-ink-900">
                      <Link href={hub.slug} className="after:absolute after:inset-0">
                        {navItem?.label ?? hub.h1}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[0.93rem] leading-relaxed text-stone-600">{hub.lead}</p>

                    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-stone-100 pt-5">
                      {navItem?.children?.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="relative z-10 text-[0.82rem] text-stone-500 transition-colors hover:text-signal-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-ink-900 transition-colors group-hover:text-signal-700">
                      Részletek
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ PARTNEREK */}
      <MarqueeStrip title="Partnereink" items={partners} />

      {/* ---------------------------------------------- GYORS VISSZAHÍVÁS (CTA) */}
      <Section className="py-14 sm:py-16">
        <Container>
          <div className="grid items-center gap-8 rounded-card border border-stone-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-14">
            <div>
              <Eyebrow>2 perc az egész</Eyebrow>
              <h2 className="display-3 mt-4 text-ink-900">
                Nem tudja, melyik szolgáltatás kell? Hívjuk vissza.
              </h2>
              <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-stone-600">
                Hagyja meg a nevét és a telefonszámát. Munkaidőben egy órán belül visszahívjuk, és
                közösen tisztázzuk, mire van szüksége. Nem értékesítő fog hívni, hanem az a
                kolléga, aki a kérdésére válaszolni tud.
              </p>
              <p className="mt-6 text-[0.85rem] text-stone-500">
                Sürgős műszaki hiba?{" "}
                <Link
                  href="/uzemeltetes/hibafeltaras-hibaelharitas"
                  className="font-semibold text-signal-700 underline underline-offset-2"
                >
                  Hibabejelentés
                </Link>
              </p>
            </div>
            <div className="rounded-card border border-stone-200 bg-stone-50 p-5 sm:p-6">
              <LeadForm variant="visszahivas" compact />
            </div>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- SZEGMENSEK */}
      <Section dark className="overflow-hidden">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-60" />
        <Container className="relative">
          <Reveal>
            <Eyebrow dark>Kiknek dolgozunk?</Eyebrow>
            <h2 className="display-2 mt-4 max-w-[20ch] text-white">
              Épülettípusonként más a kockázat — más a megoldás is
            </h2>
            <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-stone-400">
              Egy logisztikai központban a leállás perc alapon mérhető veszteség, egy szállodában a
              vendégértékelés a tét, egy társasházban pedig a közgyűlés dönt. Válassza ki, melyik
              helyzet áll Önhöz a legközelebb.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment) => (
              <StaggerItem key={segment.slug}>
                <Link
                  href={`/megoldasok/${segment.slug}`}
                  className="group flex h-full flex-col rounded-card border border-ink-700 bg-ink-850 p-5 transition-all duration-300 hover:border-signal-400/60 hover:bg-ink-800"
                >
                  <span className="text-2xl" aria-hidden>
                    {segment.emoji}
                  </span>
                  <h3 className="mt-3.5 text-[1rem] font-semibold leading-snug tracking-[-0.015em] text-white">
                    {segment.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-[0.82rem] leading-relaxed text-stone-400">
                    {segment.lead}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-signal-400">
                    Megoldások
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- FOLYAMAT */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow>Hogyan dolgozunk?</Eyebrow>
            <h2 className="display-2 mt-4 max-w-[18ch] text-ink-900">
              Felméréstől az üzemeltetésig, kihagyott lépések nélkül
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <StaggerItem key={item.step}>
                <div className="border-t-2 border-stone-200 pt-5 transition-colors hover:border-signal-400">
                  <span className="font-mono text-[0.8rem] font-semibold text-signal-600">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-[1.1rem] font-bold tracking-[-0.02em] text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-stone-600">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ RENDSZEREK */}
      <Section className="bg-stone-50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Eyebrow>Rendszereink</Eyebrow>
              <h2 className="display-2 mt-4 max-w-[16ch] text-ink-900">
                Amit telepítünk, azt üzemeltetni is tudjuk
              </h2>
            </Reveal>
            <ButtonLink href="/rendszerek" variant="ghost">
              Összes rendszer
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mainNav
              .find((n) => n.href === "/rendszerek")
              ?.children?.map((child, i) => (
                <StaggerItem key={child.href}>
                  <Link
                    href={child.href}
                    className="group flex h-full items-start gap-4 rounded-card border border-stone-200 bg-white p-5 transition-all duration-300 hover:border-signal-400 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-signal-400 transition-colors group-hover:bg-signal-400 group-hover:text-ink-900">
                      <Icon
                        name={
                          ["Cctv", "ScanFace", "PhoneCall", "Cable", "Sparkles", "ShieldCheck"][i] ??
                          "Blocks"
                        }
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[1rem] font-semibold tracking-[-0.015em] text-ink-900">
                        {child.label}
                      </span>
                      <span className="mt-1 block text-[0.85rem] leading-relaxed text-stone-600">
                        {child.description}
                      </span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
          </Stagger>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- TUDÁSTÁR */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Eyebrow>Tudástár</Eyebrow>
              <h2 className="display-2 mt-4 max-w-[18ch] text-ink-900">
                Gyakorlati útmutatók üzemeltetőknek és beruházóknak
              </h2>
            </Reveal>
            <ButtonLink href="/tudastar" variant="ghost">
              Összes cikk
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <Stagger className="mt-11 grid gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/tudastar/${article.slug}`}
                  className="group flex h-full flex-col rounded-card border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-signal-400 hover:shadow-md"
                >
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-signal-600">
                    {article.category}
                  </span>
                  <h3 className="mt-3 text-[1.08rem] font-bold leading-snug tracking-[-0.02em] text-ink-900">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-stone-600">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 flex items-center gap-2 text-[0.76rem] text-stone-500">
                    <time dateTime={article.publishedAt}>{formatDateHu(article.publishedAt)}</time>
                    <span aria-hidden>·</span>
                    <span>{article.readingMinutes} perc olvasás</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ------------------------------------------------------------------ GYIK */}
      <Section className="bg-stone-50 pt-0">
        <Container>
          <div className="grid gap-10 pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pt-20">
            <Reveal>
              <Eyebrow>Gyakori kérdések</Eyebrow>
              <h2 className="display-3 mt-4 text-ink-900">
                Amit a legtöbben megkérdeznek az első beszélgetésen
              </h2>
              <p className="mt-5 text-[0.93rem] leading-relaxed text-stone-600">
                Nem találja a választ?{" "}
                <Link
                  href="/kapcsolat"
                  className="font-semibold text-signal-700 underline underline-offset-2"
                >
                  Írjon nekünk
                </Link>
                , és konkrétan válaszolunk.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Faq items={homeFaq} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand variant="felmeres" />
    </>
  );
}
