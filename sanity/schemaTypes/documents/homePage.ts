import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",

  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "diensten", title: "Diensten" },
    { name: "prijzen", title: "Prijzen" },
    { name: "reviews", title: "Reviews" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "CTA" },
  ],

  fields: [
    defineField({
      name: "hero",
      title: "Hero Sectie",
      type: "heroSection",
      group: "hero",
    }),
    defineField({
      name: "intro",
      title: "Intro Sectie",
      type: "introSection",
      group: "intro",
    }),

    defineField({
  name: "diensten",
  title: "Diensten Sectie",
  type: "dienstenSection",
  group: "diensten",
}),

defineField({
  name: "prijzen",
  title: "Prijzen Sectie",
  type: "prijzenSection",
  group: "prijzen",
}),

defineField({
  name: "faq",
  title: "FAQ Sectie",
  type: "faqSection",
  group: "faq",
}),

defineField({
  name: "cta",
  title: "CTA Sectie",
  type: "ctaSection",
  group: "cta",
}),

  ],

  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
