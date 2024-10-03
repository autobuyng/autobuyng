'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import Gauge from '@/app/(buyer)/assets/pressureguage.svg';
import Transmission from '@/app/(buyer)/assets/transmission.svg';
import Engine from '@/app/(buyer)/assets/engine.svg';
import Save from '@/app/(buyer)/assets/save.svg';
import Photo from '@/app/(buyer)/assets/photos.svg';

type ProductCardProps = {
  index?: number;
  id: string;
  Img: StaticImageData;
  name: string;
  model: string;
  mileage: string;
  price: string;
  category: string;
};

export const ProductCard = ({ Img, name, model, price }: ProductCardProps) => {
  const router = useRouter();
  // const { setVehicleId } = useContext(AppContext);

  const handleOnViewDetails = () => {
    // setVehicleId(id);
    router.push('/vehicle/1rwerw4-r3e44udr-454');
  };
  return (
    <div className="rounded-[12px] shadow-md">
      <div className="relative">
        <Image src={Img} alt={name} className=" rounded-tl-[12px] rounded-tr-[12px]" />

        <button className="absolute top-4 right-4 h-8 w-8 rounded-[50%] bg-black/55 p-1 flex items-center justify-center">
          <Image src={Save} alt="Save" />
        </button>

        <button className="absolute bottom-0 right-0  text-white rounded-tl-[4px] rounded-tr-[4px] bg-black/55 p-1 flex items-center text-sm justify-center">
          <span className="px-3">25</span> <Image src={Photo} alt="Photo" />
        </button>
      </div>

      <div className=" px-2 ">
        <div className="flex items-center justify-between py-2  border-neutral-300">
          <p className="font-[600] text-lg">{name}</p>
          <p>{model}</p>
        </div>

        <div className="grid grid-cols-3 w-full  border border-primary-700">
          <p className="flex border-r  border-primary-700 text-center justify-center items-center gap-2 px-1 text-xs">
            <Image src={Gauge} alt="Guage" />
            <span className="uppercase">120cc</span>
          </p>
          <p className="border-r border-primary-700  py-1.5 text-center items-center justify-center gap-2 px-1 flex text-xs">
            <Image src={Engine} alt="Guage" />
            <span className="uppercase">v8</span>
          </p>
          <p className="flex text-center items-center justify-center gap-2 px-1 text-xs">
            <Image src={Transmission} alt="Guage" />
            <span className="uppercase">manual</span>
          </p>
        </div>

        <p className=" font-[700] my-1 text-lg"> ₦ {price}</p>

        <div className="w-full cursor-pointer">
          <button
            onClick={handleOnViewDetails}
            className="border-2 text-white rounded-md py-2 px-4 bg-primary-900 text-center w-full mt-2 mb-4"
          >
            View Details
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
  const router = useRouter();
  // const handleOnViewDetails = () => {
  //   router.push('/vehicle/1rwerw4-r3e44udr-454');
  // };

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

        <div className="flex justify-end items-center py-3 cursor-pointer">
          <button
            onClick={() => router.push('/vehicle/1rwerw4-r3e44udr-454')}
            className="border-[2px] font-[600] border-primary-700 rounded-sm text-primary-700 px-4 py-1.5 text"
          >
            View details
          </button>
        </div>
      </section>
    </div>
  );
};
