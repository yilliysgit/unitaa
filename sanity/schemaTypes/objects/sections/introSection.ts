// sanity/schemaTypes/objects/sections/introSection.ts
import { defineField, defineType } from "sanity";

export const introSection = defineType({
  name: "introSection",
  title: "Intro Sectie",
  type: "object",

  fields: [
    // ── Links ──────────────────────────────────────
    defineField({
      name: "eyebrow",
      title: "Eyebrow tekst",
      description: 'Bijv. "Administratiekantoor voor ondernemers"',
      type: "localeString",
    }),
    defineField({
      name: "title",
      title: "H2 — regel 1",
      type: "localeString",
    }),
    defineField({
      name: "titleAccent",
      title: "H2 — regel 2 (groen)",
      type: "localeString",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitel",
      type: "localeString",
    }),


  defineField({
  name: "body",
  title: "Body tekst",
  type: "object",
  fields: [
    defineField({
      name: "nl",
      title: "Nederlands",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "tr",
      title: "Türkçe",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
}),

    defineField({
      name: "primaryCtaText",
      title: "CTA knop 1 — label",
      type: "localeString",
    }),
    defineField({
      name: "primaryCtaLink",
      title: "CTA knop 1 — link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "CTA knop 2 — label",
      type: "localeString",
    }),
    defineField({
      name: "secondaryCtaLink",
      title: "CTA knop 2 — link",
      type: "string",
      initialValue: "/klantervaringen",
    }),

    // ── Benefits ───────────────────────────────────
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titel", type: "localeString" }),
            defineField({ name: "desc", title: "Omschrijving", type: "localeString" }),
            defineField({ name: "icon", title: "Icon naam", type: "string" }),
            defineField({
              name: "variant",
              title: "Kleur",
              type: "string",
              options: {
                list: [
                  { title: "Groen", value: "green" },
                  { title: "Blauw", value: "blue" },
                ],
                layout: "radio",
              },
              initialValue: "green",
            }),
          ],
          preview: {
            select: { title: "title.nl", subtitle: "desc.nl" },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    // ── Quote ──────────────────────────────────────
    defineField({
      name: "quoteText",
      title: "Quote — tekst",
      type: "localeText",
    }),
    defineField({
      name: "quoteAuthor",
      title: "Quote — auteur naam",
      type: "string",
    }),
    defineField({
      name: "quoteAuthorRole",
      title: "Quote — auteur functie",
      description: 'Bijv. "ZZP\'er in de bouw — Rotterdam"',
      type: "string",
    }),
    defineField({
      name: "quoteInitial",
      title: "Quote — initiaal (avatar)",
      type: "string",
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: "quoteSaving",
      title: "Quote — bedrag bespaard",
      description: 'Bijv. "€4.200"',
      type: "string",
    }),
    defineField({
      name: "quoteSavingLabel",
      title: "Quote — label bespaard",
      description: 'Bijv. "bespaard"',
      type: "localeString",
    }),

    // ── Social proof ───────────────────────────────
    defineField({
      name: "socialProofCount",
      title: "Social proof — aantal klanten",
      description: 'Bijv. "250+"',
      type: "string",
    }),
    defineField({
      name: "socialProofLabel",
      title: "Social proof — label",
      description: 'Bijv. "ondernemers gingen u voor"',
      type: "localeString",
    }),
    defineField({
      name: "socialProofScore",
      title: "Social proof — score",
      description: 'Bijv. "4.9"',
      type: "string",
    }),
    defineField({
      name: "socialProofAvatars",
      title: "Social proof — initialen avatars",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      initialValue: ["M", "J", "P"],
    }),
  ],
});