'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';

import Filter from './assets/filter.svg';
import Cancel from '@/app/(buyer)/assets/cancel.svg';
import Sort from '@/app/(buyer)/_components/Filters/assets/sort.svg';
import { useSearchParams } from 'next/navigation';

type FilterDisplayProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterQuery: (string | number)[];
  setFilterQuery: React.Dispatch<React.SetStateAction<(number | string)[]>>;
};
const FilterDisplay = ({
  setIsOpen,
  setIsSortOpen,
  filterQuery,
  setFilterQuery,
}: FilterDisplayProps) => {
  const searchParams = useSearchParams();

  // const handleQuery = (query: string | number) => {
  //   console.log(query);
  //   const queryIndex = filterQuery?.indexOf(query);
  //   console.log(queryIndex);
  //   setFilterQuery(filterQuery.filter((item) => filterQuery.indexOf(item) !== queryIndex));
  // };

  const deleteQueryString = useCallback(
    (name: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name as string); // Deletes all instances of the parameter by name

      return params.toString(); // Returns the updated query string
    },
    [searchParams],
  );

  return (
    <main className="flex items-start justify-between md:gap-8 lg:gap-6">
      <div className="flex items-start gap-8">
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 w-fit cursor-pointer lg:cursor-default px-2 border border-neutral-700 rounded-sm"
        >
          <Image src={Filter} alt="filter" />
          <h1 className="font-md text-sm md:text-xl">Filters</h1>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-wrap">
          {filterQuery.map((query) => (
            <div
              key={query}
              className="bg-primary-700 text-white py-1 px-2 rounded-sm whitespace-nowrap flex items-center gap-2"
            >
              <span>{query}</span>
              <button onClick={() => deleteQueryString(query)} className="text-xl">
                <Image src={Cancel} alt="Cancel" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <p
          onClick={() => {
            setFilterQuery([]);
          }}
          className="underline cursor-pointer "
        >
          Clear
        </p>
      </div>

      <div onClick={() => setIsSortOpen(true)} className="md:hidden flex items-center gap-1">
        <Image src={Sort} alt="Sort" />
        <p className="underline cursor-pointer">Sort</p>
      </div>
    </main>
  );
};

export default FilterDisplay;
