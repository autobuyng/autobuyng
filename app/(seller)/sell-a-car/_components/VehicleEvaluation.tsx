'use client';

import React, { useState } from 'react';

import SelectInput from '@/components/SelectInput/SelectInput';
import { CAR_BRANDS, MAX_YEAR, PRICE_RANGE, YEAR } from '@/constants/constants';
import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';

type Props = {
  vehicleEvaluation: () => void;
};

const VehicleEvaluation = ({ vehicleEvaluation }: Props) => {
  const [price, setPrice] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [year, setYear] = useState<string>('');
  //   const router = useRouter();
  const os = useDetectOS();

  return (
    <div
      className={cn(
        'w-full min-[350px]:w-full sm:w-[340px] mx-auto   h-fit bg-white shadow-[1px_1px_16px_4px_#1F1F1F1A]',
        {
          // 'h-[400px] px-0 ': os === 'Windows',
        },
      )}
    >
      <div className="px-4 pt-4 pb-4">
        <div className="text-center  md:text-xl">
          <h1
            className={cn('font-semibold tracking-wide mt-4 py-2 text-secondary-700', {
              'py-0': os === 'Windows',
            })}
          >
            Evaluate Your Vehicle
          </h1>
          <p className="font-normal text-xs text-center mb-3">
            Check what your vehicle is worth according to today’s standard vehicle price.
          </p>
        </div>
        <div className="flex w-full gap-4 ">
          <div className=" w-full h-fit pt-2  ">
            <p className="text-xs  ">Make</p>

            <SelectInput
              list={MAX_YEAR}
              title="Make"
              setSelectedInput={setBrand}
              selectedInput={brand}
              width="w-full"
              height="h-8"
            />
          </div>

          <div className=" w-full  h-fit pt-2 ">
            <p className="text-xs  ">Model</p>

            <SelectInput
              list={MAX_YEAR}
              title="Model"
              setSelectedInput={setBrand}
              selectedInput={brand}
              width="w-full"
              height="h-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between mt-4">
          <div className="flex flex-col items-center w-full gap-4 ">
            <div className="w-full">
              <p className="text-xs  ">Year of manufacture</p>
              <SelectInput
                list={CAR_BRANDS}
                title="Brand/Model"
                setSelectedInput={setBrand}
                selectedInput={brand}
                width="w-full"
                height="h-8"
              />
            </div>
            {/* <div className="flex w-full g"> */}
            <div className="w-full">
              <p className="text-xs  ">Condition</p>
              <SelectInput
                list={PRICE_RANGE}
                title="Price Range"
                setSelectedInput={setPrice}
                selectedInput={price}
                width="w-full "
                height="h-8"
              />
            </div>
            <div className="w-full">
              <p className="text-xs  ">Ownership history</p>
              <SelectInput
                list={YEAR}
                title="Year"
                setSelectedInput={setYear}
                selectedInput={year}
                width="w-full "
                height="h-8"
              />
            </div>
            {/* <div className="w-full">
              <p className="text-xs  ">Max year</p>
              <SelectInput
                list={YEAR}
                title="Year"
                setSelectedInput={setYear}
                selectedInput={year}
                width="w-full "
                height="h-8"
              />
            </div> */}
          </div>

          <div className="w-full  flex items-end justify-end ">
            <button
              onClick={vehicleEvaluation}
              className={cn(
                'bg-secondary-500 text-white font-semibold h-12 w-full rounded-[10px] flex items-center justify-center',
                // {
                //   'h-8': os === 'Windows',
                // },
              )}
            >
              Check Price Range
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleEvaluation;
