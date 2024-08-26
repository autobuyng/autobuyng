import Image from 'next/image';
import React from 'react';

const StartCard = ({
  value,
  text,
  percent,
  icon,
}: {
  id?: string;
  value: string;
  text: string;
  percent: string;
  icon: any;
}) => {
  return (
    <section className="shadow-md rounded-md p-4 space-y-3">
      <div className="flex justify-between items-center">
        <p className="font-bold min-[320px]:text-[8px] min-[400px]:text-sm uppercase">{text}</p>
        <Image
          src={icon}
          alt={text}
          width={40}
          height={40}
          sizes=" (min-width: 320px) 20px, (min-width: 768px) 40px"
        />
      </div>
      <p className="font-bold text-3xl">{value}</p>

      <p className="text-neutral-500">
        {percent}{' '}
        <span className="font-semibold text-black min-[320px]:text-[8px]">vs last month</span>
      </p>
    </section>
  );
};

export default StartCard;
