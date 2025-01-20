'use client';
import React, { useState } from 'react';
import VehicleQuantity from './_components/VehicleQuantity';
import VehicleInventory from './_components/VehicleInventory';
import { useGetAllVehicles } from '@/app/(seller)/api/upload';

const Upload = () => {
  const [noVehicle] = useState<string>('2');
  const [selectedComponent, setSelectedComponent] = useState(1);

  const { data: vehicle } = useGetAllVehicles();
  console.log(vehicle, 'vehicle');

  return (
    <main className="mx-4  ">
      {noVehicle === '3' ? (
        <VehicleQuantity />
      ) : (
        <div>
          {selectedComponent === 1 && (
            <VehicleInventory addVehicle={() => setSelectedComponent(2)} />
          )}
          {selectedComponent === 2 && <VehicleQuantity />}
        </div>
      )}
    </main>
  );
};

export default Upload;
