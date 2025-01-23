'use client';
import React, { useState } from 'react';

import Uploads from '@/app/(seller)/sell-a-car/(dashboard)/assets/dashboardupload.svg';
import Sales from '@/app/(seller)/sell-a-car/(dashboard)/assets/dashboardsales.svg';
import Pending from '@/app/(seller)/sell-a-car/(dashboard)/assets/totalpendings.svg';
import Amount from '@/app/(seller)/sell-a-car/(dashboard)/assets/dashboardtraded.svg';
import StartCard from '../../_components/StartCard';
import LineChart from '@/app/(seller)/_components/Charts/LineChart';
import BarChart from '@/app/(seller)/_components/Charts/BarChart';
import DonoughtChart from '@/app/(seller)/_components/Charts/DonoughtChart';
import { DataTable } from '../../_components/DataTable';
import { dashboardcolumns, payments } from '@/constants/TableData';

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState('bar');

  const STATS = [
    { id: '1', value: '500', text: 'Total Upload', percent: '0%', icon: Uploads },
    { id: '2', value: '500', text: 'Total Sale', percent: '0%', icon: Sales },
    { id: '3', value: '500', text: 'Total Approved', percent: '0%', icon: Pending },
    { id: '4', value: '500', text: 'Total Amount Traded', percent: '0%', icon: Amount },
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

  return (
    <main className="mx-4">
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StartCard key={stat.id} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14 w-full">
        <div className="max-w-full col-span-2 relative shadow-[1px_1px_16px_4px_#1F1F1F1A]">
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

        <div className="w-full col-span-1  shadow-[1px_1px_16px_4px_#1F1F1F1A] p-2">
          <DonoughtChart />
        </div>
      </div>

      <div className="w-full">
        <div className="mt-14 shadow-[1px_1px_16px_4px_#1F1F1F1A] max-w-full  rounded-md border-2 overflow-x-auto">
          <h1 className="font-bold md:text-2xl my-4 pl-3 border-b">Activities</h1>
          <DataTable columns={dashboardcolumns} data={payments} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
//box-shadow: 1px 1px 16px 4px #1F1F1F1A;
