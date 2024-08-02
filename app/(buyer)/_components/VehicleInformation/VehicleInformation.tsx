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
import Love from '@/app/(buyer)/assets/love.svg';

const VehicleInformation = () => {
  return (
    <main className="mt-8">
      <div>
        <div>
          <h1 className="py-2 font-bold text-xl">Basic Information</h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full space-y-3">
              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Interior} alt="Interior" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Interior Color:
                  </span>
                </p>
                <span>content</span>
              </div>

              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Exterior} alt="Exterior" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Exterior color:
                  </span>
                </p>
                <span>content</span>
              </div>

              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Drivetrain} alt="Drivetrain" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Drivetrain:</span>
                </p>
                <span>content</span>
              </div>

              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Fueltype} alt="Fuel type" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Fuel type:</span>
                </p>
                <span>content</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Transmit} alt="Transmission" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Transmission:</span>
                </p>
                <span>content</span>
              </div>

              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Mpg} alt="MPG" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">MPG:</span>
                </p>
                <span>content</span>
              </div>

              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Engine} alt="Engine type" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Engine type:</span>
                </p>
                <span>content</span>
              </div>

              <div className="flex gap-3 w-full">
                <p className="flex gap-1.5">
                  <Image src={Vin} alt="Vin" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Vin:</span>
                </p>
                <span>content</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Features</h1>
          <p>
            <span className="text-primary-700 font-[600]">Convenience:</span>
          </p>

          <p>
            <span className="text-primary-700 font-[600]">Entertainment:</span>
          </p>

          <p>
            <span className="text-primary-700 font-[600]">Safety:</span>
          </p>
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
              <Image src={Love} alt="Love" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VehicleInformation;
