import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id, name: "Milk", price: 50 }, { status: 200 });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: validation.error }, { status: 400 });
  if (id > 10)
    return NextResponse.json({ error: "Product not found." }, { status: 404 });

  return NextResponse.json({ id, name: body.name, price: body.price });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  return NextResponse.json({}, { status: 200 });
}
