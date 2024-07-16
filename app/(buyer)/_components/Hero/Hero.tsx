import React from 'react';
import './hero.css';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import HomeSearch from '../HomeSearch/HomeSearch';

const Hero = () => {
  return (
    <section className="bg">
      <MaxWidthWrapper>
        <main className="pt-8 md:pt-16">
          <div className="">
            <p className=" max-w-[382px] md:max-w-[605px] text-primary-700 text-3xl md:text-4xl font-[500]">
              AutoBuy the Smarter Way to Buy a Car with confidence
            </p>
            <p className="text-lg text-primary-700">
              Buy or <span className="text-secondary-500">sell</span> with us in minutes!
            </p>
          </div>

          <div className="mt-3">
            <HomeSearch />
          </div>
        </main>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
