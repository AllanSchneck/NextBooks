// app/api/register/book/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, author } = await req.json();

    if (!title || !author) {
      return NextResponse.json({ error: "Preencha todos os campos" }, { status: 400 });
    }

    const existing = await prisma.book.findFirst({ where: { title } });
    if (existing) {
      return NextResponse.json({ error: "Título já existe" }, { status: 400 });
    }

    const book = await prisma.book.create({
      data: {title, author},
    });

    return NextResponse.json({ id: book.id, title: book.title }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao registrar" }, { status: 500 });
  }
}
export async function PATCH(req, { params }) {
  try {
    const { id } = params; // ID do livro da URL
    const { title, author } = await req.json();

    if (!title || !author) {
      return NextResponse.json({ error: "Preencha todos os campos" }, { status: 400 });
    }

    const book = await prisma.book.update({
      where: { id: Number(id) },
      data: { title, author },
    });

    return NextResponse.json(book, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao atualizar" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await prisma.book.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Livro apagado com sucesso" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao apagar" }, { status: 500 });
  }
}
