'use client';
import React, { useEffect, useRef, useState } from 'react';

import { Sheet, SheetContent } from '@/components/ui/sheet';

import '../result.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SearchInput from '@/app/(buyer)/_components/SearchInput/SearchInput';
import { SearchQuery, SearchResponseData, suggestionList } from '@/types/types';
import FilterDisplay from '@/app/(buyer)/_components/Filters/FilterDisplay';

import Filters from '@/app/(buyer)/_components/Filters';
import Result from '@/app/(buyer)/_components/Result/Result';
// import Cancel from '@/app/(buyer)/assets/cancel.svg';
import { useSearchVehicle } from '@/app/(buyer)/api/search';
import { usePathname, useSearchParams } from 'next/navigation';
// import { getSessionItem } from '@/lib/Sessionstorage';
import { setLocalItem } from '@/lib/localStorage';
import { useStore } from '@/store/useStore';
import useIsMobile from '@/hooks/useIsMobile';

const Results = () => {
  const pathname = usePathname();
  const { filters, homePageSearchResult } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState<suggestionList | null>(null);

  const { isTablet } = useIsMobile();

  const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);

  const prevFilters = useRef(filters);
  const { search, isPending, isError, error } = useSearchVehicle();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

  const handleSearch = async (data: SearchQuery) => {
    try {
      const response = await search(data);
      setSearchResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const searchParams: Partial<SearchQuery> = {
      ...(keyword || searchQuery?.label ? { keyword: keyword || searchQuery?.label } : {}),
      ...(filters.mileage ? { mileage: filters.mileage } : {}),
      ...(filters.vehicle_condition ? { condition: filters.vehicle_condition } : {}),
      ...(filters.year.min_year ? { yearMin: filters.year.min_year } : {}),
      ...(filters.year.max_year ? { yearMax: filters.year.max_year } : {}),
      // ...(filters.price.min_price ? { priceMin: filter. } : {}),
      ...(filters.price.max_price ? { priceMax: filters.price.max_price } : {}),
      ...(filters.body_type ? { type: filters.body_type.toLowerCase() } : {}),
      ...(filters.interior_color ? { interiorColor: filters.interior_color.toLowerCase() } : {}),
      ...(filters.exterior_color ? { exteriorColor: filters.exterior_color.toLowerCase() } : {}),
      ...(filters.drive_train ? { driveTrain: filters.drive_train.toLowerCase() } : {}),
      ...(filters.fuel_type ? { fuelType: filters.fuel_type.toLowerCase() } : {}),
      ...(filters.transmission ? { transmission: filters.transmission.toLowerCase() } : {}),
      ...(filters.sortParameter ? { sortParameter: filters.sortParameter } : {}),
      ...(filters.sortOrder ? { sortOrder: filters.sortOrder } : {}),
      ...(filters.make ? { make: filters.make.toLowerCase() } : {}),
      ...(filters.vehicle_type ? { type: filters.vehicle_type.toLowerCase() } : {}),
    };

    if (!homePageSearchResult || JSON.stringify(prevFilters.current) !== JSON.stringify(filters)) {
      console.log('making search request');
      handleSearch(searchParams);
    }

    setLocalItem('previousPage', pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <main className="mb-24">
      <div className="bg-img">
        <MaxWidthWrapper>
          <div className="text-white font-bold text-lg md:text-2xl pt-16 max-w-[275px] text-center">
            Buy your dream vehicle at Autobuy!
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section className="min-h-screen">
          <div className="mt-8 w-full flex items-center gap-6">
            <SearchInput search={searchQuery} setSearch={setSearchQuery} />
          </div>

          <div className="flex items-start justify-between mt-6 w-full">
            <div className="w-full ">
              <FilterDisplay
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // filterQuery={filterQuery}
                // setFilterQuery={setFilterQuery}
              />
            </div>
          </div>

          <div className="flex w-full mt-8 gap-8">
            <div className=" hidden lg:block w-full max-w-[296px]">
              <Filters />

              <Sheet open={isTablet && isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="max-w-full h-screen overflow-y-auto">
                  <h1 className="font-bold   border-b-2 mb-4 border-b-neutral-100">Filters</h1>
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* {filterQuery.map((query) => (
                      <div
                        key={query}
                        className="bg-primary-700 text-white py-1 px-2 rounded-sm whitespace-nowrap flex items-center gap-2"
                      >
                        <span className="text-sm">{query}</span>
                        <button onClick={() => handleQuery(query)} className="text-xl">
                          <Image src={Cancel} alt="Cancel" />
                        </button>
                      </div>
                    ))} */}
                  </div>
                  <Filters />
                </SheetContent>
              </Sheet>

              {/* <Sheet open={isMobile && isSortOpen} onOpenChange={setIsSortOpen}>
                <SheetContent className="max-w-full h-screen overflow-y-auto">
                  <div>
                    <SelectInput
                      list={SORT_LIST}
                      title="Sort by"
                      setSelectedInput={(input) => {
                        if (typeof input != 'string') return;
                        const parameter = input.split(' ');
                        setFilters((prev: FilterProps) => ({
                          ...prev,
                          sortParameter: parameter[1] as string,
                          sortOrder: parameter[0] === 'Highest' ? 'desc' : 'asc',
                          sort: input,
                        }));
                      }}
                      selectedInput={filters?.sort as string}
                      // selectedInput={filters?.sortParameter as string}
                      defaultValue={filters.sort}
                      width="w-full md:w-[155px]"
                      height="h-10"
                    />
                  </div>
                </SheetContent>
              </Sheet> */}
            </div>

            <div className="w-full">
              <Result
                isPending={isPending}
                searchResult={searchResult || homePageSearchResult}
                setSearchResult={setSearchResult}
                isError={isError}
                error={error}
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Results;
