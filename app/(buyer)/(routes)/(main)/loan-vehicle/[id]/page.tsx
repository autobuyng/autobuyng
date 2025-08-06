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
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h1 className="text-2xl mb-2 font-bold text-gray-900">Your Selected Car</h1>
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
                      <div className="text-xl font-semibold text-gray-900">
                        <p className="text-sm">Down payment:</p>
                        {formatCurrency(data?.price)}
                      </div>
                      <div className="text-2xl font-bold text-primary-700">{formatCurrency(data?.price)}/Month</div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="">
            <h1 className="text-2xl font-semibold  underline text-blue-600 mb-2">
              How Autobuy Loan Application Works
            </h1>

            <div className="mb-2">
              <h2 className=" font-semibold text-gray-900 mb-3">
                Submit Your Loan Application
              </h2>
              <p className="text-gray-600 mb-2">
                We&apos;ll guide you through a simple step-by-step application:
              </p>

              <div className="space-y-3 mb-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Fill in your personal details.</p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Upload necessary documents for KYC (Know Your Customer) and income verification.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Our finance partners will assess your request based on the information you provide.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Your data is securely handled and only shared with licensed lenders.
              </p>
            </div>

            {/* Get Response and Finalize Payment Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Get Response and Finalize Payment
              </h2>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    After submission, the application is reviewed by our loan partners.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    You&apos;ll receive a decision within 24-48 hours.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Once approved, the lender pays the seller directly.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    You handle your agreed deposit, and the car is officially yours!
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Drive away once payment is confirmed. Loan repayment begins as scheduled.
                  </p>
                </div>
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
