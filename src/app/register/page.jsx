// app/register/page.js
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RegisterForm from "./RegisterForm";

export default async function RegisterPage() {
  const cookieHeader = cookies().toString();

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/me`, {
    headers: { Cookie: cookieHeader },
    cache: "no-store",
  });

  const data = await res.json();

  if (!data.user) redirect("/login");

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center",textAlign:"center"}}>
      <h1>Registrar</h1>
      <RegisterForm />
    </div>
  );
}
