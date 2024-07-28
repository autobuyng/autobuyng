'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import SelectInput from '@/components/SelectInput/SelectInput';
import { CAR_BRANDS, PRICE_RANGE, YEAR } from '@/constants/constants';
import Search from '../../assets/search.svg';

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
    <main className=" h-fit md:h-fit  md:w-[605px] rounded-md bg-white">
      <div className="px-4 pt-4 pb-8 ">
        <div className="flex w-full items-center justify-between">
          {CAR_CATEGORY.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <div
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  'w-full font-[500] text-center py-2 cursor-pointer transition-all duration-150',
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
        <div className="w-full py-4">
          <input
            type="text"
            placeholder="Search by make, model or body style"
            className="block w-full py-3 px-5 border border-neutral-700 outline-none rounded-md"
          />
        </div>

        <div className="w-full flex justify-between items-center gap-[5px]">
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
          <span>or</span>
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4 ">
          <div className="flex flex-col md:flex-row items-center w-full gap-3 ">
            <div className="w-full">
              <SelectInput
                list={CAR_BRANDS}
                title="Brand/Model"
                setSelectedInput={setBrand}
                selectedInput={brand}
                width="w-full md:w-[155px]"
              />
            </div>
            <div className="flex w-full gap-3">
              <div className="w-full">
                <SelectInput
                  list={PRICE_RANGE}
                  title="Price Range"
                  setSelectedInput={setPrice}
                  selectedInput={price}
                  width="w-full md:w-[155px]"
                />
              </div>
              <div className="w-full">
                <SelectInput
                  list={YEAR}
                  title="Year"
                  setSelectedInput={setYear}
                  selectedInput={year}
                  width="w-full md:w-[155px]"
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-4 md:mt-0 flex items-end justify-end ">
            <button
              onClick={() => router.push('results/make-BMW?mileage=2-598899')}
              className="bg-primary-700 h-14 w-full md:w-14 rounded-[100px] md:rounded-[50%] flex items-center justify-center"
            >
              <Image src={Search} alt="Search" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSearch;
