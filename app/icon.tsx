import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Generates a small favicon from the same bloom-line signature mark used
// across the site, so there's no external asset dependency.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFF7FA",
          borderRadius: "8px",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 200 200" fill="none">
          <g stroke="#B83E6B" strokeWidth="9" strokeLinecap="round">
            <path d="M100 100 C 100 60, 130 40, 150 20" />
            <path d="M100 100 C 130 90, 155 65, 175 45" />
            <path d="M100 100 C 140 105, 168 100, 190 92" />
            <path d="M100 100 C 90 65, 100 35, 95 8" />
            <path d="M100 100 C 65 90, 45 65, 25 45" />
            <path d="M100 100 C 60 105, 32 100, 10 92" />
          </g>
          <circle cx="100" cy="100" r="14" fill="#B83E6B" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
