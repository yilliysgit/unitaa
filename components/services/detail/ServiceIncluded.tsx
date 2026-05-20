import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Clock,
  FileText,
  Landmark,
  PieChart,
  Shield,
  Users,
  Calculator,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  CalendarCheck,
  Clock,
  FileText,
  Landmark,
  PieChart,
  Shield,
  Users,
  Calculator,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface IncludedItem {
  title?: LocaleString;
  description?: LocaleString;
  icon?: string;
}

interface DienstData {
  includedEyebrow?: LocaleString;
  includedTitle?: LocaleString;
  includedSubtitle?: LocaleString;
  includedItems?: IncludedItem[];
  includedFootnote?: LocaleString;
}

interface ServiceIncludedProps {
  data?: DienstData;
  locale: string;
}

export default function ServiceIncluded({ data, locale }: ServiceIncludedProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(data?.includedEyebrow)}
          </p>
          <h2 className="mb-4 text-[34px] font-extrabold leading-[1.08] tracking-[-0.8px] text-[#0f1c3d] sm:text-[42px]">
            {t(data?.includedTitle)}
          </h2>
          <p className="mx-auto max-w-2xl text-[16px] leading-[1.8] text-[#5a6480]">
            {t(data?.includedSubtitle)}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.includedItems?.map((item, i) => {
            const Icon = iconMap[item.icon ?? ""] ?? FileText;
            return (
              <div
                key={i}
                className="group rounded-[20px] border border-[#0f1c3d]/8 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#3db54a]/25 hover:shadow-[0_20px_48px_rgba(15,28,61,0.08)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#f0f9f1] transition-colors duration-200 group-hover:bg-[#e7f8ea]">
                  <Icon className="h-5 w-5 text-[#3db54a]" />
                </div>
                <h3 className="mb-2 text-[17px] font-extrabold leading-tight text-[#0f1c3d]">
                  {t(item.title)}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[#5a6480]">
                  {t(item.description)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Voetnoot */}
        {t(data?.includedFootnote) && (
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-[13px] leading-[1.7] text-[#8a92a6]">
              {t(data?.includedFootnote)}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}