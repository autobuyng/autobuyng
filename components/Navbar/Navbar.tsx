'use client';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';

import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Menucontent from '../Menucontent/Menucontent';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import useIsMobile from '@/hooks/useIsMobile';

import AuthDialog from '@/app/auth';
import { AppContext } from '@/context/AppContext';
import { useGetUser } from '@/app/(buyer)/api/auth';
// import { useGetAuthenticatedUser } from '@/app/(buyer)/api/auth';
// import { User } from '@/types/types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const router = useRouter();
  const { isMobile } = useIsMobile();
  const { user, setUser } = useContext(AppContext);
  // console.log(user, 'user');

  const { getUser } = useGetUser();

  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    setIsOpen(true);
    setType('signin');
  };

  const getUserData = async () => {
    try {
      const response = await getUser();
      setUser(response.data.user);
      console.log(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const NAV_ITEMS = [
    {
      id: '1',
      text: 'Buy a vehicle',
      path: '/',
    },
    {
      id: '2',
      text: 'Sell a Vehicle',
      path: '/sell-a-car',
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
              width={168}
              height={56}
              priority
              className="cursor-pointer"
              onClick={() => router.push('/')}
            />
          </div>

          <div className="hidden md:flex items-center justify-between gap-8">
            {NAV_ITEMS.map(({ id, text, path }) => {
              const isSellPath = path === '/sell-a-car';
              // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
              // const href = isSellPath
              //   ? `${baseUrl}` // Remove the leading slash when using baseUrl
              //   : `/${path}`; // Keep the leading slash for regular paths
              return (
                <span key={id}>
                  <Link
                    className="text-[14px]"
                    target={isSellPath ? '_blank' : '_self'}
                    href={path}
                  >
                    {text}
                  </Link>
                </span>
              );
            })}
          </div>

          <div>
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <p className="">Hi {user.firstName}</p>

                <div className=" relative flex items-center">
                  {isMobile && (
                    <Sheet>
                      <SheetTrigger>
                        <p className="flex items-center gap-1.5 rounded-[80px] border border-primary-700 px-1 py-1 ">
                          <Menu className="text-primary-900" />
                        </p>
                      </SheetTrigger>
                      <SheetContent>
                        <Menucontent />
                      </SheetContent>
                    </Sheet>
                  )}

                  {!isMobile && (
                    <Popover>
                      <PopoverTrigger>
                        <p className="flex items-center gap-1.5 rounded-[80px]  border-primary-700 px-1 py-1 ">
                          <Menu className="text-primary-900" />
                        </p>
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
                  onClick={() => {
                    setType('signup');
                    setIsOpen(true);
                  }}
                  className="w-[140px] h-[42px] text-white bg-primary-900 rounded-[8px] text-[14px]"
                >
                  Create Account
                </button>
              </div>
            )}
          </div>
        </nav>

        <AuthDialog
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          type={type}
          setType={setType}
          setIsOpen={setIsOpen}
        />

        {/* <SignIn
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          type={type}
          setType={setType}
          setIsOpen={setIsOpen}
        />
        <SignUp
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          type={type}
          setType={setType}
          setIsOpen={setIsOpen}
        />

        <Verification
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          type={type}
          setType={setType}
          setIsOpen={setIsOpen}
        /> */}
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
