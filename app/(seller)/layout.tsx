import SellerProvider from '@/context/SellerContext';

const SelleryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SellerProvider>{children}</SellerProvider>
    </div>
  );
};

export default SelleryLayout;
