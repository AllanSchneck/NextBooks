// app/about/page.js
export const revalidate = 3600;

export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sobre o NextBook</h1>
      <p>Exemplo de Next.js + Prisma + NextAuth + UUID.</p>
    </div>
  );
}
