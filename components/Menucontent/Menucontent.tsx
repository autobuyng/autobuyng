'use client';

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import SignIn from '@/app/auth/SignIn/SignIn';
import Profile from '@/components/Navbar/assets/Profile.svg';
import Orders from '@/components/Navbar/assets/cart.svg';
import Save from '@/components/Navbar/assets/save.svg';
import { AppContext } from '@/context/AppContext';

const Menucontent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');
  const router = useRouter();
  const { user } = useContext(AppContext);
  const handleOpenChange = () => {
    setIsOpen(false);
  };

  console.log(user, 'user');
  const handleSignUpClick = () => {
    setIsOpen(true);
    setType('signup');
  };

  const handleMenuClick = (path: string) => {
    router.push(`/${path}`);
    setIsOpen(false);
  };

  const MENU_ITEMS = [
    { id: '1', text: 'orders', path: 'orders', Icon: Orders },
    { id: '2', text: 'saved', path: 'saved', Icon: Save },
    // { id: '3', text: 'My Account', path: 'accounts', Icon: Profile },
  ];

  return (
    <div className="mt-8 md:mt-0">
      <div>
        <h1 className="font-semibold text-lg text-primary-700">Hi Jonathan</h1>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {/* {!user && (
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
        )} */}

        {user && (
          <div className="flex flex-col gap-3  pb-2">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => handleMenuClick(item.path)}
                  className="flex items-center justify-center gap-2"
                >
                  <Image src={item.Icon} alt={item.text} />
                  <span> {item.text}</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {user && (
          <div className="flex flex-col gap-3 border-t border-b border-neutral-100 pb-2">
            <div className="w-full">
              <button
                onClick={handleSignUpClick}
                className="flex items-center gap-2 justify-between"
              >
                <Image src={Profile} alt="Profile" />
                <span> My Account</span>
              </button>
            </div>
          </div>
        )}

        {user && (
          <button className="w-full block bg-primary-900 text-white items-center py-2.5 rounded-md">
            Log out
          </button>
        )}
      </div>

      <SignIn isOpen={isOpen} handleOpenChange={handleOpenChange} type={type} setType={setType} />
    </div>
  );
};

export default Menucontent;
