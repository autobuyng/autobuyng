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
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'ford', label: 'Ford' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'ram', label: 'Ram' },
    { value: 'jeep', label: 'Jeep' },
    { value: 'subaru', label: 'Subaru' },
    { value: 'mazda', label: 'Mazda' },
    { value: 'hyundai', label: 'Hyundai' },
    { value: 'kia', label: 'Kia' },
    { value: 'tesla', label: 'Tesla' },
    { value: 'bmw', label: 'BMW' },
    { value: 'audi', label: 'Audi' },
    { value: 'mercedes_benz', label: 'Mercedes-Benz' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'volkswagen', label: 'Volkswagen' },
    { value: 'lexus', label: 'Lexus' },
    { value: 'acura', label: 'Acura' },
    { value: 'gmc', label: 'GMC' },
    { value: 'lincoln', label: 'Lincoln' },
    { value: 'cadillac', label: 'Cadillac' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'buick', label: 'Buick' },
    { value: 'infiniti', label: 'Infiniti' },
    { value: 'porsche', label: 'Porsche' },
    { value: 'jaguar', label: 'Jaguar' },
    { value: 'land_rover', label: 'Land Rover' },
    { value: 'mitsubishi', label: 'Mitsubishi' },
    { value: 'mini', label: 'Mini' },
    { value: 'fiat', label: 'Fiat' },
    { value: 'chrysler', label: 'Chrysler' },
    { value: 'dodge', label: 'Dodge' },
    { value: 'alfa_romeo', label: 'Alfa Romeo' },
    { value: 'genesis', label: 'Genesis' },
    { value: 'maserati', label: 'Maserati' },
    { value: 'ferrari', label: 'Ferrari' },
    { value: 'lamborghini', label: 'Lamborghini' },
    { value: 'bentley', label: 'Bentley' },
    { value: 'aston_martin', label: 'Aston Martin' },
    { value: 'rolls_royce', label: 'Rolls-Royce' },
    { value: 'tesla', label: 'Tesla' },
    { value: 'hummer', label: 'Hummer' },
    { value: 'pontiac', label: 'Pontiac' },
    { value: 'saab', label: 'Saab' },
    { value: 'saturn', label: 'Saturn' },
    { value: 'scion', label: 'Scion' },
    { value: 'suzuki', label: 'Suzuki' },
    { value: 'isuzu', label: 'Isuzu' },
    { value: 'peugeot', label: 'Peugeot' },
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
            placeholder={isMobile ? 'Search by make and model' : 'Search by make and  model'}
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
