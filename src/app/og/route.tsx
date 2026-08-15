import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "TEMA Menedzsment Kft.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dinamikus OG-kép: /og?title=... — a megosztási előnézetekhez. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title")?.slice(0, 120) ||
    "Műszaki épületüzemeltetés — egy partner az épület teljes életciklusára";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b100d",
          padding: "68px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "radial-gradient(circle, rgba(168,225,12,0.22) 0%, rgba(168,225,12,0) 68%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="60" height="60" viewBox="0 0 48 48" fill="none">
            <path
              d="M35 4.95 46 24 35 43.05H13L2 24 13 4.95H35Z"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M13.4 13H34.6v5.6H13.4V13Z" fill="#ffffff" />
            <path d="M20.6 18.6h6.8v7.5l-6.8 3.4v-10.9Z" fill="#a8e10c" />
            <path d="M20.6 32.1l6.8-3.4V39h-6.8v-6.9Z" fill="#ffffff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#fff", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
              TEMA
            </span>
            <span style={{ color: "#97a19b", fontSize: 14, letterSpacing: 5 }}>MENEDZSMENT</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: title.length > 70 ? 52 : 62,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: -1.8,
            maxWidth: 940,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", width: 44, height: 4, background: "#a8e10c" }} />
          <span style={{ color: "#97a19b", fontSize: 24 }}>
            Üzemeltetés · Tervezés · Kivitelezés · temakft.hu
          </span>
        </div>
      </div>
    ),
    size,
  );
}
