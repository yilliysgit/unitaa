import { defineQuery } from "groq";

export const pakkettenPageQuery = defineQuery(`
  *[_type == "pakkettenPage"][0] {
    heroEyebrow,
    heroTitle,
    heroTitleAccent,
    heroSubtitle,
    heroTrustItems[] { label },
    vergelijkingEyebrow,
    vergelijkingTitle,
    vergelijkingSubtitle,
    vergelijkingRijen[] {
      feature,
      starter,
      groei,
      bv,
      vastgoed
    },
    faqEyebrow,
    faqTitle,
    faqSubtitle,
    faqItems[] { question, answer },
    ctaEyebrow,
    ctaTitle,
    ctaSubtitle,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    disclaimer,
    seoTitle,
    seoDescription
  }
`);