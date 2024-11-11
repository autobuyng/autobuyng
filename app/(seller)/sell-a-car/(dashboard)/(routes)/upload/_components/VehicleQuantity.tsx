import React from 'react';
import Link from 'next/link';

const VehicleQuantity = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="mt-16 space-y-16 text-center ">
        <h1 className="text-2xl font-bold ">How Many Vehicle would you like to upload</h1>
        <div className="space-x-4">
          <Link
            href="/sell-a-car/upload/single-vehicle"
            className="text-white cursor-pointer bg-secondary-500 hover:bg-white hover:text-secondary-500 hover:boder hover:border-secondary-500 hover:shadow-md  text-center rounded-md py-2 px-4"
          >
            1 - 2
          </Link>
          <Link
            href="/sell-a-car/upload/multiple-vehicle"
            className="text-white cursor-pointer bg-secondary-500 hover:bg-white hover:text-secondary-500 hover:boder hover:border-secondary-500 hover:shadow-md text-center rounded-md py-2 px-4"
          >
            3 or more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleQuantity;
