import { defineQuery } from "groq";

export const homePageQuery = defineQuery(`
  *[_type == "homePage"][0] {
    hero {
      badge,
      title,
      titleAccent,
      description,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      trustItems[] {
        label,
        icon
      },
      floatingPill,
      cardLabel,
      cardTitle,
      cardTitleAccent,
      cardPrice,
      cardPricePrefix,
      cardPriceLabel,
      cardTags,
      kpis[] {
        value,
        label,
        icon
      },
      services[] {
        title,
        desc,
        icon
      },
      reviewText,
      reviewAuthor,
      reviewInitials
    },
    intro {
      eyebrow,
      title,
      titleAccent,
      subtitle,
      body,
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      benefits[] {
        title,
        desc,
        icon,
        variant
      },
      quoteText,
      quoteAuthor,
      quoteAuthorRole,
      quoteInitial,
      quoteSaving,
      quoteSavingLabel,
      socialProofCount,
      socialProofLabel,
      socialProofScore,
      socialProofAvatars
    },
    diensten {
      eyebrow,
      title,
      subtitle,
      body,
      image {
        asset->{ url }
      },
      badgeTop,
      badgeBottomCount,
      badgeBottomLabel,
      ctaText,
      ctaLink,
      "items": *[_type == "dienst" && showOnHome == true] | order(order asc) {
        title,
        slug,
        icon,
        shortDesc,
        ctaText,
        order
      }
    },
    prijzen {
      eyebrow,
      title,
      titleAccent,
      subtitle,
      ctaText,
      ctaLink,
      disclaimer,
      extraDienst {
        label,
        title,
        description,
        price,
        pricePrefix,
        features[] {
          label
        },
        featuresNote,
        ctaText,
        ctaLink
      },
      "items": *[_type == "pakket" && showOnHome == true] | order(order asc) {
        name,
        slug,
        price,
        priceLabel,
        description,
        features[] {
          label,
          included
        },
        featuresNote,
        isPopular,
        ctaText,
        ctaLink,
        order
      }
    },
    faq {
      eyebrow,
      title,
      titleAccent,
      subtitle,
      "items": *[_type == "faqItem" && category == "algemeen"] | order(order asc) {
        question,
        answer,
        order
      }
    },
    cta {
      eyebrow,
      title,
      titleAccent,
      description,
      trustItems[] {
        label
      },
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink
    }
  }
`);