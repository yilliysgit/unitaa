import Header from "./Header";
import { getLocalizedValue } from "@/sanity/lib/getLocalizedValue";
import type { NavigationItem } from "@/types/header.type";
import type { NavigationDocument } from "@/sanity/lib/getNavigation";

interface HeaderServerProps {
  locale: string;
  navigation?: NavigationDocument | null;
}

export default function HeaderServer({
  locale,
  navigation,
}: HeaderServerProps) {
  const navItems: NavigationItem[] =
    navigation?.mainMenu?.map((item, index) => ({
      id: `nav-${index}`,
      name: getLocalizedValue(item.label, locale),
      href: item.href as NavigationItem["href"],
    })) ?? [];

  return <Header navigation={navItems} />;
}