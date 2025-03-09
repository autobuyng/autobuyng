'use client';
import React, { Suspense, useState } from 'react';
import Link from 'next/link';
import Steptop from '@/app/(seller)/assets/vectortop.svg';
import Stepbottom from '@/app/(seller)/assets/vectorbottom.svg';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Loader } from 'lucide-react';
import { useResetPassword } from '@/app/(seller)/api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { IPassword, PasswordSchema } from '@/Schema/authSchema';
import { useSearchParams } from 'next/navigation';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPassword>({ resolver: zodResolver(PasswordSchema) });
  const searchParams = useSearchParams()
  const { toast } = useToast();
  const token = searchParams.get('token');

  const { resetPassword, isPending } = useResetPassword();

  const handleResetPassword = async (data: IPassword) => {
    try {
      const response = await resetPassword({
        password: data.password,
        token: token as string,
      });
      toast({
        title: 'Success',
        description: response.data.message,
      });
      reset();
    } catch (error: any) {
      toast({
        title: 'Failed',
        description: error.message,
      });
    }
  };

  return (
    <div className="flex">
      <div className="flex-[1] flex justify-center h-full">
        <MaxWidthWrapper>
          <div className="w-full flex justify-center sm:items-center min-h-[calc(100vh_-_76px)] mt-10 sm:mt-0">
            <div>
              <form onSubmit={handleSubmit(handleResetPassword)} className="flex justify-center">
                <div className="w-[85vw] sm:max-w-[458px] space-y-4 pb-2">
                  <div className="text-center pb-2">
                    <h1 className="font-medium text-[28px] sm:text-3xl">Reset your password?</h1>
                    <p>
                      Enter your account&apos;s email address below and we&apos;ll send you an email
                      to reset your password
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-left text-xs font-medium text-neutral-500"
                    >
                      New Password
                    </label>
                    <div className="w-full flex justify-between items-center px-2  outline-none border rounded-md border-neutral-700 shadow-sm">
                      <input
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder="*******"
                        className="mt-1 w-full py-2 outline-none sm:text-sm"
                      />
                      {showPassword ? (
                        <Eye onClick={() => setShowPassword(false)} />
                      ) : (
                        <EyeOff onClick={() => setShowPassword(true)} />
                      )}
                    </div>

                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="w-full">
                    <button className="w-full bg-secondary-700 mt-4 text-white px-3 py-3 rounded-sm font-bold">
                      {isPending ? <Loader className="mx-auto animate-spin" /> : ' Proceed'}
                    </button>
                  </div>
                </div>
              </form>

              <div>
                <p className="text-center mt-3 font-medium">
                  Remember your password?{' '}
                  <Link className="text-secondary-700 font-semibold" href="/sell-a-car/login">
                    Login
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-center mt-7 font-medium">
                  Don&apos;t have an account?{' '}
                  <Link className="text-secondary-700 font-semibold" href="/sell-a-car/signup">
                    Click to Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="md:flex-[1] hidden md:block relative h-[calc(100vh_-_76px)]">
        <div className="fixed right-0 w-[50%] bottom-0 top-0 z-30 bg-secondary-700">
          <div className="flex justify-center items-center relative h-full">
            <div className="flex flex-col items-center gap-10 z-10 relative px-10">
              <Image
                src="https://ik.imagekit.io/wy2wtykti/Autobuy/image.png"
                alt="dashboard"
                width={512}
                height={300}
                className=""
              />
              <div className="max-w-[600px] text-center text-white">
                <h1 className="text-3xl font-bold">Turn your car into cash!</h1>
                <p className="text-sm font-medium">
                  Lorem ipsum dolor sit amet consectetur. Blandit elit egestas nam dictum enim.
                  Ultrices id molestie facilisis consectetur risus massa.
                </p>
              </div>
            </div>
            <Image
              src={Steptop}
              alt="step"
              width={260}
              height={260}
              className="absolute top-0 left-0"
            />
            <Image
              src={Stepbottom}
              alt="step"
              width={260}
              height={260}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Page() {
  return (
    <Suspense >
      <ResetPassword />
    </Suspense>
  )
}