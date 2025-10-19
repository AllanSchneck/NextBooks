'use client';
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return <button onClick={handleLogout} style={{backgroundColor:"red",color:"white",fontSize:"1.3rem",textAlign:"center", padding:"0.8rem",fontFamily:"monospace"}}>Sair</button>;
}
