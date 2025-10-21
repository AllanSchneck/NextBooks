// app/register/page.js
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RegisterForm from "./RegisterForm";
import ContainerPage from "@/app/components/ContainerPage";

export default async function pageBook() {
  const cookieHeader = cookies();

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/me`, {
    headers: { Cookie: cookieHeader },
    cache: "no-store",
  });

  const data = await res.json();

  if (!data.user) redirect("/login");

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center",textAlign:"center"}}>
      <h1>Registre seu Livro</h1>
      <RegisterForm />
    </div>
  );
}
