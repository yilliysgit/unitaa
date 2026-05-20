// data/services/btw-aangifte.ts

import type { Service } from "@/types/service";

export const btwAangifte: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "btw-aangifte",

  title: "BTW-aangifte uitbesteden",
  shortTitle: "BTW-aangifte",

  eyebrow: "BTW-aangifte laten verzorgen",

  subtitle:
    "Uw BTW-aangifte altijd correct en op tijd ingediend, zonder stress of risico op boetes.",

  description:
    "Wij controleren uw administratie, berekenen de verschuldigde btw en dienen uw aangifte tijdig in bij de Belastingdienst.",

  longDescription:
    "Met Unit AA weet u zeker dat uw BTW-aangifte correct wordt opgesteld en altijd op tijd wordt ingediend. Wij controleren uw administratie, signaleren afwijkingen en zorgen dat u nooit een deadline mist.",

  image: "/images/services/btw-aangifte.jpg",

  imageAlt:
    "BTW-aangifte laten verzorgen door administratiekantoor Unit AA",

  location:
    "Voor ondernemers in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "BTW-aangifte altijd vóór de deadline ingediend",
    "Controle op aftrekbare voorbelasting",
    "Signalering van fiscale risico's",
    "Vast aanspreekpunt voor al uw vragen",
  ],

  stats: [
    {
      value: "0",
      label: "Gemiste deadlines",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "100%",
      label: "Tijdig ingediend",
    },
  ],

  testimonial: {
    quote:
      "Mijn BTW-aangifte wordt nu altijd op tijd gedaan en ik weet zeker dat alles klopt.",
    author: "Sophie M.",
    company: "ZZP Marketing Consultant",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice:100,
    priceLabel: "Vanaf €100 per maand",
    unit: "per maand",
    note:
      "Exclusief btw. Vast tarief afhankelijk van de omvang van uw administratie.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "BTW-aangifte altijd op tijd",
    "Controle op aftrekbare btw",
    "Persoonlijk contact",
    "Geen risico op boetes",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Controle administratie",
      description:
        "Wij controleren uw administratie op volledigheid en fiscale juistheid.",
    },
    {
      title: "BTW-berekening",
      description:
        "De verschuldigde en terug te vorderen btw wordt zorgvuldig berekend.",
    },
    {
      title: "Voorbelastingcontrole",
      description:
        "We controleren of alle aftrekbare btw correct is meegenomen.",
    },
    {
      title: "Indiening Belastingdienst",
      description:
        "Uw aangifte wordt elektronisch en tijdig ingediend.",
    },
    {
      title: "Deadlinebewaking",
      description:
        "Wij bewaken alle deadlines zodat u geen boetes riskeert.",
    },
    {
      title: "Persoonlijk advies",
      description:
        "U kunt altijd terecht met vragen over uw btw en administratie.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Geen risico op boetes",
      description:
        "Uw BTW-aangifte wordt altijd op tijd ingediend.",
    },
    {
      title: "Fiscaal optimaal",
      description:
        "Wij controleren of alle aftrekbare btw correct wordt meegenomen.",
    },
    {
      title: "Volledig ontzorgd",
      description:
        "U hoeft zelf niets meer uit te rekenen of in te dienen.",
    },
    {
      title: "Persoonlijk advies",
      description:
        "Bij vragen krijgt u direct ondersteuning van uw vaste aanspreekpunt.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Administratie aanleveren",
      description:
        "U levert uw facturen, bonnetjes en bankgegevens digitaal aan.",
    },
    {
      title: "Controle en berekening",
      description:
        "Wij controleren alle gegevens en berekenen uw btw.",
    },
    {
      title: "Indienen aangifte",
      description:
        "De BTW-aangifte wordt tijdig ingediend bij de Belastingdienst.",
    },
    {
      title: "Bevestiging & advies",
      description:
        "U ontvangt een overzicht en eventueel aanvullend advies.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Hoe vaak moet ik BTW-aangifte doen?",
      answer:
        "De meeste ondernemers doen ieder kwartaal BTW-aangifte. In sommige gevallen is dit maandelijks of jaarlijks.",
    },
    {
      question: "Wat gebeurt er als ik te laat ben?",
      answer:
        "Bij te late indiening kan de Belastingdienst een boete opleggen. Wij bewaken uw deadlines zodat dit niet gebeurt.",
    },
    {
      question: "Controleren jullie ook mijn administratie?",
      answer:
        "Ja, wij controleren uw administratie zorgvuldig voordat de BTW-aangifte wordt ingediend.",
    },
    {
      question: "Kan ik alleen mijn BTW-aangifte uitbesteden?",
      answer:
        "Ja, dat is mogelijk. We bespreken graag welke oplossing het beste bij uw onderneming past.",
    },
    {
      question: "Krijg ik hulp bij vragen van de Belastingdienst?",
      answer:
        "Ja, wij ondersteunen u bij vragen of controles met betrekking tot uw BTW-aangifte.",
    },
    {
      question: "Werken jullie alleen in Amsterdam?",
      answer:
        "Nee, wij verzorgen BTW-aangiftes voor ondernemers in heel Nederland.",
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
  order: 2,

  relatedServices: [
    "administratie",
    "inkomstenbelasting",
    "jaarrekening",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle:
      "BTW-aangifte uitbesteden | Altijd op tijd en correct | Unit AA",
    metaDescription:
      "Laat uw BTW-aangifte verzorgen door Unit AA. Correct, tijdig en zonder zorgen. Voor ondernemers in Amsterdam en heel Nederland.",
    keywords: [
      "btw aangifte uitbesteden",
      "btw aangifte laten doen",
      "btw aangifte boekhouder",
      "btw aangifte amsterdam",
    ],
  },
};