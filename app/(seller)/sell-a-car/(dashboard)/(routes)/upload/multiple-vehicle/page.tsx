'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MulitipleVehicle = () => {
  return (
    <div className="mx-auto">
      <div>
        <ArrowLeft className=" ml-4 cursor-pointer" onClick={() => window.history.back()} />
      </div>
      <div className=" max-w-[458px] mx-auto w-full grid place-items-center ">
        <form action="" className="w-full space-y-4 mt-4">
          <h1 className="font-bold text-2xl text-center mb-4">Book an inspection</h1>
          <p className="text-center my-4 text-sm">
            Lorem ipsum dolor sit amet consectetur. Vestibulum dolor neque ut sed fringilla diam
            maecenas.
          </p>
          <div className="w-full space-y-4">
            <section className="flex flex-col items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="phonenumber" className="block text-xs font-medium text-gray-700">
                  Phone number
                </label>

                <input
                  type="text"
                  id="phonenumber"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
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

            <section className="flex flex-col  gap-4 w-full">
              <div className="w-full">
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

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
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="state" className="block text-xs font-medium text-gray-700">
                  State
                </label>

                <input
                  type="text"
                  id="state"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                  City
                </label>

                <input
                  type="text"
                  id="city"
                  placeholder=""
                  className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="date" className="block text-xs font-medium text-gray-700">
                  Date
                </label>

                <input
                  type="date"
                  id="date"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="time" className="block text-xs font-medium text-gray-700">
                  Time
                </label>

                <input
                  type="time"
                  id="time"
                  placeholder=""
                  className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>
            </section>
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

export default MulitipleVehicle;
