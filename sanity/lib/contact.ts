import { defineQuery } from "groq";
import { resend } from "./resend/resend";

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
export async function testEmail() {
    const { data, error } = await resend.emails.send({
        from: "Unit AA <noreply@unitaa.nl>",
        to: "info@unitaa.nl",
        subject: "🎉 Resend werkt!",
        html: "<h1>Gefeliciteerd!</h1><p>Je eerste e-mail via Resend is verzonden.</p>",
    });

    console.log({ data, error });

    return { data, error };
}
