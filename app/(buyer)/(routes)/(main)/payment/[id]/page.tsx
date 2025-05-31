import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import PaymentDetails from '../_components/PaymentDetails';
import OrderSummary from '../_components/OrderSummary';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Payment = () => {
  return (
    <main className="min-h-screen bg-[#F8F8F8] ">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row w-full h-full gap-3 md:gap-6">
          <div className="flex-[3] mt-6 ">
            <PaymentDetails />

            <div className="bg-white shadow-[1px_1px_16px_4px_#1F1F1F1A] p-4 mb-8">
              <h1 className="font-bold text-2xl mb-4">Exclusive Service for Our Customers!</h1>
              <p className="text-[#1A1A1A]">
                When you buy a vehicle from us, you’re not just getting a great ride—you’re also
                gaining access to exclusive discounts at our Autobuy Experience Centers! Drive
                confidently, knowing that quality maintenance and repairs are available at a special
                rate just for you. Visit us to keep your vehicle running smoothly and save more
                along the way!
              </p>
            </div>

            <p className="mb-8">
              <Link
                href="/results/make-BMW?mileage=2-598899"
                className="flex items-center  gap-2 text-primary-700"
              >
                <ArrowLeft /> <span>Go back and continue shopping</span>
              </Link>
            </p>
          </div>

          <div className="flex-[1] bg-primary-900  text-white h-fit pb-4 mb-4 md:min-h-screen px-4">
            <OrderSummary />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Payment;
