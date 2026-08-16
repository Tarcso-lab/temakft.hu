import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Faq } from "@/components/content/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/visuals/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { getPagesForHub, hrefFor, type HubPage } from "@/lib/content";
import { huTypo } from "@/lib/typography";
import { segments } from "@/lib/content";

/**
 * Illusztrációk hub oldalanként. Szemléltető képek, nem saját referenciafotók.
 */
const hubImages: Record<string, { src: string; alt: string }> = {
  uzemeltetes: {
    src: "/images/elosztoszekreny-folyoso.webp",
    alt: "Épület műszaki folyosója elosztószekrények sorával",
  },
  "tervezes-kivitelezes": {
    src: "/images/villamos-szereles.webp",
    alt: "Villamos szerelés kivitelezés alatt: kábeltálcák és behúzott vezetékek",
  },
  rendszerek: {
    src: "/images/epulettechnika-panel.webp",
    alt: "Épülettechnikai kezelőpanel és beléptető olvasó modern folyosón",
  },
  projektek: {
    src: "/images/epitkezes-daru.webp",
    alt: "Építési terület állványzattal és toronydaruval",
  },
};

export function HubPageView({ hub }: { hub: HubPage }) {
  const pages = getPagesForHub(hub.key);
  const image = hubImages[hub.key];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: hub.h1, description: hub.metaDescription, path: hub.slug }),
          faqJsonLd(hub.faq),
        ]}
      />

      <section className="noise relative overflow-hidden bg-ink-950 pb-16 pt-8 text-white sm:pb-20 sm:pt-10">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: hub.h1, href: hub.slug }]} />
          <Reveal>
            <h1 className="display-1 mt-8 max-w-[18ch] text-white">{huTypo(hub.h1)}</h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
              {huTypo(hub.lead)}
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
                width={1376}
                height={768}
                priority
                sizes="(max-width: 1200px) 100vw, 1120px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Container>
        </div>
      )}

      <Section className="pt-14 sm:pt-16">
        <Container>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <StaggerItem key={page.slug}>
                <Link
                  href={hrefFor(page)}
                  className="group flex h-full flex-col rounded-card border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-signal-400 hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-signal-400 transition-colors group-hover:bg-signal-400 group-hover:text-ink-900">
                      <Icon name={page.icon} className="h-5 w-5" />
                    </span>
                    <h2 className="text-[1.1rem] font-bold leading-snug tracking-[-0.02em] text-ink-900">
                      {page.navLabel}
                    </h2>
                  </div>
                  <p className="mt-4 flex-1 text-[0.88rem] leading-relaxed text-stone-600">
                    {page.lead}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-ink-900 transition-colors group-hover:text-signal-700">
                    Részletek
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="bg-stone-50 pt-0">
        <Container className="pt-16">
          <Reveal>
            <ContentBlocks blocks={hub.intro} />
          </Reveal>
        </Container>
      </Section>

      {hub.faq.length > 0 && (
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <Eyebrow>Gyakori kérdések</Eyebrow>
                <h2 className="display-3 mt-4 text-ink-900">Kérdések a témában</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <Faq items={hub.faq} />
              </Reveal>
            </div>
          </Container>
        </Section>
      )}

      {/* Belső linkelés: a hub oldalakról elérhetők az épülettípus szerinti
          megoldásoldalak — ez zárja a korábbi hiányt a linkstruktúrában. */}
      <Section className="bg-stone-50 py-14">
        <Container>
          <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
            Épülettípus szerint
          </h2>
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-stone-600">
            Nézze meg, mit jelent ez konkrétan az Ön épülettípusánál — a kockázatok és a
            megoldások épülettípusonként eltérnek.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {segments.map((segment) => (
              <li key={segment.slug}>
                <Link
                  href={`/megoldasok/${segment.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-[0.85rem] text-ink-800 transition-colors hover:border-signal-400 hover:text-signal-700"
                >
                  <span aria-hidden>{segment.emoji}</span>
                  {segment.name}
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
