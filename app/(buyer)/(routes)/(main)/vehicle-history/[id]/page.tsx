import React from 'react';
import Image from 'next/image';

import GreenCheck from '../assets/greencheck.svg';

const VehicleHistory = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#EBF6FD] h-[200px] w-full flex items-center justify-center">
        <h1 className=" text-xl md:text-2xl lg:text-[42px] text-primary-900 text-center">
          Vehicle Report
        </h1>
      </div>

      <div className="max-w-5xl mx-6 xl:mx-auto mt-10">
        <div>
          <h1 className="text-primary-700 text-xl font-bold">Disclainer</h1>
          <ul className=" space-y-2">
            <li className="before:content-['•'] before:text-primary-900">
              The report was generated before the vehicle was shipped to [country of sale].
              Condition may have changed during transit.
            </li>
            <li className="before:content-['•'] before:text-primary-900">
              The report was generated before the vehicle was shipped to [country of sale].
              Condition may have changed during transit.
            </li>
            <li className="before:content-['•'] before:text-primary-900">
              The report was generated before the vehicle was shipped to [country of sale].
              Condition may have changed during transit.
            </li>
            <li className="before:content-['•'] before:text-primary-900">
              The report was generated before the vehicle was shipped to [country of sale].
              Condition may have changed during transit.
            </li>
            <li className="before:content-['•'] before:text-primary-900">
              The report was generated before the vehicle was shipped to [country of sale].
              Condition may have changed during transit.
            </li>
          </ul>
        </div>

        <div className="mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="space-y-3">
            <p className="flex items-center gap-1.5">
              <Image src={GreenCheck} alt="green check" />
              <span>Made in:</span> <span>Lagos</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Image src={GreenCheck} alt="green check" />
              <span>Sales Records Found:</span> <span>None</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Image src={GreenCheck} alt="green check" />
              Theft Records Found: <span>None</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Image src={GreenCheck} alt="green check" />
              Accident Records Found: <span>None</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Image src={GreenCheck} alt="green check" />
              Salvage Auction Records Found: <span>None</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Image src={GreenCheck} alt="green check" />
              Official NMVTIS Data: <span>Records Found</span>
            </p>
          </div>

          <div className="flex items-center justify-end">
            {/* <Image src="" alt="" /> */}
            <p className="w-[250px] h-[250px] mx-auto md:mx-0 bg-gray-300"></p>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <h1 className="font-bold text-2xl py-2">Lexus ES 350 2011</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <p className="py-1">Vehicle Identification Number</p>
              <p className="border py-1 px-1">3N1AB8CV3NY293476</p>
            </div>

            <div>
              <p className="py-1">Report Date</p>
              <p className="border py-1 px-1">2024-10-06</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <div className=" ">
            <p className="flex items-center gap-1.5 py-1 px-1 bg-primary-100">
              <span>Date of Sale:</span>
              <span>2021-02-16</span>
            </p>
            <p>
              <span>Vehicle Year:</span>
              <span>2011</span>
            </p>
          </div>
          <div className=" ">
            <p className="flex items-center gap-1.5 py-1 px-1 bg-primary-100">
              <span>Date of Sale:</span>
              <span>2021-02-16</span>
            </p>
            <p>
              <span>Vehicle Year:</span>
              <span>2011</span>
            </p>
          </div>

          <div className=" ">
            <p className="flex items-center gap-1.5 py-1 px-1 bg-primary-100">
              <span>Date of Sale:</span>
              <span>2021-02-16</span>
            </p>
            <p>
              <span>Vehicle Year:</span>
              <span>2011</span>
            </p>
          </div>

          <div className=" ">
            <p className="flex items-center gap-1.5 py-1 px-1 bg-primary-100">
              <span>Date of Sale:</span>
              <span>2021-02-16</span>
            </p>
            <p>
              <span>Vehicle Year:</span>
              <span>2011</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleHistory;
