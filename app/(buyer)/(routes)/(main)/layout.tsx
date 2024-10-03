import Footer from '@/components/Footer/Footer';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <main>{children}</main>;
      <Footer />
    </main>
  );
};

export default MainLayout;
