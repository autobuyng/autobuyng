"use client"
import Image from 'next/image';
import React from 'react';

import Test from '@/app/(buyer)/assets/vehice1.avif';
import { cn } from '@/lib/utils';
import { useGetOrderLists } from '@/app/(buyer)/api/payment';

const Orders = () => {
  const { data, isLoading } = useGetOrderLists()
  console.log(data, "data")

  if (isLoading) {
    return (
      <div>
        Loading ....
      </div>
    )
  }
  const ORDERS = [
    {
      id: '1',
      name: 'Mercedes Benz',
      status: 'Deliverd',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    },
    {
      id: '2',
      name: 'Mercedes Benz',
      status: 'Deliverd',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    },
    {
      id: '3',
      name: 'Mercedes Benz',
      status: 'Pending',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    },
    {
      id: '4',
      name: 'Mercedes Benz',
      status: 'Cancelled',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    },
  ];

  return (
    <main className="mt-4 md:mx-8 mb-32">
      <div>
        <h1 className="text-2xl font-[600]">Your Orders</h1>

        <div className="flex flex-col gap-5 mt-10">
          {ORDERS.map((order) => (
            <div
              key={order.id}
              className="flex items-start text-sm justify-between gap-4 border rounded-md p-4 border-neutral-200 "
            >
              <div className="w-[150px] h-[120px] relative">
                <Image src={Test} alt="Logo" fill style={{ objectFit: 'cover' }} />
              </div>
              {/* <Image src={Test} alt="test" height={250} width={150} className="" /> */}

              <div className="w-full text-sm space-y-1.5">
                <h1 className="font-medium"> {order.name}</h1>
                <p className="text-xs md:text-sm">Description: {order.desc}</p>
                <p
                  className={cn('text-white uppercase py-1 px-2  rounded w-fit text-center', {
                    'bg-green-500': order.status === 'Deliverd',
                    'bg-red-500': order.status === 'Cancelled',
                    'bg-yellow-500': order.status === 'Pending',
                  })}
                >
                  {order.status}
                </p>
                <p>Date:</p>
              </div>

              <p className="uppercase hidden whitespace-nowrap text-primary-700 md:flex items-center justify-center">
                See details
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Orders;
