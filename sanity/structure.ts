import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ── Pagina's ──────────────────────────────
      S.listItem()
        .title("Pagina's")
        .child(
          S.list()
            .title("Pagina's")
            .items([
              S.documentTypeListItem("homePage").title("Home"),
              S.documentTypeListItem("dienstenPage").title("Diensten"),
              S.documentTypeListItem("overOnsPage").title("Over Ons"),
              S.listItem()
                .title("Contact")
                .child(
                  S.document()
                    .schemaType("contactPage")
                    .documentId("contactPage")
                ),
            ])
        ),

      S.divider(),

      // ── Content ───────────────────────────────
      S.documentTypeListItem("dienst").title("Diensten"),
      S.documentTypeListItem("pakket").title("Pakketten"),

      S.divider(),

      // ── FAQ ───────────────────────────────────
      S.listItem()
        .title("FAQ")
        .child(
          S.list()
            .title("FAQ")
            .items([
              S.listItem()
                .title("Algemeen")
                .child(
                  S.documentList()
                    .title("Algemeen")
                    .filter('_type == "faqItem" && category == "algemeen"')
                ),
              S.listItem()
                .title("Diensten")
                .child(
                  S.documentList()
                    .title("Diensten")
                    .filter('_type == "faqItem" && category == "diensten"')
                ),
              S.listItem()
                .title("Prijzen")
                .child(
                  S.documentList()
                    .title("Prijzen")
                    .filter('_type == "faqItem" && category == "prijzen"')
                ),
                            S.listItem()
  .title("Pakketten")
  .child(
    S.document()
      .schemaType("pakkettenPage")
      .documentId("pakkettenPage")
  ),
              S.listItem()
                .title("Over ons")
                .child(
                  S.documentList()
                    .title("Over ons")
                    .filter('_type == "faqItem" && category == "over-ons"')
                ),

            ])
        ),

      S.divider(),

      // ── Instellingen ──────────────────────────
      S.documentTypeListItem("navigation").title("Navigatie"),
      S.documentTypeListItem("siteSettings").title("Site Instellingen"),
    ]);