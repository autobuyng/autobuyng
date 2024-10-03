import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import PaymentDetails from '../_components/PaymentDetails';
import OrderSummary from '../_components/OrderSummary';

const Payment = () => {
  return (
    <main className="min-h-screen bg-[#F8F8F8] ">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row w-full h-full gap-3 md:gap-6">
          <div className="flex-[3] mt-6 ">
            <PaymentDetails />
          </div>

          <div className="flex-[1] bg-primary-900 md:mt-4 text-white h-fit pb-4 mb-4 md:min-h-screen px-8">
            <OrderSummary />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Payment;
