'use client';
import React, { useCallback, useState } from 'react';

import samlplevehicle from '@/app/(buyer)/assets/vehice1.avif';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { ProductCard } from '../ProductCard/ProductCard';

const Topselling = () => {
  const [visibleCar, setVisibleCar] = useState<number>(4);

  const showMoreCar = () => {
    setVisibleCar(Number(TOP_SELLING_VEHICLE.length));
  };
  const showLessCar = () => {
    setVisibleCar(4);
  };

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
    {
      id: '5',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
    {
      id: '6',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
    {
      id: '7',
      name: 'Tesla',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
    {
      id: '8',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: samlplevehicle,
    },
  ];

  const renderTopCars = useCallback(
    () =>
      TOP_SELLING_VEHICLE?.slice(0, visibleCar).map((vehicle) => (
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
      )),
    [TOP_SELLING_VEHICLE, visibleCar],
  );

  return (
    <MaxWidthWrapper>
      <div className="mt-14 mb-10 py-3">
        <div className="text-center">
          <h1 className=" font-bold text-neutral-900 textlg sm:text-3xl">
            Our Top Selling Vehicle
          </h1>
          <p className="text-[10px] sm:text-sm text-neutral-700">
            Here is a few of our top selling cars carefully curated by the Autobuy algorithm
          </p>
        </div>

        <div className="mt-6 w-full grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 sm:gap-4">
          {renderTopCars()}
        </div>

        <div className="flex items-center justify-center my-6">
          <button
            onClick={visibleCar < TOP_SELLING_VEHICLE.length ? showMoreCar : showLessCar}
            className="bg-primary-900 py-2 px-4 rounded-md text-white capitalize"
          >
            {visibleCar < Number(TOP_SELLING_VEHICLE.length) ? 'view more' : 'view less'}
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Topselling;
