import React from 'react';

import './hero.css';
import HomeSearch from '../HomeSearch/HomeSearch';

const Hero = () => {
  return (
    <main className="relative w-full min-h-full">
      <section className="banner "></section>
      <div className="w-full h-full sm:min-h-[90vh] md:min-h-full absolute top-0 md:top-8 z-10 bg-black/50 md:bg-transparent ">
        <div className=" w-full sm:max-w-[1336px] md:px-6 mx-auto h-screen md:h-[83vh] relative flex items-start md:items-center justify-center ">
          <div className=" w-full h-full md:max-h-[720px] md:h-full relative md:rounded-[30px] bg-black/55">
            <video
              src={
                'https://ik.imagekit.io/0xy9wqmrh/Autobuy/autobuygif.mp4?updatedAt=1727266609367'
              }
              autoPlay
              loop
              muted
              color="bg-black/50"
              className=" absolute top-0 w-full h-[35vh] md:h-full object-cover md:rounded-[30px] bg-opacity-50 z-[-1]"
            />
          </div>

          <div className=" absolute left-0 top-0 flex flex-col md:flex-row items-center justify-center w-full h-full sm:gap-8">
            <div className=" flex-[3] md:flex-[1]  w-full md:w-fit h-full sm:static  md:ml-12 sm:mr-0 flex  md:items-center justify-center md:justify-start order-2 md:order-1">
              <HomeSearch />
            </div>

            <div className=" flex-[1] md:flex-[3]  flex flex-col items-center justify-start sm:justify-center w-full text-center order-1 md:order-2  h-full">
              <h1 className=" mt-8 sm:mt-0  min-[375px]:text-xl sm:text-2xl  md:text-[36px]  lg:text-[48px] font-bold text-white max-w-[300px] sm:max-w-[400px] md:max-w-[700px] sm:leading-[3rem] sm:tracking-wide  py-2 ">
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
