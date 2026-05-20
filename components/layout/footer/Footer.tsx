import { Link } from "@/i18n/routing";
import { Check, Clock, Mail, MapPin, Phone, CalendarCheck, UserCheck, type LucideIcon } from "lucide-react";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  UserCheck,
  Check,
  Phone,
  Mail,
  MapPin,
  CalendarCheck
};

interface LocaleString {
  nl?: string;
  en?: string;
  tr?: string;
}

interface NavigationItem {
  label?: LocaleString;
  href?: string;
}

interface NavigationDocument {
  mainMenu?: NavigationItem[];
}

interface SiteSettings {
  phone?: string;
  email?: string;
  address?: LocaleString;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  footerBadges?: { label?: LocaleString; icon?: string }[];
  footerTagline?: LocaleString;
  footerDiensten?: LocaleString;
  footerNavigatie?: LocaleString;
  footerContact?: LocaleString;
  footerCopyright?: LocaleString;
  footerLegalLinks?: { label?: LocaleString; href?: string }[]; // ← nieuw
  kvk?: string;
  btwNumber?: string;
  beconNummer?: string;
}

interface Dienst {
  title?: LocaleString;
  slug?: {
    nl?: { current?: string };
    en?: { current?: string };
    tr?: { current?: string };
  };
}

interface FooterProps {
  locale: string;
  navigation?: NavigationDocument | null;
  siteSettings?: SiteSettings | null;
  diensten?: Dienst[] | null;
}

export default function Footer({ locale, navigation, siteSettings, diensten }: FooterProps) {
  const t = (val?: LocaleString) => getLocalizedValue(val, locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="h-12 bg-[#f4f6fb]" />

      <div className="bg-[#0a1225] text-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-12 lg:py-14">

          {/* Brand */}
          <div>
            <Link href="/" className="mb-3 inline-block transition-opacity hover:opacity-80">
              <span className="text-[26px] font-extrabold tracking-[-0.5px] text-white">
                Unit<span className="text-[#3db54a]">AA</span>
              </span>
            </Link>
            <p className="mb-5 max-w-[260px] text-[13px] leading-[1.7] text-white/45">
              {t(siteSettings?.footerTagline)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {siteSettings?.footerBadges?.map(({ label, icon }, i) => {
                const Icon = iconMap[icon ?? ""] ?? Check;
                return (
                  <div key={i} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-white/65">
                    <Icon className="h-3 w-3 text-[#3db54a]" />
                    {t(label)}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Diensten */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(siteSettings?.footerDiensten)}
            </p>
            <div className="flex flex-col gap-2.5">
              {diensten?.map((dienst, i) => {
                const slug = dienst.slug?.[locale as keyof typeof dienst.slug]?.current;
                if (!slug) return null;
                return (
                  <Link
                    key={i}
                    href={`/diensten/${slug}` as any}
                    className="text-[13px] text-white/50 transition-colors hover:text-white"
                  >
                    {t(dienst.title)}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(siteSettings?.footerNavigatie)}
            </p>
            <div className="flex flex-col gap-2.5">
              {navigation?.mainMenu?.map((item, i) => (
                <Link
                  key={i}
                  href={(item.href as any) ?? "/"}
                  className="text-[13px] text-white/50 transition-colors hover:text-white"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[1.8px] text-[#3db54a]">
              {t(siteSettings?.footerContact)}
            </p>
            <div className="mb-5 flex flex-col gap-3">
              {siteSettings?.phone && (
                <div className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3db54a]" />
                  <a href={`tel:${siteSettings.phone}`} className="text-[13px] text-white/50 transition-colors hover:text-white">
                    {siteSettings.phone}
                  </a>
                </div>
              )}
              {siteSettings?.email && (
                <div className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3db54a]" />
                  <a href={`mailto:${siteSettings.email}`} className="text-[13px] text-white/50 transition-colors hover:text-white">
                    {siteSettings.email}
                  </a>
                </div>
              )}
              {siteSettings?.address && (
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3db54a]" />
                  <p className="text-[13px] text-white/50">{t(siteSettings.address)}</p>
                </div>
              )}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {siteSettings?.linkedin && (
                <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#3db54a]/40 hover:bg-[#3db54a]/10 hover:text-[#3db54a]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {siteSettings?.instagram && (
                <a href={siteSettings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#3db54a]/40 hover:bg-[#3db54a]/10 hover:text-[#3db54a]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        

        {/* Bottom bar */}
        <div className="border-t border-white/7 px-6 py-5 lg:px-12">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[11px] text-white/25">
              © {currentYear} {t(siteSettings?.footerCopyright)}
            </p>
            <div className="flex flex-wrap gap-5">
              {siteSettings?.footerLegalLinks?.map((link, i) => (
  <Link
    key={i}
    href={(link.href as any) ?? "/"}
    className="text-[11px] text-white/25 transition-colors hover:text-white/60"
  >
    {t(link.label)}
  </Link>
))}
            </div>
            {(siteSettings?.kvk || siteSettings?.btwNumber || siteSettings?.beconNummer) && (
  <p className="text-[11px] text-white/25">
    {siteSettings?.kvk && `KvK: ${siteSettings.kvk}`}
    {siteSettings?.btwNumber && ` | BTW: ${siteSettings.btwNumber}`}
    {siteSettings?.beconNummer && ` | Becon: ${siteSettings.beconNummer}`}
  </p>
)}
          </div>
        </div>
      </div>
    </footer>
  );
}