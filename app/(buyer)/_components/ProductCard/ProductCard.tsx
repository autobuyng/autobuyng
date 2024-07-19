import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ProductCardProps = {
  id: string;
  Img: StaticImageData;
  name: string;
  model: string;
  mileage: string;
  price: string;
  category: string;
};

export const ProductCard = ({ Img, name, model, category, price, mileage }: ProductCardProps) => {
  return (
    <div className="rounded-md shadow-md cursor-pointer">
      <div>
        <Image src={Img} alt={name} className="rounded-md" />
      </div>
      <div className="px-1.5 pt-3 pb-1.5 flex flex-col gap-1">
        <p className="font-[600]">{name}</p>
        <p>{model}</p>
        <p className="text-primary-700 font-[700]"> ₦ {price}</p>
        <p>{mileage}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};
