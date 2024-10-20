'use client';
import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import React, { createContext, useEffect, useState } from 'react';

type AppContextTypes = {
  name: string;
  moreVehicle: string;
  setVehicleId: (vehicleId: string) => void;
  vehicleId: string;
  vehicleList: VEHICLE_SEARCH_RESULTS_PROPS[];
  user: boolean;
  setUser: (user: boolean) => void;
};

const initialAppState: AppContextTypes = {
  name: 'AppState',
  moreVehicle: '',
  setVehicleId: () => {},
  vehicleId: '1',
  vehicleList: [],
  user: false,
  setUser: () => {},
};

export const AppContext = createContext<AppContextTypes>(initialAppState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(true);
  const [moreVehicle, setMoreVehicles] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleList, setVehicleList] = useState<VEHICLE_SEARCH_RESULTS_PROPS[]>([]);
  console.log(user, 'user context');

  useEffect(() => {
    const vehicleIndex = VEHICLE_SEARCH_RESULTS.findIndex((vehicle) => vehicle.id === vehicleId);
    const NextFive = VEHICLE_SEARCH_RESULTS.slice(vehicleIndex, vehicleIndex + 8);
    setVehicleList(NextFive);
    console.log(NextFive, 'NextFive');
    console.log(vehicleIndex, 'vehicleIndex');

    // setVehicleList();
  }, [vehicleId]);

  return (
    <AppContext.Provider
      value={{ name: 'AppState', moreVehicle, setVehicleId, vehicleList, vehicleId, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
