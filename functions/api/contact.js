export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, company, message } = data;
  if (!name || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 422 });
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
  `;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Zenex Flow Website <noreply@zenexflow.com>',
      to: ['info@zenexflow.com'],
      reply_to: email,
      subject: `New consultation request from ${name}`,
      html,
    }),
  });

  if (!r.ok) {
    const err = await r.text();
    console.error('Resend error:', err);
    return Response.json({ error: 'Failed to send email' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
