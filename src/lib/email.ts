import { Resend } from "resend";
import { site } from "./site";
import { formTypeLabels, type LeadData } from "./schemas";
import {
  labelForBudget,
  labelForProperty,
  labelForService,
  labelForSiteScope,
  labelForSize,
  labelForSystem,
  labelForUrgency,
} from "./forms";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.LEAD_EMAIL_FROM || "TEMA weboldal <onboarding@resend.dev>";
const TO = process.env.LEAD_EMAIL_TO || site.contact.notificationEmail;

export const emailConfigured = Boolean(RESEND_API_KEY);

function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type Row = { label: string; value: string; wide?: boolean };

function buildRows(lead: LeadData): Row[] {
  const rows: Row[] = [];
  const push = (label: string, value?: string | number | null, wide = false) => {
    if (value === undefined || value === null || value === "" ) return;
    rows.push({ label, value: String(value), wide });
  };

  push("Név", lead.name);
  push("Cég", lead.company);
  push("E-mail", lead.email);
  push("Telefon", lead.phone);
  push("Ingatlan típusa", labelForProperty(lead.property_type));
  push("Helyszín", lead.location);
  push("Alapterület", labelForSize(lead.size_band) || (lead.size_sqm ? `${lead.size_sqm} m²` : ""));
  push("Helyszínek száma", labelForSiteScope(lead.site_scope));
  push("Sürgősség", labelForUrgency(lead.urgency));
  push("Határidő", lead.timeline);
  push("Költségkeret", labelForBudget(lead.budget_range));

  if (lead.services.length) {
    push("Kért szolgáltatások", lead.services.map(labelForService).join(", "), true);
  }
  if (lead.systems.length) {
    push("Érintett rendszerek", lead.systems.map(labelForSystem).join(", "), true);
  }
  if (lead.has_documentation !== undefined) {
    push("Van műszaki dokumentáció", lead.has_documentation ? "Igen" : "Nem / nem tudja");
  }
  if (lead.site_visit_needed !== undefined) {
    push("Kér helyszíni felmérést", lead.site_visit_needed ? "Igen" : "Nem");
  }
  push("Üzenet", lead.message, true);

  push("Hírlevél hozzájárulás", lead.consent_marketing ? "Igen" : "Nem");
  push("Küldő oldal", lead.source_page, true);
  push("Hivatkozó", lead.referrer, true);
  push("UTM forrás", [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(" / "));

  return rows;
}

function renderHtml(lead: LeadData, rows: Row[]) {
  const urgent = lead.form_type === "hibabejelentes" || lead.urgency === "surgos_24h";
  const received = new Date().toLocaleString("hu-HU", { timeZone: "Europe/Budapest" });

  const rowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e6eae7;font:600 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#4b5450;white-space:nowrap;vertical-align:top;width:180px;">${esc(
        r.label,
      )}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e6eae7;font:400 14px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#0b100d;">${esc(
          r.value,
        ).replace(/\n/g, "<br>")}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="hu"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px 12px;background:#f2f4f2;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #dfe3e0;">
    <tr>
      <td style="background:#0b100d;padding:22px 24px;">
        <div style="font:700 18px/1.2 -apple-system,Segoe UI,Roboto,sans-serif;color:#ffffff;letter-spacing:-0.02em;">
          TEMA <span style="color:#a8e10c;">•</span> új megkeresés
        </div>
        <div style="font:500 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#97a19b;margin-top:4px;">
          ${esc(formTypeLabels[lead.form_type])} — ${esc(received)}
        </div>
      </td>
    </tr>
    ${
      urgent
        ? `<tr><td style="background:#fff4f4;border-bottom:1px solid #f3d4d4;padding:12px 24px;font:700 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#9b1c1c;">⚠ Sürgős megkeresés — mielőbbi visszahívás javasolt</td></tr>`
        : ""
    }
    <tr>
      <td style="padding:8px 10px 4px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${rowsHtml}</table>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 24px 24px;">
        ${
          lead.phone
            ? `<a href="tel:${esc(lead.phone)}" style="display:inline-block;background:#0b100d;color:#a8e10c;text-decoration:none;font:600 14px/1 -apple-system,Segoe UI,Roboto,sans-serif;padding:12px 18px;border-radius:8px;margin-right:8px;">Hívás: ${esc(
                lead.phone,
              )}</a>`
            : ""
        }
        ${
          lead.email
            ? `<a href="mailto:${esc(
                lead.email,
              )}" style="display:inline-block;background:#eef0ee;color:#0b100d;text-decoration:none;font:600 14px/1 -apple-system,Segoe UI,Roboto,sans-serif;padding:12px 18px;border-radius:8px;">Válasz e-mailben</a>`
            : ""
        }
      </td>
    </tr>
    <tr>
      <td style="background:#f7f8f7;padding:14px 24px;font:400 12px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#6b7671;border-top:1px solid #e6eae7;">
        Ezt az értesítést a temakft.hu weboldal űrlapja küldte. A megkeresés a Supabase adatbázisban is rögzítésre került.
      </td>
    </tr>
  </table>
</body></html>`;
}

function renderText(lead: LeadData, rows: Row[]) {
  return [
    `TEMA — új megkeresés (${formTypeLabels[lead.form_type]})`,
    new Date().toLocaleString("hu-HU", { timeZone: "Europe/Budapest" }),
    "",
    ...rows.map((r) => `${r.label}: ${r.value}`),
  ].join("\n");
}

export async function sendLeadNotification(lead: LeadData) {
  if (!RESEND_API_KEY) {
    return { sent: false, error: "RESEND_API_KEY nincs beállítva" };
  }

  const rows = buildRows(lead);
  const urgent = lead.form_type === "hibabejelentes" || lead.urgency === "surgos_24h";
  const who = lead.company ? `${lead.name} (${lead.company})` : lead.name;
  const subject = `${urgent ? "[SÜRGŐS] " : ""}${formTypeLabels[lead.form_type]} — ${who}`;

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO.split(",").map((v) => v.trim()),
      subject,
      html: renderHtml(lead, rows),
      text: renderText(lead, rows),
      ...(lead.email ? { replyTo: lead.email } : {}),
    });

    if (error) return { sent: false, error: error.message ?? String(error) };
    return { sent: true as const, error: null };
  } catch (err) {
    return { sent: false, error: err instanceof Error ? err.message : String(err) };
  }
}
