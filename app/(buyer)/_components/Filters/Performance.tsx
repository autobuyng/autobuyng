'use client';
import React, { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CYLINDERS, DRIVE_TRAINS, FUEL_TYPE, TRANSMISSION } from '@/constants/constants';
import { FilterProps } from '@/types/types';
import { useStore } from '@/store/useStore';

type Checked = {
  [key: string]: string;
  transmission: string;
  drive_train: string;
  cylinders: string;
  fuel_type: string;
};

const Performance = () => {
  const { filters, setFilters } = useStore();

  const [, setChecked] = useState<Checked>({
    transmission: '',
    drive_train: '',
    cylinders: '',
    fuel_type: '',
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
            <AccordionTrigger className=" py-2 ">Transmission</AccordionTrigger>
            <AccordionContent className="">
              {TRANSMISSION.map((color) => {
                return (
                  <p key={color.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.transmission}
                      onChange={() => handleCheckboxChange(color.name, 'transmission')}
                      className="h-5 w-5"
                      checked={filters.transmission === color.name}
                    />
                    <span className="">{color.name}</span>
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
            <AccordionTrigger className=" py-2 ">Drivetrain</AccordionTrigger>
            <AccordionContent className="">
              {DRIVE_TRAINS.map((train) => {
                return (
                  <p key={train.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.drive_train}
                      onChange={() => handleCheckboxChange(train.name, 'drive_train')}
                      className="h-5 w-5"
                      checked={filters.drive_train == train.name}
                    />
                    <span className="">{train.name}</span>
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
            <AccordionTrigger className=" py-2 ">Cylinders</AccordionTrigger>
            <AccordionContent className="">
              {CYLINDERS.map((cylinder) => {
                return (
                  <p key={cylinder.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.cylinders}
                      onChange={() => handleCheckboxChange(cylinder.name, 'cylinders')}
                      className="h-5 w-5"
                      checked={filters.cylinders === cylinder.name.toLowerCase()}
                    />
                    <span className="">{cylinder.name}</span>
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
            <AccordionTrigger className=" ">Fueltype</AccordionTrigger>
            <AccordionContent className="">
              {FUEL_TYPE.map((fuelType) => {
                return (
                  <p key={fuelType.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      value={filters.fuel_type}
                      onChange={() => handleCheckboxChange(fuelType.name, 'fuel_type')}
                      className="h-5 w-5"
                      checked={filters.fuel_type === fuelType.name}
                    />
                    <span className="">{fuelType.name}</span>
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

export default Performance;
