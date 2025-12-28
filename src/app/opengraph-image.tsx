import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "64px",
                    border: "1px solid #e4e4e7",
                    fontFamily:
                        'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                        style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "999px",
                            background: "#18181b",
                        }}
                    />
                    <div style={{ fontSize: "28px", fontWeight: 700, color: "#18181b" }}>
                        VendorQ
                    </div>
                </div>

                <div style={{ maxWidth: "920px" }}>
                    <div
                        style={{
                            fontSize: "54px",
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            color: "#18181b",
                        }}
                    >
                        Run a pilot security questionnaire.
                    </div>
                    <div
                        style={{
                            marginTop: "18px",
                            fontSize: "26px",
                            lineHeight: 1.35,
                            color: "#52525b",
                        }}
                    >
                        Consistent, source-backed answers for enterprise security reviews —
                        so deals don’t stall.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}
                >
                    <div style={{ fontSize: "18px", color: "#71717a" }}>
                        vendorq.app
                    </div>
                    <div style={{ fontSize: "18px", color: "#71717a" }}>
                        Built for enterprise reviews
                    </div>
                </div>
            </div>
        ),
        size
    );
}