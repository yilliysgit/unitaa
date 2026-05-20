import { defineQuery } from "groq";

export const overOnsPageQuery = defineQuery(`
  *[_type == "overOnsPage"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroImage { asset->{ url } },
    missieEyebrow,
    missieTitle,
    missieBody,
    missieQuote,
    missieQuoteAuthor,
    missieQuoteRole,
    stats[] { value, label, icon },
    waardenEyebrow,
    waardenTitle,
    waarden[] { icon, title, description },
    teamEyebrow,
    teamTitle,
    teamSubtitle,
    teamMembers[] {
      name,
      role,
      experience,
      bio,
      image { asset->{ url } }
    },
    teamFootnote,
    waaromEyebrow,
    waaromTitle,
    waaromItems[] { label },
    waaromCtaText,
    waaromCtaLink,
    waaromQuote,
    waaromQuoteTitle,
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaButtonLink,
    seoTitle,
    seoDescription
  }
`);