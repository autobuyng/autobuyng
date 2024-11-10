'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logout from '@/app/(buyer)/(routes)/(dashboard)/assets/logout.svg';
import {
  Dashboard,
  Settings,
  Support,
  Upload,
} from '@/app/(seller)/sell-a-car/(dashboard)/_components/Icons/icon';
import { SIDEBAR_ITEMS_TYPES } from '@/types/types';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const SIDEBAR_ITEMS: SIDEBAR_ITEMS_TYPES = [
    { id: '1', text: 'Dashboard', path: 'dashboard', Icon: Dashboard },
    // { id: '2', text: 'Message', path: 'messages', Icon: Messages },
    { id: '3', text: 'Upload', path: 'upload', Icon: Upload },
    { id: '4', text: 'settings', path: 'settings', Icon: Settings },
    { id: '5', text: 'support', path: 'support', Icon: Support },
  ];

  const pathname = usePathname();
  const currentPath = pathname.split('/');

  return (
    <main className="w-[270px]   sticky top-[76px] left-0 max-h-[calc(100vh_-_76px)] hidden lg:flex flex-col  border-r border-neutral-100  ">
      <div className="flex flex-col h-full  gap-4 mt-4 mx-2  ">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.path === currentPath[currentPath.length - 1];
          return (
            <Link
              prefetch={true}
              key={item.id}
              href={item.path}
              className={cn(
                `flex items-center py-2  pl-5 xl:pl-9 gap-3 hover:bg-secondary-700 w-full rounded-[8px]`,
                { 'bg-secondary-700': isActive },
              )}
            >
              <div
                className={cn(
                  'h-10 w-10 flex items-center justify-center rounded-[50%] bg-secondary-100',
                  { 'bg-white': isActive },
                )}
              >
                <item.Icon classname={'#E16045'} />
              </div>
              <span className={cn('capitalize font-medium', { 'text-white': isActive })}>
                {item.text}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="w-[90%] mx-2  mb-2">
        <button className="flex items-center w-44 rounded-[50px] py-2 px-4 justify-center bg-secondary-500 text-white">
          <Image src={Logout} alt="Logout" />
          <span>Log out</span>
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
