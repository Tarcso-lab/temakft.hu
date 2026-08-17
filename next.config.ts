import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fejlesztés közben a böngésző a 127.0.0.1 címen is elérheti a szervert
  // (nem csak localhost néven) — enélkül a Next.js blokkolja a statikus
  // fejlesztői eszközfájlok betöltését. Éles buildre nincs hatása.
  allowedDevOrigins: ["127.0.0.1", "localhost"],

  // A www → www nélküli átirányítás szándékosan NEM itt van. Két alkalmazáson
  // belüli megoldást is kipróbáltunk, egyik sem járható ezen a futtatókörnyezeten:
  //   – a `redirects()` gazdanév-feltétele a Workers környezetben nem lép működésbe;
  //   – a `proxy.ts` (a korábbi middleware) Node.js futtatókörnyezetet igényel,
  //     amit az OpenNext adapter nem támogat, edge-re váltani pedig a Next.js 16
  //     már nem enged.
  // Ezért az átirányítás a Cloudflare zóna szintjén, Redirect Rule-ként készül —
  // ez amúgy is olcsóbb, mert le sem futtatja a Workert.
};

export default nextConfig;
