import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface InschrijvingData {
  naam: string;
  email: string;
  telefoon: string;
  pakket: string;
  bericht?: string;
}

const pakketLabels: Record<string, string> = {
  "losse-les": "Losse Les - €75 / 80 min",
  totaalpakket: "Totaalpakket - Vast bedrag",
  "examen-actie": "Examen Actie - €180",
};

export async function sendInschrijvingEmail(data: InschrijvingData) {
  const contactEmail = process.env.CONTACT_EMAIL || "info@slaagsnel.nl";

  const { error } = await resend.emails.send({
    from: "Slaagsnel Website <onboarding@resend.dev>",
    to: [contactEmail],
    subject: `Nieuwe inschrijving: ${data.naam} - ${pakketLabels[data.pakket] || data.pakket}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f8fafc;">
          <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(135deg, #255293, #1a3d6e); padding: 24px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 22px;">Nieuwe Inschrijving</h1>
              <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">Via slaagsnel.nl</p>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px; width: 120px;">Naam</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1f2937; font-size: 14px; font-weight: 600;">${data.naam}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px;">E-mail</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1f2937; font-size: 14px;">
                    <a href="mailto:${data.email}" style="color: #255293;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px;">Telefoon</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1f2937; font-size: 14px;">
                    <a href="tel:${data.telefoon}" style="color: #255293;">${data.telefoon}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px;">Pakket</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #E98122; font-size: 14px; font-weight: 600;">${pakketLabels[data.pakket] || data.pakket}</td>
                </tr>
                ${
                  data.bericht
                    ? `<tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Bericht</td>
                    <td style="padding: 10px 0; color: #1f2937; font-size: 14px;">${data.bericht}</td>
                  </tr>`
                    : ""
                }
              </table>
            </div>
            <div style="background: #f8fafc; padding: 16px 24px; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Dit bericht is automatisch verstuurd via het inschrijfformulier op slaagsnel.nl</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });

  if (error) {
    throw error;
  }
}
