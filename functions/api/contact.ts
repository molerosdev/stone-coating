// Cloudflare Pages Function — POST /api/contact
//
// Receives the multipart form submission from /contact, validates the
// fields + photo attachments, builds a branded HTML email with the
// project photos embedded inline (base64 data: URIs) AND included as
// regular attachments for clients that strip inline images, and sends
// it via Resend (https://resend.com).
//
// Required environment variables (set in Cloudflare Pages → Settings →
// Environment variables, _without_ the PUBLIC_ prefix so they stay
// server-side):
//   - RESEND_API_KEY      — Resend API key (re_…)
//   - CONTACT_TO_EMAIL    — recipient inbox, e.g. info@stonecoatingresinous.com
//   - CONTACT_FROM_EMAIL  — verified sender, e.g. "Stone Coating Quotes <quotes@stonecoatingresinous.com>"

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

const MAX_FILES = 3;
const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

type Attachment = {
  filename: string;
  contentType: string;
  base64: string;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  // Chunk to stay under String.fromCharCode's argument-count limit.
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(
      null,
      Array.from(bytes.subarray(i, i + chunk)),
    );
  }
  return btoa(binary);
};

const renderEmailHtml = (data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  contactMethod: string;
  message: string;
  attachments: Attachment[];
}): string => {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;background:#F3F8FC;border-bottom:1px solid #D8E2EA;width:170px;font:600 11px/1.4 Inter,Arial,sans-serif;color:#145CFF;text-transform:uppercase;letter-spacing:0.12em;">${esc(label)}</td>
      <td style="padding:10px 16px;background:#FFFFFF;border-bottom:1px solid #D8E2EA;font:400 14px/1.55 Inter,Arial,sans-serif;color:#101820;">${esc(value)}</td>
    </tr>`;

  const messageBlock = `
    <tr>
      <td colspan="2" style="padding:18px 16px;background:#FFFFFF;border-bottom:1px solid #D8E2EA;">
        <div style="font:600 11px/1.4 Inter,Arial,sans-serif;color:#145CFF;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:8px;">Project Description</div>
        <div style="font:400 14px/1.6 Inter,Arial,sans-serif;color:#101820;white-space:pre-wrap;">${esc(data.message)}</div>
      </td>
    </tr>`;

  const photosBlock = data.attachments.length
    ? `
    <tr>
      <td colspan="2" style="padding:18px 16px;background:#FFFFFF;">
        <div style="font:600 11px/1.4 Inter,Arial,sans-serif;color:#145CFF;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:14px;">Project Photos (${data.attachments.length})</div>
        ${data.attachments
          .map(
            (a) => `
          <div style="margin-bottom:14px;">
            <img src="data:${a.contentType};base64,${a.base64}" alt="${esc(a.filename)}" style="display:block;max-width:560px;width:100%;height:auto;border-radius:8px;border:1px solid #D8E2EA;" />
            <div style="font:400 12px/1.4 Inter,Arial,sans-serif;color:#8A8A8A;margin-top:6px;">${esc(a.filename)}</div>
          </div>`,
          )
          .join('')}
      </td>
    </tr>`
    : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>New flooring quote request</title>
</head>
<body style="margin:0;padding:24px 12px;background:#0B1F3A;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:640px;width:100%;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 18px 45px rgba(11,31,58,0.18);">
    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg,#0B1F3A 0%,#123C69 45%,#145CFF 100%);padding:32px 28px;">
        <div style="font:600 11px/1.4 Inter,Arial,sans-serif;color:#4DB8FF;text-transform:uppercase;letter-spacing:0.28em;margin-bottom:10px;">New quote request</div>
        <h1 style="margin:0;font:700 26px/1.2 Montserrat,Inter,Arial,sans-serif;color:#FFFFFF;letter-spacing:-0.01em;">${esc(data.name)} &middot; ${esc(data.service)}</h1>
        <p style="margin:12px 0 0;font:400 14px/1.5 Inter,Arial,sans-serif;color:#D8E2EA;">A new project request was submitted from the Stone Coating &amp; Resinous website.</p>
      </td>
    </tr>

    <!-- Body table -->
    <tr>
      <td style="padding:0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse:collapse;">
          ${row('Full Name', data.name)}
          ${row('Phone', data.phone)}
          ${row('Email', data.email)}
          ${row('Service Wanted', data.service)}
          ${row('Property Type', data.propertyType)}
          ${row('Preferred Contact', data.contactMethod)}
          ${messageBlock}
          ${photosBlock}
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#F3F8FC;padding:20px 28px;border-top:1px solid #D8E2EA;">
        <p style="margin:0;font:400 12px/1.5 Inter,Arial,sans-serif;color:#8A8A8A;">Reply directly to this email to respond to ${esc(data.name)} at ${esc(data.email)}. Photos are also available as downloadable attachments below.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Fail fast on missing config so the error surfaces in the form's
  // error panel instead of the email silently never arriving.
  const missingEnv = (
    ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL'] as const
  ).filter((key) => !env[key]);
  if (missingEnv.length) {
    return json(
      {
        error:
          'Server email config missing. Set ' +
          missingEnv.join(', ') +
          ' in Cloudflare Pages environment variables.',
      },
      500,
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: 'Could not parse form submission.' }, 400);
  }

  // Honeypot: silently succeed so bots don't learn anything.
  if ((formData.get('_gotcha')?.toString() ?? '').trim()) {
    return json({ success: true });
  }

  const get = (key: string) => (formData.get(key)?.toString() ?? '').trim();
  const fields = {
    name: get('name'),
    phone: get('phone'),
    email: get('email'),
    service: get('service'),
    propertyType: get('property_type'),
    contactMethod: get('contact_method'),
    message: get('message'),
  };

  const required: Array<[keyof typeof fields, string]> = [
    ['name', 'Full name'],
    ['phone', 'Phone number'],
    ['email', 'Email'],
    ['service', 'Service'],
    ['propertyType', 'Property type'],
    ['contactMethod', 'Preferred contact method'],
    ['message', 'Message'],
  ];
  const missing = required.filter(([k]) => !fields[k]).map(([, label]) => label);
  if (missing.length) {
    return json(
      { error: `Missing required field${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}.` },
      400,
    );
  }

  // Process attachments — accept up to MAX_FILES image files of MAX_BYTES each.
  const rawFiles = formData
    .getAll('attachments')
    .filter((v): v is File => v instanceof File && v.size > 0);

  if (rawFiles.length > MAX_FILES) {
    return json({ error: `Maximum ${MAX_FILES} photos allowed.` }, 400);
  }

  const attachments: Attachment[] = [];
  for (const file of rawFiles) {
    if (file.size > MAX_BYTES) {
      return json({ error: `"${file.name}" exceeds the 5MB limit.` }, 400);
    }
    const contentType = (file.type || 'application/octet-stream').toLowerCase();
    if (!ALLOWED_TYPES.includes(contentType)) {
      return json(
        { error: `"${file.name}" is not a supported image type (JPG, PNG, WEBP).` },
        400,
      );
    }
    const base64 = arrayBufferToBase64(await file.arrayBuffer());
    attachments.push({ filename: file.name, contentType, base64 });
  }

  const html = renderEmailHtml({ ...fields, attachments });

  const resendBody = {
    from: env.CONTACT_FROM_EMAIL,
    to: [env.CONTACT_TO_EMAIL],
    reply_to: fields.email,
    subject: `New flooring quote from ${fields.name} — ${fields.service}`,
    html,
    attachments: attachments.map((a) => ({
      filename: a.filename,
      content: a.base64,
    })),
  };

  let resendRes: Response;
  try {
    resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendBody),
    });
  } catch (err) {
    return json(
      { error: `Could not reach Resend: ${err instanceof Error ? err.message : String(err)}` },
      502,
    );
  }

  if (!resendRes.ok) {
    let detail = `HTTP ${resendRes.status}`;
    try {
      const body = await resendRes.text();
      try {
        const parsed = JSON.parse(body);
        detail = parsed.message ?? parsed.name ?? body.slice(0, 240);
      } catch {
        detail = body.slice(0, 240) || detail;
      }
    } catch {
      // ignore
    }
    return json({ error: `Resend rejected the request: ${detail}` }, 502);
  }

  return json({ success: true });
};

// Reject anything other than POST so direct GETs don't 404 silently.
export const onRequest: PagesFunction<Env> = ({ request }) => {
  return json(
    { error: `Method ${request.method} not allowed on /api/contact.` },
    405,
  );
};
