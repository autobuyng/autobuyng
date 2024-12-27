'use client';
import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import { SearchResponseData, VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import React, { createContext, useEffect, useState } from 'react';

type AppContextTypes = {
  name: string;
  moreVehicle: string;
  setVehicleId: (vehicleId: string) => void;
  vehicleId: string;
  vehicleList: VEHICLE_SEARCH_RESULTS_PROPS[];
  user: boolean;
  setUser: (user: boolean) => void;
  searchResult: SearchResponseData | null;
  setSearchResult: React.Dispatch<React.SetStateAction<SearchResponseData | null>>;
};

const initialAppState: AppContextTypes = {
  name: 'AppState',
  moreVehicle: '',
  setVehicleId: () => {},
  vehicleId: '1',
  vehicleList: [],
  user: false,
  setUser: () => {},
  searchResult: null,
  setSearchResult: () => {},
};

export const AppContext = createContext<AppContextTypes>(initialAppState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [moreVehicle, setMoreVehicles] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleList, setVehicleList] = useState<VEHICLE_SEARCH_RESULTS_PROPS[]>([]);
  const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);

  useEffect(() => {
    const vehicleIndex = VEHICLE_SEARCH_RESULTS.findIndex((vehicle) => vehicle.id === vehicleId);
    const NextFive = VEHICLE_SEARCH_RESULTS.slice(vehicleIndex, vehicleIndex + 8);
    setVehicleList(NextFive);

    // setVehicleList();
  }, [vehicleId]);

  return (
    <AppContext.Provider
      value={{
        name: 'AppState',
        moreVehicle,
        setVehicleId,
        vehicleList,
        vehicleId,
        user,
        setUser,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
