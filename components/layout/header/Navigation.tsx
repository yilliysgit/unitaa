// client/components/layout/header/Navigation.tsx

"use client";

import NavItemLinks from "./NavItemLinks";
import type { NavigationItem } from "@/types/header.type";

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav
      className="hidden lg:flex items-center gap-1"
      aria-label="Hoofdnavigatie"
    >
      {items.map((item) => (
        <NavItemLinks key={item.id} item={item} />
      ))}
    </nav>
  );
}