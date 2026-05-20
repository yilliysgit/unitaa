// data/services/salarisadministratie.ts

import type { Service } from "@/types/service";

export const salarisadministratie: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "salarisadministratie",

  title: "Salarisadministratie uitbesteden",
  shortTitle: "Salarisadministratie",

  eyebrow: "Loonadministratie voor werkgevers",

  subtitle:
    "Correcte en tijdige verwerking van salarissen, loonstroken en loonaangiftes.",

  description:
    "Wij verzorgen uw volledige salarisadministratie, inclusief loonstroken, loonaangiftes en ondersteuning bij personeelsvragen.",

  longDescription:
    "Een correcte salarisadministratie is essentieel om fouten, boetes en ontevreden medewerkers te voorkomen. Unit AA verzorgt uw loonadministratie volledig: van salarisverwerking en loonstroken tot loonaangiftes en advies over werkgeversverplichtingen.",

  image: "/images/services/salarisadministratie.jpg",

  imageAlt:
    "Salarisadministratie uitbesteden aan administratiekantoor Unit AA",

  location:
    "Voor werkgevers in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "Loonstroken en loonaangiftes op tijd",
    "Verwerking van DGA-salaris en medewerkers",
    "Ondersteuning bij personeelsvragen",
    "Vast aanspreekpunt",
  ],

  stats: [
    {
      value: "100%",
      label: "Tijdige loonaangiftes",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "Vanaf €25",
      label: "Per medewerker",
    },
  ],

  testimonial: {
    quote:
      "De salarisadministratie loopt foutloos en ik weet zeker dat alles op tijd wordt geregeld.",
    author: "Martijn P.",
    company: "MKB ondernemer",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice: 25,
    priceLabel: "Vanaf €25 per medewerker per maand",
    unit: "per medewerker per maand",
    note:
      "Exclusief btw. Tarief afhankelijk van het aantal medewerkers en mutaties.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "Loonstroken op tijd",
    "Loonaangiftes correct ingediend",
    "Ondersteuning bij vragen",
    "Persoonlijk contact",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Salarisverwerking",
      description:
        "Maandelijkse verwerking van salarissen en mutaties.",
    },
    {
      title: "Loonstroken",
      description:
        "Correcte loonstroken voor alle medewerkers.",
    },
    {
      title: "Loonaangiftes",
      description:
        "Tijdige aangifte loonheffingen bij de Belastingdienst.",
    },
    {
      title: "Jaaropgaven",
      description:
        "Opstellen en verstrekken van jaaropgaven.",
    },
    {
      title: "DGA-salaris",
      description:
        "Verwerking van gebruikelijk loon voor directeur-grootaandeelhouders.",
    },
    {
      title: "Personeelsadvies",
      description:
        "Ondersteuning bij vragen over salaris en werkgeversverplichtingen.",
    },
  ],

  includedDescription:
    "Een complete salarisadministratie inclusief loonstroken, loonaangiftes en personeelsadvies.",

  includedFooterNote:
    "Inclusief persoonlijk contact en ondersteuning bij salaris- en personeelsvragen.",

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Geen fouten of boetes",
      description:
        "Wij zorgen voor een correcte en tijdige verwerking van alle loongegevens.",
    },
    {
      title: "Tevreden medewerkers",
      description:
        "Salarissen en loonstroken worden altijd op tijd verwerkt.",
    },
    {
      title: "Volledig ontzorgd",
      description:
        "U hoeft zich niet te verdiepen in complexe loonregels.",
    },
    {
      title: "Persoonlijk advies",
      description:
        "Ondersteuning bij vragen over salaris, contracten en verplichtingen.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Mutaties aanleveren",
      description:
        "U geeft salariswijzigingen en mutaties digitaal door.",
    },
    {
      title: "Verwerking",
      description:
        "Wij verwerken salarissen, inhoudingen en premies.",
    },
    {
      title: "Loonstroken & aangifte",
      description:
        "Loonstroken worden opgesteld en loonaangiftes ingediend.",
    },
    {
      title: "Nazorg",
      description:
        "U ontvangt alle documenten en kunt vragen direct stellen.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Wat kost salarisadministratie?",
      answer:
        "Onze tarieven starten vanaf €25 per medewerker per maand.",
    },
    {
      question: "Verzorgen jullie ook loonaangiftes?",
      answer:
        "Ja, wij verzorgen alle loonaangiftes bij de Belastingdienst.",
    },
    {
      question: "Kunnen jullie ook DGA-salarissen verwerken?",
      answer:
        "Ja, wij verzorgen ook de salarisadministratie voor DGA's.",
    },
    {
      question: "Maken jullie jaaropgaven?",
      answer:
        "Ja, aan het einde van het jaar verzorgen wij alle jaaropgaven.",
    },
    {
      question: "Helpen jullie bij personeelsvragen?",
      answer:
        "Ja, u kunt bij ons terecht voor praktische ondersteuning.",
    },
    {
      question: "Werken jullie landelijk?",
      answer:
        "Ja, wij verzorgen salarisadministraties voor werkgevers in heel Nederland.",
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
  order: 8,

  relatedServices: [
    "bv-administratie",
    "administratie",
    "jaarrekening",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle:
      "Salarisadministratie uitbesteden | Vanaf €25 per medewerker | Unit AA",
    metaDescription:
      "Laat uw salarisadministratie verzorgen door Unit AA. Inclusief loonstroken, loonaangiftes en personeelsadvies.",
    keywords: [
      "salarisadministratie uitbesteden",
      "loonadministratie",
      "loonstroken laten maken",
      "loonaangifte",
      "dga salaris",
    ],
  },
};