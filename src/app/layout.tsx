import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cave Awakening',
  description: 'An immersive journey into the depths of the cave',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}