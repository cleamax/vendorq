import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export const metadata: Metadata = {
  title: {
    default: "VendorQ",
    template: "%s | VendorQ",
  },
  description:
    "VendorQ helps SaaS teams selling to enterprise customers answer security questionnaires with consistent, source-backed responses — so deals don’t stall.",
  applicationName: "VendorQ",
  metadataBase: new URL("https://vendorq.app"),
  openGraph: {
    title: "VendorQ",
    description:
      "Run a pilot security questionnaire and evaluate consistent, source-backed responses — so enterprise reviews don’t stall deals.",
    type: "website",
    url: "https://vendorq.app",
    siteName: "VendorQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "VendorQ",
    description:
      "Run a pilot security questionnaire and evaluate consistent, source-backed responses — so enterprise reviews don’t stall deals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <SiteNavbar />
        <div className="min-h-[calc(100vh-3.5rem)]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}