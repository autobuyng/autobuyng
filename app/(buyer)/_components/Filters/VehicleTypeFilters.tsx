'use client';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { VEHICLE_BRAND, VEHICLE_TYPE } from '@/constants/constants';

const VehicleTypeFilters = () => {
  const [, setVehicleType] = useState<string>('');
  const [visibleCards, setVisibleCards] = useState<number>(12);

  const showMoreCards = () => {
    setVisibleCards(Number(VEHICLE_BRAND.length));
  };
  const showLessCards = () => {
    setVisibleCards(12);
  };

  const renderCarBrands = useCallback(
    () =>
      VEHICLE_BRAND?.slice(0, visibleCards).map((vehicle) => (
        <div
          onClick={() => setVehicleType(vehicle.name)}
          key={vehicle.id}
          className="flex flex-col px- py-6 items-center justify-center shadow-[0px_2px_14px_0px_#0000001A] rounded-[8px]"
        >
          <Image src={vehicle.Img} alt={vehicle.name} className="px-1 flex-shrink-0" />
        </div>
      )),
    [visibleCards],
  );

  return (
    <MaxWidthWrapper>
      <main className="mt-8">
        <div className="text-center">
          <h1 className=" font-bold ext-neutral-900 textlg sm:text-3xl">Save more time!</h1>
          <p className="text-[10px] sm:text-sm text-neutral-700">
            Select one of the options that best describes what you’re looking for
          </p>
        </div>

        <div className="mt-12">
          <p className=" sm:text-[18px] text-primary-700 font-bold">CHOOSE VEHICLE TYPE</p>
          <p className="text-[10px] sm:text-sm text-neutral-700">
            Find a vehicle that fits your needs
          </p>
        </div>

        <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4">
          {VEHICLE_TYPE?.map((vehicle) => {
            return (
              <div
                onClick={() => setVehicleType(vehicle.name)}
                key={vehicle.id}
                className="flex flex-col p-2 items-center justify-center shadow-[0px_2px_14px_0px_#0000001A] rounded-[8px]"
              >
                <Image src={vehicle.Img} alt={vehicle.name} />
                <p>{vehicle.name}</p>
              </div>
            );
          })}
        </div>

        <section className="mt-16 mb-8">
          <div className="">
            <p className=" sm:text-[18px] text-primary-700 font-bold">CHOOSE YOUR FAVORITE BRAND</p>
            <p className="text-[10px] sm:text-sm text-neutral-700">
              Find a vehicle that fits your everyday life
            </p>
          </div>

          <div className="my-4 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-4 transition-all duration-150">
            {renderCarBrands()}
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={visibleCards < VEHICLE_BRAND.length ? showMoreCards : showLessCards}
              className="bg-primary-900 py-2 px-4 rounded-md text-white capitalize"
            >
              {visibleCards < Number(VEHICLE_BRAND.length) ? 'see more' : 'see less'}
            </button>
          </div>
        </section>
      </main>
    </MaxWidthWrapper>
  );
};

export default VehicleTypeFilters;
