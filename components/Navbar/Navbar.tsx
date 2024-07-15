import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';
import Menu from '@/components/Navbar/assets/Menu.svg';

const Navbar = () => {
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
    <header className="h-20 w-full flex items-center">
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
          <Image src={Menu} alt="Autobuy" width={40} height={40} priority />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
