// sanity/schemaTypes/objects/localeText.ts

import { defineField, defineType } from "sanity";

export const localeText = defineType({
  name: "localeText",
  title: "Localized Text",
  type: "object",
  fields: [
    defineField({
      name: "nl",
      title: "Nederlands",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "en",
      title: "English",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "tr",
      title: "Türkçe",
      type: "text",
      rows: 4,
    }),
  ],
});