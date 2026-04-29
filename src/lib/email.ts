import nodemailer from "nodemailer";
import type { ContactFormSchema } from "./validations";

const serviceTypeLabels: Record<string, string> = {
  administration: "Gestion Administrative",
  finance: "Accompagnement Financier",
  digital: "Transformation Digitale",
  coaching: "Coaching Entrepreneurial",
  transition: "Management de Transition",
  autre: "Autre",
};

// ── Ancienne méthode Gmail SMTP (désactivée) ──────────────────────────────────
// Utilisait Gmail avec un App Password 16 caractères (sans espaces).
// Variables requises : SMTP_HOST=smtp.gmail.com, SMTP_PORT=587,
//                      SMTP_USER=xxx@gmail.com, SMTP_PASS=app-password-16-chars
//
// function createTransporterGmail() {
//   return nodemailer.createTransport({
//     host: process.env.SMTP_HOST || "smtp.gmail.com",
//     port: Number(process.env.SMTP_PORT) || 587,
//     secure: false,          // STARTTLS sur port 587
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//     tls: {
//       rejectUnauthorized: process.env.NODE_ENV === "production",
//     },
//   });
// }
// ─────────────────────────────────────────────────────────────────────────────

// Méthode actuelle : serveur SMTP OVH
// Port 465 → SSL/TLS natif (SMTP_SECURE=true)
// Port 587 → STARTTLS     (SMTP_SECURE=false) — fallback si 465 est bloqué
function createTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "ssl0.ovh.net",
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

export async function sendContactEmails(data: ContactFormSchema): Promise<void> {
  const transporter = createTransporter();

  const serviceLabel = serviceTypeLabels[data.serviceType] || data.serviceType;
  const fullName = `${data.firstName} ${data.lastName}`;
  const adminEmail = process.env.ADMIN_EMAIL || "test@md-transition.fr";
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "test@md-transition.fr";

  // Email de confirmation au client
  const clientEmailHtml = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation de votre message - MD Transition</title>
</head>
<body style="margin:0;padding:0;background-color:#FFFDEE;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;margin-top:20px;margin-bottom:20px;box-shadow:0 4px 20px rgba(20,52,89,0.1);">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0C2038 0%,#143459 100%);padding:40px 32px;text-align:center;">
      <h1 style="color:#ffffff;font-size:28px;margin:0;font-weight:700;">MD Transition</h1>
      <p style="color:#F29430;font-size:14px;margin:8px 0 0;letter-spacing:1px;text-transform:uppercase;">Facilitateur & Partenaire</p>
    </div>

    <!-- Body -->
    <div style="padding:40px 32px;">
      <h2 style="color:#143459;font-size:22px;margin:0 0 16px;">Bonjour ${data.firstName},</h2>
      <p style="color:#737373;font-size:16px;line-height:1.7;margin:0 0 20px;">
        Merci pour votre message ! J'ai bien reçu votre demande concernant <strong style="color:#143459;">${serviceLabel}</strong> et je vous répondrai dans les plus brefs délais.
      </p>
      <p style="color:#737373;font-size:16px;line-height:1.7;margin:0 0 32px;">
        En attendant, sachez que je prends le temps de lire chaque message avec attention. Votre projet mérite une écoute personnalisée, et c'est exactement ce que je vous offrirai.
      </p>

      <!-- Message résumé -->
      <div style="background:#f8f9fa;border-left:4px solid #F29430;border-radius:8px;padding:20px 24px;margin-bottom:32px;">
        <h3 style="color:#143459;font-size:14px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">Récapitulatif de votre message</h3>
        <p style="color:#737373;font-size:14px;margin:4px 0;"><strong>Type de besoin :</strong> ${serviceLabel}</p>
        <p style="color:#737373;font-size:14px;margin:4px 0;"><strong>Message :</strong></p>
        <p style="color:#737373;font-size:14px;margin:4px 0;font-style:italic;">"${data.message}"</p>
      </div>

      <p style="color:#737373;font-size:16px;line-height:1.7;margin:0 0 32px;">
        À très vite,<br>
        <strong style="color:#143459;">L'équipe MD Transition</strong>
      </p>

      <!-- CTA -->
      <div style="text-align:center;">
        <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://md-transition.fr"}" style="display:inline-block;background:linear-gradient(135deg,#F29430,#D97B18);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:16px;">
          Visiter notre site
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f8f9fa;padding:24px 32px;text-align:center;border-top:1px solid #e5e7eb;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">
        MD Transition — Facilitateur & Partenaire pour entrepreneurs<br>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://md-transition.fr"}" style="color:#143459;text-decoration:none;">md-transition.fr</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();

  // Email de notification admin
  const adminEmailHtml = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Nouvelle demande de contact - MD Transition</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:20px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#0C2038,#143459);padding:32px;text-align:center;">
      <h1 style="color:#ffffff;font-size:22px;margin:0;">Nouvelle demande de contact</h1>
      <p style="color:#F29430;font-size:14px;margin:8px 0 0;">MD Transition — Formulaire de contact</p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px;background:#f8f9fa;border-radius:6px 0 0 6px;font-size:14px;color:#6b7280;font-weight:600;width:35%;">Nom complet</td>
          <td style="padding:12px;background:#f8f9fa;border-radius:0 6px 6px 0;font-size:14px;color:#143459;font-weight:700;">${fullName}</td>
        </tr>
        <tr><td colspan="2" style="padding:4px;"></td></tr>
        <tr>
          <td style="padding:12px;background:#f8f9fa;border-radius:6px 0 0 6px;font-size:14px;color:#6b7280;font-weight:600;">Email</td>
          <td style="padding:12px;background:#f8f9fa;border-radius:0 6px 6px 0;font-size:14px;color:#143459;"><a href="mailto:${data.email}" style="color:#F29430;">${data.email}</a></td>
        </tr>
        <tr><td colspan="2" style="padding:4px;"></td></tr>
        ${
          data.phone
            ? `
        <tr>
          <td style="padding:12px;background:#f8f9fa;border-radius:6px 0 0 6px;font-size:14px;color:#6b7280;font-weight:600;">Téléphone</td>
          <td style="padding:12px;background:#f8f9fa;border-radius:0 6px 6px 0;font-size:14px;color:#143459;"><a href="tel:${data.phone}" style="color:#F29430;">${data.phone}</a></td>
        </tr>
        <tr><td colspan="2" style="padding:4px;"></td></tr>
        `
            : ""
        }
        <tr>
          <td style="padding:12px;background:#f8f9fa;border-radius:6px 0 0 6px;font-size:14px;color:#6b7280;font-weight:600;">Type de besoin</td>
          <td style="padding:12px;background:#f8f9fa;border-radius:0 6px 6px 0;font-size:14px;color:#143459;font-weight:700;">${serviceLabel}</td>
        </tr>
        <tr><td colspan="2" style="padding:4px;"></td></tr>
        <tr>
          <td style="padding:12px;background:#f8f9fa;border-radius:6px 0 0 6px;font-size:14px;color:#6b7280;font-weight:600;vertical-align:top;">Message</td>
          <td style="padding:12px;background:#f8f9fa;border-radius:0 6px 6px 0;font-size:14px;color:#143459;line-height:1.6;">${data.message.replace(/\n/g, "<br>")}</td>
        </tr>
        <tr><td colspan="2" style="padding:4px;"></td></tr>
        <tr>
          <td style="padding:12px;background:#f8f9fa;border-radius:6px 0 0 6px;font-size:14px;color:#6b7280;font-weight:600;">Date</td>
          <td style="padding:12px;background:#f8f9fa;border-radius:0 6px 6px 0;font-size:14px;color:#143459;">${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</td>
        </tr>
      </table>

      <div style="margin-top:24px;text-align:center;">
        <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(135deg,#F29430,#D97B18);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;">
          Répondre à ${data.firstName}
        </a>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  await Promise.all([
    transporter.sendMail({
      from: `"MD Transition" <${fromEmail}>`,
      to: data.email,
      subject: `Confirmation de votre message — MD Transition`,
      html: clientEmailHtml,
    }),
    transporter.sendMail({
      from: `"MD Transition - Formulaire" <${fromEmail}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: `[MD Transition] Nouvelle demande de ${fullName} — ${serviceLabel}`,
      html: adminEmailHtml,
    }),
  ]);
}
