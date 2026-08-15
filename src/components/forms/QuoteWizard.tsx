"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CircleCheckBig,
  Loader2,
  Send,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/primitives";
import {
  ConsentCheckbox,
  Honeypot,
  OptionCard,
  PrivacyConsentLabel,
  SelectInput,
  TextArea,
  TextInput,
} from "./fields";
import { useLeadSubmit } from "./useLeadSubmit";
import {
  budgetOptions,
  propertyTypes,
  serviceOptions,
  siteScopeOptions,
  sizeOptions,
  systemGroups,
  systemOptions,
  urgencyOptions,
} from "@/lib/forms";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Mire van szüksége?", hint: "Több lehetőséget is választhat" },
  { id: 2, title: "Érintett rendszerek", hint: "Jelölje be, ami releváns" },
  { id: 3, title: "Az ingatlan és a projekt", hint: "Ezekből tudunk pontos árat adni" },
  { id: 4, title: "Elérhetőség", hint: "Hova küldjük az ajánlatot?" },
];

export function QuoteWizard({ className }: { className?: string }) {
  const { state, formError, fieldErrors, submit } = useLeadSubmit();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [stepError, setStepError] = useState<string | null>(null);

  const [services, setServices] = useState<string[]>([]);
  const [systems, setSystems] = useState<string[]>([]);
  const [values, setValues] = useState({
    property_type: "",
    location: "",
    size_band: "",
    site_scope: "",
    urgency: "",
    budget_range: "",
    message: "",
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [hasDocs, setHasDocs] = useState<boolean | undefined>(undefined);
  const [siteVisit, setSiteVisit] = useState(true);
  const [consent, setConsent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const progress = useMemo(() => ((step - 1) / (steps.length - 1)) * 100, [step]);

  function go(next: number) {
    setStepError(null);

    if (next > step) {
      if (step === 1 && services.length === 0) {
        setStepError("Válasszon legalább egy szolgáltatást, hogy tudjuk, miben segíthetünk.");
        return;
      }
      if (step === 2 && systems.length === 0 && services.length === 0) {
        setStepError("Válasszon legalább egy rendszert.");
        return;
      }
    }

    setDirection(next > step ? 1 : -1);
    setStep(Math.min(steps.length, Math.max(1, next)));
    if (typeof window !== "undefined") {
      document.getElementById("ajanlatkero-urlap")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submit({
      form_type: "ajanlatkeres",
      ...values,
      services,
      systems,
      has_documentation: hasDocs,
      site_visit_needed: siteVisit,
      consent_privacy: consent as true,
      consent_marketing: marketing,
      website: honeypot,
    });
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "rounded-card border border-signal-300 bg-signal-50 p-8 text-center sm:p-12",
          className,
        )}
        role="status"
      >
        <CircleCheckBig className="mx-auto h-12 w-12 text-signal-600" strokeWidth={1.5} />
        <h3 className="mt-5 text-2xl font-bold tracking-[-0.025em] text-ink-900">
          Köszönjük, megkaptuk az ajánlatkérését!
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-[0.93rem] leading-relaxed text-stone-600">
          Munkatársunk egy munkanapon belül felveszi Önnel a kapcsolatot, hogy pontosítsuk a
          részleteket. Ha helyszíni felmérést is kért, ennek időpontját is ekkor egyeztetjük.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="text-[0.8rem] text-stone-500">Sürgős esetben hívjon minket:</span>
          <a
            href={site.contact.phoneHref}
            className="text-lg font-bold text-ink-900 underline underline-offset-4"
          >
            {site.contact.phone}
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div
      id="ajanlatkero-urlap"
      className={cn(
        "overflow-hidden rounded-card border border-stone-200 bg-white shadow-sm",
        className,
      )}
    >
      {/* Előrehaladás */}
      <div className="border-b border-stone-200 bg-stone-50 px-6 py-5 sm:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow text-signal-600">
              {step}. lépés / {steps.length}
            </p>
            <h3 className="mt-1.5 text-lg font-bold tracking-[-0.02em] text-ink-900">
              {steps[step - 1].title}
            </h3>
            <p className="mt-0.5 text-[0.8rem] text-stone-500">{steps[step - 1].hint}</p>
          </div>
          <span className="hidden text-[0.75rem] font-medium text-stone-500 sm:block">
            ~2 perc kitöltés
          </span>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-stone-200">
          <motion.div
            className="h-full rounded-full bg-signal-400"
            animate={{ width: `${Math.max(progress, 6)}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <form onSubmit={onSubmit} className="relative px-6 py-7 sm:px-8 sm:py-8" noValidate>
        <Honeypot value={honeypot} onChange={setHoneypot} />

        {/* Szándékosan nincs exit-animáció és AnimatePresence: gyors, egymás utáni
            lépésváltásnál a kilépő elem beragadhat, és a régi lépés tartalma
            maradna a képernyőn. A belépő animáció önmagában is elég. */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: direction * 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
            {step === 1 && (
              <div className="flex flex-col gap-6">
                <fieldset>
                  <legend className="mb-3 text-[0.82rem] font-semibold text-ink-800">
                    Milyen szolgáltatásra lenne szüksége?{" "}
                    <span className="text-signal-600">*</span>
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {serviceOptions.map((o) => (
                      <OptionCard
                        key={o.value}
                        title={o.label}
                        hint={o.hint}
                        checked={services.includes(o.value)}
                        onToggle={() => toggle(services, setServices, o.value)}
                      />
                    ))}
                  </div>
                </fieldset>

                <SelectInput
                  label="Milyen épületről van szó?"
                  options={propertyTypes}
                  value={values.property_type}
                  onChange={set("property_type")}
                  className="max-w-sm"
                />
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-6">
                {systemGroups.map((group) => (
                  <fieldset key={group}>
                    <legend className="mb-3 text-[0.82rem] font-semibold text-ink-800">
                      {group}
                    </legend>
                    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                      {systemOptions
                        .filter((s) => s.group === group)
                        .map((o) => (
                          <OptionCard
                            key={o.value}
                            title={o.label}
                            checked={systems.includes(o.value)}
                            onToggle={() => toggle(systems, setSystems, o.value)}
                          />
                        ))}
                    </div>
                  </fieldset>
                ))}
                <p className="text-[0.8rem] leading-relaxed text-stone-500">
                  Nem baj, ha nem tudja pontosan — a felmérés során közösen tisztázzuk. Ha egyik
                  sem illik, ugorjon tovább és írja le a következő lépésben.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectInput
                    label="Alapterület"
                    options={sizeOptions}
                    value={values.size_band}
                    onChange={set("size_band")}
                  />
                  <TextInput
                    label="Helyszín"
                    value={values.location}
                    onChange={set("location")}
                    placeholder="Budapest, XI. kerület"
                  />
                  <SelectInput
                    label="Hány helyszínt érint a munka?"
                    hint="Több telephely vagy több épület esetén másképp tervezünk."
                    options={siteScopeOptions}
                    value={values.site_scope}
                    onChange={set("site_scope")}
                  />
                  <SelectInput
                    label="Mikorra lenne szükség rá?"
                    options={urgencyOptions}
                    value={values.urgency}
                    onChange={set("urgency")}
                  />
                </div>

                <SelectInput
                  label="Tervezett költségkeret"
                  hint="Nem kötelező, de segít abban, hogy reális megoldást javasoljunk."
                  options={budgetOptions}
                  value={values.budget_range}
                  onChange={set("budget_range")}
                  className="max-w-sm"
                />

                <fieldset>
                  <legend className="mb-2.5 text-[0.82rem] font-semibold text-ink-800">
                    Rendelkezésre áll műszaki dokumentáció?
                  </legend>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    <OptionCard
                      type="radio"
                      name="docs"
                      title="Igen, van"
                      checked={hasDocs === true}
                      onToggle={() => setHasDocs(true)}
                    />
                    <OptionCard
                      type="radio"
                      name="docs"
                      title="Nincs vagy hiányos"
                      checked={hasDocs === false}
                      onToggle={() => setHasDocs(false)}
                    />
                    <OptionCard
                      type="radio"
                      name="docs"
                      title="Nem tudom"
                      checked={hasDocs === undefined}
                      onToggle={() => setHasDocs(undefined)}
                    />
                  </div>
                </fieldset>

                <OptionCard
                  title="Kérek díjmentes helyszíni felmérést"
                  hint="Ajánlatot felelősen csak a rendszerek tényleges állapotának ismeretében lehet adni."
                  checked={siteVisit}
                  onToggle={() => setSiteVisit((v) => !v)}
                />

                <TextArea
                  label="Egyéb tudnivaló a projektről"
                  rows={4}
                  value={values.message}
                  onChange={set("message")}
                  placeholder="Például: üzemelő épület, csak hétvégén lehet dolgozni; vagy: a meglévő rendszer 2012-ben épült."
                />
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
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
                    label="Cég / szervezet"
                    autoComplete="organization"
                    value={values.company}
                    onChange={set("company")}
                    error={fieldErrors.company}
                    placeholder="Példa Kft."
                  />
                  <TextInput
                    label="E-mail cím"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set("email")}
                    error={fieldErrors.email}
                    placeholder="nev@ceg.hu"
                  />
                  <TextInput
                    label="Telefonszám"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={set("phone")}
                    error={fieldErrors.phone}
                    placeholder="+36 30 123 4567"
                  />
                </div>

                <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                  <p className="text-[0.8rem] font-semibold text-ink-800">Összefoglaló</p>
                  <dl className="mt-2.5 space-y-1.5 text-[0.8rem] text-stone-600">
                    <SummaryRow
                      label="Szolgáltatás"
                      value={services
                        .map((s) => serviceOptions.find((o) => o.value === s)?.label)
                        .filter(Boolean)
                        .join(", ")}
                    />
                    <SummaryRow
                      label="Rendszerek"
                      value={systems
                        .map((s) => systemOptions.find((o) => o.value === s)?.label)
                        .filter(Boolean)
                        .join(", ")}
                    />
                    <SummaryRow
                      label="Épület"
                      value={propertyTypes.find((p) => p.value === values.property_type)?.label}
                    />
                    <SummaryRow label="Helyszín" value={values.location} />
                    <SummaryRow
                      label="Helyszíni felmérés"
                      value={siteVisit ? "Igen, kérem" : "Nem kérem"}
                    />
                  </dl>
                </div>

                <div className="flex flex-col gap-3">
                  <ConsentCheckbox
                    checked={consent}
                    onToggle={() => setConsent((v) => !v)}
                    error={fieldErrors.consent_privacy}
                  >
                    <PrivacyConsentLabel />
                  </ConsentCheckbox>
                  <ConsentCheckbox checked={marketing} onToggle={() => setMarketing((v) => !v)}>
                    Szeretnék időnként szakmai tartalmakat kapni az épületüzemeltetésről. (nem
                    kötelező)
                  </ConsentCheckbox>
                </div>
              </div>
            )}
        </motion.div>

        {(stepError || formError) && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-[0.83rem] leading-snug text-red-700"
          >
            <TriangleAlert className="mt-px h-4 w-4 shrink-0" />
            <span>{stepError ?? formError}</span>
          </div>
        )}

        <div className="mt-7 flex items-center justify-between gap-3 border-t border-stone-200 pt-6">
          {step > 1 ? (
            <Button type="button" variant="ghost" onClick={() => go(step - 1)}>
              <ArrowLeft className="h-4 w-4" />
              Vissza
            </Button>
          ) : (
            <span />
          )}

          {step < steps.length ? (
            <Button type="button" size="lg" onClick={() => go(step + 1)}>
              Tovább
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={state === "submitting"}>
              {state === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Küldés…
                </>
              ) : (
                <>
                  Ajánlatkérés elküldése
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <dt className="shrink-0 font-medium text-stone-500">{label}:</dt>
      <dd className="text-ink-900">{value}</dd>
    </div>
  );
}
