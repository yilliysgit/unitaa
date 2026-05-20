// data/services/jaarrekening.ts

import type { Service } from "@/types/service";

export const jaarrekening: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "jaarrekening",

  title: "Jaarrekening laten opstellen",
  shortTitle: "Jaarrekening",

  eyebrow: "Jaarrekening voor eenmanszaken en BV's",

  subtitle:
    "Professioneel opgestelde jaarrekening inclusief toelichting en fiscale afstemming.",

  description:
    "Wij stellen uw jaarrekening zorgvuldig op en zorgen dat deze aansluit op uw administratie en fiscale aangiftes.",

  longDescription:
    "De jaarrekening is een belangrijk financieel document voor uw onderneming. Unit AA zorgt voor een correcte samenstelling van de balans, winst- en verliesrekening en eventuele toelichting. Voor BV's verzorgen wij desgewenst ook de deponering bij de Kamer van Koophandel.",

  image: "/images/services/jaarrekening.jpg",

  imageAlt:
    "Jaarrekening laten opstellen door administratiekantoor Unit AA",

  location:
    "Voor ondernemers in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "Professioneel samengesteld",
    "Aansluiting met administratie",
    "Geschikt voor bank en Belastingdienst",
    "Inclusief persoonlijk advies",
  ],

  stats: [
    {
      value: "500+",
      label: "Jaarrekeningen opgesteld",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "Vanaf €450",
      label: "Per jaarrekening",
    },
  ],

  testimonial: {
    quote:
      "Onze jaarrekening was snel klaar en direct bruikbaar voor de bank en belastingaangifte.",
    author: "Dennis V.",
    company: "DGA van een holding BV",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice: 450,
    priceLabel: "Vanaf €450 per jaarrekening",
    unit: "per jaarrekening",
    note:
      "Exclusief btw. Tarief afhankelijk van rechtsvorm en complexiteit.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "Correct en volledig opgesteld",
    "Geschikt voor bank en Belastingdienst",
    "Inclusief toelichting",
    "Persoonlijk contact",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Balans",
      description:
        "Overzicht van bezittingen, schulden en eigen vermogen.",
    },
    {
      title: "Winst- en verliesrekening",
      description:
        "Inzicht in omzet, kosten en resultaat over het boekjaar.",
    },
    {
      title: "Toelichting",
      description:
        "Waar nodig voorzien van aanvullende specificaties en toelichtingen.",
    },
    {
      title: "Aansluiting met aangiftes",
      description:
        "Afstemming met uw administratie en fiscale aangiftes.",
    },
    {
      title: "KvK-deponering",
      description:
        "Voor BV's verzorgen wij desgewenst deponering bij de Kamer van Koophandel.",
    },
    {
      title: "Bespreking",
      description:
        "Persoonlijke toelichting op de cijfers en aandachtspunten.",
    },
  ],

  includedDescription:
    "Een complete en professioneel samengestelde jaarrekening die voldoet aan alle relevante eisen.",

  includedFooterNote:
    "Inclusief controle, afstemming en persoonlijke toelichting op uw cijfers.",

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Professionele uitstraling",
      description:
        "Een nette jaarrekening voor banken, investeerders en andere partijen.",
    },
    {
      title: "Volledige compliance",
      description:
        "Uw jaarrekening voldoet aan de wettelijke en fiscale eisen.",
    },
    {
      title: "Inzicht in prestaties",
      description:
        "U krijgt helder inzicht in de financiële ontwikkeling van uw onderneming.",
    },
    {
      title: "Persoonlijke toelichting",
      description:
        "Wij bespreken de cijfers en signaleren aandachtspunten.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Gegevens verzamelen",
      description:
        "We verzamelen administratie en aanvullende informatie.",
    },
    {
      title: "Samenstellen",
      description:
        "Wij stellen de jaarrekening zorgvuldig op.",
    },
    {
      title: "Bespreken",
      description:
        "We lichten de cijfers en bevindingen met u door.",
    },
    {
      title: "Afronding",
      description:
        "Na akkoord ontvangt u de definitieve jaarrekening.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Wat kost een jaarrekening?",
      answer:
        "Onze tarieven starten vanaf €450, afhankelijk van de rechtsvorm en complexiteit.",
    },
    {
      question: "Is deponering bij de KvK inbegrepen?",
      answer:
        "Voor BV's kunnen wij de deponering bij de Kamer van Koophandel verzorgen.",
    },
    {
      question: "Heb ik als eenmanszaak ook een jaarrekening nodig?",
      answer:
        "Ja, een jaarrekening geeft inzicht in uw resultaten en vormt de basis voor fiscale aangiftes.",
    },
    {
      question: "Hoe lang duurt het opstellen van een jaarrekening?",
      answer:
        "Dit hangt af van de volledigheid van uw administratie. In de meeste gevallen enkele werkdagen tot enkele weken.",
    },
    {
      question: "Kan ik de jaarrekening gebruiken voor een hypotheekaanvraag?",
      answer:
        "Ja, banken en hypotheekverstrekkers gebruiken de jaarrekening vaak als onderbouwing.",
    },
    {
      question: "Werken jullie landelijk?",
      answer:
        "Ja, wij stellen jaarrekeningen op voor ondernemers in heel Nederland.",
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
  order: 6,

  relatedServices: [
    "administratie",
    "bv-administratie",
    "inkomstenbelasting",
    "financieel-advies",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle: "Jaarrekening laten opstellen | Vanaf €450 | Unit AA",
    metaDescription:
      "Laat uw jaarrekening professioneel opstellen door Unit AA. Inclusief toelichting, fiscale afstemming en persoonlijk advies.",
    keywords: [
      "jaarrekening laten opstellen",
      "jaarrekening boekhouder",
      "jaarrekening bv",
      "jaarrekening eenmanszaak",
      "kvk deponering",
    ],
  },
};