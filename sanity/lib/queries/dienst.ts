import { defineQuery } from "groq";

export const dienstQuery = defineQuery(`
  *[_type == "dienst" && slug[$locale].current == $slug][0] {
    title,
    shortTitle,
    slug,
    icon,
    eyebrow,
    subtitle,
    description,
    image {
      asset->{ url }
    },
    badgeTitle,
    badgeSubtitle,
    microTrust,
    trustItems[] {
      label
    },
    stats[] {
      value,
      label,
      icon
    },
    testimonial {
      quote,
      author,
      company
    },
    location,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    shortDesc,
    longDesc,
    introTrustItems[] {
      label
    },
    pricing {
      startingPrice,
      priceSuffix,
      priceNote
    },
ctaText,
includedEyebrow,
includedTitle,
includedSubtitle,
includedFootnote,
includedItems[] {
  title,
  description,
  icon
},

    
 benefitsEyebrow,
benefitsTitle,
benefitsSubtitle,
benefits[] {
  title,
  description,
  icon
},
processEyebrow,
processTitle,
processSubtitle,
process[] {
  title,
  description
},

faqEyebrow,
faqTitle,
faqSubtitle,
faq[] {
  question,
  answer
},

ctaEyebrow,
ctaTitle,
ctaTitleAccent,
ctaDescription,
ctaTrustItems[] { label },
ctaPrimaryText,
ctaPrimaryLink,
ctaSecondaryText,
ctaSecondaryLink,

    seoTitle,
    seoDescription
  }
`);