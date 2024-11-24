'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import 'react-select-search/style.css';

import { getPlaceholderFontSize } from '@/hooks/useGetPlaceholderFonts';
import { suggestionList } from '@/types/types';
import Search from '@/app/(buyer)/assets/search.svg';
import useIsMobile from '@/hooks/useIsMobile';

type SearchInputProps = {
  search: suggestionList | null;
  setSearch: React.Dispatch<React.SetStateAction<suggestionList | null>>;
};

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { isMobile } = useIsMobile();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (selectedCountry: suggestionList | null) => {
    setSearch(selectedCountry);
  };

  const handleInputChange = (inputValue: any) => {
    setSearch(inputValue);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      '&:focus': {
        border: 'none',
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'gray',
      fontSize: getPlaceholderFontSize(),
    }),
  };

  return (
    <div className="flex w-full items-center border border-neutral-300 rounded-md">
      <div className="w-full ">
        {isClient && (
          <Select
            id="react-select-2-live-region"
            defaultValue={search}
            onChange={handleChange}
            options={options}
            menuIsOpen={openDropdown}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            onInputChange={(input) => {
              if (input) {
                handleInputChange(input as any);
                setOpenDropdown(true);
              } else {
                setOpenDropdown(false);
              }
            }}
            isClearable
            isSearchable
            placeholder={
              isMobile
                ? 'Search by make ,model, mileage '
                : 'Search by make, model, mileage or body style'
            }
            styles={customStyles}
          />
        )}
      </div>

      {/* <div className="flex items-center "> */}
      <button className="  bg-primary-700 py-2 px-4  h-full text-white text-center rounded-tr-md rounded-br-md flex space-x-2 ">
        <Image src={Search} alt="Search" className="" />
      </button>
      {/* </div> */}
    </div>
  );
};

export default SearchInput;
