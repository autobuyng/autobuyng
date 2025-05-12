import type { Metadata } from 'next';
import BuyerLayout from '../layout';

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
  return <BuyerLayout>{children}</BuyerLayout>;
}
