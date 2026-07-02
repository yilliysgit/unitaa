// client/app/layout.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Script from 'next/script';

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
<Script id="gtm" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WJ3BLV3Q');
  `}
</Script>        
      </body>
    </html>
  );
}