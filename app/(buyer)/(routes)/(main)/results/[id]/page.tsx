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
import { useSearchParams } from 'next/navigation';

const Results = ({ params }: { params: { slug: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const DEFAULT_FILTERS = {
    year: {
      min_year: '2009',
      max_year: '2024',
    },
    body_style: '',
    interior_color: '',
    exterior_color: '',
    price: 33,
  };

  console.log(params);
  const [searchQuery, setSearchQuery] = useState<suggestionList | null>(null);
  const [sortQuery, setSortQuery] = useState('');
  const [filters, setFilters] = useState<FilterProps>(DEFAULT_FILTERS);
  const [displayFormat, setDisplayFormat] = useState(true);
  const { isTablet, isMobile } = useIsMobile();
  const [filterQuery, setFilterQuery] = useState<(string | number)[]>([
    'Toyota',
    'Silveerado',
    'black',
    ' 4WD',
    '8 cyl',
    'automatic',
    400,
  ]);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 2000);

  const handleQuery = (query: string | number) => {
    console.log(query);
    const queryIndex = filterQuery?.indexOf(query);
    console.log(queryIndex);
    setFilterQuery(filterQuery.filter((item) => filterQuery.indexOf(item) !== queryIndex));
  };

  const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);

  const { search, isPending } = useSearchVehicle();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const mileage = searchParams.get('mileage') ?? undefined;
  const price = searchParams.get('price') ?? undefined;

  const handleSearch = async (data: SearchQuery) => {
    const entriesArray = Object.entries(data);

    entriesArray.forEach(([, value]) => {
      setFilterQuery((prev) => [...prev, value]);
    });
    console.log(entriesArray, 'entrieswertyuiouytrewrtyuiuytrewrtyui');

    try {
      const response = await search(data);
      setSearchResult(response.data);
      // router.push(`/results/keyword=${data.keyword}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch({
      keyword: keyword || searchQuery?.label || '',
      mileage: mileage,
      // price: price,
      //    vin: vin,
      //    fuelType?: string;
      // transmission?: string;
      // exteriorColor?: string;
      // interiorColor?: string;
    });
  }, [searchQuery, mileage, price]);

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
                  setSelectedInput={setSortQuery}
                  selectedInput={sortQuery}
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
              <FilterDisplay isOpen={isOpen} setIsOpen={setIsOpen} setIsSortOpen={setIsSortOpen} />
            </div>
          </div>

          <div className="flex w-full mt-8 gap-8">
            <div className=" hidden lg:block w-full max-w-[296px]">
              <Filters filters={filters} setFilters={setFilters} />

              <Sheet open={isTablet && isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="max-w-full h-screen overflow-y-auto">
                  <h1 className="font-bold t  border-b-2 mb-4 border-b-neutral-100">Filters</h1>
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
                  <Filters filters={filters} setFilters={setFilters} />
                </SheetContent>
              </Sheet>

              <Sheet open={isMobile && isSortOpen} onOpenChange={setIsSortOpen}>
                <SheetContent className="max-w-full h-screen overflow-y-auto">
                  <div>
                    <SelectInput
                      list={SORT_LIST}
                      title="Sort by"
                      setSelectedInput={setSortQuery}
                      selectedInput={sortQuery}
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
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Results;
