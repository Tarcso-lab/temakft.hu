"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Görgetés után megjelenő „vissza a tetejére” gomb.
 *
 * Szándékosan CSS-átmenettel dolgozik és nem JavaScript-animációval: a gomb
 * mindig a DOM-ban marad, csak az osztályai váltanak. Így akkor sem ragadhat
 * láthatatlan állapotban, ha a böngésző épp nem futtat animációs ciklust
 * (háttérbe került fül, energiatakarékos mód).
 *
 * Mobilon a rögzített hívás/ajánlatkérés sáv fölé kerül, hogy ne takarja el.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Vissza az oldal tetejére"
      title="Vissza az oldal tetejére"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "no-print group fixed right-4 bottom-[88px] z-40 flex h-12 w-12 items-center justify-center",
        "rounded-xl border border-white/15 bg-ink-900/95 text-white shadow-lg shadow-black/25 backdrop-blur-sm",
        "transition-[opacity,transform,background-color,border-color] duration-300 ease-out",
        "hover:border-signal-400 hover:bg-ink-850 hover:text-signal-400 active:scale-95",
        "md:right-6 md:bottom-6",
        visible
          ? "translate-y-0 scale-100 opacity-100 hover:-translate-y-0.5"
          : "pointer-events-none translate-y-3 scale-95 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
