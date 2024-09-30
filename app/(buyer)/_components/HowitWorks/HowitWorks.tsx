'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Accuracy from '@/app/(buyer)/assets/acuracy.svg';

const HowitWorks = () => {
  return (
    <MaxWidthWrapper>
      <main className="my-20 w-full h-full">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="max-w-[643px] font-medium text-center  md:text-[32px]">
            Accurate Vehicle Appraisals You Can Trust
          </h1>
          <p className="max-w-[721px] text-center text-xs">
            Discover the true value of your vehicle with our expert appraisal service. Fast,
            reliable, and transparent, we provide you with accurate results for smarter buying and
            selling decisions.
          </p>
        </div>

        <div className=" w-full h-full grid grid-cols-1 md:grid-cols-5 mt-12">
          <div className="h-fit col-span-3 order-2 md:order-1 lg:col-span-2 bg-[#254922] text-white p-5 rounded-tl-[20px] rounded-bl-[20px]">
            <Swiper
              className="w-full  flex flex-col items-stretch justify-center"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{
                el: '.custom-pagination', // Custom class
                clickable: true, // Enables clicking
                bulletClass: 'custom-bullet', // Class for custom bullets
                bulletActiveClass: 'custom-bullet-active', // Active state for bullet
              }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <div className="">
                <SwiperSlide className=" ">
                  <div>
                    <h1 className="font-bold text-2xl border-b-2 mb-3 border-white w-fit">
                      How it works
                    </h1>
                    <div className="space-y-1.5">
                      <div>
                        <h2 className="font-semibold">Detailed Vehicle Information Collection</h2>
                        <p className="text-xs">
                          We gather comprehensive details on your vehicle, including make, model,
                          year, and condition to assess its true market value.
                        </p>
                      </div>

                      <div>
                        <h2 className="font-semibold">Advanced Valuation Algorithms</h2>
                        <p className="text-xs">
                          Our system uses cutting-edge algorithms and real-time market data to give
                          you the most precise and up-to-date valuation.
                        </p>
                      </div>

                      <div>
                        <h2 className="font-semibold  ">Expert Review</h2>
                        <p className="text-xs">
                          Our experienced appraisers finalize the evaluation, ensuring all unique
                          features and conditions are factored into the final value.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h1 className="font-bold text-2xl border-b-2 mb-3 border-white w-fit">
                      How it works
                    </h1>
                    <div className="space-y-1.5">
                      <div>
                        <h2 className="font-semibold">Detailed Vehicle Information Collection</h2>
                        <p className="text-xs">
                          We gather comprehensive details on your vehicle, including make, model,
                          year, and condition to assess its true market value.
                        </p>
                      </div>

                      <div>
                        <h2 className="font-semibold">Advanced Valuation Algorithms</h2>
                        <p className="text-xs">
                          Our system uses cutting-edge algorithms and real-time market data to give
                          you the most precise and up-to-date valuation.
                        </p>
                      </div>

                      <div>
                        <h2 className="font-semibold  ">Expert Review</h2>
                        <p className="text-xs">
                          Our experienced appraisers finalize the evaluation, ensuring all unique
                          features and conditions are factored into the final value.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>

              <div className="custom-pagination w-full h-full mt-10  "></div>
            </Swiper>
          </div>

          <div className="w-full relative col-span-2 order-1 md:order-2  lg:col-span-3 flex flex-col align-center justify-center">
            <Image
              src={Accuracy}
              alt="accuracy"
              className=" mx-auto -mt-16 z-20 "
              height={200}
              width={200}
            />
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/Autobuy/a5275c9a2f993ed121ac55c9dac55d96_Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5nHglkiusCuNxVcfyWx87u~q0xSziyzdZhHoSSzqg82PLUanL07rYBQCtXeJWg5xJtkCrMeHM~RvJcP1-DWYlTHBUyjIHyvDCXzbF~CKt-7S1mFigT7HKs1H9jQm79yIku~~325Vjfi9r9TJcgMQzI-EYi1sUz5E4bIQVYA-QK95ifChCSd4xPzcV1aQcNZhF92ZRep4sVw4bMjkLFyRNy7DMUFD~snRh7dy250jAlD94FCHLJkFZxsZCzKmy0aPdZoIgpZeh0ZfLWZPFHc-QWtZHSXc1PeEwciA7NiQDySXTrNBdkKIifHeA49y~x9KtCwHlzdTwLkDVtVHZRyaw__?updatedAt=1727606570348"
              alt="volvo"
              width={660}
              height={375}
              className="-mt-16 mx-auto"
            />
          </div>
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export default HowitWorks;
