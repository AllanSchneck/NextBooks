// app/register/page.jsx
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  async function registerBook(formData) {
    "use server";
    const title = formData.get("title");
    const author = formData.get("author");

    await prisma.book.create({ data: { title, author } });
    redirect("/books");
  }

  return (
    <form action={registerBook} style={{display:"flex",flexDirection:"column",gap:".04rem",alignItems:"center",textAlign:"center"}}>
      <input style={{backgroundColor:"azure",color:"black",padding:"1rem"}} name="title" placeholder="Título" required /><br/>
      <input style={{backgroundColor:"azure",color:"black", padding:"1rem"}} name="author" placeholder="Autor" required /><br/>
      <button type="submit" style={{backgroundColor:"yellow",fontSize:"1.3rem", color:"black", padding:"0.8rem",fontFamily:"monospace"}}>Registrar</button>
    </form>
  );
}
