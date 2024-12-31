'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import samlplevehicle from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
import { VehicleData } from '@/types/types';
import { useGetVehicle } from '@/app/(buyer)/api/search';
import { usePathname } from 'next/navigation';
import { useStore } from '@/store/useStore';

const ShipmentDetails = () => {
  const pathname = usePathname();
  console.log(pathname.split('/').at(-1), 'pathname');
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useStore();
  console.log(user, 'payment');
  const { getVehicle, isPending } = useGetVehicle();

  const handleGetVehicle = async () => {
    try {
      const response = await getVehicle({
        vehicleId: pathname.split('/').at(-1) as string,
      });

      setVehicleData(response.data);
    } catch (error) {
      console.log(error, 'error');
    } finally {
      setIsLoading(isPending);
    }
  };

  useEffect(() => {
    handleGetVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className=" ">
      <section className="rounded-md   px-3 ">
        <p className="font-[600] pb-2">Your Shipment</p>
        <div className="flex flex-col md:flex-row gap-6  cursor-pointer pb-4 ">
          <div>
            <Image
              src={vehicleData?.images[0] as string}
              alt={vehicleData?.vehicleModel as string}
              height={400}
              width={400}
              className="rounded-md"
            />
          </div>
          <div className="px-1.5   space-y-2 text-sm">
            <p className="font-[700] text-2xl"> {vehicleData?.make}</p>

            {/* {[name, mileage, engin, transmission, desc, vin, bodyStyle, color, mpg].map((item) => (
              <p>
                <span className="text-primary-700 pr-1 font-[600] ">{item.toUpperCase()}:</span> {item}
              </p>
            ))} */}
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Mileage:</span>{' '}
              {vehicleData?.mileage}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">MPG:</span>
              {vehicleData?.fuelConsumption}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Bodystyle:</span>
              {vehicleData?.vehicleType}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Engin:</span>
              {vehicleData?.engine}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Transmission:</span>
              {vehicleData?.transmission}
            </p>
            <p>
              <span className="text-primary-700  pr-1 font-[600]">Color:</span>
              {vehicleData?.exteriorColor}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Vin:</span>
              {vehicleData?.vin}
            </p>
            {/* <p>
              <span className="text-primary-700 pr-1 font-[600] ">Desc:</span>
              {desc}
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShipmentDetails;

function LoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image skeleton */}
        <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
          </div>
        </div>

        {/* Details skeleton */}
        <div className="animate-pulse space-y-6">
          {/* Title */}
          <div className="h-8 w-48 bg-gray-200 rounded" />

          {/* Specifications */}
          <div className="space-y-4">
            {['Mileage', 'MPG', 'Bodystyle', 'Engine', 'Transmission', 'Color', 'Vin', 'Desc'].map(
              (label) => (
                <div key={label} className="flex items-start gap-8">
                  <div className="w-24 h-4">
                    <div className="h-full w-20 bg-blue-100 rounded" />
                  </div>
                  <div className="flex-1 h-4 bg-gray-200 rounded" />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
