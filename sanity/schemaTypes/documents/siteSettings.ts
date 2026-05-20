// sanity/schemaTypes/documents/siteSettings.ts

import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "contact",
      title: "Contact",
    },
    {
      name: "social",
      title: "Social Media",
    },
    {
      name: "seo",
      title: "SEO",
    },
    { 
      name: "ui",
      title: "UI Teksten"
    },
  ],

  fields: [
    /**
     * GENERAL
     */
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "localeString",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "localeString",
      group: "general",
    }),

    /**
     * CONTACT
     */
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      group: "contact",
    }),

    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "localeText",
      group: "contact",
    }),

    defineField({
      name: "kvk",
      title: "Chamber of Commerce Number (KvK)",
      type: "string",
      group: "contact",
    }),

    defineField({
      name: "btwNumber",
      title: "VAT Number",
      type: "string",
      group: "contact",
    }),

    /**
     * SOCIAL MEDIA
     */
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      group: "social",
    }),

    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
      group: "social",
    }),

    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
      group: "social",
    }),

    defineField({
  name: "footerBadges",
  title: "Footer — badges",
  type: "array",
  group: "ui",
  of: [
    {
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "localeString" }),
        defineField({ 
          name: "icon", 
          title: "Icon naam",
          description: 'Bijv. "Clock", "UserCheck", "Check"',
          type: "string" 
        }),
      ],
      preview: {
        select: { title: "label.nl", subtitle: "icon" },
      },
    },
  ],
}),
defineField({
  name: "footerTagline",
  title: "Footer — tagline",
  type: "localeText",
  group: "ui",
}),
defineField({
  name: "footerDiensten",
  title: "Footer — 'Diensten' label",
  type: "localeString",
  group: "ui",
}),
defineField({
  name: "footerNavigatie",
  title: "Footer — 'Navigatie' label",
  type: "localeString",
  group: "ui",
}),
defineField({
  name: "footerContact",
  title: "Footer — 'Contact' label",
  type: "localeString",
  group: "ui",
}),
defineField({
  name: "footerCopyright",
  title: "Footer — copyright tekst",
  type: "localeString",
  group: "ui",
}),

defineField({
  name: "footerLegalLinks",
  title: "Footer — juridische links",
  type: "array",
  group: "ui",
  of: [
    {
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label", type: "localeString" }),
        defineField({ name: "href", title: "Link", type: "string" }),
      ],
      preview: {
        select: { title: "label.nl", subtitle: "href" },
      },
    },
  ],
}),

defineField({
  name: "beconNummer",
  title: "Beconnummer",
  type: "string",
  group: "contact",
}),

    /**
     * SEO DEFAULTS
     */
    defineField({
      name: "defaultSeoTitle",
      title: "Default SEO Title",
      type: "localeString",
      group: "seo",
    }),

    defineField({
      name: "defaultSeoDescription",
      title: "Default SEO Description",
      type: "localeText",
      group: "seo",
    }),

    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      group: "seo",
      options: {
        hotspot: true,
      },
    }),

    // UI Teksten voor knoppen

defineField({
  name: "readMore",
  title: "\"Meer informatie\" knop tekst",
  type: "localeString",
  group: "ui",
  initialValue: {
    nl: "Meer informatie",
    en: "Read more",
    tr: "Daha fazla",
  },
}),


  ],

  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});