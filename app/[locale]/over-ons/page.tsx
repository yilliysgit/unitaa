import { getOverOnsPage } from "@/sanity/lib/fetch/over-ons";
import { getHomePage } from "@/sanity/lib/fetch/home";
import Breadcrumb, { getBreadcrumbLabel } from "@/components/ui/Breadcrumb";



import {
  ArrowRight,
  Award,
  CheckCircle2,
  Coffee,
  Heart,
  Lightbulb,
  MessageCircle,
  Shield,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface Stat {
  value?: string;
  label?: LocaleString;
  icon?: string;
}

interface Waarde {
  icon?: string;
  title?: LocaleString;
  description?: LocaleString;
}

interface TeamMember {
  name?: string;
  role?: LocaleString;
  experience?: LocaleString;
  bio?: LocaleString;
  image?: { asset?: { url?: string } };
}

interface WaaromItem {
  label?: LocaleString;
}

interface OverOnsData {
  heroEyebrow?: LocaleString;
  heroTitle?: LocaleString;
  heroSubtitle?: LocaleString;
  heroImage?: { asset?: { url?: string } };
  missieEyebrow?: LocaleString;
  missieTitle?: LocaleString;
  missieBody?: { nl?: unknown[]; en?: unknown[]; tr?: unknown[] };
  missieQuote?: LocaleString;
  missieQuoteAuthor?: string;
  missieQuoteRole?: LocaleString;
  stats?: Stat[];
  waardenEyebrow?: LocaleString;
  waardenTitle?: LocaleString;
  waarden?: Waarde[];
  teamEyebrow?: LocaleString;
  teamTitle?: LocaleString;
  teamSubtitle?: LocaleString;
  teamMembers?: TeamMember[];
  teamFootnote?: LocaleString;
  waaromEyebrow?: LocaleString;
  waaromTitle?: LocaleString;
  waaromItems?: WaaromItem[];
  waaromCtaText?: LocaleString;
  waaromCtaLink?: string;
  waaromQuote?: LocaleString;
  waaromQuoteTitle?: LocaleString;
  ctaTitle?: LocaleString;
  ctaSubtitle?: LocaleString;
  ctaButtonText?: LocaleString;
  ctaButtonLink?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Target, Shield, Users, Zap, Award, Heart, MessageCircle, Coffee, Lightbulb, CheckCircle2,
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function OverOnsPage({ params }: PageProps) {
  const { locale } = await params;
  const [data, homeData] = await Promise.all([
    getOverOnsPage() as Promise<OverOnsData | null>,
    getHomePage(),
  ]);

  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const missieBody = data?.missieBody?.[locale as keyof typeof data.missieBody];

  return (
    <main className="bg-white">
      <Breadcrumb
    locale={locale}
    items={[
      { label: getBreadcrumbLabel("home", locale), href: "/" },
      { label: getBreadcrumbLabel("over-ons", locale) },
    ]}
  />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4f6fb] pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div aria-hidden="true" className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(rgba(15,28,61,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(data?.heroEyebrow)}
            </p>
            <h1 className="mb-5 text-[44px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0f1c3d] sm:text-[56px]">
              {t(data?.heroTitle)}
            </h1>
            <p className="text-[18px] font-semibold text-[#3d4760]">
              {t(data?.heroSubtitle)}
            </p>
          </div>
        </div>
      </section>

      {/* Missie */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                {t(data?.missieEyebrow)}
              </p>
              <h2 className="mb-5 text-[32px] font-extrabold leading-[1.2] tracking-[-0.8px] text-[#0f1c3d] sm:text-[40px]">
                {t(data?.missieTitle)}
              </h2>
              {missieBody && (
                <div className="space-y-5 text-[16px] leading-[1.8] text-[#5a6480] [&_strong]:font-bold [&_strong]:text-[#0f1c3d]">
                  <PortableText value={missieBody as any[]} />
                </div>
              )}
            </div>
            <div className="rounded-2xl bg-[#f0f9f1] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Coffee className="h-6 w-6 text-[#3db54a]" />
                </div>
                <div>
                  <p className="mb-3 text-[15px] italic leading-relaxed text-[#3d4760]">
                    "{t(data?.missieQuote)}"
                  </p>
                  <p className="font-bold text-[#0f1c3d]">— {data?.missieQuoteAuthor}</p>
                  <p className="text-[12px] text-[#8a92a6]">{t(data?.missieQuoteRole)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0f1c3d] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {data?.stats?.map((stat: Stat, i: number) => {
              const Icon = iconMap[stat.icon ?? ""] ?? Users;
              return (
                <div key={i}>
                  <Icon className="mx-auto mb-3 h-7 w-7 text-[#3db54a]" />
                  <p className="text-[28px] font-extrabold text-white sm:text-[32px]">{stat.value}</p>
                  <p className="text-[12px] font-semibold uppercase tracking-[1px] text-white/70">{t(stat.label)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(data?.waardenEyebrow)}
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] text-[#0f1c3d] sm:text-[42px]">
              {t(data?.waardenTitle)}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data?.waarden?.map((value: Waarde, i: number) => {
              const Icon = iconMap[value.icon ?? ""] ?? Shield;
              return (
                <div key={i} className="text-center p-6 rounded-2xl border border-[#0f1c3d]/8 bg-white transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f0f9f1]">
                    <Icon className="h-7 w-7 text-[#3db54a]" />
                  </div>
                  <h3 className="mb-2 text-[18px] font-extrabold text-[#0f1c3d]">{t(value.title)}</h3>
                  <p className="text-[13px] leading-relaxed text-[#5a6480]">{t(value.description)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f4f6fb] py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(data?.teamEyebrow)}
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] text-[#0f1c3d] sm:text-[42px]">
              {t(data?.teamTitle)}
            </h2>
            <p className="mt-3 text-[16px] text-[#5a6480]">{t(data?.teamSubtitle)}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.teamMembers?.map((member: TeamMember, i: number) => (
              <div key={i} className="rounded-2xl bg-white p-6 text-center shadow-sm border border-[#0f1c3d]/8">
                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full bg-[#f0f9f1]">
                  {member.image?.asset?.url ? (
                    <Image src={member.image.asset.url} alt={member.name ?? ""} width={112} height={112} className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#3db54a]/10">
                      <Users className="h-10 w-10 text-[#3db54a]" />
                    </div>
                  )}
                </div>
                <h3 className="mb-1 text-[18px] font-extrabold text-[#0f1c3d]">{member.name}</h3>
                <p className="mb-2 text-[13px] font-semibold text-[#3db54a]">{t(member.role)}</p>
                <p className="mb-3 text-[12px] text-[#8a92a6]">{t(member.experience)}</p>
                <p className="text-[13px] leading-relaxed text-[#5a6480]">{t(member.bio)}</p>
              </div>
            ))}
          </div>
          {data?.teamFootnote && (
            <p className="mt-8 text-center text-[13px] text-[#8a92a6]">{t(data.teamFootnote)}</p>
          )}
        </div>
      </section>

      {/* Waarom Unit AA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
                {t(data?.waaromEyebrow)}
              </p>
              <h2 className="mb-5 text-[32px] font-extrabold leading-[1.2] tracking-[-0.8px] text-[#0f1c3d] sm:text-[40px]">
                {t(data?.waaromTitle)}
              </h2>
              <div className="space-y-4">
                {data?.waaromItems?.map((item: WaaromItem, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3db54a]" />
                    <span className="text-[15px] text-[#3d4760]">{t(item.label)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={(data?.waaromCtaLink as any) ?? "/contact"}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#0f1c3d] px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-[#162d57]"
                >
                  {t(data?.waaromCtaText)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-[#f0f9f1] p-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Lightbulb className="h-5 w-5 text-[#3db54a]" />
                </div>
                <div>
                  <p className="mb-2 text-[16px] font-bold text-[#0f1c3d]">
    {t(data?.waaromQuoteTitle)}
  </p>
  <p className="text-[14px] italic text-[#3d4760]">
    "{t(data?.waaromQuote)}"
  </p>
</div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1c3d] py-16">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <h2 className="mb-3 text-[28px] font-extrabold text-white sm:text-[34px]">
            {t(data?.ctaTitle)}
          </h2>
          <p className="mb-6 text-[16px] text-white/80">{t(data?.ctaSubtitle)}</p>
          <Link
            href={(data?.ctaButtonLink as any) ?? "/contact"}
            className="group inline-flex items-center gap-2 rounded-xl bg-[#3db54a] px-8 py-4 text-[15px] font-bold text-white transition-all hover:bg-[#34a040]"
          >
            {t(data?.ctaButtonText)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

    </main>
  );
}