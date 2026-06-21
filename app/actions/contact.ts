// client/app/[locale]/actions/contact.ts
"use server";

import { resend } from "@/sanity/lib/resend/resend";

export async function sendContactEmail(
  _prevState: any,
  formData: FormData
) {
 const name = formData.get("name") as string;
 const email = formData.get("email") as string;
 const phone = formData.get("phone") as string;
const message = formData.get("message") as string;


const { data, error } = await resend.emails.send({
  from: "Unit AA <info@unitaa.nl>",
  to: process.env.CONTACT_EMAIL!,
  replyTo: email,
  subject: `Nieuw contactformulier - ${name}`,
  html: `
    <div style="font-family: Arial, Helvetica, sans-serif; color:#1f2937; line-height:1.6; max-width:650px;">

      <h2 style="margin-bottom:24px; color:#0f1c3d;">
        Nieuw contactformulier
      </h2>

      <table style="border-collapse:collapse; width:100%;">
        <tr>
          <td style="padding:8px 0; width:140px;"><strong>Naam</strong></td>
          <td>${name}</td>
        </tr>

        <tr>
          <td style="padding:8px 0;"><strong>E-mailadres</strong></td>
          <td>
            <a href="mailto:${email}">
              ${email}
            </a>
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;"><strong>Telefoon</strong></td>
          <td>${phone || "-"}</td>
        </tr>
      </table>

      <hr style="margin:32px 0; border:none; border-top:1px solid #e5e7eb;">

      <h3 style="margin-bottom:12px; color:#0f1c3d;">
        Bericht
      </h3>

      <p style="white-space:pre-line;">
        ${message}
      </p>

      <hr style="margin:32px 0; border:none; border-top:1px solid #e5e7eb;">

      <p style="font-size:13px; color:#6b7280;">
        Dit bericht is verzonden via het contactformulier op
        <a href="https://unitaa.nl">unitaa.nl</a>.
      </p>

    </div>
  `,
});


  // <-- GEEN return
  if (error) {
  return {
    success: false as const,
    error: "E-mail kon niet worden verzonden",
  };
}

return {
  success: true as const,
};

}