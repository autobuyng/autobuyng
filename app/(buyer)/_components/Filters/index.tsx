'use client';

import { useEffect } from 'react';

import SelectInput from '@/components/SelectInput/SelectInput';
import { MAX_YEAR, MILEAGE } from '@/constants/constants';
import { FilterProps } from '@/types/types';
import { Slider } from '@/components/ui/slider';
import StyleType from './StyleType';
import Performance from './Performance';
import Features from './Features';
import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';
import { setSessionItem } from '@/lib/Sessionstorage';
import { useStore } from '@/store/useStore';

// type FilterComponentProps = {
//   filters: FilterProps;
//   setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
// };
const Filters = () => {
  const { isMobile } = useIsMobile();
  const { filters, setFilters } = useStore();

  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.set(name, value.trim());

  //     return params.toString();
  //   },
  //   [searchParams],
  // );

  useEffect(() => {
    setSessionItem('filters', filters);
  }, [filters]);
  return (
    <main className=" w-full  ">
      <section
        className={cn('w-full  p-8 space-y-4  bg-white md:shadow-[0px_2px_14px_0px_#0000001A]', {
          'pt-4 px-0': isMobile,
        })}
      >
        <div className="w-full mt-4 border border-neutral-700 rounded-sm h-fit pt-2  ">
          <p className="text-xs text-neutral-400 pl-3">Vehicle Condition</p>

          <SelectInput
            list={[
              { id: '1', label: 'New', name: 'New' },
              { id: '2', label: 'Nigerian_Used', name: 'Nigerian Used' },
              { id: '3', label: 'Foreign_Used', name: 'Foreign Used' },
            ]}
            title="Vehicle Condition"
            setSelectedInput={(input) => {
              // router.push(pathname + '?' + createQueryString('vehicle_condition', input as string));
              setFilters(
                (prev: FilterProps): FilterProps => ({
                  ...prev,
                  vehicle_condition: input as string,
                }),
              );
            }}
            selectedInput={filters.vehicle_condition as string}
            width="max-w-full h-4 border-none"
          />
        </div>

        <div className="w-full mt-4 border border-neutral-700 rounded-sm h-fit pt-2   ">
          <p className="text-xs text-neutral-400 pl-3">Mileage</p>

          <SelectInput
            list={MILEAGE}
            title="Any mileage"
            defaultValue={filters.mileage}
            setSelectedInput={(input) => {
              // router.push(pathname + '?' + createQueryString('mileage', input as string));
              if (input) {
                setFilters(
                  (prev: FilterProps): FilterProps => ({
                    ...prev,
                    mileage: input as string,
                  }),
                );
              }
            }}
            selectedInput={filters.mileage as string}
            width="max-w-full h-4 border-none"
          />
        </div>

        <div className="flex w-full gap-4 ">
          <div className=" w-full border border-neutral-700 rounded-sm h-fit pt-2  ">
            <p className="text-xs text-neutral-400 pl-3">Min year</p>

            <SelectInput
              list={MAX_YEAR}
              title="Oldest"
              defaultValue={filters.year.max_year}
              setSelectedInput={(input) => {
                // router.push(pathname + '?' + createQueryString('max_year', input as string));
                setFilters(
                  (prev: FilterProps): FilterProps => ({
                    ...prev,
                    year: {
                      ...prev.year,
                      min_year: input as string,
                    },
                  }),
                );
              }}
              selectedInput={filters.year?.min_year as string}
              width="w-full  h-4 border-none"
            />
          </div>

          <div className=" w-full border border-neutral-700 rounded-sm h-fit pt-2 ">
            <p className="text-xs text-neutral-400 pl-3">Max year</p>

            <SelectInput
              list={MAX_YEAR}
              title="Highest"
              defaultValue={filters.year.min_year}
              setSelectedInput={(input) => {
                // router.push(pathname + '?' + createQueryString('min_year', input as string));
                setFilters(
                  (prev: FilterProps): FilterProps => ({
                    ...prev,
                    year: {
                      ...prev.year,
                      max_year: input as string,
                    },
                  }),
                );
              }}
              selectedInput={filters.year.max_year as string}
              width="w-full  h-4 border-none"
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="UserEmail" className="block font-medium ">
            Price range
          </label>

          <input
            type="text"
            value={filters.price.max_price}
            onChange={() => {}}
            id="UserEmail"
            placeholder="NGN 10,000,000"
            className="mt-1 w-full rounded-sm px-3 border border-neutral-700 outline-none text-base py-3 shadow-sm sm:text-sm"
          />

          <div className="mt-4">
            <Slider
              onValueChange={(input) => {
                const [newPrice] = input;
                // router.push(pathname + '?' + createQueryString('price', newPrice.toString()));
                setFilters(
                  (prev: FilterProps): FilterProps => ({
                    ...prev,
                    price: {
                      max_price: newPrice,
                    },
                  }),
                );
              }}
              defaultValue={[7000000]}
              max={100000000}
              min={5000000}
              step={1000000}
            />
          </div>
        </div>
      </section>

      <section
        className={cn('mt-6 space-y-2 pt-8 bg-white  px-8 md:shadow-[0px_2px_14px_0px_#0000001A]', {
          'px-0': isMobile,
        })}
      >
        <div>
          <p className="font-[600] text-lg border-b border-neurtral-100 pb-4 ">Style</p>
          <StyleType />
        </div>
        <div>
          <p className="font-[600] text-lg border-b border-neurtral-100 pb-4 "> Performance</p>
          <Performance />
        </div>
        <div>
          <p className="font-[600] text-lg border-b border-neurtral-100 pb-4 pt-2 ">Features</p>
          <Features />
        </div>
      </section>
    </main>
  );
};

export default Filters;
