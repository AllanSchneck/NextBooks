// src/app/books/page.jsx
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import BookActions from "./BookActions";
import ContainerPage from "../components/ContainerPage";
import { Columns } from "lucide-react";

export default async function AllBooksPage() {
  const books = await prisma.book.findMany({
    orderBy: { id: "asc" },
  });

  if (!books || books.length === 0) {
    return <p style={{ padding: "2rem" }}>Nenhum livro encontrado 📚</p>;
  }

  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",gap:"5rem"}}>
      <h1 style={{marginTop:"2rem", fontSize:"2rem"}}>📚 Lista de Livros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: "1rem" }}>
            <Link href={`/books/${book.id}`}>
              <strong>{book.title}</strong> — {book.author}
            </Link>
            <BookActions book={book} /> {/* Aqui passa o livro */}
          </li>
        ))}
      </ul>
    </div>
  );
}
