// src/app/books/BookActions.jsx
'use client';

import { useRouter } from "next/navigation";

export default function BookActions({ book }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm(`Deseja realmente apagar "${book.title}"?`)) return;

    const res = await fetch(`/api//books/${book.id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const data = await res.json();
      alert(data.error || "Erro ao apagar livro");
    } else {
      router.refresh(); // Atualiza a lista de livros
    }
  }

  async function handleEdit() {
    const newTitle = prompt("Novo título:", book.title);
    const newAuthor = prompt("Novo autor:", book.author);

    if (!newTitle || !newAuthor) return;

    const res = await fetch(`/api/books/${book.id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, author: newAuthor }),
    });

    if (!res.ok) {
      const data = await res.json();
      alert(data.error || "Erro ao atualizar livro");
    } else {
      router.refresh(); // Atualiza a lista
    }
  }

  return (
    <span style={{ marginLeft: "1rem" }}>
      <button onClick={handleEdit} style={{ marginRight: "0.5rem" }}>✏️ Editar</button>
      <button onClick={handleDelete}>🗑 Apagar</button>
    </span>
  );
}
