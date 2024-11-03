import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';

import PaymentCard from '@/app/assets/payentcard.svg';
import { cn } from '@/lib/utils';
// import { Facebook, Instagram, Twitter } from 'lucide-react';
import Facbook from './assets/facebook.svg';
import Twitter from './assets/x.svg';
import Instagram from './assets/instagram.svg';

const Footer = ({ bgColor, btnColor }: { bgColor?: string; btnColor?: string }) => {
  return (
    <main className={cn(' h-fit  py-8', bgColor ? 'bg-[#F7F7F7]' : 'bg-primary-900 text-white')}>
      <MaxWidthWrapper>
        <main className="flex flex-col sm:flex-row  justify-between w-full gap-10 ">
          <section className="flex flex-col sm:flex-row w-fit lg:w-1/2 gap-6">
            {/* <div>
              <Image src={bgColor ? Autobuy1 : Autobuy2} alt="Autobuy" />
            </div> */}

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
              <label htmlFor="email" className={cn('block  font-bold text-sm  pb-3')}>
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

        <main className="flex flex-col md:flex-row justify-between mt-10 items-start  text-sm">
          <div className="py-2 md:py-0">
            <p className="flex flex-col md:flex-row items-start gap-2 md:gap-6 ">
              <Link href={'/terms-and-condition'}> Terms and condition</Link>
              <Link href={'/terms-and-condition'}> Responsible Disclosure</Link>
              <Link href={'/terms-and-condition'}> Provacy Policy</Link>
            </p>
            {/* <p>© 2024 Autobuy. All rights reserved</p> */}
          </div>

          <div className=" flex gap-4 py-3 md:py-0 items-start">
            <Link href={'/facebook'}>
              <Image src={Facbook} alt="facebook" />
            </Link>
            <Link href={'/facebook'}>
              <Image src={Instagram} alt="facebook" />
            </Link>
            <Link href={'/facebook'}>
              <Image src={Twitter} alt="facebook" />
            </Link>
          </div>
        </main>

        <p>© 2024 Autobuy. All rights reserved</p>
      </MaxWidthWrapper>
    </main>
  );
};

export default Footer;
