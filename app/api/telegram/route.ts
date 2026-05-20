import { NextResponse } from "next/server";

type ConsultationRequest = {
  name?: string;
  phone?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Telegram is not configured" }, { status: 500 });
  }

  const body = (await request.json()) as ConsultationRequest;
  const name = clean(body.name);
  const phone = clean(body.phone);
  const message = clean(body.message);

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const text = [
    "Нова заявка з сайту lawyer-kanivets.vercel.app",
    "",
    `Ім'я: ${name}`,
    `Телефон: ${phone}`,
    message ? `Повідомлення: ${message}` : "Повідомлення: не вказано"
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true
    })
  });

  if (!telegramResponse.ok) {
    return NextResponse.json({ error: "Telegram request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
