import React from 'react';

import { ProductCard } from '@/app/(buyer)/_components/ProductCard/ProductCard';
import { Vehicle } from '@/types/types';

const Saved = () => {
  const TOP_SELLING_VEHICLE: Vehicle[] = [
    {
      make: 'Toyota',
      images: ['', ''],
      vehicleModel: 'Corolla',
      mileage: '20000',
      vehicleType: [],
      price: '15000',
      engine: '1.8L',
      transmission: 'Automatic',
      vin: '1HGCM82633A123456',
      fuelConsumption: '30 MPG',
      exteriorColor: 'Black',
      interiorColor: 'Beige',
      fuelType: 'Gasoline',
      vehicleYear: 2020,
      condition: 'Used',
      _id: '1',
    },
    {
      make: 'Ford',
      images: ['', ''],
      vehicleModel: 'Mustang',
      mileage: '15000',
      vehicleType: [],
      price: 35000,
      engine: '5.0L V8',
      transmission: 'Manual',
      vin: '1FTFW1E5XJFE12345',
      fuelConsumption: '22 MPG',
      exteriorColor: 'Red',
      interiorColor: 'Black',
      fuelType: 'Gasoline',
      vehicleYear: 2022,
      condition: 'New',
      _id: '2',
    },
    {
      make: 'Honda',
      images: ['', ''],
      vehicleModel: 'Civic',
      mileage: '25000',
      vehicleType: [],
      price: 20000,
      engine: '2.0L',
      transmission: 'CVT',
      vin: '2HGFB2F52GH123456',
      fuelConsumption: '32 MPG',
      exteriorColor: 'Blue',
      interiorColor: 'Gray',
      fuelType: 'Gasoline',
      vehicleYear: 2021,
      condition: 'Used',
      _id: '3',
    },
  ];

  return (
    <div className="mb-10">
      <div className="mt-6 w-full  grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-8 sm:gap-x-4 md:gap-y-8">
        {TOP_SELLING_VEHICLE.map((vehicle) => {
          return (
            <ProductCard
              key={vehicle._id}
              make={vehicle.make}
              images={vehicle.images}
              vehicleModel={vehicle.vehicleModel}
              mileage={vehicle.mileage}
              vehicleType={vehicle.vehicleType}
              price={vehicle.price}
              engine={vehicle.engine}
              transmission={vehicle.transmission}
              vin={vehicle.vin}
              fuelConsumption={vehicle.fuelConsumption}
              exteriorColor={vehicle.exteriorColor}
              interiorColor={vehicle.interiorColor}
              fuelType={vehicle.fuelType}
              vehicleYear={vehicle.vehicleYear}
              condition={vehicle.condition}
              _id={vehicle._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Saved;
