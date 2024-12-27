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

const VehicleInformation = ({ vehicleData }: { vehicleData: VehicleData | null }) => {
  return (
    <div className="mt-4">
      <div>
        {/* <div className="my-2 space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-[600] text-2xl">Mercedes Benz</p>
            <p className="text-white bg-primary-700 px-1 py-1 rounded-tl-[10px] rounded-br-[10px]">
              Foreign used
            </p>
          </div>

          <div className="space-x-1 flex items-center">
            <span className="text-neutral-700 font-semibold">9k miles</span>
            <span>|</span>
            <span className="text-xl font-bold tracking-wide">NGN13,000,000</span>
          </div>

          <div className="flex items-center justify-between">
            <p className="flex items-center justify-center gap-2 bg-[#CCE0FF] w-[191px] h-[29px] rounded-[50px] text-sm">
              <span className="text-primary-900">VIN</span>
              <span>19XFB2F71FE246463</span>
            </p>

            <p className="underline text-sm text-primary-900 cursor-pointer  capitalize flex items-center ">
              <Link
                className="flex items-center gap-1"
                href="/vehicle-history/45174d0d-7906-4cef-a617-904cf2a580eb"
              >
                view vehicle history
                <Image src={link} alt="Link" />
              </Link>
            </p>
          </div>
        </div> */}

        <div>
          <h1 className="py-2 font-bold text-xl">Overview</h1>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-6">
            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {vehicleData?.interiorColor}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                interior color
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">4 Wheel Drive</h1>
              <p className="bg-primary-100 text-primary-900 w-[80px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Drive train
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {vehicleData?.transmission}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[103px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Transmission
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">
                {vehicleData?.fuelConsumption}
              </h1>
              <p className="bg-primary-100 text-primary-900 w-[48px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                MPG
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">Black</h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Exterior color
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">{vehicleData?.fuelType}</h1>
              <p className="bg-primary-100 text-primary-900 w-[77px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Fuel Type
              </p>
            </div>

            {/* <div>
              <h1 className="text-[20px] leading-[25px] font-medium">35 - 40</h1>
              <p className="bg-primary-100 text-primary-900 w-[48px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                MPG
              </p>
            </div> */}
            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">{vehicleData?.engine}</h1>
              <p className="bg-primary-100 text-primary-900 w-[61px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Engine
              </p>
            </div>
          </div>

          {/* <p className="underline text-sm text-primary-900 cursor-pointer mt-8 capitalize">
            <Link href="/vehicle-history/45174d0d-7906-4cef-a617-904cf2a580eb">
              view vehicle history
            </Link>
          </p> */}
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Features</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <p>Heated and Ventilated Seats</p>
              <p>Power Liftgate</p>
              <p>Parking Sensors</p>
              <p>Rear View Camera</p>
              <p>360 Camera System</p>
            </div>

            <div className="space-y-2">
              <p>Apple CarPlay</p>
              <p>Blind Spot Monitor</p>
              <p>Remote Start</p>
              <p>Sunroofs</p>
              <p>Wireless Charging</p>
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
                    <CommandGroup heading="Installed Upgrades">
                      <CommandItem>Automated Cruise Control</CommandItem>
                      <CommandItem>Auxiliary Audio Iinputs</CommandItem>
                      <CommandItem>Cloth Seats</CommandItem>
                      <CommandItem>Driver Adjustable Lumbar</CommandItem>
                      <CommandItem>Front Heat Seaters</CommandItem>
                    </CommandGroup>

                    {/* <CommandSeparator /> */}

                    <CommandGroup heading="Tech">
                      <CommandItem>Automatic Highbeams</CommandItem>
                      <CommandItem>Blindspot Monitor</CommandItem>
                      <CommandItem>Bluetooth Technology</CommandItem>
                      <CommandItem>Parking Sensors</CommandItem>
                      <CommandItem>Rear View Camera</CommandItem>
                      <CommandItem>Remote Start</CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Interior">
                      <CommandItem>Overhead Airbags</CommandItem>
                      <CommandItem>Power Locks</CommandItem>
                      <CommandItem>Power Mirror</CommandItem>
                      <CommandItem>Power Seats</CommandItem>
                      <CommandItem>Power Windows</CommandItem>
                      <CommandItem>Side Airbags</CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Exterior & Mechanical">
                      <CommandItem>ABS Brakes</CommandItem>
                      <CommandItem>Allow Wheels</CommandItem>
                      <CommandItem>Daytime Running Light</CommandItem>
                      <CommandItem>Traction Control</CommandItem>
                      <CommandItem>Automatic Transsmission</CommandItem>
                      <CommandItem>Side Airbags</CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Conforts">
                      <CommandItem>Air Conditoning</CommandItem>
                      <CommandItem>Auxilliary Audio input</CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Entertainment">
                      <CommandItem>AM/FM Stereo</CommandItem>
                      <CommandItem>Android Auto </CommandItem>
                      <CommandItem>Apple CarPlay</CommandItem>
                      <CommandItem>Satellite Radio</CommandItem>
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
