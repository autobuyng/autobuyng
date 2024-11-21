'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Carouselitem from '../_components/Carousel';

const page = () => {
  const Uploadedvehicle = {
    id: '1',
    name: 'Mercedes Benz CLA300',
    exterior: 'Black',
    interior: 'Red',
    engine: '4 Cylinder',
    drive: 'AWD',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    fuel: 'PMS',
    transmission: 'Automatic',
    vin: '0177279F54',
    mileage: '23,000ml',
  };
  const { name, exterior, interior, engine, drive, mileage, image, fuel, transmission, vin } =
    Uploadedvehicle;

  return (
    <div className="flex flex-col gap-6 px-6">
      <div className="flex items-center gap-6 py-2" onClick={() => window.history.back()}>
        <ArrowLeft className="cursor-pointer" />
        <p className="text-lg sm:text-2xl font-medium">Back</p>
      </div>
      <section className="max-w-[470px]">
        <div className="gap-6 mb-8 ">
          <div>
            <Image src={image} alt="car" height={230} width={464} className="h-[260px]" />
          </div>

          <div className="max-w-[464px] py-5">
            <Carouselitem />
          </div>

          <div className="space-y-2 text-sm pt-2">
            <p className="font-[700] text-2xl mb-5"> {name}</p>

            <p>
              <span className="pr-1 font-[600] ">Exterior Color:</span> {exterior}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Interior Color:</span>
              {interior}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Engine Type:</span>
              {engine}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Drive Train:</span>
              {drive}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Fuel Type:</span>
              {fuel}
            </p>
            <p>
              <span className="pr-1 font-[600]">VIN:</span>
              {vin}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Transmission:</span>
              {transmission}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Mileage:</span>
              {mileage}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:text-lg gap-4 mb-10">
          <button
            type="button"
            className="bg-secondary-700 text-white py-[10px] px-4 rounded-[8px] w-fit"
          >
            View on Marketplace
          </button>
          <button
            type="button"
            className="bg-white border-2 border-secondary-700 text-secondary-700 py-[10px] px-4 rounded-[8px] w-fit"
          >
            I have sold this vehicle
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
