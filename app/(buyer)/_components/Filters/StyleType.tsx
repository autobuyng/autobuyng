'use client';
// import React, { ChangeEvent, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { BODY_STYLE, COLORS } from '@/constants/constants';
import { FilterProps } from '@/types/types';

type StyleTypeProps = {
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
};

const StyleType = ({ filters, setFilters }: StyleTypeProps) => {
  console.log(filters);
  const handleCheckboxChange = (name: string) => {
    setFilters((prev) => ({
      ...prev,
      body_style: name,
    }));
  };

  const handleCheck = (id: string): boolean | undefined => {
    const isChecked = BODY_STYLE.find((item) => item.id === id);

    return isChecked ? true : false;
  };

  return (
    <main>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-2 ">Body Type</AccordionTrigger>
            <AccordionContent className="">
              {BODY_STYLE.map((type) => {
                return (
                  <p key={type.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      name={type.name}
                      onChange={() => handleCheckboxChange(type.name)}
                      className="h-5 w-5"
                      disabled={false}
                      checked={handleCheck(type.id)}
                    />
                    <span className="">{type.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="py-2 ">Interior Colour</AccordionTrigger>
            <AccordionContent className="">
              {COLORS.map((color) => {
                return (
                  <p key={color.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(color.id)}
                      className="h-5 w-5"
                      // checked={filters.style}
                    />
                    <span className="">{color.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="py-2 ">Exterior</AccordionTrigger>
            <AccordionContent className="">
              {COLORS.map((color) => {
                return (
                  <p key={color.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(color.id)}
                      className="h-5 w-5"
                      // checked={filters.style}
                    />
                    <span className="">{color.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default StyleType;
