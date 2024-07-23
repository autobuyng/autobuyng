'use client';
import React, { useState } from 'react';
import Image from 'next/image';

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

const VehicledetailsPage = () => {
  const { isMobile } = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');
  const user = false;

  const handleSignInClick = () => {
    if (user) return;
    //TODO
    setType('signin');
    setIsOpen(true);
  };

  const handleOpenChange = () => {
    setIsOpen(false);
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
    <main className="w-full">
      <div className="bg-img"></div>

      <div className="mt-8">
        <MaxWidthWrapper>
          <section className=" w-full flex flex-col md:flex-row justify-center gap-4">
            <div>
              <div className=" max-w-[700px] max-h-[510px]">
                <ImageSlider ImageUrls={IMAGES} />
              </div>
              {isMobile ? null : <VehicleInformation />}
            </div>

            <div className=" h-fit pb-4 shadow-md px-2">
              <p className="whitespace-nowrap text-primary-700 text-2xl font-bold py-2.5">
                Get this Vehicle
              </p>
              <Image
                src={Appraisal}
                alt="Appraisal"
                width={500}
                height={500}
                className="flex-shrink-0"
              />

              <div className="w-full space-y-4 mt-2">
                <button
                  onClick={handleSignInClick}
                  className="w-full text-white bg-primary-500 rounded-sm py-1.5 whitespace-nowrap "
                >
                  Get vehicle Appraisal
                </button>
                <button
                  onClick={handleSignInClick}
                  className="w-full py-1.5 rounded-sm border-2 border-primary-700"
                >
                  Buy Now
                </button>
              </div>

              <div className="flex items-center gap-2 mt-2 text-sm">
                <input type="checkbox" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quidem?</p>
              </div>
            </div>

            {isMobile ? <VehicleInformation /> : null}
          </section>

          <section className="mt-20">
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
          </section>
        </MaxWidthWrapper>
      </div>

      <SignIn isOpen={isOpen} handleOpenChange={handleOpenChange} type={type} setType={setType} />
    </main>
  );
};

export default VehicledetailsPage;
