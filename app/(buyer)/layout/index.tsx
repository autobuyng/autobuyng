'use client';
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { useGetAuthenticatedUser } from '../api/auth';
import { useStore } from '@/store/useStore';
import Image from 'next/image';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { removeLocalItem, setLocalItem } from '@/lib/localStorage';

const BuyerLayout = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setProfile, setAddress } = useStore();
  const pathname = usePathname();
  const { toast } = useToast();
  const protectedRoutes = ['payment', 'create-order', 'orders', 'favorites', 'settings'];
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [tokenProcessed, setTokenProcessed] = useState(false);
  const { data, isLoading, isError, userRefetch } = useGetAuthenticatedUser({
    enabled: true,
  });
  useEffect(() => {
    if (token && !tokenProcessed) {
      setLocalItem('accessToken', token);
      setTokenProcessed(true);
      userRefetch();
    }
  }, [token, tokenProcessed]);

  // const shouldFetchUser = !!token || tokenProcessed;
  // const { data, isLoading, isError, error, userRefetch } = useGetAuthenticatedUser({
  //   enabled: true,
  // });

  useEffect(() => {
    if (data) {
      const { user, profile, addresses } = data;
      setUser(user);
      setProfile(profile);
      setAddress(addresses);
    }
  }, [data, setUser, setProfile, setAddress]);

  // Handle authentication errors
  useEffect(() => {
    const currentRoute = pathname.split('/')[1] as string;
    const isProtectedRoute = protectedRoutes.includes(currentRoute);

    if (isError && isProtectedRoute) {
      toast({
        variant: 'destructive',
        title: 'Unauthorized, redirecting....',
      });
      removeLocalItem('accessToken');
      redirect(`${window.location.origin}/results/keyword=`);
    }
  }, [isError, pathname, protectedRoutes, toast]);


  if (isLoading) {
    return (
      <div className="min-h-screen h-full font-bold text-2xl flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <span className="absolute h-20 w-20 border-t-4 border-l-4 border-b-2 border-r-2 border-b-gray-200 border-r-gray-200 border-t-primary-900 border-l-primary-900 p-4 rounded-full animate-spin"></span>
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

  return (
    <main>
      <Navbar />
      <main>{children}</main>
    </main>
  );
};

export default BuyerLayout;
