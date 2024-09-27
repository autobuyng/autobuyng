import React from 'react';

import samlplevehicle from '@/app/(buyer)/assets/vehice1.avif';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { ProductCard } from '../ProductCard/ProductCard';

const Topselling = () => {
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
    <MaxWidthWrapper>
      <main className="mt-14 mb-10">
        <div className="text-center">
          <h1 className=" font-bold text-neutral-900 textlg sm:text-3xl">
            Our Top Selling Vehicle
          </h1>
          <p className="text-[10px] sm:text-sm text-neutral-700">
            Here is a few of our top selling cars carefully curated by the Autobuy algorithm
          </p>
        </div>

        <div className="mt-6 w-full  grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 sm:gap-4">
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
      </main>
    </MaxWidthWrapper>
  );
};

export default Topselling;
