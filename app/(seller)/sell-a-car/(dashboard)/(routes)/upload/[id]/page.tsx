'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Carouselitem from '../_components/Carousel';
import { usePathname } from 'next/navigation';
import { useGetVehicle } from '@/app/(seller)/api/upload';

const SingleVehiclePage = () => {
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(true);

  const { vehicle, refetch, isLoading } = useGetVehicle(
    pathname.split('/')[pathname.split('/').length - 1],
  );

  refetch();

  React.useEffect(() => {
    setLoading(false);
  }, []);

  const Uploadedvehicle = {
    id: '1',
    name: 'Mercedes Benz CLA300',
    exterior: 'Black',
    interior: 'Red',
    engine: '4 Cylinder',
    drive: 'AWD',
    image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
    fuel: 'PMS',
    transmission: 'Automatic',
    vin: '0177279F54',
    mileage: '23,000ml',
  };
  const { engine, drive, mileage, fuel, transmission } = Uploadedvehicle;

  if (isLoading || loading) {
    return <CarListingSkeleton />;
  }

  if (!vehicle) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-6">
      <div className="flex items-center gap-6 py-2" onClick={() => window.history.back()}>
        <ArrowLeft className="cursor-pointer" />
        <p className="text-lg sm:text-2xl font-medium">Back</p>
      </div>
      <section className="max-w-[470px]">
        <div className="gap-6 mb-8 ">
          <div>
            <Image
              src={vehicle?.files?.[0]?.file ?? 'https://ik.imagekit.io/0xy9wqmrh/tableimage'}
              alt="car"
              height={230}
              width={464}
              className="h-[260px]"
            />
          </div>

          <div className="max-w-[464px] py-5">
            <Carouselitem />
          </div>
          <div className="space-y-2 text-sm pt-2">
            <p className="font-[700] text-2xl mb-5"> {vehicle.make}</p>

            <p>
              <span className="pr-1 font-[600] ">Exterior Color:</span> {vehicle.exterior}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Interior Color:</span>
              {vehicle.interior}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Engine Type:</span>
              {engine}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Drive Train:</span>
              {drive}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Fuel Type:</span>
              {fuel}
            </p>
            <p>
              <span className="pr-1 font-[600]">VIN:</span>
              {vehicle.vin}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Transmission:</span>
              {transmission}
            </p>
            <p>
              <span className="pr-1 font-[600] ">Mileage:</span>
              {mileage}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:text-lg gap-4 mb-10">
          <button
            type="button"
            className="bg-secondary-700 text-white py-[10px] px-4 rounded-[8px] w-fit"
          >
            View on Marketplace
          </button>
          <button
            type="button"
            className="bg-white border-2 border-secondary-700 text-secondary-700 py-[10px] px-4 rounded-[8px] w-fit"
          >
            I have sold this vehicle
          </button>
        </div>
      </section>
    </div>
  );
};

export default SingleVehiclePage;

function CarListingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto md:ml-8 p-4 space-y-6">
      {/* Main Image Skeleton */}
      <div className="h-[230px] w-[464px]  bg-gray-200 animate-pulse rounded-lg" />

      {/* Thumbnail Images Skeleton */}
      <div className="flex gap-2 relative">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-24 h-24 bg-gray-200 animate-pulse rounded-md" />
        ))}
      </div>

      {/* Title Skeleton */}
      <div className="h-8 bg-gray-200 animate-pulse rounded-md w-64" />

      {/* Specifications Grid */}
      <div className="grid grid-cols-2 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-200 animate-pulse rounded w-24" />
            <div className="h-6 bg-gray-200 animate-pulse rounded w-32" />
          </div>
        ))}
      </div>

      {/* Action Buttons Skeleton */}
      <div className="flex gap-4">
        <div className="h-12 bg-gray-200 animate-pulse rounded-md flex-1" />
        <div className="h-12 bg-gray-200 animate-pulse rounded-md flex-1" />
      </div>
    </div>
  );
}
