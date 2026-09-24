import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 500) => String(value ?? '').replace(/[\r\0]/g, '').trim().slice(0, max);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const message = clean(body.message, 5000);
    const reason = clean(body.reason, 180);

    if (name.length < 2 || !emailPattern.test(email) || message.length < 10 || !reason) {
      return NextResponse.json({ error: 'Please complete the required fields with valid information.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || 'larry.johansen@3sengdesign.com';
    const from = process.env.CONTACT_FROM || user;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';

    if (!host || !user || !pass || !from) {
      return NextResponse.json({ error: 'The contact form mail transport has not been configured yet.' }, { status: 503 });
    }

    const fields = {
      Company: clean(body.company, 180),
      Phone: clean(body.phone, 80),
      Address: clean(body.address, 220),
      City: clean(body.city, 120),
      State: clean(body.state, 80),
      ZIP: clean(body.zip, 30)
    };

    const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `3S website inquiry: ${reason}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Reason: ${reason}`,
        ...Object.entries(fields).map(([key, value]) => `${key}: ${value || '—'}`),
        '',
        'Message:',
        message
      ].join('\n')
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send your message right now. Please try again or email 3S directly.' }, { status: 500 });
  }
}
