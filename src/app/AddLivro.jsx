'use client';
import { useRouter } from "next/navigation";

export default function AddLivroButton() {
  const router = useRouter();

  async  function handleClick() {
    router.push("/register/book");
  

  }
  return <button onClick={handleClick} style={{backgroundColor:"blueviolet",fontSize:"1.3rem", color:"black", padding:"0.8rem",fontFamily:"monospace"}}>Adicionar Livro</button>;
}
