'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next-nprogress-bar';

import { Vehicle } from '@/types/types';
import Save from '@/app/(buyer)/assets/save.svg';
import Photo from '@/app/(buyer)/assets/photos.svg';
import { Heart } from 'lucide-react';
import { cn, formatCurrency } from '@/lib/utils';
import { useLikeVehicle } from '../../api/search';
import AuthDialog from '@/app/auth';
import { useStore } from '@/store/useStore';
import { getLocalItem, setLocalItem } from '@/lib/localStorage';
import { useToast } from '@/hooks/use-toast';

type ProductCardProps = {
  vehicle: Vehicle;
  likedVehicle?: Set<string>;
  localLikedVehicle?: string[];
};
export const ProductCard = ({ vehicle, likedVehicle }: ProductCardProps) => {
  const [localLikedVehicle, setLocalLikedVehicle] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const localLikedVehicles: string[] = getLocalItem('localLikedVehicles');
    setLocalLikedVehicle(localLikedVehicles || []);
  }, []);

  const {
    _id,
    make,
    images,
    vehicleModel,
    condition,
    // liked,
    // vehicleYear,
    // vehicleTypeId,
    mileage,
    // vin,
    // fuelType,
    // transmission,
    // exteriorColor,
    // interiorColor,
    price,
    // fuelConsumption
  } = vehicle;
  const router = useRouter();
  const { user, compareVehicles, setCompareVehicles } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');

  const { likeVehicle } = useLikeVehicle();

  function toggleItem(set: Set<string> | undefined, item: string) {
    if (set?.has(item)) {
      set?.delete(item);
    } else {
      set?.add(item);
    }
  }

  const handleOpenChange = () => {
    setIsOpen(false);
  };
  const handleLikeVehhicle = async (id: string) => {
    // if (!user) {
    //   setIsOpen(true);
    //   return;
    // }

    try {
      if (user) {
        toggleItem(likedVehicle, id);
        await likeVehicle({ vehicleId: id });
      } else {
        const localLikedVehicles: string[] = getLocalItem('localLikedVehicles') || [];
        const alreadyLiked = localLikedVehicles.includes(id);
        const updated = alreadyLiked
          ? localLikedVehicles?.filter((storedId: string) => storedId !== id)
          : [...localLikedVehicles, id];
        setLocalLikedVehicle(updated);
        setLocalItem('localLikedVehicles', updated);
      }
    } catch (error) {
      likedVehicle?.delete(id);
      const updated = getLocalItem('localLikedVehicles').filter(
        (storedId: string) => storedId !== id,
      );
      setLocalItem('localLikedVehicles', updated);
      setLocalLikedVehicle(updated);
      console.log(error, 'error');
    }
  };
  const handleSelecetedVehicle = (_id: string) => {

    const isExisting = compareVehicles.find((vehicle) => vehicle._id === _id);
    if (isExisting) {
      setCompareVehicles((prev: Vehicle[]) => [...prev.filter((vehicle) => vehicle._id !== _id)])
    } else {
      if (compareVehicles.length > 3) {
        toast({
          title: 'You can only compare 4 Maximum vehicles at a time',
          variant: 'destructive',
        });
        return;
      }
      setCompareVehicles((prev) => [...prev, vehicle]);
    }
  };

  return (
    <div className="rounded-[12px] shadow-md">
      <div className="relative max-w-full md:max-w-full w-full h-[230px]">
        <Image
          src={images?.[0]}
          alt={make}
          fill
          className=" rounded-tl-[12px] rounded-tr-[12px] object-cover"
        />

        <button
          onClick={() => handleLikeVehhicle(_id)}
          className="absolute top-4 right-4 h-8 w-8 rounded-[50%] text-white bg-black/55 p-1 flex items-center justify-center"
        >
          <Heart
            className={cn({
              'text-red-500 fill-current':
                likedVehicle?.has(_id) || localLikedVehicle?.includes(_id),
            })}
          />
        </button>

        <button className="absolute bottom-2 right-2  text-white rounded-[30px] bg-black/55 p-1 flex items-center text-sm justify-center">
          <span className="px-2">{images.length}</span>{' '}
          <Image src={Photo} alt="Photo" className="px-1 w-auto" />
        </button>
      </div>

      <div className="px-2">
        <div className="flex items-center gap-2   border-neutral-300">
          <p className="font-[600] text-lg py-1">{`${make} ${vehicleModel}`}</p>
        </div>

        <div className="grid grid-cols-2 w-full  border-b border-neutral-300 my-1 ">
          <p className="border-r border-neutral-300 text-center items-center justify-start gap-2 flex ">
            <span className="capitalize text-primary-900 font-[500] leading-6 text-sm">
              {condition}
            </span>
          </p>
          <p className="flex text-center items-center justify-start gap-2">
            <span className="capitalize text-primary-900 text-sm  pl-2  font-[500] leading-6">
              {`${Number(mileage) / 1000}${mileage ? 'k Miles' : ''}`}
            </span>
          </p>
        </div>

        <p className=" font-[700]  text-lg my-1"> {formatCurrency(price)}</p>

        <div className="w-full cursor-pointer">
          <button
            onClick={() => router.push(`/vehicle/${_id}`)}
            className=" text-white rounded-md py-2 px-4 bg-primary-900 text-center w-full  mb-2.5"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="border-t flex items-center space-x-2 border-neutral-300 px-2 py-2">
        <input
          type="checkbox"
          className="w-4 h-4 accent-primary-700"
          checked={compareVehicles.find((vehicle) => vehicle._id === _id) ? true : false}
          onChange={() => handleSelecetedVehicle(_id)}
        />
        <span className='text-sm'>Compare</span>
      </div>

      <AuthDialog
        isOpen={isOpen}
        handleOpenChange={handleOpenChange}
        setIsOpen={setIsOpen}
        type={type}
        setType={setType}
      />
    </div>
  );
};

export const ColProductCard = ({
  _id,
  make,
  images,
  // vehicleModel,
  condition,
  // vehicleYear,
  // vehicleTypeId,
  mileage,
  vin,
  // fuelType,
  transmission,
  // exteriorColor,
  // interiorColor,
  price,
  engine,
  fuelConsumption,
}: Vehicle) => {
  const router = useRouter();
  // const handleOnViewDetails = () => {
  //   router.push('/vehicle/1rwerw4-r3e44udr-454');
  // };

  return (
    <div className="">
      <section className="rounded-md shadow-md  px-3 ">
        <div className="flex gap-6  cursor-pointer pb-4 ">
          <div className="w-full relative">
            <Image
              src={images?.[0]}
              alt={make}
              height={450}
              width={400}
              className="rounded-md w-full"
            />

            <button className="absolute top-4 right-4 h-8 w-8 rounded-[50%] bg-black/55 p-1 flex items-center justify-center">
              <Image src={Save} alt="Save" />
            </button>

            <button className="absolute bottom-2 right-2  text-white rounded-[30px] bg-black/55 p-1 flex items-center text-sm justify-center">
              <span className="px-2">25</span>{' '}
              <Image src={Photo} alt="Photo" className="px-1 w-auto" />
            </button>
          </div>
          <div className="px-1.5  flex flex-col gap-2 text-sm w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-2xl ">{make}</p>
              <p className="text-white bg-primary-700 px-1 py-1 rounded-tl-[10px] rounded-br-[10px]">
                {condition}
              </p>
            </div>

            <p className="font-[700] text-2xl"> ₦ {price}</p>
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Mileage:</span> {mileage}
            </p>
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">MPG:</span>
              {fuelConsumption}
            </p>
            {/* <p>
              <span className="text-primary-900 pr-1 font-[600] ">Bodystyle:</span>
              {bodyStyle}
            </p> */}
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Engin:</span>
              {engine}
            </p>
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Transmission:</span>
              {transmission}
            </p>
            {/* <p>
              <span className="text-primary-900  pr-1 font-[600]">Color:</span>
              {color}
            </p> */}
            <p>
              <span className="text-primary-900 pr-1 font-[600] ">Vin:</span>
              {vin}
            </p>
            {/* <p>
              <span className="text-primary-900 pr-1 font-[600] ">Desc:</span>
              {desc}
            </p> */}

            <div className="cursor-pointer">
              <button
                onClick={() => router.push(`/vehicle/${_id}`)}
                className=" text-primary-900 underline font-[600]"
              >
                View vehicle details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
