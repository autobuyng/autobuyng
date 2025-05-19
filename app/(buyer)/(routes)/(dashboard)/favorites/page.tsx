'use client';

import React, { useEffect, useState } from 'react';

import { ProductCard } from '@/app/(buyer)/_components/ProductCard/ProductCard';
import { Vehicle } from '@/types/types';
import { useGetFavoriteVehicle } from '@/app/(buyer)/api/user';
import { getLocalItem } from '@/lib/localStorage';

const Saved = () => {
  const [isClient, setIsClient] = useState(false);
  const [likedVehicle, setLikedVehicle] = useState<Set<string>>(new Set());
  const localLikedVehicles: string[] = getLocalItem("localLikedVehicles");
  const [localLikedVehicle, setLocalLikedVehicle] = useState<string[]>(localLikedVehicles);
  const { data, isLoading, isError } = useGetFavoriteVehicle();

  useEffect(() => {
    setIsClient(true);

  }, [data]);

  useEffect(() => {
    if (data) {
      const likedCars = new Set(data?.likedVehicles.map(({ _id }) => _id));
      setLikedVehicle(likedCars);
    } else {
      // const likedCars = new Set(localLikedVehicles?.map((id: string) => id));
      setLocalLikedVehicle(localLikedVehicles || []);
    }

  }, [data]);

  if (!isClient) {
    return null; 
  }

  if (isLoading) {
    return <CarListingSkeleton />;
  }

  if (isError) {
    return <div className="h-screen grid place-items-center">Error fetching favorite vehicles</div>;
  }

  const vehicles = data?.likedVehicles || [];

  if (vehicles.length === 0) {
    return <div>No favorite vehicles found.</div>;
  }

  return (
    <div className="mb-10 mx-4 min-h-screen">
      <div className="mt-6 w-full  grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-x-4 md:gap-y-8">
        {vehicles.map((vehicle: Vehicle) => {
          return (
            <ProductCard
              key={vehicle._id}
              vehicle={vehicle}
              likedVehicle={likedVehicle}
              localLikedVehicle={localLikedVehicle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Saved;

function CarListingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Image skeleton */}
          <div className="relative w-full">
            <div className="aspect-[16/10] bg-gray-200 animate-pulse" />
            {/* Photo count skeleton */}
            <div className="absolute bottom-2 right-2 bg-gray-300 animate-pulse rounded px-2 py-1 w-12" />
            {/* Heart icon skeleton */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-gray-300 animate-pulse rounded-full" />
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Title */}
            <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4" />

            {/* Tags row */}
            <div className="flex gap-4">
              <div className="h-5 bg-gray-200 animate-pulse rounded w-24" />
              <div className="h-5 bg-gray-200 animate-pulse rounded w-24" />
            </div>

            {/* Price */}
            <div className="h-7 bg-gray-200 animate-pulse rounded w-1/2" />

            {/* Button */}
            <div className="h-10 bg-blue-200 animate-pulse rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
