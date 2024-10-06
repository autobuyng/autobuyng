'use client';
import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import React, { createContext, useEffect, useState } from 'react';
import { set } from 'react-hook-form';

type AppContextTypes = {
  name: string;
  moreVehicle: string;
  setVehicleId: (vehicleId: string) => void;
  vehicleId: string;
  vehicleList: VEHICLE_SEARCH_RESULTS_PROPS[];
};

const initialAppState: AppContextTypes = {
  name: 'AppState',
  moreVehicle: '',
  setVehicleId: () => {},
  vehicleId: '1',
  vehicleList: [],
};

export const AppContext = createContext<AppContextTypes>(initialAppState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [moreVehicle, setMoreVehicles] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehicleList, setVehicleList] = useState<VEHICLE_SEARCH_RESULTS_PROPS[]>([]);
  console.log(vehicleId, 'vehicleId');

  useEffect(() => {
    const vehicleIndex = VEHICLE_SEARCH_RESULTS.findIndex((vehicle) => vehicle.id === vehicleId);
    const NextFive = VEHICLE_SEARCH_RESULTS.slice(vehicleIndex, vehicleIndex + 6);
    setVehicleList(NextFive);
    console.log(NextFive, 'NextFive');
    console.log(vehicleIndex, 'vehicleIndex');

    // setVehicleList();
  }, [vehicleId]);

  return (
    <AppContext.Provider
      value={{ name: 'AppState', moreVehicle, setVehicleId, vehicleList, vehicleId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
