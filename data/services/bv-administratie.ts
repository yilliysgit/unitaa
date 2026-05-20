// data/services/bv-administratie.ts

import type { Service } from "@/types/service";

export const bvAdministratie: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "bv-administratie",

  title: "BV administratie uitbesteden",
  shortTitle: "BV administratie",

  eyebrow: "Administratie voor BV's",

  subtitle:
    "Volledige administratie, btw-aangiftes, salarisverwerking en jaarrekening voor uw BV.",

  description:
    "Wij verzorgen de complete administratie van uw BV, inclusief boekhouding, fiscale aangiftes, rapportages en persoonlijk advies.",

  longDescription:
    "Een BV brengt extra administratieve en fiscale verplichtingen met zich mee. Unit AA verzorgt uw volledige BV-administratie, bewaakt deadlines en zorgt voor actuele rapportages en fiscaal advies, zodat u zich kunt richten op het laten groeien van uw onderneming.",

  image: "/images/services/bv-administratie.jpg",

  imageAlt:
    "BV administratie uitbesteden aan administratiekantoor Unit AA",

  location:
    "Voor BV's in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "Volledige administratie voor uw BV",
    "BTW-, loon- en vennootschapsbelasting",
    "Vast aanspreekpunt",
    "Actuele managementrapportages",
  ],

  stats: [
    {
      value: "500+",
      label: "Ondernemers",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "Vanaf €175",
      label: "Per maand",
    },
  ],

  testimonial: {
    quote:
      "Unit AA verzorgt onze complete BV-administratie en denkt actief mee over belastingbesparing.",
    author: "Jeroen K.",
    company: "Directeur-grootaandeelhouder",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice: 175,
    priceLabel: "Vanaf €175 per maand",
    unit: "per maand",
    note:
      "Exclusief btw. Vast tarief afhankelijk van het aantal transacties en medewerkers.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "Vast aanspreekpunt",
    "Reactie binnen 24 uur",
    "Vennootschapsbelasting inbegrepen",
    "Actuele cijfers en rapportages",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Boekhouding BV",
      description:
        "Volledige verwerking van facturen, bankmutaties en memoriaalboekingen.",
    },
    {
      title: "BTW-aangiftes",
      description:
        "Tijdige en correcte indiening van alle btw-aangiftes.",
    },
    {
      title: "Loonadministratie",
      description:
        "Verwerking van DGA-salaris en eventuele medewerkers.",
    },
    {
      title: "Vennootschapsbelasting",
      description:
        "Opstellen en indienen van de VPB-aangifte.",
    },
    {
      title: "Jaarrekening",
      description:
        "Samenstellen van de jaarrekening en deponering bij de KvK.",
    },
    {
      title: "Fiscaal advies",
      description:
        "Proactief advies over belastingbesparing en optimale structuur.",
    },
  ],

  includedDescription:
    "Een complete dienstverlening voor BV's, inclusief administratie, fiscale aangiftes, jaarrekening en strategisch advies.",

  includedFooterNote:
    "Inclusief persoonlijk contact, fiscale deadlinebewaking en advies gericht op belastingoptimalisatie.",

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Volledig ontzorgd",
      description:
        "Alle administratieve en fiscale verplichtingen van uw BV worden verzorgd.",
    },
    {
      title: "Actuele managementinformatie",
      description:
        "Altijd inzicht in omzet, kosten, winst en liquiditeit.",
    },
    {
      title: "Fiscaal geoptimaliseerd",
      description:
        "Wij signaleren kansen voor belastingbesparing.",
    },
    {
      title: "Meer tijd voor groei",
      description:
        "U focust op ondernemen, wij regelen de administratie.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Kennismaking",
      description:
        "We bespreken uw BV-structuur, administratie en wensen.",
    },
    {
      title: "Aanleveren administratie",
      description:
        "U levert documenten digitaal aan via e-mail of online omgeving.",
    },
    {
      title: "Verwerking & controle",
      description:
        "Wij verwerken alle gegevens en controleren fiscale kansen.",
    },
    {
      title: "Rapportage & advies",
      description:
        "U ontvangt actuele cijfers en persoonlijk advies.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Wat kost BV administratie uitbesteden?",
      answer:
        "Onze tarieven starten vanaf €175 per maand, afhankelijk van de omvang van uw BV.",
    },
    {
      question: "Is de jaarrekening inbegrepen?",
      answer:
        "Ja, wij kunnen zowel de jaarrekening als de deponering bij de KvK verzorgen.",
    },
    {
      question: "Doen jullie ook de VPB-aangifte?",
      answer:
        "Ja, wij verzorgen de vennootschapsbelasting volledig.",
    },
    {
      question: "Kunnen jullie ook de loonadministratie verzorgen?",
      answer:
        "Ja, inclusief DGA-salaris en eventuele medewerkers.",
    },
    {
      question: "Krijg ik een vast aanspreekpunt?",
      answer:
        "Ja, u heeft altijd direct contact met een vaste adviseur.",
    },
    {
      question: "Werken jullie landelijk?",
      answer:
        "Ja, wij ondersteunen BV's door heel Nederland.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* CTA's                                                                       */
  /* -------------------------------------------------------------------------- */
  primaryCtaText: "Plan gratis kennismaking",
  primaryCtaHref: "/contact",

  secondaryCtaText: "Bekijk tarieven",
  secondaryCtaHref: "/pakketten",

  /* -------------------------------------------------------------------------- */
  /* Overige instellingen                                                        */
  /* -------------------------------------------------------------------------- */
  featured: true,
  order: 3,

  relatedServices: [
    "administratie",
    "jaarrekening",
    "financieel-advies",
    "salarisadministratie",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle: "BV administratie uitbesteden | Vanaf €175 p/m | Unit AA",
    metaDescription:
      "Laat uw BV administratie verzorgen door Unit AA. Inclusief btw-aangiftes, jaarrekening, VPB en fiscaal advies.",
    keywords: [
      "bv administratie uitbesteden",
      "boekhouder bv",
      "administratiekantoor bv",
      "bv boekhouding",
      "vpb aangifte",
    ],
  },
};