import { cn } from "@/lib/utils";

/**
 * TEMA formalogó.
 *
 * A jel egy lapos tetejű hatszög (műszaki/ipari utalás: anyacsavar, chip-tokozás),
 * benne egy geometrikus „T", amelynek szárát átlós rés — szikraköz — vágja ketté.
 * Ez adja az erősáram/energia utalást anélkül, hogy klisés villámjel lenne.
 *
 * Szándékosan egyszínű és zárt kontúrú, hogy hímzéssel, szitanyomással és
 * vágott fóliával is reprodukálható legyen a munkaruházaton.
 */
export function LogoMark({
  className,
  accent = true,
}: {
  className?: string;
  accent?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      {/* Hatszög keret */}
      <path
        d="M35 4.95 46 24 35 43.05H13L2 24 13 4.95H35Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* T fejrész */}
      <path d="M13.4 13H34.6v5.6H13.4V13Z" fill="currentColor" />
      {/* T szár — felső elem, átlósan levágva */}
      <path
        d="M20.6 18.6h6.8v7.5l-6.8 3.4v-10.9Z"
        fill={accent ? "var(--color-signal-400)" : "currentColor"}
      />
      {/* T szár — alsó elem, a rés túloldalán */}
      <path d="M20.6 32.1l6.8-3.4V39h-6.8v-6.9Z" fill="currentColor" />
    </svg>
  );
}

export function LogoFull({
  className,
  markClassName,
  compact = false,
}: {
  className?: string;
  markClassName?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-9 w-9 shrink-0", markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="text-[1.35rem] font-bold tracking-[-0.03em]">TEMA</span>
        {!compact && (
          <span className="mt-[3px] text-[0.5rem] font-semibold tracking-[0.28em] text-current/60">
            MENEDZSMENT
          </span>
        )}
      </span>
    </span>
  );
}
