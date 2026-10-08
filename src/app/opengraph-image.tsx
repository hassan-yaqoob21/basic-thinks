import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Basic Thinks — AI, Creativity & Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(229,9,20,0.35) 0%, transparent 50%)",
          color: "#f4f4f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: "#ff2b2b",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: "#a1a1aa",
              textTransform: "uppercase",
            }}
          >
            AI · Creativity · Technology
          </div>
        </div>

        <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -3 }}>
          Think. Create. Build.
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          {siteConfig.description}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 96,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#ff2b2b",
          }}
        >
          BASIC THINKS
        </div>
      </div>
    ),
    { ...size },
  );
}
