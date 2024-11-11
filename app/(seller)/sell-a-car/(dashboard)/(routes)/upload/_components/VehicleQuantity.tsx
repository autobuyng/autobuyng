import React from 'react';
import Link from 'next/link';

const VehicleQuantity = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="mt-16 space-y-16 text-center ">
        <h1 className="text-2xl font-bold ">How Many Vehicle would you like to upload</h1>
        <div className="space-x-4 flex items-center gap-8">
          <Link
            href="/sell-a-car/upload/single-vehicle"
            className="text-white cursor-pointer w-[210px] h-[60px] flex items-center justify-center bg-secondary-500 hover:bg-white hover:text-secondary-500 hover:boder hover:border-secondary-500 hover:shadow-md  text-center rounded-md "
          >
            1 - 2
          </Link>
          <Link
            href="/sell-a-car/upload/multiple-vehicle"
            className="text-white cursor-pointer  w-[210px] h-[60px] flex items-center justify-center bg-secondary-500 hover:bg-white hover:text-secondary-500 hover:boder hover:border-secondary-500 hover:shadow-md text-center rounded-md"
          >
            3 or more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleQuantity;
