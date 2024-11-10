'use client';
import React, { useState } from 'react';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';
import Image from 'next/image';
import ForeignUsed from '../_components/ForeignUsed';
import BrandNew from '../_components/BrandNew';
import NigeriaUsed from '../_components/NigeriaUsed';
import { ArrowLeft } from 'lucide-react';

interface ConditonTypes {
  [key: string]: CarConditions;
}
type CarConditions = {
  id: string;
  title: string;
  description: string;
  component: JSX.Element;
};
const SingleVehicle = () => {
  const [condition, setCondition] = useState('foreignUsed');

  const CAR_CONDITION: ConditonTypes = {
    foreignUsed: {
      id: 'foreignused',
      title: 'foreignused',
      description: 'Upload your vehicle inventory',
      component: <ForeignUsed />,
    },

    brandNew: {
      id: 'brandnew',
      title: 'brandnew',
      description: 'Upload your vehicle quantity',
      component: <BrandNew />,
    },
    nigerianUsed: {
      id: 'nigeriaused',
      title: 'nigeriaused',
      description: 'Upload your vehicle quantity',
      component: <NigeriaUsed />,
    },
  };
  const handleChange = (event: { target: { value: any } }) => {
    const selectedCondition = event.target.value;
    setCondition(selectedCondition);
    // if (onConditionChange) {
    //   onConditionChange(selectedCondition);
    // }
  };

  return (
    <div className="mx-4">
      <div>
        <ArrowLeft className="cursor-pointer" onClick={() => window.history.back()} />
      </div>
      <div className=" max-w-[458px] mx-auto md:ml-16 w-full grid place-items-center ">
        <form action="" className="w-full space-y-4 mt-4">
          <h1 className="font-bold text-2xl text-center mb-4">UPLOAD A VEHICLE</h1>

          <div className="w-full space-y-4">
            <section className="flex flex-col items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="make" className="block text-xs font-medium text-gray-700">
                  Make
                </label>

                <input
                  type="text"
                  id="make"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-700  sm:text-sm"
                />
              </div>

              {/* <div className="w-full">
                  <label htmlFor="lastname" className="block text-xs font-medium text-gray-700">
                    Lastname
                  </label>

                  <input
                    type="text"
                    id="lastname"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div> */}
            </section>

            <section className="flex  gap-4 w-full">
              <div className="w-full">
                <label htmlFor="vin" className="block text-xs font-medium text-gray-700">
                  VIN
                </label>

                <input
                  type="text"
                  id="vin"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="address" className="block text-xs font-medium text-gray-700">
                  Condition
                </label>

                <select
                  id="condition"
                  name="condition"
                  value={condition}
                  onChange={handleChange}
                  className="block w-full rounded-md  px-2 py-[9px] mt-1 bg-neutral-500 text-white  border border-neutral-900  text-sm outline-none "
                >
                  {/* <option value="" disabled>
                    Select vehicle condition
                  </option> */}
                  <option value="brandNew">Brand New</option>
                  <option value="foreignUsed">Foreign Used</option>
                  <option value="nigerianUsed">Nigerian Used</option>
                </select>
              </div>
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="state" className="block text-xs font-medium text-gray-700">
                  Category
                </label>

                <select
                  id="condition"
                  name="condition"
                  value={condition}
                  onChange={handleChange}
                  className="block w-full rounded-md  px-2 py-[9px] mt-1 bg-neutral-500 text-white  border border-neutral-900  text-sm outline-none "
                >
                  <option value="" disabled>
                    Select vehicle category
                  </option>
                  <option value="brand-new">Brand New</option>
                  <option value="foreign-used">Foreign Used</option>
                  <option value="nigerian-used">Nigerian Used</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                  Vehicle year
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={condition}
                  onChange={handleChange}
                  className="block w-full rounded-md  px-2 py-[9px] mt-1 bg-neutral-500 text-white  border border-neutral-900  text-sm outline-none "
                >
                  <option value="" disabled>
                    Select vehicle year
                  </option>
                  <option value="brand-new">Brand New</option>
                  <option value="foreign-used">Foreign Used</option>
                  <option value="nigerian-used">Nigerian Used</option>
                </select>
              </div>
            </section>

            <section className="flex flex-col items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="address" className="block text-xs font-medium text-gray-700">
                  Address
                </label>

                <input
                  type="text"
                  id="address"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="time" className="block text-xs font-medium text-gray-700">
                  Time
                </label>

                <textarea
                  rows={4}
                  id="time"
                  placeholder=""
                  className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>
            </section>

            <section className="w-full space-y-4">
              <h1 className="font-bold">Upload Pictures of your vehicle</h1>
              <div className="w-full  border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
                <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
                  <Image src={Document} alt="upload" />
                </div>
                <p className="text-neutral-500 text-sm">
                  Click here to upload your file or drag and drop
                </p>
                <p className="text-sm">
                  <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp,
                  .pdf, .Doc
                </p>
              </div>

              <div>
                <p>Uploaded files</p>
              </div>

              <div>
                <div className="w-full">
                  <label htmlFor="link" className="block text-xs font-medium text-gray-700">
                    Video Link
                  </label>

                  <input
                    type="text"
                    id="link"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" name="" id="" />
                <p className="text-xs">
                  By clicking here, you authorize AutoBuy to continue with collecting your
                  information. We only save this data to schedule a meeting for inspection and
                  provide you a listing to sell your car. We value and protect your privacy check
                  Term and Conditions
                </p>
              </div>
            </section>

            <section>{CAR_CONDITION[condition]?.component}</section>
          </div>

          <div className="w-full ">
            <div className="flex items-center  gap-4 h-full w-full">
              <button
                type="submit"
                className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
              >
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleVehicle;
