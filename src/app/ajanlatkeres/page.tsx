import type { Metadata } from "next";
import { Clock, FileCheck2, Phone, ShieldCheck, UserCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { QuoteWizard } from "@/components/forms/QuoteWizard";
import { Faq } from "@/components/content/Faq";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Ajánlatkérés — kivitelezés és üzemeltetés",
  description:
    "Kérjen kötelezettségmentes árajánlatot létesítményüzemeltetésre, karbantartási szerződésre, felújításra vagy kivitelezésre. Válasz egy munkanapon belül.",
  path: "/ajanlatkeres",
  keywords: [
    "ajánlatkérés épületüzemeltetés",
    "villanyszerelő árajánlat cégeknek",
    "kamerarendszer árajánlat",
    "karbantartási szerződés ajánlat",
  ],
});

const faq = [
  {
    q: "Mennyi idő alatt kapok választ?",
    a: "A beérkezett ajánlatkérésekre egy munkanapon belül jelentkezünk. Ha a feladat egyértelmű és jól körülhatárolt, sok esetben az árajánlatot is néhány munkanapon belül megküldjük.",
  },
  {
    q: "Kötelezettséggel jár az ajánlatkérés?",
    a: "Nem. Sem az ajánlatkérés, sem a helyszíni felmérés nem jár kötelezettséggel és nem kerül pénzbe.",
  },
  {
    q: "Miért kérdeznek rá a költségkeretre?",
    a: "Nem azért, hogy ahhoz igazítsuk az árat, hanem hogy reális műszaki megoldást javasoljunk. Ugyanarra a feladatra sokszor létezik egy takarékosabb és egy hosszú távon gazdaságosabb megoldás — a keret ismerete segít eldönteni, melyiket érdemes kidolgozni.",
  },
  {
    q: "Mi történik a megadott adataimmal?",
    a: "Az adatokat kizárólag a megkeresés megválaszolására és az ajánlat elkészítésére használjuk, harmadik félnek nem adjuk át. A részleteket az adatkezelési tájékoztatóban olvashatja.",
  },
];

const steps = [
  {
    icon: FileCheck2,
    title: "Kitölti az űrlapot",
    text: "Nagyjából két perc. Minél több részletet ad meg, annál pontosabb lesz a válaszunk.",
  },
  {
    icon: UserCheck,
    title: "Felvesszük a kapcsolatot",
    text: "Egy munkanapon belül jelentkezünk, és tisztázzuk a nyitott kérdéseket.",
  },
  {
    icon: Clock,
    title: "Helyszíni felmérés",
    text: "Ahol szükséges, díjmentesen felmérjük az épületet és állapotjelentést adunk.",
  },
  {
    icon: ShieldCheck,
    title: "Tételes ajánlat",
    text: "Írásos, tételes ajánlat, amelyben az is szerepel, mi nem része a vállalásnak.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(faq)} />

      <section className="noise relative overflow-hidden bg-ink-950 pb-14 pt-8 text-white">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Ajánlatkérés", href: "/ajanlatkeres" }]} />
          <Reveal>
            <h1 className="display-1 mt-8 max-w-[16ch] text-white">
              Kérjen ajánlatot — pontosan arra, amire szüksége van
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
              Töltse ki az alábbi űrlapot, és egy munkanapon belül jelentkezünk. Az űrlap
              segítségével pontosan meg tudja adni, milyen épületről, milyen rendszerekről és
              milyen határidőről van szó — így nekünk sem kell találgatnunk.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="pt-12 sm:pt-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
            <QuoteWizard />

            <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-card border border-stone-200 bg-stone-50 p-6">
                <Eyebrow>Hogyan tovább?</Eyebrow>
                <ol className="mt-5 flex flex-col gap-5">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-signal-400">
                        <step.icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-[0.9rem] font-semibold text-ink-900">
                          {i + 1}. {step.title}
                        </span>
                        <span className="mt-1 block text-[0.82rem] leading-relaxed text-stone-600">
                          {step.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-3 rounded-card border border-stone-200 bg-white p-5 transition-colors hover:border-signal-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-signal-400">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[0.75rem] text-stone-500">Sürgős? Hívjon minket</span>
                  <span className="block text-[1rem] font-bold text-ink-900">
                    {site.contact.phone}
                  </span>
                </span>
              </a>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="bg-stone-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Gyakori kérdések</Eyebrow>
              <h2 className="display-3 mt-4 text-ink-900">Az ajánlatkérésről</h2>
            </div>
            <Faq items={faq} />
          </div>
        </Container>
      </Section>
    </>
  );
}
