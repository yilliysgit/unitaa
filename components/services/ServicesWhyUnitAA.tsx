// components/services/ServicesWhyUnitAA.tsx
import {
  Clock,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  CalendarCheck,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface WaaromItem {
  title?: LocaleString;
  desc?: LocaleString;
  icon?: string;
}

interface WaaromData {
  eyebrow?: LocaleString;
  title?: LocaleString;
  subtitle?: LocaleString;
  items?: WaaromItem[];
}

interface ServicesWhyUnitAAProps {
  data?: WaaromData;
  locale: string;
}

export default function ServicesWhyUnitAA({ data, locale }: ServicesWhyUnitAAProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

     {/* Header */}
<div className="mx-auto mb-14 max-w-2xl text-center">
  <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
    {t(data?.eyebrow)}
  </p>
  <h2 className="mb-5 text-[42px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d] sm:text-[50px]">
    {t(data?.title)}
  </h2>
  <p className="text-[16px] leading-[1.8] text-[#5a6480]">
    {t(data?.subtitle)}
  </p>
</div>

        {/* Items grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data?.items?.map((item, i) => {
            const Icon = iconMap[item.icon ?? ""] ?? ShieldCheck;
            return (
              <div
                key={i}
                className="rounded-[20px] bg-[#f4f6fb] p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white">
                  <Icon className="h-5 w-5 text-[#3db54a]" />
                </div>
                <h3 className="mb-3 text-[16px] font-bold leading-tight text-[#0f1c3d]">
                  {t(item.title)}
                </h3>
                <p className="text-[13.5px] leading-[1.75] text-[#5a6480]">
                  {t(item.desc)}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}