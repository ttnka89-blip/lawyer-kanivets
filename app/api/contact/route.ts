import { NextResponse } from "next/server";
import { Resend } from "resend";

type ConsultationRequest = {
  name?: string;
  phone?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Lawyer Kanivets <onboarding@resend.dev>";
  const toEmail = process.env.CONTACT_TO_EMAIL || "avtopravo1@gmail.com";

  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const body = (await request.json()) as ConsultationRequest;
  const name = clean(body.name);
  const phone = clean(body.phone);
  const message = clean(body.message);

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const text = [
    "Нова заявка з сайту lawyer-kanivets.vercel.app",
    "",
    `Ім'я: ${name}`,
    `Телефон: ${phone}`,
    message ? `Повідомлення: ${message}` : "Повідомлення: не вказано"
  ].join("\n");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: "Нова заявка з сайту",
    text,
    replyTo: toEmail
  });

  if (error) {
    return NextResponse.json({ error: "Email request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
