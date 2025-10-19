// app/api/books/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const books = await prisma.book.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(books);
}

export async function POST(req) {
  // proteger: somente logado pode criar
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { title, author } = await req.json();
  if (!title || !author) {
    return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });
  }

  const book = await prisma.book.create({ data: { title, author } });
  return NextResponse.json(book, { status: 201 });
}
