'use client';
import React from 'react';
import Image from 'next/image';
import 'react-select-search/style.css';

import Search from '@/app/(buyer)/assets/search.svg';
import { usePathname } from 'next/navigation';

type SearchInputProps = {
  search: string | null;
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
};

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
  const [, value] = lastSegment.split('=');
  console.log(search);

  return (
    <div className="flex w-full items-center border border-gray-300  rounded-md ">
      <div className="w-full">
        <input
          type="text"
          className="w-full flex-1  py-2 px-4  outline-none"
          defaultValue={value}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="  bg-primary-700 py-2 px-4  h-full text-white text-center rounded-tr-md rounded-br-md flex space-x-2 ">
        <Image src={Search} alt="Search" className="" />
      </button>
    </div>
  );
};

export default SearchInput;
