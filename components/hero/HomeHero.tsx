import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileCheck2,
  Layers3,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
  Star,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

// Icon map — naam uit Sanity → Lucide component
const iconMap: Record<string, LucideIcon> = {
  Clock,
  UserCheck,
  CheckCircle2,
  CalendarCheck,
  Star,
  ShieldCheck,
  ReceiptText,
  FileCheck2,
  Layers3,
  TrendingUp,
  MessageCircle,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface HeroData {
  badge?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  description?: LocaleString;
  primaryCtaText?: LocaleString;
  primaryCtaLink?: string;
  secondaryCtaText?: LocaleString;
  secondaryCtaLink?: string;
  trustItems?: { label?: LocaleString; icon?: string }[];
  floatingPill?: LocaleString;
  cardLabel?: LocaleString;
  cardTitle?: LocaleString;
  cardTitleAccent?: LocaleString;
  cardPrice?: string;
  cardPricePrefix?: LocaleString;
  cardPriceLabel?: LocaleString;
  cardTags?: string[];
  kpis?: { value?: string; label?: LocaleString; icon?: string }[];
  services?: { title?: LocaleString; desc?: LocaleString; icon?: string }[];
  reviewText?: LocaleString;
  reviewAuthor?: string;
  reviewInitials?: string;
}

interface HeroProps {
  data?: HeroData;
  locale: string;
}

export default function Hero({ data, locale }: HeroProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section
      aria-label={t(data?.badge)}
      className="relative isolate overflow-hidden bg-[#f4f6fb]"
    >
      {/* Achtergrond grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,28,61,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,28,61,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blobs */}
      <div aria-hidden="true" className="absolute -right-20 -top-32 -z-10 h-[520px] w-[520px] rounded-full bg-[#3db54a]/10 blur-[80px]" />
      <div aria-hidden="true" className="absolute -bottom-40 -left-20 -z-10 h-[480px] w-[480px] rounded-full bg-[#0f1c3d]/7 blur-[80px]" />

      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12 xl:gap-16">

        {/* ── Links ── */}
        <div>
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#0f1c3d]/10 bg-white px-4 py-1.5 shadow-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f1c3d]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#3db54a]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#0f1c3d]">
              {t(data?.badge)}
            </span>
          </div>

          {/* H1 */}
          <h1 className="mb-5 text-[52px] font-extrabold leading-[1.06] tracking-[-1.5px] text-[#0f1c3d] sm:text-[58px] xl:text-[64px]">
            <span className="relative inline-block">
              {t(data?.title)}
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#3db54a]" />
            </span>
            <span className="block text-[#3db54a]">
              {t(data?.titleAccent)}
            </span>
          </h1>

          {/* Subtekst */}
          <p className="mb-8 max-w-[460px] text-[16px] leading-[1.7] text-[#5a6480]">
            {t(data?.description)}
          </p>

          {/* CTA knoppen */}
          <div className="mb-9 flex flex-wrap gap-3">
            <Link
              href={(data?.primaryCtaLink as any) || "/contact"}
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-[#0f1c3d] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#162d57] hover:shadow-[0_8px_24px_rgba(15,28,61,0.22)]"
            >
              {t(data?.primaryCtaText)}
              <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-white/12 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href={(data?.secondaryCtaLink as any) || "/pakketten"}
              className="inline-flex items-center gap-2 rounded-[12px] border border-[#0f1c3d]/12 bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0f1c3d] transition-all duration-200 hover:-translate-y-px hover:border-[#3db54a]/50 hover:shadow-[0_4px_14px_rgba(15,28,61,0.08)]"
            >
              {t(data?.secondaryCtaText)}
              <ArrowRight className="h-4 w-4 opacity-50" />
            </Link>
          </div>

          {/* Trust items */}
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {data?.trustItems?.map((item, i) => {
              const Icon = iconMap[item.icon ?? ""] ?? CheckCircle2;
              return (
                <li key={i} className="flex items-center gap-2 text-[13px] font-semibold text-[#3d4760]">
                  <Icon className="h-4 w-4 shrink-0 text-[#3db54a]" />
                  {t(item.label)}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Rechts — kaart ── */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="overflow-hidden rounded-[24px] border border-[#0f1c3d]/9 bg-white shadow-[0_24px_64px_rgba(15,28,61,0.10)]">

            {/* Kaart top */}
            <div className="bg-[#0f1c3d] p-6 sm:p-7">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                    {t(data?.cardLabel)}
                  </p>
                  <h2 className="text-[22px] font-extrabold leading-[1.15] tracking-[-0.3px] text-white sm:text-[26px]">
                    {t(data?.cardTitle)}{" "}
                    <span className="text-[#3db54a]">
                      {t(data?.cardTitleAccent)}
                    </span>
                  </h2>
                </div>

                <div className="shrink-0 rounded-[12px] border border-white/10 bg-white/8 p-3 text-right">
                  <p className="mb-1 text-[9px] font-semibold uppercase tracking-[1px] text-white/45">
                    {t(data?.cardPricePrefix)}
                  </p>
                  <p className="text-[22px] font-extrabold leading-none tracking-[-0.5px] text-white">
                    {data?.cardPrice}
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/45">
                    {t(data?.cardPriceLabel)}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {data?.cardTags?.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/13 bg-white/9 px-3 py-1 text-[11px] font-bold text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* KPI rij */}
            <div className="grid grid-cols-3 divide-x divide-[#0f1c3d]/8 border-b border-[#0f1c3d]/8">
              {data?.kpis?.map((kpi, i) => {
                const Icon = iconMap[kpi.icon ?? ""] ?? ShieldCheck;
                return (
                  <div key={i} className="p-4 sm:p-5">
                    <Icon className="mb-2.5 h-4 w-4 text-[#3db54a]" />
                    <p className="text-[24px] font-extrabold leading-none tracking-[-0.5px] text-[#0f1c3d] sm:text-[26px]">
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#8a92a6]">
                      {t(kpi.label)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2">
              {data?.services?.map((service, i) => {
                const Icon = iconMap[service.icon ?? ""] ?? ReceiptText;
                return (
                  <div
                    key={i}
                    className={[
                      "group p-4 transition-colors duration-200 hover:bg-[#f8fbf8] sm:p-5",
                      i % 2 === 0 ? "border-r border-[#0f1c3d]/8" : "",
                      i < 2 ? "border-b border-[#0f1c3d]/8" : "",
                    ].join(" ")}
                  >
                    <div className="mb-3 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[#f0f9f1] transition-colors duration-200 group-hover:bg-[#e1f4e3]">
                      <Icon className="h-[17px] w-[17px] text-[#3db54a]" />
                    </div>
                    <p className="mb-0.5 text-[13px] font-bold text-[#0f1c3d]">
                      {t(service.title)}
                    </p>
                    <p className="text-[12px] leading-[1.5] text-[#8a92a6]">
                      {t(service.desc)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Review */}
            <div className="flex gap-3.5 border-t border-[#0f1c3d]/8 bg-[#fafbfd] p-5 sm:p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f1c3d] text-[13px] font-extrabold text-white">
                {data?.reviewInitials}
              </div>
              <div>
                <div className="mb-1.5 flex gap-0.5" aria-label="5 sterren beoordeling">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>
                <p className="text-[13px] leading-[1.6] text-[#4a5268]">
                  "{t(data?.reviewText)}"
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[1px] text-[#aab0c0]">
                  {data?.reviewAuthor}
                </p>
              </div>
            </div>
          </div>

          {/* Floating pill */}
          <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2.5 rounded-full border border-[#0f1c3d]/9 bg-white px-4 py-2.5 shadow-[0_8px_24px_rgba(15,28,61,0.10)] sm:flex">
            <MessageCircle className="h-4 w-4 text-[#3db54a]" />
            <span className="whitespace-nowrap text-[12px] font-bold text-[#0f1c3d]">
              {t(data?.floatingPill)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}