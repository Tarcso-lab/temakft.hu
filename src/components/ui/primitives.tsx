import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  dark = false,
  children,
  id,
}: {
  className?: string;
  dark?: boolean;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-28",
        dark && "noise bg-ink-900 text-stone-200",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-2.5",
        dark ? "text-signal-400" : "text-signal-600",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("inline-block h-[7px] w-[7px] rotate-45", dark ? "bg-signal-400" : "bg-signal-500")}
      />
      {children}
    </p>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-signal-400 text-ink-950 hover:bg-signal-300 shadow-[0_1px_0_rgba(255,255,255,0.4)_inset]",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  ghost: "bg-transparent text-ink-900 hover:bg-stone-100",
  "outline-light": "border border-white/25 text-white hover:border-signal-400 hover:text-signal-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[0.8rem]",
  md: "h-11 px-5 text-[0.9rem]",
  lg: "h-13 px-7 text-[0.95rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-[-0.01em] transition-all duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-55";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <Link className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-stone-200 bg-white p-6 transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Stat({ value, label, dark }: { value: string; label: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        "border-l-2 pl-4",
        dark ? "border-signal-400/70" : "border-signal-400",
      )}
    >
      <div
        className={cn(
          "text-[1.65rem] font-bold leading-none tracking-[-0.03em]",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {value}
      </div>
      <div className={cn("mt-2 text-[0.82rem] leading-snug", dark ? "text-stone-400" : "text-stone-500")}>
        {label}
      </div>
    </div>
  );
}
