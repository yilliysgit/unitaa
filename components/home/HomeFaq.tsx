"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface FaqItem {
  question?: LocaleString;
  answer?: {
    nl?: any[];
    en?: any[];
    tr?: any[];
  };
}

interface FaqSectie {
  eyebrow?: LocaleString;
  title?: LocaleString;
  titleAccent?: LocaleString;
  subtitle?: LocaleString;
  items?: FaqItem[];
}

interface HomeFaqProps {
  sectie?: FaqSectie;
  locale: string;
}

export default function HomeFaq({ sectie, locale }: HomeFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
            {t(sectie?.eyebrow)}
          </p>
          <h2 className="mb-3 text-[42px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d]">
            {t(sectie?.title)}
            <br />
            <span className="text-[#c0c8d8]">{t(sectie?.titleAccent)}</span>
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#5a6480]">
            {t(sectie?.subtitle)}
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-2">
          {sectie?.items?.map((faq, index) => {
            const isOpen = openIndex === index;
            const answer = faq.answer?.[locale as keyof typeof faq.answer];

            return (
              <div
                key={index}
                className={[
                  "overflow-hidden rounded-[14px] border transition-all duration-200",
                  isOpen
                    ? "border-[#3db54a]/25 bg-[#fafffe]"
                    : "border-[#0f1c3d]/8 bg-white",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-[22px] text-left"
                >
                  <span className="text-[15px] font-bold leading-[1.4] text-[#0f1c3d]">
                    {t(faq.question)}
                  </span>
                  <div
                    className={[
                      "flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[8px] transition-all duration-200",
                      isOpen ? "bg-[#3db54a]/12" : "bg-[#0f1c3d]/6",
                    ].join(" ")}
                  >
                    <ChevronDown
                      className={[
                        "h-4 w-4 transition-all duration-250",
                        isOpen ? "rotate-180 text-[#3db54a]" : "text-[#8a92a6]",
                      ].join(" ")}
                    />
                  </div>
                </button>

                <div
                  className={[
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="mx-7 h-px bg-[#0f1c3d]/6" />
                    <div className="px-7 pb-6 pt-3.5 text-[14px] leading-[1.75] text-[#5a6480]">
                      {answer && <PortableText value={answer} />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}