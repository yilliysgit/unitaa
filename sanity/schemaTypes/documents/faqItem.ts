// sanity/schemaTypes/documents/faqItem.ts
import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",

  groups: [
    { name: "content", title: "Content" },
    { name: "visibility", title: "Zichtbaarheid" },
  ],

  fields: [
    // ── Content ───────────────────────────────────
    defineField({
      name: "question",
      title: "Vraag",
      type: "localeString",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "answer",
      title: "Antwoord",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "nl", title: "Nederlands", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "en", title: "English", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "tr", title: "Türkçe", type: "array", of: [{ type: "block" }] }),
      ],
    }),

    // ── Zichtbaarheid ─────────────────────────────
    defineField({
      name: "category",
      title: "Categorie",
      description: "Op welke pagina verschijnt deze FAQ?",
      type: "string",
      group: "visibility",
    options: {
  list: [
    { title: "Algemeen (homepage)", value: "algemeen" },
    { title: "Diensten pagina", value: "diensten" },
    { title: "Prijzen", value: "prijzen" },
    { title: "Pakketten", value: "pakketten" },
    { title: "Over ons", value: "over-ons" },
  ],
  layout: "radio",
},
      initialValue: "algemeen",
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 0,
      group: "visibility",
    }),
  ],

  preview: {
    select: {
      title: "question.nl",
      subtitle: "category",
    },
  },
});