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
    <section className="shadow-[1px_1px_16px_4px_#1F1F1F1A] rounded-md p-2 space-2-3">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xs uppercase">{text}</p>
        <Image src={icon} alt={text} width={40} height={40} layout="fixed" />
      </div>
      <p className="font-bold text-2xl">{value}</p>
      <p className="text-neutral-500">
        {percent} <span className="font-semibold text-black">vs last month</span>
      </p>
    </section>
  );
};

export default StartCard;
