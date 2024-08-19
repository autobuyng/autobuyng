import Image from 'next/image';
import React from 'react';

import Test from '@/app/(buyer)/assets/vehice1.avif';

const Orders = () => {
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
      status: 'Deliverd',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    },
    {
      id: '4',
      name: 'Mercedes Benz',
      status: 'Deliverd',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
    },
  ];

  return (
    <main className="mt-4 mx-8">
      <div>
        <h1 className="text-2xl font-[600]">Your Orders</h1>

        <div className="flex flex-col gap-5 mt-10">
          {ORDERS.map((order) => (
            <div
              key={order.id}
              className="flex items-start text-sm justify-between gap-4 border-b pb-6 border-neutral-200 "
            >
              <div style={{ position: 'relative', width: `${150}px`, height: `${120}px` }}>
                <Image src={Test} alt="Logo" fill style={{ objectFit: 'cover' }} />
              </div>
              {/* <Image src={Test} alt="test" height={250} width={150} className="" /> */}

              <div className="w-full text-sm space-y-1.5">
                <h1 className="font-medium"> {order.name}</h1>
                <p className="text-xs md:text-sm">Description: {order.desc}</p>
                <p>{order.status}</p>
                <p>Date:</p>
              </div>

              <p className="uppercase hidden text-primary-700 md:flex items-center justify-center">
                Settings
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Orders;
