import { Link } from "@/i18n/routing";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface TrustItem {
  label?: LocaleString;
}

interface CtaSectie {
  eyebrow?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  description?: LocaleString;
  trustItems?: TrustItem[];
  primaryCtaText?: LocaleString;
  primaryCtaLink?: string;
  secondaryCtaText?: LocaleString;
  secondaryCtaLink?: string;
}

interface HomeCTAProps {
  sectie?: CtaSectie;
  locale: string;
}

export const revalidate = 0;

export default function HomeCTA({ sectie, locale }: HomeCTAProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
console.log('sectie eyebrow:', sectie?.eyebrow);

  return (
    <section className="bg-[#f4f6fb] pb-0 pt-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[20px] bg-[#0f1c3d] px-13 py-11">

          {/* Blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-[260px] w-[260px] rounded-full bg-[#3db54a]/7 blur-[60px]"
          />
          {/* Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative z-10 flex items-center justify-between gap-10">
            {/* Tekst */}
            <div className="flex-1">
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                {t(sectie?.eyebrow)}
              </p>
              <h2 className="mb-2 text-[30px] font-extrabold leading-[1.12] tracking-[-0.6px] text-white">
                {t(sectie?.title)}
                <br />
                <span className="text-[#3db54a]">{t(sectie?.titleAccent)}</span>
              </h2>
              <p className="max-w-[360px] text-[13.5px] leading-[1.65] text-white/38">
                {t(sectie?.description)}
              </p>
            </div>

            {/* Separator */}
            <div className="h-[72px] w-px flex-shrink-0 bg-white/8" />

            {/* Trust */}
            <div className="flex flex-shrink-0 flex-col gap-1.5">
              {sectie?.trustItems?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-[12px] font-medium text-white/32 whitespace-nowrap"
                >
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#3db54a]" />
                  {t(item.label)}
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="h-[72px] w-px flex-shrink-0 bg-white/8" />

            {/* Knoppen */}
            <div className="flex flex-shrink-0 flex-col gap-2">
              <Link
                href={(sectie?.primaryCtaLink as any) ?? "/contact"}
                className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#3db54a] px-5 py-3 text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#30a83d] whitespace-nowrap"
              >
                {t(sectie?.primaryCtaText)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              
                <a href={sectie?.secondaryCtaLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/7 px-5 py-2.5 text-[12.5px] font-semibold text-white/60 transition-all duration-200 hover:bg-white/11 hover:text-white whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 text-[#3db54a]" />
                {t(sectie?.secondaryCtaText)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}