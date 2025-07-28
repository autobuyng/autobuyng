'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useGetSingleVehicle } from '@/app/(buyer)/api/search';
import { LoanVehicleSkeleton } from '@/LoadingSkeleton/loanvehicle';
import { formatCurrency } from '@/lib/utils';
import { useRouter } from 'next-nprogress-bar';

export default function LoanVehicle({ params }: { params: { id: string } }) {
  const { data, isPending } = useGetSingleVehicle({ vehicleId: params.id });
  const router = useRouter();
  console.log(data, 'singelvehicle');
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl mb-2 font-bold text-gray-900">Your Selected Car</h1>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {isPending ? (
              <LoanVehicleSkeleton />
            ) : (
              <>
                <div className="overflow-hidden">
                  <div className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={data?.images?.[0] as string}
                        alt="Selected car - Honda Civic SE 2015"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">{`${data?.make} ${data?.vehicleModel} ${data?.vehicleTrim ?? ''} ${data?.vehicleYear}`}</h2>

                  <div className="text-4xl font-bold text-gray-900">
                    {formatCurrency(data?.price)}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
                    <div className="text-gray-600">
                      <span className="text-sm">Down payment:</span>
                      <div className="text-xl font-semibold text-gray-900">
                        {formatCurrency(data?.price)}
                      </div>
                    </div>

                    <div className="text-blue-600">
                      <div className="text-2xl font-bold">{formatCurrency(data?.price)}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-600 underline">
              How Autobuy Loan Application Works
            </h2>

            <div className="">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Detailed Vehicle Information Collection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We gather comprehensive details on your vehicle, including make, model, year, and
                  condition to assess its true market value.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Advanced Valuation Algorithms
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our system uses cutting-edge algorithms and real-time market data to give you the
                  most precise and up-to-date valuation.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Expert Review</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced appraisers finalize the evaluation, ensuring all unique features
                  and conditions are factored into the final value.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                size="lg"
                onClick={() => {
                  router.push(`/loan-application/${params.id}`);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
              >
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
