'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Sheet, SheetContent } from '@/components/ui/sheet';

import '../result.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SearchInput from '@/app/(buyer)/_components/SearchInput/SearchInput';
import { FilterProps, SearchQuery, SearchResponseData, suggestionList } from '@/types/types';
import FilterDisplay from '@/app/(buyer)/_components/Filters/FilterDisplay';
import SelectInput from '@/components/SelectInput/SelectInput';
import { SORT_LIST } from '@/constants/constants';
import GridFormat from '@/app/(buyer)/assets/Gridformat.svg';
import Flex from '@/app/(buyer)/assets/FlexFormat.svg';
import Filters from '@/app/(buyer)/_components/Filters';
import Result from '@/app/(buyer)/_components/Result/Result';
import useIsMobile from '@/hooks/useIsMobile';
import Cancel from '@/app/(buyer)/assets/cancel.svg';
import { useSearchVehicle } from '@/app/(buyer)/api/search';
import { usePathname, useSearchParams } from 'next/navigation';
// import { getSessionItem } from '@/lib/Sessionstorage';
import { setLocalItem } from '@/lib/localStorage';
import { useStore } from '@/store/useStore';

const Results = () => {
  const pathname = usePathname();
  const { filters, setFilters } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  // const default_filters = getSessionItem('filters');
  // const DEFAULT_FILTERS: FilterProps = {
  //   year: {
  //     min_year: '2009',
  //     max_year: '',
  //   },
  //   mileage: '',
  //   price: {
  //     min_price: 5000000,
  //   },
  //   ...default_filters,
  // };
  const [searchQuery, setSearchQuery] = useState<suggestionList | null>(null);
  // const [sortQuery, setSortQuery] = useState('');
  // const [filters, setFilters] = useState<FilterProps>(DEFAULT_FILTERS);
  const [displayFormat, setDisplayFormat] = useState(true);
  const { isTablet, isMobile } = useIsMobile();
  const [filterQuery, setFilterQuery] = useState<(string | number)[]>([]);

  const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);

  const { search, isPending, isError, error } = useSearchVehicle();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  // const mileage = searchParams.get('mileage') ?? undefined;
  // const price = searchParams.get('price') ?? undefined;
  // const condition = searchParams.get('vehicle_condition') ?? undefined;
  // const minYear = searchParams.get('min_year') ?? undefined;
  // const maxYear = searchParams.get('max_year') ?? undefined;

  // console.log(condition, 'condition');

  // const handlesort = (input: string) => {
  //   console.log(input);
  // };

  console.log(filters);

  const handleQuery = (query: string | number) => {
    const queryIndex = filterQuery?.indexOf(query);
    setFilterQuery(filterQuery.filter((item) => filterQuery.indexOf(item) !== queryIndex));
  };
  const handleSearch = async (data: SearchQuery) => {
    // console.log(data, 'data');
    // const entriesArray = Object.entries({});

    // entriesArray.forEach(([, value]) => {
    //   setFilterQuery((prev) => [...prev, value]);
    // });

    try {
      const response = await search(data);
      setSearchResult(response.data);
      console.log(response.data, 'response');
      // router.push(`/results/keyword=${data.keyword}`);
      console.log(response);
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
      ...(filters.body_type ? { type: filters.body_type } : {}),
      ...(filters.interior_color ? { interiorColor: filters.interior_color } : {}),
      ...(filters.exterior_color ? { exteriorColor: filters.exterior_color } : {}),
      ...(filters.drive_train ? { driveTrain: filters.drive_train } : {}),
      ...(filters.fuel_type ? { fuelType: filters.fuel_type } : {}),
      ...(filters.transmission ? { transmission: filters.transmission } : {}),
      ...(filters.sortParameter ? { sortParameter: filters.sortParameter } : {}),
      ...(filters.sortOrder ? { sortOrder: filters.sortOrder } : {}),
    };

    handleSearch(searchParams);

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

            <div className="hidden md:flex items-center gap-4 w-[240px]">
              <div>
                <SelectInput
                  list={SORT_LIST}
                  title="Sort by"
                  setSelectedInput={(input) => {
                    if (typeof input != 'string') return;
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    const parameter = input.split(' ');
                    console.log(input, 'input');
                    console.log(parameter, 'parametrer');
                    setFilters((prev: FilterProps) => ({
                      ...prev,
                      sortParameter: parameter[1].toLowerCase() as string,
                      sortOrder: parameter[0] === 'Highest' ? 'desc' : 'asc',
                      sort: input,
                    }));
                  }}
                  selectedInput={filters?.sort as string}
                  defaultValue={filters.sort}
                  width="w-full md:w-[155px]"
                  height="h-10"
                />
              </div>

              <div className="h-8 w-8 rounded-sm border border-neutral-500 flex items-center justify-center">
                <button onClick={() => setDisplayFormat(!displayFormat)}>
                  {displayFormat ? (
                    <Image src={Flex} alt="Flex format" />
                  ) : (
                    <Image src={GridFormat} alt="Grid format" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between mt-6 w-full">
            <div className="w-full ">
              <FilterDisplay
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                filterQuery={filterQuery}
                setFilterQuery={setFilterQuery}
                setIsSortOpen={setIsSortOpen}
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
                    {filterQuery.map((query) => (
                      <div
                        key={query}
                        className="bg-primary-700 text-white py-1 px-2 rounded-sm whitespace-nowrap flex items-center gap-2"
                      >
                        <span className="text-sm">{query}</span>
                        <button onClick={() => handleQuery(query)} className="text-xl">
                          <Image src={Cancel} alt="Cancel" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <Filters />
                </SheetContent>
              </Sheet>

              <Sheet open={isMobile && isSortOpen} onOpenChange={setIsSortOpen}>
                <SheetContent className="max-w-full h-screen overflow-y-auto">
                  <div>
                    <SelectInput
                      list={SORT_LIST}
                      title="Sort by"
                      setSelectedInput={(input) => {
                        if (typeof input != 'string') return;
                        const parameter = input.split(' ');
                        console.log(parameter);
                        console.log(input, 'input');
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
              </Sheet>
            </div>

            <div className="w-full">
              <Result
                displayFormat={displayFormat}
                isPending={isPending}
                searchResult={searchResult}
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
