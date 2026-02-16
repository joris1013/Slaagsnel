import nodemailer from "nodemailer";

interface InschrijvingData {
  naam: string;
  email: string;
  telefoon: string;
  pakket: string;
  bericht?: string;
}

const pakketLabels: Record<string, string> = {
  "losse-les": "Losse Les - \u20AC75 / 80 min",
  totaalpakket: "Totaalpakket - Vast bedrag",
  "examen-actie": "Examen Actie - \u20AC180",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function buildEmailHTML(data: InschrijvingData): string {
  const pakketLabel = pakketLabels[data.pakket] || data.pakket;
  const berichtRow = data.bericht
    ? `
      <tr>
        <td style="padding: 14px 20px; color: #64748b; font-size: 14px; vertical-align: top; width: 140px; border-bottom: 1px solid #f1f5f9;">
          <strong>Bericht</strong>
        </td>
        <td style="padding: 14px 20px; color: #1e293b; font-size: 14px; line-height: 1.6; border-bottom: 1px solid #f1f5f9;">
          ${data.bericht}
        </td>
      </tr>`
    : "";

  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuwe Inschrijving</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #255293 0%, #1a3f6f 50%, #0f2847 100%); padding: 40px 32px; border-radius: 16px 16px 0 0; text-align: center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background: rgba(255,255,255,0.15); border-radius: 50%; width: 64px; height: 64px; line-height: 64px; text-align: center; margin-bottom: 16px;">
                      <span style="font-size: 28px;">&#128663;</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="color: #ffffff; margin: 0 0 6px; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">
                      Nieuwe Inschrijving
                    </h1>
                    <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 14px; font-weight: 400;">
                      Via het inschrijfformulier op slaagsnel.nl
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Pakket badge -->
          <tr>
            <td style="background-color: #ffffff; padding: 28px 32px 0; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="background: linear-gradient(135deg, #E98122, #f59e0b); color: #ffffff; font-size: 14px; font-weight: 700; padding: 10px 24px; border-radius: 50px; letter-spacing: 0.3px;">
                    ${pakketLabel}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; padding: 24px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 20px; color: #64748b; font-size: 14px; width: 140px; border-bottom: 1px solid #f1f5f9;">
                    <strong>Naam</strong>
                  </td>
                  <td style="padding: 14px 20px; color: #1e293b; font-size: 15px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">
                    ${data.naam}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; color: #64748b; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
                    <strong>E-mail</strong>
                  </td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${data.email}" style="color: #255293; font-size: 14px; text-decoration: none; font-weight: 500;">
                      ${data.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; color: #64748b; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
                    <strong>Telefoon</strong>
                  </td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #f1f5f9;">
                    <a href="tel:${data.telefoon}" style="color: #255293; font-size: 14px; text-decoration: none; font-weight: 500;">
                      ${data.telefoon}
                    </a>
                  </td>
                </tr>${berichtRow}
              </table>
            </td>
          </tr>

          <!-- Quick actions -->
          <tr>
            <td style="background-color: #ffffff; padding: 0 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-right: 6px;" width="50%">
                    <a href="mailto:${data.email}" style="display: block; background-color: #255293; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-size: 13px; font-weight: 600; text-align: center;">
                      &#9993; Beantwoorden
                    </a>
                  </td>
                  <td align="center" style="padding-left: 6px;" width="50%">
                    <a href="tel:${data.telefoon}" style="display: block; background-color: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-size: 13px; font-weight: 600; text-align: center;">
                      &#128222; Bellen
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 32px; border-radius: 0 0 16px 16px; border-top: 1px solid #e2e8f0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 4px; color: #255293; font-size: 15px; font-weight: 700;">
                      Slaagsnel Rijschool
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.5;">
                      Dit bericht is automatisch verstuurd via het inschrijfformulier op slaagsnel.nl
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildConfirmationEmailHTML(data: InschrijvingData): string {
  const pakketLabel = pakketLabels[data.pakket] || data.pakket;

  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bedankt voor je inschrijving</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #255293 0%, #1a3f6f 50%, #0f2847 100%); padding: 40px 32px; border-radius: 16px 16px 0 0; text-align: center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background: rgba(255,255,255,0.15); border-radius: 50%; width: 64px; height: 64px; line-height: 64px; text-align: center; margin-bottom: 16px;">
                      <span style="font-size: 28px;">&#10004;</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="color: #ffffff; margin: 0 0 6px; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">
                      Bedankt, ${data.naam}!
                    </h1>
                    <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 14px; font-weight: 400;">
                      Je inschrijving is succesvol ontvangen
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background-color: #ffffff; padding: 32px;">
              <p style="color: #1e293b; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
                Hoi ${data.naam},<br><br>
                Bedankt voor je inschrijving bij <strong style="color: #255293;">Slaagsnel Rijschool</strong>! 
                We hebben je aanmelding in goede orde ontvangen.
              </p>

              <!-- Samenvatting -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 12px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Jouw inschrijving
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 14px;">Pakket:</td>
                        <td style="padding: 6px 0; color: #E98122; font-size: 14px; font-weight: 700; text-align: right;">${pakketLabel}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 14px;">E-mail:</td>
                        <td style="padding: 6px 0; color: #1e293b; font-size: 14px; text-align: right;">${data.email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 14px;">Telefoon:</td>
                        <td style="padding: 6px 0; color: #1e293b; font-size: 14px; text-align: right;">${data.telefoon}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Wat nu? -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #eff6ff, #f0f9ff); border-radius: 12px; border: 1px solid #bfdbfe;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 8px; color: #255293; font-size: 15px; font-weight: 700;">
                      &#128640; Wat gebeurt er nu?
                    </p>
                    <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.7;">
                      Wij nemen zo snel mogelijk contact met je op om alles te bespreken en een eerste les in te plannen. 
                      Heb je in de tussentijd vragen? Stuur ons gerust een WhatsApp!
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- WhatsApp CTA -->
          <tr>
            <td style="background-color: #ffffff; padding: 0 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/31624657933" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 50px; font-size: 14px; font-weight: 700;">
                      &#128172; WhatsApp ons
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 32px; border-radius: 0 0 16px 16px; border-top: 1px solid #e2e8f0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 4px; color: #255293; font-size: 15px; font-weight: 700;">
                      Slaagsnel Rijschool
                    </p>
                    <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px;">
                      Tel: +31 6 24657933
                    </p>
                    <p style="margin: 0; color: #94a3b8; font-size: 11px;">
                      Je ontvangt deze e-mail omdat je je hebt ingeschreven via slaagsnel.nl
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendInschrijvingEmail(data: InschrijvingData) {
  const recipients = process.env.EMAIL_TO?.split(",").map((e) => e.trim()) || [
    "F.Sadloe1@outlook.com",
    "jmwebsitesnl@gmail.com",
  ];

  // Send notification email to the business owners
  await transporter.sendMail({
    from: `"Slaagsnel Rijschool" <${process.env.EMAIL_USER}>`,
    to: recipients.join(", "),
    subject: `Nieuwe inschrijving: ${data.naam} - ${pakketLabels[data.pakket] || data.pakket}`,
    html: buildEmailHTML(data),
  });

  // Send confirmation email to the person who signed up
  await transporter.sendMail({
    from: `"Slaagsnel Rijschool" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: `Bedankt voor je inschrijving bij Slaagsnel!`,
    html: buildConfirmationEmailHTML(data),
  });
}
