import React from 'react';

const OrderSummary = () => {
  return (
    <div className=" mt-6  md:mt-16 px-8  ">
      <h1 className="font-bold text-2xl py-2">Order Summary</h1>

      <section className="border-b space-y-3 border-[#7AAECA]/50 pb-2">
        <div className="flex items-center justify-between">
          <span>vehicle Type</span>
          <span>30000</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span>5000</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Deliver Fee</span>
          <span>30000</span>
        </div>
      </section>
      <div className="flex items-center justify-between">
        <span>Total</span>
        <span>30000</span>
      </div>
    </div>
  );
};

export default OrderSummary;
