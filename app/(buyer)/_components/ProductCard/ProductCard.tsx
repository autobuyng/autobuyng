import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import Gauge from '@/app/(buyer)/assets/pressureguage.svg';
import Transmission from '@/app/(buyer)/assets/transmission.svg';
import Engine from '@/app/(buyer)/assets/engine.svg';
import Save from '@/app/(buyer)/assets/save.svg';

type ProductCardProps = {
  id: string;
  Img: StaticImageData;
  name: string;
  model: string;
  mileage: string;
  price: string;
  category: string;
};

export const ProductCard = ({ Img, name, model, price }: ProductCardProps) => {
  return (
    <div className="rounded-md shadow-md cursor-pointer">
      <div className="relative">
        <Image src={Img} alt={name} className="rounded-md" />

        <button className="absolute top-4 right-4 h-8 w-8 rounded-[50%] bg-white p-1 flex items-center justify-center">
          <Image src={Save} alt="Save" />
        </button>

        <button className="absolute bottom-0 right-4  text-white rounded-[4px] bg-[#808080] p-1 flex items-center justify-center">
          25 photos
        </button>
      </div>
      <div className=" px-2 ">
        <div className="flex items-center justify-between py-2 border-b-2 border-neutral-300">
          <p className="font-[600] text-lg">{name}</p>
          <p>{model}</p>
        </div>

        <div className="grid grid-cols-3 w-full py-2">
          <p className="flex border-r-2 border-neutral-300 text-center items-center gap-2 px-1">
            <Image src={Gauge} alt="Guage" />
            <span>120cc</span>
          </p>
          <p className="border-r-2 border-neutral-300  text-center items-center gap-2 px-1 flex">
            <Image src={Engine} alt="Guage" />
            <span>120cc</span>
          </p>
          <p className="flex text-center items-center gap-2 px-1">
            <Image src={Transmission} alt="Guage" />
            <span>120cc</span>
          </p>
        </div>

        <p className="text-primary-700 font-[700] my-1"> ₦ {price}</p>

        <div className="w-full">
          <button className="border-2 border-primary-700 rounded-sm py-2 px-4 text-primary-700 text-center w-full mt-2 mb-4">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export const ColProductCard = ({
  Img,
  name,
  price,
  mileage,
  mpg,
  bodyStyle,
  engin,
  transmission,
  color,
  vin,
  desc,
}: VEHICLE_SEARCH_RESULTS_PROPS) => {
  return (
    <div className="">
      <section className="rounded-md shadow-md  px-3 ">
        <p className="font-[600] text-2xl pb-2">{name}</p>
        <div className="flex gap-6  cursor-pointer pb-4 ">
          <div>
            <Image src={Img} alt={name} height={400} width={400} className="rounded-md" />
          </div>
          <div className="px-1.5 pt-3  flex flex-col gap-1 text-sm">
            <p className="font-[700]"> ₦ {price}</p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Mileage:</span> {mileage}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">MPG:</span>
              {mpg}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Bodystyle:</span>
              {bodyStyle}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Engin:</span>
              {engin}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Transmission:</span>
              {transmission}
            </p>
            <p>
              <span className="text-primary-700  pr-1 font-[600]">Color:</span>
              {color}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Vin:</span>
              {vin}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Desc:</span>
              {desc}
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center py-3">
          <button className="border-[2px] font-[600] border-primary-700 rounded-sm text-primary-700 px-4 py-1.5 text">
            View details
          </button>
        </div>
      </section>
    </div>
  );
};
