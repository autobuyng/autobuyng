import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {
  ArrowLeft,
  ArrowRight,
} from '@/app/(seller)/sell-a-car/(dashboard)/_components/Icons/icon';
import { payments } from '@/constants/TableData';

const Carouselitem = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', enabled: true }}
        modules={[Navigation]}
        className="w-full md:w-[85%] mt-10 md:mt-0"
      >
        {payments.map((photo, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={photo.image} alt={photo.id} width={200} height={200} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-between items-center w-full text-black absolute -top-10 md:top-[40%]">
        <div className="w-6 h-6 flex justify-center items-center rounded-full  bg-white border border-secondary-500">
          <ArrowLeft classname={'#E6583D'} className="swiper-button-next" />
        </div>

        <div className="w-6 h-6 flex justify-center items-center rounded-full  bg-secondary-500">
          <ArrowRight classname={'#ffffff'} className="swiper-button-prev" />
        </div>
      </div>
    </div>
  );
};

export default Carouselitem;
