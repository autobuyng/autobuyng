import React from 'react';

import samlplevehicle from '@/app/(buyer)/assets/vehice1.avif';
import { ProductCard } from '@/app/(buyer)/_components/ProductCard/ProductCard';

const Saved = () => {
  const TOP_SELLING_VEHICLE = [
    {
      id: '1',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
    {
      id: '2',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
    {
      id: '3',
      name: 'Tesla',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
    {
      id: '4',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
  ];

  return (
    <div className="mb-10">
      <div className="mt-6 w-full  grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-8 sm:gap-x-4 md:gap-y-8">
        {TOP_SELLING_VEHICLE.map((vehicle) => {
          return (
            <h1>vehicle</h1>
            // <ProductCard
            //   key={vehicle._id}
            //   make={vehicle.make}
            //   images={vehicle.images}
            //   vehicleModel={vehicle.vehicleModel}
            //   mileage={vehicle.mileage}
            //   vehicleType={vehicle.vehicleType}
            //   price={vehicle.price}
            //   engine={vehicle.engine}
            //   transmission={vehicle.transmission}
            //   vin={vehicle.vin}
            //   fuelConsumption={vehicle.fuelConsumption}
            //   exteriorColor={vehicle.exteriorColor}
            //   interiorColor={vehicle.interiorColor}
            //   fuelType={vehicle.fuelType}
            //   vehicleYear={vehicle.vehicleYear}
            //   condition={vehicle.condition}
            //   _id={vehicle._id}
            // />
          );
        })}
      </div>
    </div>
  );
};

export default Saved;
