"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobilon a képernyő aljára rögzített hívás / ajánlatkérés sáv.
 * Csak görgetés után jelenik meg, hogy ne takarja el a hero tartalmát,
 * és nem jelenik meg magán az ajánlatkérő oldalon.
 */
export function StickyCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = pathname === "/ajanlatkeres" || pathname === "/kapcsolat";

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="grid grid-cols-2 gap-2 p-2.5">
            <a
              href={site.contact.phoneHref}
              className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/20 text-[0.88rem] font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-signal-400" />
              Hívás
            </a>
            <Link
              href="/ajanlatkeres"
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-signal-400 text-[0.88rem] font-semibold text-ink-950"
            >
              <FileText className="h-4 w-4" />
              Ajánlatkérés
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
