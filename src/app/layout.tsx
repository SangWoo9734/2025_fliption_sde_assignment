import TanStackQueryProvider from '@/components/provider/TanstackQueryProvider';
import type { Metadata } from 'next';
import AppWrapper from '../components/layout/AppWrapper';
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
      <body>
        <TanStackQueryProvider>
          <AppWrapper>{children}</AppWrapper>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
