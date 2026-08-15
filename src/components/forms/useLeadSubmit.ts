"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { LeadInput } from "@/lib/schemas";

type State = "idle" | "submitting" | "success" | "error";

/**
 * Közös beküldési logika minden űrlaphoz: attribúciós adatok gyűjtése,
 * hívás az API felé, mezőszintű hibák kezelése és a siker állapot.
 */
export function useLeadSubmit() {
  const [state, setState] = useState<State>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const renderedAt = useRef<number>(0);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const submit = useCallback(async (payload: Partial<LeadInput>) => {
    setState("submitting");
    setFormError(null);
    setFieldErrors({});

    let attribution: Record<string, string> = {};
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      attribution = {
        source_page: window.location.pathname,
        referrer: document.referrer.slice(0, 300),
        utm_source: params.get("utm_source") ?? "",
        utm_medium: params.get("utm_medium") ?? "",
        utm_campaign: params.get("utm_campaign") ?? "",
      };
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...attribution,
          ...payload,
          rendered_at: renderedAt.current,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json?.ok) {
        if (json?.fieldErrors) setFieldErrors(json.fieldErrors);
        setFormError(
          json?.error ??
            (json?.fieldErrors
              ? "Kérjük, ellenőrizze a pirossal jelölt mezőket."
              : "Váratlan hiba történt. Kérjük, próbálja újra."),
        );
        setState("error");
        return false;
      }

      setState("success");
      return true;
    } catch {
      setFormError(
        "Nem sikerült kapcsolódni a szerverhez. Ellenőrizze az internetkapcsolatát, vagy hívjon minket telefonon.",
      );
      setState("error");
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setState("idle");
    setFormError(null);
    setFieldErrors({});
  }, []);

  return { state, formError, fieldErrors, submit, reset };
}
