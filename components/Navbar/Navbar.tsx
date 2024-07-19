'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';
import Menu from '@/components/Navbar/assets/Menu.svg';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent } from '@/components/ui/sheet';

import useIsMobile from '@/hooks/useIsMobile';
import Menucontent from '../Menucontent/Menucontent';
import Profile from './assets/Profile.svg';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    console.log(isOpen, 'before setting');
    setIsOpen(!isOpen);
  };
  console.log(isOpen, 'global');

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
    <header className="h-[76px] w-full flex items-center sticky top-0 left-0 z-50 bg-white shadow-sm">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between w-full  ">
          <div className="flex items-center gap-8  ">
            <Image src={Autobuy} alt="Autobuy" width={77} height={56} priority />
            <div className="hidden md:flex items-center justify-between gap-8">
              {NAV_ITEMS.map(({ id, text, path }) => (
                <span key={id}>
                  <Link
                    className="text-primary-700"
                    target={path === '/sell' ? '_blank' : '_self'}
                    href={path === '/sell' ? 'http://localhost:3000/sell' : `/${path}`}
                  >
                    {text}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className=" flex items-center">
            <div
              onClick={handleMenu}
              className="flex items-center gap-3 rounded-[80px] border border-primary-700 px-2 py-1 hover:shadow-md"
            >
              <Image src={Menu} alt="Autobuy" className="" width={40} height={40} priority />
              <Image src={Profile} alt="Profile" />
            </div>

            <div className="mt-8">
              <Sheet open={isMobile && isOpen} onOpenChange={handleMenu}>
                <SheetContent>
                  <Menucontent />
                </SheetContent>
              </Sheet>

              <Popover open={!isMobile && isOpen} onOpenChange={handleMenu}>
                <PopoverTrigger></PopoverTrigger>
                <PopoverContent>
                  <Menucontent />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
