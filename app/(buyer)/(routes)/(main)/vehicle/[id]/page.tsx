'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// import { v4 as uuidv4 } from 'uuid';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import '../vehicle.css';
import ImageSlider from '@/app/(buyer)/_components/ImageSlider/ImageSlider';
// import { IMAGES } from '@/constants/constants';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import VehicleInformation from '@/app/(buyer)/_components/VehicleInformation/VehicleInformation';
import { ProductCard } from '@/app/(buyer)/_components/ProductCard/ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import useDetectOS from '@/hooks/useDetectOs';
import { capitalizeFirstLetter, cn, formatCurrency } from '@/lib/utils';
import AppraisalForm from '@/app/(buyer)/_components/AppraisalForm/AppraisalForm';
import SemiCircleProgressBar, {
  ProgressBar,
} from '@/app/(buyer)/_components/ProgressBar/ProgressBar';

// import Appraisal from '@/app/(buyer)/assets/appraisal.svg';
import Info from '../assets/info.svg';
import Car from '../assets/car.svg';
import Engine from '../assets/engine.svg';
import Accessories from '../assets/accessories.svg';
import Wheels from '../assets/wheels.svg';
import link from '@/app/(buyer)/_components/VehicleInformation/assets/link.svg';
import AuthDialog from '@/app/auth';
import { Vehicle, VehicleData } from '@/types/types';
import { useGetSimilarVehicle, useGetVehicle } from '@/app/(buyer)/api/search';
// import { useGetUser } from '@/app/(buyer)/api/auth';
import { setLocalItem } from '@/lib/localStorage';
import { useStore } from '@/store/useStore';
import VehicleDetailsError from '@/constants/TableData';
import { useRouter } from 'next-nprogress-bar';

const VehicledetailsPage = ({ params }: { params: { id: string } }) => {
  // const { setVehicleId } = useContext(AppContext);
  const { user } = useStore();
  const pathname = usePathname();
  const { isMobile } = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [openAppraissal, setOpenAppraisal] = useState(false);
  const [type, setType] = useState('signin');
  const os = useDetectOS();
  const router = useRouter();

  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [userData, setUserData] = useState<User | null>(null);
  const [similarVehicle, setSimilarVehicle] = useState<Vehicle[] | null>(null);

  const { getVehicle, getCachedVehicle, isPending, isError, error } = useGetVehicle();
  const { getSimilarVehicle, isPending: similarVehicleLoading } = useGetSimilarVehicle();
  // const { getUser } = useGetUser();

  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending]);

  const handleGetVehicle = async () => {
    try {
      const response1 = getCachedVehicle(params.id);

      if (response1) {
        setVehicleData(response1.data);
      } else {
        const response = await getVehicle({ vehicleId: params.id });
        setVehicleData(response.data);
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
  const handleGetSimilarVehicle = async () => {
    try {
      const response2 = await getSimilarVehicle({ vehicleId: params.id });
      setSimilarVehicle(response2.data.vehicles);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  // const handleGetUser = async () => {
  //   try {
  //     const response1 = await getUser();
  //     setUserData(response1.data.user);
  //     setUser(response1.data.user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    handleGetVehicle();
    handleGetSimilarVehicle();
    setLocalItem('previousPage', pathname);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSignInClick = (key: string) => {
    if (user && key === 'appraisal') {
      setOpenAppraisal(true);
    } else if (user && key != 'appraisal') {
      router.push(`/payment/${key}`);
    } else {
      setType('signin');
      setIsOpen(true);
    }
  };

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  // const handleView = (id: string) => {
  //   setVehicleId(id);
  //   router.push(`/vehicle/${uuidv4()}`);
  // };

  if (isError) {
    return <VehicleDetailsError error={error.message} />;
  }

  return (
    <div className="w-full mb-32">
      <div className="hidden  min-[1124px]:flex items-center bg-[#EDF4FF80]">
        <MaxWidthWrapper>
          <div>
            <h1 className="py-4">
              Home/Search Result/ <span className="font-semibold">{vehicleData?.make}</span>/{' '}
              <span className="font-semibold">{vehicleData?.vin}</span>
            </h1>

            {/* <Suspense
              fallback={
                <div className="h-full w-full flex justify-center items-center text-4xl font-bold">
                  Loading...
                </div>
              }
            >
              <div className="flex items-center justify-center gap-8 w-full h-full">
                <div className="flex items-center gap-1.5 text-sm">
                  <ArrowLeft />
                  <button>Prev</button>
                </div>

                <div className="flex items-center justify-center gap-4 py-4">
                  {vehicleList.map((vehicle) => {
                    const isActive = vehicle.id === vehicleId;
                    return (
                      <div
                        onClick={() => handleView(vehicle.id)}
                        key={vehicle.id}
                        className={cn('cursor-pointer', {
                          'border-2 border-primary-900 p-1.5': isActive,
                        })}
                      >
                        <div className="relative aspect-[75/90] w-24 h-24">
                          <Image
                            src={vehicle.Img}
                            alt={vehicle.name}
                            width={96}
                            height={96}
                            className="mx-auto w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-1.5 text-sm">
                  <button>Next</button> <ArrowRight />
                </div>
              </div>
            </Suspense> */}
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="mt-8">
        <MaxWidthWrapper>
          {(isLoading || isPending) && <LoadingSkeleton />}
          {!isLoading && !isPending && (
            <div className=" w-full   md:px-4 flex flex-col lg:flex-row justify-center gap-4">
              <div className="bg-white md:px-4 flex-[3]">
                <div
                  className={cn('max-w-[800px] h-fit ', {
                    'max-w-[900px] h-fit  ': os === 'macOS',
                  })}
                >
                  <ImageSlider ImageUrls={vehicleData?.images as string[]} id={params.id} make={vehicleData?.make} model={vehicleData?.vehicleModel} />
                </div>
                <div className="my-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-[600] text-2xl">
                      {vehicleData?.make} {vehicleData?.vehicleModel}
                    </p>
                    <p className="text-white bg-primary-700 px-3 py-1 rounded-tl-[10px] rounded-br-[10px]">
                      {capitalizeFirstLetter(vehicleData?.condition)}
                    </p>
                  </div>

                  <div className="space-x-1 flex items-center">
                    <span className="text-neutral-700 font-semibold">
                      {Number(vehicleData?.mileage) / 1000}k miles
                    </span>
                    <span>|</span>
                    <span className="text-xl font-bold tracking-wide">
                      {formatCurrency(vehicleData?.price)}
                    </span>
                  </div>

                  <div className="   min-[480px]:flex space-y-2 items-center justify-between">
                    <p className="flex items-center justify-center gap-2 border border-[#CCE0FF] px-2 w-fit h-[29px] rounded-[50px] text-sm">
                      <span className="text-primary-900">VIN</span>
                      <span>{vehicleData?.vin}</span>
                    </p>

                    <p className="underline text-sm text-primary-900 cursor-pointer  capitalize flex items-center ">
                      <Link
                        className="flex items-center gap-1"
                        target="_blank"
                        href="/vehicle-history/45174d0d-7906-4cef-a617-904cf2a580eb"
                      >
                        view vehicle history
                        <Image src={link} alt="Link" />
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="w-full ">
                  {isMobile ? null : <VehicleInformation vehicleData={vehicleData} />}
                </div>
              </div>

              <div className="h-fit  space-y-10  flex-[2] ">
                <div className="shadow-[0px_2px_14px_0px_#0000001A] bg-white px-6 pb-4 pt-12">
                  <h1 className="font-bold text-2xl leading-8 capitalize mb-8">
                    Autobuy Reliability Score{' '}
                  </h1>

                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <SemiCircleProgressBar
                        percentage={Number(80)}
                        size={200}
                        strokeWidth={10}
                        color="#3385FF"
                      />

                      <span className="text-[#3385FF] text-[40px] font-bold">{`${80}%`}</span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <Image src={Engine} alt="Engine" className="mx-auto" />
                      <div className="w-full">
                        <p className="flex items-start justify-between pb-2 ">
                          <span className="flex items-center gap-1">
                            Engine <Image src={Info} alt="Info" />
                          </span>
                          <span className="w-[64px] h-[28px] text-[#34B233] text-xs font-bold flex items-center justify-center bg-[#EDFBED] border border-[#80D67F] rounded-[50px] text-center">
                            {Number(90) / 10}/10
                          </span>
                        </p>
                        <ProgressBar progress={'80'} />
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <Image src={Car} alt="Car" className="mx-auto" />
                      <div className="w-full">
                        <p className="flex items-start justify-between pb-2 ">
                          <span className="flex items-center gap-1">
                            Body <Image src={Info} alt="Info" />
                          </span>
                          <span className="w-[64px] h-[28px] text-[#34B233] text-xs font-bold flex items-center justify-center bg-[#EDFBED] border border-[#80D67F] rounded-[50px] text-center">
                            {Number(85) / 10}/10
                          </span>
                        </p>

                        <ProgressBar progress={'70'} />
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <Image src={Wheels} alt="Wheels" className="mx-auto" />
                      <div className="w-full">
                        <p className="flex items-start justify-between pb-2 ">
                          <span className="flex items-center gap-1">
                            Wheels <Image src={Info} alt="Info" />
                          </span>
                          <span className="w-[64px] h-[28px] text-[#EFD80F] text-xs font-bold flex items-center justify-center bg-[#FFFEF0] border border-[#F2E572] rounded-[50px] text-center">
                            {Number(78) / 10}/10
                          </span>
                        </p>

                        <ProgressBar progress={'89'} />
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <Image src={Accessories} alt="Accessories" className="mx-auto" />
                      <div className="w-full">
                        <p className="flex items-start justify-between pb-2 ">
                          <span className="flex items-center gap-1">
                            Accessories <Image src={Info} alt="Info" />
                          </span>
                          <span className="w-[64px] h-[28px] text-[#34B233] text-xs font-bold flex items-center justify-center bg-[#EDFBED] border border-[#80D67F] rounded-[50px] text-center">
                            {Number(67) / 10}/10
                          </span>
                        </p>

                        <ProgressBar progress={'78'} />
                      </div>
                    </div>

                    <button
                      onClick={() => handleSignInClick('appraisal')}
                      className="w-full text-white bg-primary-900 rounded-sm py-2 whitespace-nowrap "
                    >
                      Download Appraisal
                    </button>
                  </div>
                </div>

                <div className="bg-white shadow-[0px_2px_14px_0px_#0000001A] mt-6 py-4 px-6">
                  <div className="w-full space-y-2 mt-2 ">
                    <h1 className="text-2xl font-bold">Proceed with your purchase</h1>
                    <p className="w-full text-xs leading-[18px] max-w-full text-wrap  rounded-sm   whitespace-nowrap ">
                      Proceed to buy this vehicle and get it delivered to your doorstep or pickup at
                      Autobuy registered outlets
                    </p>
                    <button
                      onClick={() => handleSignInClick(vehicleData?._id as string)}
                      className="w-full py-2 text-white rounded-sm  bg-primary-900"
                    >
                      Continue
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <input type="checkbox" />
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                  </div>
                </div>
              </div>

              <div className="">
                {isMobile ? <VehicleInformation vehicleData={vehicleData} /> : null}
              </div>
            </div>
          )}
          {/* similar vehicle */}
          <div className="mt-20">
            <div>
              <h1 className="py-2 font-bold text-2xl">Similar cars at Autobuy</h1>
              <div className="mt-4">{similarVehicleLoading && <SimilarVehicleSkeleton />}</div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-y-10 gap-x-8 sm:gap-4 ">
                {!similarVehicleLoading &&
                  similarVehicle &&
                  similarVehicle?.map((result, index) => {
                    return (
                      <ProductCard
                        key={index}
                        vehicle={result}
                        // key={result._id}
                        // make={result.make}
                        // images={result.images}
                        // vehicleModel={result.vehicleModel}
                        // mileage={result.mileage}
                        // vehicleType={[]}
                        // price={result.price}
                        // engine={result.engine}
                        // transmission={result.transmission}
                        // vin={result.vin}
                        // fuelConsumption={result.fuelConsumption}
                        // exteriorColor={result.exteriorColor}
                        // interiorColor={result.interiorColor}
                        // fuelType={result.fuelType}
                        // vehicleYear={result.vehicleYear}
                        // condition={result.condition}
                        // _id={result._id}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <AuthDialog
        isOpen={isOpen}
        handleOpenChange={handleOpenChange}
        setIsOpen={setIsOpen}
        type={type}
        setType={setType}
      />

      <AppraisalForm isOpen={openAppraissal} setIsOpen={setOpenAppraisal} />
    </div>
  );
};

export default VehicledetailsPage;

function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto p-4 animate-pulse">
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left column - Image and Details */}
        <div className="space-y-6 col-span-3">
          {/* Image carousel skeleton with navigation */}
          <div className="relative aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
            {/* Loading spinner */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
            </div>

            {/* Navigation arrows */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-300 rounded-sm" />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-300 rounded-sm" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs">
              <div className="w-10 h-3 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Car title and badge */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-7 w-48 bg-gray-200 rounded" />
              <div className="flex items-center gap-2">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-5 w-24 bg-blue-100 rounded" />
              </div>
            </div>
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>

          {/* Specs grid with tooltips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="group relative">
                <div className="space-y-1">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                  <div className="h-5 w-24 bg-gray-200 rounded" />
                  <div className="h-3 w-12 bg-blue-100 rounded" />
                </div>
                {/* Tooltip skeleton */}
                <div className="invisible group-hover:visible absolute top-full mt-2 w-48 p-2 bg-gray-100 rounded-md">
                  <div className="h-4 w-full bg-gray-200 rounded mb-1" />
                  <div className="h-3 w-3/4 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="h-6 w-24 bg-gray-200 rounded" />
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded" />
                  <div className="h-4 flex-1 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-6 w-24 bg-gray-200 rounded" />
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded" />
                  <div className="h-4 flex-1 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* View all features button */}
          <div className="h-9 w-48 bg-gray-200 rounded-md" />
        </div>

        {/* Right column - Reliability Score and Actions */}
        <div className="space-y-6 col-span-2">
          {/* Reliability Score */}
          <div className="p-6 border rounded-lg space-y-4">
            <div className="h-6 w-28 bg-gray-200 rounded" />

            {/* Gauge */}
            <div className="relative h-40">
              <div className="absolute inset-x-0 bottom-0 h-[160px] flex items-center justify-center">
                {/* Gauge background */}
                <div className="relative w-40 h-20 overflow-hidden">
                  <div className="absolute w-40 h-40 rounded-full border-[16px] border-gray-200 -bottom-20" />
                  <div className="absolute w-6 h-6 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-full h-full border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                  </div>
                </div>
                {/* Score */}
                <div className="absolute bottom-2 h-8 w-16 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Score bars */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between">
                  <div className="h-8 w-28 bg-gray-200 rounded" />
                  <div className="h-8 w-16 bg-gray-200 rounded" />
                </div>
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <div className="h-12 bg-gray-200 rounded-lg" />
            <div className="h-12 bg-gray-200 rounded-lg" />
          </div>

          {/* Checkbox area */}
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 flex-1 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SimilarVehicleSkeleton() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
            {/* Image container */}
            <div className="relative aspect-[16/9] bg-gray-200">
              {/* Loading spinner */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
              </div>

              {/* Heart icon placeholder */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-gray-100 rounded-full" />

              {/* Image counter */}
              <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded">
                <div className="w-6 h-3 bg-gray-300 rounded" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Title */}
              <div className="h-5 w-32 bg-gray-200 rounded" />

              {/* Status and mileage */}
              <div className="flex items-center justify-between">
                <div className="h-5 w-24 bg-blue-100 rounded" />
                <div className="h-5 w-20 bg-gray-200 rounded" />
              </div>

              {/* Price */}
              <div className="h-6 w-28 bg-gray-200 rounded" />

              {/* Button */}
              <div className="h-10 bg-blue-600 rounded-md w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
