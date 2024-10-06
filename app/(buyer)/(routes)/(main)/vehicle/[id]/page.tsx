'use client';
import React, { Suspense, useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import '../vehicle.css';
import ImageSlider from '@/app/(buyer)/_components/ImageSlider/ImageSlider';
import Appraisal from '@/app/(buyer)/assets/appraisal.svg';
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
import { AppContext } from '@/context/AppContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const VehicledetailsPage = () => {
  const { isMobile } = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');
  const os = useDetectOS();
  const router = useRouter();

  const { vehicleList, vehicleId, setVehicleId } = useContext(AppContext);

  // const handleSetId = () => {
  //   setTimeout(() => {
  //     setVehicleId('1');
  //   }, 5000);
  // };

  // useEffect(() => {
  //   // setVehicleId(router.query.id as string)
  //   setVehicleId('1');
  // }, []);

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
  ];

  return (
    <div className="w-full">
      <div className="hidden  md:flex items-center bg-[#EDF4FF80] mt-8 h-[180px]">
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

                          <p className="absolute bottom-0 bg-primary-900 text-white w-full text-center">
                            {vehicle.price}
                          </p>
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
            <div>
              <div
                className={cn(' max-w-[900px] h-fit', {
                  'max-w-[900px] h-fit  ': os === 'macOS',
                })}
              >
                <ImageSlider ImageUrls={IMAGES} />
              </div>

              <div>{isMobile ? null : <VehicleInformation />}</div>
            </div>

            <div className="h-fit pb-4 shadow-md px-2">
              <p className="whitespace-nowrap text-primary-700 text-2xl font-bold py-2.5">
                Get this Vehicle
              </p>
              <Image
                src={Appraisal}
                alt="Appraisal"
                width={500}
                height={500}
                className="flex-shrink-0 mx-auto"
              />

              <div className="w-full space-y-4 mt-2">
                <button
                  onClick={handleSignInClick}
                  className="w-full text-white bg-primary-500 rounded-sm py-2 whitespace-nowrap "
                >
                  Get vehicle Appraisal
                </button>
                <button
                  onClick={() => router.push('/payment/adste-te34at-4eafd')}
                  className="w-full py-2 rounded-sm border-2 border-primary-700"
                >
                  Buy Now
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2 text-sm">
                <input type="checkbox" />
                <p>Lorem ipsum dolor sit amet consectetur </p>
              </div>
            </div>

            {isMobile ? <VehicleInformation /> : null}
          </div>

          <div className="mt-20">
            <div>
              <h1 className="py-2 font-bold text-xl">Similar cars at Autobuy</h1>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8 sm:gap-4 ">
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
