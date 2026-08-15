import { z } from "zod";

const trimmed = (max: number) => z.string().trim().max(max);

/**
 * Egyetlen séma szolgálja ki az összes űrlaptípust. A `form_type` dönti el,
 * mely mezők kötelezőek — így a kliens és a szerver ugyanazt a szabályt látja.
 */
export const leadSchema = z
  .object({
    form_type: z.enum([
      "kapcsolat",
      "visszahivas",
      "ajanlatkeres",
      "felmeres",
      "hibabejelentes",
    ]),

    name: trimmed(120).min(2, "Kérjük, adja meg a nevét."),
    company: trimmed(160).optional().or(z.literal("")),
    email: z
      .string()
      .trim()
      .max(254)
      .email("Érvénytelen e-mail cím.")
      .optional()
      .or(z.literal("")),
    phone: trimmed(40).optional().or(z.literal("")),

    property_type: trimmed(40).optional().or(z.literal("")),
    location: trimmed(120).optional().or(z.literal("")),
    size_sqm: z.coerce.number().int().min(0).max(10_000_000).optional(),
    /** Hány helyszínt érint a munka — sáv, nem pontos szám. */
    site_scope: trimmed(40).optional().or(z.literal("")),

    services: z.array(trimmed(60)).max(30).default([]),
    systems: z.array(trimmed(60)).max(40).default([]),
    brands: z.array(trimmed(60)).max(30).default([]),

    urgency: trimmed(40).optional().or(z.literal("")),
    timeline: trimmed(80).optional().or(z.literal("")),
    budget_range: trimmed(40).optional().or(z.literal("")),
    size_band: trimmed(40).optional().or(z.literal("")),
    has_documentation: z.boolean().optional(),
    site_visit_needed: z.boolean().optional(),

    message: trimmed(5000).optional().or(z.literal("")),

    source_page: trimmed(300).optional().or(z.literal("")),
    referrer: trimmed(300).optional().or(z.literal("")),
    utm_source: trimmed(120).optional().or(z.literal("")),
    utm_medium: trimmed(120).optional().or(z.literal("")),
    utm_campaign: trimmed(160).optional().or(z.literal("")),

    consent_privacy: z.literal(true, {
      message: "Az adatkezelési tájékoztató elfogadása kötelező.",
    }),
    consent_marketing: z.boolean().default(false),

    /** Rejtett csapdamező — ha ki van töltve, botról van szó. */
    website: z.string().max(0).optional().or(z.literal("")),
    /** Az űrlap megnyitásának időbélyege — a túl gyors kitöltés szintén bot-jel. */
    rendered_at: z.coerce.number().optional(),
  })
  .superRefine((data, ctx) => {
    const hasEmail = Boolean(data.email);
    const hasPhone = Boolean(data.phone);

    if (!hasEmail && !hasPhone) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: "Adjon meg legalább egy elérhetőséget: e-mail címet vagy telefonszámot.",
      });
    }

    // A visszahívás és a hibabejelentés telefon nélkül értelmetlen.
    if ((data.form_type === "visszahivas" || data.form_type === "hibabejelentes") && !hasPhone) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Ehhez az űrlaphoz telefonszám megadása szükséges.",
      });
    }

    if (data.form_type === "kapcsolat" && !data.message) {
      ctx.addIssue({
        code: "custom",
        path: ["message"],
        message: "Kérjük, írja le röviden, miben segíthetünk.",
      });
    }

    if (data.form_type === "hibabejelentes" && !data.message) {
      ctx.addIssue({
        code: "custom",
        path: ["message"],
        message: "Kérjük, írja le röviden a hibát.",
      });
    }

    if (
      data.form_type === "ajanlatkeres" &&
      data.services.length === 0 &&
      data.systems.length === 0
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["services"],
        message: "Válasszon legalább egy szolgáltatást vagy rendszert.",
      });
    }
  });

export type LeadInput = z.input<typeof leadSchema>;
export type LeadData = z.output<typeof leadSchema>;

export const formTypeLabels: Record<LeadData["form_type"], string> = {
  kapcsolat: "Kapcsolatfelvétel",
  visszahivas: "Visszahívás kérése",
  ajanlatkeres: "Részletes ajánlatkérés",
  felmeres: "Ingyenes helyszíni felmérés",
  hibabejelentes: "Hibabejelentés",
};
