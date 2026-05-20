
// data/services/particuliere-aangifte.ts

import type { Service } from "@/types/service";

export const particuliereAangifte: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "particuliere-aangifte",

  title: "Particuliere belastingaangifte laten verzorgen",
  shortTitle: "Particuliere aangifte",

  eyebrow: "Aangifte inkomstenbelasting voor particulieren",

  subtitle:
    "Uw particuliere belastingaangifte correct opgesteld met maximaal gebruik van aftrekposten en heffingskortingen.",

  description:
    "Wij verzorgen uw aangifte inkomstenbelasting en zorgen dat u optimaal gebruikmaakt van alle fiscale voordelen.",

  longDescription:
    "Een particuliere belastingaangifte lijkt eenvoudig, maar bevat vaak meer mogelijkheden dan u denkt. Denk aan hypotheekrenteaftrek, zorgkosten, giften en andere aftrekposten. Unit AA zorgt voor een correcte aangifte en helpt u om niet meer belasting te betalen dan nodig.",

  image: "/images/services/particuliere-aangifte.jpg",

  imageAlt:
    "Particuliere belastingaangifte laten verzorgen door Unit AA",

  location:
    "Voor particulieren in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "Maximaal gebruik van aftrekposten",
    "Correct en tijdig ingediend",
    "Persoonlijke begeleiding",
    "Ondersteuning bij vragen van de Belastingdienst",
  ],

  stats: [
    {
      value: "€1.250",
      label: "Gem. belastingteruggave",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "Vanaf €75",
      label: "Per aangifte",
    },
  ],

  testimonial: {
    quote:
      "Ik kreeg meer terug dan verwacht en hoefde zelf nergens naar om te kijken.",
    author: "Anita S.",
    company: "Particulier",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice: 75,
    priceLabel: "Vanaf €75 per aangifte",
    unit: "per aangifte",
    note:
      "Exclusief btw. Vast tarief afhankelijk van de complexiteit van uw situatie.",
  },

  /* -------------------------------------------------------------------------- */
  /* Intro                                                                       */
  /* -------------------------------------------------------------------------- */
  introTrustItems: [
    "Controle op alle aftrekposten",
    "Maximaal belastingvoordeel",
    "Persoonlijke begeleiding",
    "Geen verrassingen achteraf",
  ],

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
  includedItems: [
    {
      title: "Inventarisatie situatie",
      description:
        "Wij brengen uw persoonlijke en fiscale situatie volledig in kaart.",
    },
    {
      title: "Controle aftrekposten",
      description:
        "Hypotheekrente, zorgkosten, giften en andere aftrekposten worden gecontroleerd.",
    },
    {
      title: "Opstellen aangifte",
      description:
        "Uw belastingaangifte wordt zorgvuldig opgesteld.",
    },
    {
      title: "Digitale indiening",
      description:
        "Wij dienen de aangifte tijdig in bij de Belastingdienst.",
    },
    {
      title: "Persoonlijke toelichting",
      description:
        "U ontvangt uitleg over de uitkomst en eventuele aandachtspunten.",
    },
    {
      title: "Ondersteuning bij vragen",
      description:
        "Wij helpen bij vragen of correspondentie van de Belastingdienst.",
    },
  ],

  includedDescription:
    "Een complete dienstverlening voor uw particuliere belastingaangifte, inclusief controle op alle fiscale voordelen.",

  includedFooterNote:
    "Inclusief persoonlijk advies en ondersteuning bij vragen van de Belastingdienst.",

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Maximaal belastingvoordeel",
      description:
        "Wij benutten alle beschikbare aftrekposten en heffingskortingen.",
    },
    {
      title: "Tijdsbesparing",
      description:
        "U hoeft zich niet te verdiepen in ingewikkelde belastingregels.",
    },
    {
      title: "Zekerheid",
      description:
        "Uw aangifte wordt correct en volgens actuele regelgeving opgesteld.",
    },
    {
      title: "Persoonlijke ondersteuning",
      description:
        "Wij beantwoorden uw vragen en helpen bij correspondentie met de Belastingdienst.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Gegevens aanleveren",
      description:
        "U levert uw documenten en gegevens digitaal aan.",
    },
    {
      title: "Controle en analyse",
      description:
        "Wij controleren uw situatie en fiscale mogelijkheden.",
    },
    {
      title: "Aangifte opstellen",
      description:
        "Uw aangifte wordt zorgvuldig opgesteld.",
    },
    {
      title: "Indienen en toelichten",
      description:
        "Na akkoord dienen wij de aangifte in en ontvangt u een toelichting.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Wat kost een particuliere belastingaangifte?",
      answer:
        "Onze tarieven starten vanaf €75 per aangifte, afhankelijk van de complexiteit.",
    },
    {
      question: "Controleren jullie alle aftrekposten?",
      answer:
        "Ja, wij controleren alle relevante aftrekposten en heffingskortingen.",
    },
    {
      question: "Helpen jullie bij vragen van de Belastingdienst?",
      answer:
        "Ja, wij ondersteunen u bij vragen of controles.",
    },
    {
      question: "Kan ik mijn aangifte volledig online aanleveren?",
      answer:
        "Ja, alle documenten kunnen eenvoudig digitaal worden aangeleverd.",
    },
    {
      question: "Hoe snel is mijn aangifte klaar?",
      answer:
        "In de meeste gevallen binnen enkele werkdagen nadat wij alle gegevens hebben ontvangen.",
    },
    {
      question: "Werken jullie landelijk?",
      answer:
        "Ja, wij verzorgen aangiftes voor particulieren in heel Nederland.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* CTA's                                                                       */
  /* -------------------------------------------------------------------------- */
  primaryCtaText: "Laat uw aangifte verzorgen",
  primaryCtaHref: "/contact",

  secondaryCtaText: "Bekijk tarieven",
  secondaryCtaHref: "/pakketten",

  /* -------------------------------------------------------------------------- */
  /* Overige instellingen                                                        */
  /* -------------------------------------------------------------------------- */
  featured: true,
  order: 7,

  relatedServices: [
    "inkomstenbelasting",
    "financieel-advies",
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle:
      "Particuliere belastingaangifte laten verzorgen | Unit AA",
    metaDescription:
      "Laat uw particuliere belastingaangifte professioneel verzorgen. Maximaal belastingvoordeel en volledige ondersteuning.",
    keywords: [
      "particuliere belastingaangifte",
      "belastingaangifte laten doen",
      "inkomstenbelasting particulier",
      "belastingteruggave",
      "aangifte inkomstenbelasting particulier",
    ],
  },
};