import React from 'react';
import Frame from '@/app/(seller)/assets/estimateframe.svg';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Light from '@/app/(seller)/assets/light.svg';

type Props = {
  vehicleEstimate: () => void;
};

const VehicleEstimation = ({ vehicleEstimate }: Props) => {
  return (
    <div className="w-full min-[350px]:w-[90%] sm:w-[340px] mx-auto  py-8 h-fit text-black bg-white shadow-[1px_1px_16px_4px_#1F1F1F1A] text-sm">
      <h1 className="font-semibold mb-1 text-2xl text-center">Your estimated price</h1>
      <div className="flex justify-center">
        <Image src={Frame} alt="vector" width={147} height={28} className="h-6" />
      </div>
      <div className="text-center mt-3 mb-3">
        <p className="font-bold text-[20px] my-2">₦12,000,000 - ₦18,000,000</p>
        <p>
          Now that you know the approximate price, it’s time to find out the best price offer for
          your car ! Except our call shortly - We’d be happy to agree on the time and place for your
          car inspection.
        </p>
      </div>

      <Separator />
      <div className="my-3">
        <div className="flex justify-center items-center">
          <p className="font-bold text-[20px]">Note</p>
          <Image src={Light} alt="light bulb" width={19} height={23} />
        </div>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li className="text-black marker:text-[#34B233]">
            The price shown is estimated and based on the information you provided.
          </li>
          <li className="text-black marker:text-[#34B233]">
            Actual car condition is one of the determining factors for the final price
          </li>
          <li className="text-black marker:text-[#34B233]">
            You can find out the best price for your car only after inspection
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          onClick={vehicleEstimate}
          type="button"
          className="text-white py-1 px-4 rounded-[8px] bg-secondary-500 w-44 text-base"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default VehicleEstimation;
