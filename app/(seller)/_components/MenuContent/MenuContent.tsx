'use client';

import React, { useState } from 'react';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';

import Orders from '@/components/Navbar/assets/cart.svg';
import Save from '@/components/Navbar/assets/save.svg';
import Profile from '@/components/Navbar/assets/Profile.svg';

const Menucontent = () => {
  const [, setIsOpen] = useState(false);
  const [, setType] = useState('signin');
  const router = useRouter();

  const user = true;

  const MENU_ITEMS = [
    { id: '1', text: 'Dashboard', path: 'dashboard', Icon: Orders },
    { id: '2', text: 'Upload Vehicle', path: 'upload', Icon: Save },
    // { id: '3', text: 'My Account', path: 'accounts', Icon: Profile },
  ];

  const handleSignUpClick = () => {
    setIsOpen(true);
    setType('signup');
  };

  const handleMenuClick = (path: string) => {
    router.push(`/sell-a-car/${path}`);
    setIsOpen(false);
  };

  return (
    <div className="mt-8 md:mt-0">
      <div className="flex flex-col gap-3 mt-4">
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
          <div className="flex flex-col gap-3 border-t border- border-neutral-100 pb-2">
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
          <button className="w-full block bg-secondary-500 text-white items-center py-2.5 rounded-md">
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Menucontent;
