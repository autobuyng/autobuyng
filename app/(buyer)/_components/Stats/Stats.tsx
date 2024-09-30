'use client';
import React, { Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Stats = () => {
  const STATS = [
    { id: '1', value: '10k+', text: 'New cars' },
    { id: '2', value: '25k+', text: 'Foreign Used  cars' },
    { id: '3', value: '25k+', text: 'Our Service centers' },
    { id: '4', value: '5k+', text: 'Our clients' },
  ];

  return (
    <main className="w-full min-w-full max-w-[70rem] overflow-auto my-16 ">
      <div className="hidden  md:flex w-full items-center justify-between bg-[#E1EBF4]  px-16 py-6 text-white text-center ">
        {STATS.map((data) => {
          return (
            <div className="" key={data.id}>
              <p className="text-[32px] md:text-[40px] font-bold text-primary-900">{data.value}</p>
              <p className="text-primary-900 md:text-lg">{data.text}</p>
            </div>
          );
        })}
      </div>

      <div className="flex md:hidden w-full items-center justify-between bg-[#E1EBF4]  px-16 py-6 text-white text-center ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {STATS.map((data) => {
            return (
              <Fragment key={data.id}>
                <main>
                  <SwiperSlide className="hidden">
                    <p className="text-[32px] md:text-[40px] font-bold text-primary-900">
                      {data.value}
                    </p>
                    <p className="text-primary-900 md:text-lg">{data.text}</p>
                  </SwiperSlide>
                </main>
              </Fragment>
            );
          })}
        </Swiper>
      </div>
    </main>

    // <main className="w-full min-w-full max-w-[70rem] overflow-auto my-16 ">
    //   <div className="flex w-full items-center justify-between bg-[#E1EBF4]  px-16 py-6 text-white text-center ">
    //     {STATS.map((data) => {
    //       return (
    //         <div key={data.id}>
    //           <p className="text-[32px] md:text-[40px] font-bold text-primary-900">{data.value}</p>
    //           <p className="text-primary-900 md:text-lg">{data.text}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </main>
  );
};

export default Stats;
