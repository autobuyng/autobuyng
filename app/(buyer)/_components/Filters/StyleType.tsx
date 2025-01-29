'use client';
// import React, { ChangeEvent, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { BODY_STYLE, COLORS } from '@/constants/constants';
import { useStore } from '@/store/useStore';
import { FilterProps } from '@/types/types';
import { useState } from 'react';

type Checked = {
  [key: string]: string;
  body_type: string;
  interior_color: string;
  exterior_color: string;
};

const StyleType = () => {
  const { filters, setFilters } = useStore();
  const [, setChecked] = useState<Checked>({
    body_type: '',
    interior_color: '',
    exterior_color: '',
  });

  const handleCheckboxChange = (input: string, category: string) => {
    setChecked((prev: Checked) => {
      if (prev[category] === input) {
        return { ...prev, [category]: '' };
      } else {
        return { ...prev, [category]: input };
      }
    });

    // setFilters((prev: FilterProps) => ({
    //   ...prev,
    //   [category]: input === checked[category] ? delete prev[category] : (input as string),
    // }));

    setFilters((prev: FilterProps) => {
      const updatedFilters = { ...prev };

      if (prev[category] === input) {
        // If the input already exists, remove the entire key-value pair
        delete updatedFilters[category];
      } else {
        // If the input doesn't exist or is different, add/update it
        updatedFilters[category] = input as string;
      }

      return updatedFilters;
    });
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
                      value={filters.body_type}
                      onChange={() => handleCheckboxChange(type.name, 'body_type')}
                      className="h-5 w-5"
                      checked={filters?.body_type === type.name}
                    />
                    <span className="">{type.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-2 ">Interior Colour</AccordionTrigger>
            <AccordionContent className="">
              {COLORS.map((color) => {
                return (
                  <p key={color.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.interior_color}
                      onChange={() => handleCheckboxChange(color.name, 'interior_color')}
                      className="h-5 w-5"
                      checked={filters?.interior_color === color.name}
                    />
                    <span className="">{color.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-2 ">Exterior Color</AccordionTrigger>
            <AccordionContent className="">
              {COLORS.map((color) => {
                return (
                  <p key={color.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.exterior_color}
                      onChange={() => handleCheckboxChange(color.name, 'exterior_color')}
                      className="h-5 w-5"
                      checked={filters?.exterior_color === color.name}
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
