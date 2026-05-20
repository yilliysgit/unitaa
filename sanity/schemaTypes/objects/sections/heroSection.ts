// sanity/schemaTypes/objects/heroSection.ts
import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Sectie",
  type: "object",

  fields: [
    defineField({
      name: "badge",
      title: "Badge tekst",
      type: "localeString",
    }),
    defineField({
      name: "title",
      title: "H1 — regel 1",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleAccent",
      title: "H1 — regel 2 (groen)",
      type: "localeString",
    }),
    defineField({
      name: "description",
      title: "Subtekst",
      type: "localeText",
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
      initialValue: "/pakketten",
    }),
    defineField({
      name: "trustItems",
      title: "Trust items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "localeString",
            }),
            defineField({
              name: "icon",
              title: "Icon naam",
              description: 'Lucide icon naam, bijv. "Clock" of "UserCheck"',
              type: "string",
            }),
          ],
          preview: {
            select: { title: "label.nl", subtitle: "icon" },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "floatingPill",
      title: "Floating pill tekst",
      type: "localeString",
    }),
    defineField({
      name: "cardLabel",
      title: "Kaart — label",
      type: "localeString",
    }),
    defineField({
      name: "cardTitle",
      title: "Kaart — titel",
      type: "localeString",
    }),
    defineField({
      name: "cardTitleAccent",
      title: "Kaart — titel accent (groen)",
      type: "localeString",
    }),

    defineField({
  name: "cardPricePrefix",
  title: "Kaart — prijs prefix",
  description: "Bijv. 'Vanaf' / 'From' / 'başlangıç fiyatıyla'",
  type: "localeString",
}),

    defineField({
      name: "cardPrice",
      title: "Kaart — prijs",
      type: "string",
      initialValue: "€100",
    }),
    defineField({
      name: "cardPriceLabel",
      title: "Kaart — prijs label",
      type: "localeString",
    }),
    defineField({
      name: "cardTags",
      title: "Kaart — tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      initialValue: ["ZZP", "VOF", "BV", "Particulier"],
    }),
    defineField({
      name: "kpis",
      title: "KPI blokken",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Waarde", type: "string" }),
            defineField({ name: "label", title: "Label", type: "localeString" }),
            defineField({ name: "icon", title: "Icon naam", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label.nl" },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "services",
      title: "Services grid",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titel", type: "localeString" }),
            defineField({ name: "desc", title: "Omschrijving", type: "localeString" }),
            defineField({ name: "icon", title: "Icon naam", type: "string" }),
          ],
          preview: {
            select: { title: "title.nl", subtitle: "desc.nl" },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "reviewText",
      title: "Review — quote",
      type: "localeText",
    }),
    defineField({
      name: "reviewAuthor",
      title: "Review — auteur",
      type: "string",
    }),
    defineField({
      name: "reviewInitials",
      title: "Review — initialen",
      type: "string",
      validation: (Rule) => Rule.max(3),
    }),
  ],
});