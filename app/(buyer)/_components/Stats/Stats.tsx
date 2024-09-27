import React from 'react';

const Stats = () => {
  const STATS = [
    { id: '1', value: '10k+', text: 'New cars' },
    { id: '2', value: '25k+', text: 'Foreign Used  cars' },
    { id: '3', value: '25k+', text: 'Our Service centers' },
    { id: '4', value: '5k+', text: 'Our clients' },
  ];

  return (
    <main className="w-full min-w-full max-w-[70rem] overflow-auto ">
      <div className="flex w-full items-center justify-between bg-[#E1EBF4] h-24 px-16 text-white text-center ">
        {STATS.map((data) => {
          return (
            <div key={data.id}>
              <p className="text-2xl font-bold text-primary-900">{data.value}</p>
              <p className="text-primary-900">{data.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Stats;
