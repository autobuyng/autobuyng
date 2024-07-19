'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';
import Menu from '@/components/Navbar/assets/Menu.svg';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetDescription } from '@/components/ui/sheet';

import useIsMobile from '@/hooks/useIsMobile';
import Menucontent from '../Menucontent/Menucontent';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isMobile);

  const handleMenu = () => {
    setIsOpen(!isOpen);
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

          <div className="">
            {/* <div> */}
            <Image
              src={Menu}
              alt="Autobuy"
              className="pt-3"
              width={40}
              height={40}
              priority
              onClick={handleMenu}
            />
            {/* </div> */}
            <Sheet open={isMobile && isOpen} onOpenChange={handleMenu}>
              {/* <SheetTrigger>Open</SheetTrigger> */}
              <SheetContent>
                <SheetDescription>
                  <Menucontent />
                </SheetDescription>
              </SheetContent>
            </Sheet>

            <Popover open={!isMobile && isOpen}>
              <PopoverTrigger></PopoverTrigger>
              <PopoverContent>
                <Menucontent />
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
