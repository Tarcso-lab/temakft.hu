"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig, Loader2, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/primitives";
import {
  ConsentCheckbox,
  Honeypot,
  PrivacyConsentLabel,
  SelectInput,
  TextArea,
  TextInput,
} from "./fields";
import { useLeadSubmit } from "./useLeadSubmit";
import { propertyTypes } from "@/lib/forms";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = "kapcsolat" | "visszahivas" | "felmeres" | "hibabejelentes";

const config: Record<
  Variant,
  {
    submitLabel: string;
    successTitle: string;
    successText: string;
    messageLabel: string;
    messagePlaceholder: string;
    show: {
      company?: boolean;
      email?: boolean;
      propertyType?: boolean;
      location?: boolean;
      message?: boolean;
    };
    messageRequired?: boolean;
  }
> = {
  kapcsolat: {
    submitLabel: "Üzenet küldése",
    successTitle: "Köszönjük, megkaptuk az üzenetét!",
    successText:
      "Munkatársunk egy munkanapon belül felveszi Önnel a kapcsolatot. Sürgős esetben hívjon minket telefonon.",
    messageLabel: "Miben segíthetünk?",
    messagePlaceholder:
      "Írja le röviden, milyen épületről van szó és mire lenne szüksége. Minél konkrétabb, annál pontosabb választ tudunk adni.",
    show: { company: true, email: true, propertyType: true, message: true },
    messageRequired: true,
  },
  visszahivas: {
    submitLabel: "Visszahívást kérek",
    successTitle: "Rendben, visszahívjuk!",
    successText:
      "Munkatársunk munkaidőben egy órán belül, munkaidőn kívül a következő munkanap reggelén hívja Önt.",
    messageLabel: "Miről szeretne beszélni? (nem kötelező)",
    messagePlaceholder: "Pár szó a témáról, hogy felkészülten hívjuk vissza.",
    show: { company: true, message: true },
  },
  felmeres: {
    submitLabel: "Felmérést kérek",
    successTitle: "Köszönjük, felvesszük Önnel a kapcsolatot!",
    successText:
      "Egyeztetünk egy időpontot a helyszíni felmérésre. A felmérés és az azt követő állapotjelentés díjmentes.",
    messageLabel: "Mit szeretne felméretni? (nem kötelező)",
    messagePlaceholder:
      "Például: irodaház gyengeáramú rendszerei, csarnok villamos hálózata, társasházi kaputelefon.",
    show: { company: true, email: true, propertyType: true, location: true, message: true },
  },
  hibabejelentes: {
    submitLabel: "Hibabejelentés küldése",
    successTitle: "Hibabejelentését rögzítettük.",
    successText:
      "Munkatársunk hamarosan keresi Önt. Ha a hiba életveszélyt vagy azonnali kockázatot jelent, kérjük, telefonon is jelezze.",
    messageLabel: "A hiba leírása",
    messagePlaceholder:
      "Mi a hiba, mióta tart, és mikor jelentkezik? Például: a második emeleti áramkör naponta többször kiold.",
    show: { company: true, location: true, message: true },
    messageRequired: true,
  },
};

export function LeadForm({
  variant = "kapcsolat",
  className,
  compact = false,
}: {
  variant?: Variant;
  className?: string;
  compact?: boolean;
}) {
  const c = config[variant];
  const { state, formError, fieldErrors, submit } = useLeadSubmit();

  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    property_type: "",
    location: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({
      form_type: variant,
      ...values,
      urgency: variant === "hibabejelentes" ? "surgos_24h" : "",
      site_visit_needed: variant === "felmeres" ? true : undefined,
      consent_privacy: consent as true,
      website: honeypot,
    });
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className={cn(
          "rounded-card border border-signal-300 bg-signal-50 p-7 text-center sm:p-9",
          className,
        )}
        role="status"
      >
        <CircleCheckBig className="mx-auto h-11 w-11 text-signal-600" strokeWidth={1.6} />
        <h3 className="mt-4 text-xl font-bold tracking-[-0.02em] text-ink-900">{c.successTitle}</h3>
        <p className="mx-auto mt-2.5 max-w-md text-[0.9rem] leading-relaxed text-stone-600">
          {c.successText}
        </p>
        <a
          href={site.contact.phoneHref}
          className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-ink-900 underline underline-offset-4"
        >
          {site.contact.phone}
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("relative flex flex-col gap-4", className)} noValidate>
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
        <TextInput
          label="Név"
          required
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          error={fieldErrors.name}
          placeholder="Kovács Péter"
        />
        <TextInput
          label="Telefonszám"
          required={variant === "visszahivas" || variant === "hibabejelentes"}
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
          error={fieldErrors.phone}
          placeholder="+36 30 123 4567"
        />
        {c.show.email && (
          <TextInput
            label="E-mail cím"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            error={fieldErrors.email}
            placeholder="nev@ceg.hu"
          />
        )}
        {c.show.company && (
          <TextInput
            label="Cég / társasház"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
            error={fieldErrors.company}
            placeholder="Példa Kft."
          />
        )}
        {c.show.propertyType && (
          <SelectInput
            label="Ingatlan típusa"
            options={propertyTypes}
            value={values.property_type}
            onChange={set("property_type")}
            error={fieldErrors.property_type}
          />
        )}
        {c.show.location && (
          <TextInput
            label="Helyszín"
            value={values.location}
            onChange={set("location")}
            error={fieldErrors.location}
            placeholder="Budapest, XIII. kerület"
          />
        )}
      </div>

      {c.show.message && (
        <TextArea
          label={c.messageLabel}
          required={c.messageRequired}
          rows={variant === "visszahivas" ? 3 : 5}
          value={values.message}
          onChange={set("message")}
          error={fieldErrors.message}
          placeholder={c.messagePlaceholder}
        />
      )}

      <ConsentCheckbox
        checked={consent}
        onToggle={() => setConsent((v) => !v)}
        error={fieldErrors.consent_privacy}
      >
        <PrivacyConsentLabel />
      </ConsentCheckbox>

      {formError && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-[0.83rem] leading-snug text-red-700"
        >
          <TriangleAlert className="mt-px h-4 w-4 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={state === "submitting"}
        variant={variant === "hibabejelentes" ? "secondary" : "primary"}
        className="mt-1 w-full"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Küldés folyamatban…
          </>
        ) : (
          <>
            {c.submitLabel}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-[0.74rem] leading-snug text-stone-500">
        Válaszunk nem jár kötelezettséggel. Adatait harmadik félnek nem adjuk át.
      </p>
    </form>
  );
}
