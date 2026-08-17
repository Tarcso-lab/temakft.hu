import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import {
  CONTENT_REVISION,
  allServicePages,
  articles,
  hubs,
  hrefFor,
  segments,
} from "@/lib/content";

/**
 * Oldaltérkép.
 *
 * A `lastModified` mezőbe **valós dátumok** kerülnek, nem a lekérdezés
 * időpontja. Ez fontos: ha minden oldal mindig „épp most módosult", a Google
 * egy idő után az egész oldalon figyelmen kívül hagyja a mezőt — és pont azt a
 * jelzést veszítjük el, amivel a friss tartalmat ki lehetne emelni.
 *
 * A dátumok forrása, sorrendben: az oldal saját `updatedAt` mezője, ennek
 * hiányában a `CONTENT_REVISION` alapérték.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path === "/" ? "" : path}`;
  const revision = new Date(CONTENT_REVISION);
  const on = (value?: string) => (value ? new Date(value) : revision);

  /** A jogi szövegek utolsó érdemi átdolgozása. */
  const legalRevision = new Date("2026-08-17");

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: revision, changeFrequency: "weekly", priority: 1 },
    { url: url("/ajanlatkeres"), lastModified: revision, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/kapcsolat"), lastModified: revision, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/megoldasok"), lastModified: revision, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/rolunk"), lastModified: revision, changeFrequency: "monthly", priority: 0.6 },
    {
      url: url("/tudastar"),
      // A tudástár akkor frissül, amikor a legutóbbi cikk — így a listaoldal
      // dátuma magától követi az új bejegyzéseket.
      lastModified: articles.reduce<Date>((latest, article) => {
        const d = new Date(article.updatedAt ?? article.publishedAt);
        return d > latest ? d : latest;
      }, revision),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: url("/garancialis-feltetelek"),
      lastModified: legalRevision,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: url("/aszf"), lastModified: legalRevision, changeFrequency: "yearly", priority: 0.3 },
    {
      url: url("/adatkezelesi-tajekoztato"),
      lastModified: legalRevision,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...staticPages,
    ...hubs.map((hub) => ({
      url: url(hub.slug),
      lastModified: on(hub.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...allServicePages.map((page) => ({
      url: url(hrefFor(page)),
      lastModified: on(page.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...segments.map((segment) => ({
      url: url(`/megoldasok/${segment.slug}`),
      lastModified: on(segment.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...articles.map((article) => ({
      url: url(`/tudastar/${article.slug}`),
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
