import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Clock,
  HardHat,
  Shield,
  Star,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  HardHat,
  Shield,
  Star,
  Briefcase,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface Benefit {
  title?: LocaleString;
  desc?: LocaleString;
  icon?: string;
  variant?: "green" | "blue";
}

interface IntroData {
  eyebrow?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  subtitle?: LocaleString;
  body?: {
    nl?: any[];
    en?: any[];
    tr?: any[];
  };
  primaryCtaText?: LocaleString;
  primaryCtaLink?: string;
  secondaryCtaText?: LocaleString;
  secondaryCtaLink?: string;
  benefits?: Benefit[];
  quoteText?: LocaleString;
  quoteAuthor?: string;
  quoteAuthorRole?: string;
  quoteInitial?: string;
  quoteSaving?: string;
  quoteSavingLabel?: LocaleString;
  socialProofCount?: string;
  socialProofLabel?: LocaleString;
  socialProofScore?: string;
  socialProofAvatars?: string[];
}

interface HomeIntroProps {
  data?: IntroData;
  locale: string;
}

export default function HomeIntro({ data, locale }: HomeIntroProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const body = data?.body?.[locale as keyof typeof data.body];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Subtiel dot-grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,28,61,0.045) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        {/* ── Links ── */}
        <div>
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3db54a] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3db54a]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#0f1c3d]">
              {t(data?.eyebrow)}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-5 text-[46px] font-extrabold leading-[1.08] tracking-[-1.2px] text-[#0f1c3d] sm:text-[50px]">
            {t(data?.title)}
            <br />
            <span className="text-[#3db54a]">{t(data?.titleAccent)}</span>
          </h2>

          <p className="mb-6 text-[17px] font-semibold text-[#8a92a6]">
            {t(data?.subtitle)}
          </p>

          {/* Body — Portable Text */}
          {body && (
            <div className="mb-8 text-[15px] leading-[1.75] text-[#5a6480] [&_strong]:font-bold [&_strong]:text-[#0f1c3d]">
              <PortableText value={body} />
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href={(data?.primaryCtaLink as any) || "/contact"}
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-[#0f1c3d] px-6 py-3 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#162d57] hover:shadow-[0_8px_20px_rgba(15,28,61,0.20)]"
            >
              {t(data?.primaryCtaText)}
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-white/12 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <Link
              href={(data?.secondaryCtaLink as any) || "/klantervaringen"}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8a92a6] transition-colors hover:text-[#3db54a]"
            >
              <Star className="h-3.5 w-3.5" />
              {t(data?.secondaryCtaText)}
            </Link>
          </div>
        </div>

        {/* ── Rechts ── */}
        <div className="flex flex-col gap-3.5">
          {/* Quote card */}
          <div className="relative overflow-hidden rounded-[20px] border border-[#3db54a]/20 bg-[#f0f9f1] p-6">
            <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-[20px] bg-[#3db54a]" />

            <div className="absolute right-5 top-5 rounded-[10px] bg-[#3db54a] px-3 py-2 text-center">
              <p className="text-[17px] font-extrabold leading-none text-white">
                {data?.quoteSaving}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.8px] text-white/80">
                {t(data?.quoteSavingLabel)}
              </p>
            </div>

            <p className="mb-1 font-serif text-[48px] leading-none text-[#3db54a] opacity-30">
              &ldquo;
            </p>
            <p className="mb-5 text-[15px] italic leading-[1.7] text-[#2d3748]">
              {t(data?.quoteText)}
            </p>

            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3db54a] text-[14px] font-extrabold text-white">
                {data?.quoteInitial}
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#0f1c3d]">
                  {data?.quoteAuthor}
                </p>
                <p className="text-[11px] text-[#8a92a6]">
                  {data?.quoteAuthorRole}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col gap-2.5">
            {data?.benefits?.map((benefit, i) => {
              const Icon = iconMap[benefit.icon ?? ""] ?? Shield;
              return (
                <div
                  key={i}
                  className="group flex cursor-default items-start gap-3.5 rounded-[14px] border border-[#0f1c3d]/8 bg-white p-4 transition-all duration-200 hover:-translate-y-px hover:border-[#3db54a]/30 hover:shadow-[0_4px_16px_rgba(15,28,61,0.07)]"
                >
                  <div
                    className={[
                      "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px]",
                      benefit.variant === "green"
                        ? "bg-[#3db54a]/10"
                        : "bg-[#0f1c3d]/7",
                    ].join(" ")}
                  >
                    <Icon
                      className={[
                        "h-[18px] w-[18px]",
                        benefit.variant === "green"
                          ? "text-[#3db54a]"
                          : "text-[#0f1c3d]",
                      ].join(" ")}
                    />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[13px] font-bold text-[#0f1c3d]">
                      {t(benefit.title)}
                    </p>
                    <p className="text-[12px] leading-[1.5] text-[#8a92a6]">
                      {t(benefit.desc)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social proof bar */}
          <div className="flex items-center justify-between rounded-[12px] bg-[#f4f6fb] px-4 py-3">
            <div className="flex items-center">
              <div className="flex">
                {data?.socialProofAvatars?.map((a) => (
                  <div
                    key={a}
                    className="-mr-1.5 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-[#0f1c3d] text-[9px] font-extrabold text-white"
                  >
                    {a}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-[12px] font-medium text-[#5a6480]">
                <strong className="font-bold text-[#0f1c3d]">
                  {data?.socialProofCount}
                </strong>{" "}
                {t(data?.socialProofLabel)}
              </p>
            </div>

            <div className="flex items-center gap-1 text-[12px] font-semibold text-[#5a6480]">
              <span className="tracking-wide text-[#f5a623]">★★★★★</span>
              {data?.socialProofScore}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}