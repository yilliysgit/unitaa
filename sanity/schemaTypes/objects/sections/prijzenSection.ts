// sanity/schemaTypes/objects/sections/prijzenSection.ts
import { defineField, defineType } from "sanity";

export const prijzenSection = defineType({
  name: "prijzenSection",
  title: "Prijzen Sectie",
  type: "object",

  fields: [
    // ── Header ─────────────────────────────────────
    defineField({
      name: "eyebrow",
      title: "Eyebrow tekst",
      type: "localeString",
    }),
    defineField({
      name: "title",
      title: "Titel",
      type: "localeString",
    }),
    defineField({
      name: "titleAccent",
      title: "Titel accent (groen)",
      type: "localeString",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitel",
      type: "localeString",
    }),
    defineField({
      name: "ctaText",
      title: "CTA tekst",
      description: 'Bijv. "Bekijk alle pakketten"',
      type: "localeString",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA link",
      type: "string",
      initialValue: "/pakketten",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer tekst",
      description: 'Bijv. "Alle tarieven zijn exclusief btw..."',
      type: "localeText",
    }),

    // ── Extra dienst blok ──────────────────────────
    defineField({
      name: "extraDienst",
      title: "Extra Dienst Blok",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", description: 'Bijv. "Extra dienst"', type: "localeString" }),
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "description", title: "Omschrijving", type: "localeText" }),
        defineField({ name: "price", title: "Prijs", description: 'Bijv. "€950"', type: "string" }),
        defineField({ name: "pricePrefix", title: "Prijs prefix", description: 'Bijv. "vanaf"', type: "localeString" }),
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "localeString" }),
              ],
              preview: {
                select: { title: "label.nl" },
              },
            },
          ],
        }),
        defineField({
          name: "featuresNote",
          title: "Features notitie",
          description: 'Bijv. "Afhankelijk van financiering..."',
          type: "localeString",
        }),
        defineField({ name: "ctaText", title: "CTA tekst", type: "localeString" }),
        defineField({ name: "ctaLink", title: "CTA link", type: "string", initialValue: "/contact" }),
      ],
    }),
  ],
});