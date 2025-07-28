/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import AddVehicleModal from '@/app/(buyer)/_components/AddVehicleModal';
import CompareCarCard from '@/app/(buyer)/_components/CompareCarCard';
import { useCompareVehicles } from '@/app/(buyer)/api/search';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { useToast } from '@/hooks/use-toast';
import CarCardSkeleton from '@/LoadingSkeleton/compare';
import { useStore } from '@/store/useStore';
import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Compare = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { compareSearchResult } = useStore();
  const query = searchParams.get('ids');
  const [isOpen, setIsOpen] = useState(false);
  const [ids, setIds] = useState(query?.split('-') || []);
  const { data, isLoading } = useCompareVehicles(ids);

  const removeVehicle = (id: string) => {
    const newIds = ids.filter((i) => i !== id);
    setIds(newIds);
    router.push(`/compare?ids=${newIds.join('-')}`);
  };

  console.log(compareSearchResult, 'compareSearchResult');
  useEffect(() => {
    if (compareSearchResult) {
      const isExistiong = ids.find((id) => id === compareSearchResult._id);
      if (isExistiong) {
        toast({
          title: 'Vehicle Aready exist in comparison',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Vehicle Added to comparison',
          variant: 'success',
        });
        setIds([...ids, compareSearchResult._id]);
        router.push(`/compare?ids=${[...ids, compareSearchResult._id].join('-')}`);
      }
    } else {
      toast({
        title: 'No result match your search',
        variant: 'destructive',
      });
    }
  }, [compareSearchResult]);
  const addVehicle = () => {
    console.log('Add vehicle clicked');
  };

  return (
    <main className="mb-24">
      <div className="compare-img">
        <MaxWidthWrapper>
          <div className="text-white flex items-center justify-center font-bold text-lg md:text-2xl pt-16  text-center">
            <h1 className="max-w-[275px]">Buy your dream vehicle at Autobuy!</h1>
          </div>
        </MaxWidthWrapper>
      </div>

      <div className="max-w-6xl mx-auto p-2 sm:p-4  py-5 min-h-screen ">
        <div className="bg-white border-b border-gray-200 py-3">
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Compare Cars for Sale</h1>
            <div className="flex gap-8 mb-5">
              <button
                className={`text-gray-600 text-sm flex items-center gap-2 hover:text-gray-900 transition-colors`}
              >
                Overview
              </button>
              <button
                className={`text-gray-600 text-sm flex items-center gap-2 hover:text-gray-900 transition-colors`}
              >
                Comparison
              </button>
            </div>
            <button
              onClick={() => router.push('/results/keyword=')}
              className="text-gray-600 text-sm flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <ChevronLeftIcon />
              Back to results
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          {isLoading ? (
            <div className="p-8 bg-gray-50 min-h-screen">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
                <CarCardSkeleton />
              </div>
            </div>
          ) : (
            <div className="flex gap-4 xl:grid xl:grid-cols-4">
              {data?.data.map((vehicle) => (
                <CompareCarCard key={vehicle._id} vehicle={vehicle} onRemove={removeVehicle} />
              ))}

              {data?.data &&
                data?.data?.length < 4 &&
                Array(4 - (data?.data?.length || 0))
                  .fill(null)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-300 justify-center min-w-[260px] min-h-[400px] cursor-pointer hover:bg-blue-50 transition-colors"
                      onClick={addVehicle}
                    >
                      <div
                        onClick={() => setIsOpen(true)}
                        className="w-full h-[128px] rounded-[16px] border border-primary-300  flex flex-col items-center justify-center mb-4"
                      >
                        <p className="h-10 w-10 rounded-[50%] border border-primary-500 flex items-center justify-center">
                          <span className=" text-2xl font-light text-primary-700">+</span>
                        </p>
                        <span className="text-primary-700 text-base font-medium">
                          Add a Vehicle
                        </span>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </div>

      <AddVehicleModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default Compare;
