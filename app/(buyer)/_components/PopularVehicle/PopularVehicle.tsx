import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { POPULAR_MODEL, TRENDING_VEHICLE } from '@/constants/constants';
import React from 'react';

const PopularVehicle = () => {
  return (
    <MaxWidthWrapper>
      <div className=" mt-14 mb-8 w-full flex flex-col min-[360px]:flex-row items-center justify-between min-[450px]:gap-2 md:gap-6 lg:gap-10">
        <section className="w-full px-4">
          <h1 className="font-bold capitalize py-2 text-lg md:text-2xl border-b-2 whitespace-nowrap border-primary-500">
            trending Vehicle
          </h1>

          <div className="flex items-center justify-between py-2">
            <div>
              {TRENDING_VEHICLE.map((vehicle) => (
                <p className="py-2 text-sm whitespace-nowrap md:text-base" key={vehicle.id}>
                  {vehicle.text}
                </p>
              ))}
            </div>

            <div>
              {TRENDING_VEHICLE.map((vehicle) => (
                <p
                  className="hidden md:block py-2  whitespace-nowrap text-sm md:text-base"
                  key={vehicle.id}
                >
                  {vehicle.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-4">
          <h1 className="font-bold capitalize py-2 text-lg md:text-2xl border-b-2 border-primary-500">
            popular models
          </h1>
          <div className="flex items-center justify-between py-2  ">
            <div>
              {POPULAR_MODEL.map((vehicle) => (
                <p className="py-2 whitespace-nowrap text-sm md:text-base" key={vehicle.id}>
                  {vehicle.text}
                </p>
              ))}
            </div>

            <div>
              {POPULAR_MODEL.map((vehicle) => (
                <p
                  className="hidden md:block py-2 whitespace-nowrap text-sm md:text-base"
                  key={vehicle.id}
                >
                  {vehicle.text}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default PopularVehicle;
