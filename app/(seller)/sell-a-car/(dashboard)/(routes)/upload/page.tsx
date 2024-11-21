'use client';
import React, { useState } from 'react';
import VehicleQuantity from './_components/VehicleQuantity';
import VehicleInventory from './_components/VehicleInventory';

const Upload = () => {
  const [noVehicle] = useState<string>('2');
  const [selectedComponent, setSelectedComponent] = useState(1);

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
