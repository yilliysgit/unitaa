import { getDienstenPage } from "@/sanity/lib/fetch/diensten-pagina";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesWhyUnitAA from "@/components/services/ServicesWhyUnitAA";
import HomeReviews from "@/components/home/HomeReviews";
import HomeFaq from "@/components/home/HomeFaq";
import HomeCTA from "@/components/home/HomeCTA";
import { getHomePage } from "@/sanity/lib/fetch/home";
import Breadcrumb, { getBreadcrumbLabel } from "@/components/ui/Breadcrumb";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function DienstenPage({ params }: PageProps) {
  const { locale } = await params;
  const [pageData, homeData] = await Promise.all([
    getDienstenPage(),
    getHomePage(),
  ]);

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: getBreadcrumbLabel("home", locale), href: "/" },
          { label: getBreadcrumbLabel("diensten", locale) },
        ]}
      />
      <ServicesHero data={pageData?.hero} locale={locale} />
      <ServicesIntro data={pageData?.intro} locale={locale} />
      <ServicesGrid 
        diensten={pageData?.diensten} 
        locale={locale}
        eyebrow={pageData?.grid?.eyebrow}
        title={pageData?.grid?.title}
        subtitle={pageData?.grid?.subtitle}
      />
      <ServicesWhyUnitAA data={pageData?.waarom} locale={locale} />
      <HomeReviews />
      <HomeFaq 
        sectie={{ 
          ...pageData?.faqSectie, 
          items: pageData?.faq 
        }} 
        locale={locale} 
      />
      <HomeCTA sectie={homeData?.cta} locale={locale} />
    </>
  );
}