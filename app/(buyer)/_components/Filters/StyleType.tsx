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
  const [checked, setChecked] = useState<Checked>({
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

    setFilters((prev: FilterProps) => ({
      ...prev,
      [category]: input === checked[category] ? '' : (input as string),
    }));
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
                      checked={type.name === checked.body_type || filters.body_type === type.name}
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
                      checked={
                        color.name === checked.interior_color ||
                        filters.interior_color === color.name
                      }
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
                      checked={
                        color.name === checked.exterior_color || filters.exterior === color.name
                      }
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
