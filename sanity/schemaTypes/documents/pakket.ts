// sanity/schemaTypes/documents/pakket.ts
import { defineField, defineType } from "sanity";

export const pakket = defineType({
  name: "pakket",
  title: "Pakket",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Naam",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "object",
      fields: [
        defineField({ name: "nl", title: "Nederlands", type: "slug", options: { source: "name.nl" } }),
        defineField({ name: "en", title: "English", type: "slug", options: { source: "name.en" } }),
        defineField({ name: "tr", title: "Türkçe", type: "slug", options: { source: "name.tr" } }),
      ],
    }),
    defineField({
      name: "price",
      title: "Prijs",
      description: 'Bijv. "€100"',
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priceLabel",
      title: "Prijs label",
      description: 'Bijv. "per maand"',
      type: "localeString",
    }),
    defineField({
      name: "description",
      title: "Korte omschrijving",
      type: "localeString",
    }),

    
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localeString" }),
            defineField({
              name: "included",
              title: "Inbegrepen",
              type: "boolean",
              initialValue: true,
            }),
          ],
          
          preview: {
            select: { title: "label.nl", subtitle: "included" },
          },
        },
 
      ],
      
    }),

    defineField({
  name: "featuresNote",
  title: "Features — extra notitie",
  description: 'Bijv. "Inclusief meer diensten."',
  type: "localeString",
}),

    defineField({
      name: "isPopular",
      title: "Meest gekozen",
      type: "boolean",
      initialValue: false,
    }),


    defineField({
      name: "showOnHome",
      title: "Tonen op homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "ctaText",
      title: "CTA tekst",
      description: "Optioneel. Als leeg → valt terug op globale knoptekst.",
      type: "localeString",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA link",
      type: "string",
      initialValue: "/contact",
    }),
  ],

  preview: {
    select: {
      title: "name.nl",
      subtitle: "price",
    },
  },
});