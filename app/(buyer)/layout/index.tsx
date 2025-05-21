'use client';
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import { useGetAuthenticatedUser } from '../api/auth';
import { useStore } from '@/store/useStore';
import Image from 'next/image';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const BuyerLayout = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setProfile, setAddress } = useStore();
  const pathname = usePathname();
  const { toast } = useToast();
  const protectedRoutes = ['payment', 'create-order', 'orders', 'favorites', 'settings'];
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const { data, isLoading, isError } = useGetAuthenticatedUser();

  useEffect(() => {
    if (data) {
      const { user, profile, addresses } = data;
      setUser(user);
      setProfile(profile);
      setAddress(addresses);
    }

    if (token) {
      localStorage.setItem('accessToken', token);
    }
  }, [data, setUser, setProfile, setAddress, token]);

  if (isLoading) {
    return (
      <div className="min-h-screen h-full font-bold text-2xl flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <span className=" absolute  h-20 w-20 border-t-4 border-l-4 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 border-t-primary-900 border-l-primary-900 p-4 rounded-full animate-spin"></span>
          <Image
            src="/icons/buyer.svg"
            alt="buyer"
            width={40}
            height={40}
            className="mx-auto animate-scalePulse"
          />
        </div>
      </div>
    );
  }

  if (isError && protectedRoutes.includes(pathname.split('/')[1] as string)) {
    toast({
      variant: 'destructive',
      title: 'Unauthorized, redirecting....',
    });
    redirect(`${window.location.origin}/results/keyword=`);
  }

  return (
    <main>
      <Navbar />
      <main>{children}</main>
    </main>
  );
};

export default BuyerLayout;
