import { PortableText } from "@portabletext/react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface IntroData {
  eyebrow?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  body?: {
    nl?: any[];
    en?: any[];
    tr?: any[];
  };
  uspText?: LocaleString;
  socialProofCount?: string;
  socialProofCountLabel?: LocaleString;
  socialProofScore?: string;
  socialProofScoreLabel?: LocaleString;
}

interface ServicesIntroProps {
  data?: IntroData;
  locale: string;
}

export default function ServicesIntro({ data, locale }: ServicesIntroProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const body = data?.body?.[locale as keyof typeof data.body];

  return (
    <section className="bg-white py-[72px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">

        {/* Top — tekst twee kolommen */}
        <div className="mb-11 grid grid-cols-1 items-end gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(data?.eyebrow)}
            </p>
            <h2 className="text-[44px] font-extrabold leading-[1.07] tracking-[-1.2px] text-[#0f1c3d]">
              {t(data?.title)}
              <br />
              <span className="text-[#3db54a]">{t(data?.titleAccent)}</span>
            </h2>
          </div>

          <div className="pt-2 text-[15px] leading-[1.85] text-[#5a6480] [&_strong]:font-bold [&_strong]:text-[#0f1c3d]">
            {body && <PortableText value={body} />}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between gap-8 rounded-[20px] border border-[#0f1c3d]/7 bg-[#f4f6fb] px-9 py-8">
          <p className="max-w-[600px] text-[15px] leading-[1.75] text-[#5a6480]">
            {t(data?.uspText)}
          </p>

          <div className="flex flex-shrink-0 gap-3">
            <div className="rounded-[14px] bg-[#0f1c3d] px-6 py-4 text-center">
              <p className="text-[28px] font-extrabold leading-none tracking-[-0.5px] text-white">
                {data?.socialProofCount}<span className="text-[#3db54a]">+</span>
              </p>
              <p className="mt-1 text-[11px] font-medium text-white/40">
                {t(data?.socialProofCountLabel)}
              </p>
            </div>
            <div className="rounded-[14px] bg-[#0f1c3d] px-6 py-4 text-center">
              <p className="text-[28px] font-extrabold leading-none tracking-[-0.5px] text-white">
                {data?.socialProofScore}<span className="text-[#3db54a]">★</span>
              </p>
              <p className="mt-1 text-[11px] font-medium text-white/40">
                {t(data?.socialProofScoreLabel)}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}