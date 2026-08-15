import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { Faq } from "@/components/content/Faq";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { huTypo } from "@/lib/typography";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container, Eyebrow, Section, Stat } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/visuals/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { getHub, hrefFor, labelForHref, type ServicePage } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Illusztrációk szolgáltatásoldalanként. Szemléltető képek, nem saját
 * referenciafotók — valódi helyszíni fotókra cserélendők, amint vannak.
 */
const pageImages: Record<string, { src: string; alt: string }> = {
  "uzemeltetes/muszaki-epuletuzemeltetes": {
    src: "/images/gepeszeti-helyiseg.png",
    alt: "Épületgépészeti helyiség elektromos szekrényekkel és kábeltálcákkal",
  },
  "uzemeltetes/villamos-uzemeltetes": {
    src: "/images/elosztoberendezes.png",
    alt: "Nyitott villamos elosztóberendezés rendezett kábelezéssel és sorba szerelt kismegszakítókkal",
  },
  "uzemeltetes/erintesvedelmi-felulvizsgalat": {
    src: "/images/erintesvedelmi-meres.png",
    alt: "Érintésvédelmi mérés műszerrel villamos elosztóberendezésen",
  },
  "uzemeltetes/gyengearamu-rendszerek-uzemeltetese": {
    src: "/images/rogzito-rack.png",
    alt: "Kamerarendszer hálózati rögzítői rackszekrényben, rendezett hálózati kábelezéssel",
  },
  "uzemeltetes/karbantartas": {
    src: "/images/csarnok-vilagitas.png",
    alt: "Ipari csarnok mennyezete LED-es világítótestek soraival",
  },
  "uzemeltetes/hibafeltaras-hibaelharitas": {
    src: "/images/hokamera-vizsgalat.png",
    alt: "Hőkamerás vizsgálat villamos elosztóberendezésen, a kijelzőn melegedő ponttal",
  },
  "uzemeltetes/sla-rendelkezesre-allas": {
    src: "/images/villanyszerelo-munka.png",
    alt: "Villanyszerelő kábeleket köt be fali szerelvényszekrényben",
  },

  "tervezes-kivitelezes/erosaram": {
    src: "/images/uj-elosztotabla.png",
    alt: "Épülő villamos elosztótábla kismegszakítókkal és rendezett vezetékkötegekkel",
  },
  "tervezes-kivitelezes/gyengearam": {
    src: "/images/gyengearamu-kabelezes.png",
    alt: "Gyengeáramú kábelkötegek kábeltálcán, álmennyezet felett",
  },
  "tervezes-kivitelezes/it-halozat": {
    src: "/images/halozati-szekreny.png",
    alt: "Hálózati szekrény rendezett optikai és réz patchkábelekkel, switchekkel",
  },
  "tervezes-kivitelezes/epuletautomatizalas": {
    src: "/images/automatizalas-vezerlo.png",
    alt: "Épületautomatizálási vezérlőszekrény sínre szerelt modulokkal és kezelőpanellel",
  },
  "tervezes-kivitelezes/rendszerintegracio": {
    src: "/images/felugyeleti-kozpont.png",
    alt: "Épületfelügyeleti helyiség monitorokkal, állapotjelző felületekkel és kameraképekkel",
  },

  "rendszerek/kamerarendszerek": {
    src: "/images/kamera-mennyezet.png",
    alt: "Dómkamera modern épület mennyezetén, üveghomlokzat közelében",
  },
  "rendszerek/beleptetes": {
    src: "/images/beleptetes-olvaso.png",
    alt: "Beléptető kártyaolvasó irodai üvegajtó mellett",
  },
  "rendszerek/kaputelefon": {
    src: "/images/kaputelefon-kulteri.png",
    alt: "Vandálbiztos video-kaputelefon kültéri egység társasház bejáratánál",
  },
  "rendszerek/strukturalt-halozat": {
    src: "/images/patch-panel.png",
    alt: "Patch panel rendezett, színkódolt patchkábelekkel a rendezőszekrényben",
  },
  "rendszerek/okosepulet": {
    src: "/images/okos-iroda-arnyekolas.png",
    alt: "Modern irodabelső motoros árnyékolással és mennyezeti jelenlét-érzékelővel",
  },
  "rendszerek/biztonsagtechnika": {
    src: "/images/sorompo.png",
    alt: "Automata sorompó telephely behajtójánál, felnyitott sorompókarral",
  },

  "projektek/generalkivitelezes": {
    src: "/images/festes-vakolas.png",
    alt: "Belső felújítás: frissen vakolt falak, festőhenger és gipszkarton élvédő",
  },
  "projektek/projektmenedzsment": {
    src: "/images/koordinacio-helyszin.png",
    alt: "Két szakember tervrajzot néz át építési helyszínen",
  },
  "projektek/muszaki-koordinacio": {
    src: "/images/felujitas-helyszin.png",
    alt: "Több szakág egyidejű munkája felújítás alatt álló belső téren",
  },
  "projektek/dokumentacio": {
    src: "/images/dokumentacio-tervek.png",
    alt: "Műszaki tervrajzok és megvalósulási dokumentáció mappában, mérőszalaggal",
  },
};

const asideCopy: Record<ServicePage["ctaVariant"], { title: string; text: string }> = {
  ajanlatkeres: {
    title: "Kérjen ajánlatot",
    text: "Írja le röviden, mire lenne szüksége — egy munkanapon belül jelentkezünk.",
  },
  visszahivas: {
    title: "Beszéljünk róla",
    text: "Hagyja meg a számát, és munkaidőben egy órán belül visszahívjuk.",
  },
  felmeres: {
    title: "Díjmentes felmérés",
    text: "Felmérjük az épületet, és írásos állapotjelentést adunk — kötelezettség nélkül.",
  },
  hibabejelentes: {
    title: "Hibabejelentés",
    text: "Ha most áll valami, jelentse be itt. Sürgős esetben kérjük, telefonon is jelezze.",
  },
};

export function ServicePageView({ page }: { page: ServicePage }) {
  const hub = getHub(page.hub);
  const path = hrefFor(page);
  const aside = asideCopy[page.ctaVariant];
  const image = pageImages[`${page.hub}/${page.slug}`];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: page.h1, description: page.metaDescription, path }),
          faqJsonLd(page.faq),
        ]}
      />

      {/* Fejléc */}
      <section className="noise relative overflow-hidden bg-ink-950 pb-14 pt-8 text-white sm:pb-16">
        <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
        <Container className="relative">
          <Breadcrumbs
            items={[
              ...(hub ? [{ label: labelForHref(hub.slug), href: hub.slug }] : []),
              { label: page.navLabel, href: path },
            ]}
          />

          <div className="mt-8 flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-signal-400/30 bg-signal-400/10 text-signal-400 sm:flex">
              <Icon name={page.icon} className="h-6 w-6" />
            </span>
            <div>
              <Reveal>
                <h1 className="display-2 max-w-[20ch] text-white">{huTypo(page.h1)}</h1>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-stone-400">
                  {huTypo(page.lead)}
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
              {page.highlights.map((h) => (
                <Stat key={h.label} dark value={h.value} label={h.label} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Törzs + oldalsáv */}
      <Section className="pt-14 sm:pt-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <div>
              {image && (
                <div className="mb-10 overflow-hidden rounded-card border border-stone-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={675}
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}
              <ContentBlocks blocks={page.body} />

              {page.faq.length > 0 && (
                <div className="mt-16">
                  <Eyebrow>Gyakori kérdések</Eyebrow>
                  <h2 className="display-3 mb-8 mt-4 text-ink-900">
                    Kérdések — {page.navLabel}
                  </h2>
                  <Faq items={page.faq} />
                </div>
              )}

              {page.related.length > 0 && (
                <nav className="mt-16 border-t border-stone-200 pt-8" aria-label="Kapcsolódó oldalak">
                  <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
                    Kapcsolódó oldalak
                  </h2>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {page.related.map((href) => (
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
            </div>

            {/* Ragadós oldalsáv űrlappal — a hosszú szöveg mellett végig elérhető CTA */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-card border border-stone-200 bg-stone-50 p-6">
                <h2 className="text-[1.05rem] font-bold tracking-[-0.02em] text-ink-900">
                  {aside.title}
                </h2>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-stone-600">{aside.text}</p>
                <div className="mt-5">
                  <LeadForm
                    variant={page.ctaVariant === "ajanlatkeres" ? "kapcsolat" : page.ctaVariant}
                    compact
                  />
                </div>
              </div>

              <a
                href={site.contact.phoneHref}
                className="mt-4 flex items-center gap-3 rounded-card border border-stone-200 bg-white p-5 transition-colors hover:border-signal-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-900 text-signal-400">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[0.75rem] text-stone-500">Inkább telefonálna?</span>
                  <span className="block text-[1rem] font-bold text-ink-900">
                    {site.contact.phone}
                  </span>
                </span>
              </a>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Az oldalsávban már van űrlap, ezért itt szándékosan keskeny,
          űrlap nélküli lezárás áll — nem duplikáljuk a CTA-t. */}
      <CtaStrip />
    </>
  );
}
