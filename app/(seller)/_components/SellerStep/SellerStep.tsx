'use client';
import React from 'react';

import Register from '@/app/(seller)/assets/register.svg';
import Upload from '@/app/(seller)/assets/upload.svg';
import Inspect from '@/app/(seller)/assets/inspect.svg';
import Sell from '@/app/(seller)/assets/wesell.svg';
import arrow from '@/app/(seller)/assets/arrow.svg';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';

const SellerStep = () => {
  const { isTablet } = useIsMobile();
  const SELLER_STEP = [
    {
      id: '1',
      text: 'You Register',
      desc: 'First create an account',
      Icon: Register,
      Icon2: arrow,
    },
    { id: '2', text: 'Your upload', desc: 'First create an account', Icon: Upload, Icon2: arrow },
    {
      id: '3',
      text: 'We inspect',
      desc: 'We screen your vehicle and approve for inspection',
      Icon: Inspect,
      Icon2: arrow,
    },
    { id: '4', text: 'We sell', desc: 'we sell on Autobuy', Icon: Sell },
  ];

  return (
    <section className="mt-8">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-2xl capitalize">
          Sell with 4 <span className="text-secondary-500">Working Steps</span>
        </h1>
        <p className="text-neutral-700 font-bold">
          Experience a seamless sale of your vehicle and inventory with Autobuy
        </p>
      </div>

      <MaxWidthWrapper>
        <div className=" mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 ">
          {SELLER_STEP?.map((step) => (
            <div
              key={step.id}
              className={cn('flex bg-red gap-2 ml-4', {
                'mr-10': step.id === '4',
              })}
            >
              <div className=" text-center w-full">
                <Image src={step.Icon} alt={step.text} className="mx-auto" />
                <div className="space-y-2 w-52 mx-auto">
                  <h1 className="font-bold text-xl">{step.text}</h1>
                  <p className="text-neutral-700 text-sm ">{step.desc}</p>
                </div>
              </div>

              {step.Icon2 && !isTablet && (
                <p className="flex justify-start items-start mt-7 -ml-8 w-full flex-shrink-0">
                  <Image
                    src={step.Icon2}
                    alt={step.text}
                    className="w-75px md:w-[100px] xl:w-[150px]"
                  />
                </p>
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SellerStep;
