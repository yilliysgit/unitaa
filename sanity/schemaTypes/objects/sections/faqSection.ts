import { defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Sectie",
  type: "object",

  fields: [
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
  ],
});