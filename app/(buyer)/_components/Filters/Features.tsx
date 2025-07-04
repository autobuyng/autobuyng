'use client';
import React, { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FilterProps } from '@/types/types';
import {
  CONVENIENCEIOPTIONS,
  DOORCOUNTOPTIONS,
  ENTERTAINMENTOPTIONS,
  EXTERIOROPTIONS,
  SAFETYOPTIONS,
} from '@/constants/constants';
import { useStore } from '@/store/useStore';

type Checked = {
  [key: string]: string;
  convenience: string;
  entertainment: string;
  exterior: string;
  fuel_type: string;
  safety: string;
  door_count: string;
};
const Features = () => {
  const { filters, setFilters } = useStore();
  const [, setChecked] = useState<Checked>({
    convenience: '',
    entertainment: '',
    exterior: '',
    fuel_type: '',
    safety: '',
    door_count: '',
  });

  const handleCheckboxChange = (input: string, category: string) => {
    setChecked((prev: Checked) => {
      if (prev[category] === input) {
        return { ...prev, [category]: '' };
      } else {
        return { ...prev, [category]: input };
      }
    });

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
            <AccordionTrigger className=" py-2 ">Convenience</AccordionTrigger>
            <AccordionContent className="">
              {CONVENIENCEIOPTIONS.map((option) => {
                return (
                  <p key={option.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.convenience}
                      onChange={() => handleCheckboxChange(option.name, 'convenience')}
                      className="h-5 w-5"
                      checked={filters.convenience === option.name}
                    />
                    <span className="">{option.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" py-2 ">Entertainment</AccordionTrigger>
            <AccordionContent className="">
              {ENTERTAINMENTOPTIONS.map((option) => {
                return (
                  <p key={option.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.entertainment}
                      onChange={() => handleCheckboxChange(option.name, 'entertainment')}
                      className="h-5 w-5"
                      checked={filters.entertainment === option.name}
                    />
                    <span className="">{option.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" py-2 ">Exterior</AccordionTrigger>
            <AccordionContent className="">
              {EXTERIOROPTIONS.map((option) => {
                return (
                  <p key={option.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.exterior}
                      onChange={() => handleCheckboxChange(option.name, 'exterior')}
                      className="h-5 w-5"
                      checked={filters.exterior === option.name}
                    />
                    <span className="">{option.name}</span>
                  </p>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" ">Safety</AccordionTrigger>
            <AccordionContent className="">
              {SAFETYOPTIONS.map((option) => {
                return (
                  <p key={option.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.safety}
                      onChange={() => handleCheckboxChange(option.name, 'safety')}
                      className="h-5 w-5"
                      checked={filters.safety === option.name}
                    />
                    <span className="">{option.name}</span>
                  </p>
                );
              })}{' '}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" ">Seating</AccordionTrigger>
            <AccordionContent className="">
              {DOORCOUNTOPTIONS.map((option) => {
                return (
                  <p key={option.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(option.name, 'door_count')}
                      className="h-5 w-5"
                      checked={option.name === checked.transmission}
                    />
                    <span className="">{option.name}</span>
                  </p>
                );
              })}{' '}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div> */}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className=" ">Door Count</AccordionTrigger>
          <AccordionContent className="">
            {DOORCOUNTOPTIONS.map((option) => {
              return (
                <p key={option.id} className="py-1 space-x-2 flex items-center">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(option.name, 'door_count')}
                    className="h-5 w-5"
                    checked={option.name === filters.door_count}
                  />
                  <span className="">{option.name}</span>
                </p>
              );
            })}{' '}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Features;
