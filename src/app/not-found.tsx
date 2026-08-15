import Link from "next/link";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { mainNav } from "@/lib/site";

export const metadata = {
  title: "A keresett oldal nem található",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="noise relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div aria-hidden className="grid-pattern radial-fade absolute inset-0 opacity-70" />
      <Container className="relative">
        <p className="font-mono text-[0.85rem] font-semibold text-signal-400">404</p>
        <h1 className="display-2 mt-4 max-w-[16ch] text-white">
          Ez az oldal nincs a nyomvonalon
        </h1>
        <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-stone-400">
          A keresett oldal nem található — lehet, hogy megváltozott a címe. Az alábbi
          hivatkozásokból biztosan eljut oda, amit keresett.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Vissza a főoldalra
          </ButtonLink>
          <ButtonLink href="/kapcsolat" size="lg" variant="outline-light">
            Kapcsolat
          </ButtonLink>
        </div>

        <nav className="mt-14 border-t border-white/10 pt-8" aria-label="Fő oldalak">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.9rem] font-medium text-stone-300 transition-colors hover:text-signal-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
