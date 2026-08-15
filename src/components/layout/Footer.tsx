import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LogoFull } from "@/components/brand/Logo";
import { Container } from "@/components/ui/primitives";
import { footerLegalNav, formatAddress, hasAddress, mainNav, site } from "@/lib/site";
import { segments } from "@/lib/content";

export function Footer() {
  const columns = mainNav.filter((item) => item.children?.length);

  return (
    <footer className="noise relative bg-ink-950 text-stone-400">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div className="max-w-sm">
            <Link href="/" className="inline-block text-white" aria-label={`${site.name} — főoldal`}>
              <LogoFull />
            </Link>
            <p className="mt-5 text-[0.88rem] leading-relaxed">
              Műszaki épületüzemeltetés, erős- és gyengeáramú rendszerek tervezése, kivitelezése és
              karbantartása — a felméréstől a hosszú távú üzemeltetésig.
            </p>

            <address className="mt-6 space-y-2.5 not-italic text-[0.88rem]">
              <a
                href={site.contact.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-signal-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-signal-400" />
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-signal-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-signal-400" />
                {site.contact.email}
              </a>
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                <span>{hasAddress ? formatAddress() : site.areaServed.slice(0, 3).join(" · ")}</span>
              </span>
            </address>
          </div>

          {columns.map((column) => (
            <nav key={column.href} aria-label={column.label}>
              <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white">
                <Link href={column.href} className="transition-colors hover:text-signal-400">
                  {column.label}
                </Link>
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="text-[0.85rem] leading-snug transition-colors hover:text-signal-400"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr]">
            <nav aria-label="Megoldások épülettípus szerint">
              <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white">
                Megoldások épülettípus szerint
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
                {segments.map((segment) => (
                  <li key={segment.slug}>
                    <Link
                      href={`/megoldasok/${segment.slug}`}
                      className="text-[0.85rem] transition-colors hover:text-signal-400"
                    >
                      {segment.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Vállalat">
              <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white">
                Vállalat
              </h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/rolunk" className="text-[0.85rem] transition-colors hover:text-signal-400">
                    Rólunk
                  </Link>
                </li>
                <li>
                  <Link href="/tudastar" className="text-[0.85rem] transition-colors hover:text-signal-400">
                    Tudástár
                  </Link>
                </li>
                <li>
                  <Link href="/kapcsolat" className="text-[0.85rem] transition-colors hover:text-signal-400">
                    Kapcsolat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ajanlatkeres"
                    className="text-[0.85rem] font-semibold text-signal-400 transition-colors hover:text-signal-300"
                  >
                    Ajánlatkérés
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-[0.8rem] sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-signal-400">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sitemap.xml" className="transition-colors hover:text-signal-400">
                Oldaltérkép
              </Link>
            </li>
          </ul>
          <p className="text-stone-500">2026 TEMA Menedzsment Kft.</p>
        </div>
      </Container>
    </footer>
  );
}
