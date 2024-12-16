'use client';

import React, { useEffect, useState } from 'react';
import { ColProductCard, ProductCard } from '../ProductCard/ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { SkeletonCard } from '@/components/Loader/SkeletonCard';
import { useSearchParams } from 'next/navigation';
import { SearchQuery, SearchResponseData } from '@/types/types';
import { useSearchVehicle } from '../../api/search';

type ResultProps = {
  displayFormat: boolean;
  isLoading?: boolean;
};
const Result = ({ displayFormat }: ResultProps) => {
  const { isMobile } = useIsMobile();
  const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);

  const { search, isPending } = useSearchVehicle();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const handleSearch = async (data: SearchQuery) => {
    try {
      const response = await search(data);
      setSearchResult(response.data);
      // router.push(`/results/keyword=${data.keyword}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch({
      keyword: keyword,
    });
  }, []);

  if (searchResult?.data.length === 0) {
    return (
      <main className="mb-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">No Result Found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="mb-8">
      {displayFormat || isMobile ? (
        <div
          className={cn(
            'grid grid-cols-1 min-[564px]:grid-cols-2 min-[830px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-x-4 sm:gap-y-8',
          )}
        >
          {searchResult?.data.map((result) => {
            if (isPending) {
              return <SkeletonCard key={result._id} />;
            }
            return (
              <div key={result._id}>
                <ProductCard
                  key={result._id}
                  make={result.make}
                  images={result.images}
                  vehicleModel={result.vehicleModel}
                  mileage={result.mileage}
                  vehicleType={result.vehicleType}
                  price={result.price}
                  engine={result.engine}
                  transmission={result.transmission}
                  vin={result.vin}
                  fuelConsumption={result.fuelConsumption}
                  exteriorColor={result.exteriorColor}
                  interiorColor={result.interiorColor}
                  fuelType={result.fuelType}
                  vehicleYear={result.vehicleYear}
                  condition={result.condition}
                  _id={result._id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4 ">
          {searchResult?.data.map((result) => {
            return (
              <ColProductCard
                key={result._id}
                make={result.make}
                images={result.images}
                vehicleModel={result.vehicleModel}
                mileage={result.mileage}
                vehicleType={result.vehicleType}
                price={result.price}
                engine={result.engine}
                transmission={result.transmission}
                vin={result.vin}
                fuelConsumption={result.fuelConsumption}
                exteriorColor={result.exteriorColor}
                interiorColor={result.interiorColor}
                fuelType={result.fuelType}
                vehicleYear={result.vehicleYear}
                condition={result.condition}
                _id={result._id}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Result;
