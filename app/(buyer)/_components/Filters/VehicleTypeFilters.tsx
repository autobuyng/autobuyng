'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { VEHICLE_BRAND, VEHICLE_TYPE } from '@/constants/constants';
import { usePathname, useRouter } from 'next/navigation';
import { setLocalItem } from '@/lib/localStorage';
import { FilterProps } from '@/types/types';
import { useStore } from '@/store/useStore';

const VehicleTypeFilters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setFilters } = useStore();
  // const [, setVehicleType] = useState<string>('');
  const [visibleCards, setVisibleCards] = useState<number>(14);

  const showMoreCards = () => {
    setVisibleCards(Number(VEHICLE_BRAND.length));
  };
  const showLessCards = () => {
    setVisibleCards(14);
  };

  useEffect(() => {
    setLocalItem('previousPage', pathname);
  }, [pathname]);

  const handlVehicleTypeClick = (key: string) => {
    setFilters((prev: FilterProps) => ({ ...prev, vehicle_type: key }));
    router.push(`/results/vehicle_type=${key}`);
  };

  const handleVehicleBrandClick = (key: string) => {
    setFilters((prev: FilterProps) => ({ ...prev, make: key }));
    router.push(`/results/make=${key}`);
  };

  const renderCarBrands = useCallback(
    () =>
      VEHICLE_BRAND?.slice(0, visibleCards).map((vehicle) => (
        <div
          onClick={() => handleVehicleBrandClick(vehicle.name)}
          key={vehicle.id}
          className="flex flex-col  py-6 items-center justify-center cursor-pointer shadow-[0px_2px_14px_0px_#0000001A] rounded-[8px]"
        >
          <Image src={vehicle.Img} alt={vehicle.name} className="px-1 flex-shrink-0" />
        </div>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleCards],
  );

  return (
    <MaxWidthWrapper>
      <div className="mt-8">
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
                onClick={() => handlVehicleTypeClick(vehicle.name)}
                key={vehicle.id}
                className="flex flex-col p-2 items-center cursor-pointer justify-center shadow-[0px_2px_14px_0px_#0000001A] rounded-[8px]"
              >
                <Image src={vehicle.Img} alt={vehicle.name} />
                <p>{vehicle.name}</p>
              </div>
            );
          })}
        </div>

        <section className="mt-16 mb-8 py-3">
          <div className="">
            <p className=" sm:text-[18px] text-primary-700 font-bold">CHOOSE YOUR FAVORITE BRAND</p>
            <p className="text-[10px] sm:text-sm text-neutral-700">
              Find a vehicle that fits your everyday life
            </p>
          </div>

          <div className="my-4 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-4 transition-all duration-150">
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
      </div>
    </MaxWidthWrapper>
  );
};

export default VehicleTypeFilters;
