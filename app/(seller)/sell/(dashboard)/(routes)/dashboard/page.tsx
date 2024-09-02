import React from 'react';

import Uploads from '@/app/(seller)/sell/(dashboard)/assets/dashboardupload.svg';
import Sales from '@/app/(seller)/sell/(dashboard)/assets/dashboardsales.svg';
import Pending from '@/app/(seller)/sell/(dashboard)/assets/totalpendings.svg';
import Amount from '@/app/(seller)/sell/(dashboard)/assets/dashboardtraded.svg';
import StartCard from '../../_components/StartCard';

const Dashboard = () => {
  const STATS = [
    { id: '1', value: '0', text: 'Total Upload', percent: '0%', icon: Uploads },
    { id: '2', value: '0', text: 'Total Sale', percent: '0%', icon: Sales },
    { id: '3', value: '0', text: 'Total Approved', percent: '0%', icon: Pending },
    { id: '4', value: '0', text: 'Total Amount Traded', percent: '0%', icon: Amount },
  ];

  return (
    <main>
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StartCard key={stat.id} {...stat} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
