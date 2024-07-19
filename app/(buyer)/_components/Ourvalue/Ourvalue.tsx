import Image from 'next/image';
import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Car from '../../assets/car.svg';
import HeadPhone from '../../assets/Headphone.svg';

const Ourvalue = () => {
  const VALUES = [
    {
      id: '1',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: HeadPhone,
    },
    {
      id: '1',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: HeadPhone,
    },
    {
      id: '1',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: HeadPhone,
    },
  ];

  return (
    <MaxWidthWrapper>
      <main className="mb-8">
        <div className="text-center w-full ">
          <h1 className="font-bold text-center sm:text-2xl lg:text-4xl max-w-[45rem] mx-auto">
            We Are Committed To Delivering A Superior Customer Experience
          </h1>
        </div>

        <div className="w-full mt-3 md:mt-8 grid grid-cols-1 md:grid-cols-5 ">
          <div className="mt-6 order-2 md:order-1 w-full md:col-span-2 space-y-6">
            {VALUES.map((value) => {
              return (
                <div key={value.id} className="flex items-center gap-4">
                  <div className="flex flex-col  gap-2 order-2 ">
                    <p className="font-[600] md:text-right  md:text-xl">{value.title}</p>
                    <p className="text-sm text-neutral-700 md:text-right">{value.desc}</p>
                  </div>
                  <div className=" h-20 w-20 flex items-center md:order-2 justify-center">
                    <Image
                      src={value.Img}
                      alt={value.title}
                      className="h-14 w-14 flex-shrink-0  p-3 rounded-md bg-primary-700"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" order-1 md:order-2 flex items-center justify-center">
            <Image src={Car} alt="Car" />
          </div>

          <div className="mt-6 order-3 w-full md:col-span-2 space-y-6">
            {VALUES.map((value) => {
              return (
                <div key={value.id} className="flex items-center justify-center gap-4">
                  <div className=" h-20 w-20  flex items-center justify-center">
                    <Image
                      src={value.Img}
                      alt={value.title}
                      className="h-14 w-14 flex-shrink-0  p-3 rounded-md bg-primary-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="font-[600] text-xl">{value.title}</p>
                    <p className="text-sm text-neutral-700">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export default Ourvalue;
