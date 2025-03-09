import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppProvider from '@/context/AppContext';
import { ReactQuery } from '@/Providers/QueryProvider';
import { Toaster } from '@/components/ui/toaster';
import NextProgressBar from '@/Providers/NextProgressBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autobuy',
  description: 'Autobuy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProgressBar>
          <ReactQuery>
            <AppProvider>
              {children}
              <Toaster />
            </AppProvider>
          </ReactQuery>
        </NextProgressBar>
      </body>
    </html>
  );
}
