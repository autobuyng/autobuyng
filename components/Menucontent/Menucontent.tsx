'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';

import Profile from '@/components/Navbar/assets/Profile.svg';
import Orders from '@/components/Navbar/assets/cart.svg';
import Save from '@/components/Navbar/assets/save.svg';
import AuthDialog from '@/app/auth';
import { useStore } from '@/store/useStore';
import { clearSessionStorage } from '@/lib/Sessionstorage';

type MenucontentProps = {
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>;
};
const Menucontent = ({ setShowPopover }: MenucontentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('signin');
  const router = useRouter();
  const pathName = usePathname();
  const { user, setUser } = useStore();

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleSignUpClick = () => {
    if (!user) {
      setIsOpen(true);
      setType('signin');
      setShowPopover(false);
    } else {
      router.push('/settings');
      setShowPopover(false);
    }
  };

  const handleMenuClick = (path: string) => {
    router.push(`/${path}`);
    setIsOpen(false);
    setShowPopover(false);
  };

  const MENU_ITEMS = [
    { id: '1', text: 'orders', path: 'orders', Icon: Orders },
    { id: '2', text: 'favorites', path: 'favorites', Icon: Save },
    // { id: '3', text: 'My Account', path: 'accounts', Icon: Profile },
  ];

  const handleLogOut = () => {
    if (pathName.startsWith('/payment')) {
      router.push('/results/keyword');
    }
    setUser(null);
    window.location.reload();
    clearSessionStorage();
  };

  return (
    <div className="mt-8 md:mt-0">
      <div>
        <h1 className="font-semibold text-lg text-primary-700">Hi {user?.firstName}</h1>
      </div>

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
          <button
            onClick={handleLogOut}
            className="w-full block bg-primary-900 text-white items-center py-2.5 rounded-md"
          >
            Log out
          </button>
        )}
      </div>

      <AuthDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenChange={handleOpenChange}
        type={type}
        setType={setType}
      />
    </div>
  );
};

export default Menucontent;
