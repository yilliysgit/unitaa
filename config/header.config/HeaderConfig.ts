import type { HeaderConfig } from "@/types/header.type";
import { LogoUnitAA } from "@/components/logo/LogoUnitAA";

type Locale = "nl" | "en" | "tr";

interface HeaderTranslations {
  navigation: HeaderConfig["navigation"];
  cta: HeaderConfig["cta"];
  tagline: string;
}

const translations: Record<Locale, HeaderTranslations> = {
  nl: {
    navigation: [
      { id: "home", name: "Home", href: "/" },
      { id: "diensten", name: "Diensten", href: "/diensten" },
      { id: "pakketten", name: "Pakketten", href: "/pakketten" },
      { id: "over-ons", name: "Over Ons", href: "/over-ons" },
      { id: "faq", name: "FAQ", href: "/faq" },
      { id: "contact", name: "Contact", href: "/contact" },
    ],
    cta: { text: "Plan gratis gesprek", href: "/contact" },
    tagline: "Administratie & Advies",
  },
  en: {
    navigation: [
      { id: "home", name: "Home", href: "/" },
      { id: "diensten", name: "Services", href: "/diensten" },
      { id: "pakketten", name: "Packages", href: "/pakketten" },
      { id: "over-ons", name: "About", href: "/over-ons" },
      { id: "faq", name: "FAQ", href: "/faq" },
      { id: "contact", name: "Contact", href: "/contact" },
    ],
    cta: { text: "Book Free Consultation", href: "/contact" },
    tagline: "Administration & Advisory",
  },
  tr: {
    navigation: [
      { id: "home", name: "Ana Sayfa", href: "/" },
      { id: "diensten", name: "Hizmetler", href: "/diensten" },
      { id: "pakketten", name: "Paketler", href: "/pakketten" },
      { id: "over-ons", name: "Hakkımızda", href: "/over-ons" },
      { id: "faq", name: "SSS", href: "/faq" },
      { id: "contact", name: "İletişim", href: "/contact" },
    ],
    cta: { text: "Ücretsiz Görüşme Planla", href: "/contact" },
    tagline: "Muhasebe ve Danışmanlık",
  },
};

export function getHeaderConfig(locale: Locale = "nl"): HeaderConfig {
  const t = translations[locale] ?? translations.nl;

  return {
    logo: {
      component: LogoUnitAA,
      alt: "Unit AA Administratie & Advies",
      href: "/",
    },
    navigation: t.navigation,
    cta: t.cta,
    tagline: t.tagline,
  };
}