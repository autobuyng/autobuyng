'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

import Autobuy from '@/app/assets/Autobuy.svg';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import useIsMobile from '@/hooks/useIsMobile';
import useClickOutside from '@/hooks/useClickOutside';
import Menucontent from '@/app/(seller)/_components/MenuContent/MenuContent';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { useGetUser } from '@/app/(seller)/api/user';

const Navbar = ({ isFullWidth }: { isFullWidth?: boolean }) => {
  const { isMobile } = useIsMobile();
  const [, setIsOpen] = useState(false);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { seller, setSeller, setIsLoading, setSellerProfile, setSellerAddress } = useStore();

  const { getUser } = useGetUser();

  const getUserData = async () => {
    setIsLoading(true);
    try {
      const response = await getUser();
      if (response.status) {
        setSeller(response.data.user);
        setSellerProfile(response.data.profile);
        setSellerAddress(response.data.addresses);
      }
      console.log(response.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getUserData();
  }, []);

  const handleClosePopover = () => {
    setIsOpen(false);
  };

  useClickOutside(divRef, handleClosePopover);

  const NAV_ITEMS = [
    {
      id: '1',
      text: 'Buy a vehicle',
      path: '/',
    },
    {
      id: '2',
      text: 'sell a vehicle',
      path: '/sell-a-car',
    },

    {
      id: '3',
      text: 'About Us',
      path: 'about-us',
    },
  ];

  return (
    <header className="h-[76px] w-full flex bg-white items-center justify-center sticky top-0 z-20 right-0  shadow-sm">
      <div
        className={cn('max-w-[1244px] w-full h-full mx-auto px-4  md:px-6', {
          'max-w-full w-full h-full': isFullWidth,
        })}
      >
        <nav className="flex items-center mt-4  justify-between w-full ">
          <div className="flex items-center gap-8">
            <Image
              src={Autobuy}
              alt="Autobuy"
              width={168}
              height={56}
              priority
              className="cursor-pointer"
              onClick={() => router.push('/sell-a-car')}
            />
          </div>
          <div>
            {pathname === '/sell-a-car' ? (
              <div className="hidden md:flex items-center justify-between gap-8">
                {NAV_ITEMS.map(({ id, text, path }) => (
                  <span key={id}>
                    <Link target={path === '/' ? '_blank' : '_self'} href={path}>
                      {text}
                    </Link>
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            {pathname === '/sell-a-car' ? (
              <div>
                {seller ? (
                  <div className="flex items-center justify-center gap-2">
                    <p className="">Hi {seller.firstName}</p>
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
                  <div className="flex items-center gap-8">
                    <Link href="/sell-a-car/login" className=" text-[14px]">
                      Login
                    </Link>
                    <Link
                      href="/sell-a-car/signup"
                      className="w-[140px] h-[42px] text-white flex items-center justify-center bg-secondary-500 rounded-[8px] text-[14px]"
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-6">
                <Image
                  src="https://ik.imagekit.io/wy2wtykti/Autobuy/Frame%209273.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-[30px] sm:w-auto cursor-pointer"
                />
                <Image
                  src="https://ik.imagekit.io/wy2wtykti/Autobuy/notification.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-[30px] sm:w-auto cursor-pointer"
                />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
// {
//     "status": true,
//     "message": "Request Successful",
//     "data": {
//         "user": {
//             "_id": "677867b54e4d799fefc197ea",
//             "firstName": "Emmanuel",
//             "lastName": "Chima",
//             "email": "chima2472@gmail.com",
//             "role": "individual-seller",
//             "status": "active",
//             "createdAt": "2025-01-03T22:41:57.019Z",
//             "updatedAt": "2025-01-03T22:44:08.471Z",
//             "__v": 0,
//             "verifiedAt": "2025-01-03T22:44:08.470Z"
//         },
//         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzc4NjdiNTRlNGQ3OTlmZWZjMTk3ZWEiLCJyb2xlIjoiaW5kaXZpZHVhbC1zZWxsZXIiLCJpYXQiOjE3MzY5Nzg1ODQsImV4cCI6MTczNjk4NTc4NH0.wpkWRuzn8U1um2whw0wqv7bPyNjXLiJe_lThOVFvqEM",
//         "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzc4NjdiNTRlNGQ3OTlmZWZjMTk3ZWEiLCJpYXQiOjE3MzY5Nzg1ODQsImV4cCI6MTczODE4ODE4NH0.XE3DzHTXD1ttYie3C6vsfKL3yxdjhUubKmTw51WuJzw"
//     }
// }

// {
//     "status": true,
//     "message": "Request Successful",
//     "data": {
//         "user": {
//             "_id": "677867b54e4d799fefc197ea",
//             "firstName": "Emmanuel",
//             "lastName": "Chima",
//             "email": "chima2472@gmail.com",
//             "role": "individual-seller",
//             "status": "active",
//             "createdAt": "2025-01-03T22:41:57.019Z",
//             "updatedAt": "2025-01-03T22:44:08.471Z",
//             "__v": 0,
//             "verifiedAt": "2025-01-03T22:44:08.470Z"
//         },
//         "profile": {
//             "_id": "677867b54e4d799fefc197ec",
//             "userId": "677867b54e4d799fefc197ea",
//             "phoneNumber": "08138160644",
//             "createdAt": "2025-01-03T22:41:57.394Z",
//             "updatedAt": "2025-01-03T22:41:57.394Z",
//             "__v": 0
//         },
//         "addresses": []
//     }
// }
