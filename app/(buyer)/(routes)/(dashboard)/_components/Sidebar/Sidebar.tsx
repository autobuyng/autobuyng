import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Messages from '../../assets/messages.svg';
import Orders from '../../assets/orders.svg';
import Saved from '../../assets/saved.svg';
import Settings from '../../assets/settings.svg';
import Support from '../../assets/support.svg';
import Logout from '../../assets/logout.svg';
import { SIDEBAR_ITEMS_TYPES } from '@/types/types';

const Sidebar = () => {
  const SIDEBAR_ITEMS: SIDEBAR_ITEMS_TYPES = [
    { id: '1', text: 'orders', path: '/orders', Icon: Orders },
    { id: '2', text: 'message', path: '/messages', Icon: Messages },
    { id: '3', text: 'saved', path: '/saved', Icon: Saved },
    { id: '4', text: 'settings', path: '/settings', Icon: Settings },
    { id: '5', text: 'support', path: '/support', Icon: Support },
  ];

  return (
    <main className="w-[270px]  min-h-screen hidden md:block border-r border-neutral-100  ">
      <div className="flex flex-col gap-4 mt-4 mx-2  ">
        {SIDEBAR_ITEMS.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.path}
              className="flex items-center py-2  pl-5 xl:pl-9 gap-3 hover:bg-neutral-200 w-full"
            >
              <Image src={item.Icon} alt={item.id} />
              <span className="capitalize font-medium">{item.text}</span>
            </Link>
          );
        })}
      </div>

      <div className="w-[90%] mx-2 mt-20">
        <button className="flex items-center w-44 rounded-[50px] py-2 px-4 justify-center bg-primary-700 text-white">
          <Image src={Logout} alt="Logout" />
          <span>Log out</span>
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
