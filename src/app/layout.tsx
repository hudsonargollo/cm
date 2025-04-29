import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modo Caverna - Sua jornada de transformação',
  description: 'Sua jornada de transformação começa aqui. Os próximos 40 dias podem mudar completamente sua vida.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
