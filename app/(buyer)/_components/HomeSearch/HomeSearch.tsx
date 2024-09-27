'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import SelectInput from '@/components/SelectInput/SelectInput';
import { CAR_BRANDS, PRICE_RANGE, YEAR } from '@/constants/constants';

const HomeSearch = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [price, setPrice] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const router = useRouter();

  const CAR_CATEGORY = [
    { id: 1, text: 'All', key: 'all' },
    { id: 2, text: 'New', key: 'new' },
    { id: 3, text: 'Used', key: 'used' },
  ];
  // sm:w-[450px]
  return (
    <main
      className={cn(
        'w-full min-[350px]:w-[90%] sm:w-[335px] mx-auto px-4  rounded-[20px] bg-white',
        {
          // 'h-[400px] px-0 ': os === 'Windows',
        },
      )}
    >
      <div className="px-4 pt-4 pb-8">
        <div className="text-center  md:text-xl">
          <h1
            className={cn('font-bold text-primary-700 tracking-wide ', {
              // 'py-0': os === 'Windows',
            })}
          >
            Find Your Next Vehicle
          </h1>
        </div>

        <div className="flex w-full items-center justify-between">
          {CAR_CATEGORY.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <div
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  'w-full font-bold text-sm text-center py-2 cursor-pointer transition-all duration-150',
                  {
                    'border-b-[3px]  border-primary-700': isActive,
                  },
                )}
                key={category.id}
              >
                {category.text}
              </div>
            );
          })}
        </div>

        <div className="w-full py-2">
          <input
            type="text"
            placeholder="Search by make, model or body style"
            className="block w-full py-2 px-5 border border-neutral-700 outline-none rounded-md"
          />
        </div>

        <div className="w-full flex justify-between items-center gap-[5px]">
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
          <span>or</span>
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between mt-4">
          <div className="flex flex-col items-center w-full gap-3 ">
            <div className="w-full">
              <SelectInput
                list={CAR_BRANDS}
                title="Brand/Model"
                setSelectedInput={setBrand}
                selectedInput={brand}
                width="w-full "
              />
            </div>
            {/* <div className="flex w-full gap-3"> */}
            <div className="w-full">
              <SelectInput
                list={PRICE_RANGE}
                title="Price Range"
                setSelectedInput={setPrice}
                selectedInput={price}
                width="w-full "
              />
            </div>
            <div className="w-full">
              <SelectInput
                list={YEAR}
                title="Year"
                setSelectedInput={setYear}
                selectedInput={year}
                width="w-full "
              />
            </div>
            {/* </div> */}
          </div>

          <div className="w-full  flex items-end justify-end ">
            <button
              onClick={() => router.push('results/make-BMW?mileage=2-598899')}
              className={cn(
                'bg-primary-700 text-white font-semibold h-12 w-full rounded-[10px] flex items-center justify-center',
                // {
                //   'h-8': os === 'Windows',
                // },
              )}
            >
              Search inventory
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSearch;
