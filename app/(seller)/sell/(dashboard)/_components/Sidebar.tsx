'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logout from '@/app/(buyer)/(routes)/(dashboard)/assets/logout.svg';
import {
  Dashboard,
  Messages,
  Settings,
  Support,
  Upload,
} from '@/app/(seller)/sell/(dashboard)/Icons/icon';
import { SIDEBAR_ITEMS_TYPES } from '@/types/types';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const SIDEBAR_ITEMS: SIDEBAR_ITEMS_TYPES = [
    { id: '1', text: 'Dashboard', path: 'dashboard', Icon: Dashboard },
    { id: '2', text: 'Message', path: 'messages', Icon: Messages },
    { id: '3', text: 'Upload', path: 'upload', Icon: Upload },
    { id: '4', text: 'settings', path: 'settings', Icon: Settings },
    { id: '5', text: 'support', path: 'support', Icon: Support },
  ];

  const pathname = usePathname();
  const currentPath = pathname.split('/');

  return (
    <main className="w-[270px] -z-10  sticky top-[76px] left-0 max-h-[calc(100vh_-_76px)] hidden md:flex flex-col  border-r border-neutral-100  ">
      <div className="flex flex-col h-full  gap-4 mt-4 mx-2  ">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.path === currentPath[currentPath.length - 1];
          return (
            <Link
              prefetch={true}
              key={item.id}
              href={item.path}
              className="flex items-center py-2  pl-5 xl:pl-9 gap-3 hover:bg-neutral-200 w-full"
            >
              <item.Icon classname={isActive ? '#E16045' : '#808080'} />
              <span className={cn('capitalize font-medium', { 'text-secondary-500': isActive })}>
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
