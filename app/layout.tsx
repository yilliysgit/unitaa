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
      </body>

            <GoogleTagManager gtmId="GTM-NNF86HX7" />

    </html>
  ); 
}