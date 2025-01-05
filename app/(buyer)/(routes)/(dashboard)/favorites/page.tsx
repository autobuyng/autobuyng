'use client';

import React, { useEffect, useState } from 'react';

import { ProductCard } from '@/app/(buyer)/_components/ProductCard/ProductCard';
import { Vehicle } from '@/types/types';
import { useGetFavoriteVehicle } from '@/app/(buyer)/api/user';

const Saved = () => {
  const [isClient, setIsClient] = useState(false);
  const { data, isLoading, isError } = useGetFavoriteVehicle();

  useEffect(() => {
    setIsClient(true);
    if (data) {
      console.log(data, 'favorite vehicles');
    }
  }, [data]);

  if (!isClient) {
    return null; // or a loading spinner
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching favorite vehicles</div>;
  }

  const vehicles = data?.data || [];

  console.log(data?.data, vehicles, 'vehicles');

  if (vehicles.length === 0) {
    return <div>No favorite vehicles found.</div>;
  }

  // const TOP_SELLING_VEHICLE: Vehicle[] = [
  //   {
  //     make: 'Toyota',
  //     images: ['', ''],
  //     vehicleModel: 'Corolla',
  //     mileage: '20000',
  //     vehicleType: [],
  //     price: '15000',
  //     engine: '1.8L',
  //     transmission: 'Automatic',
  //     vin: '1HGCM82633A123456',
  //     fuelConsumption: '30 MPG',
  //     exteriorColor: 'Black',
  //     interiorColor: 'Beige',
  //     fuelType: 'Gasoline',
  //     vehicleYear: 2020,
  //     condition: 'Used',
  //     _id: '1',
  //   },
  //   {
  //     make: 'Ford',
  //     images: ['', ''],
  //     vehicleModel: 'Mustang',
  //     mileage: '15000',
  //     vehicleType: [],
  //     price: 35000,
  //     engine: '5.0L V8',
  //     transmission: 'Manual',
  //     vin: '1FTFW1E5XJFE12345',
  //     fuelConsumption: '22 MPG',
  //     exteriorColor: 'Red',
  //     interiorColor: 'Black',
  //     fuelType: 'Gasoline',
  //     vehicleYear: 2022,
  //     condition: 'New',
  //     _id: '2',
  //   },
  //   {
  //     make: 'Honda',
  //     images: ['', ''],
  //     vehicleModel: 'Civic',
  //     mileage: '25000',
  //     vehicleType: [],
  //     price: 20000,
  //     engine: '2.0L',
  //     transmission: 'CVT',
  //     vin: '2HGFB2F52GH123456',
  //     fuelConsumption: '32 MPG',
  //     exteriorColor: 'Blue',
  //     interiorColor: 'Gray',
  //     fuelType: 'Gasoline',
  //     vehicleYear: 2021,
  //     condition: 'Used',
  //     _id: '3',
  //   },
  // ];

  return (
    <div className="mb-10 mx-4 min-h-screen">
      <div className="mt-6 w-full  grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-4 md:gap-y-8">
        {vehicles.map((vehicle: Vehicle) => {
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
