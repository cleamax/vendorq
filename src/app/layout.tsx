import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export const metadata: Metadata = {
  title: "VendorQ AI",
  description: "Answer security questionnaires in minutes — not days.",
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
