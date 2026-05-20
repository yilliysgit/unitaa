// components/ui/Breadcrumb.tsx
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale: string;
}

const labels: Record<string, Record<string, string>> = {
  nl: {
    home: "Home",
    diensten: "Diensten",
    pakketten: "Pakketten",
    "over-ons": "Over Ons",
    faq: "FAQ",
    nieuws: "Nieuws",
    contact: "Contact",
  },
  en: {
    home: "Home",
    diensten: "Services",
    pakketten: "Packages",
    "over-ons": "About",
    faq: "FAQ",
    nieuws: "News",
    contact: "Contact",
  },
  tr: {
    home: "Ana Sayfa",
    diensten: "Hizmetler",
    pakketten: "Paketler",
    "over-ons": "Hakkımızda",
    faq: "SSS",
    nieuws: "Haberler",
    contact: "İletişim",
  },
};

export function getBreadcrumbLabel(key: string, locale: string): string {
  return labels[locale]?.[key] ?? labels.nl?.[key] ?? key;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-[#0f1c3d]/6">
      <div className="mx-auto max-w-[1280px] px-6 py-3 lg:px-12">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-[#8a92a6]" />
                )}
                {isLast || !item.href ? (
                  <span className="text-[13px] font-semibold text-[#0f1c3d]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href as any}
                    className="text-[13px] text-[#5a6480] transition-colors hover:text-[#0f1c3d]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}