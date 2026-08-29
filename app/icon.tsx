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
        <img src="https://plain-apac-prod-public.komododecks.com/202608/29/P2uU8uzX7KkJPZkEa4K6/image.jpg" alt="" />
      </div>
    ),
    { ...size }
  );
}
