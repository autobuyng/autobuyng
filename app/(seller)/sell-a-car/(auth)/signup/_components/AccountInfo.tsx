import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import {
  ISellerRegistrationPayloadDealer,
  SellerRegistrationSchemaDealer,
} from '@/Schema/authSchema';
import { useToast } from '@/hooks/use-toast';
import { useRegisterBusiness } from '@/app/(seller)/api/auth';
import { Loader } from 'lucide-react';

const AccountInfo = () => {
  const router = useRouter();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISellerRegistrationPayloadDealer>({
    resolver: zodResolver(SellerRegistrationSchemaDealer),
  });

  const { signup, isRegistering } = useRegisterBusiness();

  const handleRegister = async (data: ISellerRegistrationPayloadDealer) => {
    try {
      const response = await signup(data);

      toast({
        title: 'Success',
        description: response.data.message,
      });

      router.push('/sell-a-car/dashboard');
    } catch (error: any) {
      toast({
        title: 'Failed',
        description: error.message,
      });

      console.log(error);
    }
  };

  return (
    <MaxWidthWrapper>
      <div className=" max-w-[458px] mx-auto w-full grid place-items-center ">
        <form onSubmit={handleSubmit(handleRegister)} className="w-full space-y-4 mt-4">
          <div className="w-full space-y-4">
            <section className="flex flex-col items-center gap-4 w-full">
              <div className="w-full  ">
                <label htmlFor="firstname" className="block  text-xs font-medium text-gray-700">
                  Company Name
                </label>

                <input
                  {...register('companyName')}
                  type="text"
                  id="businessName"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm pt-1">{errors.companyName.message}</p>
                )}
                {/* <p className="text-secondary-500 text-sm pt-1">
                  Name must correspond with CAC Document
                </p> */}
              </div>
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full  ">
                <label htmlFor="firstname" className="block  text-xs font-medium text-gray-700">
                  Firstname
                </label>

                <input
                  {...register('firstName')}
                  type="text"
                  id="firstname"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm pt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="lastname" className="block text-xs font-medium text-gray-700">
                  Lastname
                </label>

                <input
                  {...register('lastName')}
                  type="text"
                  id="lastname"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm pt-1">{errors.lastName.message}</p>
                )}
              </div>
            </section>

            <section className="flex flex-col  gap-4 w-full">
              <div className="w-full">
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm pt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="phonenumber" className="block text-xs font-medium text-gray-700">
                  Phone number
                </label>

                <input
                  {...register('phoneNumber')}
                  type="text"
                  id="phonenumber"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm pt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="cacNumber" className="block text-xs font-medium text-gray-700">
                  CAC Number
                </label>

                <input
                  {...register('cac')}
                  type="text"
                  id="cacNumber"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
                {errors.cac && <p className="text-red-500 text-sm pt-1">{errors.cac.message}</p>}
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
                {errors.password && (
                  <p className="text-red-500 text-sm pt-1">{errors.password.message}</p>
                )}
              </div>
            </section>
          </div>

          <div className="w-full ">
            <div className="flex items-center  gap-4 h-full w-full">
              <button
                disabled={isRegistering}
                type="submit"
                // onClick={() => router.push('/sell-a-car/dashboard')}
                className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
              >
                {isRegistering ? <Loader className="animate-spin mx-auto" /> : ' Continue'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default AccountInfo;
