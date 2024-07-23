import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CYLINDERS, DRIVE_TRAINS, TRANSMISSION } from '@/constants/constants';

const Performance = () => {
  return (
    <main>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" py-2 px-8">Transmission</AccordionTrigger>
            <AccordionContent className="px-8">
              {TRANSMISSION.map((color) => {
                return (
                  <p key={color.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      // onChange={() => handleCheckboxChange(color.id)}
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

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className=" py-2 px-8">Drivetrain</AccordionTrigger>
            <AccordionContent className="px-8">
              {DRIVE_TRAINS.map((train) => {
                return (
                  <p key={train.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      // onChange={() => handleCheckboxChange(train.id)}
                      className="h-5 w-5"
                      // checked={filters.style}
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
            <AccordionTrigger className=" py-2 px-8">Cylinders</AccordionTrigger>
            <AccordionContent className="px-8">
              {CYLINDERS.map((cylinder) => {
                return (
                  <p key={cylinder.id} className="py-1 space-x-2 flex items-center">
                    <input
                      type="checkbox"
                      // onChange={() => handleCheckboxChange(cylinder.id)}
                      className="h-5 w-5"
                      // checked={filters.style}
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
            <AccordionTrigger className=" px-8">Fueltype</AccordionTrigger>
            <AccordionContent className="px-8">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default Performance;
