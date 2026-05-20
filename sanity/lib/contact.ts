import { defineQuery } from "groq";

export const contactPageQuery = defineQuery(`
  *[_type == "contactPage"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    contactOpties[] {
      icon,
      title,
      value,
      subtext,
      href,
      action
    },
    bedrijfsnaam,
    straat,
    postcode,
    routeLink,
    routeLinkText,
    openingstijden[] { regel },
    openingstijdenNote,
    formTitle,
    formSubtitle,
    formLabelNaam,
    formPlaceholderNaam,
    formLabelEmail,
    formPlaceholderEmail,
    formLabelTelefoon,
    formPlaceholderTelefoon,
    formLabelBericht,
    formPlaceholderBericht,
    formButtonText,
    formDisclaimer,
    formDisclaimerLink,
    formDisclaimerHref,
    formSuccessTitle,
    formSuccessText,
    formSuccessButton,
    trustTitle,
    trustItems[] { icon, label, description },
    kvk,
    btw,
    becon,
    emailOntvanger,
    seoTitle,
    seoDescription
  }
`);