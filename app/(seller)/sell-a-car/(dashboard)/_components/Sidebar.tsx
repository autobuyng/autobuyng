'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logout from '@/app/(seller)/sell-a-car/(dashboard)/assets/logout.svg';

import {
  Dashboard,
  Settings,
  Support,
  Upload,
} from '@/app/(seller)/sell-a-car/(dashboard)/_components/Icons/icon';
import { SIDEBAR_ITEMS_TYPES } from '@/types/types';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Sidebar = () => {
  const router = useRouter();
  const { toast } = useToast();
  const SIDEBAR_ITEMS: SIDEBAR_ITEMS_TYPES = [
    { id: '1', text: 'Dashboard', path: 'dashboard', Icon: Dashboard },
    // { id: '2', text: 'Message', path: 'messages', Icon: Messages },
    { id: '3', text: 'Upload', path: 'upload', Icon: Upload },
    { id: '4', text: 'settings', path: 'settings', Icon: Settings },
    { id: '5', text: 'support', path: 'support', Icon: Support },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const pathname = usePathname();
  // const currentPath = pathname.split('/');

  const handleLogOut = () => {
    sessionStorage.clear();
    router.push('/sell-a-car/login');
    toast({
      title: 'Success',
      description: 'Logout successfully',
    });
  };

  return (
    <main className="w-[270px]   sticky top-[76px] left-0 max-h-[calc(100vh_-_76px)] hidden lg:flex flex-col  border-r border-neutral-100  ">
      <div className="flex flex-col h-full  gap-4 mt-4 mx-2  ">
        {SIDEBAR_ITEMS.map((item) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          const isActive = pathname.includes(item.path);

          return (
            <Link
              prefetch={true}
              key={item.id}
              href={`/sell-a-car/${item.path}`}
              className={cn('flex items-center py-2  pl-2 xl:pl-5 gap-3 rounded-md  w-full', {
                'bg-secondary-500 text-white': isActive,
              })}
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

      <div className=" mb-2 p-[10px] bg-gradient-to-r from-[#E6583D] to-[#AD2910] rounded-[10px]">
        <p className="text-xs text-white mb-3">
          Are you done? you can take your leave through button below!
        </p>
        <button
          onClick={handleLogOut}
          className="flex gap-2 items-center rounded-[6px] py-2 px-4 justify-center bg-white text-secondary-700"
        >
          <Image src={Logout} alt="Logout" />
          <span className="text-sm">LOG OUT</span>
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
