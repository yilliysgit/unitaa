// sanity/schemaTypes/objects/localeString.ts

import { defineField, defineType } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({ name: "nl", title: "Nederlands", type: "string" }),
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "tr", title: "Türkçe", type: "string" }),
  ],
});