import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "mainMenu",
      title: "Main Menu",
      type: "array",
      of: [{ type: "menuItem" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation",
      };
    },
  },
});