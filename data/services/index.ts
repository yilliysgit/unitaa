// data/services/index.ts

import { administratie } from "./administratie";
import { btwAangifte } from "./btw-aangifte";
import { bvAdministratie } from "./bv-administratie";
import { financieelAdvies } from "./financieel-advies";
import { inkomstenbelasting } from "./inkomstenbelasting";
import { jaarrekening } from "./jaarrekening";
import { particuliereAangifte } from "./particuliere-aangifte";
import { salarisadministratie } from "./salarisadministratie";

import type { Services } from "@/types/service";

export const services: Services = {
  [administratie.slug]: administratie,
  [btwAangifte.slug]: btwAangifte,
  [bvAdministratie.slug]: bvAdministratie,
  [financieelAdvies.slug]: financieelAdvies,
  [inkomstenbelasting.slug]: inkomstenbelasting,
  [jaarrekening.slug]: jaarrekening,
  [particuliereAangifte.slug]: particuliereAangifte,
  [salarisadministratie.slug]: salarisadministratie,
};

export const servicesList = Object.values(services)
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export function getService(slug: string) {
  return services[slug];
}

export function getFeaturedServices() {
  return servicesList.filter((service) => service.featured);
}