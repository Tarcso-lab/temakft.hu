export type HubKey = "uzemeltetes" | "tervezes-kivitelezes" | "rendszerek" | "projektek";

export type FaqItem = { q: string; a: string };

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type CtaVariant = "ajanlatkeres" | "visszahivas" | "felmeres" | "hibabejelentes";

export type ServicePage = {
  slug: string;
  hub: HubKey;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Elsődleges és másodlagos kulcsszavak — a szövegben is szerepelniük kell. */
  keywords: string[];
  lead: string;
  highlights: { value: string; label: string }[];
  body: ContentBlock[];
  faq: FaqItem[];
  ctaVariant: CtaVariant;
  /** Kapcsolódó oldalak URL-jei a belső linkeléshez. */
  related: string[];
  icon: string;
  /**
   * Mikor változott utoljára az oldal tartalma (ÉÉÉÉ-HH-NN).
   * Ez kerül az oldaltérkép `lastmod` mezőjébe. Ha nincs megadva, a
   * `CONTENT_REVISION` alapérték érvényes. Szerkesztéskor írd át — a Google
   * csak akkor veszi figyelembe ezt a mezőt, ha megbízhatóan pontos.
   */
  updatedAt?: string;
};

export type HubPage = {
  key: HubKey;
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  lead: string;
  intro: ContentBlock[];
  faq: FaqItem[];
  /** Lásd a `ServicePage.updatedAt` leírását. */
  updatedAt?: string;
};

export type SegmentPage = {
  slug: string;
  name: string;
  emoji: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  lead: string;
  /** Tipikus fájdalompontok — ezekre keresnek rá a döntéshozók. */
  painPoints: string[];
  /** Amit a TEMA konkrétan csinál ebben a szegmensben. */
  deliverables: { title: string; text: string }[];
  body: ContentBlock[];
  faq: FaqItem[];
  /** Lásd a `ServicePage.updatedAt` leírását. */
  updatedAt?: string;
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  excerpt: string;
  body: ContentBlock[];
  faq?: FaqItem[];
  related?: string[];
};
