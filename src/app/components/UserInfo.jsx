// app/components/UserInfo.jsx
'use client';
import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  if (!session) {
    return <div style={{ marginBottom: '1rem' }}>Você não está logado.</div>;
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>Olá, {session.user.name}</strong> — <button onClick={() => signOut()}>Sair</button>
    </div>
  );
}
