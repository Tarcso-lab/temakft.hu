import { NextResponse } from "next/server";
import { createHash, randomUUID } from "node:crypto";
import { leadSchema } from "@/lib/schemas";
import { getSupabaseAdmin, supabaseConfigured } from "@/lib/supabase";
import { sendLeadNotification } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Egyszerű, memóriában tartott sebességkorlát — egy IP 10 percenként 5 beküldés. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ipHash: string) {
  const now = Date.now();
  const recent = (hits.get(ipHash) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ipHash, recent);

  // A térkép ne nőjön korlátlanul.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t > WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function clientIpHash(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  // Nyers IP-t nem tárolunk, csak sózott lenyomatot — adatvédelmi minimalizálás.
  return createHash("sha256")
    .update(`${ip}|${process.env.IP_HASH_SALT ?? "temakft"}`)
    .digest("hex")
    .slice(0, 32);
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Hibás kérés." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 });
  }

  const lead = parsed.data;

  // Botszűrés: kitöltött csapdamező, vagy 2 másodpercnél gyorsabb kitöltés.
  const tooFast = lead.rendered_at ? Date.now() - lead.rendered_at < 2000 : false;
  if (lead.website || tooFast) {
    // Csendes elutasítás: a bot sikeresnek látja, de nem rögzítünk és nem értesítünk.
    return NextResponse.json({ ok: true, id: null });
  }

  const ipHash = clientIpHash(req);
  if (rateLimited(ipHash)) {
    return NextResponse.json(
      { ok: false, error: "Túl sok beküldés rövid időn belül. Kérjük, próbálja újra később." },
      { status: 429 },
    );
  }

  // Előbb az értesítés megy ki, hogy a megkeresés akkor is eljusson a céghez, ha
  // az adatbázis éppen nem érhető el. Az eredményt egyetlen beszúrásban rögzítjük,
  // így nincs szükség utólagos UPDATE jogosultságra.
  const notification = await sendLeadNotification(lead);
  if (!notification.sent) {
    console.error("[lead] Értesítő e-mail nem ment ki:", notification.error);
  }

  const id = randomUUID();
  let stored = false;

  if (supabaseConfigured) {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert({
      id,
      form_type: lead.form_type,
      name: lead.name,
      company: lead.company || null,
      email: lead.email || null,
      phone: lead.phone || null,
      property_type: lead.property_type || null,
      location: lead.location || null,
      size_sqm: lead.size_sqm ?? null,
      services: lead.services,
      systems: lead.systems,
      brands: lead.brands,
      urgency: lead.urgency || null,
      timeline: lead.timeline || null,
      budget_range: lead.budget_range || null,
      has_documentation: lead.has_documentation ?? null,
      site_visit_needed: lead.site_visit_needed ?? null,
      message: lead.message || null,
      source_page: lead.source_page || null,
      referrer: lead.referrer || null,
      utm_source: lead.utm_source || null,
      utm_medium: lead.utm_medium || null,
      utm_campaign: lead.utm_campaign || null,
      consent_privacy: lead.consent_privacy,
      consent_marketing: lead.consent_marketing,
      user_agent: req.headers.get("user-agent")?.slice(0, 500) ?? null,
      ip_hash: ipHash,
      details: { size_band: lead.size_band || null, site_scope: lead.site_scope || null },
      email_sent: notification.sent,
      email_error: notification.sent ? null : notification.error,
    });

    if (error) {
      console.error("[lead] Supabase beszúrási hiba:", error.message);
    } else {
      stored = true;
    }
  } else {
    console.error("[lead] Hiányzó Supabase konfiguráció — a megkeresés nem került rögzítésre.");
  }

  // Ha legalább az egyik csatorna sikeres volt, a megkeresés nem veszett el.
  if (!stored && !notification.sent) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "A megkeresést most nem sikerült továbbítani. Kérjük, hívjon minket telefonon, vagy próbálja újra néhány perc múlva.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id, stored, notified: notification.sent });
}
