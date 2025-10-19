// app/books/[id]/page.js
import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const books = await prisma.book.findMany();
  return books.map(b => ({ id: b.id }));
}

export default async function BookDetail({ params }) {
  const book = await prisma.book.findUnique({ where: { id: params.id }});
  if (!book) return <p>Livro não encontrado.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <a href="/">⬅ Voltar</a>
      <h1>{book.title}</h1>
      <p>Autor: {book.author}</p>
    </div>
  );
}
