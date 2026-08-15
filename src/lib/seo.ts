import type { Metadata } from "next";
import { hasAddress, site } from "./site";
import type { FaqItem } from "./content";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = `/og?title=${encodeURIComponent(title)}`;

  // A legtöbb címben már szerepel a márkanév; ahol nem, ott pótoljuk.
  const fullTitle = title.includes(site.shortName) ? title : `${title} | ${site.shortName}`;

  return {
    // A címeket kézzel írjuk, márkanévvel együtt — ezért kikerüljük a layout
    // `%s | TEMA` sablonját, hogy ne duplázódjon a cégnév.
    title: { absolute: fullTitle },
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/** Az egész oldalra érvényes cégadatok — a főoldal fejlécében jelenik meg egyszer. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    // Szándékosan csak Organization, nem LocalBusiness: a cég nem rendelkezik
    // ügyfélforgalom számára nyitva álló telephellyel, a LocalBusiness típus
    // pedig postai címet feltételez. A lefedett területet az areaServed adja meg.
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    telephone: site.contact.phone,
    email: site.contact.email,
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.contact.address.street,
            addressLocality: site.contact.address.city,
            postalCode: site.contact.address.postalCode,
            addressCountry: site.contact.address.country,
          },
        }
      : {}),
    areaServed: site.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    knowsAbout: [
      "műszaki épületüzemeltetés",
      "erősáramú rendszerek",
      "gyengeáramú rendszerek",
      "épületautomatizálás",
      "kamerarendszer",
      "beléptetőrendszer",
      "strukturált hálózat",
    ],
    sameAs: [site.social.linkedin, site.social.facebook].filter(Boolean),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: site.areaServed.map((n) => ({ "@type": "AdministrativeArea", name: n })),
    url: `${site.url}${path}`,
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}${path}`,
    inLanguage: "hu-HU",
  };
}
