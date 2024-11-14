import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

import Link from 'next/link';

type AccountInfoProp = {
  step: string;
  selectedOption: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
};
const AccountInfo = ({ selectedOption }: AccountInfoProp) => {
  const router = useRouter();

  const passwordSchema = z.object({
    password: z
      .string()
      .min(8, { message: 'Minimum 8 characters' })
      .regex(/[A-Z]/, { message: 'At least one uppercase letter' })
      .regex(/[a-z]/, { message: 'At least one lowercase letter' })
      .regex(/[0-9]/, { message: 'At least one number' })
      .regex(/^[A-Za-z0-9!@#$%^]+$/, { message: 'Only !@#$%^ special characters allowed' }),
  });

  const {
    register,
    watch,
    // formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const passwordValue: string = watch('password') || '';

  const conditionsMet = {
    minLength: passwordValue.length >= 8,
    hasUppercase: /[A-Z]/.test(passwordValue),
    hasLowercase: /[a-z]/.test(passwordValue),
    hasNumber: /[0-9]/.test(passwordValue),
    allowedSpecialChars: /^[A-Za-z0-9!@#$%^]+$/.test(passwordValue),
  };

  return (
    <MaxWidthWrapper>
      {selectedOption === 'BUSINESS' && (
        <div className=" max-w-[458px] mx-auto w-full grid place-items-center ">
          <form action="" className="w-full space-y-4 mt-4">
            <h1 className="font-bold text-2xl text-center mb-4">Create An Account</h1>
            <div className="w-full space-y-4">
              <section className="flex flex-col items-center gap-4 w-full">
                <div className="w-full  ">
                  <label htmlFor="firstname" className="block  text-xs font-medium text-gray-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    id="businessName"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                  <p className="text-secondary-500 text-sm pt-1">
                    Name must correspond with CAC Document
                  </p>
                </div>
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
                  <label htmlFor="cacNumber" className="block text-xs font-medium text-gray-700">
                    CAC(Coperate Affairs Commission) Number
                  </label>

                  <input
                    type="text"
                    id="cacNumber"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>

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
              </section>

              <section className="flex flex-col items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                    Password
                  </label>

                  <input
                    type="password"
                    {...register('password')}
                    id="password"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="space-y-4">
                <div className=" grid grid-cols-5 gap-2 items-center w-full">
                  <div
                    className={`h-1 w-full ${conditionsMet.minLength ? 'bg-red-500' : 'bg-gray-300'}`}
                  ></div>
                  <div
                    className={`h-1 w-full ${conditionsMet.hasUppercase ? 'bg-red-500' : 'bg-gray-300'}`}
                  ></div>
                  <div
                    className={`h-1 w-full ${conditionsMet.hasLowercase ? 'bg-red-500' : 'bg-gray-300'}`}
                  ></div>
                  <div
                    className={`h-1 w-full ${conditionsMet.hasNumber ? 'bg-red-500' : 'bg-gray-300'}`}
                  ></div>
                  <div
                    className={`h-1 w-full ${conditionsMet.allowedSpecialChars ? 'bg-red-500' : 'bg-gray-300'}`}
                  ></div>
                </div>
                <p className="text-red-500 text-xs">
                  Min. 8 characters, 1 uppercase, 1 lowercase, 1 number. ONLY the following
                  characters are allowed: !@#$%^
                </p>
              </section>
            </div>

            <div className="w-full ">
              <div className="flex items-center  gap-4 h-full w-full">
                <button
                  type="button"
                  onClick={() => router.push('/sell-a-car/dashboard')}
                  className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
                >
                  Proceed
                </button>
              </div>

              <div>
                <p className="text-center text-sm mt-4">
                  Signing up for an Autobuy sellers account means you agree to the{' '}
                  <span className="text-secondary-500">Privacy Policy</span>
                  and <span className="text-secondary-500">Terms of Service</span>
                </p>
                <p className="text-center text-sm mt-4">
                  Already signed up?
                  <Link className="text-secondary-500" href="/sell-a-car/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default AccountInfo;
