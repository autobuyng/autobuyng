'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import useIsMobile from '@/hooks/useIsMobile';
import useClickOutside from '@/hooks/useClickOutside';
import Menucontent from '@/app/(seller)/_components/MenuContent/MenuContent';

const Navbar = () => {
  const { isMobile } = useIsMobile();
  const [, setIsOpen] = useState(false);
  const router = useRouter();
  const user = false;
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
      text: 'sell a vehicle',
      path: '/sell',
    },

    {
      id: '3',
      text: 'About Us',
      path: 'about-us',
    },
  ];

  return (
    <header className="h-[76px] w-full flex  items-center sticky top-0 z-20 right-0 bg-white shadow-sm">
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
            {NAV_ITEMS.map(({ id, text, path }) => (
              <span key={id}>
                <Link
                  // target={path === '/sell' ? '_blank' : '_self'}
                  href={path}
                >
                  {text}
                </Link>
              </span>
            ))}
          </div>

          <div>
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <p className="">Hi Jonathan</p>
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
                <button className=" text-[14px]">Login</button>
                <Link
                  href="/sell-a-car/signup"
                  className="w-[140px] h-[42px] text-white flex items-center justify-center bg-secondary-500 rounded-[8px] text-[14px]"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
