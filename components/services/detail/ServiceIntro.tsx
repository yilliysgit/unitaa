import { PortableText } from "@portabletext/react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface DienstData {
  shortTitle?: LocaleString;
  subtitle?: LocaleString;
  longDesc?: {
    nl?: any[];
    en?: any[];
    tr?: any[];
  };
  introTrustItems?: { label?: LocaleString }[];
}

interface ServiceIntroProps {
  data?: DienstData;
  locale: string;
}

export default function ServiceIntro({ data, locale }: ServiceIntroProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const body = data?.longDesc?.[locale as keyof typeof data.longDesc];

return (
  <section className="bg-white py-20 sm:py-24">
    <div className="mx-auto max-w-[960px] px-6 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">

        {/* Links — eyebrow */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            Over deze dienst
          </p>
        </div>

        {/* Rechts — alles */}
        <div>
          <h2 className="mb-4 text-[34px] font-extrabold leading-[1.12] tracking-[-0.8px] text-[#0f1c3d] sm:text-[42px]">
            {t(data?.shortTitle)}
          </h2>
          <p className="mb-6 text-[17px] font-semibold leading-[1.6] text-[#8a92a6]">
            {t(data?.subtitle)}
          </p>
          {body && (
            <div className="mb-8 text-[16px] leading-[1.9] text-[#5a6480] [&_p]:mb-5 [&_strong]:font-bold [&_strong]:text-[#0f1c3d]">
              <PortableText value={body} />
            </div>
          )}
          {data?.introTrustItems && data.introTrustItems.length > 0 && (
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {data.introTrustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] font-semibold text-[#3d4760]">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#3db54a]" />
                  {t(item.label)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);}