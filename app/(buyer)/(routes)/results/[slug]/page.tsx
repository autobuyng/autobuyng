'use client';
import React, { useState } from 'react';

import '../result.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SearchInput from '@/app/(buyer)/_components/SearchInput/SearchInput';
import { FilterProps, suggestionList } from '@/types/types';
import FilterDisplay from '@/app/(buyer)/_components/Filters/FilterDisplay';
import SelectInput from '@/components/SelectInput/SelectInput';
import { SORT_LIST } from '@/constants/constants';
import GridFormat from '@/app/(buyer)/assets/Gridformat.svg';
import Image from 'next/image';
import Filters from '@/app/(buyer)/_components/Filters';
import Result from '@/app/(buyer)/_components/Result/Result';
import useDetectOS from '@/hooks/useDetectOs';

const Cars = ({ params }: { params: { slug: string } }) => {
  const os = useDetectOS();
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
              <FilterDisplay />
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
            </div>

            <div className="w-full">
              <Result displayFormat={displayFormat} />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Cars;
