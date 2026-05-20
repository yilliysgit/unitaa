import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Sectie",
  type: "object",

  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow tekst",
      description: 'Bijv. "Klaar voor de volgende stap?"',
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
      name: "description",
      title: "Omschrijving",
      type: "localeText",
    }),
    defineField({
      name: "trustItems",
      title: "Trust items",
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
      validation: (Rule) => Rule.max(4),
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
    }),
  ],
});