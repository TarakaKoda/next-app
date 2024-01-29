import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import {prisma} from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: validation.error }, { status: 400 });
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  if (body.email === user.email)
    return NextResponse.json(
      { error: "You cannot have the same email as the previous one." },
      { status: 400 },
    );

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  const checkUniqueUser = await prisma.user.findUnique({
    where: {
      email: updatedUser.email,
    },
  });

  if (checkUniqueUser)
    return NextResponse.json(
      { error: "User with the same email exists. Please try another email." },
      { status: 400 },
    );

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  const DeletedUser = await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({}, { status: 200 });
}
