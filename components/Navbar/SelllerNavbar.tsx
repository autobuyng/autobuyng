'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';
import Menu from '@/components/Navbar/assets/sellerMenu.svg';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import useIsMobile from '@/hooks/useIsMobile';
// import Menucontent from '../Menucontent/Menucontent';
import Profile from './assets/sellerProfile.svg';
import useClickOutside from '@/hooks/useClickOutside';
import Menucontent from '@/app/(seller)/_components/MenuContent/MenuContent';

const Navbar = () => {
  const { isMobile } = useIsMobile();
  const [, setIsOpen] = useState(false);
  const router = useRouter();

  const divRef = useRef<HTMLDivElement>(null);

  const handleClosePopover = () => {
    setIsOpen(false);
  };

  useClickOutside(divRef, handleClosePopover);

  const NAV_ITEMS = [
    {
      id: '1',
      text: 'Buy a vehicle',
      path: '/buy',
    },

    {
      id: '2',
      text: 'About Us',
      path: 'about-us',
    },
  ];

  return (
    <header className="h-[76px] w-full flex items-center sticky top-0 z-10 right-0 bg-white shadow-sm">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between w-full ">
          <div className="flex items-center justify-between gap-8 w-full  ">
            <Image
              src={Autobuy}
              alt="Autobuy"
              width={77}
              height={56}
              priority
              className="cursor-pointer"
              onClick={() => router.push('/')}
            />

            <div className="hidden md:flex items-center justify-between gap-8">
              {NAV_ITEMS.map(({ id, text, path }) => (
                <span key={id}>
                  <Link
                    className="text-secondary-700"
                    target={path === '/sell' ? '_blank' : '_self'}
                    href={
                      path === '/buy'
                        ? process.env.NODE_ENV === 'development'
                          ? `${process.env.DEV_BASE_URL}`
                          : `${process.env.HOME_BASE_URL}`
                        : `/${path}`
                    }
                  >
                    {text}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className=" relative flex items-center justify-end w-full">
            {isMobile && (
              <Sheet>
                <SheetTrigger>
                  <div className="flex items-center gap-3 rounded-[80px] border border-secondary-700 px-2 py-1 hover:shadow-md">
                    <Image src={Menu} alt="Autobuy" className="" width={40} height={40} priority />
                    <Image src={Profile} alt="Profile" />
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
                  <div className="flex items-center gap-3 rounded-[80px] border border-secondary-700 px-2 py-1 hover:shadow-md">
                    <Image src={Menu} alt="Autobuy" className="" width={40} height={40} priority />
                    <Image src={Profile} alt="Profile" />
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
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
