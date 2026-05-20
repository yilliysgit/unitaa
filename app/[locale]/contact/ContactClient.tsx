"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Phone, MessageCircle, Mail, Clock, ShieldCheck, Users, Sparkles,
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface ContactOptie {
  icon?: string;
  title?: LocaleString;
  value?: string;
  subtext?: LocaleString;
  href?: string;
  action?: LocaleString;
}

interface OpeningstijdRegel {
  regel?: LocaleString;
}

interface TrustItem {
  icon?: string;
  label?: LocaleString;
  description?: LocaleString;
}

interface ContactData {
  heroEyebrow?: LocaleString;
  heroTitle?: LocaleString;
  heroSubtitle?: LocaleString;
  contactOpties?: ContactOptie[];
  bedrijfsnaam?: string;
  straat?: string;
  postcode?: string;
  routeLink?: string;
  routeLinkText?: LocaleString;
  openingstijden?: OpeningstijdRegel[];
  openingstijdenNote?: LocaleString;
  formTitle?: LocaleString;
  formSubtitle?: LocaleString;
  formLabelNaam?: LocaleString;
  formPlaceholderNaam?: LocaleString;
  formLabelEmail?: LocaleString;
  formPlaceholderEmail?: LocaleString;
  formLabelTelefoon?: LocaleString;
  formPlaceholderTelefoon?: LocaleString;
  formLabelBericht?: LocaleString;
  formPlaceholderBericht?: LocaleString;
  formButtonText?: LocaleString;
  formDisclaimer?: LocaleString;
  formDisclaimerLink?: LocaleString;
  formDisclaimerHref?: string;
  formSuccessTitle?: LocaleString;
  formSuccessText?: LocaleString;
  formSuccessButton?: LocaleString;
  trustTitle?: LocaleString;
  trustItems?: TrustItem[];
  kvk?: string;
  btw?: string;
  becon?: string;
  emailOntvanger?: string;
}

interface ContactClientProps {
  data?: ContactData | null;
  locale: string;
}

export default function ContactClient({ data, locale }: ContactClientProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#f4f6fb] pt-32 pb-20">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <div className="rounded-2xl bg-white p-10 shadow-md border border-[#3db54a]/20">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-[#3db54a]" />
            <h1 className="mb-3 text-[28px] font-extrabold text-[#0f1c3d]">
              {t(data?.formSuccessTitle) || "Bedankt voor uw bericht!"}
            </h1>
            <p className="mb-6 text-[16px] text-[#5a6480]">
              {t(data?.formSuccessText) || "We nemen binnen 24 uur contact met u op."}
            </p>
            <Link
              href="/"
              className="inline-block rounded-xl bg-[#0f1c3d] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#162d57]"
            >
              {t(data?.formSuccessButton) || "Terug naar homepage"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f6fb]">
      {/* Hero */}
      <section className="bg-white border-b border-[#0f1c3d]/8 pt-32 pb-12 sm:pt-36 sm:pb-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(data?.heroEyebrow)}
            </p>
            <h1 className="mb-4 text-[40px] font-extrabold tracking-[-1px] text-[#0f1c3d] sm:text-[48px]">
              {t(data?.heroTitle)}
            </h1>
            <p className="text-[17px] leading-relaxed text-[#5a6480]">
              {t(data?.heroSubtitle)}
            </p>
          </div>
        </div>
      </section>

      {/* Contactopties */}
      <section className="py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {data?.contactOpties?.map((option, i) => {
              const Icon = iconMap[option.icon ?? ""] ?? Phone;
              return (
                
                <a key={i}
                 href={option.href ?? "#"}
                  className="group flex items-center justify-between rounded-xl border border-[#0f1c3d]/8 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3db54a]/30 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f9f1]">
                      <Icon className="h-5 w-5 text-[#3db54a]" />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[1px] text-[#8a92a6]">
                        {t(option.title)}
                      </p>
                      <p className="text-[16px] font-bold text-[#0f1c3d]">{option.value}</p>
                      <p className="text-[11px] text-[#8a92a6]">{t(option.subtext)}</p>
                    </div>
                  </div>
                  <span className="text-[13px] font-semibold text-[#3db54a] opacity-0 transition-opacity group-hover:opacity-100">
                    {t(option.action)}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulier + Adres */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Formulier */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#0f1c3d]/8 sm:p-8">
              <h2 className="mb-2 text-[24px] font-extrabold text-[#0f1c3d]">
                {t(data?.formTitle)}
              </h2>
              <p className="mb-6 text-[14px] text-[#5a6480]">
                {t(data?.formSubtitle)}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                    {t(data?.formLabelNaam)}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                    placeholder={t(data?.formPlaceholderNaam) ?? ""}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                    {t(data?.formLabelEmail)}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                    placeholder={t(data?.formPlaceholderEmail) ?? ""}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                    {t(data?.formLabelTelefoon)}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                    placeholder={t(data?.formPlaceholderTelefoon) ?? ""}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[13px] font-semibold text-[#0f1c3d]">
                    {t(data?.formLabelBericht)}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#0f1c3d]/12 px-4 py-2.5 text-[14px] outline-none focus:border-[#3db54a] focus:ring-1 focus:ring-[#3db54a]"
                    placeholder={t(data?.formPlaceholderBericht) ?? ""}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f1c3d] py-3.5 text-[14px] font-bold text-white transition-all hover:bg-[#162d57]"
                >
                  {t(data?.formButtonText)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <p className="text-center text-[11px] text-[#8a92a6]">
                  {t(data?.formDisclaimer)}{" "}
                  <Link
                    href={(data?.formDisclaimerHref as any) ?? "/algemene-voorwaarden"}
                    className="text-[#3db54a] hover:underline"
                  >
                    {t(data?.formDisclaimerLink)}
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Rechterkant */}
            <div className="space-y-6">
              {/* Adreskaart */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-[#0f1c3d]/8 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f9f1]">
                    <Building2 className="h-5 w-5 text-[#3db54a]" />
                  </div>
                  <h2 className="text-[22px] font-extrabold text-[#0f1c3d]">
                    Kom langs
                  </h2>
                </div>

                <div className="mb-4 space-y-2">
                  <p className="text-[16px] font-semibold text-[#0f1c3d]">
                    {data?.bedrijfsnaam}
                  </p>
                  <p className="text-[15px] text-[#5a6480]">
                    {data?.straat}
                    <br />
                    {data?.postcode}
                  </p>
                </div>

                <div className="mb-4 flex items-center gap-2 text-[13px] text-[#3db54a]">
                  <MapPin className="h-3.5 w-3.5" />
                  
                  <a  href={data?.routeLink ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t(data?.routeLinkText) || "Route plannen →"}
                  </a>
                </div>

                {/* Openingstijden */}
                <div className="mt-5 pt-4 border-t border-[#0f1c3d]/8">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-[#3db54a]" />
                    <p className="text-[13px] font-bold text-[#0f1c3d]">Openingstijden</p>
                  </div>
                  <div className="space-y-1 text-[13px] text-[#5a6480]">
                    {data?.openingstijden?.map((item, i) => (
                      <p key={i}>{t(item.regel)}</p>
                    ))}
                    {data?.openingstijdenNote && (
                      <p className="mt-2 text-[12px]">{t(data.openingstijdenNote)}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="rounded-2xl bg-[#0f1c3d] p-6 text-white sm:p-8">
                <h3 className="mb-4 text-[16px] font-extrabold">
                  {t(data?.trustTitle)}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {data?.trustItems?.map((item, i) => {
                    const Icon = iconMap[item.icon ?? ""] ?? ShieldCheck;
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#3db54a]" />
                        <div>
                          <p className="text-[13px] font-bold">{t(item.label)}</p>
                          <p className="text-[11px] text-white/70">{t(item.description)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* KvK */}
              {(data?.kvk || data?.btw || data?.becon) && (
                <div className="rounded-2xl bg-white p-5 text-center text-[12px] text-[#8a92a6] border border-[#0f1c3d]/8">
                  <p>
                    {data?.kvk && `KvK: ${data.kvk}`}
                    {data?.btw && ` | BTW: ${data.btw}`}
                    {data?.becon && ` | Beconnummer: ${data.becon}`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}