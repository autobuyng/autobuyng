'use client';

import React, { useState } from 'react';

import Link from 'next/link';

const Menucontent = () => {
  const [, setIsOpen] = useState(false);
  const [, setType] = useState('signin');
  const user = false;

  const handleSignUpClick = () => {
    setIsOpen(true);
    setType('signup');
  };

  return (
    <div className="mt-8 md:mt-0">
      <div>
        <h1 className="font-[600] text-lg text-primary-700">Get Started with Autobuy</h1>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {!user && (
          <div className="flex flex-col gap-3 border-b border-neutral-100 pb-2">
            <div className="w-full">
              <Link href="/sell/signup" className="flex">
                Sign up
              </Link>
            </div>
            <div className="w-full">
              <Link href="/sell/login" className="flex">
                Sign in
              </Link>
            </div>
            {/* <div className="w-full">
              <button className="flex">Sell your vehicle</button>
            </div> */}
          </div>
        )}

        {/* {user && (
          <div className="flex flex-col gap-3 border-b border-neutral-100 pb-2">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="w-full">
                <button onClick={() => handleMenuClick(item.path)} className="flex">
                  {item.text}
                </button>
              </div>
            ))}
          </div>
        )} */}

        {user && (
          <div className="flex flex-col gap-3 border-b border-neutral-100 pb-2">
            <div className="w-full">
              <button onClick={handleSignUpClick} className="flex">
                My Account
              </button>
            </div>
          </div>
        )}

        <div className="w-full">
          <button className="flex">Terms and condition</button>
        </div>

        <div className="w-full">
          <button className="flex">Help Center</button>
        </div>
      </div>
    </div>
  );
};

export default Menucontent;
