const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_NAME_LENGTH = 120;
const MAX_SUBJECT_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_BUDGET_LENGTH = 60;

type ContactBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
};

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => {
    json: (payload: unknown) => void;
  };
};

function cleanText(value: unknown, maxLength: number): string {
  return String(value ?? '').trim().slice(0, maxLength);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function parseBody(body: unknown): ContactBody {
  const parsed = typeof body === 'string' ? JSON.parse(body) : body;
  const source = (parsed ?? {}) as Record<string, unknown>;

  return {
    name: cleanText(source.name, MAX_NAME_LENGTH),
    email: cleanText(source.email, 320).toLowerCase(),
    subject: cleanText(source.subject, MAX_SUBJECT_LENGTH),
    message: cleanText(source.message, MAX_MESSAGE_LENGTH),
    budget: cleanText(source.budget, MAX_BUDGET_LENGTH),
  };
}

function buildTextEmail(body: ContactBody): string {
  return [
    'New portfolio contact message',
    '',
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Budget: ${body.budget || 'Not provided'}`,
    `Subject: ${body.subject || 'No subject'}`,
    '',
    'Message:',
    body.message,
  ].join('\n');
}

function buildHtmlEmail(body: ContactBody): string {
  return [
    '<h2>New portfolio contact message</h2>',
    `<p><strong>Name:</strong> ${escapeHtml(body.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(body.email)}</p>`,
    `<p><strong>Budget:</strong> ${escapeHtml(body.budget || 'Not provided')}</p>`,
    `<p><strong>Subject:</strong> ${escapeHtml(body.subject || 'No subject')}</p>`,
    '<p><strong>Message:</strong></p>',
    `<pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${escapeHtml(body.message)}</pre>`,
  ].join('');
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({
      success: false,
      error: 'method_not_allowed',
      message: 'Only POST requests are allowed.',
    });
  }

  let body: ContactBody;
  try {
    body = parseBody(req.body);
  } catch {
    return res.status(400).json({
      success: false,
      error: 'invalid_json',
      message: 'Invalid request payload.',
    });
  }

  if (!body.name) {
    return res.status(400).json({
      success: false,
      error: 'validation_error',
      message: 'Name is required.',
    });
  }
  if (!body.email || !EMAIL_REGEX.test(body.email)) {
    return res.status(400).json({
      success: false,
      error: 'validation_error',
      message: 'A valid email is required.',
    });
  }
  if (!body.message) {
    return res.status(400).json({
      success: false,
      error: 'validation_error',
      message: 'Message is required.',
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'codesmith95316@gmail.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  if (!resendApiKey) {
    console.error('Missing RESEND_API_KEY');
    return res.status(500).json({
      success: false,
      error: 'missing_config',
      message: 'Email service is not configured.',
    });
  }

  const payload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: body.email,
    subject: body.subject || `New message from ${body.name}`,
    text: buildTextEmail(body),
    html: buildHtmlEmail(body),
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseJson = (await response.json().catch(() => null)) as { id?: string; message?: string } | null;

    if (!response.ok) {
      console.error('Resend request failed', response.status, responseJson);
      return res.status(502).json({
        success: false,
        error: 'delivery_failed',
        message: 'Unable to send email right now. Please try again later.',
      });
    }

    return res.status(200).json({
      success: true,
      id: responseJson?.id,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Unexpected contact API error', error);
    return res.status(502).json({
      success: false,
      error: 'delivery_failed',
      message: 'Unable to send email right now. Please try again later.',
    });
  }
}
