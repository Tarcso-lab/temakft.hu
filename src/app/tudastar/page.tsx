import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { articleCategories, articles } from "@/lib/content";
import { formatDateHu } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Tudástár — útmutatók épületüzemeltetéshez",
  description:
    "Szakmai cikkek üzemeltetőknek és beruházóknak: érintésvédelmi felülvizsgálat, kamerarendszer tervezés, KNX és Loxone, SLA, strukturált hálózat.",
  path: "/tudastar",
  keywords: [
    "épületüzemeltetés tudástár",
    "érintésvédelmi felülvizsgálat",
    "kamerarendszer tervezés",
    "KNX vagy Loxone",
    "strukturált hálózat",
  ],
});

// A hírcsatorna felfedezhetővé tétele: enélkül a keresők és az olvasók csak
// akkor találják meg, ha ismerik a pontos címét.
metadata.alternates = {
  ...metadata.alternates,
  types: { "application/rss+xml": [{ url: "/tudastar/rss.xml", title: "TEMA — Tudástár" }] },
};

export default function Page() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="noise relative overflow-hidden bg-ink-950 pb-16 pt-8 text-white sm:pb-20">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Tudástár", href: "/tudastar" }]} />
          <Reveal>
            <h1 className="display-1 mt-8 max-w-[14ch] text-white">Tudástár</h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
              Gyakorlati írások arról, amit üzemeltetőként, ingatlankezelőként vagy beruházóként
              érdemes tudni — konkrét szempontokkal, tipikus hibákkal és ellenőrző listákkal.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-2">
            {articleCategories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-[0.78rem] text-stone-400"
              >
                {category}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container>
          {featured && (
            <Reveal>
              <Link
                href={`/tudastar/${featured.slug}`}
                className="group grid gap-8 rounded-card border border-stone-200 bg-white p-7 transition-all duration-300 hover:border-signal-400 hover:shadow-lg sm:p-9 lg:grid-cols-[1.3fr_1fr] lg:items-center"
              >
                <div>
                  <Eyebrow>Kiemelt cikk · {featured.category}</Eyebrow>
                  <h2 className="display-3 mt-4 text-ink-900">{featured.title}</h2>
                  <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-stone-600">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-ink-900 transition-colors group-hover:text-signal-700">
                    Cikk elolvasása
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="flex gap-4 border-t border-stone-200 pt-6 text-[0.8rem] text-stone-500 lg:justify-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <span>
                    <time dateTime={featured.publishedAt}>{formatDateHu(featured.publishedAt)}</time>
                    <span className="mt-1 block">{featured.readingMinutes} perc olvasás</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <Stagger className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/tudastar/${article.slug}`}
                  className="group flex h-full flex-col rounded-card border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-signal-400 hover:shadow-md"
                >
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-signal-600">
                    {article.category}
                  </span>
                  <h2 className="mt-3 text-[1.08rem] font-bold leading-snug tracking-[-0.02em] text-ink-900">
                    {article.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-stone-600">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 flex items-center gap-2 text-[0.76rem] text-stone-500">
                    <time dateTime={article.publishedAt}>{formatDateHu(article.publishedAt)}</time>
                    <span aria-hidden>·</span>
                    <span>{article.readingMinutes} perc</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand variant="ajanlatkeres" />
    </>
  );
}
