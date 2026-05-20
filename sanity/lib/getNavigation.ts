import { client } from "@/sanity/lib/client";
import { navigationQuery } from "@/sanity/lib/queries/navigation"; // ← /navigation toegevoegd

export interface NavigationDocument {
  mainMenu: {
    label: {
      nl?: string;
      en?: string;
      tr?: string;
    };
    href: string;
    openInNewTab?: boolean;
  }[];
}

export async function getNavigation(): Promise<NavigationDocument | null> {
  return client.fetch(navigationQuery);
}