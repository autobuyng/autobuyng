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

  const vehicles = data?.likedVehicles || [];

  if (vehicles.length === 0) {
    return <div>No favorite vehicles found.</div>;
  }

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
