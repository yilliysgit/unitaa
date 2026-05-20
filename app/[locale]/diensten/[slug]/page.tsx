import { notFound } from "next/navigation";
import { getDienst } from "@/sanity/lib/fetch/dienst";
import { getHomePage } from "@/sanity/lib/fetch/home";
import Breadcrumb, { getBreadcrumbLabel } from "@/components/ui/Breadcrumb";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";


import ServiceHero from "@/components/services/detail/ServiceHero";
import ServiceIntro from "@/components/services/detail/ServiceIntro";
import ServiceIncluded from "@/components/services/detail/ServiceIncluded";
import ServiceBenefits from "@/components/services/detail/ServiceBenefits";
import ServiceProcess from "@/components/services/detail/ServiceProcess";
import HomeFaq from "@/components/home/HomeFaq";
import HomeCTA from "@/components/home/HomeCTA";
import HomeReviews from "@/components/home/HomeReviews";
import HomePricing from "@/components/home/HomePricing";

interface ServicePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug, locale } = await params;

  const [dienst, homeData] = await Promise.all([
    
    getDienst(slug, locale),
    getHomePage(),
  ]);

    console.log('dienst cta:', dienst?.ctaEyebrow, dienst?.ctaTitle);


  if (!dienst) {
    notFound();
  }

  return (
    <>
    <Breadcrumb
  locale={locale}
  items={[
    { label: getBreadcrumbLabel("home", locale), href: "/" },
    { label: getBreadcrumbLabel("diensten", locale), href: "/diensten" },
    { label: getLocalizedValue(dienst?.shortTitle, locale) ?? getLocalizedValue(dienst?.title, locale) ?? "" },
  ]}
/>
      <ServiceHero data={dienst} locale={locale} />
      <ServiceIntro data={dienst} locale={locale} />
      <ServiceIncluded data={dienst} locale={locale} />
      <ServiceBenefits data={dienst} locale={locale} />
      <ServiceProcess data={dienst} locale={locale} />
      <HomeFaq
        sectie={{
          eyebrow: dienst?.faqEyebrow,
          title: dienst?.faqTitle,
          titleAccent: undefined,
          subtitle: dienst?.faqSubtitle,
          items: dienst?.faq,
        }}
        locale={locale}
      />
      <HomePricing sectie={homeData?.prijzen} locale={locale} />
      <HomeReviews />
     <HomeCTA 
  sectie={{
    eyebrow: dienst?.ctaEyebrow ?? homeData?.cta?.eyebrow,
    title: dienst?.ctaTitle ?? homeData?.cta?.title,
    titleAccent: dienst?.ctaTitleAccent ?? homeData?.cta?.titleAccent,
    description: dienst?.ctaDescription ?? homeData?.cta?.description,
    trustItems: dienst?.ctaTrustItems ?? homeData?.cta?.trustItems,
    primaryCtaText: dienst?.ctaPrimaryText ?? homeData?.cta?.primaryCtaText,
    primaryCtaLink: dienst?.ctaPrimaryLink ?? homeData?.cta?.primaryCtaLink,
    secondaryCtaText: dienst?.ctaSecondaryText ?? homeData?.cta?.secondaryCtaText,
    secondaryCtaLink: dienst?.ctaSecondaryLink ?? homeData?.cta?.secondaryCtaLink,
  }} 
  locale={locale} 
/>
    </>
  );
}