// client/types/header.type.ts

import type { ComponentProps, ComponentType, SVGProps } from "react";
import { Link } from "@/i18n/routing";

/**
 * Type voor een SVG React component, bijvoorbeeld:
 * import { LogoUnitAA } from "@/components/logos/LogoUnitAA";
 */
export type LogoComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Logo kan op twee manieren worden gebruikt:
 *
 * 1. Als bestand uit /public
 *    { src: "/logo.svg", alt: "...", href: "/" }
 *
 * 2. Als React component
 *    { component: LogoUnitAA, alt: "...", href: "/" }
 */
export type Logo =
  | {
      src: string;
      alt: string;
      href: string;
      component?: never;
    }
  | {
      component: LogoComponent;
      alt: string;
      href: string;
      src?: never;
    };

export interface NavigationItem {
  id: string;
  name: string;
  href: ComponentProps<typeof Link>["href"];
  active?: boolean;
}

export interface HeaderCta {
  text: string;
  href: string;
}

export interface HeaderConfig {
  logo: Logo;
  navigation: NavigationItem[];
  cta: HeaderCta;
  tagline?: string;
}