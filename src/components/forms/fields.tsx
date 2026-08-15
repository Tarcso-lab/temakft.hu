"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { useId } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[0.92rem] text-ink-900 transition-colors placeholder:text-stone-400 focus:border-signal-500 focus:outline-none focus:ring-2 focus:ring-signal-400/25";

export function Field({
  label,
  error,
  hint,
  required,
  children,
  htmlFor,
  className,
}: {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-[0.82rem] font-semibold text-ink-800">
        {label}
        {required && <span className="ml-0.5 text-signal-600">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[0.76rem] leading-snug text-stone-500">{hint}</p>}
      {error && (
        <p role="alert" className="text-[0.76rem] font-medium leading-snug text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  label,
  error,
  hint,
  required,
  className,
  ...props
}: ComponentProps<"input"> & { label: string; error?: string; hint?: string }) {
  const id = useId();
  return (
    <Field label={label} error={error} hint={hint} required={required} htmlFor={id} className={className}>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, error ? "border-red-400" : "border-stone-300")}
        {...props}
      />
    </Field>
  );
}

export function TextArea({
  label,
  error,
  hint,
  required,
  className,
  ...props
}: ComponentProps<"textarea"> & { label: string; error?: string; hint?: string }) {
  const id = useId();
  return (
    <Field label={label} error={error} hint={hint} required={required} htmlFor={id} className={className}>
      <textarea
        id={id}
        rows={4}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, "resize-y", error ? "border-red-400" : "border-stone-300")}
        {...props}
      />
    </Field>
  );
}

export function SelectInput({
  label,
  error,
  hint,
  required,
  options,
  placeholder = "Válasszon…",
  className,
  ...props
}: ComponentProps<"select"> & {
  label: string;
  error?: string;
  hint?: string;
  options: readonly { value: string; label: string }[];
  placeholder?: string;
}) {
  const id = useId();
  return (
    <Field label={label} error={error} hint={hint} required={required} htmlFor={id} className={className}>
      <select
        id={id}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, "appearance-none pr-9", error ? "border-red-400" : "border-stone-300")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236b7671' stroke-width='2'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

/** Nagy, kattintható választókártya — mobilon lényegesen jobb, mint egy sima checkbox. */
export function OptionCard({
  checked,
  onToggle,
  title,
  hint,
  type = "checkbox",
  name,
}: {
  checked: boolean;
  onToggle: () => void;
  title: string;
  hint?: string;
  type?: "checkbox" | "radio";
  name?: string;
}) {
  return (
    <label
      className={cn(
        "group relative flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-all duration-200",
        checked
          ? "border-signal-500 bg-signal-50 shadow-[0_0_0_1px_var(--color-signal-500)]"
          : "border-stone-300 bg-white hover:border-stone-400 hover:bg-stone-50",
      )}
    >
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onToggle}
        className="sr-only"
      />
      <span
        aria-hidden
        className={cn(
          "mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center border transition-all",
          type === "radio" ? "rounded-full" : "rounded-[5px]",
          checked ? "border-signal-600 bg-signal-500" : "border-stone-400 bg-white",
        )}
      >
        {checked &&
          (type === "radio" ? (
            <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
          ) : (
            <Check className="h-3 w-3 text-ink-900" strokeWidth={3.5} />
          ))}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.86rem] font-medium leading-snug text-ink-900">{title}</span>
        {hint && <span className="mt-0.5 block text-[0.76rem] leading-snug text-stone-500">{hint}</span>}
      </span>
    </label>
  );
}

export function ConsentCheckbox({
  checked,
  onToggle,
  error,
  children,
}: {
  checked: boolean;
  onToggle: () => void;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <input type="checkbox" checked={checked} onChange={onToggle} className="sr-only" />
        <span
          aria-hidden
          className={cn(
            "mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-all",
            checked
              ? "border-signal-600 bg-signal-500"
              : error
                ? "border-red-400 bg-white"
                : "border-stone-400 bg-white",
          )}
        >
          {checked && <Check className="h-3 w-3 text-ink-900" strokeWidth={3.5} />}
        </span>
        <span className="text-[0.79rem] leading-relaxed text-stone-600">{children}</span>
      </label>
      {error && (
        <p role="alert" className="mt-1.5 pl-[30px] text-[0.76rem] font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function PrivacyConsentLabel() {
  return (
    <>
      Elolvastam és elfogadom az{" "}
      <Link
        href="/adatkezelesi-tajekoztato"
        target="_blank"
        className="font-medium text-signal-700 underline underline-offset-2"
      >
        adatkezelési tájékoztatót
      </Link>
      , és hozzájárulok az adataim kezeléséhez a megkeresésem megválaszolása céljából.
    </>
  );
}

/** Rejtett csapdamező botok ellen — valódi felhasználó soha nem tölti ki. */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor="website-field">Ezt a mezőt hagyja üresen</label>
      <input
        id="website-field"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
