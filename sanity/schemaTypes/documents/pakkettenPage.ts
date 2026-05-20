import { defineField, defineType } from "sanity";

export const pakkettenPage = defineType({
  name: "pakkettenPage",
  title: "Pakketten Pagina",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "pakketten", title: "Pakketten" },
    { name: "vergelijking", title: "Vergelijking" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroEyebrow", title: "Eyebrow", type: "localeString", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titel", type: "localeString", group: "hero" }),
    defineField({ name: "heroTitleAccent", title: "Titel accent", type: "localeString", group: "hero" }),
    defineField({ name: "heroSubtitle", title: "Subtitel", type: "localeText", group: "hero" }),
    defineField({
      name: "heroTrustItems",
      title: "Trust items",
      type: "array",
      group: "hero",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "localeString" }),
      ], preview: { select: { title: "label.nl" } } }],
    }),

    // Vergelijking
    defineField({ name: "vergelijkingEyebrow", title: "Vergelijking eyebrow", type: "localeString", group: "vergelijking" }),
    defineField({ name: "vergelijkingTitle", title: "Vergelijking titel", type: "localeString", group: "vergelijking" }),
    defineField({ name: "vergelijkingSubtitle", title: "Vergelijking subtitel", type: "localeString", group: "vergelijking" }),
    defineField({
      name: "vergelijkingRijen",
      title: "Vergelijking rijen",
      type: "array",
      group: "vergelijking",
      of: [{ type: "object", fields: [
        defineField({ name: "feature", title: "Feature", type: "localeString" }),
        defineField({ name: "starter", title: "Starter", type: "string", description: "✓, ✗, of tekst" }),
        defineField({ name: "groei", title: "Groei", type: "string" }),
        defineField({ name: "bv", title: "BV & Holding", type: "string" }),
        defineField({ name: "vastgoed", title: "Vastgoed", type: "string" }),
      ], preview: { select: { title: "feature.nl" } } }],
    }),

    // FAQ
    defineField({ name: "faqEyebrow", title: "FAQ eyebrow", type: "localeString", group: "faq" }),
    defineField({ name: "faqTitle", title: "FAQ titel", type: "localeString", group: "faq" }),
    defineField({ name: "faqSubtitle", title: "FAQ subtitel", type: "localeString", group: "faq" }),
    defineField({
      name: "faqItems",
      title: "FAQ items",
      type: "array",
      group: "faq",
      of: [{ type: "object", fields: [
        defineField({ name: "question", title: "Vraag", type: "localeString" }),
        defineField({ name: "answer", title: "Antwoord", type: "localeText" }),
      ], preview: { select: { title: "question.nl" } } }],
    }),

    // CTA
    defineField({ name: "ctaEyebrow", title: "CTA eyebrow", type: "localeString", group: "cta" }),
    defineField({ name: "ctaTitle", title: "CTA titel", type: "localeString", group: "cta" }),
    defineField({ name: "ctaSubtitle", title: "CTA subtitel", type: "localeText", group: "cta" }),
    defineField({ name: "ctaPrimaryText", title: "CTA knop 1 tekst", type: "localeString", group: "cta" }),
    defineField({ name: "ctaPrimaryLink", title: "CTA knop 1 link", type: "string", initialValue: "/contact", group: "cta" }),
    defineField({ name: "ctaSecondaryText", title: "CTA knop 2 tekst", type: "localeString", group: "cta" }),
    defineField({ name: "ctaSecondaryLink", title: "CTA knop 2 link", type: "string", group: "cta" }),

    // Disclaimer
    defineField({ name: "disclaimer", title: "Disclaimer tekst", type: "localeText", group: "pakketten" }),

    // SEO
    defineField({ name: "seoTitle", title: "SEO titel", type: "localeString", group: "seo" }),
    defineField({ name: "seoDescription", title: "SEO beschrijving", type: "localeText", group: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Pakketten Pagina" };
    },
  },
});