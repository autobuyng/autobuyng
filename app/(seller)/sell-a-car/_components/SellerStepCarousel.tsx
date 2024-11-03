import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Register from '@/app/(seller)/assets/register.svg';
import Upload from '@/app/(seller)/assets/upload.svg';
import Inspect from '@/app/(seller)/assets/inspect.svg';
import Sell from '@/app/(seller)/assets/wesell.svg';
import arrow from '@/app/(seller)/assets/arrow.svg';

const SellerStepCarousel = () => {
  const SELLER_STEP = [
    {
      id: '1',
      text: 'You Register',
      desc: 'Lorem ipsum dolor sit amet consectetur. Suspendisse auctor volutpat sit pellentesque aliquam vitae urna.',
      Icon: Register,
      Icon2: arrow,
    },
    {
      id: '2',
      text: 'Your upload',
      desc: 'Lorem ipsum dolor sit amet consectetur. Nisl turpis nulla leo cursus lorem felis odio dolor. .',
      Icon: Upload,
      Icon2: arrow,
    },
    {
      id: '3',
      text: 'We inspect',
      desc: 'Lorem ipsum dolor sit amet consectetur. Mauris diam id tortor id nisl diam. Nisl lorem nullam adipiscing ac vulputate tortor facilisis viverra varius.',
      Icon: Inspect,
      Icon2: arrow,
    },
    {
      id: '4',
      text: 'We sell',
      desc: 'Lorem ipsum dolor sit amet consectetur. Gravida tempor semper arcu et.',
      Icon: Sell,
    },
  ];
  return (
    <div className="flex md:hidden w-full items-center justify-center mt-6  text-center ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {SELLER_STEP.map((step, index) => {
          return (
            <SwiperSlide className="md:hidden w-full flex items-center " key={index}>
              <div className="max-w-[300px] mx-auto">
                <Image src={step.Icon} alt={step.text} className="mx-auto" />
                <div className="space-y-2  ">
                  <h1 className="font-bold text-xl">{step.text}</h1>
                  <p className="text-neutral-700 text-sm ">{step.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SellerStepCarousel;
