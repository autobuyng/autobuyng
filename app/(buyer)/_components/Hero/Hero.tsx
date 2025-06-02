import React from 'react';

import './hero.css';
import HomeSearch from '../HomeSearch/HomeSearch';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';

const Hero = () => {
  return (
    <main className="relative w-full min-h-full">
      <div className="w-full h-full">
        <MaxWidthWrapper>
          <div className="w-full h-auto md:h-[90vh] md:max-h-[700px] flex flex-col md:flex-row gap-6 md:gap-0">
            <div className="flex-[1] relative w-full h-full mt-16 md:mt-5 flex items-center">
              <div className="flex flex-col gap-12 sm:gap-16">
                <div className="text-center md:text-start">
                  <h1 className="text-2xl min-[375px]:text-3xl sm:text-[42px] lg:text-[52px] font-bold text-black w-full md:max-w-[587px] sm:leading-[52px] lg:leading-[66px] sm:tracking-wide">
                    The <span className="text-primary-900">Smartest </span>way to buy a car with{' '}
                    <span className="text-primary-900">Confidence.</span>
                  </h1>
                  <p className="text-[#1A1A1ACC] text-sm min-[375px]:text-base sm:text-lg mt-1">
                    compare and buy your next car-seamless, smart and secure
                  </p>
                </div>
                <div className="flex gap-8 sm:gap-10 mx-auto md:mx-0">
                  <div className="">
                    <h1 className="text-[32px] sm:text-5xl lg:text-[60px] lg:leading-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0073E6] via-[#0661BC] to-[#0E4984]">
                      99.9%
                    </h1>
                    <p className="text-sm min-[375px]:text-base sm:text-lg">
                      Client Satisfaction rate
                    </p>
                  </div>
                  <div className="">
                    <h1 className="text-[32px] sm:text-5xl lg:text-[60px] lg:leading-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#0073E6] via-[#0661BC] to-[#0E4984]">
                      200+
                    </h1>
                    <p className="text-sm min-[375px]:text-base sm:text-lg">Our Inventory</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 flex items-center ">
                <Image
                  src="https://ik.imagekit.io/wy2wtykti/Autobuy/car_vector?updatedAt=1733177744876"
                  alt="car-vector"
                  width={449}
                  height={334}
                />
              </div>
            </div>

            <div className="flex-[1] h-full flex items-center justify-center relative py-5 bg-cyan-300/20">
              <HomeSearch />
              <Image
                src="https://ik.imagekit.io/wy2wtykti/Autobuy/Frame%201261156761"
                alt="background"
                width={1000}
                height={700}
                className="absolute top-0 h-full"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
};
export default Hero;
