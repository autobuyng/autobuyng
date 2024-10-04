'use client';
import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import React from 'react';
import { ColProductCard, ProductCard } from '../ProductCard/ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { SkeletonCard } from '@/components/Loader/SkeletonCard';
import { StaticImageData } from 'next/image';

type ResultProps = {
  displayFormat: boolean;
  isLoading: boolean;
};
const Result = ({ displayFormat, isLoading }: ResultProps) => {
  const { isMobile } = useIsMobile();
  return (
    <main className="mb-8">
      {displayFormat || isMobile ? (
        <div
          className={cn(
            'grid grid-cols-1 min-[564px]:grid-cols-2 min-[830px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-x-4 sm:gap-y-8',
          )}
        >
          {VEHICLE_SEARCH_RESULTS.map((result, index) => {
            if (isLoading) {
              return <SkeletonCard key={result.id} />;
            }
            return (
              <div key={result.id}>
                <ProductCard
                  index={index}
                  // key={result.id}
                  id={result.id}
                  name={result.name}
                  Img={result.Img as StaticImageData}
                  model={result.model}
                  mileage={result.mileage}
                  category={result.category}
                  price={result.price}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4 ">
          {VEHICLE_SEARCH_RESULTS.map((result) => {
            return (
              <ColProductCard
                key={result.id}
                id={result.id}
                name={result.name}
                Img={result.Img}
                model={result.model}
                mileage={result.mileage}
                category={result.category}
                price={result.price}
                engin={result.engin}
                transmission={result.transmission}
                desc={result.desc}
                vin={result.vin}
                bodyStyle={result.bodyStyle}
                mpg={result.mpg}
                color={result.color}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Result;
