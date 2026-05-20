// sanity/schemaTypes/objects/sections/dienstenSection.ts
import { defineField, defineType } from "sanity";

export const dienstenSection = defineType({
  name: "dienstenSection",
  title: "Diensten Sectie",
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
      name: "subtitle",
      title: "Subtitel",
      type: "localeString",
    }),
    defineField({
      name: "body",
      title: "Body tekst",
      type: "localeText",
    }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "badgeTop",
      title: "Badge rechtsboven tekst",
      type: "localeString",
    }),
    defineField({
      name: "badgeBottomCount",
      title: "Badge linksonder — getal",
      type: "string",
      initialValue: "500+",
    }),
    defineField({
      name: "badgeBottomLabel",
      title: "Badge linksonder — label",
      type: "localeString",
    }),
    defineField({
      name: "ctaText",
      title: "CTA link tekst",
      type: "localeString",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA link",
      type: "string",
      initialValue: "/diensten",
    }),
  ],
});