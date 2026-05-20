import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  FileBarChart2,
  FileCheck2,
  Home,
  ReceiptText,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  ReceiptText,
  FileBarChart2,
  FileCheck2,
  Users,
  Briefcase,
  Calculator,
  Building2,
  Home,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface Dienst {
  title?: LocaleString;
  slug?: {
    nl?: { current?: string };
    en?: { current?: string };
    tr?: { current?: string };
  };
  icon?: string;
  shortDesc?: LocaleString;
  ctaText?: LocaleString;
}

interface ServicesGridProps {
  diensten?: Dienst[];
  locale: string;
  eyebrow?: LocaleString;
  title?: LocaleString;
  subtitle?: LocaleString;
}

export default function ServicesGrid({ diensten, locale, eyebrow, title, subtitle }: ServicesGridProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section className="bg-[#f4f6fb] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(eyebrow)}
          </p>
          <h2 className="mb-4 text-[40px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d] sm:text-[46px]">
            {t(title)}
          </h2>
          <p className="text-[16px] leading-[1.8] text-[#5a6480]">
            {t(subtitle)}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {diensten?.map((dienst, index) => {
            const Icon = iconMap[dienst.icon ?? ""] ?? ReceiptText;
            const slug = dienst.slug?.[locale as keyof typeof dienst.slug]?.current;
            const buttonText = t(dienst.ctaText) || "Meer informatie";

            return (
              <Link
                key={index}
href={{
  pathname: "/diensten/[slug]",
  params: { slug: slug ?? "" }
} as any}
                className="group flex h-full flex-col rounded-[20px] border border-[#0f1c3d]/8 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#3db54a]/30 hover:shadow-[0_20px_48px_rgba(15,28,61,0.08)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#f0f9f1] transition-colors duration-200 group-hover:bg-[#e1f4e3]">
                  <Icon className="h-5 w-5 text-[#3db54a]" />
                </div>

                <h3 className="mb-2.5 text-[16px] font-bold leading-tight text-[#0f1c3d]">
                  {t(dienst.title)}
                </h3>

                <p className="mb-5 flex-1 text-[13.5px] leading-[1.75] text-[#5a6480]">
                  {t(dienst.shortDesc)}
                </p>

                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0f1c3d] transition-colors duration-200 group-hover:text-[#3db54a]">
                  {buttonText}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}