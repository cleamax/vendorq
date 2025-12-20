import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
