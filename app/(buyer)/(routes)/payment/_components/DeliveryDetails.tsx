'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const DeliveryDetails = () => {
  const [activeChoice, setActiveChoice] = useState(1);
  return (
    <main className="">
      <div>
        <h1 className="text-lg font-[600] uppercase py-1.5">Delivery details</h1>

        <section className="space-y-6">
          <div
            className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-4', {
              'outline outline-[4px]  outline-[#0382c8]/25': activeChoice === 1,
            })}
          >
            <div
              onClick={() => setActiveChoice(1)}
              className={cn(
                'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                {
                  ' border-8 border-primary-700': activeChoice === 1,
                },
              )}
            ></div>
            <div className="w-fulll">
              <h1 className=" font-[600]">Pickup at autobuy lot</h1>
              <p>From june 10</p>
              <p className="text-sm text-neutral-500">(location will be sent to you via Email)</p>
            </div>
          </div>

          <div
            className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-4', {
              'outline outline-[4px]  outline-[#0382c8]/25': activeChoice === 2,
            })}
          >
            <div
              onClick={() => setActiveChoice(2)}
              className={cn(
                'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                {
                  ' border-8 border-primary-700': activeChoice === 2,
                },
              )}
            ></div>
            <div className="w-fulll">
              <h1 className=" font-[600]">Door Delivery</h1>
              <p>From June 23 to July 23 </p>
              <p className="text-sm text-neutral-500">(location will be sent to you via Email)</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DeliveryDetails;
