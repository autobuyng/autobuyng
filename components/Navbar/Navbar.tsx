'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';
import Profile from '@/components/Navbar/assets/Profile.svg';

import SignIn from '@/app/auth/SignIn/SignIn';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Menucontent from '../Menucontent/Menucontent';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import useIsMobile from '@/hooks/useIsMobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [, setType] = useState('signin');

  const router = useRouter();
  const { isMobile } = useIsMobile();

  const user = true;
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    setIsOpen(true);
    setType('signin');
  };

  const handleSignInClick = () => {
    setIsOpen(true);
    setType('signin');
  };

  const NAV_ITEMS = [
    {
      id: '1',
      text: 'Buy a vehicle',
      path: '/',
    },
    {
      id: '2',
      text: 'Sell a Vehicle',
      path: '/sell',
    },
    {
      id: '3',
      text: 'About Us',
      path: 'about-us',
    },
  ];

  return (
    <header className="h-[60px] w-full flex items-center sticky top-0 left-0 z-50 bg-white shadow-sm">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-8">
            <Image
              src={Autobuy}
              alt="Autobuy"
              width={77}
              height={56}
              priority
              className="cursor-pointer"
              onClick={() => router.push('/')}
            />
          </div>

          <div className="hidden md:flex items-center justify-between gap-8">
            {NAV_ITEMS.map(({ id, text, path }) => {
              const isSellPath = path === 'sell';
              const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
              const href = isSellPath ? `${baseUrl}/sell` : `/${path}`;
              return (
                <span key={id}>
                  <Link
                    className="text-primary-700 text-[14px]"
                    target={isSellPath ? '_blank' : '_self'}
                    href={href}
                  >
                    {text}
                  </Link>
                </span>
              );
            })}
          </div>

          <div>
            {user ? (
              <div className="flex items-center justify-center">
                <p className="text-primary-700">Hi Jonathan</p>
                <Image src={Profile} alt="Profile" />

                <div className=" relative flex items-center">
                  {isMobile && (
                    <Sheet>
                      <SheetTrigger>
                        <div className="flex items-center gap-1.5 rounded-[80px] border border-primary-700 px-1 py-1 hover:shadow-md">
                          <Menu className="text-primary-900" />
                        </div>
                      </SheetTrigger>
                      <SheetContent>
                        <Menucontent />
                      </SheetContent>
                    </Sheet>
                  )}

                  {!isMobile && (
                    <Popover>
                      <PopoverTrigger>
                        <div className="flex items-center gap-1.5 rounded-[80px]  border-primary-700 px-1 py-1 hover:shadow-md">
                          <Menu className="text-primary-900" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent
                        onMouseLeave={() => setIsOpen(false)}
                        className="max-w-[250px] mr-4 "
                      >
                        <Menucontent />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex gap-8">
                <button onClick={handleLoginClick} className="text-primary-700 text-[14px]">
                  Login
                </button>
                <button
                  onClick={handleSignInClick}
                  className="w-[140px] h-[42px] text-white bg-primary-900 rounded-[8px] text-[14px]"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </nav>

        <SignIn
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          type={'signin'}
          setType={setType}
        />
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
