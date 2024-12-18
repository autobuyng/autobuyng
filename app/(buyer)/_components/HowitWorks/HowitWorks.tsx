'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Wave from '@/app/(buyer)/_components/Filters/assets/wave.svg';

const HowitWorks = () => {
  return (
    <section className="relative h-auto md:max-h-[729px]">
      <MaxWidthWrapper>
        <div className="my-20 w-full h-full">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="max-w-[653px] font-bold text-center text-2xl md:text-[32px] mb-1">
              Accurate Vehicle Appraisals You Can Trust
            </h1>
            <p className="max-w-[815px] text-center text-sm">
              Discover the true value of your vehicle with our expert appraisal service. Fast,
              reliable, and transparent, we provide you with accurate results for smarter buying and
              selling decisions.
            </p>
          </div>

          <div className=" w-full h-full grid grid-cols-1 md:grid-cols-9 mt-12">
            <div className="h-fit col-span-3 order-2 md:order-1 md:col-span-4 text-black px-5 pt-5 pb-16 rounded-tl-[20px] rounded-bl-[20px]">
              <Swiper
                className="w-full  flex flex-col items-stretch justify-center"
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                  el: '.custom-pagination', // Custom class
                  clickable: true, // Enables clicking
                  bulletClass: 'custom-bullet', // Class for custom bullets
                  bulletActiveClass: 'custom-bullet-active', // Active state for bullet
                }}
                // scrollbar={{ draggable: true }}
              >
                <div className="">
                  <SwiperSlide className=" ">
                    <div>
                      <h1 className="font-bold text-2xl border-b-2 mb-6 border-primary-900 text-primary-900 w-fit">
                        How it works
                      </h1>
                      <div className="space-y-4">
                        <div>
                          <h2 className="font-semibold">Detailed Vehicle Information Collection</h2>
                          <p className="text-sm">
                            We gather comprehensive details on your vehicle, including make, model,
                            year, and condition to assess its true market value.
                          </p>
                        </div>

                        <div>
                          <h2 className="font-semibold">Advanced Valuation Algorithms</h2>
                          <p className="text-sm">
                            Our system uses cutting-edge algorithms and real-time market data to
                            give you the most precise and up-to-date valuation.
                          </p>
                        </div>

                        <div>
                          <h2 className="font-semibold  ">Expert Review</h2>
                          <p className="text-sm">
                            Our experienced appraisers finalize the evaluation, ensuring all unique
                            features and conditions are factored into the final value.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <h1 className="font-bold text-2xl border-b-2 mb-6 border-primary-900 text-primary-900 w-fit">
                        How it works
                      </h1>
                      <div className="space-y-4">
                        <div>
                          <h2 className="font-semibold">Detailed Vehicle Information Collection</h2>
                          <p className="text-sm">
                            We gather comprehensive details on your vehicle, including make, model,
                            year, and condition to assess its true market value.
                          </p>
                        </div>

                        <div>
                          <h2 className="font-semibold">Advanced Valuation Algorithms</h2>
                          <p className="text-sm">
                            Our system uses cutting-edge algorithms and real-time market data to
                            give you the most precise and up-to-date valuation.
                          </p>
                        </div>

                        <div>
                          <h2 className="font-semibold  ">Expert Review</h2>
                          <p className="text-sm">
                            Our experienced appraisers finalize the evaluation, ensuring all unique
                            features and conditions are factored into the final value.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>

                <div className="custom-pagination mt-10 bg-[#0066CC] rounded-[50px] w-fit"></div>
              </Swiper>
            </div>

            <div className="w-full relative col-span-2 order-1 md:order-2 md:col-span-5 flex flex-col items-center justify-center lg:justify-end">
              <div className="text-[#34B233] font-bold mx-auto lg:absolute top-16 right-[35%]">
                <h1 className="text-3xl sm:text-[36px] lg:text-[42px]">99.9%</h1>
                <p className="text-xl sm:text-2xl lg:text-3xl">Accuracy </p>
              </div>

              <Image
                src="https://ik.imagekit.io/0xy9wqmrh/Autobuy/a5275c9a2f993ed121ac55c9dac55d96_Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5nHglkiusCuNxVcfyWx87u~q0xSziyzdZhHoSSzqg82PLUanL07rYBQCtXeJWg5xJtkCrMeHM~RvJcP1-DWYlTHBUyjIHyvDCXzbF~CKt-7S1mFigT7HKs1H9jQm79yIku~~325Vjfi9r9TJcgMQzI-EYi1sUz5E4bIQVYA-QK95ifChCSd4xPzcV1aQcNZhF92ZRep4sVw4bMjkLFyRNy7DMUFD~snRh7dy250jAlD94FCHLJkFZxsZCzKmy0aPdZoIgpZeh0ZfLWZPFHc-QWtZHSXc1PeEwciA7NiQDySXTrNBdkKIifHeA49y~x9KtCwHlzdTwLkDVtVHZRyaw__?updatedAt=1727606570348"
                alt="volvo"
                width={640}
                height={278}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <Image
        src={Wave}
        alt="wave"
        height={729}
        width={1440}
        className="absolute right-0 left-0 top-0"
      />
    </section>
  );
};

export default HowitWorks;
