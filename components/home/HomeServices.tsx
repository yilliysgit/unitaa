import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Briefcase,
  Calculator,
  FileText,
  ShieldCheck,
  TrendingUp,
  Users,
  BarChart2,
  FileOutput,
  Home,
  type LucideIcon,
} from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  FileText,
  FileOutput,
  Users,
  Briefcase,
  TrendingUp,
  BarChart2,
  Home,
  ShieldCheck,
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
}

interface DienstenSectie {
  eyebrow?: LocaleString;
  title?: LocaleString;
  subtitle?: LocaleString;
  body?: LocaleString;
  image?: { asset?: { url?: string } };
  badgeTop?: LocaleString;
  badgeBottomCount?: string;
  badgeBottomLabel?: LocaleString;
  ctaText?: LocaleString;
  ctaLink?: string;
  items?: Dienst[];
}

interface HomeServicesProps {
  sectie?: DienstenSectie;
  locale: string;
}

export default function HomeServices({ sectie, locale }: HomeServicesProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const imageUrl = sectie?.image?.asset?.url ?? "/images/services.jpg";

  return (
    <section className="relative overflow-hidden bg-[#f4f6fb] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,28,61,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-16">

          {/* Links — Foto */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-[28px] border border-[#0f1c3d]/8 bg-[#e4e8f0] shadow-[0_24px_64px_rgba(15,28,61,0.10)]"
              style={{ aspectRatio: "5 / 4" }}
            >
              <Image
                src={imageUrl}
                alt={t(sectie?.title) || "Unit AA Administratie & Advies"}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c3d]/12 via-transparent to-transparent" />

              {/* Badge rechtsboven */}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-[10px] bg-[#0f1c3d] px-3.5 py-2.5 shadow-lg">
                <ShieldCheck className="h-3.5 w-3.5 text-[#3db54a]" />
                <span className="text-[12px] font-bold text-white">
                  {t(sectie?.badgeTop)}
                </span>
              </div>

              {/* Badge linksonder */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-[14px] border border-[#0f1c3d]/7 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,28,61,0.10)]">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[#f0f9f1]">
                  <Users className="h-[17px] w-[17px] text-[#3db54a]" />
                </div>
                <div>
                  <p className="text-[17px] font-extrabold leading-none text-[#0f1c3d]">
                    {sectie?.badgeBottomCount}
                  </p>
                  <p className="mt-0.5 text-[10px] font-medium text-[#8a92a6]">
                    {t(sectie?.badgeBottomLabel)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rechts — Content */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(sectie?.eyebrow)}
            </p>

            <h2 className="mb-4 text-[42px] font-extrabold leading-[1.06] tracking-[-1.2px] text-[#0f1c3d] sm:text-[50px]">
              {t(sectie?.title)}
            </h2>

            <p className="mb-3 text-[17px] font-semibold text-[#8a92a6]">
              {t(sectie?.subtitle)}
            </p>

            <p className="mb-8 max-w-[430px] text-[15px] leading-[1.75] text-[#5a6480]">
              {t(sectie?.body)}
            </p>

            {/* Services */}
            <div className="mb-8 grid grid-cols-1 border-t border-[#0f1c3d]/8 sm:grid-cols-2">
              {sectie?.items?.map((dienst, index) => {
                const Icon = iconMap[dienst.icon ?? ""] ?? FileText;
                const slug = dienst.slug?.[locale as keyof typeof dienst.slug]?.current;

                return (
                  <Link
                    key={index}
                    href={`/diensten/${slug}` as any}
                    className={[
                      "group flex items-center justify-between gap-3 border-b border-[#0f1c3d]/8 py-4 transition-all duration-200",
                      index % 2 === 0
                        ? "sm:border-r sm:border-[#0f1c3d]/8 sm:pr-5"
                        : "sm:pl-5",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#f0f9f1] transition-colors duration-200 group-hover:bg-[#3db54a]">
                        <Icon className="h-4 w-4 text-[#3db54a] transition-colors duration-200 group-hover:text-white" />
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0f1c3d] transition-colors duration-200 group-hover:text-[#3db54a]">
                        {t(dienst.title)}
                      </span>
                    </div>

                    <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] border border-[#0f1c3d]/10 transition-all duration-200 group-hover:translate-x-0.5 group-hover:border-[#3db54a] group-hover:bg-[#3db54a]">
                      <ArrowRight className="h-3.5 w-3.5 text-[#c0c8d8] transition-colors duration-200 group-hover:text-white" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href={(sectie?.ctaLink as any) ?? "/diensten"}
              className="group inline-flex items-center gap-2 text-[14px] font-bold text-[#0f1c3d] transition-colors hover:text-[#3db54a]"
            >
              {t(sectie?.ctaText)}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}