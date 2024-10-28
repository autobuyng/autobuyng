'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import Filter from './assets/filter.svg';
import Cancel from '@/app/(buyer)/assets/cancel.svg';

type FilterDisplayProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const FilterDisplay = ({ setIsOpen, setIsSortOpen }: FilterDisplayProps) => {
  const [filterQuery, setFilterQuery] = useState<string[]>([
    'Toyota',
    'Silveerado',
    'black',
    ' 4WD',
    '8 cyl',
    'automatic',
  ]);

  const handleQuery = (query: string) => {
    console.log(query);
    const queryIndex = filterQuery?.indexOf(query);
    console.log(queryIndex);
    setFilterQuery(filterQuery.filter((item) => filterQuery.indexOf(item) !== queryIndex));
  };

  return (
    <main className="flex items-start justify-between md:gap-8 lg:gap-6">
      <div className="flex items-start gap-8">
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 w-fit cursor-pointer lg:cursor-default px-2 border border-neutral-700 rounded-sm"
        >
          <Image src={Filter} alt="filter" />
          <h1 className="font-md text-xl">Filters</h1>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-wrap">
          {filterQuery.map((query) => (
            <div
              key={query}
              className="bg-primary-700 text-white py-1 px-2 rounded-sm whitespace-nowrap flex items-center gap-2"
            >
              <span>{query}</span>
              <button onClick={() => handleQuery(query)} className="text-xl">
                <Image src={Cancel} alt="Cancel" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <p onClick={() => setFilterQuery([])} className="underline cursor-pointer ">
          Clear
        </p>
      </div>

      <div className="md:hidden">
        <p onClick={() => setIsSortOpen(true)} className="underline cursor-pointer">
          Sort
        </p>
      </div>
    </main>
  );
};

export default FilterDisplay;
