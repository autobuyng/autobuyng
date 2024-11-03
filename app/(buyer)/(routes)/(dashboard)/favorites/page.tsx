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
            <ProductCard
              key={vehicle.id}
              id={vehicle.id}
              name={vehicle.name}
              Img={vehicle.Img}
              model={vehicle.model}
              mileage={vehicle.mileage}
              category={vehicle.category}
              price={vehicle.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Saved;
