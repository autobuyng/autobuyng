'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';
import Save from '@/app/(buyer)/assets/save.svg';
import Photo from '@/app/(buyer)/assets/photos.svg';
import { AppContext } from '@/context/AppContext';

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

export const ProductCard = ({ Img, name, model, price, id }: ProductCardProps) => {
  const router = useRouter();
  const { setVehicleId } = useContext(AppContext);

  const handleOnViewDetails = () => {
    setVehicleId(id);

    router.push(`/vehicle/${uuidv4()}`);
  };
  return (
    <div className="rounded-[12px] shadow-md">
      <div className="relative">
        <Image src={Img} alt={name} className=" rounded-tl-[12px] rounded-tr-[12px]" />

        <button className="absolute top-4 right-4 h-8 w-8 rounded-[50%] bg-black/55 p-1 flex items-center justify-center">
          <Image src={Save} alt="Save" />
        </button>

        <button className="absolute bottom-2 right-2  text-white rounded-[30px] bg-black/55 p-1 flex items-center text-sm justify-center">
          <span className="px-2">25</span> <Image src={Photo} alt="Photo" className="px-1 w-auto" />
        </button>
      </div>

      <div className=" px-2">
        <div className="flex items-center gap-2   border-neutral-300">
          <p className="font-[600] text-[20px] py-1">{name}</p>
          <p>{model}</p>
        </div>

        <div className="grid grid-cols-2 w-full  border-b border-neutral-300 my-1 ">
          <p className="border-r border-neutral-300 text-center items-center justify-start gap-2 flex ">
            <span className="capitalize text-primary-900 font-[500] leading-6">Brand New</span>
          </p>
          <p className="flex text-center items-center justify-start gap-2">
            <span className="capitalize text-primary-900  pl-2  font-[500] leading-6">
              8k miles
            </span>
          </p>
        </div>

        <p className=" font-[700]  text-lg my-1"> ₦ {price}</p>

        <div className="w-full cursor-pointer">
          <button
            onClick={handleOnViewDetails}
            className=" text-white rounded-md py-2 px-4 bg-primary-900 text-center w-full  mb-2.5"
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
  engin,
  transmission,
  vin,
}: VEHICLE_SEARCH_RESULTS_PROPS) => {
  const router = useRouter();
  // const handleOnViewDetails = () => {
  //   router.push('/vehicle/1rwerw4-r3e44udr-454');
  // };

  return (
    <div className="">
      <section className="rounded-md shadow-md  px-3 ">
        <div className="flex gap-6  cursor-pointer pb-4 ">
          <div className="w-full relative">
            <Image src={Img} alt={name} height={450} width={400} className="rounded-md w-full" />

            <button className="absolute top-4 right-4 h-8 w-8 rounded-[50%] bg-black/55 p-1 flex items-center justify-center">
              <Image src={Save} alt="Save" />
            </button>

            <button className="absolute bottom-2 right-2  text-white rounded-[30px] bg-black/55 p-1 flex items-center text-sm justify-center">
              <span className="px-2">25</span>{' '}
              <Image src={Photo} alt="Photo" className="px-1 w-auto" />
            </button>
          </div>
          <div className="px-1.5  flex flex-col gap-2 text-sm w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-2xl ">{name}</p>
              <p className="text-white bg-primary-700 px-1 py-1 rounded-tl-[10px] rounded-br-[10px]">
                Foreign used
              </p>
            </div>

            <p className="font-[700] text-2xl"> ₦ {price}</p>
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Mileage:</span> {mileage}
            </p>
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">MPG:</span>
              {mpg}
            </p>
            {/* <p>
              <span className="text-primary-900 pr-1 font-[600] ">Bodystyle:</span>
              {bodyStyle}
            </p> */}
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Engin:</span>
              {engin}
            </p>
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Transmission:</span>
              {transmission}
            </p>
            {/* <p>
              <span className="text-primary-900  pr-1 font-[600]">Color:</span>
              {color}
            </p> */}
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Vin:</span>
              {vin}
            </p>
            {/* <p>
              <span className="text-primary-900 pr-1 font-[600] ">Desc:</span>
              {desc}
            </p> */}

            <div className="cursor-pointer">
              <button
                onClick={() => router.push(`/vehicle/${uuidv4()}`)}
                className=" text-primary-900 underline font-[600]"
              >
                View vehicle details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
