'use client';
import React, { useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useResetPassword } from '@/app/(buyer)/api/auth';
import { useToast } from '@/hooks/use-toast';
import { IPassword, PasswordSchema } from '@/Schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPassword>({ resolver: zodResolver(PasswordSchema) });

  const { toast } = useToast();
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get('token');

  const { resetPassword } = useResetPassword();

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
    } catch (error: any) {
      toast({
        title: 'Failed',
        description: error.message,
      });
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="w-full grid place-items-center min-h-[90vh]">
        <form onSubmit={handleSubmit(handleResetPassword)}>
          <div className="w-[80vw] sm:w-[510px] space-y-4 pb-5 border-b-2 border-neutral-300">
            <div>
              <h1 className="font-bold text-2xl py-2">Reset Password</h1>
              <p>Enter your new password</p>
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

              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* <div>
              <label
                htmlFor="password"
                className="block text-left text-xs font-medium text-neutral-500"
              >
                Re-Enter New Password
              </label>
              <div className="w-full flex justify-between items-center px-2  outline-none border rounded-md border-neutral-700 shadow-sm">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="********"
                  className="mt-1 w-full py-2 outline-none sm:text-sm"
                />
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeOff onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div> */}

            <div className="w-full ">
              <button className="w-full bg-primary-700 mt-2 text-white px-3 py-3 rounded-sm font-bold">
                Proceed
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <p>Remember password?</p>
            <button className="capitalize font-[600] w-[80px] h-[48px] border-2 border-primary-700 text-primary-700 rounded-sm text-center">
              login
            </button>
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default ResetPassword;
