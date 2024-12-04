import Image from 'next/image';
import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import ourvalues from '../../assets/ourvalues.svg';
import HeadPhone from '@/app/(buyer)/assets/Headphone.svg';
import Car from '@/app/(buyer)/assets/ourvaluecar.svg';
import Price from '@/app/(buyer)/assets/ourvalueprice.svg';
import Verified from '@/app/(buyer)/assets/ourvalueverified.svg';
import Purchase from '@/app/(buyer)/assets/ourvaluepurchase.svg';

const Ourvalue = () => {
  const VALUES = [
    {
      id: '1',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: Car,
    },
    {
      id: '2',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: Price,
    },
    {
      id: '3',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: Verified,
    },
    {
      id: '4',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: Purchase,
    },
    {
      id: '5',
      title: 'Wide Range Of Vehicle Inventory',
      desc: 'Browse through our extensive inventory of vehicles each with detailed descriptions and photos.',
      Img: HeadPhone,
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="mb-8 relative">
        <div className="text-center w-full md:absolute  md:top-8  ">
          <h1 className="font-semibold text-center text-2xl lg:text-4xl max-w-[45rem] mx-auto">
            We Are Committed To Delivering A Superior Customer Experience
          </h1>
        </div>

        <div className="w-full hidden md:block  ">
          <Image src={ourvalues} alt="Ourvalue" className="mx-auto" />
        </div>

        <div className="w-full mt-3 md:mt-8 grid grid-cols-1 md:grid-cols-5 md:hidden ">
          <div className="mt-6 order-2 md:order-1 w-full md:col-span-2 space-y-6">
            {VALUES.map((value) => {
              return (
                <div key={value.id} className="flex items-center ">
                  <div className="flex flex-col  gap-2 order-2 ">
                    <p className="font-[600] md:text-right  md:text-xl">{value.title}</p>
                    <p className="text-sm text-neutral-700 md:text-right">{value.desc}</p>
                  </div>

                  <div className=" !h-20 !w-20 flex items-center flex-shrink-0  md:order-2  justify-center">
                    <Image
                      src={value.Img}
                      alt={value.title}
                      className="!h-14 !w-14 flex-shrink-0  p-3 rounded-md bg-primary-100 "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Ourvalue;
