// app/layout.js
import './globals.css';

export const metadata = {
  title: 'NextBook',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true">
        <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
          <a href="/">NextBook</a> — <a href="/about">Sobre</a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
