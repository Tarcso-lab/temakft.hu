import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Clock, Mail, MapPin, Phone, TriangleAlert } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kapcsolat — TEMA Menedzsment Kft.",
  description:
    "Vegye fel velünk a kapcsolatot: telefon, e-mail és online űrlap. Hibabejelentés szerződéses partnereinknek, díjmentes helyszíni felmérés igénylése.",
  path: "/kapcsolat",
  keywords: ["TEMA Menedzsment kapcsolat", "épületüzemeltetés kapcsolat", "hibabejelentés"],
});

export default function Page() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink-950 pb-14 pt-8 text-white">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Kapcsolat", href: "/kapcsolat" }]} />
          <Reveal>
            <h1 className="display-1 mt-8 max-w-[14ch] text-white">Kapcsolat</h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-stone-400">
              Írjon vagy hívjon minket — igyekszünk konkrét kérdésre konkrét választ adni. Ha
              árajánlatra van szüksége, a részletes ajánlatkérő űrlappal gyorsabban jutunk
              eredményre.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section className="pt-14">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,540px)] lg:gap-16">
            <div>
              <Eyebrow>Elérhetőségeink</Eyebrow>
              <h2 className="display-3 mt-4 text-ink-900">Beszéljünk a projektjéről</h2>

              <dl className="mt-9 flex flex-col divide-y divide-stone-200 border-y border-stone-200">
                <ContactRow icon={Phone} label="Telefon">
                  <a
                    href={site.contact.phoneHref}
                    className="text-[1.15rem] font-bold text-ink-900 transition-colors hover:text-signal-700"
                  >
                    {site.contact.phone}
                  </a>
                  <p className="mt-1 text-[0.83rem] text-stone-500">{site.contact.openingHours}</p>
                </ContactRow>

                <ContactRow icon={Mail} label="E-mail">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-[1.02rem] font-semibold text-ink-900 transition-colors hover:text-signal-700"
                  >
                    {site.contact.email}
                  </a>
                  <p className="mt-1 text-[0.83rem] text-stone-500">
                    Válaszidő jellemzően egy munkanapon belül
                  </p>
                </ContactRow>

                <ContactRow icon={MapPin} label="Munkaterületünk">
                  <p className="text-[0.98rem] font-medium text-ink-900">
                    {site.areaServed.slice(0, 4).join(", ")}
                  </p>
                  <p className="mt-1 text-[0.83rem] text-stone-500">
                    Munkavégzés a helyszínen, előre egyeztetett időpontban
                  </p>
                </ContactRow>

                <ContactRow icon={Building2} label="Cégadatok">
                  <p className="text-[0.9rem] text-stone-600">
                    {site.legalName}
                    <br />
                    Adószám: {site.contact.taxNumber}
                    <br />
                    Cégjegyzékszám: {site.contact.companyNumber}
                  </p>
                </ContactRow>

                <ContactRow icon={Clock} label="Ügyelet">
                  <p className="text-[0.9rem] text-stone-600">{site.contact.emergencyNote}</p>
                </ContactRow>
              </dl>

              <div className="mt-8 rounded-card border border-stone-200 bg-stone-50 p-5">
                <h3 className="flex items-center gap-2 text-[0.95rem] font-bold text-ink-900">
                  <TriangleAlert className="h-4 w-4 text-signal-600" />
                  Sürgős műszaki hiba?
                </h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-stone-600">
                  Ha az épületben most áll valami, kérjük, telefonon jelezze — így tudunk a
                  leggyorsabban reagálni. A hibafeltárás menetéről a{" "}
                  <Link
                    href="/uzemeltetes/hibafeltaras-hibaelharitas"
                    className="font-semibold text-signal-700 underline underline-offset-2"
                  >
                    hibaelhárítás oldalon
                  </Link>{" "}
                  olvashat.
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-card border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-[1.2rem] font-bold tracking-[-0.02em] text-ink-900">
                  Írjon nekünk
                </h2>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-stone-600">
                  Töltse ki az űrlapot, és egy munkanapon belül jelentkezünk.
                </p>
                <div className="mt-6">
                  <LeadForm variant="kapcsolat" />
                </div>
              </div>

              <p className="mt-5 text-center text-[0.85rem] text-stone-500">
                Konkrét árajánlatra van szüksége?{" "}
                <Link
                  href="/ajanlatkeres"
                  className="font-semibold text-signal-700 underline underline-offset-2"
                >
                  Töltse ki a részletes ajánlatkérőt
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon: IconCmp,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-signal-400">
        <IconCmp className="h-4 w-4" />
      </span>
      <div>
        <dt className="text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
          {label}
        </dt>
        <dd className="mt-1.5">{children}</dd>
      </div>
    </div>
  );
}
