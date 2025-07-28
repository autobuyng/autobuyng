'use client';

import Image from 'next/image';
import Link from 'next/link';

import link from '@/app/(buyer)/_components/VehicleInformation/assets/link.svg';
import { Vehicle } from '@/types/types';
import { formatCurrency, formatNumbertoK } from '@/lib/utils';

interface CarCardProps {
  vehicle: Vehicle;
  onRemove: (id: string) => void;
}

export default function CompareCarCard({ vehicle, onRemove }: CarCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm min-w-[272px] border border-gray-200 overflow-x-auto ">
      <div className="flex justify-between items-start mb-3 px-2 pt-4">
        <h3 className="text-base font-semibold text-primary-900 leading-tight flex-1 pr-2">{` ${vehicle.vehicleYear} ${vehicle.make} ${vehicle.vehicleModel}`}</h3>
        <button
          onClick={() => onRemove(vehicle._id)}
          className="text-gray-400 hover:text-gray-600 text-xl leading-none p-0 bg-transparent border-none cursor-pointer"
        >
          ×
        </button>
      </div>

      <button className="text-primary-900 px-2 text-sm underline mb-4 p-0 bg-transparent border-none cursor-pointer">
        Change Vehicle
      </button>

      <div className="mb-4 bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={vehicle.images?.[0] || '/placeholder.svg?height=180&width=280'}
          alt={vehicle.make}
          width={280}
          height={180}
          className="w-full h-[180px] object-cover"
        />
      </div>

      <div className="px-2 pb-4">
        <div className="flex justify-between items-center mb-3 ">
          <span className="text-sm">{`${formatNumbertoK(vehicle.mileage)}miles`}</span>
          <span className="text-lg font-semibold text-gray-900 flex items-center gap-1">
            {formatCurrency(vehicle.price)}
          </span>
        </div>

        <div className="mb-3">
          <p className="flex items-center justify-center gap-2 border border-[#CCE0FF] px-2 w-fit h-[29px] rounded-[50px] text-sm">
            <span className="text-primary-900">VIN</span>
            <span>{vehicle?.vin}</span>
          </p>
        </div>

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

        <div className="mt-3">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Overview</h4>
          <div className="space-y-3">
            {/* <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded">
              <span className="text-blue-600 text-sm font-medium">Vehicle Year</span>
              <span className="text-gray-900 text-sm">{vehicle.vehicleYear}</span>
            </div> */}

            {/* <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">Exterior Color</span>
              <span className="text-gray-900 text-sm">{vehicle.exteriorColor}</span>
            </div> */}

            <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">Drive Train</span>
              <span className="text-gray-900 text-sm">{vehicle.driveTrain}</span>
            </div>

            <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">Fuel Type</span>
              <span className="text-gray-900 text-sm">{vehicle.fuelType}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">Transmission</span>
              <span className="text-gray-900 text-sm">{vehicle.transmission}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">MPG</span>
              <span className="text-gray-900 text-sm">{vehicle.fuelConsumption ?? 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">Engine</span>
              <span className="text-gray-900 text-sm">{vehicle.engine}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-[8px]">
              <span className="text-blue-600 text-sm font-medium">Interior Color</span>
              <span className="text-gray-900 text-sm">{vehicle.interiorColor}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mt-4 border-b px-2">Features</h4>
          <div>
            {[
              ...vehicle.tech,
              ...vehicle.mechanical,
              ...vehicle?.entertainment,
              ...vehicle?.convenience,
              ...vehicle.luxury,
            ].map((feature, index) => (
              <div key={index} className="flex  items-center  px-2 py-2 rounded">
                <span className="text-xs font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
