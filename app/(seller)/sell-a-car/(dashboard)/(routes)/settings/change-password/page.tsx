'use client';
import React, { useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Backarrow from '@/app/(seller)/sell-a-car/(dashboard)/assets/coloredarrowleft.svg';

const EditPassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showCNewPassword, setShowCNewPassword] = useState(false);

  return (
    <main>
      <div className="flex gap-2 cursor-pointer w-fit">
        <Image src={Backarrow} alt="back" width={24} height={24} />
        <p className="text-secondary-700 font-medium text-lg">Go Back</p>
      </div>

      <MaxWidthWrapper>
        <div className="w-full grid place-items-center min-h-[80vh]">
          <form action="w-full h-full">
            <div className="w-[80vw] sm:w-[510px] space-y-4 pb-5">
              <div className="pb-8">
                <h1 className="font-bold text-[32px] py-2 text-secondary-700">
                  Change your password
                </h1>
                <p className="text-neutral-700 text-sm">
                  Kindly confirm your current password before setting new one 8 characters minimum
                </p>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-left text-xs font-medium text-neutral-500"
                >
                  Current Password
                </label>
                <div className="w-full flex justify-between items-center px-2  outline-none border rounded-md border-neutral-700 shadow-sm">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="*******"
                    className="mt-1 w-full py-2 outline-none sm:text-sm"
                  />
                  {showCurrentPassword ? (
                    <Eye onClick={() => setShowCurrentPassword(false)} />
                  ) : (
                    <EyeOff onClick={() => setShowCurrentPassword(true)} />
                  )}
                </div>
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
                    type={showNewPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="********"
                    className="mt-1 w-full py-2 outline-none sm:text-sm"
                  />
                  {showNewPassword ? (
                    <Eye onClick={() => setShowNewPassword(false)} />
                  ) : (
                    <EyeOff onClick={() => setShowNewPassword(true)} />
                  )}
                </div>
                <p className="text-xs text-neutral-500">
                  Include a minimum of 8 characters and at least one number and one letter. No
                  spaces, please.
                </p>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-left text-xs font-medium text-neutral-500"
                >
                  Confirm New Password
                </label>
                <div className="w-full flex justify-between items-center px-2  outline-none border rounded-md border-neutral-700 shadow-sm">
                  <input
                    type={showCNewPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="********"
                    className="mt-1 w-full py-2 outline-none sm:text-sm"
                  />
                  {showCNewPassword ? (
                    <Eye onClick={() => setShowCNewPassword(false)} />
                  ) : (
                    <EyeOff onClick={() => setShowCNewPassword(true)} />
                  )}
                </div>
              </div>

              <div className="w-full pt-7">
                <button className="w-full bg-secondary-700 mt-2 text-white px-3 py-3 rounded-sm font-bold">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default EditPassword;
