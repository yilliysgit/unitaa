// data/services/administratie.ts

import type { Service } from "@/types/service";

export const administratie: Service = {
  /* -------------------------------------------------------------------------- */
  /* Basisgegevens                                                               */
  /* -------------------------------------------------------------------------- */
  slug: "administratie",

  title: "Administratie uitbesteden",

  shortTitle: "Administratie",

  eyebrow: "Administratiekantoor in Amsterdam",

  subtitle:
    "Complete administratie, belastingaangiftes en advies vanaf €100 per maand.",

  description:
    "Wij verzorgen uw volledige administratie, verwerken facturen en bankmutaties, dienen uw btw-aangiftes in en zorgen dat u altijd actueel inzicht heeft in uw cijfers.",

  longDescription:
    "Besteed uw administratie uit aan Unit AA en voorkom onnodige stress, gemiste deadlines en fiscale verrassingen. Wij verzorgen uw volledige administratie: van facturen en bankmutaties tot btw-aangiftes, rapportages en persoonlijk advies. U krijgt een vast aanspreekpunt dat uw onderneming kent en actief met u meedenkt.",

  image: "/images/services/administratie.jpg",

  location:
    "Voor ondernemers in Amsterdam, Rotterdam, Utrecht en heel Nederland.",

  /* -------------------------------------------------------------------------- */
  /* Hero                                                                        */
  /* -------------------------------------------------------------------------- */
  trustItems: [
    "BTW-aangiftes altijd op tijd",
    "Vast aanspreekpunt",
    "Reactie binnen 24 uur",
    "Geen verborgen kosten",
  ],

  stats: [
    {
      value: "500+",
      label: "Klanten",
    },
    {
      value: "24u",
      label: "Reactietijd",
    },
    {
      value: "Vanaf €100",
      label: "Per maand",
    },
  ],

  testimonial: {
    quote:
      "Sinds Unit AA mijn administratie verzorgt, houd ik veel meer tijd over voor mijn klanten en hoef ik me geen zorgen meer te maken over belastingdeadlines.",
    author: "Mark de Vries",
    company: "ZZP Timmerman",
  },

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                     */
  /* -------------------------------------------------------------------------- */
  pricing: {
    startingPrice:100,
    priceLabel: "Vanaf €100 per maand",
    unit: "per maand",
    note:
      "Exclusief btw. Vast tarief op basis van de omvang van uw administratie.",
  },

  /* -------------------------------------------------------------------------- */
  /* Wat is inbegrepen                                                           */
  /* -------------------------------------------------------------------------- */
 includedItems: [
  {
    title: "Verwerking facturen",
    description: "..."
  },
    {
      title: "Bankmutaties",
      description:
        "Automatische bankkoppelingen zorgen voor een efficiënte en actuele administratie.",
    },
    {
      title: "BTW-aangiftes",
      description:
        "Uw aangiftes worden tijdig en zorgvuldig ingediend bij de Belastingdienst.",
    },
    {
      title: "Balans & resultaten",
      description:
        "Altijd inzicht in omzet, kosten, winst en de financiële positie van uw onderneming.",
    },
    {
      title: "Deadlinebewaking",
      description:
        "Wij bewaken alle fiscale deadlines zodat u geen boetes of rente betaalt.",
    },
    {
      title: "Fiscaal advies",
      description:
        "We signaleren kansen om belasting te besparen en uw structuur te optimaliseren.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Voordelen                                                                   */
  /* -------------------------------------------------------------------------- */
  benefits: [
    {
      title: "Meer tijd voor ondernemen",
      description:
        "Besteed uw administratie uit en focus volledig op uw klanten en de groei van uw onderneming.",
    },
    {
      title: "Altijd actuele cijfers",
      description:
        "U heeft continu inzicht in omzet, kosten en fiscale verplichtingen.",
    },
    {
      title: "Geen gemiste deadlines",
      description:
        "BTW-aangiftes en andere fiscale verplichtingen worden altijd op tijd verzorgd.",
    },
    {
      title: "Proactief advies",
      description:
        "Wij signaleren kansen voor belastingbesparing en financiële optimalisatie.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* Proces                                                                      */
  /* -------------------------------------------------------------------------- */
  process: [
    {
      title: "Kennismaking",
      description:
        "We bespreken uw onderneming, huidige administratie en wensen.",
    },
    {
      title: "Aanleveren administratie",
      description:
        "U levert documenten aan via e-mail, WhatsApp of uw online omgeving.",
    },
    {
      title: "Verwerking & controle",
      description:
        "Wij verwerken alle gegevens en controleren op volledigheid en fiscale kansen.",
    },
    {
      title: "Rapportage & advies",
      description:
        "U ontvangt actuele cijfers, heldere rapportages en persoonlijk advies.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* FAQ                                                                         */
  /* -------------------------------------------------------------------------- */
  faqs: [
    {
      question: "Wat kost administratie uitbesteden?",
      answer:
        "Onze tarieven starten vanaf €100 per maand, afhankelijk van de omvang en complexiteit van uw administratie.",
    },
    {
      question: "Moet ik zelf nog boekingen doen?",
      answer:
        "Nee. U levert uw documenten aan en wij verzorgen de volledige verwerking.",
    },
    {
      question: "Hoe lever ik mijn administratie aan?",
      answer:
        "Dat kan eenvoudig via e-mail, WhatsApp of een online omgeving.",
    },
    {
      question: "Kan ik tussendoor vragen stellen?",
      answer:
        "Ja, u heeft een vast aanspreekpunt voor al uw administratieve en fiscale vragen.",
    },
    {
      question: "Zit ik vast aan een contract?",
      answer:
        "Nee, wij werken transparant en zonder onnodig ingewikkelde contracten.",
    },
    {
      question: "Werken jullie alleen in Amsterdam?",
      answer:
        "Nee, wij ondersteunen ondernemers door heel Nederland.",
    },
  ],

  /* -------------------------------------------------------------------------- */
  /* SEO                                                                         */
  /* -------------------------------------------------------------------------- */
  seo: {
    metaTitle: "Administratie uitbesteden vanaf €100 p/m | Unit AA",
    metaDescription:
      "Besteed uw administratie uit aan Unit AA. Inclusief btw-aangiftes, rapportages en persoonlijk advies. Vast tarief vanaf €100 per maand.",
    keywords: [
      "administratie uitbesteden",
      "boekhouder Amsterdam",
      "administratiekantoor Amsterdam",
      "btw-aangifte",
      "boekhouding zzp",
    ],
  },
};