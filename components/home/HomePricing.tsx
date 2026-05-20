import { Link } from "@/i18n/routing";
import { ArrowRight, Check } from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface Feature {
  label?: LocaleString;
  included?: boolean;
}

interface Pakket {
  name?: LocaleString;
  slug?: {
    nl?: { current?: string };
    en?: { current?: string };
    tr?: { current?: string };
  };
  price?: string;
  priceLabel?: LocaleString;
  description?: LocaleString;
  features?: Feature[];
  featuresNote?: LocaleString;
  isPopular?: boolean;
  ctaText?: LocaleString;
  ctaLink?: string;
}

interface ExtraDienst {
  label?: LocaleString;
  title?: LocaleString;
  description?: LocaleString;
  price?: string;
  pricePrefix?: LocaleString;
  features?: { label?: LocaleString }[];
  featuresNote?: LocaleString;
  ctaText?: LocaleString;
  ctaLink?: string;
}

interface PrijzenSectie {
  eyebrow?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  subtitle?: LocaleString;
  ctaText?: LocaleString;
  ctaLink?: string;
  disclaimer?: LocaleString;
  extraDienst?: ExtraDienst;
  items?: Pakket[];
}

interface HomePricingProps {
  sectie?: PrijzenSectie;
  locale: string;
}

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#3d4760]">
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[6px] bg-[#f0f9f1]">
        <Check className="h-3 w-3 text-[#3db54a]" />
      </div>
      {label}
    </li>
  );
}

export default function HomePricing({ sectie, locale }: HomePricingProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const extra = sectie?.extraDienst;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(sectie?.eyebrow)}
          </p>
          <h2 className="mb-3 text-[46px] font-extrabold leading-[1.06] tracking-[-1.2px] text-[#0f1c3d] sm:text-[50px]">
            {t(sectie?.title)}
            <span className="block text-[#c0c8d8]">{t(sectie?.titleAccent)}</span>
          </h2>
          <p className="text-[15px] leading-[1.75] text-[#5a6480]">
            {t(sectie?.subtitle)}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {sectie?.items?.map((pkg, index) => {
            const slug = pkg.slug?.[locale as keyof typeof pkg.slug]?.current;
            return (
              <div
                key={index}
                className={[
                  "relative flex flex-col rounded-[20px] border bg-white p-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,28,61,0.10)]",
                  pkg.isPopular
                    ? "border-[2px] border-[#3db54a]"
                    : "border-[#0f1c3d]/10",
                ].join(" ")}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#3db54a] px-4 py-1.5 text-[11px] font-bold text-white">
                    Meest gekozen
                  </div>
                )}

                <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.5px] text-[#8a92a6]">
                  {t(pkg.name)}
                </p>

                <div className="mb-2.5 flex items-end gap-1.5">
                  <span className="text-[48px] font-extrabold leading-none tracking-[-2px] text-[#0f1c3d]">
                    {pkg.price}
                  </span>
                  <span className="mb-2 text-[14px] font-medium text-[#8a92a6]">
                    {t(pkg.priceLabel)}
                  </span>
                </div>

                <p className="mb-6 text-[13px] leading-[1.6] text-[#8a92a6]">
                  {t(pkg.description)}
                </p>

                <div className="mb-6 h-px bg-[#0f1c3d]/7" />

                <ul className="mb-auto flex flex-col gap-3.5">
                  {pkg.features?.map((f, i) => (
                    f.included !== false && (
                      <CheckItem key={i} label={t(f.label)} />
                    )
                  ))}
                </ul>

                {pkg.featuresNote && (
                  <p className="mb-7 mt-4 text-[11.5px] text-[#c0c8d8]">
                    {t(pkg.featuresNote)}
                  </p>
                )}

                <Link
                  href={`/pakketten/${slug}` as any}
                  className={[
                    "inline-flex items-center justify-center gap-2 rounded-[11px] px-5 py-3.5 text-[13.5px] font-bold transition-all duration-200",
                    pkg.isPopular
                      ? "bg-[#0f1c3d] text-white hover:bg-[#162d57] hover:shadow-[0_6px_20px_rgba(15,28,61,0.22)]"
                      : "border border-[#0f1c3d]/12 bg-white text-[#0f1c3d] hover:border-[#3db54a] hover:bg-[#3db54a]/4",
                  ].join(" ")}
                >
                  {t(pkg.ctaText) || "Bekijk pakket"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Extra dienst */}
        {extra && (
          <div className="mb-9 grid grid-cols-1 items-center gap-14 rounded-[20px] border border-[#0f1c3d]/8 bg-[#f4f6fb] p-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.6px] text-[#3db54a]">
                {t(extra.label)}
              </p>
              <h3 className="mb-3 text-[26px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#0f1c3d]">
                {t(extra.title)}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.7] text-[#5a6480]">
                {t(extra.description)}
              </p>
              <div className="inline-flex items-baseline gap-1.5 rounded-[10px] bg-[#3db54a]/10 px-4 py-2.5">
                <span className="text-[28px] font-extrabold tracking-[-0.5px] text-[#0f1c3d]">
                  {extra.price}
                </span>
                <span className="text-[13px] text-[#8a92a6]">
                  {t(extra.pricePrefix)}
                </span>
              </div>
            </div>

            <div>
              <ul className="mb-5 grid grid-cols-2 gap-3.5">
                {extra.features?.map((f, i) => (
                  <CheckItem key={i} label={t(f.label)} />
                ))}
              </ul>
              {extra.featuresNote && (
                <p className="mb-5 text-[11px] italic text-[#c0c8d8]">
                  {t(extra.featuresNote)}
                </p>
              )}
              <Link
                href={(extra.ctaLink as any) ?? "/contact"}
                className="group inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#0f1c3d] transition-colors hover:text-[#3db54a]"
              >
                {t(extra.ctaText)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center">
          <Link
            href={(sectie?.ctaLink as any) ?? "/pakketten"}
            className="group mb-3.5 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0f1c3d] transition-colors hover:text-[#3db54a]"
          >
            {t(sectie?.ctaText)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mx-auto max-w-[480px] text-[11px] leading-[1.6] text-[#c0c8d8]">
            {t(sectie?.disclaimer)}
          </p>
        </div>

      </div>
    </section>
  );
}