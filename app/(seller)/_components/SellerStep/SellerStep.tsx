'use client';
import React from 'react';
import Image from 'next/image';

import Register from '@/app/(seller)/assets/register.svg';
import Upload from '@/app/(seller)/assets/upload.svg';
import Inspect from '@/app/(seller)/assets/inspect.svg';
import Sell from '@/app/(seller)/assets/wesell.svg';
import Itworks from '@/app/(seller)/assets/itworks.svg';
import Itworkswide from '@/app/(seller)/assets/itworkswide.png';

const SellerStep = () => {
  return (
    <section className="mt-10 w-[90%] mx-auto">
      <div className="flex justify-center w-full ">
        <div className="max-w-[1086px]">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-[42px] font-bold mb-2 sm:mb-3">HOW IT WORKS?</h1>
            <p className="sm:text-lg text-[#808080]">
              Transform your vehicle into cash with our seamless selling process!
            </p>
          </div>
          <div className="lg:hidden flex justify-center items-center mb-5">
            <Image
              src={Itworkswide}
              alt="image"
              width={500}
              height={200}
              className="hidden sm:block"
            />
            <Image src={Itworks} alt="image" width={350} height={438} className="block sm:hidden" />
          </div>
          <div className="flex sm:flex-row flex-col gap-6">
            <div className="flex flex-col gap-10">
              <div className="p-6 bg-white border border-[#CACACA] rounded-[15px] w-full sm:max-w-80 ">
                <Image src={Register} alt="register" width={56} height={32} className="" />
                <div className="space-y-2 ">
                  <h1 className="font-bold text-lg border-l-4 border-l-secondary-700 pl-2 pt-[1.5px] my-2">
                    Register
                  </h1>
                  <p className="text-neutral-700">
                    Take the first step towards a better car buying and selling experience. Register
                    now and join the premier destination for car enthusiasts in Nigeria.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white border border-[#CACACA] rounded-[15px] w-full sm:max-w-80">
                <Image src={Inspect} alt="inspect" width={56} height={32} className="" />
                <div className="space-y-2 ">
                  <h1 className="font-bold text-lg border-l-4 border-l-secondary-700 pl-2 pt-[1.5px] my-2">
                    We Inspect
                  </h1>
                  <p className="text-neutral-700">
                    We provide transparent car history to build trust. From sedans to trucks for
                    sale, enjoy a seamless, hassle-free experience. Turn your car into cash today!
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <Image src={Itworks} alt="image" width={350} height={438} className="" />
            </div>
            <div className="flex flex-col gap-10">
              <div className="p-6 bg-white border border-[#CACACA] rounded-[15px] w-full sm:max-w-80">
                <Image src={Upload} alt="upload" width={56} height={32} className="mb-2" />
                <div className="space-y-2 ">
                  <h1 className="font-bold text-lg border-l-4 border-l-secondary-700 pl-2 pt-[1.5px] my-2">
                    Book Inspection
                  </h1>
                  <p className="text-neutral-700">
                    Our AI-powered diagnostic software performs a thorough inspection and instantly
                    delivers an accurate appraisal, boosting buyer confidence and maximizing your
                    car&apos;s value.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white border border-[#CACACA] rounded-[15px] w-full sm:max-w-80">
                <Image src={Sell} alt="sell" width={56} height={32} className="mb-2" />
                <div className="space-y-2 ">
                  <h1 className="font-bold text-lg border-l-4 border-l-secondary-700 pl-2 pt-[1.5px] my-2">
                    Get Paid
                  </h1>
                  <p className="text-neutral-700">
                    After AI-powered appraisal, your vehicle is listed instantly. Once sold, you
                    receive fast, secure payment. Whether it&apos;s used cars or trucks for sale, we
                    ensure top value through a seamless process..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerStep;
