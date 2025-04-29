import type { Metadata } from 'next';
import 'globals.css'; // Adjust the path if 'globals.css' is located elsewhere

export const metadata: Metadata = {
  title: 'Modo Caverna - Desperte a sua melhor versão',
  description:
    'Ative o MODO CAVERNA, desperte a sua melhor versão e acelere a conquista dos seus sonhos. Menos procrastinação, ansiedade e distrações. Mais propósito, foco, produtividade e resultados.',
  openGraph: {
    title: 'Modo Caverna - Desperte a sua melhor versão',
    description:
      'Ative o MODO CAVERNA, desperte a sua melhor versão e acelere a conquista dos seus sonhos',
    url: 'https://modocaverna.com',
    siteName: 'Modo Caverna',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
