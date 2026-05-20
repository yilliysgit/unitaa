import { defineField, defineType } from "sanity";

export const dienstenPage = defineType({
  name: "dienstenPage",
  title: "Diensten Pagina",
  type: "document",

  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Intro" },
    { name: "waarom", title: "Waarom Unit AA" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    // ── Hero ──────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero Sectie",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localeString" }),
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "titleAccent", title: "Titel accent (groen)", type: "localeString" }),
        defineField({ name: "description", title: "Omschrijving", type: "localeText" }),
        defineField({ name: "primaryCtaText", title: "CTA knop 1 — label", type: "localeString" }),
        defineField({ name: "primaryCtaLink", title: "CTA knop 1 — link", type: "string", initialValue: "/contact" }),
        defineField({ name: "secondaryCtaText", title: "CTA knop 2 — label", type: "localeString" }),
        defineField({ name: "secondaryCtaLink", title: "CTA knop 2 — link", type: "string", initialValue: "/pakketten" }),
        defineField({
          name: "trustItems",
          title: "Trust items",
          type: "array",
          of: [{ type: "object", fields: [
            defineField({ name: "label", title: "Label", type: "localeString" }),
          ], preview: { select: { title: "label.nl" } } }],
        }),
        defineField({
          name: "stats",
          title: "Stats (3 stuks)",
          type: "array",
          of: [{ type: "object", fields: [
            defineField({ name: "value", title: "Waarde", type: "string" }),
            defineField({ name: "label", title: "Label", type: "localeString" }),
            defineField({ name: "icon", title: "Icon naam", type: "string" }),
          ], preview: { select: { title: "value", subtitle: "label.nl" } } }],
          validation: (Rule) => Rule.max(3),
        }),
        defineField({ name: "image", title: "Afbeelding", type: "image", options: { hotspot: true } }),
      ],
    }),

    // ── Intro ─────────────────────────────────────
    defineField({
      name: "intro",
      title: "Intro Sectie",
      type: "object",
      group: "intro",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localeString" }),
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "titleAccent", title: "Titel accent (groen)", type: "localeString" }),
        defineField({ name: "body", title: "Body tekst", type: "object", fields: [
          defineField({ name: "nl", title: "Nederlands", type: "array", of: [{ type: "block" }] }),
          defineField({ name: "en", title: "English", type: "array", of: [{ type: "block" }] }),
          defineField({ name: "tr", title: "Türkçe", type: "array", of: [{ type: "block" }] }),
        ]}),
        defineField({ name: "uspText", title: "USP tekst", type: "localeText" }),
        defineField({ name: "socialProofCount", title: "Social proof — aantal", type: "string" }),
        defineField({ name: "socialProofCountLabel", title: "Social proof — aantal label", type: "localeString" }),
        defineField({ name: "socialProofScore", title: "Social proof — score", type: "string" }),
        defineField({ name: "socialProofScoreLabel", title: "Social proof — score label", type: "localeString" }),
      ],
    }),


defineField({
  name: "grid",
  title: "Diensten Grid",
  type: "object",
  group: "hero",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "localeString" }),
    defineField({ name: "title", title: "Titel", type: "localeString" }),
    defineField({ name: "subtitle", title: "Subtitel", type: "localeString" }),
  ],
}),


    // ── Waarom Unit AA ────────────────────────────
    defineField({
      name: "waarom",
      title: "Waarom Unit AA",
      type: "object",
      group: "waarom",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localeString" }),
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "subtitle", title: "Subtitel", type: "localeString" }),
        defineField({
          name: "items",
          title: "Punten",
          type: "array",
          of: [{ type: "object", fields: [
            defineField({ name: "title", title: "Titel", type: "localeString" }),
            defineField({ name: "desc", title: "Omschrijving", type: "localeText" }),
            defineField({ name: "icon", title: "Icon naam", type: "string" }),
          ], preview: { select: { title: "title.nl" } } }],
        }),
      ],
    }),

    defineField({
  name: "faqSectie",
  title: "FAQ Sectie",
  type: "faqSection",
  group: "seo",
}),

    // ── SEO ───────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "SEO — titel",
      type: "localeString",
      group: "seo",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO — beschrijving",
      type: "localeText",
      group: "seo",
    }),
  ],

  preview: {
    prepare() {
      return { title: "Diensten Pagina" };
    },
  },
});