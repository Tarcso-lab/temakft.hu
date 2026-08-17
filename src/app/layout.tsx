import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { BackToTop } from "@/components/layout/BackToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b100d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <a
          href="#tartalom"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-signal-400 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Ugrás a tartalomra
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main id="tartalom" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <StickyCta />
        {/* A rögzített mobil CTA-sáv ne takarja el a lábléc utolsó sorát. */}
        <div aria-hidden className="h-[68px] md:hidden" />

        {/*
         * Cloudflare Web Analytics — süti nélküli, személyes adatot nem gyűjtő
         * látogatottságmérés.
         *
         * Miért kézzel? A Cloudflare felületén az „automatikus telepítés" be van
         * kapcsolva, de az élő oldalon nem jelent meg a mérőkód: az automatikus
         * beszúrás a Worker által előállított válaszokon nem fut le. Ez a
         * beillesztés viszont mindig működik.
         *
         * A token nyilvános, szándékosan látszik a HTML-ben — nem titok.
         */}
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f24495033a204429b90c7b923d39584f"}'
        />
      </body>
    </html>
  );
}
