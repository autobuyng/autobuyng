import Image from 'next/image';
import React from 'react';
import samlplevehicle from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';

const ShipmentDetails = () => {
  const Purchasedvehicle = {
    id: '1',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  };
  const { name, mileage, Img, engin, transmission, desc, vin, bodyStyle, color, mpg } =
    Purchasedvehicle;

  return (
    <div className=" ">
      <section className="rounded-md   px-3 ">
        <p className="font-[600] pb-2">Your Shipment</p>
        <div className="flex flex-col md:flex-row gap-6  cursor-pointer pb-4 ">
          <div>
            <Image src={Img} alt={name} height={400} width={400} className="rounded-md" />
          </div>
          <div className="px-1.5   space-y-2 text-sm">
            <p className="font-[700] text-2xl"> {name}</p>

            {/* {[name, mileage, engin, transmission, desc, vin, bodyStyle, color, mpg].map((item) => (
              <p>
                <span className="text-primary-700 pr-1 font-[600] ">{item.toUpperCase()}:</span> {item}
              </p>
            ))} */}
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Mileage:</span> {mileage}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">MPG:</span>
              {mpg}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Bodystyle:</span>
              {bodyStyle}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Engin:</span>
              {engin}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Transmission:</span>
              {transmission}
            </p>
            <p>
              <span className="text-primary-700  pr-1 font-[600]">Color:</span>
              {color}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Vin:</span>
              {vin}
            </p>
            <p>
              <span className="text-primary-700 pr-1 font-[600] ">Desc:</span>
              {desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShipmentDetails;
