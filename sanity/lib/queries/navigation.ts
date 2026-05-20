// sanity/lib/queries/navigation.ts
import { defineQuery } from "groq";

export const navigationQuery = defineQuery(`
  *[_type == "navigation"][0] {
    mainMenu[] {
      label,
      href,
      openInNewTab
    }
  }
`);