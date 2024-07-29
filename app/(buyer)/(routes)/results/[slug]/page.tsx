'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { Sheet, SheetContent } from '@/components/ui/sheet';

import '../result.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SearchInput from '@/app/(buyer)/_components/SearchInput/SearchInput';
import { FilterProps, suggestionList } from '@/types/types';
import FilterDisplay from '@/app/(buyer)/_components/Filters/FilterDisplay';
import SelectInput from '@/components/SelectInput/SelectInput';
import { SORT_LIST } from '@/constants/constants';
import GridFormat from '@/app/(buyer)/assets/Gridformat.svg';
import Filters from '@/app/(buyer)/_components/Filters';
import Result from '@/app/(buyer)/_components/Result/Result';
import useDetectOS from '@/hooks/useDetectOs';
import useIsMobile from '@/hooks/useIsMobile';
import Cancel from '@/app/(buyer)/assets/cancel.svg';

const Results = ({ params }: { params: { slug: string } }) => {
  const os = useDetectOS();
  const [isOpen, setIsOpen] = useState(false);
  console.log(os);
  const DEFAULT_FILTERS = {
    year: {
      min_year: '2009',
      max_year: '2024',
    },
    body_style: '',

    price: 33,
  };

  const [search, setSearch] = useState<suggestionList | null>(null);
  const [sortQuery, setSortQuery] = useState('');
  const [filters, setFilters] = useState<FilterProps>(DEFAULT_FILTERS);
  const { isMobile } = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState<string[]>([
    'Toyota',
    'Silveerado',
    'black',
    ' 4WD',
    '8 cyl',
    'automatic',
  ]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const handleQuery = (query: string) => {
    console.log(query);
    const queryIndex = filterQuery?.indexOf(query);
    console.log(queryIndex);
    setFilterQuery(filterQuery.filter((item) => filterQuery.indexOf(item) !== queryIndex));
  };

  const [displayFormat, setDisplayFormat] = useState(true);
  console.log(params);
  return (
    <main>
      <div className="bg-img">
        <MaxWidthWrapper>
          <div className="text-white font-bold text-lg md:text-2xl pt-16 max-w-[275px] text-center">
            Buy your dream vehicle at Autobuy!
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section>
          <div className="mt-8 w-full">
            <SearchInput search={search} setSearch={setSearch} />
          </div>

          <div className="flex items-start justify-between mt-6 w-full">
            <div className="w-full">
              <FilterDisplay isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <div className="flex items-center gap-4 w-[240px]">
              <div>
                <SelectInput
                  list={SORT_LIST}
                  title="Sort by"
                  setSelectedInput={setSortQuery}
                  selectedInput={sortQuery}
                  width="w-full md:w-[155px]"
                  height="h-6"
                />
              </div>

              <div className="h-8 w-8 rounded-sm border border-neutral-500 flex items-center justify-center">
                <button onClick={() => setDisplayFormat(!displayFormat)}>
                  <Image src={GridFormat} alt="Grid format" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-8 gap-8">
            <div className=" hidden lg:block w-full max-w-[296px]">
              <Filters filters={filters} setFilters={setFilters} />

              <Sheet open={isMobile && isOpen} onOpenChange={setIsOpen}>
                <SheetContent side={'top'} className="max-w-full h-screen overflow-y-auto">
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
            </div>

            <div className="w-full">
              <Result displayFormat={displayFormat} isLoading={isLoading} />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Results;
