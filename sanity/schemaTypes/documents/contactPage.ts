import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Pagina",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "contactopties", title: "Contactopties" },
    { name: "adres", title: "Adres" },
    { name: "formulier", title: "Formulier" },
    { name: "trust", title: "Trust" },
    { name: "bedrijfsinfo", title: "Bedrijfsinfo" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero
    defineField({ name: "heroEyebrow", title: "Eyebrow", type: "localeString", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titel", type: "localeString", group: "hero" }),
    defineField({ name: "heroSubtitle", title: "Subtitel", type: "localeText", group: "hero" }),

    // Contactopties
    defineField({
      name: "contactOpties",
      title: "Contactopties",
      type: "array",
      group: "contactopties",
      of: [{ type: "object", fields: [
        defineField({ name: "icon", title: "Icon", type: "string", description: 'Phone, MessageCircle, Mail' }),
        defineField({ name: "title", title: "Titel", type: "localeString" }),
        defineField({ name: "value", title: "Waarde", type: "string" }),
        defineField({ name: "subtext", title: "Subtekst", type: "localeString" }),
        defineField({ name: "href", title: "Link", type: "string" }),
        defineField({ name: "action", title: "Actie tekst", type: "localeString" }),
      ], preview: { select: { title: "value" } } }],
    }),

    // Adres
    defineField({ name: "bedrijfsnaam", title: "Bedrijfsnaam", type: "string", group: "adres" }),
    defineField({ name: "straat", title: "Straat", type: "string", group: "adres" }),
    defineField({ name: "postcode", title: "Postcode + stad", type: "string", group: "adres" }),
    defineField({ name: "routeLink", title: "Google Maps link", type: "string", group: "adres" }),
    defineField({ name: "routeLinkText", title: "Route link tekst", type: "localeString", group: "adres" }),
    defineField({
      name: "openingstijden",
      title: "Openingstijden",
      type: "array",
      group: "adres",
      of: [{ type: "object", fields: [
        defineField({ name: "regel", title: "Regel", type: "localeString" }),
      ], preview: { select: { title: "regel.nl" } } }],
    }),
    defineField({ name: "openingstijdenNote", title: "Openingstijden notitie", type: "localeString", group: "adres" }),

    // Formulier
    defineField({ name: "formTitle", title: "Formulier titel", type: "localeString", group: "formulier" }),
    defineField({ name: "formSubtitle", title: "Formulier subtitel", type: "localeString", group: "formulier" }),
    defineField({ name: "formLabelNaam", title: "Label naam", type: "localeString", group: "formulier" }),
    defineField({ name: "formPlaceholderNaam", title: "Placeholder naam", type: "localeString", group: "formulier" }),
    defineField({ name: "formLabelEmail", title: "Label email", type: "localeString", group: "formulier" }),
    defineField({ name: "formPlaceholderEmail", title: "Placeholder email", type: "localeString", group: "formulier" }),
    defineField({ name: "formLabelTelefoon", title: "Label telefoon", type: "localeString", group: "formulier" }),
    defineField({ name: "formPlaceholderTelefoon", title: "Placeholder telefoon", type: "localeString", group: "formulier" }),
    defineField({ name: "formLabelBericht", title: "Label bericht", type: "localeString", group: "formulier" }),
    defineField({ name: "formPlaceholderBericht", title: "Placeholder bericht", type: "localeString", group: "formulier" }),
    defineField({ name: "formButtonText", title: "Knop tekst", type: "localeString", group: "formulier" }),
    defineField({ name: "formDisclaimer", title: "Disclaimer tekst", type: "localeString", group: "formulier" }),
    defineField({ name: "formDisclaimerLink", title: "Disclaimer link tekst", type: "localeString", group: "formulier" }),
    defineField({ name: "formDisclaimerHref", title: "Disclaimer link URL", type: "string", group: "formulier" }),
    defineField({ name: "formSuccessTitle", title: "Bedankt titel", type: "localeString", group: "formulier" }),
    defineField({ name: "formSuccessText", title: "Bedankt tekst", type: "localeString", group: "formulier" }),
    defineField({ name: "formSuccessButton", title: "Bedankt knop tekst", type: "localeString", group: "formulier" }),

    // Trust
    defineField({ name: "trustTitle", title: "Trust sectie titel", type: "localeString", group: "trust" }),
    defineField({
      name: "trustItems",
      title: "Trust items",
      type: "array",
      group: "trust",
      of: [{ type: "object", fields: [
        defineField({ name: "icon", title: "Icon", type: "string", description: 'Clock, ShieldCheck, Users, Sparkles' }),
        defineField({ name: "label", title: "Label", type: "localeString" }),
        defineField({ name: "description", title: "Omschrijving", type: "localeString" }),
      ], preview: { select: { title: "label.nl" } } }],
    }),

    // Bedrijfsinfo
    defineField({ name: "kvk", title: "KvK nummer", type: "string", group: "bedrijfsinfo" }),
    defineField({ name: "btw", title: "BTW nummer", type: "string", group: "bedrijfsinfo" }),
    defineField({ name: "becon", title: "Beconnummer", type: "string", group: "bedrijfsinfo" }),
    defineField({ name: "emailOntvanger", title: "Email ontvanger (voor formulier)", type: "string", group: "bedrijfsinfo" }),

    // SEO
    defineField({ name: "seoTitle", title: "SEO titel", type: "localeString", group: "seo" }),
    defineField({ name: "seoDescription", title: "SEO beschrijving", type: "localeText", group: "seo" }),
  ],

  preview: {
    prepare() {
      return { title: "Contact Pagina" };
    },
  },
});