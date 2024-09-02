import Image from 'next/image';
import React from 'react';

interface StartCardProps {
  id?: string;
  value: string;
  text: string;
  percent: string;
  icon: string;
}

const StartCard: React.FC<StartCardProps> = ({ value, text, percent, icon }) => {
  return (
    <section className="shadow-md rounded-md p-4 space-y-3">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg md:text-xl lg:text-2xl uppercase">{text}</p>
        <Image src={icon} alt={text} width={40} height={40} layout="fixed" />
      </div>
      <p className="font-bold text-3xl">{value}</p>
      <p className="text-neutral-500">
        {percent} <span className="font-semibold text-black">vs last month</span>
      </p>
    </section>
  );
};

export default StartCard;
