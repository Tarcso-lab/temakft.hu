import { uzemeltetesHub, uzemeltetesPages } from "./uzemeltetes";
import { tervezesHub, tervezesPages } from "./tervezes-kivitelezes";
import { rendszerekHub, rendszerekPages } from "./rendszerek";
import { projektekHub, projektekPages } from "./projektek";
import { segments } from "./segments";
import { articles } from "./articles";
import type { HubKey, HubPage, ServicePage } from "./types";

export * from "./types";
export { segments, articles };
export { articleCategories } from "./articles";

export const hubs: HubPage[] = [uzemeltetesHub, tervezesHub, rendszerekHub, projektekHub];

export const allServicePages: ServicePage[] = [
  ...uzemeltetesPages,
  ...tervezesPages,
  ...rendszerekPages,
  ...projektekPages,
];

const pagesByHub: Record<HubKey, ServicePage[]> = {
  uzemeltetes: uzemeltetesPages,
  "tervezes-kivitelezes": tervezesPages,
  rendszerek: rendszerekPages,
  projektek: projektekPages,
};

export function getHub(key: HubKey) {
  return hubs.find((h) => h.key === key);
}

export function getPagesForHub(key: HubKey) {
  return pagesByHub[key] ?? [];
}

export function getServicePage(hub: HubKey, slug: string) {
  return pagesByHub[hub]?.find((p) => p.slug === slug);
}

export function hrefFor(page: ServicePage) {
  return `/${page.hub}/${page.slug}`;
}

export function getSegment(slug: string) {
  return segments.find((s) => s.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/** Egy URL-hez visszaadja az emberi olvasásra szánt címkét — a morzsamenühöz. */
export function labelForHref(href: string): string {
  const hub = hubs.find((h) => h.slug === href);
  if (hub) return hub.h1;

  const service = allServicePages.find((p) => hrefFor(p) === href);
  if (service) return service.navLabel;

  const segment = segments.find((s) => `/megoldasok/${s.slug}` === href);
  if (segment) return segment.name;

  const article = articles.find((a) => `/tudastar/${a.slug}` === href);
  if (article) return article.title;

  const staticLabels: Record<string, string> = {
    "/": "Főoldal",
    "/rolunk": "Rólunk",
    "/tudastar": "Tudástár",
    "/kapcsolat": "Kapcsolat",
    "/ajanlatkeres": "Ajánlatkérés",
    "/megoldasok": "Megoldások",
    "/garancialis-feltetelek": "Garanciális feltételek",
    "/aszf": "ÁSZF",
    "/adatkezelesi-tajekoztato": "Adatkezelési tájékoztató",
  };
  return staticLabels[href] ?? href;
}
