"use client";
import { useStore } from '@/store/useStore';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

const OrderSummary = () => {
  const { vehicleDetails } = useStore()
  const router = useRouter()
  return (
    <div className=" mt-6  md:mt-16 px-5  ">
      <h1 className="font-bold text-2xl py-2">Order Summary</h1>

      <section className="border-b space-y-3 border-[#7AAECA]/50 pb-2">
        <div className="flex items-center justify-between">
          <span>vehicle Total</span>
          <span>{vehicleDetails?.price}</span>
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
        <span>{vehicleDetails?.price}</span>
      </div>

      <div>
        <button onClick={() => router.push(`/create-order/${vehicleDetails?._id}`)} className='text-white font-bold uppercase bg-[#7AAECA] w-full py-2 mt-3 rounded-md text-center'>Confirm Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
