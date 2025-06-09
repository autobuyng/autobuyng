/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogDescription } from '@/components/ui/dialog';

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
import Photo from '@/app/(buyer)/assets/Photo.svg';
import { cn } from '@/lib/utils';
// import Autobuy from '../../../../public/icons/buyer.svg';
import useIsMobile from '@/hooks/useIsMobile';
import { useStore } from '@/store/useStore';
import { useLikeVehicle } from '../../api/search';
import AuthDialog from '@/app/auth';
import { useGetFavoriteVehicle } from '@/app/(seller)/api/user';
import { Heart, X } from 'lucide-react';
import { Degrees } from '@/app/(seller)/sell-a-car/(dashboard)/_components/Icons/icon';

type ImageSliderProp = {
  ImageUrls: (StaticImageData | string)[];
  id: string;
  make: string | undefined;
  model: string | undefined;
};

const ImageSlider = ({ ImageUrls, id, make, model }: ImageSliderProp) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);
  const [showSliderModal, setShowSlidermodal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [likedVehicle, setLikedVehicle] = useState<Set<string>>(new Set());
  const [type, setType] = useState('signin');
  const { user } = useStore();
  const { likeVehicle } = useLikeVehicle();

  const { data: favoriteVehicle } = useGetFavoriteVehicle();

  useEffect(() => {
    if (favoriteVehicle) {
      const likedCars = new Set(favoriteVehicle?.likedVehicles.map(({ _id }) => _id));
      setLikedVehicle(likedCars);
    }
  }, [favoriteVehicle]);

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

  const handleLikeVehhicle = async () => {
    if (!user) {
      setIsOpen(true);
      return;
    }

    // const newLikedState = !liked;
    // setIsLiked(newLikedState);
    try {
      await likeVehicle({ vehicleId: id });
    } catch (error) {
      // setIsLiked(!newLikedState);
      console.log(error, 'error');
    }
  };

  return (
    <div className="w-full">
      <div className="w-full relative overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          className="flex w-full h-[350px]  md:h-[500px]   items-center transition-transform duration-500 ease-in-out "
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
                    className="w-full h-full rounded-lg  object-cover cursor-pointer"
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

        <button
          onClick={handleLikeVehhicle}
          className="absolute top-4 right-5 h-8 w-8  rounded-[50%] bg-black/55 p-1 flex items-center justify-center"
        >
          <Heart
            className={cn(`text-white`, {
              'text-red-500 fill-current': likedVehicle?.has(id),
              '': !likedVehicle?.has(id),
            })}
          />
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
        make={make}
        model={model}
      />

      <AuthDialog
        isOpen={isOpen}
        handleOpenChange={() => setIsOpen(false)}
        setIsOpen={setIsOpen}
        type={type}
        setType={setType}
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
  make: string | undefined;
  model: string | undefined;
};

const ImageSliderModal = ({
  isOpen,
  setIsOpen,
  ImageUrls,
  currentIndex,
  setCurrentIndex,
  make,
  model,
}: ImageSliderModalProps) => {
  const [disableLeftButton, setDisableLeftButton] = useState(true);
  const [disableRightButton, setDisableRightButton] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useIsMobile();

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
    <div className="overflow-auto">
      <Dialog open={!isMobile && isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className={cn(
            ' max-h-[100vh] -mt-6 max-w-[1336px] p-3 border-none bg-black/50 outline-none  ',
            {
              // 'max-w-[48rem]': os === 'macOS',
              // 'max-w-[600px]': os === 'Windows',
            },
          )}
        >
          {/* <DialogTitle className="-mt-8 w-1/2">
            <div className="flex items-center justify-between bg-white">
              <Image src={Autobuy} alt="Autobuy" />
              <p>
                {currentIndex + 1}/{ImageUrls.length}
              </p>
            </div>
          </DialogTitle> */}
          <DialogDescription></DialogDescription>
          <div className="flex items-center justify-between">
            <p className="text-white font-bold text-2xl">{`${make} ${model}`}</p>
            <X
              onClick={() => setIsOpen(false)}
              size={30}
              className="text-white font-bold cursor-pointer"
            />
          </div>
          <div className=" flex items-start justify-between gap-8 ">
            <div className="sticky top-0 left-0 overflow-hidden max-w-[850px] min-h-[80vh]">
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
                        width={960}
                        height={480}
                        className="cursor-pointer flex-shrink-0 object-cover  h-[500px] w-[960px]"
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
                <div className="text-white text-center max-w-[100px] mx-auto mt-4 bg-black rounded-sm px-2 py-2">
                  {' '}
                  {currentIndex + 1}/{ImageUrls.length}
                </div>
              </div>
            </div>

            <div className="max-h-[90vh] overflow-y-auto pb-8">
              <div className="flex gap-3">
                <p className="bg-primary-900 text-white px-6 py-2 rounded-full">All Photos</p>
                <Degrees />
              </div>
              <div className="grid grid-cols-3 mt-4  gap-2 w-full ">
                {ImageUrls &&
                  ImageUrls.map((image, index) => (
                    <div
                      key={index}
                      className={cn('relative  w-[110px] h-[100px] flex-shrink-0', {
                        'border-4 border-primary-900': currentIndex === index,
                      })}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <Image
                        src={image}
                        fill
                        alt="image slider"
                        key={index}
                        className="cursor-pointer w-[100px] flex-shrink-0"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* mobile */}
      <AlertDialog open={isOpen && isMobile} onOpenChange={() => setIsOpen(false)}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent className="max-w-full p-0 border-none">
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogHeader className="relative">
            <AlertDialogCancel className="absolute top-8 right-8 outline-none border-none bg-[#D9D9D9] rounded-[50%]">
              <X />
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
