'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Steptop from '@/app/(seller)/assets/vectortop.svg';
import Stepbottom from '@/app/(seller)/assets/vectorbottom.svg';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex">
      <div className="flex-[1] flex justify-center h-full">
        <MaxWidthWrapper>
          <div className="w-full flex justify-center sm:items-center min-h-[calc(100vh_-_76px)] mt-10 sm:mt-0">
            <div>
              <form action="" className="flex justify-center">
                <div className="w-[85vw] sm:max-w-[458px] space-y-4 pb-2">
                  <div className="text-center pb-2">
                    <h1 className="font-medium text-3xl">Welcome Back!</h1>
                    <p>Login to your account</p>
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
                    className="text-secondary-700 inline-block underline"
                    href={'/sell-a-car/forgot-password'}
                  >
                    Forgot Password
                  </Link>

                  <div className="w-full">
                    <button className="w-full bg-secondary-700 mt-4 text-white px-3 py-3 rounded-sm font-bold">
                      Log in
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
                <p className="text-center mt-5 font-medium">
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

export default Login;
