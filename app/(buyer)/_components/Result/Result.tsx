import { VEHICLE_SEARCH_RESULTS } from '@/constants/constants';
import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

const Result = () => {
  return (
    <main>
      <div className="  grid grid-cols-1 min-[564px]:grid-cols-2 min-[830px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-4 ">
        {VEHICLE_SEARCH_RESULTS.map((result) => {
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
    </main>
  );
};

export default Result;
