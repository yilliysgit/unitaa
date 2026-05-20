import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
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

interface HeroData {
  eyebrow?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  description?: LocaleString;
  primaryCtaText?: LocaleString;
  primaryCtaLink?: string;
  secondaryCtaText?: LocaleString;
  secondaryCtaLink?: string;
  trustItems?: { label?: LocaleString }[];
  stats?: { value?: string; label?: LocaleString; icon?: string }[];
  image?: { asset?: { url?: string } };
}

interface ServicesHeroProps {
  data?: HeroData;
  locale: string;
}

export default function ServicesHero({ data, locale }: ServicesHeroProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const imageUrl = data?.image?.asset?.url ?? "/images/services-hero.jpg";

  return (
    <section className="relative overflow-hidden bg-[#f4f6fb] pt-32 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,28,61,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12 xl:gap-16">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(data?.eyebrow)}
          </p>

          <h1 className="mb-5 text-[46px] font-extrabold leading-[1.06] tracking-[-1.2px] text-[#0f1c3d] sm:text-[58px] xl:text-[64px]">
            {t(data?.title)}
            <span className="block text-[#3db54a]">
              {t(data?.titleAccent)}
            </span>
          </h1>

          <p className="mb-8 max-w-[560px] text-[16px] leading-[1.8] text-[#5a6480] sm:text-[17px]">
            {t(data?.description)}
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
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

          <ul className="grid max-w-[560px] grid-cols-1 gap-2 sm:grid-cols-2">
            {data?.trustItems?.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[13px] font-semibold text-[#3d4760]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#3db54a]" />
                {t(item.label)}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-[#0f1c3d]/8 bg-white shadow-[0_24px_64px_rgba(15,28,61,0.10)]">
            <div className="relative aspect-[5/4]">
              <Image
                src={imageUrl}
                alt={t(data?.title) || "Diensten"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c3d]/15 to-transparent" />
            </div>

            <div className="grid grid-cols-3 divide-x divide-[#0f1c3d]/8 border-t border-[#0f1c3d]/8 bg-white">
              {data?.stats?.map((stat, i) => {
                const Icon = iconMap[stat.icon ?? ""] ?? TrendingUp;
                return (
                  <div key={i} className="p-4 sm:p-5">
                    <Icon className="mb-2 h-4 w-4 text-[#3db54a]" />
                    <p className="text-[24px] font-extrabold leading-none tracking-[-0.5px] text-[#0f1c3d]">
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
        </div>
      </div>
    </section>
  );
}