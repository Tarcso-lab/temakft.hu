import { TriangleAlert } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Container, Section } from "@/components/ui/primitives";
import type { ContentBlock } from "@/lib/content";

export function LegalPageView({
  title,
  href,
  lead,
  effectiveFrom,
  blocks,
  reviewNote = true,
}: {
  title: string;
  href: string;
  lead: string;
  effectiveFrom: string;
  blocks: ContentBlock[];
  reviewNote?: boolean;
}) {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50 pb-10 pt-8">
        <Container>
          <Breadcrumbs items={[{ label: title, href }]} />
          <h1 className="display-2 mt-7 max-w-[20ch] text-ink-900">{title}</h1>
          <p className="mt-5 max-w-3xl text-[1rem] leading-relaxed text-stone-600">{lead}</p>
          <p className="mt-5 text-[0.82rem] text-stone-500">
            Hatályos: <strong className="font-semibold text-ink-800">{effectiveFrom}</strong>
          </p>
        </Container>
      </section>

      <Section className="pt-12">
        <Container>
          {reviewNote && (
            <div className="mb-10 flex items-start gap-3 rounded-card border border-amber-300 bg-amber-50 p-5">
              <TriangleAlert className="mt-0.5 h-[18px] w-[18px] shrink-0 text-amber-700" />
              <p className="text-[0.86rem] leading-relaxed text-amber-900">
                <strong className="font-semibold">Megjegyzés a dokumentum állapotáról:</strong> ez a
                szöveg szerkesztésre kész tervezet, amely a TEMA Menedzsment Kft. tényleges
                gyakorlatához igazítandó, és közzététel előtt jogi felülvizsgálatot igényel. A
                szögletes zárójelben lévő értékeket a valós cégadatokra és feltételekre kell
                cserélni.
              </p>
            </div>
          )}

          <ContentBlocks blocks={blocks} />
        </Container>
      </Section>
    </>
  );
}
