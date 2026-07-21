import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ingride Souza — Landing Pages, Sistemas e Automações sob Medida";
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
          justifyContent: "center",
          padding: "80px 90px",
          background: "#fafaf9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", width: 34, height: 2, background: "#0f766e" }} />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a8a29e",
              fontWeight: 500,
            }}
          >
            Salvador, Brasil · Freelancer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, color: "#1c1917" }}>
            LANDING PAGES,
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, color: "#1c1917" }}>
            SISTEMAS E
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, color: "#0f766e" }}>
            AUTOMAÇÕES.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#1c1917",
            }}
          >
            Ingride Souza
          </div>
          <div style={{ display: "flex", width: 6, height: 6, borderRadius: 999, background: "#a8a29e" }} />
          <div style={{ display: "flex", fontSize: 30, color: "#57534e" }}>
            Desenvolvedora Backend &amp; AI Engineer
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
