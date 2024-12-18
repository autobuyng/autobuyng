'use client';

import React, { createContext } from 'react';

type AppContextTypes = {
  name: string;
  user: boolean;
  setUser: (user: boolean) => void;
};

const initialAppState: AppContextTypes = {
  name: 'AppState',
  user: false,
  setUser: () => {},
};

export const AppContext = createContext<AppContextTypes>(initialAppState);

const SellerProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState(false);
  return (
    <AppContext.Provider value={{ name: 'AppState', user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default SellerProvider;
