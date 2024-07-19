import Image from 'next/image';
import React from 'react';

import Google from '@/components/Navbar/assets/Google.svg';
import Facebook from '@/components/Navbar/assets/Facebook.svg';

const Menucontent = () => {
  return (
    <div className="mt-8 md:mt-0">
      <div>
        <h1 className="font-bold text-lg">Get Started with Autobuy</h1>
        <p className="text-xs text-neutral-700">
          Sign up and get access to view your orders, save cars, search history and more
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="w-full">
          <button className="flex w-full items-center justify-center gap-4 rounded-sm py-2 px-6 bg-primary-500 text-white">
            Create an account
          </button>
        </div>

        <div className="w-full flex justify-between items-center gap-[5px]">
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
          <span>or</span>
          <span className="border-t-[1.5px] border-neutral-100 w-full"></span>
        </div>

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
    </div>
  );
};

export default Menucontent;
