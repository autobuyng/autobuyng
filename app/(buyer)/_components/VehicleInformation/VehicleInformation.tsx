import React from 'react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

// import link from './assets/link.svg';
import { X } from 'lucide-react';
import { VehicleData } from '@/types/types';
import { capitalizeFirstLetter } from '@/lib/utils';

const VehicleInformation = ({ vehicleData }: { vehicleData: VehicleData | null }) => {
  return (
    <div className="mt-4">
      <div>
        <div>
          <h1 className="py-2 font-bold text-xl">Overview</h1>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-6">
            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.vehicleType) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Body type
              </p>
            </div>
            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.interiorColor) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                interior color
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.driveTrain) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[80px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Drive train
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.transmission) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[103px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Transmission
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {vehicleData?.fuelConsumption || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[48px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                MPG
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.exteriorColor) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Exterior color
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.fuelType) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[77px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Fuel Type
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {capitalizeFirstLetter(vehicleData?.engine) || 'N/A'}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[61px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Engine
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Features</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              {/* {vehicleData?.features.slice(0, 4).map((item, index) => <p key={index}>{item}</p>)} */}
            </div>

            <div className="space-y-2">
              {/* {vehicleData?.features.slice(4).map((item, index) => <p key={index + 4}>{item}</p>)} */}
            </div>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="border-2 mt-8 border-primary-900 text-primary-900 font-bold w-[265px] h-[48px] rounded-sm uppercase">
                View All Features & Specs
              </button>
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-lg ">
              <div className="flex items-end justify-between h-full">
                <AlertDialogTitle className="font-bold text-primary-900">
                  Full Features
                </AlertDialogTitle>
                <AlertDialogCancel className="border-none outline-none m-0">
                  <X size={15} />
                </AlertDialogCancel>
              </div>
              <p className="text-sm text-neutral-700">
                We make every effort to provide accurate information but please verify included
                features and equipment prior to purchase.
              </p>
              <div>
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList className="max-h-[300px]">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup className="command-group" heading="Comfort">
                      {vehicleData?.features.comfort?.map((item, index) => (
                        <CommandItem key={index}>{item}</CommandItem>
                      ))}
                    </CommandGroup>

                    <CommandGroup className="command-group" heading="Tech">
                      {vehicleData?.features.tech?.map((item, index) => (
                        <CommandItem key={index}>{item}</CommandItem>
                      ))}
                    </CommandGroup>

                    <CommandGroup className="command-group" heading="Interior">
                      {vehicleData?.features.interior?.map((item, index) => (
                        <CommandItem key={index}>{item}</CommandItem>
                      ))}
                      <CommandEmpty>No results found.</CommandEmpty>
                    </CommandGroup>

                    <CommandGroup className="command-group" heading="Exterior & Mechanical">
                      {vehicleData?.features.mechanical?.map((item, index) => (
                        <CommandItem key={index}>{item}</CommandItem>
                      ))}

                      <CommandEmpty>No results found.</CommandEmpty>
                    </CommandGroup>

                    <CommandGroup className="command-group" heading="Entertainment">
                      {vehicleData?.features.entertainment?.map((item, index) => (
                        <CommandItem key={index}>{item}</CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
