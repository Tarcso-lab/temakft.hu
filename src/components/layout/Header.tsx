"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { LogoFull } from "@/components/brand/Logo";
import { mainNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/primitives";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/92 backdrop-blur-lg"
          : "border-b border-transparent bg-ink-950",
      )}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center gap-4 px-5 sm:px-7 lg:px-10">
        <Link
          href="/"
          className="text-white transition-opacity hover:opacity-80"
          aria-label={`${site.name} — főoldal`}
        >
          <LogoFull />
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 xl:flex" aria-label="Fő navigáció">
          {mainNav.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const active = isActive(item.href);

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(hasChildren ? item.href : null);
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[0.82rem] font-medium transition-colors",
                    active ? "text-signal-400" : "text-stone-300 hover:text-white",
                  )}
                  aria-expanded={hasChildren ? openMenu === item.href : undefined}
                >
                  {item.shortLabel ?? item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openMenu === item.href && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {hasChildren && openMenu === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3"
                      onMouseEnter={cancelClose}
                    >
                      <div className="overflow-hidden rounded-xl border border-ink-700 bg-ink-850 p-2 shadow-2xl shadow-black/40">
                        <Link
                          href={item.href}
                          className="mb-1 block rounded-lg px-3 py-2.5 transition-colors hover:bg-ink-800"
                        >
                          <span className="text-[0.82rem] font-semibold text-signal-400">
                            {item.label} — áttekintés
                          </span>
                          {item.description && (
                            <span className="mt-0.5 block text-[0.78rem] leading-snug text-stone-400">
                              {item.description}
                            </span>
                          )}
                        </Link>
                        <div className="h-px bg-ink-700" />
                        <ul className="mt-1">
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-3 py-2.5 transition-colors hover:bg-ink-800",
                                  pathname === child.href && "bg-ink-800",
                                )}
                              >
                                <span className="block text-[0.85rem] font-medium text-white">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="mt-0.5 block text-[0.76rem] leading-snug text-stone-400">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-4">
          <a
            href={site.contact.phoneHref}
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-2 py-2 text-[0.82rem] font-semibold text-white transition-colors hover:text-signal-400 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {site.contact.phone}
          </a>
          <ButtonLink href="/ajanlatkeres" size="sm" className="hidden sm:inline-flex">
            Ajánlatot kérek
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label={mobileOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-ink-950 xl:hidden"
          >
            <div className="max-h-[calc(100dvh-68px)] overflow-y-auto px-5 pb-8 pt-4 sm:px-7">
              <MobileNav />
              <div className="mt-6 flex flex-col gap-2.5">
                <ButtonLink href="/ajanlatkeres" size="lg" className="w-full">
                  Ajánlatot kérek
                </ButtonLink>
                <a
                  href={site.contact.phoneHref}
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-5 text-[0.95rem] font-semibold text-white"
                >
                  <Phone className="h-4 w-4" />
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(
    mainNav.find((i) => i.children && pathname.startsWith(i.href))?.href ?? null,
  );

  return (
    <ul className="divide-y divide-white/10">
      {mainNav.map((item) => (
        <li key={item.href} className="py-1">
          {item.children?.length ? (
            <>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className="flex-1 py-3 text-[0.98rem] font-semibold text-white"
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  onClick={() => setExpanded((v) => (v === item.href ? null : item.href))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-400 hover:bg-white/10"
                  aria-label={`${item.label} almenü`}
                  aria-expanded={expanded === item.href}
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expanded === item.href && "rotate-180",
                    )}
                  />
                </button>
              </div>
              <AnimatePresence initial={false}>
                {expanded === item.href && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden pb-2 pl-3"
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block border-l border-white/15 py-2.5 pl-4 text-[0.9rem]",
                            pathname === child.href
                              ? "border-signal-400 text-signal-400"
                              : "text-stone-300",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link href={item.href} className="block py-3 text-[0.98rem] font-semibold text-white">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
