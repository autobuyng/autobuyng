import Footer from '@/components/Footer/Footer';
import AppProvider from '@/context/AppContext';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <main>
        <AppProvider>{children}</AppProvider>
      </main>
      <Footer />
    </main>
  );
};

export default MainLayout;
