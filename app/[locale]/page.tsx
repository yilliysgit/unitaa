import { getHomePage } from "@/sanity/lib/fetch/home";
import Hero from "@/components/hero/HomeHero";
import HomeIntro from "@/components/home/HomeIntro";
import HomeServices from "@/components/home/HomeServices";
import HomePricing from "@/components/home/HomePricing";
import HomeReviews from "@/components/home/HomeReviews";
import HomeFaq from "@/components/home/HomeFaq";
import HomeCTA from "@/components/home/HomeCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const data = await getHomePage();

  return (
    <>
      <Hero data={data?.hero} locale={locale} />
      <HomeIntro data={data?.intro} locale={locale} />
      <HomeServices sectie={data?.diensten} locale={locale} />
      <HomePricing sectie={data?.prijzen} locale={locale} />
      <HomeReviews />
      <HomeFaq sectie={data?.faq} locale={locale} />
      <HomeCTA sectie={data?.cta} locale={locale}/>
    </>
  );
}