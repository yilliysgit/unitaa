import { defineQuery } from "groq";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    phone,
    email,
    address,
    kvk,
    btwNumber,
    linkedin,
    facebook,
    instagram,
    readMore,
    footerBadges[] {
      label,
      icon
    },
    footerTagline,
    footerDiensten,
    footerNavigatie,
    footerContact,
    footerCopyright,
    footerLegalLinks[] {
  label,
  href
},
beconNummer,
  }
`);