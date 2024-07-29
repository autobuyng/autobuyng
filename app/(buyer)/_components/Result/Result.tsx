import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import React from 'react';
import { ColProductCard, ProductCard } from '../ProductCard/ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';
import { SkeletonCard } from '@/components/Loader/SkeletonCard';

type ResultProps = {
  displayFormat: boolean;
  isLoading: boolean;
};
const Result = ({ displayFormat, isLoading }: ResultProps) => {
  const { isMobile } = useIsMobile();
  const os = useDetectOS();
  return (
    <main>
      {displayFormat || isMobile ? (
        <div
          className={cn(
            'grid grid-cols-1 min-[564px]:grid-cols-2 min-[830px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-4 ',
            {
              'xl:grid-cols-4': os === 'macOS',
            },
          )}
        >
          {VEHICLE_SEARCH_RESULTS.map((result) => {
            if (isLoading) {
              return <SkeletonCard key={result.id} />;
            }
            return (
              <ProductCard
                key={result.id}
                id={result.id}
                name={result.name}
                Img={result.Img}
                model={result.model}
                mileage={result.mileage}
                category={result.category}
                price={result.price}
              />
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
