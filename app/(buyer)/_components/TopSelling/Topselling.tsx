import React from 'react';

import samlplevehicle from '@/app/(buyer)/assets/vehice1.avif';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

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
      name: 'Mercedes Benz',
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

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-4 ">
          {TOP_SELLING_VEHICLE.map((vehicle) => {
            return (
              <div key={vehicle.id} className="rounded-md shadow-md cursor-pointer">
                <div>
                  <Image src={vehicle.Img} alt={vehicle.id} className="rounded-md" />
                </div>
                <div className="px-1.5 pt-3 pb-1.5 flex flex-col gap-1">
                  <p className="font-[600]">{vehicle.name}</p>
                  <p>{vehicle.model}</p>
                  <p className="text-primary-700 font-[700]"> ₦ {vehicle.price}</p>
                  <p>{vehicle.mileage}</p>
                  <p>{vehicle.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export default Topselling;
