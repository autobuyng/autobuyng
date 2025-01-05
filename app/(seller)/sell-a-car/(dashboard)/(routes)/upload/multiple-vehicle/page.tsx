'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { ContactDetails } from '@/types/types';
import { ContactDetailsSchema, IContactDetailsSchema } from '@/Schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBookInspection } from '@/app/(seller)/api/upload';

const MulitipleVehicle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactDetailsSchema>({
    resolver: zodResolver(ContactDetailsSchema),
  });

  const { bookInspection, isPending } = useBookInspection();

  function convertToAmPmFormat(time: string): string {
    const [hour, minute] = time.split(':').map(Number);
    const isPM = hour >= 12;
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for AM/PM
    const amPm = isPM ? 'PM' : 'AM';
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${amPm}`;
  }

  const handleSubmitClick = async (data: ContactDetails) => {
    console.log(data, 'data');

    try {
      const response = await bookInspection({ ...data, time: convertToAmPmFormat(data.time) });
      console.log(response, 'srespone');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto">
      <div>
        <ArrowLeft className=" ml-4 cursor-pointer" onClick={() => window.history.back()} />
      </div>
      <div className=" max-w-[458px] mx-auto w-full grid place-items-center ">
        <form onSubmit={handleSubmit(handleSubmitClick)} className="w-full space-y-4 mt-4">
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
                  {...register('phoneNumber')}
                  id="phoneNumber"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500">{errors.phoneNumber.message}</span>
                )}
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
                  {...register('email')}
                  id="email"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              <div className="w-full">
                <label htmlFor="address" className="block text-xs font-medium text-gray-700">
                  Address
                </label>

                <input
                  type="text"
                  {...register('address')}
                  id="address"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
              </div>
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="state" className="block text-xs font-medium text-gray-700">
                  State
                </label>

                <input
                  type="text"
                  {...register('state')}
                  id="state"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.state && <span className="text-red-500">{errors.state.message}</span>}
              </div>

              <div className="w-full">
                <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                  City
                </label>

                <input
                  type="text"
                  {...register('city')}
                  id="city"
                  placeholder=""
                  className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.city && <span className="text-red-500">{errors.city.message}</span>}
              </div>
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="date" className="block text-xs font-medium text-gray-700">
                  Date
                </label>

                <input
                  type="date"
                  {...register('date')}
                  id="date"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.date && <span className="text-red-500">{errors.date.message}</span>}
              </div>

              <div className="w-full">
                <label htmlFor="time" className="block text-xs font-medium text-gray-700">
                  Time
                </label>

                <input
                  type="time"
                  {...register('time')}
                  id="time"
                  placeholder=""
                  className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.time && <span className="text-red-500">{errors.time.message}</span>}
              </div>
            </section>
          </div>

          <div className="w-full ">
            <div className="flex items-center  gap-4 h-full w-full">
              <button
                type="submit"
                className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
              >
                {isPending ? 'Loading...' : 'Proceed'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MulitipleVehicle;
