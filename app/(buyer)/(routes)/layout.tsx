import type { Metadata } from 'next';
import BuyerLayout from '../layout';
import { Suspense } from 'react';
import Loader from '@/LoadingSkeleton/loader';

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
    <Suspense fallback={<Loader />}>
      <BuyerLayout>{children}</BuyerLayout>
    </Suspense>
  );
}
