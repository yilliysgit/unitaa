import { defineQuery } from "groq";

export const dienstenPageQuery = defineQuery(`
  *[_type == "dienstenPage"][0] {
    hero {
      eyebrow,
      title,
      titleAccent,
      description,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      trustItems[] {
        label
      },
      stats[] {
        value,
        label,
        icon
      },
      image {
        asset->{ url }
      }
    },
    intro {
      eyebrow,
      title,
      titleAccent,
      body,
      uspText,
      socialProofCount,
      socialProofCountLabel,
      socialProofScore,
      socialProofScoreLabel
    },
    waarom {
      eyebrow,
      title,
      subtitle,
      items[] {
        title,
        desc,
        icon
      }
    },
    seoTitle,
    seoDescription,
    faqSectie {
      eyebrow,
      title,
      titleAccent,
      subtitle
    },
    "diensten": *[_type == "dienst"] | order(order asc) {
      title,
      slug,
      icon,
      shortDesc,
      ctaText,
      order
    },

    grid {
  eyebrow,
  title,
  subtitle
},

    "faq": *[_type == "faqItem" && category == "diensten"] | order(order asc) {
  question,
  answer,
  order
}
  }
`);