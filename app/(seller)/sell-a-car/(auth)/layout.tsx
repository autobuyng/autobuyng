import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Autobuy from '@/app/assets/Autobuy.svg';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-[76px] w-full flex  items-center sticky top-0 z-20 right-0 bg-white shadow-sm">
        <Link href="/sell-a-car" className="flex items-center gap-8 px-6">
          <Image
            src={Autobuy}
            alt="Autobuy"
            width={168}
            height={56}
            priority
            className="cursor-pointer"
          />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
