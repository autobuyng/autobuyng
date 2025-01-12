'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Orders from '@/app/(buyer)/(routes)/(dashboard)/assets/orders.svg';
import Saved from '@/app/(buyer)/(routes)/(dashboard)/assets/saved.svg';
import Settings from '@/app/(buyer)/(routes)/(dashboard)/assets/settings.svg';
import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();
  const SIDEBAR_ITEMS = [
    { id: '1', text: 'orders', path: '/orders', Icon: Orders },
    { id: '2', text: 'favorites', path: '/favorites', Icon: Saved },
    // { id: '3', text: 'saved', path: '/saved', Icon: Saved },
    { id: '4', text: 'Profile settings', path: '/settings', Icon: Settings },
    // { id: '5', text: 'support', path: '/support', Icon: Support },
  ];
  return (
    <main className="w-[273px] h-[80vh] mt-3  hidden md:flex flex-col  ">
      <div className="flex flex-col h-full  gap-4   ">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.path === pathname;
          console.log(isActive, 'isActive');
          return (
            <Link
              key={item.id}
              href={item.path}
              className={cn(
                'flex items-center py-2  pl-5 xl:pl-6 gap-3 hover:bg-primary-100 w-full',
                {
                  'bg-primary-100 text-primary-500': isActive,
                },
              )}
            >
              <Image src={item.Icon} alt={item.id} />
              <span className="capitalize font-medium  ">{item.text}</span>
            </Link>
          );
        })}
      </div>

      <div className="w-[90%] mx-2 relative border-t border-neutral-300 pt-6">
        <button className="bottom-0 flex items-center w-44 rounded-[50px] py-2 px-4 justify-center gap-1.5 text-[#1A1A1A]">
          {/* <Image src={Logout} alt="Logout" /> */}
          <ArrowLeft />
          <span>Log out</span>
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
