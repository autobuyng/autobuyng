'use client';
import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import React, { createContext, useEffect, useState } from 'react';

type AppContextTypes = {
  name: string;
  moreVehicle: string;
  setVehicleId: (vehicleId: string) => void;
};

const initialAppState: AppContextTypes = {
  name: 'AppState',
  moreVehicle: '',
  setVehicleId: () => {},
};

export const AppContext = createContext<AppContextTypes>(initialAppState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [moreVehicle, setMoreVehicles] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleList, setVehicleList] = useState<VEHICLE_SEARCH_RESULTS_PROPS[]>([]);
  console.log(vehicleId, 'vehicleId');

  // useEffect(() => {
  //   const filteredResult = VEHICLE_SEARCH_RESULTS.findIndex((vehicle) => vehicle.id === vehicleId);
  //   console.log(filteredResult, 'filteredResult');

  //   // setVehicleList();
  // }, [vehicleList]);

  return (
    <AppContext.Provider value={{ name: 'AppState', moreVehicle, setVehicleId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
