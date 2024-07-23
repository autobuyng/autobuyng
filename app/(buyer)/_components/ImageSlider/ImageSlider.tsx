'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

import ArrowRight from '@/app/(buyer)/assets/ArrowRight.svg';
import ArrowLeft from '@/app/(buyer)/assets/ArrowLeft.svg';
import Save from '@/app/(buyer)/assets/save.svg';
import Photo from '@/app/(buyer)/assets/Photo.svg';
import { cn } from '@/lib/utils';

type ImageSliderProp = {
  ImageUrls: StaticImageData[];
};

const ImageSlider = ({ ImageUrls }: ImageSliderProp) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);

  const showNextImage = () => {
    setDisableLeftButton(false);
    if (currentIndex === ImageUrls.length - 1) {
      setDisableRightButton(true);
    } else {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };

  const showPrevImage = () => {
    setDisableRightButton(false);
    if (currentIndex === 0) {
      setDisableLeftButton(true);
    } else {
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
  };

  return (
    <main>
      <div className="relative overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          className="flex   transition-transform duration-500 ease-in-out "
        >
          {ImageUrls.map((image, index) => (
            <Image src={image} alt="image slider" key={index} />
          ))}
        </div>

        <div className="absolute h-full  top-0 left-0 flex items-center pl-4">
          <button
            onClick={showPrevImage}
            disabled={disableLeftButton}
            className={cn('h-10 w-10 bg-white/90 flex items-center justify-center rounded-[50%]', {
              'cursor-not-allowed': disableLeftButton,
            })}
          >
            <Image src={ArrowLeft} alt="Arrow left" />
          </button>
        </div>

        <div className="absolute h-full top-0 right-0 flex items-center pr-4 ">
          <button
            onClick={showNextImage}
            disabled={disableRightButton}
            className={cn('h-10 w-10 bg-white/90 flex items-center justify-center rounded-[50%]', {
              'cursor-not-allowed': disableRightButton,
            })}
          >
            <Image src={ArrowRight} alt="Arrow Right" />
          </button>
        </div>

        <button className="absolute top-4 right-5 h-8 w-8 rounded-[50%] bg-white p-1 flex items-center justify-center">
          <Image src={Save} alt="Save" />
        </button>

        <button className="absolute bottom-0 right-4  text-white rounded-[4px] bg-black/55 p-1 flex items-center justify-center gap-1.5">
          <span>
            {currentIndex} / {25}
          </span>
          <Image src={Photo} alt="Photo" />
        </button>
      </div>

      <div className="mt-4 space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-[600] text-2xl">Mercedes Benz</p>
          <p className="text-white bg-primary-700 px-1 py-1">Foreign used</p>
        </div>
        <p className="text-neutral-700">2700mil</p>
        <p className="text-xl font-bold">NGN13000</p>
      </div>
    </main>
  );
};

export default ImageSlider;
