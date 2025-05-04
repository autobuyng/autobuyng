'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { EyeIcon, EyeOffIcon, Loader, Loader2 } from 'lucide-react';
import { useDebounce } from 'use-debounce';

import { ISellerRegistrationPayload, SellerRegistrationSchema } from '@/Schema/authSchema';
import { useRegister, useVerifyIdentity } from '@/app/(seller)/api/auth';
import { useToast } from '@/hooks/use-toast';
import Verification from './Verification';
import { cn } from '@/lib/utils';
import { UserData } from '@/types/types';

const BusinessInfo = () => {
  const { toast } = useToast();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signupData, setSignUpData] = useState<ISellerRegistrationPayload | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [ninData, setNinData] = useState<UserData | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ISellerRegistrationPayload>({
    resolver: zodResolver(SellerRegistrationSchema),
  });
  const nin = watch("nin")
  const [debouncedNin] = useDebounce(nin, 1000);
  const lastNin = useRef<string | null>(null);
  const { signup, isRegistering } = useRegister(); 
  const { verifyIdentity, isPending } = useVerifyIdentity();

  useEffect(() => {
    reset({
      firstName: ninData?.firstname,
      lastName: ninData?.surname,
      email: ninData?.email,
      phoneNumber: ninData?.telephoneno,


    })
  }, [ninData])

  const handleRegister = async (data: ISellerRegistrationPayload) => {
    try {
      const response = await signup(data);
      setSignUpData(data);
      setIsModalOpen(true);
      toast({
        title: 'Success',
        description: response.data.message,
      });
    } catch (error: any) {
      toast({
        title: 'Failed',
        description: error.message,
      });
    }
  };


  const NinLookup = async () => {
    try {
      const response = await verifyIdentity({ nin });
      setNinData(response.data)
    } catch (error) {
      console.log(error)
      reset()
    }
  }


  useEffect(() => {
    if (!debouncedNin || debouncedNin === lastNin.current) return;

    lastNin.current = debouncedNin;
    console.log("again");
    NinLookup();
  }, [debouncedNin]);



  return (
    <div className='max-w-[458px] mx-auto w-full'>
      <div className="  w-full grid place-items-center ">
        <form onSubmit={handleSubmit(handleRegister)} className="w-full space-y-4 mt-4">
          <div className="w-full space-y-4">
            <div className="w-full">
              <label htmlFor="ninorcac" className="block text-xs font-medium text-gray-700">
                National Identification Number (NIN)
              </label>
              <div className='flex items-center justify-between border border-neutral-900 rounded-sm'>
                <div>
                  <input
                    {...register('nin')}
                    type="text"
                    id="ninorcac"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border-none  sm:text-sm"
                  />
                  {errors.nin && <p className="text-red-500">{errors.nin.message}</p>}
                </div>
                {isPending ? <Loader2 className='animate-spin' /> : null}
              </div>
            </div>

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
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
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
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
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
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
              </div>
            </section>

            <section className="flex flex-col items-center gap-4 w-full">

              <div className="w-full">
                <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                  Password
                </label>

                <div
                  className={cn(
                    'mt-1 flex justify-between items-center w-full  px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                    { 'border border-red-500': errors.password },
                  )}
                >
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="******"
                    className={cn(
                      'flex-1 border-none outline-none py-1.5',
                      // { 'border border-red-500': errors.password },
                    )}
                  />
                  {showPassword ? (
                    <EyeIcon onClick={() => setShowPassword(false)} />
                  ) : (
                    <EyeOffIcon onClick={() => setShowPassword(true)} />
                  )}
                </div>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
            </section>
          </div>

          <div className="w-full ">
            <div className="flex items-center  gap-4 h-full w-full">
              <button
                type="submit"
                className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
              >
                {isRegistering ? <Loader className="animate-spin mx-auto" /> : '  Continue'}
              </button>
            </div>
          </div>
        </form>

        <Verification
          signupData={signupData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default BusinessInfo;
