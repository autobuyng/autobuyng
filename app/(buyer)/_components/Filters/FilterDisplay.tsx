'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import Filter from './assets/filter.svg';
import Cancel from '@/app/(buyer)/assets/cancel.svg';
import Sort from '@/app/(buyer)/_components/Filters/assets/sort.svg';
// import { useSearchParams } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { FilterProps } from '@/types/types';
import { removeSessionItem } from '@/lib/Sessionstorage';

type FilterDisplayProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // filterQuery: (string | number)[];
  // setFilterQuery: React.Dispatch<React.SetStateAction<(number | string)[]>>;
};
const FilterDisplay = ({
  setIsOpen,
  // filterQuery,
  // setFilterQuery,
}: FilterDisplayProps) => {
  // const searchParams = useSearchParams();
  const { filters, setFilters } = useStore();
  const [filterQuery, setFilterQuery] = useState<string[]>([]);

  useEffect(() => {
    const filterValues = Object.values(filters)
      .flatMap((value) => (typeof value === 'object' ? Object.values(value) : value))
      .filter((value) => value);
    setFilterQuery(filterValues);
  }, [filters]);

  const handleDelete = useCallback(
    (index: number) => {
      setFilters((prevFilters: FilterProps) => {
        const updatedFilters: FilterProps = { ...prevFilters };
        const entries = Object.entries(updatedFilters);
        let currentIndex = 0;

        for (const [key, value] of entries) {
          if (typeof value === 'object' && value !== null) {
            const nestedEntries = Object.entries(value);
            if (index >= currentIndex && index < currentIndex + nestedEntries.length) {
              const nestedIndex = index - currentIndex;
              const [nestedKey] = nestedEntries[nestedIndex];
              const updatedNestedValue = { ...value };
              delete updatedNestedValue[nestedKey];
              updatedFilters[key] = updatedNestedValue;
            }
            currentIndex += nestedEntries.length;
          } else {
            if (currentIndex === index) {
              delete updatedFilters[key];
            }
            currentIndex++;
          }
        }
        return updatedFilters;
      });
    },
    [filters],
  );

  const handleClearFilters = () => {
    removeSessionItem('filters');
    setFilterQuery([]);
    setFilters((prev) => ({
      ...prev,
      year: {
        min_year: '',
        max_year: '',
      },
      vehicle_condition: '',
      make: '',
      model: '',
      vehicle_type: '',
      transmission: '',
      drive_train: '',
      fuel_type: '',
      exterior_color: '',
      interior_color: '',
      body_type: '',
      cylinders: '',
      engine: '',
    }));
  };

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
          {filterQuery.map((value, index) => (
            <div
              key={index}
              className="bg-primary-700 text-white py-1 px-2 rounded-sm whitespace-nowrap flex items-center gap-2"
            >
              <span>{value}</span>
              <button onClick={() => handleDelete(index)} className="text-xl">
                <Image src={Cancel} alt="Cancel" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <button onClick={handleClearFilters} className="underline cursor-pointer ">
          Clear
        </button>
      </div>

      <div className="md:hidden flex items-center gap-1">
        <Image src={Sort} alt="Sort" />
        <p className="underline cursor-pointer">Sort</p>
      </div>
    </main>
  );
};

export default FilterDisplay;
