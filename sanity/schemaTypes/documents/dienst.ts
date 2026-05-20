// sanity/schemaTypes/documents/dienst.ts
import { defineField, defineType } from "sanity";

export const dienst = defineType({
  name: "dienst",
  title: "Dienst",
  type: "document",

  groups: [
    { name: "basis", title: "Basis" },
    { name: "hero", title: "Hero" },
    { name: "content", title: "Content" },
    { name: "included", title: "Inbegrepen" },
    { name: "benefits", title: "Voordelen" },
    { name: "process", title: "Proces" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    // ── Basis ─────────────────────────────────────
    defineField({
      name: "title",
      title: "Titel",
      type: "localeString",
      validation: (Rule) => Rule.required(),
      group: "basis",
    }),
    defineField({
      name: "shortTitle",
      title: "Korte titel",
      description: 'Bijv. "Administratie" ipv "Administratie uitbesteden"',
      type: "localeString",
      group: "basis",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "object",
      group: "basis",
      fields: [
        defineField({ name: "nl", title: "Nederlands", type: "slug", options: { source: "title.nl" } }),
        defineField({ name: "en", title: "English", type: "slug", options: { source: "title.en" } }),
        defineField({ name: "tr", title: "Türkçe", type: "slug", options: { source: "title.tr" } }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon naam",
      description: 'Lucide icon naam, bijv. "Calculator"',
      type: "string",
      group: "basis",
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 0,
      group: "basis",
    }),
    defineField({
      name: "showOnHome",
      title: "Tonen op homepage",
      type: "boolean",
      initialValue: true,
      group: "basis",
    }),

    // ── Hero ──────────────────────────────────────
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitel",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "description",
      title: "Omschrijving",
      description: "Tekst onder de subtitel in de hero sectie",
      type: "localeText",
      group: "hero",
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "badgeTitle",
      title: "Badge titel",
      description: 'Bijv. "Alles onder één dak"',
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "badgeSubtitle",
      title: "Badge subtitel",
      description: 'Bijv. "Van factuur tot aangifte"',
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "microTrust",
      title: "Micro trust tekst",
      description: 'Bijv. "Geen verrassingen — eerst een heldere offerte"',
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "trustItems",
      title: "Trust items",
      type: "array",
      group: "hero",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "localeString" }),
      ], preview: { select: { title: "label.nl" } } }],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "hero",
      of: [{ type: "object", fields: [
        defineField({ name: "value", title: "Waarde", type: "string" }),
        defineField({ name: "label", title: "Label", type: "localeString" }),
        defineField({ name: "icon", title: "Icon naam", type: "string" }),
      ], preview: { select: { title: "value", subtitle: "label.nl" } } }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "quote", title: "Quote", type: "localeText" }),
        defineField({ name: "author", title: "Auteur", type: "string" }),
        defineField({ name: "company", title: "Bedrijf", type: "string" }),
      ],
    }),
    defineField({
      name: "location",
      title: "Locatie tekst",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "primaryCtaText",
      title: "CTA knop 1 — label",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "primaryCtaLink",
      title: "CTA knop 1 — link",
      type: "string",
      initialValue: "/contact",
      group: "hero",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "CTA knop 2 — label",
      type: "localeString",
      group: "hero",
    }),
    defineField({
      name: "secondaryCtaLink",
      title: "CTA knop 2 — link",
      type: "string",
      initialValue: "/pakketten",
      group: "hero",
    }),

    // ── Content ───────────────────────────────────
    defineField({
      name: "shortDesc",
      title: "Korte omschrijving",
      description: "Voor de diensten grid",
      type: "localeString",
      group: "content",
    }),
    defineField({
      name: "longDesc",
      title: "Lange omschrijving",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "nl", title: "Nederlands", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "en", title: "English", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "tr", title: "Türkçe", type: "array", of: [{ type: "block" }] }),
      ],
    }),
    defineField({
      name: "introTrustItems",
      title: "Intro trust items",
      type: "array",
      group: "content",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "localeString" }),
      ], preview: { select: { title: "label.nl" } } }],
    }),
    defineField({
      name: "pricing",
      title: "Prijsinformatie",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "startingPrice", title: "Vanaf prijs", type: "string" }),
        defineField({ name: "priceSuffix", title: "Prijs suffix", type: "localeString" }),
        defineField({ name: "priceNote", title: "Prijs notitie", type: "localeText" }),
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA tekst",
      type: "localeString",
      group: "content",
    }),

    // ── Inbegrepen ────────────────────────────────
    defineField({
      name: "includedEyebrow",
      title: "Inbegrepen eyebrow",
      type: "localeString",
      group: "included",
    }),
    defineField({
      name: "includedTitle",
      title: "Inbegrepen titel",
      type: "localeString",
      group: "included",
    }),
    defineField({
      name: "includedSubtitle",
      title: "Inbegrepen subtitel",
      type: "localeText",
      group: "included",
    }),
    defineField({
      name: "includedItems",
      title: "Inbegrepen items",
      type: "array",
      group: "included",
      of: [{ type: "object", fields: [
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "description", title: "Omschrijving", type: "localeText" }),
        defineField({ name: "icon", title: "Icon naam", type: "string", description: 'Bijv. "FileText", "Shield", "Clock"' }),
      ], preview: { select: { title: "title.nl" } } }],
    }),
    defineField({
      name: "includedFootnote",
      title: "Voetnoot",
      type: "localeText",
      group: "included",
    }),

    // ── Voordelen ─────────────────────────────────
    defineField({
      name: "benefitsEyebrow",
      title: "Voordelen eyebrow",
      type: "localeString",
      group: "benefits",
    }),
    defineField({
      name: "benefitsTitle",
      title: "Voordelen titel",
      type: "localeString",
      group: "benefits",
    }),
    defineField({
      name: "benefitsSubtitle",
      title: "Voordelen subtitel",
      type: "localeText",
      group: "benefits",
    }),
    defineField({
      name: "benefits",
      title: "Voordelen",
      type: "array",
      group: "benefits",
      of: [{ type: "object", fields: [
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "description", title: "Omschrijving", type: "localeText" }),
        defineField({ name: "icon", title: "Icon naam", type: "string" }),
      ], preview: { select: { title: "title.nl" } } }],
    }),

    // ── Proces ────────────────────────────────────
    defineField({
      name: "processEyebrow",
      title: "Proces eyebrow",
      type: "localeString",
      group: "process",
    }),
    defineField({
      name: "processTitle",
      title: "Proces titel",
      type: "localeString",
      group: "process",
    }),
    defineField({
      name: "processSubtitle",
      title: "Proces subtitel",
      type: "localeText",
      group: "process",
    }),
    defineField({
      name: "process",
      title: "Proces stappen",
      type: "array",
      group: "process",
      of: [{ type: "object", fields: [
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "description", title: "Omschrijving", type: "localeText" }),
      ], preview: { select: { title: "title.nl" } } }],
    }),

    // ── FAQ ───────────────────────────────────────

    defineField({ name: "faqEyebrow", title: "FAQ eyebrow", type: "localeString", group: "faq" }),
defineField({ name: "faqTitle", title: "FAQ titel", type: "localeString", group: "faq" }),
defineField({ name: "faqSubtitle", title: "FAQ subtitel", type: "localeText", group: "faq" }),

    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      group: "faq",
      of: [{ type: "object", fields: [
        defineField({ name: "question", title: "Vraag", type: "localeString" }),
        defineField({ name: "answer", title: "Antwoord", type: "object", fields: [
          defineField({ name: "nl", title: "Nederlands", type: "array", of: [{ type: "block" }] }),
          defineField({ name: "en", title: "English", type: "array", of: [{ type: "block" }] }),
          defineField({ name: "tr", title: "Türkçe", type: "array", of: [{ type: "block" }] }),
        ]}),
      ], preview: { select: { title: "question.nl" } } }],
    }),

    // ── CTA ───────────────────────────────────────
defineField({ name: "ctaEyebrow", title: "CTA eyebrow", type: "localeString", group: "cta" }),
defineField({ name: "ctaTitle", title: "CTA titel", type: "localeString", group: "cta" }),
defineField({ name: "ctaTitleAccent", title: "CTA titel accent", type: "localeString", group: "cta" }),
defineField({ name: "ctaDescription", title: "CTA omschrijving", type: "localeText", group: "cta" }),
defineField({ name: "ctaTrustItems", title: "CTA trust items", type: "array", group: "cta",
  of: [{ type: "object", fields: [
    defineField({ name: "label", title: "Label", type: "localeString" }),
  ], preview: { select: { title: "label.nl" } } }],
}),
defineField({ name: "ctaPrimaryText", title: "CTA knop 1 label", type: "localeString", group: "cta" }),
defineField({ name: "ctaPrimaryLink", title: "CTA knop 1 link", type: "string", initialValue: "/contact", group: "cta" }),
defineField({ name: "ctaSecondaryText", title: "CTA knop 2 label", type: "localeString", group: "cta" }),
defineField({ name: "ctaSecondaryLink", title: "CTA knop 2 link", type: "string", group: "cta" }),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "SEO — titel",
      type: "localeString",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO — beschrijving",
      type: "localeText",
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: "title.nl",
      subtitle: "icon",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle, media };
    },
  },
});