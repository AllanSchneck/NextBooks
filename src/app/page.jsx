import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./logout"; // importa o client component
import LivrosButton from "./livros"
import AddLivroButton from "./AddLivro"
import ContainerPage from "./components/ContainerPage"


export default async function Home() {
  const cookieHeader = cookies().toString();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}http://localhost:3000/api/auth/me`, {
    headers: { Cookie: cookieHeader },
    cache: "no-store",
  });


  const data = await res.json();

  if (!data.user) redirect("/login");

    
 
  return (
    
    <div style={{ padding: "2rem",display:"flex", flexDirection:"column", alignItems:"center" , gap:"2rem" }}>
      <h1>Bem-vindo, {data.user.name}</h1>
      <ContainerPage>
        <LivrosButton></LivrosButton>
        <AddLivroButton></AddLivroButton>
        <LogoutButton></LogoutButton>
      </ContainerPage>
    </div>
  );
}
