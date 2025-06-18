'use client';
import React, { useState } from 'react';
import VehicleQuantity from './_components/VehicleQuantity';
// import VehicleInventory from './_components/VehicleInventory';
import { useGetAllVehicles } from '@/app/(seller)/api/upload';
import { Plus } from 'lucide-react';
import { DataTable } from '../../_components/DataTable';
import { columns } from '@/constants/TableData';

const Upload = () => {
  // const [noVehicle] = useState<string>('2');
  const [selectedComponent, setSelectedComponent] = useState(1);

  const { data: vehicle, isLoading } = useGetAllVehicles();

  return (
    <main className="mx-4 ">
      {vehicle && vehicle.vehicles?.length < 1 ? (
        <VehicleQuantity />
      ) : (
        <div>
          {selectedComponent === 1 && (
            <>
              <div className="flex items-center justify-between">
                <h1 className="font-bold md:text-2xl">Upload</h1>

                <button
                  onClick={() => setSelectedComponent(2)}
                  type="button"
                  className="bg-secondary-500 text-white px-3 py-2 rounded-md whitespace-nowrap flex items-center"
                >
                  <Plus /> <span>Add Vehicle</span>
                </button>
              </div>
              <div className="mt-4 shadow-[1px_1px_16px_4px_#1F1F1F1A]  rounded-md border ">
                {isLoading && <VehicleTableSkeleton />}
                {!isLoading && <DataTable columns={columns} data={vehicle?.vehicles ?? []} />}
              </div>
            </>
          )}
          {selectedComponent === 2 && <VehicleQuantity />}
        </div>
      )}
    </main>
  );
};

export default Upload;

const VehicleTableSkeleton = () => {
  return (
    <div className="w-full bg-white ">
      {/* Scrollable wrapper */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {' '}
          {/* Minimum width to prevent squeezing */}
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 p-4 bg-white text-black ">
            <div className="text-sm font-medium">IMAGE</div>
            <div className="text-sm font-medium">VEHICLE MAKE</div>
            <div className="text-sm font-medium">VIN</div>
            <div className="text-sm font-medium">VEHICLE ID</div>
            <div className="text-sm font-medium">DESCRIPTION</div>
            <div className="text-sm font-medium">STATUS</div>
          </div>
          {/* Table Body - 6 Skeleton Rows */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`grid grid-cols-6 gap-4 p-4 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              {/* Image Skeleton */}
              <div className="animate-pulse">
                <div className="w-16 h-12 bg-gray-200 rounded" />
              </div>

              {/* Vehicle Make Skeleton */}
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-20" />
              </div>

              {/* VIN Skeleton */}
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-32" />
              </div>

              {/* Vehicle ID Skeleton */}
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-40" />
              </div>

              {/* Description Skeleton */}
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>

              {/* Status Skeleton */}
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
