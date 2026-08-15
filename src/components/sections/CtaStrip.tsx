import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { site } from "@/lib/site";
import { huTypo } from "@/lib/typography";

/**
 * Keskeny záró CTA — űrlap NÉLKÜL.
 *
 * Azokon az oldalakon használjuk, ahol az oldalsávban már van űrlap
 * (szolgáltatásoldalak, tudástár cikkek), hogy ne kerüljön két azonos
 * űrlap ugyanarra az oldalra.
 */
export function CtaStrip({
  title = "Beszéljünk a projektjéről",
  text = "Írja le, mire lenne szüksége — egy munkanapon belül jelentkezünk, és ha kell, díjmentesen felmérjük a helyszínt.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="noise relative overflow-hidden bg-ink-950 py-14 text-white sm:py-16">
      <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-60" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="display-3 text-white">{huTypo(title)}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-stone-400">{huTypo(text)}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/ajanlatkeres" size="lg">
              Ajánlatot kérek
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2.5 px-1 text-[0.95rem] text-stone-400 transition-colors hover:text-signal-400"
            >
              <Phone className="h-4 w-4 shrink-0 text-signal-400" />
              <span className="font-semibold text-white">{site.contact.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
