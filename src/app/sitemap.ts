import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allServicePages, articles, hubs, hrefFor, segments } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path === "/" ? "" : path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/ajanlatkeres"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/kapcsolat"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/megoldasok"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/rolunk"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/tudastar"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: url("/garancialis-feltetelek"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: url("/aszf"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    {
      url: url("/adatkezelesi-tajekoztato"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...staticPages,
    ...hubs.map((hub) => ({
      url: url(hub.slug),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...allServicePages.map((page) => ({
      url: url(hrefFor(page)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...segments.map((segment) => ({
      url: url(`/megoldasok/${segment.slug}`),
      lastModified: now,
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
