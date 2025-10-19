// app/register/RegisterForm.js
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Erro');
    } else {
      alert('Registrado com sucesso. Faça login.');
      router.push('/login');
    }
  }

  return (
    <form onSubmit={handleSubmit}  style={{display:"flex",flexDirection:"column",gap:".04rem",alignItems:"center",textAlign:"center"}}>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
      <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
      <button type="submit">Registrar</button>
    </form>
  );
}
