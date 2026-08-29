import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A generic, on-brand OG image built entirely from the site's own signature
// mark and type — no photography dependency. Replace with a real photograph
// later if preferred; this keeps link previews on-brand in the meantime.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFF7FA 0%, #FCE4ED 55%, #F8D6E2 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 200 200" fill="none">
          <g stroke="#B83E6B" strokeWidth="5" strokeLinecap="round">
            <path d="M100 100 C 100 60, 130 40, 150 20" />
            <path d="M100 100 C 130 90, 155 65, 175 45" />
            <path d="M100 100 C 140 105, 168 100, 190 92" />
            <path d="M100 100 C 90 65, 100 35, 95 8" />
            <path d="M100 100 C 65 90, 45 65, 25 45" />
            <path d="M100 100 C 60 105, 32 100, 10 92" />
          </g>
          <circle cx="100" cy="100" r="9" fill="#B83E6B" />
        </svg>
        <div
          style={{
            marginTop: 28,
            fontSize: 56,
            fontStyle: "italic",
            color: "#332B2E",
          }}
        >
          Divine Ivf
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B83E6B",
            fontWeight: 700,
          }}
        >
          Dr. Mandavi Rai · Sector 76, Noida
        </div>
      </div>
    ),
    { ...size }
  );
}
