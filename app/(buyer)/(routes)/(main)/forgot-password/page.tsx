'use client';
import { useForgotPassword } from '@/app/(buyer)/api/auth';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { useToast } from '@/hooks/use-toast';

import { Loader } from 'lucide-react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();

  const { forgotPassword, isPending } = useForgotPassword();

  const handleForgotPassword: SubmitHandler<{ email: string }> = async (data) => {
    try {
      const response = await forgotPassword(data);
      toast({
        title: 'Success',
        description: response.data.message,
        position: 'top-right',
      });

      console.log(response);
    } catch (error) {
      toast({
        title: 'failed',
        description: 'Something went wrong',
      });
      console.log(error);
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="w-full grid place-items-center min-h-[95vh]">
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className="max-w-[510px] space-y-4 pb-5 border-b-2 border-neutral-300">
            <div>
              <h1 className="font-bold text-2xl py-2">Forgot your password?</h1>
              <p>
                Enter your account&apos;s email address below and we&apos;ll send you an email to
                reset your password
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-left text-xs font-medium text-neutral-500"
              >
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })} 
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                className="mt-1 w-full py-3 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm"
              />
              {errors?.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>


            <div className="w-full ">
              <button className="w-full bg-primary-700 mt-2 text-white px-3 py-3 rounded-sm font-bold">
                {isPending ? <Loader className="animate-spin mx-auto" /> : 'Proceed'}
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

export default ForgotPassword;
