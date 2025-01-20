import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autobuy',
  description: 'Autobuy',
  icons: {
    icon: {
      url: '/icons/buyer.svg',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <main>{children}</main>
    </main>
  );
}
