'use client';
import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

import Uploads from '@/app/(seller)/sell/(dashboard)/assets/dashboardupload.svg';
import Sales from '@/app/(seller)/sell/(dashboard)/assets/dashboardsales.svg';
import Pending from '@/app/(seller)/sell/(dashboard)/assets/totalpendings.svg';
import Amount from '@/app/(seller)/sell/(dashboard)/assets/dashboardtraded.svg';
import StartCard from '../../_components/StartCard';
import LineChart from '@/app/(seller)/_components/Charts/LineChart';
import BarChart from '@/app/(seller)/_components/Charts/BarChart';
import DonoughtChart from '@/app/(seller)/_components/Charts/DonoughtChart';
import { DataTable } from '../../_components/DataTable';

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState('bar');

  const STATS = [
    { id: '1', value: '0', text: 'Total Upload', percent: '0%', icon: Uploads },
    { id: '2', value: '0', text: 'Total Sale', percent: '0%', icon: Sales },
    { id: '3', value: '0', text: 'Total Approved', percent: '0%', icon: Pending },
    { id: '4', value: '0', text: 'Total Amount Traded', percent: '0%', icon: Amount },
  ];

  const chartToRender = (key: string) => {
    switch (key) {
      case 'line':
        return <LineChart />;

      case 'bar':
        return <BarChart />;
      default:
        return null;
    }
  };

  type Payment = {
    id: string;
    image?: string;
    amount: number;
    status: 'PENDING' | 'APPROVED' | 'DISAPPROVED';
    email: string;
  };

  const payments: Payment[] = [
    {
      id: '728ed52f',
      image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
      amount: 100,
      status: 'APPROVED',
      email: 'm@example.com',
    },
    {
      id: '489e1d42',
      image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
      amount: 125,
      status: 'PENDING',
      email: 'example@gmail.com',
    },
    {
      id: '489e1d42',
      image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
      amount: 125,
      status: 'DISAPPROVED',
      email: 'example@gmail.com',
    },
    {
      id: '489e1d42',
      image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
      amount: 125,
      status: 'APPROVED',
      email: 'example@gmail.com',
    },
    {
      id: '489e1d42',
      image: 'https://ik.imagekit.io/0xy9wqmrh/tableimage',
      amount: 125,
      status: 'PENDING',
      email: 'example@gmail.com',
    },
    // ...
  ];

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: 'image',
      header: 'IMAGE',
      cell: ({ row }) => {
        const imageUrl = row.getValue('image');
        console.log(row.getValue('image'));
        return (
          <div className="text-right font-medium">
            <Image src={imageUrl as string} width={70} height={70} alt="image" />
          </div>
        );
      },
    },
    {
      accessorKey: 'status',

      header: () => <div className="whitespace-nowrap">VEHICLE NAME </div>,
      cell: ({ row }) => {
        return <div className="font-medium whitespace-nowrap">{row.getValue('status')}</div>;
      },
    },
    {
      accessorKey: 'email',
      header: 'VIN',
    },
    {
      accessorKey: 'amount',
      header: () => <div className="whitespace-nowrap">VEHICLE ID </div>,
    },
    {
      accessorKey: 'id',
      header: 'DESCRIPTION',
    },
    {
      accessorKey: 'status',
      header: 'STATUS',
    },
  ];

  return (
    <main>
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StartCard key={stat.id} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 w-full">
        <div className="max-w-full col-span-2 relative shadow-md">
          {chartToRender(selectedChart)}

          <select
            className="absolute top-4 right-4 bg-secondary-500 text-white py-2 px-2 rounded-md"
            name=""
            id=""
          >
            <option value="month" className="bg-white text-black">
              month
            </option>
            <option value="year" className="bg-white text-black">
              year
            </option>
          </select>

          <div className="absolute bottom-4 right-4">
            <button onClick={() => setSelectedChart(selectedChart === 'bar' ? 'line' : 'bar')}>
              {selectedChart === 'bar' ? 'Line' : 'Bar'}{' '}
            </button>
          </div>
        </div>

        <div className="w-full col-span-1  shadow-md">
          <DonoughtChart />
        </div>
      </div>

      <div className="mt-14 shadow-md bg-red-400 mx-auto  overflow-auto">
        <DataTable columns={columns} data={payments} />
      </div>
    </main>
  );
};

export default Dashboard;
