'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import Filter from './assets/filter.svg';

const FilterDisplay = () => {
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
    <main className="flex items-start md:gap-8 lg:gap-6">
      <div className="flex items-center gap-2  w-[80px]">
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
              x
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FilterDisplay;
