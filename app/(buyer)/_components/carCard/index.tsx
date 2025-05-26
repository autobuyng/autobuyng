'use client';
import Image from 'next/image';
import { Heart, ImageIcon } from 'lucide-react';
import PurchaseDetailsDialog from './card-details';
import { useState } from 'react';
import { OrderDetails } from '@/types/types';

export default function CarCard(car: OrderDetails) {
  const [isOpen, setIsOpen] = useState(false);
  const totalImages =
    (car.vehicleId?.exteriorImages?.length ?? 0) +
    (car.vehicleId?.interiorImages?.length ?? 0) +
    (car.vehicleId?.tyreImages?.length ?? 0) +
    (car.vehicleId?.trunkImages?.length ?? 0) +
    (car.vehicleId?.engineImages?.length ?? 0);
  return (
    <div className="bg-gray-100 rounded-2xl overflow-hidden p-2.5">
      {/* White card section */}
      <div className="bg-white rounded-xl overflow-hidden mb-4">
        {/* Car image */}
        <div className="relative">
          <Image
            src={car.vehicleId.exteriorImages?.[0] as string}
            alt={car.vehicleId.make}
            width={500}
            height={300}
            className="w-full h-56 object-cover"
          />
          <button
            // onClick={onFavoriteToggle}
            className="absolute top-3 right-3 p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-all"
          >
            <Heart
              className={`w-6 h-6 ${car.vehicleId ? 'fill-red-500 text-red-500' : 'text-white'}`}
            />
          </button>
          <div className="absolute bottom-3 right-3 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center">
            <span>{totalImages}</span>
            <ImageIcon className="h-4 w-4 ml-1" />
          </div>
        </div>

        {/* Car details */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{car.vehicleId.make}</h3>

          <div className="flex justify-between mb-3 border-b pb-3">
            <span className="text-gray-600">{car.vehicleId.condition}</span>
            <span className="text-gray-600">{car.vehicleId.mileage}</span>
          </div>

          <p className="text-2xl font-bold mb-3">{car.vehicleId.price}</p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
            View Details
          </button>
        </div>
      </div>

      {/* Gray background section with delivery details */}
      <div className="flex justify-between items-center mb-2">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded ${
            car.status === 'DELIVERED' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
          }`}
        >
          {car.status}
        </span>
        <span className="text-gray-600">{'Delivery date'}</span>
      </div>

      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-blue-500 hover:underline font-medium"
        >
          SEE DETAILS
        </button>
      </div>

      <PurchaseDetailsDialog isOpen={isOpen} onOpenChange={() => setIsOpen(false)} car={car} />
    </div>
  );
}
