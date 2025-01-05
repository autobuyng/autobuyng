'use client';

import React from 'react';
import { ColProductCard, ProductCard } from '../ProductCard/ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { SkeletonCard } from '@/components/Loader/SkeletonCard';
import { SearchResponseData } from '@/types/types';

type ResultProps = {
  displayFormat: boolean;
  isPending: boolean;
  setSearchResult: React.Dispatch<React.SetStateAction<SearchResponseData | null>>;
  searchResult: SearchResponseData | null;
  isError: boolean;
  error: any;
};
const Result = ({ displayFormat, searchResult, isPending, isError, error }: ResultProps) => {
  const { isMobile } = useIsMobile();
  // const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);

  // const { search, isPending } = useSearchVehicle();
  // const searchParams = useSearchParams();
  // const keyword = searchParams.get('keyword') || '';
  // const handleSearch = async (data: SearchQuery) => {
  //   try {
  //     const response = await search(data);
  //     setSearchResult(response.data);
  //     // router.push(`/results/keyword=${data.keyword}`);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleSearch({
  //     keyword: keyword,
  //   });
  // }, []);

  if (isPending) {
    return (
      <div className="grid grid-cols-1 min-[564px]:grid-cols-2 min-[830px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-x-4 sm:gap-y-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, index) => (
          <SkeletonCard key={index} />
          // <div key={index} className="h-40 bg-gray-200 animate-pulse rounded-lg">
          // </div>
        ))}
      </div>
    );
  }

  if (isError) {
    <main className="mb-8 w-full  flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 mt-56">{error}</h1>
      </div>
    </main>;
  }

  if (searchResult && searchResult.vehicles.length === 0) {
    return (
      <main className="mb-8 w-full  flex items-center justify-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 mt-56">No Result Found</h1>
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
          {searchResult?.vehicles.map((result) => {
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
          {searchResult?.vehicles.map((result) => {
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
