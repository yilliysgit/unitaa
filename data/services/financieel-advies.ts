// data/services/financieel-advies.ts

import type { Service } from "@/types/service";

export const financieelAdvies: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "financieel-advies",

  title: "Financieel advies voor ondernemers",
  shortTitle: "Financieel advies",

  eyebrow: "Persoonlijk financieel advies",

  subtitle:
    "Strategisch financieel advies om uw winst te verhogen, belasting te besparen en betere ondernemersbeslissingen te nemen.",

  description:
    "Wij analyseren uw cijfers en geven concreet financieel en fiscaal advies waarmee u direct beter kunt sturen op rendement en groei.",

  longDescription:
    "Goede cijfers zijn pas waardevol als u weet wat u ermee moet doen. Unit AA vertaalt uw administratie naar duidelijke inzichten en praktisch advies over winstoptimalisatie, cashflow, investeringen en belastingbesparing.",

  image: "/images/services/financieel-advies.jpg",

  imageAlt:
    "Financieel advies voor ondernemers door administratiekantoor Unit AA",

  location:
    "Voor ondernemers in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "Concreet advies op basis van uw cijfers",
    "Inzicht in cashflow en winstgevendheid",
    "Fiscaal optimalisatieadvies",
    "Vast aanspreekpunt",
  ],

  stats: [
    {
      value: "€2.800",
      label: "Gem. belastingvoordeel",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "500+",
      label: "Ondernemers geholpen",
    },
  ],

  testimonial: {
    quote:
      "Dankzij het advies van Unit AA hebben we onze winst verhoogd en besparen we jaarlijks duizenden euro's aan belasting.",
    author: "Sander B.",
    company: "E-commerce ondernemer",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice: 150,
    priceLabel: "Vanaf €150 per maand",
    unit: "per maand",
    note:
      "Exclusief btw. Advies op maat op basis van uw onderneming en doelen.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "Praktisch en concreet advies",
    "Meer grip op uw cijfers",
    "Fiscaal geoptimaliseerd",
    "Persoonlijke begeleiding",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Analyse van uw cijfers",
      description:
        "We analyseren omzet, kosten, marges en cashflow.",
    },
    {
      title: "Winstoptimalisatie",
      description:
        "Concrete aanbevelingen om rendement en liquiditeit te verbeteren.",
    },
    {
      title: "Belastingbesparing",
      description:
        "Signalering van fiscale kansen en aftrekposten.",
    },
    {
      title: "Investeringsadvies",
      description:
        "Ondersteuning bij investeringen en financieringsvraagstukken.",
    },
    {
      title: "Cashflowplanning",
      description:
        "Inzicht in toekomstige inkomsten en uitgaven.",
    },
    {
      title: "Persoonlijk overleg",
      description:
        "Regelmatig overleg met uw vaste financieel adviseur.",
    },
  ],

  includedDescription:
    "Praktisch financieel advies waarmee u betere beslissingen neemt en meer rendement behaalt.",

  includedFooterNote:
    "Inclusief persoonlijk overleg en concrete aanbevelingen op basis van uw actuele cijfers.",

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Meer winst",
      description:
        "Ontdek kansen om uw rendement structureel te verbeteren.",
    },
    {
      title: "Betere beslissingen",
      description:
        "Baseer keuzes op actuele en betrouwbare cijfers.",
    },
    {
      title: "Belasting besparen",
      description:
        "Maak optimaal gebruik van fiscale mogelijkheden.",
    },
    {
      title: "Meer financiële rust",
      description:
        "Weet precies waar uw onderneming financieel staat.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Analyse",
      description:
        "We analyseren uw financiële situatie en doelstellingen.",
    },
    {
      title: "Adviesgesprek",
      description:
        "U ontvangt concrete aanbevelingen en scenario's.",
    },
    {
      title: "Implementatie",
      description:
        "We helpen bij het doorvoeren van verbeteringen.",
    },
    {
      title: "Evaluatie",
      description:
        "We monitoren resultaten en sturen waar nodig bij.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Voor wie is financieel advies geschikt?",
      answer:
        "Voor ondernemers die meer grip willen krijgen op winst, cashflow en belastingbesparing.",
    },
    {
      question: "Is financieel advies ook mogelijk zonder volledige administratie?",
      answer:
        "Ja, ook als wij niet uw volledige administratie verzorgen, kunnen wij financieel advies geven.",
    },
    {
      question: "Hoe vaak plannen we overleg?",
      answer:
        "Dat bepalen we samen. Dit kan eenmalig, maandelijks of per kwartaal.",
    },
    {
      question: "Helpen jullie ook met investeringsbeslissingen?",
      answer:
        "Ja, wij adviseren over investeringen, financiering en rendementsberekeningen.",
    },
    {
      question: "Kan financieel advies belasting besparen?",
      answer:
        "Ja, wij signaleren structureel fiscale optimalisaties.",
    },
    {
      question: "Werken jullie landelijk?",
      answer:
        "Ja, wij adviseren ondernemers door heel Nederland.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* CTA's                                                                       */
  /* -------------------------------------------------------------------------- */
  primaryCtaText: "Plan gratis adviesgesprek",
  primaryCtaHref: "/contact",

  secondaryCtaText: "Bekijk tarieven",
  secondaryCtaHref: "/pakketten",

  /* -------------------------------------------------------------------------- */
  /* Overige instellingen                                                        */
  /* -------------------------------------------------------------------------- */
  featured: true,
  order: 4,

  relatedServices: [
    "administratie",
    "bv-administratie",
    "inkomstenbelasting",
    "jaarrekening",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle: "Financieel advies voor ondernemers | Unit AA",
    metaDescription:
      "Ontvang concreet financieel advies op basis van uw cijfers. Meer winst, betere beslissingen en belastingbesparing.",
    keywords: [
      "financieel advies ondernemer",
      "financieel adviseur mkb",
      "cashflow advies",
      "winstoptimalisatie",
      "belastingbesparing ondernemer",
    ],
  },
};