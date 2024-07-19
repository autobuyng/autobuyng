'use client';

import React, { useState } from 'react';

import SignIn from '@/app/auth/SignIn/SignIn';

const Menucontent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleSignUpClick = () => {
    setType('signup');
    setIsOpen(true);
  };

  const handleSignInClick = () => {
    setType('signin');
    setIsOpen(true);
  };

  return (
    <div className="mt-8 md:mt-0">
      <div>
        <h1 className="font-[600] text-lg text-primary-700">Get Started with Autobuy</h1>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="w-full">
          <button onClick={handleSignUpClick} className="flex">
            Sign up
          </button>
        </div>
        <div className="w-full">
          <button onClick={handleSignInClick} className="flex">
            Sign in
          </button>
        </div>
        <div className="w-full">
          <button className="flex">Sell your vehicle</button>
        </div>
      </div>

      <SignIn isOpen={isOpen} handleOpenChange={handleOpenChange} type={type} setType={setType} />
    </div>
  );
};

export default Menucontent;
