import { ImageResponse } from "next/og";

export const alt = "Fam — UI/UX Designer & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F5F0EB",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative lettermark watermark */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -20,
            fontSize: 500,
            fontWeight: 900,
            lineHeight: 1,
            color: "rgba(26,26,26,0.05)",
            display: "flex",
            userSelect: "none",
          }}
        >
          F.
        </div>

        {/* Top: role badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{ width: 32, height: 2, backgroundColor: "#6B6560" }}
          />
          <span
            style={{
              fontSize: 13,
              color: "#6B6560",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            UI/UX Designer & Developer
          </span>
        </div>

        {/* Middle: tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              display: "flex",
            }}
          >
            Designing
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              color: "#1A1A1A",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              display: "flex",
            }}
          >
            systems,
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              color: "#6B6560",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              display: "flex",
            }}
          >
            not just screens.
          </div>
        </div>

        {/* Bottom: name + brand */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#1A1A1A",
                letterSpacing: "0.02em",
              }}
            >
              Muhammad Rifqi Fameizy
            </span>
            <span style={{ fontSize: 13, color: "#6B6560" }}>
              Based in Singapore
            </span>
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#1A1A1A",
              letterSpacing: "-1px",
            }}
          >
            Fam.
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
