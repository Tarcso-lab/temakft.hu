"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/content";
import { cn } from "@/lib/utils";
import { huTypo } from "@/lib/typography";

export function Faq({ items, className }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-stone-200 border-y border-stone-200", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-5 py-5 text-left"
              >
                <span
                  className={cn(
                    "text-[1rem] font-semibold leading-snug tracking-[-0.015em] transition-colors sm:text-[1.05rem]",
                    isOpen ? "text-ink-900" : "text-ink-800",
                  )}
                >
                  {huTypo(item.q)}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-signal-500 bg-signal-400 text-ink-900"
                      : "border-stone-300 text-stone-500",
                  )}
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pb-6 pr-8 text-[0.93rem] leading-relaxed text-stone-600">
                    {huTypo(item.a)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
