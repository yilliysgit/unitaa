import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["nl", "en", "tr"],
  defaultLocale: "nl",
  pathnames: {
    "/": "/",
    "/diensten": {
      nl: "/diensten",
      en: "/services",
      tr: "/hizmetler",
    },
    "/diensten/[slug]": {
      nl: "/diensten/[slug]",
      en: "/services/[slug]",
      tr: "/hizmetler/[slug]",
    },
    "/pakketten": {
      nl: "/pakketten",
      en: "/pricing",
      tr: "/paketler",
    },
    "/over-ons": {
      nl: "/over-ons",
      en: "/about",
      tr: "/hakkimizda",
    },
    "/contact": {
      nl: "/contact",
      en: "/contact",
      tr: "/iletisim",
    },
    "/faq": {
      nl: "/faq",
      en: "/faq",
      tr: "/sss",
    },
    "/nieuws": {
      nl: "/nieuws",
      en: "/news",
      tr: "/haberler",
    },
  },
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);