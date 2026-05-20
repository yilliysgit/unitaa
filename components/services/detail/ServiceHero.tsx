import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  CheckCircle2,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Users,
  ShieldCheck,
  TrendingUp,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface DienstData {
  title?: LocaleString;
  shortTitle?: LocaleString;
  eyebrow?: LocaleString;
  subtitle?: LocaleString;
  description?: LocaleString;
  image?: { asset?: { url?: string } };
  badgeTitle?: LocaleString;
  badgeSubtitle?: LocaleString;
  microTrust?: LocaleString;
  trustItems?: { label?: LocaleString }[];
  stats?: { value?: string; label?: LocaleString; icon?: string }[];
  testimonial?: {
    quote?: LocaleString;
    author?: string;
    company?: string;
  };
  location?: LocaleString;
  primaryCtaText?: LocaleString;
  primaryCtaLink?: string;
  secondaryCtaText?: LocaleString;
  secondaryCtaLink?: string;
}

interface ServiceHeroProps {
  data?: DienstData;
  locale: string;
}

export default function ServiceHero({ data, locale }: ServiceHeroProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const imageUrl = data?.image?.asset?.url ?? "/images/services/administratie.jpg";

  return (
    <section className="relative overflow-hidden bg-[#f4f6fb] pb-20 pt-32 sm:pb-28 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(15,28,61,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-[#3db54a]/8 blur-[90px]" />
      <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#0f1c3d]/6 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12 xl:gap-16">

        {/* ── Links ── */}
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(data?.eyebrow)}
          </p>

          <h1 className="mb-5 text-[46px] font-extrabold leading-[1.06] tracking-[-1.2px] text-[#0f1c3d] sm:text-[58px] xl:text-[64px]">
            {t(data?.title)}
          </h1>

          <p className="mb-3 text-[18px] font-semibold leading-[1.6] text-[#8a92a6]">
            {t(data?.subtitle)}
          </p>

          <p className="mb-8 max-w-[560px] text-[16px] leading-[1.8] text-[#5a6480] sm:text-[17px]">
            {t(data?.description)}
          </p>

          <div className="mb-4 flex flex-wrap gap-3">
            <Link
              href={(data?.primaryCtaLink as any) ?? "/contact"}
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-[#0f1c3d] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#162d57] hover:shadow-[0_8px_24px_rgba(15,28,61,0.20)]"
            >
              {t(data?.primaryCtaText)}
              <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-white/12 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <Link
              href={(data?.secondaryCtaLink as any) ?? "/pakketten"}
              className="inline-flex items-center gap-2 rounded-[12px] border border-[#0f1c3d]/12 bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0f1c3d] transition-all duration-200 hover:border-[#3db54a]/50 hover:bg-[#3db54a]/5"
            >
              {t(data?.secondaryCtaText)}
            </Link>
          </div>

          {t(data?.microTrust) && (
            <p className="mb-6 text-[12px] text-[#8a92a6]">
              ✔ {t(data?.microTrust)}
            </p>
          )}

          <ul className="grid max-w-[560px] grid-cols-1 gap-2 sm:grid-cols-2">
            {data?.trustItems?.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[13px] font-semibold text-[#3d4760]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3db54a]" />
                <span>{t(item.label)}</span>
              </li>
            ))}
          </ul>

          {data?.testimonial && (
            <div className="mt-6 max-w-[560px] border-l-2 border-[#3db54a] bg-white/60 py-1 pl-3">
              <p className="text-[12px] italic leading-[1.7] text-[#3d4760]">
                "{t(data.testimonial.quote)}"
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.5px] text-[#8a92a6]">
                – {data.testimonial.author}
                {data.testimonial.company ? `, ${data.testimonial.company}` : ""}
              </p>
            </div>
          )}
        </div>

        {/* ── Rechts ── */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-[#0f1c3d]/8 bg-white shadow-[0_24px_64px_rgba(15,28,61,0.10)]">
            <div className="relative aspect-[5/4]">
              <Image
                src={imageUrl}
                alt={t(data?.title) || "Dienst"}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c3d]/15 to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-[14px] border border-[#0f1c3d]/8 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,28,61,0.10)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#f0f9f1]">
                  <ReceiptText className="h-5 w-5 text-[#3db54a]" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#0f1c3d]">{t(data?.badgeTitle)}</p>
                  <p className="text-[11px] text-[#8a92a6]">{t(data?.badgeSubtitle)}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-[#0f1c3d]/8 border-t border-[#0f1c3d]/8 bg-white">
              {data?.stats?.map((stat, i) => {
                const Icon = iconMap[stat.icon ?? ""] ?? TrendingUp;
                return (
                  <div key={i} className="p-4 sm:p-5">
                    <Icon className="mb-2 h-4 w-4 text-[#3db54a]" />
                    <p className="text-[20px] font-extrabold leading-none tracking-[-0.5px] text-[#0f1c3d] sm:text-[24px]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[1px] text-[#8a92a6]">
                      {t(stat.label)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-center text-[12px] text-[#8a92a6]">
            {t(data?.location)}
          </p>
        </div>
      </div>
    </section>
  );
}