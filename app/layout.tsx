import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Unit AA — Administratie & Advies",
  description: "Complete boekhouding voor ZZP'ers, VOF's en BV's.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleTagManager gtmId="GTM-WJ3BLV3Q" />
      </body>
    </html>
  );
}