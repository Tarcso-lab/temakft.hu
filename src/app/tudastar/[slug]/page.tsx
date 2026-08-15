import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Faq } from "@/components/content/Faq";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { huTypo } from "@/lib/typography";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { articles, getArticle, labelForHref } from "@/lib/content";
import { formatDateHu } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/tudastar/${article.slug}`,
    keywords: article.keywords,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: article.title,
            description: article.metaDescription,
            path: `/tudastar/${article.slug}`,
            publishedAt: article.publishedAt,
            updatedAt: article.updatedAt,
          }),
          ...(article.faq ? [faqJsonLd(article.faq)] : []),
        ]}
      />

      <section className="noise relative overflow-hidden bg-ink-950 pb-14 pt-8 text-white">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              { label: "Tudástár", href: "/tudastar" },
              { label: article.title, href: `/tudastar/${article.slug}` },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Eyebrow dark>{article.category}</Eyebrow>
            <h1 className="display-2 mt-4 text-white">{huTypo(article.title)}</h1>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-stone-400">
              {huTypo(article.excerpt)}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem] text-stone-500">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <time dateTime={article.publishedAt}>{formatDateHu(article.publishedAt)}</time>
              </span>
              {article.updatedAt && (
                <span>Frissítve: {formatDateHu(article.updatedAt)}</span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {article.readingMinutes} perc olvasás
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Section className="pt-14 sm:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            <article>
              <ContentBlocks blocks={article.body} />

              {article.faq && article.faq.length > 0 && (
                <div className="mt-14">
                  <h2 className="display-3 mb-7 text-ink-900">Gyakori kérdések</h2>
                  <Faq items={article.faq} />
                </div>
              )}

              {article.related && article.related.length > 0 && (
                <nav className="mt-14 border-t border-stone-200 pt-8" aria-label="Kapcsolódó szolgáltatások">
                  <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
                    Kapcsolódó szolgáltatásaink
                  </h2>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {article.related.map((href) => (
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
                </nav>
              )}
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-card border border-stone-200 bg-stone-50 p-6">
                <h2 className="text-[1.05rem] font-bold tracking-[-0.02em] text-ink-900">
                  Kérdése van a témában?
                </h2>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-stone-600">
                  Hagyja meg a számát, és visszahívjuk. Konkrét kérdésre konkrét választ adunk.
                </p>
                <div className="mt-5">
                  <LeadForm variant="visszahivas" compact />
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container>
          <h2 className="display-3 text-ink-900">További cikkek</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((other) => (
              <Link
                key={other.slug}
                href={`/tudastar/${other.slug}`}
                className="group flex h-full flex-col rounded-card border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-signal-400 hover:shadow-md"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-signal-600">
                  {other.category}
                </span>
                <h3 className="mt-3 text-[1.02rem] font-bold leading-snug tracking-[-0.02em] text-ink-900">
                  {other.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.86rem] leading-relaxed text-stone-600">
                  {other.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Az oldalsávban már van visszahívás-űrlap — itt csak keskeny lezárás. */}
      <CtaStrip
        title="Kérdése van a saját épületéről?"
        text="A cikk általános szempontokat ad. Ha a konkrét helyzetére kíváncsi, mérjük fel — díjmentesen, kötelezettség nélkül."
      />
    </>
  );
}
