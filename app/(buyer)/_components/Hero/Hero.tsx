import React from 'react';
import Image from 'next/image';
import './hero.css';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import HomeSearch from '../HomeSearch/HomeSearch';
import FingerPrint from '../../assets/Fingerprint.svg';

const Hero = () => {
  return (
    <section className="bg relative">
      <MaxWidthWrapper>
        <main className="pt-8 md:pt-16">
          <div className=" ">
            <p className=" max-w-[382px] md:max-w-[605px] text-primary-700 text-3xl md:text-4xl font-[700]">
              AutoBuy the Smarter Way to Buy a Car with confidence
            </p>
            <p className="text-lg  text-primary-700">
              Buy or <span className="text-secondary-500">sell</span> with us in minutes!
            </p>
          </div>

          <div className="mt-3 pb-20">
            <HomeSearch />
          </div>

          <div className="absolute bottom-[2rem] left-[60px] h-14 w-14 rounded-[50%] flex items-center justify-center bg-primary-500 p-2">
            <Image src={FingerPrint} alt="FingerPrint" />
          </div>
        </main>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
