import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';

import Autobuy2 from '@/app/assets/Autobuy2.svg';
import Autobuy1 from '@/app/assets/Autobuy.svg';
import PaymentCard from '@/app/assets/payentcard.svg';
import { cn } from '@/lib/utils';

const Footer = ({ bgColor, btnColor }: { bgColor?: string; btnColor?: string }) => {
  return (
    <main className={cn(' h-fit  py-8', bgColor ? 'bg-[#F7F7F7]' : 'bg-primary-900 text-white')}>
      <MaxWidthWrapper>
        <main className="flex flex-col sm:flex-row  justify-between w-full gap-10 ">
          <section className="flex flex-col sm:flex-row w-fit lg:w-1/2 gap-6">
            <div>
              <Image src={bgColor ? Autobuy1 : Autobuy2} alt="Autobuy" />
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-between">
              <div className="space-y-4">
                <h1 className="font-[600] text-sm uppercase">Need Help</h1>
                <p className="text-sm">Chat with use</p>
                <p className="text-sm">Contact us</p>
              </div>

              <div className="space-y-4">
                <h1 className="font-[600] text-sm uppercase">About Autobuy</h1>
                <p className="text-sm">Introduction</p>
                <p className="text-sm">What we do</p>
                <p className="text-sm">How we do it</p>
                <p className="text-sm">Our goals</p>
              </div>
            </div>
          </section>

          <section className="w-fit lg:w-1/2 flex flex-col sm:flex-row  justify-between items-start gap-4">
            <div>
              <label htmlFor="email" className="block  font-bold text-sm text-white pb-3">
                NEWSLETTER
              </label>

              <div className="flex  pl-2 bg-white rounded-sm ">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="mt-1 w-full outline-none py-2 text-black border-gray-200 shadow-sm sm:text-sm"
                />
                <button
                  className={cn(
                    '  px-4 py-3 h-full text-sm whitespace-nowrap rounded-tr-sm rounded-br-sm',
                    btnColor ? btnColor : 'bg-primary-500',
                  )}
                >
                  Sign up
                </button>
              </div>
            </div>

            <div>
              <p className="pb-3 font-[600] text-sm uppercase whitespace-nowrap">
                ACCEPTED PAYMENT METHODS
              </p>
              <Image src={PaymentCard} alt="Paymentcard" />
            </div>
          </section>
        </main>
      </MaxWidthWrapper>
    </main>
  );
};

export default Footer;
