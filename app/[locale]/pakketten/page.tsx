import { getPakkettenPage } from "@/sanity/lib/fetch/pakketten-pagina";
import { getHomePage } from "@/sanity/lib/fetch/home";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";
import { Link } from "@/i18n/routing";
import Breadcrumb, { getBreadcrumbLabel } from "@/components/ui/Breadcrumb";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

export default async function PakkettenPage({ params }: PageProps) {
  const { locale } = await params;
  const [pageData, homeData] = await Promise.all([
    getPakkettenPage(),
    getHomePage(),
  ]);

  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  const pakketten = homeData?.prijzen?.items ?? [];

  return (
    <main className="bg-[#f4f6fb]">
      <Breadcrumb
        locale={locale}
        items={[
          { label: getBreadcrumbLabel("home", locale), href: "/" },
          { label: getBreadcrumbLabel("pakketten", locale) },
        ]}
      />

      {/* Hero */}
      <section className="bg-white border-b border-[#0f1c3d]/8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(pageData?.heroEyebrow)}
            </p>
            <h1 className="mb-5 text-[44px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0f1c3d] sm:text-[56px]">
              {t(pageData?.heroTitle)}{" "}
              <span className="text-[#3db54a]">{t(pageData?.heroTitleAccent)}</span>
            </h1>
            <p className="mb-8 text-[18px] leading-[1.7] text-[#5a6480]">
              {t(pageData?.heroSubtitle)}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {pageData?.heroTrustItems?.map((item: { label?: LocaleString }, i: number) => (
                <span key={i} className="flex items-center gap-1.5 rounded-full bg-[#f0f9f1] px-4 py-1.5 text-[13px] font-semibold text-[#0f1c3d]">
                  <Check className="h-3.5 w-3.5 text-[#3db54a]" />
                  {t(item.label)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pakkettenkaarten */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pakketten.map((pakket: any, i: number) => (
              <div
                key={i}
                className={`relative rounded-[24px] p-8 flex flex-col ${
                  pakket.isPopular
                    ? "bg-[#0f1c3d] text-white shadow-2xl scale-[1.03]"
                    : "bg-white border border-[#0f1c3d]/8 shadow-sm"
                }`}
              >
                {pakket.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#3db54a] px-4 py-1 text-[12px] font-bold text-white shadow">
                      {locale === "en" ? "Most popular" : locale === "tr" ? "En çok seçilen" : "Meest gekozen"}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`mb-2 text-[22px] font-extrabold ${pakket.isPopular ? "text-white" : "text-[#0f1c3d]"}`}>
                    {t(pakket.name)}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${pakket.isPopular ? "text-white/70" : "text-[#5a6480]"}`}>
                    {t(pakket.description)}
                  </p>
                </div>

                <div className="mb-6">
                  <span className={`text-[44px] font-extrabold tracking-[-1px] ${pakket.isPopular ? "text-[#3db54a]" : "text-[#0f1c3d]"}`}>
                    €{pakket.price}
                  </span>
                  <span className={`text-[14px] ml-1 ${pakket.isPopular ? "text-white/60" : "text-[#8a92a6]"}`}>
                    {t(pakket.priceLabel)}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-2.5">
                  {pakket.features?.map((feature: any, j: number) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${feature.included ? "text-[#3db54a]" : "text-[#0f1c3d]/20"}`} />
                      <span className={`text-[13px] ${
                        !feature.included
                          ? pakket.isPopular ? "text-white/30 line-through" : "text-[#0f1c3d]/30 line-through"
                          : pakket.isPopular ? "text-white/90" : "text-[#3d4760]"
                      }`}>
                        {t(feature.label)}
                      </span>
                    </li>
                  ))}
                </ul>

                {pakket.featuresNote && (
                  <p className={`mb-4 text-[11px] ${pakket.isPopular ? "text-white/50" : "text-[#8a92a6]"}`}>
                    {t(pakket.featuresNote)}
                  </p>
                )}

                <Link
                  href={(pakket.ctaLink ?? "/contact") as any}
                  className={`group flex items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-bold transition-all ${
                    pakket.isPopular
                      ? "bg-[#3db54a] text-white hover:bg-[#34a040]"
                      : "bg-[#0f1c3d] text-white hover:bg-[#162d57]"
                  }`}
                >
                  {t(pakket.ctaText)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          {pageData?.disclaimer && (
            <div className="mt-10 rounded-2xl bg-white border border-[#0f1c3d]/8 p-6 text-center text-[13px] text-[#8a92a6]">
              {t(pageData.disclaimer)}
            </div>
          )}
        </div>
      </section>

      {/* Vergelijkingstabel */}
      {pageData?.vergelijkingRijen && pageData.vergelijkingRijen.length > 0 && (
        <section className="py-20 sm:py-24 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                {t(pageData?.vergelijkingEyebrow)}
              </p>
              <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.8px] text-[#0f1c3d] sm:text-[42px]">
                {t(pageData?.vergelijkingTitle)}
              </h2>
              <p className="text-[16px] text-[#5a6480]">{t(pageData?.vergelijkingSubtitle)}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-[#0f1c3d]/8">
                    <th className="py-4 text-left text-[#8a92a6] font-semibold w-[35%]">Feature</th>
                    <th className="py-4 text-center font-extrabold text-[#0f1c3d]">Starter</th>
                    <th className="py-4 text-center font-extrabold text-[#3db54a]">Groei</th>
                    <th className="py-4 text-center font-extrabold text-[#0f1c3d]">BV & Holding</th>
                    <th className="py-4 text-center font-extrabold text-[#0f1c3d]">Vastgoed</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.vergelijkingRijen.map((rij: any, i: number) => (
                    <tr key={i} className={`border-b border-[#0f1c3d]/5 ${i % 2 === 0 ? "bg-[#f4f6fb]/50" : ""}`}>
                      <td className="py-3.5 pr-4 font-medium text-[#0f1c3d]">{t(rij.feature)}</td>
                      <td className="py-3.5 text-center text-[#5a6480]">{rij.starter}</td>
                      <td className="py-3.5 text-center font-semibold text-[#3db54a]">{rij.groei}</td>
                      <td className="py-3.5 text-center text-[#5a6480]">{rij.bv}</td>
                      <td className="py-3.5 text-center text-[#5a6480]">{rij.vastgoed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {pageData?.faqItems && pageData.faqItems.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[800px] px-6 lg:px-12">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                {t(pageData?.faqEyebrow)}
              </p>
              <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.8px] text-[#0f1c3d] sm:text-[42px]">
                {t(pageData?.faqTitle)}
              </h2>
              <p className="text-[16px] text-[#5a6480]">{t(pageData?.faqSubtitle)}</p>
            </div>

            <div className="space-y-3">
              {pageData.faqItems.map((item: any, i: number) => (
                <details key={i} className="group rounded-2xl bg-white border border-[#0f1c3d]/8 p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0f1c3d] text-[15px] list-none">
                    {t(item.question)}
                    <ChevronDown className="h-4 w-4 text-[#8a92a6] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#5a6480]">
                    {t(item.answer)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <HomeCTA
        sectie={{
          eyebrow: pageData?.ctaEyebrow ?? homeData?.cta?.eyebrow,
          title: pageData?.ctaTitle ?? homeData?.cta?.title,
          titleAccent: homeData?.cta?.titleAccent,
          description: pageData?.ctaSubtitle ?? homeData?.cta?.description,
          trustItems: homeData?.cta?.trustItems,
          primaryCtaText: pageData?.ctaPrimaryText ?? homeData?.cta?.primaryCtaText,
          primaryCtaLink: pageData?.ctaPrimaryLink ?? homeData?.cta?.primaryCtaLink,
          secondaryCtaText: pageData?.ctaSecondaryText ?? homeData?.cta?.secondaryCtaText,
          secondaryCtaLink: pageData?.ctaSecondaryLink ?? homeData?.cta?.secondaryCtaLink,
        }}
        locale={locale}
      />
    </main>
  );
}