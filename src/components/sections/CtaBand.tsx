import { Phone, ShieldCheck, Clock, FileCheck2 } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import type { CtaVariant } from "@/lib/content";

const copy: Record<CtaVariant, { eyebrow: string; title: string; text: string }> = {
  ajanlatkeres: {
    eyebrow: "Ajánlatkérés",
    title: "Kérjen ajánlatot — kötelezettség nélkül",
    text: "Írja le, mire lenne szüksége, és egy munkanapon belül jelentkezünk. Ha a feladat összetettebb, helyszíni felmérést javaslunk, mert felelős árat csak a tényleges állapot ismeretében lehet adni.",
  },
  visszahivas: {
    eyebrow: "Visszahívás",
    title: "Inkább beszélne valakivel?",
    text: "Hagyja meg a számát, és munkaidőben egy órán belül visszahívjuk. Nem értékesítő fog hívni, hanem az a kolléga, aki a kérdésére válaszolni tud.",
  },
  felmeres: {
    eyebrow: "Díjmentes felmérés",
    title: "Kezdjük egy helyszíni felméréssel",
    text: "Végigjárjuk az épületet, felvesszük a rendszerek állapotát, és írásos állapotjelentést adunk — a feltárt kockázatokkal és a javasolt lépésekkel együtt. A felmérés díjmentes és nem jár kötelezettséggel.",
  },
  hibabejelentes: {
    eyebrow: "Hibabejelentés",
    title: "Áll valami? Jelentse be most",
    text: "Adja meg a helyszínt, a hiba rövid leírását és egy elérhetőséget. Munkatársunk hamarosan keresi. Ha a hiba életveszélyt jelent, kérjük, telefonon is jelezze.",
  },
};

const trust = [
  { icon: Clock, text: "Válasz egy munkanapon belül" },
  { icon: FileCheck2, text: "Írásos, tételes ajánlat" },
  { icon: ShieldCheck, text: "Kötelezettségmentes" },
];

export function CtaBand({ variant = "ajanlatkeres" }: { variant?: CtaVariant }) {
  const c = copy[variant];

  return (
    <Section dark className="overflow-hidden">
      <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,480px)] lg:gap-16">
          <Reveal>
            <Eyebrow dark>{c.eyebrow}</Eyebrow>
            <h2 className="display-3 mt-4 text-white">{c.title}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-stone-400">{c.text}</p>

            <ul className="mt-8 flex flex-col gap-3">
              {trust.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-[0.9rem] text-stone-300">
                  <item.icon className="h-[18px] w-[18px] shrink-0 text-signal-400" />
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-white/10 pt-7">
              <p className="text-[0.8rem] text-stone-500">Vagy hívjon minket közvetlenül:</p>
              <a
                href={site.contact.phoneHref}
                className="mt-2 inline-flex items-center gap-2.5 text-xl font-bold tracking-[-0.02em] text-white transition-colors hover:text-signal-400"
              >
                <Phone className="h-5 w-5 text-signal-400" />
                {site.contact.phone}
              </a>
              <p className="mt-1.5 text-[0.78rem] text-stone-500">
                {site.contact.openingHours} · {site.contact.emergencyNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card border border-white/10 bg-white p-6 shadow-2xl shadow-black/30 sm:p-7">
              <LeadForm variant={variant === "ajanlatkeres" ? "kapcsolat" : variant} />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
