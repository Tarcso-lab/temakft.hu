import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Section } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { segments } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Megoldások épülettípus szerint",
  description:
    "Generálkivitelezés és műszaki üzemeltetés épülettípusonként: irodaház, ipari csarnok, üzlet, szálloda, intézmény, társasház, beruházó, ingatlankezelő.",
  path: "/megoldasok",
  keywords: [
    "irodaház üzemeltetés",
    "ipari villanyszerelés",
    "szálloda műszaki üzemeltetés",
    "társasház villamos karbantartás",
    "facility management alvállalkozó",
  ],
});

export default function Page() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink-950 pb-16 pt-8 text-white sm:pb-20">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Megoldások", href: "/megoldasok" }]} />
          <Reveal>
            <h1 className="display-1 mt-8 max-w-[16ch] text-white">Megoldások épülettípus szerint</h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
              Egy csarnokban a leállás perc alapon mérhető veszteség, egy szállodában a
              vendégértékelés a tét, egy társasházban pedig a közgyűlés dönt. Az alábbi oldalakon
              épülettípusonként mutatjuk be, mit csinálunk és miért éppen úgy.
            </p>
          </Reveal>
        </Container>
      </section>

      <div className="relative -mt-8 sm:-mt-10">
        <Container>
          <div className="overflow-hidden rounded-card border border-stone-200 shadow-xl shadow-ink-900/10">
            <Image
              src="/images/varos-legifelvetel.png"
              alt="Városrész madártávlatból irodaházakkal, ipari csarnokokkal és lakóépületekkel"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1200px) 100vw, 1120px"
              className="h-auto w-full object-cover"
            />
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((segment) => (
              <StaggerItem key={segment.slug}>
                <Link
                  href={`/megoldasok/${segment.slug}`}
                  className="group flex h-full flex-col rounded-card border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-signal-400 hover:shadow-md"
                >
                  <span className="text-3xl" aria-hidden>
                    {segment.emoji}
                  </span>
                  <h2 className="mt-4 text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-ink-900">
                    {segment.name}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-stone-600">
                    {segment.lead}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-ink-900 transition-colors group-hover:text-signal-700">
                    Megoldások megtekintése
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand variant="felmeres" />
    </>
  );
}
