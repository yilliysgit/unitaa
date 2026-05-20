import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const messageLoaders = {
  nl: () => import("./messages/nl/nl.json"),
    en: () => import("./messages/en/en.json"),
    tr: () => import("./messages/tr/tr.json"),

} as const;

type Locale = keyof typeof messageLoaders;

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const locale: Locale = routing.locales.includes(
    requestedLocale as (typeof routing.locales)[number]
  )
    ? (requestedLocale as Locale)
    : "nl";

  try {
    const messages = (await messageLoaders[locale]()).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    throw error;
  }
});