'use client';
import React, { Suspense, useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import '../vehicle.css';
import { AppContext } from '@/context/AppContext';
import ImageSlider from '@/app/(buyer)/_components/ImageSlider/ImageSlider';
import { IMAGES } from '@/constants/constants';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import VehicleInformation from '@/app/(buyer)/_components/VehicleInformation/VehicleInformation';
import sampleVehicle from '@/app/(buyer)/assets/vehice1.avif';
import { ProductCard } from '@/app/(buyer)/_components/ProductCard/ProductCard';
import useIsMobile from '@/hooks/useIsMobile';
import SignIn from '@/app/auth/SignIn/SignIn';
import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';
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

const VehicledetailsPage = () => {
  const { isMobile } = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');
  const os = useDetectOS();
  const router = useRouter();

  const { vehicleList, vehicleId, setVehicleId } = useContext(AppContext);

  const handleSignInClick = () => {
    setType('signin');
    setIsOpen(true);
  };

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleView = (id: string) => {
    setVehicleId(id);
    router.push(`/vehicle/${uuidv4()}`);
  };

  const SIMILAR_VEHICLE = [
    {
      id: '1',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: sampleVehicle,
    },
    {
      id: '2',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: sampleVehicle,
    },
    {
      id: '3',
      name: 'Tesla',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: sampleVehicle,
    },
    {
      id: '4',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: sampleVehicle,
    },
    {
      id: '5',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: sampleVehicle,
    },
    {
      id: '6',
      name: 'Mercedes Benz',
      model: 'C 63',
      price: '35,000,000',
      mileage: '400',
      category: 'new',
      Img: sampleVehicle,
    },
  ];

  return (
    <div className="w-full">
      <div className="hidden  min-[1124px]:flex items-center bg-[#EDF4FF80]  h-[180px]">
        <MaxWidthWrapper>
          <div>
            <h1>
              Home/Search Result/ <span className="font-semibold">Tesla</span>
            </h1>

            <Suspense
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
                    console.log(isActive);
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
            </Suspense>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="mt-8">
        <MaxWidthWrapper>
          <div className=" w-full flex flex-col md:flex-row justify-center gap-4">
            <div className="bg-white p-4 flex-[3]">
              <div
                className={cn(' max-w-[800px] h-fit ', {
                  'max-w-[900px] h-fit  ': os === 'macOS',
                })}
              >
                <ImageSlider ImageUrls={IMAGES} />
              </div>

              <div className="w-full ">{isMobile ? null : <VehicleInformation />}</div>
            </div>

            <div className="h-fit  space-y-10  flex-[2] ">
              <div className="shadow-[0px_2px_14px_0px_#0000001A] bg-white px-6 pb-4 pt-12">
                <h1 className="font-bold text-2xl leading-8 capitalize mb-8">
                  Autobuy Reliability Score{' '}
                </h1>

                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <SemiCircleProgressBar
                      percentage={75}
                      size={200}
                      strokeWidth={10}
                      color="#3385FF"
                    />

                    <span className="text-[#3385FF] text-[40px] font-bold">{`${Math.round(80)}%`}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <Image src={Engine} alt="Engine" className="mx-auto" />
                    <div className="w-full">
                      <p className="flex items-start justify-between pb-2 ">
                        <span className="flex items-center gap-1">
                          Engine <Image src={Info} alt="Info" />
                        </span>
                        <span className="w-[64px] h-[28px] text-[#34B233] text-xs font-bold flex items-center justify-center bg-[#EDFBED] border border-[#80D67F] rounded-[50px] text-center">
                          4.0/10
                        </span>
                      </p>
                      <ProgressBar progress="40" />
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
                          6.8/10
                        </span>
                      </p>
                      <ProgressBar progress="80" />
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
                          6.6/10
                        </span>
                      </p>
                      <ProgressBar progress="66" />
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
                          6.6/10
                        </span>
                      </p>
                      <ProgressBar progress="66" />
                    </div>
                  </div>

                  <button
                    onClick={handleSignInClick}
                    className="w-full text-white bg-primary-900 rounded-sm py-2 whitespace-nowrap "
                  >
                    Download Appraisal
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-[0px_2px_14px_0px_#0000001A] mt-6 py-4 px-6">
                <div className="w-full space-y-2 mt-2 ">
                  <h1 className="text-2xl font-bold">Proceed with your purchase</h1>
                  <p
                    onClick={handleSignInClick}
                    className="w-full text-xs leading-[18px] max-w-full text-wrap  rounded-sm   whitespace-nowrap "
                  >
                    Proceed to buy this vehicle and get it delivered to your doorstep or pickup at
                    Autobuy registered outlets
                  </p>
                  <button
                    max-
                    onClick={() => router.push('/payment/adste-te34at-4eafd')}
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

            <div className="">{isMobile ? <VehicleInformation /> : null}</div>
          </div>

          <div className="mt-20">
            <div>
              <h1 className="py-2 font-bold text-2xl">Similar cars at Autobuy</h1>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3  gap-y-10 gap-x-8 sm:gap-4 ">
                {SIMILAR_VEHICLE.map((vehicle) => {
                  return (
                    <ProductCard
                      key={vehicle.id}
                      id={vehicle.id}
                      name={vehicle.name}
                      model={vehicle.model}
                      price={vehicle.price}
                      mileage={vehicle.mileage}
                      category={vehicle.mileage}
                      Img={vehicle.Img}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <SignIn isOpen={isOpen} handleOpenChange={handleOpenChange} type={type} setType={setType} />

      <AppraisalForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default VehicledetailsPage;
