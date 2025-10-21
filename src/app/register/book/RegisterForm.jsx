'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author }),
    });
    if (res.ok) {
      router.push('/books');
    } else {
      alert('Erro ao cadastrar livro');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', alignItems: 'center' }}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" required />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Autor" required />
      <button type="submit">Registrar</button>
    </form>
  );
}
