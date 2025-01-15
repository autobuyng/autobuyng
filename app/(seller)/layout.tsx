import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autobuy',
  description: 'Autobuy',
  icons: {
    icon: {
      url: '/icons/seller.svg',
    },
  },
};

const SelleryLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SelleryLayout;
