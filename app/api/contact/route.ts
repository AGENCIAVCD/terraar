import { Resend } from "resend";
import { NextResponse } from "next/server";

const DESTINATION_EMAIL = "comercial@terraarbrasil.com.br";
const DEFAULT_FROM_EMAIL = "Terraar Brasil <onboarding@resend.dev>";

type ContactPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

const sanitize = (value: string) => value.replace(/[<>]/g, "").trim();

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "RESEND_API_KEY nao configurada." }, { status: 500 });
  }

  const body = (await request.json()) as ContactPayload;
  const name = sanitize(body.name ?? "");
  const phone = sanitize(body.phone ?? "");
  const message = sanitize(body.message ?? "");

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Preencha nome, WhatsApp e mensagem." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  try {
    await resend.emails.send({
      from,
      to: [DESTINATION_EMAIL],
      subject: `Novo lead comercial do site - ${name}`,
      replyTo: DESTINATION_EMAIL,
      text: [
        "Novo lead comercial recebido pelo site Terraar Brasil.",
        "Entre em contato o quanto antes para avancar com a cotacao e fechar a locacao.",
        "",
        `Nome: ${name}`,
        `WhatsApp: ${phone}`,
        "",
        "Necessidade do cliente:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">Novo lead comercial recebido pelo site Terraar Brasil</h2>
          <p style="margin-bottom: 16px; color: #b45309;"><strong>Atendimento recomendado:</strong> responder rapido com cotacao, disponibilidade e prazo de entrega para aumentar a chance de fechamento.</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>WhatsApp:</strong> ${phone}</p>
          <p><strong>Necessidade do cliente:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar contato com Resend:", error);
    return NextResponse.json({ error: "Nao foi possivel enviar o contato agora." }, { status: 500 });
  }
}
