import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Főoldal", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${site.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Morzsamenü" className="no-print">
        <ol className="no-scrollbar flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[0.78rem]">
          {all.map((crumb, i) => {
            const last = i === all.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 text-stone-400" />}
                {last ? (
                  <span aria-current="page" className="font-medium text-stone-500">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="text-stone-500 transition-colors hover:text-signal-700">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
