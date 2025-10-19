'use client';
import { useRouter } from "next/navigation";

export default function LivrosButton() {
  const router = useRouter();

  async  function handleClick() {
    router.push("/books");
  

  }
  return <button onClick={handleClick} style={{backgroundColor:"yellowgreen",fontSize:"1.3rem", color:"black", padding:"0.8rem",fontFamily:"monospace"}}>Livros</button>;
}
