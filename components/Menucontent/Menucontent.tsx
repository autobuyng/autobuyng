'use client';

import React, { useState } from 'react';

import SignIn from '@/app/auth/SignIn/SignIn';
import { useRouter } from 'next/navigation';

const Menucontent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');
  const router = useRouter();
  const user = true;

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleSignUpClick = () => {
    setIsOpen(true);
    setType('signup');
  };

  const handleSignInClick = () => {
    setType('signin');
    setIsOpen(true);
  };

  const handleMenuClick = (path: string) => {
    router.push(`/${path}`);
    setIsOpen(false);
  };

  const MENU_ITEMS = [
    { id: '1', text: 'messages', path: 'messages' },
    { id: '2', text: 'Notifications', path: 'notification' },
    { id: '3', text: 'Orders', path: 'orders' },
    { id: '4', text: 'Favorites', path: 'favorites' },
  ];
  return (
    <div className="mt-8 md:mt-0">
      <div>
        <h1 className="font-[600] text-lg text-primary-700">Get Started with Autobuy</h1>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {!user && (
          <div className="flex flex-col gap-3 border-b border-neutral-100 pb-2">
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
        )}

        {user && (
          <div className="flex flex-col gap-3 border-b border-neutral-100 pb-2">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="w-full">
                <button onClick={() => handleMenuClick(item.path)} className="flex">
                  {item.text}
                </button>
              </div>
            ))}
          </div>
        )}

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

      <SignIn isOpen={isOpen} handleOpenChange={handleOpenChange} type={type} setType={setType} />
    </div>
  );
};

export default Menucontent;
