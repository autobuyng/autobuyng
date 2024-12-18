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

type FeaturesTypeProps = {
  filters: FilterProps;
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
};

type Checked = {
  [key: string]: string;
  convenience: string;
  entertainment: string;
  exterior: string;
  fuel_type: string;
  safety: string;
  door_count: string;
};
const Features = ({ filters, setFilters }: FeaturesTypeProps) => {
  const [checked, setChecked] = useState<Checked>({
    convenience: '',
    entertainment: '',
    exterior: '',
    fuel_type: '',
    safety: '',
    door_count: '',
  });

  console.log(filters, 'filters');
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
      [category]: input === (checked[category] || filters[category]) ? '' : (input as string),
    }));
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
                      checked={
                        option.name === checked.convenience || filters.convenience === option.name
                      }
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
                      checked={
                        option.name === checked.entertainment ||
                        filters.entertainment === option.name
                      }
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
                      checked={option.name === checked.exterior || filters.exterior === option.name}
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
                      checked={option.name === checked.safety || filters.safety === option.name}
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
                    checked={option.name === (checked.door_count || filters.door_count)}
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
