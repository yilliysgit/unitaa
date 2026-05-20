import type { LucideIcon } from "lucide-react";
import {
  Clock3,
  ShieldCheck,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Clock3,
  TrendingUp,
  ShieldCheck,
  UserCheck,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface Benefit {
  title?: LocaleString;
  description?: LocaleString;
  icon?: string;
}

interface DienstData {
  shortTitle?: LocaleString;
  benefits?: Benefit[];
  benefitsEyebrow?: LocaleString;
  benefitsTitle?: LocaleString;
  benefitsSubtitle?: LocaleString;
}

interface ServiceBenefitsProps {
  data?: DienstData;
  locale: string;
}

export default function ServiceBenefits({ data, locale }: ServiceBenefitsProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(data?.benefitsEyebrow)}
          </p>
          <h2 className="mb-4 text-[40px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d] sm:text-[50px]">
            {t(data?.benefitsTitle)}
          </h2>
          {data?.benefitsSubtitle && (
            <p className="text-[16px] leading-[1.8] text-[#5a6480]">
              {t(data?.benefitsSubtitle)}
            </p>
          )}
        </div>

        {/* Benefits grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data?.benefits?.map((benefit, i) => {
            const Icon = iconMap[benefit.icon ?? ""] ?? TrendingUp;
            return (
              <div
                key={i}
                className="rounded-[20px] border border-[#0f1c3d]/8 bg-[#f4f6fb] p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#f0f9f1]">
                  <Icon className="h-5 w-5 text-[#3db54a]" />
                </div>
                <h3 className="mb-3 text-[18px] font-bold leading-tight text-[#0f1c3d]">
                  {t(benefit.title)}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[#5a6480]">
                  {t(benefit.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}