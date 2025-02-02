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
  const data = new Date();
  return (
    <main className={cn(' h-fit  py-8', bgColor ? 'bg-[#F7F7F7]' : 'bg-primary-900 text-white')}>
      <MaxWidthWrapper>
        <main className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full gap-10 ">
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

          <div>
            <label htmlFor="email" className={cn('block  font-bold text-sm  pb-3')}>
              NEWSLETTER
            </label>

            <div className="flex max-w-[283px] md:max-w-fit   bg-white rounded-sm border border-white ">
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className=" w-full outline-none py-2 px-2 text-black border-gray-200 shadow-sm text-sm"
              />
              <button
                className={cn(
                  '  px-4 py-3 h-full text-sm whitespace-nowrap rounded-tr-sm rounded-br-sm',
                  btnColor ? btnColor : 'bg-primary-900',
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
        </main>

        <div className="hidden xl:block border-b border-primary-500 mt-10"></div>

        <main className="flex flex-col md:flex-row justify-between mt-10 items-start  text-sm">
          <div className="py-2 md:py-0">
            <p className="flex flex-col md:flex-row items-start gap-2 md:gap-6 ">
              <Link href={'/terms-and-condition'}> Terms and condition</Link>
              <span className="text-primary-500 hidden md:block">|</span>
              <Link href={'/terms-and-condition'}> Responsible Disclosure</Link>
              <span className="text-primary-500 hidden md:block">|</span>
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

        <p>© {data.getFullYear()} Autobuy. All rights reserved</p>
      </MaxWidthWrapper>
    </main>
  );
};

export default Footer;
