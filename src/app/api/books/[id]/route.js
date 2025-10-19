// app/api/books/[id]/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const book = await prisma.book.findUnique({ where: { id } });
  if (!book) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(book);
}

export async function PUT(req, { params }) {

  const { id } = params;
  const data = await req.json();
  const book = await prisma.book.update({
    where: { id },
    data: {
      title: data.title,
      author: data.author,
    },
  });
  return NextResponse.json(book);
}

export async function DELETE(req, { params }) {

  const { id } = params;
  await prisma.book.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
