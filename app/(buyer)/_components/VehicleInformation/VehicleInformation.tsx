import Image from 'next/image';
import React from 'react';

import Interior from '@/app/(buyer)/assets/interior.svg';
import Exterior from '@/app/(buyer)/assets/exterior.svg';
import Drivetrain from '@/app/(buyer)/assets/Drivetrain.svg';
import Transmit from '@/app/(buyer)/assets/tramit.svg';
import Engine from '@/app/(buyer)/assets/engine.svg';
import Fueltype from '@/app/(buyer)/assets/Fueltype.svg';
import Mpg from '@/app/(buyer)/assets/Mpg.svg';
import Vin from '@/app/(buyer)/assets/vin.svg';
// import Love from '@/app/(buyer)/assets/love.svg';

const VehicleInformation = () => {
  return (
    <div className="mt-8">
      <div>
        <div className="my-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-[600] text-2xl">Mercedes Benz</p>
            <p className="text-white bg-primary-700 px-1 py-1 rounded-tl-[10px] rounded-br-[10px]">
              Foreign used
            </p>
          </div>
          <p className="text-neutral-700 font-semibold">2700mil</p>
          <p className="text-xl font-bold tracking-wide">NGN13,000,000</p>
        </div>

        <div>
          <h1 className="py-2 font-bold text-xl">Basic Information</h1>

          <div className="w-full grid grid-cols-1  gap-6">
            <div className="w-full space-y-3">
              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Interior} alt="Interior" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Interior Color:
                  </span>
                </p>
                <span>Navy Blue</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Exterior} alt="Exterior" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Exterior color:
                  </span>
                </p>
                <span>Black</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Drivetrain} alt="Drivetrain" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Drivetrain:</span>
                </p>
                <span>4 wheel drive</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Fueltype} alt="Fuel type" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Fuel type:</span>
                </p>
                <span>PMS</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Transmit} alt="Transmission" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Transmission:</span>
                </p>
                <span>AUTOMATIC</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Mpg} alt="MPG" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">MPG:</span>
                </p>
                <span>35 - 40</span>
              </div>

              <div className="flex gap-3  items-start justify-start w-full">
                <p className="flex gap-1.5 items-center justify-center ">
                  <Image src={Engine} alt="Engine type" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Engine type:
                  </span>
                </p>
                <span className="">
                  1.8L I-4 i-VTEC variable valve control, regular unleaded, engine
                </span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Vin} alt="Vin" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Vin:</span>
                </p>
                <span>14DAETDEITYDDJTAOTE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Features</h1>
          <div className="space-y-3">
            <div className="flex items-start flex-wrap  gap-2">
              <p className="text-primary-700 font-[600]">Convenience:</p>
              <p>
                Heated and ventilated seats, Power Liftgate or Trunk, Remote Start, Power Adjustable
                Seats, 360-Degree Camera System, Wireless Charging
              </p>
            </div>

            <div className="flex items-start gap-2 flex-wrap">
              <p className="text-primary-700 font-[600]">Entertainment:</p>
              <p>Bluetooth®, Apple CarPlay/Android Auto, </p>
            </div>

            <div className="flex items-start gap-2 flex-wrap">
              <p className="text-primary-700 font-[600]">Safety:</p>
              <p>
                Automatic Emergency Braking, Backup Camera, Blind Spot Monitor, Brake Assist,
                Stability Control
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Additional Features</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quisquam quis
            perspiciatis officia, nesciunt explicabo voluptatem temporibus est adipisci ratione.
          </p>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Have any question</h1>
          <p>
            Get answers to questions about the car, request for a detailed explanation and seek
            professional guidance from our staffs.
          </p>

          <button className="bg-primary-700 text-white px-3 py-1 rounded-sm">Chat with us</button>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Made your decision?</h1>
          <div className="flex gap-4">
            <button className="bg-primary-700 text-white px-3 py-1 rounded-sm">
              Buy this car Now!
            </button>
            <button className="border-2 flex items-center gap-2 border-primary-700 rounded-sm px-3 py-1 text-primary-700">
              <span>Save to Inventory</span>
              {/* <Image src={Love} alt="Love" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
