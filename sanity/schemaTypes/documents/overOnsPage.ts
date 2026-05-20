import { defineField, defineType } from "sanity";

export const overOnsPage = defineType({
  name: "overOnsPage",
  title: "Over Ons Pagina",
  type: "document",

  groups: [
    { name: "hero", title: "Hero" },
    { name: "missie", title: "Missie" },
    { name: "stats", title: "Stats" },
    { name: "waarden", title: "Kernwaarden" },
    { name: "team", title: "Team" },
    { name: "waarom", title: "Waarom Unit AA" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    // ── Hero ──────────────────────────────────────
    defineField({ name: "heroEyebrow", title: "Eyebrow", type: "localeString", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titel", type: "localeString", group: "hero" }),
    defineField({ name: "heroSubtitle", title: "Subtitel", type: "localeText", group: "hero" }),

    defineField({ 
  name: "heroImage", 
  title: "Hero afbeelding (optioneel)", 
  type: "image", 
  options: { hotspot: true }, 
  group: "hero" 
}),

    // ── Missie ────────────────────────────────────
    defineField({ name: "missieEyebrow", title: "Eyebrow", type: "localeString", group: "missie" }),
    defineField({ name: "missieTitle", title: "Titel", type: "localeString", group: "missie" }),
    defineField({
      name: "missieBody",
      title: "Body tekst",
      type: "object",
      group: "missie",
      fields: [
        defineField({ name: "nl", title: "Nederlands", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "en", title: "English", type: "array", of: [{ type: "block" }] }),
        defineField({ name: "tr", title: "Türkçe", type: "array", of: [{ type: "block" }] }),
      ],
    }),
    defineField({ name: "missieQuote", title: "Quote", type: "localeText", group: "missie" }),
    defineField({ name: "missieQuoteAuthor", title: "Quote auteur", type: "string", group: "missie" }),
    defineField({ name: "missieQuoteRole", title: "Quote rol", type: "localeString", group: "missie" }),

    // ── Stats ─────────────────────────────────────
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "stats",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Waarde", type: "string" }),
          defineField({ name: "label", title: "Label", type: "localeString" }),
          defineField({ name: "icon", title: "Icon naam", type: "string" }),
        ],
        preview: { select: { title: "value", subtitle: "label.nl" } },
      }],
    }),

    // ── Kernwaarden ───────────────────────────────
    defineField({ name: "waardenEyebrow", title: "Eyebrow", type: "localeString", group: "waarden" }),
    defineField({ name: "waardenTitle", title: "Titel", type: "localeString", group: "waarden" }),
    defineField({
      name: "waarden",
      title: "Kernwaarden",
      type: "array",
      group: "waarden",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "icon", title: "Icon naam", type: "string" }),
          defineField({ name: "title", title: "Titel", type: "localeString" }),
          defineField({ name: "description", title: "Omschrijving", type: "localeText" }),
        ],
        preview: { select: { title: "title.nl" } },
      }],
    }),

    // ── Team ──────────────────────────────────────
    defineField({ name: "teamEyebrow", title: "Eyebrow", type: "localeString", group: "team" }),
    defineField({ name: "teamTitle", title: "Titel", type: "localeString", group: "team" }),
    defineField({ name: "teamSubtitle", title: "Subtitel", type: "localeText", group: "team" }),
    defineField({
      name: "teamMembers",
      title: "Teamleden",
      type: "array",
      group: "team",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "name", title: "Naam", type: "string" }),
          defineField({ name: "role", title: "Rol", type: "localeString" }),
          defineField({ name: "experience", title: "Ervaring", type: "localeString" }),
          defineField({ name: "bio", title: "Bio", type: "localeText" }),
          defineField({ name: "image", title: "Foto", type: "image", options: { hotspot: true } }),
        ],
        preview: { select: { title: "name", subtitle: "role.nl" } },
      }],
    }),
    defineField({ name: "teamFootnote", title: "Voetnoot", type: "localeText", group: "team" }),

    // ── Waarom Unit AA ────────────────────────────
    defineField({ name: "waaromEyebrow", title: "Eyebrow", type: "localeString", group: "waarom" }),
    defineField({ name: "waaromTitle", title: "Titel", type: "localeString", group: "waarom" }),
    defineField({
      name: "waaromItems",
      title: "Punten",
      type: "array",
      group: "waarom",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "localeString" }),
      ], preview: { select: { title: "label.nl" } } }],
    }),
    defineField({ name: "waaromCtaText", title: "CTA tekst", type: "localeString", group: "waarom" }),
    defineField({ name: "waaromCtaLink", title: "CTA link", type: "string", initialValue: "/contact", group: "waarom" }),
    defineField({ name: "waaromQuoteTitle", title: "Quote titel", type: "localeString", group: "waarom" }),
    defineField({ name: "waaromQuote", title: "Quote", type: "localeText", group: "waarom" }),


    // ── CTA ───────────────────────────────────────
    defineField({ name: "ctaTitle", title: "Titel", type: "localeString", group: "cta" }),
    defineField({ name: "ctaSubtitle", title: "Subtitel", type: "localeText", group: "cta" }),
    defineField({ name: "ctaButtonText", title: "Knop tekst", type: "localeString", group: "cta" }),
    defineField({ name: "ctaButtonLink", title: "Knop link", type: "string", initialValue: "/contact", group: "cta" }),

    // ── SEO ───────────────────────────────────────
    defineField({ name: "seoTitle", title: "SEO titel", type: "localeString", group: "seo" }),
    defineField({ name: "seoDescription", title: "SEO beschrijving", type: "localeText", group: "seo" }),
  ],

  preview: {
    prepare() {
      return { title: "Over Ons Pagina" };
    },
  },
});