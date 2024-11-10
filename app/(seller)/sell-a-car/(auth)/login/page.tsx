'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <MaxWidthWrapper>
      <div className="w-full grid place-items-center h-full space-y-4 mt-16">
        <form action="w-full h-full border border-primary-500">
          <div className="w-[80vw] sm:max-w-[458px] space-y-4 pb-2">
            <div>
              <h1 className="font-bold text-2xl py-2 text-center">Login to Autobuy</h1>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-left text-xs font-medium text-neutral-500"
              >
                Email
              </label>
              <div className="w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-left text-xs font-medium text-neutral-500"
              >
                Password
              </label>
              <div className="w-full flex justify-between items-center  px-2 outline-none border rounded-md border-neutral-700 shadow-sm">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder=""
                  className="mt-1 w-full py-2 outline-none sm:text-sm"
                />
                {showPassword ? (
                  <Eye onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeOff onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>

            <Link
              className="text-secondary-700 inline-block my-4"
              href={'/sell-a-car/forget-password'}
            >
              Forget Password
            </Link>

            <div className="w-full ">
              <button className="w-full bg-secondary-700 mt-2 text-white px-3 py-3 rounded-sm font-bold">
                Login
              </button>
            </div>
          </div>
        </form>

        {/* <div className="flex flex-col gap-4 w-[80vw] sm:w-[510px]">
          <div className="w-full flex justify-between items-center gap-[5px]">
            <span className="border-t-[1.5px] border-[#C0C0C0] w-full"></span>
            <span className="text-lg">or</span>
            <span className="border-t-[1.5px] border-[#C0C0C0] w-full"></span>
          </div>

          <div
            className={cn('flex  gap-4', {
              'sm:flex-col': os === 'macOS',
              'flex-col': isMobile,
            })}
          >
            <div className="w-full">
              <button className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6">
                <Image src={Google} alt="Google" /> <span>Sign up with Google</span>
              </button>
            </div>

            <div className="w-full">
              <button className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6 whitespace-nowrap">
                <Image src={Facebook} alt="Facebook" />
                <span> Sign up with Facebook</span>
              </button>
            </div>
          </div>
        </div> */}

        <div>
          <p className="text-center mt-2">
            Don&apos;t have an account?{' '}
            <Link className="text-secondary-700" href="/sell-a-car/signup">
              signup
            </Link>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Login;
