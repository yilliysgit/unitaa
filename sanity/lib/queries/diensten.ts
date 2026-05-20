import { defineQuery } from "groq";

export const dienstenQuery = defineQuery(`
  *[_type == "dienst" && showOnHome == true] | order(order asc) {
    title,
    slug,
    icon,
    shortDesc,
    ctaText,
    order
  }
`);