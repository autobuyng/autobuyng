'use client';
import React, { useCallback, useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { ProductCard } from '../ProductCard/ProductCard';
import { Vehicle } from '@/types/types';

const Topselling = () => {
  const [visibleCar, setVisibleCar] = useState<number>(4);

  const showMoreCar = () => {
    setVisibleCar(Number(TOP_SELLING_VEHICLE.length));
  };
  const showLessCar = () => {
    setVisibleCar(4);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const TOP_SELLING_VEHICLE: Vehicle[] = [
    {
      _id: '1',
      make: 'Mercedes Benz',
      images: [''],
      vehicleModel: 'C 63',
      mileage: '400',
      vehicleType: [],
      price: '35,000,000',
      engine: 'V8',
      transmission: 'Automatic',
      vin: '1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '12L/100km',
      exteriorColor: 'Black',
      interiorColor: 'Beige',
      fuelType: 'Petrol',
      vehicleYear: 2022,
      condition: 'New',
    },
    {
      _id: '2',
      make: 'BMW',
      images: [''],
      vehicleModel: 'M3',
      mileage: '500',
      vehicleType: [],
      price: '45,000,000',
      engine: 'I6',
      transmission: 'Manual',
      vin: '2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '10L/100km',
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      fuelType: 'Diesel',
      vehicleYear: 2021,
      condition: 'Used',
    },
    {
      _id: '3',
      make: 'Audi',
      images: [''],
      vehicleModel: 'A6',
      mileage: '300',
      vehicleType: [],
      price: '50,000,000',
      engine: 'V6',
      transmission: 'Automatic',
      vin: '3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '8L/100km',
      exteriorColor: 'White',
      interiorColor: 'Gray',
      fuelType: 'Hybrid',
      vehicleYear: 2023,
      condition: 'New',
    },
    {
      _id: '4',
      make: 'Tesla',
      images: [''],
      vehicleModel: 'Model S',
      mileage: '0',
      vehicleType: [],
      price: '70,000,000',
      engine: 'Electric',
      transmission: 'Automatic',
      vin: '4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: 'N/A',
      exteriorColor: 'Red',
      interiorColor: 'Black',
      fuelType: 'Electric',
      vehicleYear: 2024,
      condition: 'New',
    },
    {
      _id: '5',
      make: 'Honda',
      images: [],
      vehicleModel: 'Civic',
      mileage: '150',
      vehicleType: [],
      price: '15,000,000',
      engine: 'I4',
      transmission: 'Automatic',
      vin: '5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '7L/100km',
      exteriorColor: 'Silver',
      interiorColor: 'Gray',
      fuelType: 'Petrol',
      vehicleYear: 2020,
      condition: 'Used',
    },
    {
      _id: '6',
      make: 'Toyota',
      images: [''],
      vehicleModel: 'Camry',
      mileage: '200',
      vehicleType: [],
      price: '20,000,000',
      engine: 'I4',
      transmission: 'Automatic',
      vin: '6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '6L/100km',
      exteriorColor: 'Green',
      interiorColor: 'Beige',
      fuelType: 'Petrol',
      vehicleYear: 2019,
      condition: 'Used',
    },
    {
      _id: '7',
      make: 'Toyota',
      images: [''],
      vehicleModel: 'Camry',
      mileage: '200',
      vehicleType: [],
      price: '20,000,000',
      engine: 'I4',
      transmission: 'Automatic',
      vin: '6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '6L/100km',
      exteriorColor: 'Green',
      interiorColor: 'Beige',
      fuelType: 'Petrol',
      vehicleYear: 2019,
      condition: 'Used',
    },
    {
      _id: '8',
      make: 'Toyota',
      images: [''],
      vehicleModel: 'Camry',
      mileage: '200',
      vehicleType: [],
      price: '20,000,000',
      engine: 'I4',
      transmission: 'Automatic',
      vin: '6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1',
      fuelConsumption: '6L/100km',
      exteriorColor: 'Green',
      interiorColor: 'Beige',
      fuelType: 'Petrol',
      vehicleYear: 2019,
      condition: 'Used',
    },
  ];

  const renderTopCars = useCallback(
    () =>
      TOP_SELLING_VEHICLE?.slice(0, visibleCar).map((result) => (
        <ProductCard
          key={result._id}
          make={result.make}
          images={result.images}
          vehicleModel={result.vehicleModel}
          mileage={result.mileage}
          vehicleType={result.vehicleType}
          price={result.price}
          engine={result.engine}
          transmission={result.transmission}
          vin={result.vin}
          fuelConsumption={result.fuelConsumption}
          exteriorColor={result.exteriorColor}
          interiorColor={result.interiorColor}
          fuelType={result.fuelType}
          vehicleYear={result.vehicleYear}
          condition={result.condition}
          _id={result._id}
        />
      )),
    [TOP_SELLING_VEHICLE, visibleCar],
  );

  return (
    <MaxWidthWrapper>
      <div className="mt-14 mb-10 py-3">
        <div className="text-center">
          <h1 className=" font-bold text-neutral-900 text-2xl sm:text-3xl">
            Our Top Selling Vehicle
          </h1>
          <p className="text-[10px] sm:text-sm text-neutral-700">
            Here is a few of our top selling cars carefully curated by the Autobuy algorithm
          </p>
        </div>

        <div className="mt-6 w-full grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 sm:gap-4">
          {renderTopCars()}
        </div>

        <div className="flex items-center justify-center my-6">
          <button
            onClick={visibleCar < TOP_SELLING_VEHICLE.length ? showMoreCar : showLessCar}
            className="bg-primary-900 py-2 px-4 rounded-md text-white capitalize"
          >
            {visibleCar < Number(TOP_SELLING_VEHICLE.length) ? 'view more' : 'view less'}
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Topselling;
