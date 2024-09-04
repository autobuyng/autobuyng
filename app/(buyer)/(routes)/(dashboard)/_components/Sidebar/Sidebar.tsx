import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Messages from '@/app/(buyer)/(routes)/(dashboard)/assets/messages.svg';
import Orders from '@/app/(buyer)/(routes)/(dashboard)/assets/orders.svg';
import Saved from '@/app/(buyer)/(routes)/(dashboard)/assets/saved.svg';
import Settings from '@/app/(buyer)/(routes)/(dashboard)/assets/settings.svg';
import Support from '@/app/(buyer)/(routes)/(dashboard)/assets/support.svg';
import Logout from '@/app/(buyer)/(routes)/(dashboard)/assets/logout.svg';

const Sidebar = () => {
  const SIDEBAR_ITEMS = [
    { id: '1', text: 'orders', path: '/orders', Icon: Orders },
    { id: '2', text: 'message', path: '/messages', Icon: Messages },
    { id: '3', text: 'saved', path: '/saved', Icon: Saved },
    { id: '4', text: 'settings', path: '/settings', Icon: Settings },
    { id: '5', text: 'support', path: '/support', Icon: Support },
  ];
  // max-h-[calc(100vh_-_76px)]
  return (
    <main className="w-[270px] z-50  sticky top-[76px] left-0 max-h-[calc(100vh_-_76px)] hidden md:flex flex-col  border-r border-neutral-100  ">
      <div className="flex flex-col h-full  gap-4 mt-4 mx-2  ">
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

      <div className="w-[90%] mx-2 relative ">
        <button className="bottom-0 flex items-center w-44 rounded-[50px] py-2 px-4 justify-center bg-primary-700 text-white">
          <Image src={Logout} alt="Logout" />
          <span>Log out</span>
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
