import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fliption Assignment',
  description: 'Head Swap',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
