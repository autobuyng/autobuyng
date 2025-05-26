'use client';
import React from 'react';

import { useGetOrderLists } from '@/app/(buyer)/api/payment';
import Loader from '@/LoadingSkeleton/loader';
import CarCard from '@/app/(buyer)/_components/carCard';

const Orders = () => {
  const { data: orders, isLoading } = useGetOrderLists();
  console.log(orders, 'orders');
  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="mt-4 md:mx-4 mb-32">
      <div>
        <h1 className="text-2xl font-[600]">Your Orders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {orders?.data?.map((car) => <CarCard key={car._id} {...car} />)}
        </div>
      </div>
    </main>
  );
};

export default Orders;
