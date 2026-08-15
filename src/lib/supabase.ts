import { createClient } from "@supabase/supabase-js";

/**
 * Szerveroldali Supabase kliens.
 *
 * Ha be van állítva a SUPABASE_SERVICE_ROLE_KEY, azt használjuk (megkerüli az RLS-t).
 * Ha nincs, a publikus kulccsal dolgozunk — az adatbázisban erre külön, kizárólag
 * BESZÚRÁST engedő RLS policy van érvényben, olvasni így sem lehet.
 *
 * Ezt a modult SOHA ne importáld kliens komponensből.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const key = serviceKey || publishableKey;

export const supabaseConfigured = Boolean(url && key);

export function getSupabaseAdmin() {
  if (!url || !key) {
    throw new Error(
      "Hiányzó Supabase konfiguráció: állítsd be a NEXT_PUBLIC_SUPABASE_URL és a " +
        "SUPABASE_SERVICE_ROLE_KEY (vagy NEXT_PUBLIC_SUPABASE_ANON_KEY) értékeket a .env.local fájlban.",
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { "X-Client-Info": "temakft-web" } },
  });
}
