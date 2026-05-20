"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  nl: "NL",
  en: "EN",
  tr: "TR",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function handleChange(nextLocale: string) {
    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <div className="flex items-center rounded-md border border-white/15 px-2 py-1 transition-colors hover:border-white/25">
      <select
        value={locale}
        onChange={(e) => handleChange(e.target.value)}
        aria-label="Selecteer taal"
        className="cursor-pointer appearance-none bg-transparent text-[14px] font-medium text-white/55 outline-none transition-colors hover:text-white/85"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc} className="bg-[#0f1c3d] text-white">
            {labels[loc] ?? loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}