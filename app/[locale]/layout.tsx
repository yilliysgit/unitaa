import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import HeaderServer from "@/components/layout/header/HeaderServer";
import Footer from "@/components/layout/footer/Footer";
import { getNavigation } from "@/sanity/lib/getNavigation";
import { getSiteSettings } from "@/sanity/lib/fetch/siteSettings";
import { getDiensten } from "@/sanity/lib/fetch/diensten";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const [messages, navigation, siteSettings, diensten] = await Promise.all([
    getMessages(),
    getNavigation(),
    getSiteSettings(),
    getDiensten(),
  ]);

  return (
    <NextIntlClientProvider messages={messages}>
      <HeaderServer locale={locale} navigation={navigation} />
      <main className="pt-20">
        {children}
      </main>
      <Footer 
        locale={locale}
        navigation={navigation}
        siteSettings={siteSettings}
        diensten={diensten}
      />
    </NextIntlClientProvider>
  );
}