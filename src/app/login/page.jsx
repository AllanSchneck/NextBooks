'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erro ao fazer login");
      return;
    }

    router.push("/");
  }

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center",textAlign:"center"}}>
      <h1 style={{marginTop:"2rem", fontSize:"2rem"}}>Login</h1>
      <form onSubmit={handleSubmit}  style={{display:"flex",flexDirection:"column",gap:".04rem",alignItems:"center",textAlign:"center"}}>
        <input 
          style={{backgroundColor:"azure",color:"black", padding:"1rem"}} 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          style={{backgroundColor:"azure",color:"black", padding:"1rem"}} 
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button  invisible type="submit"></button>
      </form>
    </div>
  );
}
