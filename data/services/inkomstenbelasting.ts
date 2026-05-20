// data/services/inkomstenbelasting.ts

import type { Service } from "@/types/service";

export const inkomstenbelasting: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "inkomstenbelasting",

  title: "Inkomstenbelasting aangifte uitbesteden",
  shortTitle: "Inkomstenbelasting",

  eyebrow: "Aangifte inkomstenbelasting laten verzorgen",

  subtitle:
    "Uw aangifte inkomstenbelasting correct opgesteld met maximaal gebruik van aftrekposten en fiscale voordelen.",

  description:
    "Wij verzorgen uw volledige aangifte inkomstenbelasting en zorgen dat u nooit meer belasting betaalt dan nodig.",

  longDescription:
    "De aangifte inkomstenbelasting bevat veel regels, aftrekposten en fiscale mogelijkheden. Unit AA zorgt voor een correcte aangifte en benut alle beschikbare voordelen, zodat u belasting bespaart en zekerheid heeft dat alles goed is geregeld.",

  image: "/images/services/inkomstenbelasting.jpg",

  imageAlt:
    "Aangifte inkomstenbelasting laten verzorgen door administratiekantoor Unit AA",

  location:
    "Voor ondernemers en particulieren in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "Maximaal gebruik van aftrekposten",
    "Correcte en tijdige aangifte",
    "Controle op fiscale voordelen",
    "Persoonlijk advies bij vragen",
  ],

  stats: [
    {
      value: "€2.800",
      label: "Gem. belastingbesparing",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "500+",
      label: "Tevreden klanten",
    },
  ],

  testimonial: {
    quote:
      "Unit AA vond aftrekposten die ik zelf over het hoofd had gezien. Daardoor kreeg ik een mooie belastingteruggave.",
    author: "Linda R.",
    company: "ZZP Grafisch Ontwerper",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice: 95,
    priceLabel: "Vanaf €95 per aangifte",
    unit: "per aangifte",
    note:
      "Exclusief btw. Vast tarief afhankelijk van de complexiteit van uw situatie.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "Maximaal fiscaal voordeel",
    "Controle op alle aftrekposten",
    "Persoonlijk advies",
    "Geen verrassingen achteraf",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Inventarisatie situatie",
      description:
        "Wij brengen uw inkomsten, aftrekposten en fiscale situatie volledig in kaart.",
    },
    {
      title: "Controle aftrekposten",
      description:
        "Alle relevante aftrekposten en heffingskortingen worden meegenomen.",
    },
    {
      title: "Opstellen aangifte",
      description:
        "Uw aangifte inkomstenbelasting wordt zorgvuldig opgesteld.",
    },
    {
      title: "Indienen bij Belastingdienst",
      description:
        "Wij dienen de aangifte digitaal en tijdig voor u in.",
    },
    {
      title: "Toelichting en advies",
      description:
        "U ontvangt uitleg en persoonlijk advies over de uitkomst.",
    },
    {
      title: "Ondersteuning bij vragen",
      description:
        "Wij helpen bij vragen van de Belastingdienst.",
    },
  ],

  includedDescription:
    "Een complete dienstverlening voor uw aangifte inkomstenbelasting, inclusief controle op alle fiscale voordelen.",

  includedFooterNote:
    "Inclusief persoonlijke begeleiding en ondersteuning bij vragen van de Belastingdienst.",

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Maximaal belastingvoordeel",
      description:
        "Wij benutten alle beschikbare aftrekposten en fiscale regelingen.",
    },
    {
      title: "Zekerheid",
      description:
        "Uw aangifte wordt correct en volgens de actuele wetgeving opgesteld.",
    },
    {
      title: "Tijdsbesparing",
      description:
        "U hoeft zich niet te verdiepen in complexe belastingregels.",
    },
    {
      title: "Persoonlijk advies",
      description:
        "U krijgt inzicht in uw belastingpositie en optimalisaties.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Gegevens aanleveren",
      description:
        "U levert uw gegevens en relevante documenten digitaal aan.",
    },
    {
      title: "Analyse en controle",
      description:
        "Wij controleren uw situatie en fiscale mogelijkheden.",
    },
    {
      title: "Aangifte opstellen",
      description:
        "Uw aangifte wordt zorgvuldig opgesteld en met u afgestemd.",
    },
    {
      title: "Indienen",
      description:
        "Na akkoord dienen wij de aangifte digitaal in.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Wat kost het laten verzorgen van mijn aangifte inkomstenbelasting?",
      answer:
        "Onze tarieven starten vanaf €95 per aangifte, afhankelijk van de complexiteit van uw situatie.",
    },
    {
      question: "Kunnen jullie ook aftrekposten controleren?",
      answer:
        "Ja, wij controleren alle relevante aftrekposten en heffingskortingen.",
    },
    {
      question: "Helpen jullie bij vragen van de Belastingdienst?",
      answer:
        "Ja, wij ondersteunen u bij eventuele vragen of controles.",
    },
    {
      question: "Is dit ook voor ondernemers?",
      answer:
        "Ja, zowel ondernemers als particulieren kunnen hun aangifte door ons laten verzorgen.",
    },
    {
      question: "Hoe snel is mijn aangifte klaar?",
      answer:
        "In de meeste gevallen verwerken wij uw aangifte binnen enkele werkdagen nadat wij alle gegevens hebben ontvangen.",
    },
    {
      question: "Werken jullie landelijk?",
      answer:
        "Ja, wij verzorgen aangiftes voor klanten in heel Nederland.",
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
  order: 5,

  relatedServices: [
    "administratie",
    "btw-aangifte",
    "financieel-advies",
    "particuliere-aangifte",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle:
      "Aangifte inkomstenbelasting laten verzorgen | Unit AA",
    metaDescription:
      "Laat uw inkomstenbelasting verzorgen door Unit AA. Correct, fiscaal optimaal en zonder zorgen.",
    keywords: [
      "inkomstenbelasting uitbesteden",
      "aangifte inkomstenbelasting laten doen",
      "belastingaangifte ondernemer",
      "belastingteruggave",
      "inkomstenbelasting boekhouder",
    ],
  },
};