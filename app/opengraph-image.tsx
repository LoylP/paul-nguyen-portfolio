import { ImageResponse } from "next/og";

export const alt = "Paul Nguyen — AI Solution Architect | Kiến trúc sư Giải pháp AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0b0f17 0%, #111827 100%)",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "88px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#38bdf8",
            borderRadius: "8px",
            height: "8px",
            marginBottom: "32px",
            width: "96px",
          }}
        />
        <div style={{ fontSize: 74, fontWeight: 700, letterSpacing: "-2px" }}>Paul Nguyen</div>
        <div style={{ color: "#38bdf8", fontSize: 36, marginTop: "18px" }}>AI Solution Architect</div>
        <div style={{ color: "#cbd5e1", fontSize: 29, marginTop: "12px" }}>
          Kiến trúc sư Giải pháp AI
        </div>
        <div style={{ color: "#94a3b8", fontSize: 23, marginTop: "42px" }}>
          From enterprise AI PoC to real-world adoption · Từ PoC đến triển khai AI doanh nghiệp
        </div>
      </div>
    ),
    size,
  );
}
