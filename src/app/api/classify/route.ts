import { NextResponse } from "next/server";
import { classifyBusiness } from "@/lib/business/classifier";

type ClassifyRequestBody = {
  business?: unknown;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ClassifyRequestBody;
  const business = typeof body.business === "string" ? body.business : "";

  if (!business.trim()) {
    return NextResponse.json(
      { error: "Informe o campo business para classificar o negocio." },
      { status: 400 }
    );
  }

  return NextResponse.json(classifyBusiness(business));
}
