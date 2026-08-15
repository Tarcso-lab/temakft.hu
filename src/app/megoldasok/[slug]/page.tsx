import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleAlert, CircleCheckBig } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Faq } from "@/components/content/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { getSegment, labelForHref, segments } from "@/lib/content";
import { huTypo } from "@/lib/typography";

/**
 * Belső linkelés: melyik célcsoport-oldalról mely szolgáltatásoldalakra
 * vezetünk tovább. Korábban a megoldásoldalak csak egymásra linkeltek,
 * ami elvágta őket a konverziós oldalaktól.
 */
const relatedServices: Record<string, string[]> = {
  irodahazak: [
    "/uzemeltetes/muszaki-epuletuzemeltetes",
    "/projektek/generalkivitelezes",
    "/tervezes-kivitelezes/it-halozat",
    "/rendszerek/beleptetes",
  ],
  "ipari-logisztika": [
    "/uzemeltetes/villamos-uzemeltetes",
    "/tervezes-kivitelezes/erosaram",
    "/rendszerek/kamerarendszerek",
    "/rendszerek/biztonsagtechnika",
  ],
  "uzletek-kereskedelem": [
    "/rendszerek/kamerarendszerek",
    "/projektek/generalkivitelezes",
    "/tervezes-kivitelezes/it-halozat",
    "/uzemeltetes/karbantartas",
  ],
  szallodak: [
    "/tervezes-kivitelezes/epuletautomatizalas",
    "/rendszerek/okosepulet",
    "/projektek/generalkivitelezes",
    "/tervezes-kivitelezes/it-halozat",
  ],
  intezmenyek: [
    "/uzemeltetes/villamos-uzemeltetes",
    "/uzemeltetes/karbantartas",
    "/rendszerek/beleptetes",
    "/projektek/dokumentacio",
  ],
  tarsashazak: [
    "/rendszerek/kaputelefon",
    "/uzemeltetes/villamos-uzemeltetes",
    "/projektek/generalkivitelezes",
    "/rendszerek/biztonsagtechnika",
  ],
  "beruhazok-generalkivitelezok": [
    "/projektek/generalkivitelezes",
    "/projektek/projektmenedzsment",
    "/projektek/muszaki-koordinacio",
    "/projektek/dokumentacio",
  ],
  ingatlankezelok: [
    "/uzemeltetes/muszaki-epuletuzemeltetes",
    "/uzemeltetes/sla-rendelkezesre-allas",
    "/uzemeltetes/karbantartas",
    "/projektek/generalkivitelezes",
  ],
  "lakasok-csaladi-hazak": [
    "/projektek/generalkivitelezes",
    "/tervezes-kivitelezes/erosaram",
    "/rendszerek/okosepulet",
    "/projektek/atadas-uzembe-helyezes",
  ],
};

/**
 * Illusztrációk. Szemléltető képek, nem a cég saját referenciafotói —
 * amint vannak valódi helyszíni fotók, ezeket azokra kell cserélni.
 */
const segmentImages: Record<string, { src: string; alt: string }> = {
  irodahazak: {
    src: "/images/irodahaz-aula.png",
    alt: "Modern irodaház aulája, beléptető olvasóval az üvegajtó mellett",
  },
  "ipari-logisztika": {
    src: "/images/logisztikai-csarnok.png",
    alt: "Logisztikai csarnok belső tere ipari LED-világítással és raktári állványokkal",
  },
  szallodak: {
    src: "/images/szalloda-folyoso.png",
    alt: "Szállodai folyosó kártyás ajtónyitóval és szobai klímavezérlő panellel",
  },
  "uzletek-kereskedelem": {
    src: "/images/uzlet-belso.png",
    alt: "Üzlet belső tere árupolcokkal, pénztárpulttal és mennyezeti biztonsági kamerával",
  },
  intezmenyek: {
    src: "/images/intezmeny-folyoso.png",
    alt: "Intézményi épület világos folyosója menekülési jelzéssel és beléptető olvasóval",
  },
  tarsashazak: {
    src: "/images/tarsashaz-bejarat.png",
    alt: "Társasház felújított bejárati tere postaládákkal és video-kaputelefonnal",
  },
  "beruhazok-generalkivitelezok": {
    src: "/images/epitkezes-daru.png",
    alt: "Épülő kereskedelmi ingatlan építési területe állványzattal és toronydaruval",
  },
  ingatlankezelok: {
    src: "/images/ingatlankezeles-terv.png",
    alt: "Ingatlankezelői íróasztal alaprajzokkal és épületfelügyeleti kimutatással",
  },
  "lakasok-csaladi-hazak": {
    src: "/images/felujitott-lakas.png",
    alt: "Frissen felújított, üres lakásbelső világos padlóval és nagy ablakkal",
  },
};

export function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) return {};

  return buildMetadata({
    title: segment.metaTitle,
    description: segment.metaDescription,
    path: `/megoldasok/${segment.slug}`,
    keywords: segment.keywords,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) notFound();

  const others = segments.filter((s) => s.slug !== segment.slug);
  const image = segmentImages[segment.slug];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: segment.h1,
            description: segment.metaDescription,
            path: `/megoldasok/${segment.slug}`,
          }),
          faqJsonLd(segment.faq),
        ]}
      />

      <section className="noise relative overflow-hidden bg-ink-950 pb-16 pt-8 text-white sm:pb-20">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              { label: "Megoldások", href: "/megoldasok" },
              { label: segment.name, href: `/megoldasok/${segment.slug}` },
            ]}
          />
          <Reveal>
            <span className="mt-8 block text-4xl" aria-hidden>
              {segment.emoji}
            </span>
            <h1 className="display-1 mt-5 max-w-[18ch] text-white">{huTypo(segment.h1)}</h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
              {huTypo(segment.lead)}
            </p>
          </Reveal>
        </Container>
      </section>

      {image && (
        <div className="relative -mt-8 sm:-mt-10">
          <Container>
            <div className="overflow-hidden rounded-card border border-stone-200 shadow-xl shadow-ink-900/10">
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1200px) 100vw, 1120px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Container>
        </div>
      )}

      {/* Fájdalompontok — a látogató itt ismer magára */}
      <Section className="pt-14 sm:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>Ismerős a helyzet?</Eyebrow>
              <h2 className="display-3 mt-4 text-ink-900">
                Ezekkel keresnek meg minket a leggyakrabban
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                {segment.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CircleAlert className="mt-0.5 h-[18px] w-[18px] shrink-0 text-stone-400" />
                    <span className="text-[0.95rem] leading-relaxed text-stone-600">
                      {huTypo(point)}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <Eyebrow>Amit adunk</Eyebrow>
              <h2 className="display-3 mt-4 text-ink-900">Konkrét megoldások, nem ígéretek</h2>
              <Stagger className="mt-8 flex flex-col gap-5">
                {segment.deliverables.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="rounded-card border border-stone-200 bg-white p-5">
                      <h3 className="flex items-start gap-2.5 text-[1rem] font-bold tracking-[-0.015em] text-ink-900">
                        <CircleCheckBig className="mt-0.5 h-[18px] w-[18px] shrink-0 text-signal-600" />
                        {item.title}
                      </h3>
                      <p className="mt-2 pl-[28px] text-[0.89rem] leading-relaxed text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container>
          <ContentBlocks blocks={segment.body} />
        </Container>
      </Section>

      {segment.faq.length > 0 && (
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <Eyebrow>Gyakori kérdések</Eyebrow>
                <h2 className="display-3 mt-4 text-ink-900">Kérdések — {segment.name}</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <Faq items={segment.faq} />
              </Reveal>
            </div>
          </Container>
        </Section>
      )}

      <Section className="py-14">
        <Container>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
            Kapcsolódó szolgáltatásaink
          </h2>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {(relatedServices[segment.slug] ?? []).map((href) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-stone-200 px-4 py-3.5 text-[0.9rem] font-medium text-ink-800 transition-all hover:border-signal-400 hover:bg-stone-50"
                >
                  {labelForHref(href)}
                  <ArrowRight className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-signal-600" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-stone-50 py-14">
        <Container>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
            További épülettípusok
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/megoldasok/${other.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-[0.85rem] text-ink-800 transition-colors hover:border-signal-400 hover:text-signal-700"
                >
                  <span aria-hidden>{other.emoji}</span>
                  {other.name}
                  <ArrowRight className="h-3.5 w-3.5 text-stone-400" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand variant="felmeres" />
    </>
  );
}
