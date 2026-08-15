import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fejlesztés közben a böngésző a 127.0.0.1 címen is elérheti a szervert
  // (nem csak localhost néven) — enélkül a Next.js blokkolja a statikus
  // fejlesztői eszközfájlok betöltését. Éles buildre nincs hatása.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
