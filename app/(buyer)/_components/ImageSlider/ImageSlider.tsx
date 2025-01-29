'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import ArrowRight from '@/app/(buyer)/assets/ArrowRight.svg';
import ArrowLeft from '@/app/(buyer)/assets/ArrowLeft.svg';
import Save from '@/app/(buyer)/assets/save.svg';
import Photo from '@/app/(buyer)/assets/Photo.svg';
import { cn } from '@/lib/utils';
import Autobuy from '../../../../public/icons/buyer.svg';
import useIsMobile from '@/hooks/useIsMobile';
import useDetectOS from '@/hooks/useDetectOs';

type ImageSliderProp = {
  ImageUrls: (StaticImageData | string)[];
};

const ImageSlider = ({ ImageUrls }: ImageSliderProp) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);
  const [showSliderModal, setShowSlidermodal] = useState(false);

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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        showPrevImage();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      }
    },
    [showNextImage, showPrevImage],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-full">
      <div className="w-full relative overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          className="flex w-full h-[500px]   items-center transition-transform duration-500 ease-in-out "
        >
          {ImageUrls &&
            ImageUrls.map((image, index) => {
              return (
                <div key={index} className="w-full h-full object-cover flex-shrink-0">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full  object-cover cursor-pointer"
                    onClick={() => setShowSlidermodal(true)}
                  />
                </div>
              );
            })}
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

        <button className="absolute top-4 right-5 h-8 w-8  rounded-[50%] bg-black/55 p-1 flex items-center justify-center">
          <Image src={Save} alt="Save" />
        </button>
        <button className="absolute bottom-2 right-4  text-white rounded-[30px] bg-[#00000073] p-1 flex items-center justify-center gap-1.5">
          <span>
            {currentIndex + 1} / {ImageUrls?.length}
          </span>
          <Image src={Photo} alt="Photo" />
        </button>
      </div>

      <ImageSliderModal
        isOpen={showSliderModal}
        currentIndex={currentIndex}
        setIsOpen={setShowSlidermodal}
        ImageUrls={ImageUrls}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default ImageSlider;

type ImageSliderModalProps = {
  isOpen: boolean;
  currentIndex: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ImageUrls: (StaticImageData | string)[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ImageSliderModal = ({
  isOpen,
  setIsOpen,
  ImageUrls,
  currentIndex,
  setCurrentIndex,
}: ImageSliderModalProps) => {
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useIsMobile();
  const os = useDetectOS();

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
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        showPrevImage();
      } else if (event.key === 'ArrowRight') {
        showNextImage();
      }
    },
    [showNextImage, showPrevImage],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div>
      <Dialog open={!isMobile && isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className={cn('overflow-y-auto max-h-[95vh] outline-none', {
            'max-w-[48rem]': os === 'macOS',
            'max-w-[600px]': os === 'Windows',
          })}
        >
          <DialogTitle className="-mt-4 w-1/2">
            <div className="flex items-center justify-between bg-white">
              <Image src={Autobuy} alt="Autobuy" />
              <p>
                {currentIndex + 1}/{ImageUrls.length}
              </p>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="px">
            <div className="overflow-hidden relative">
              <div
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                className="flex  transition-transform duration-500 ease-in-out "
              >
                {ImageUrls &&
                  ImageUrls.map((image, index) => (
                    <Image
                      src={image}
                      alt="image slider"
                      key={index}
                      // fill
                      width={760}
                      height={333}
                      className="cursor-pointer flex-shrink-0 object-cover  h-[333px] w-[760px]"
                    />
                  ))}
              </div>
              <div className="absolute h-full  top-0 left-0 flex items-center pl-4">
                <button
                  onClick={showPrevImage}
                  disabled={disableLeftButton}
                  className={cn(
                    'h-10 w-10 bg-white/90 flex items-center justify-center rounded-[50%]',
                    {
                      'cursor-not-allowed': disableLeftButton,
                    },
                  )}
                >
                  <Image src={ArrowLeft} alt="Arrow left" />
                </button>
              </div>

              <div className="absolute h-full top-0 right-0 flex items-center pr-4 ">
                <button
                  onClick={showNextImage}
                  disabled={disableRightButton}
                  className={cn(
                    'h-10 w-10 bg-white/90 flex items-center justify-center rounded-[50%]',
                    {
                      'cursor-not-allowed': disableRightButton,
                    },
                  )}
                >
                  <Image src={ArrowRight} alt="Arrow Right" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 mt-4  gap-2 w-full">
            {ImageUrls &&
              ImageUrls.map((image, index) => (
                <div
                  key={index}
                  className={cn('relative  w-[130px] h-[100px] flex-shrink-0', {
                    'border-2 border-black': currentIndex === index,
                  })}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image}
                    fill
                    alt="image slider"
                    key={index}
                    className="cursor-pointer w-[100px]"
                  />
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={isOpen && isMobile} onOpenChange={() => setIsOpen(false)}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent className="max-w-full p-0 border-none">
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogHeader className="relative">
            <AlertDialogCancel className="absolute top-8 right-8 outline-none border-none bg-[#D9D9D9] rounded-[50%]">
              X
            </AlertDialogCancel>

            <AlertDialogDescription className="h-[100vh] overflow-y-auto">
              <span className="flex flex-col gap-2 transition-transform duration-500 ease-in-out ">
                {ImageUrls &&
                  ImageUrls.map((image, index) => (
                    <Image
                      src={image}
                      alt="image slider"
                      key={index}
                      height={333}
                      width={470}
                      className="cursor-pointer"
                    />
                  ))}
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
