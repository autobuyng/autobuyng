'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next-nprogress-bar';

import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import Autobuy from '@/app/assets/Autobuy.svg';
import MobileLogo from '../../public/icons/buyer.svg';

import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Menucontent from '../Menucontent/Menucontent';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import useIsMobile from '@/hooks/useIsMobile';

import AuthDialog from '@/app/auth';
import { useStore } from '@/store/useStore';

const Navbar = () => {
  // const [, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');

  const [showPopover, setShowPopover] = useState(false);
  const router = useRouter();
  const { isMobile } = useIsMobile();
  const { user } = useStore();

  // const { getUser } = useGetUser();
  const handleOpenChange = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    setIsOpen(true);
    setType('signin');
  };

  // useEffect(() => {
  //   setLoading(isLoading);
  // }, []);
  // const getUserData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const token = urlParams.get('token');

  //     if (token) {
  //       setSessionItem('accessToken', decodeURIComponent(token));
  //     }

  //     // Fetch user data only once
  //     const response = await getUser();
  //     const { user, profile, addresses } = response.data;

  //     // Set state
  //     setUser(user);
  //     setProfile(profile);
  //     setAddress(addresses);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   getUserData();
  // }, []);

  const NAV_ITEMS = [
    {
      id: '1',
      text: 'Buy a vehicle',
      path: '/',
    },
    {
      id: '2',
      text: 'Sell a Vehicle',
      path: '/sell-a-car',
    },
    {
      id: '3',
      text: 'About Us',
      path: '/about-us',
    },
  ];

  return (
    <header className="h-[60px] w-full flex items-center sticky top-0 left-0 z-50 bg-white shadow-sm">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-8 relative h-8 w-8  md:w-32 md:h-16">
            <Image
              src={isMobile ? MobileLogo : Autobuy}
              alt="Autobuy"
              // width={168}
              // height={56}
              fill
              priority
              className="cursor-pointer w-full h-full"
              onClick={() => router.push('/')}
            />
          </div>

          <div className="hidden md:flex items-center justify-between gap-8">
            {NAV_ITEMS.map(({ id, text, path }) => {
              const isSellPath = path === '/sell-a-car';

              return (
                <span key={id}>
                  <Link
                    className="text-[14px]"
                    target={isSellPath ? '_blank' : '_self'}
                    href={path}
                  >
                    {text}
                  </Link>
                </span>
              );
            })}
          </div>

          <div>
            {user ? (
              <div className="flex items-center justify-center gap-2">
                <p className="hidden md:block">Hi {user.firstName}</p>

                <div className=" relative flex items-center">
                  {isMobile && (
                    <Sheet open={showPopover} onOpenChange={setShowPopover}>
                      <SheetTrigger>
                        <p className="flex items-center gap-1.5 rounded-[80px] border border-primary-700 px-1 py-1 ">
                          <Menu onClick={() => setShowPopover(true)} className="text-primary-900" />
                        </p>
                      </SheetTrigger>
                      <SheetContent className="max-w-[80%]">
                        <Menucontent setShowPopover={setShowPopover} />
                      </SheetContent>
                    </Sheet>
                  )}

                  {!isMobile && (
                    <Popover open={showPopover} onOpenChange={setShowPopover}>
                      <PopoverTrigger>
                        <p className="flex items-center gap-1.5  px-1 py-1 ">
                          <Menu onClick={() => setShowPopover(true)} className="text-primary-900" />
                        </p>
                      </PopoverTrigger>
                      <PopoverContent
                        onMouseLeave={() => setIsOpen(false)}
                        className="max-w-[250px] mr-4 "
                      >
                        <Menucontent setShowPopover={setShowPopover} />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              </div>
            ) : (
              <>
                {isMobile && (
                  <Sheet open={showPopover} onOpenChange={setShowPopover}>
                    <SheetTrigger>
                      <p className="flex items-center gap-1.5 rounded-[80px] border border-primary-700 px-1 py-1 ">
                        <Menu onClick={() => setShowPopover(true)} className="text-primary-900" />
                      </p>
                    </SheetTrigger>
                    <SheetContent>
                      <Menucontent setShowPopover={setShowPopover} />
                    </SheetContent>
                  </Sheet>
                )}

                {!isMobile && (
                  <div className="flex gap-8">
                    <button onClick={handleLoginClick} className="text-primary-700 text-[14px]">
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setType('signup');
                        setIsOpen(true);
                      }}
                      className="w-[140px] h-[42px] text-white bg-primary-900 rounded-[8px] text-[14px]"
                    >
                      Create Account
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </nav>

        <AuthDialog
          isOpen={isOpen}
          handleOpenChange={handleOpenChange}
          type={type}
          setType={setType}
          setIsOpen={setIsOpen}
        />
      </MaxWidthWrapper>
    </header>
  );
};

// export default Navbar;

// const NavbarSuspenseWrapper = () => (
//   <Suspense fallback={<p>Loading...</p>}>
//     <Navbar />
//   </Suspense>
// );

export default Navbar;
