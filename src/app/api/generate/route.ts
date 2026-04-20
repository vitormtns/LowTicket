import { NextResponse } from "next/server";
import { generateContent } from "@/lib/generator/generateContent";

type GenerateRequestBody = {
  business?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as GenerateRequestBody;
  const business = typeof body.business === "string" ? body.business : "";

  if (!business.trim()) {
    return NextResponse.json(
      { error: "Informe o campo business para gerar conteúdos." },
      { status: 400 }
    );
  }

  return NextResponse.json(generateContent(business));
}
