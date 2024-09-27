import React from 'react';

import './hero.css';
import HomeSearch from '../HomeSearch/HomeSearch';

const Hero = () => {
  return (
    <main className="relative w-full">
      <section className="banner "></section>
      <div className="w-full h-full sm:min-h-[90vh] md:h-screen absolute top-0 sm:top-8 z-10 bg-black/50 sm:bg-transparent ">
        <div className=" w-full sm:max-w-[1336px] sm:px-6 mx-auto h-screen md:h-[83vh] relative flex items-start sm:items-center justify-center ">
          <video
            src={'https://ik.imagekit.io/0xy9wqmrh/Autobuy/autobuygif.mp4?updatedAt=1727266609367'}
            autoPlay
            loop
            muted
            color="bg-black/50"
            className=" w-full h-[35vh] sm:h-full object-cover sm:rounded-[30px] bg-opacity-50"
          />

          <div className=" absolute left-0 top-0 flex flex-col md:flex-row items-center justify-center w-full h-full sm:gap-8">
            <div className=" absolute top-6  w-full md:w-fit h-full sm:static mt-  mx-2 sm:ml-12 sm:mr-0 flex items-center justify-center sm:justify-start order-2 md:order-1">
              <HomeSearch />
            </div>

            <div className="  flex flex-col items-center justify-start sm:justify-center w-full text-center order-1 md:order-2  h-full">
              <h1 className=" mt-8 sm:mt-0 min-[340px]:text-lg min-[375px]:text-3xl  md:text-[36px]  lg:text-[48px] font-bold text-white max-w-[300px] sm:max-w-[500px] md:max-w-[700px] sm:leading-[3rem] sm:tracking-wide  py-2 ">
                AutoBuy the Smarter Way to Buy a Car with confidence
              </h1>
              <p className="text-white font-semibold text-lg">
                Buy or <span className="text-secondary-500">Sell</span> with us in minutes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
