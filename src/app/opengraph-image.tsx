import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Nailangs — type Nigerian languages the right way";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The share card: brand green, the bird, and the letters only Nailangs has. */
export default async function OpengraphImage() {
  const icon = await readFile(path.join(process.cwd(), "public/images/nailangs-icon.png"));
  const src = `data:image/png;base64,${icon.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #14452a 0%, #1d5c36 55%, #3b8c3f 100%)",
          color: "#f8f5ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          { }
          <img src={src} width={96} height={96} style={{ borderRadius: 24 }} alt="" />
          <div style={{ fontSize: 52, fontWeight: 800 }}>Nailangs</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>Type it right.</div>
          <div style={{ fontSize: 36, marginTop: 20, color: "#a6ce39" }}>
            Keyboards for Yoruba, Igbo, Hausa and 12+ Nigerian languages
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(248,245,236,0.75)" }}>
          Android · iPhone & iPad · Mac · Windows
        </div>
      </div>
    ),
    size,
  );
}
