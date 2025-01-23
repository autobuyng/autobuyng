import React from 'react';
import { Plus } from 'lucide-react';

type Props = {
  addVehicle: () => void;
};

const VehicleInventory = ({ addVehicle }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold md:text-2xl">Upload</h1>

        <button
          onClick={addVehicle}
          type="button"
          className="bg-secondary-500 text-white px-3 py-2 rounded-md whitespace-nowrap flex items-center"
        >
          <Plus /> <span>Add Vehicle</span>
        </button>
      </div>
      <div className="mt-4 shadow-[1px_1px_16px_4px_#1F1F1F1A]  rounded-md border "></div>
    </>
  );
};

export default VehicleInventory;
