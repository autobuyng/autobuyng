'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { CAR_BRANDS, PRICE_RANGE, YEAR } from '@/constants/constants';
import useDetectOS from '@/hooks/useDetectOs';
import { useForm } from 'react-hook-form';
import { FilterProps, SearchQuery } from '@/types/types';
import { useSearchVehicle } from '../../api/search';
import { DEFAULT_FILTERS, useStore } from '@/store/useStore';
import { EnhancedSearchableDropdown } from '@/components/SearchableDropdown/SearchableDropdown';
import { useRouter } from 'next-nprogress-bar';

const HomeSearch = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  // const [price, setPrice] = useState<string>('');
  // const [brand, setBrand] = useState<string>('');
  // const [year, setYear] = useState<string>('');

  const router = useRouter();
  const os = useDetectOS();
  const { setHomePageSearchResult } = useStore();
  const { register, handleSubmit } = useForm<SearchQuery>();
  const { search, isPending } = useSearchVehicle();
  const { setFilters, filters } = useStore();

  const handleSearch = async () => {
    try {
      const updatedData: Partial<SearchQuery> = {
        yearMin: DEFAULT_FILTERS.year.min_year,
        ...(filters.make && { make: filters.make }),
        ...(filters.model && { model: filters.model }),
        ...(filters.year.max_year && { yearMax: filters.year.max_year }),
      };

      const response = await search(updatedData);
      setHomePageSearchResult(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      router.push(`/results/keyword=${filters.make ? filters.make : ''}`);
    }
  };

  const CAR_CATEGORY = [
    { id: 1, text: 'All', key: 'all' },
    { id: 2, text: 'New', key: 'new' },
    { id: 3, text: 'Used', key: 'used' },
  ];
  console.log(filters, 'searchable');
  return (
    <main
      className={cn(
        'w-[90%] sm:w-[340px] mx-auto px-4  h-fit rounded-[20px] bg-white relative z-10',
      )}
    >
      <form onSubmit={handleSubmit(handleSearch)} className="px-4 pt-4 pb-4">
        <div className="text-center  md:text-xl">
          <h1
            className={cn('font-medium text-primary-700 tracking-wide py-2', {
              'py-0': os === 'Windows',
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
                  'w-full font-semibold text-sm text-center py-2 cursor-pointer transition-all duration-150',
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

        <div className="w-full py-1">
          <input
            {...register('keyword')}
            type="text"
            placeholder="Search by make or model"
            className="block w-full h-[40px] px-5 border border-neutral-700 outline-none rounded-md placeholder:text-xs"
          />
        </div>

        <div className="w-full flex justify-between items-center gap-[5px]">
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
          <span>or</span>
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
        </div>

        <div className="flex flex-col gap-4 items-center justify-between mt-4">
          <div className="flex flex-col items-center w-full gap-4 ">
            <div className="w-full">
              <EnhancedSearchableDropdown
                options={CAR_BRANDS}
                placeholder="Select vehicle make"
                onChange={(input) => {
                  setFilters(
                    (prev: FilterProps): FilterProps => ({
                      ...prev,
                      make: input,
                    }),
                  );
                }}
              />
            </div>

            <div className="w-full">
              <EnhancedSearchableDropdown
                options={PRICE_RANGE}
                placeholder="Select price range"
                onChange={(input) => {
                  setFilters(
                    (prev: FilterProps): FilterProps => ({
                      ...prev,
                      price: {
                        max_price: Number(input),
                      },
                    }),
                  );
                }}
              />
            </div>

            <div className="w-full">
              <EnhancedSearchableDropdown
                options={YEAR}
                placeholder="Select vehicle year"
                onChange={(input) => {
                  setFilters(
                    (prev: FilterProps): FilterProps => ({
                      ...prev,
                      year: {
                        ...prev.year,
                        max_year: input,
                      },
                    }),
                  );
                }}
              />
            </div>
            {/* </div> */}
          </div>

          <div className="w-full  flex items-end justify-end ">
            <button
              className={cn(
                'bg-primary-700 text-white font-semibold h-12 w-full rounded-[10px] flex items-center justify-center',
              )}
            >
              {isPending ? 'Searching...' : 'Search inventory'}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default HomeSearch;
