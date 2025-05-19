'use client';
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import { useGetAuthenticatedUser } from '../api/auth';
import { useStore } from '@/store/useStore';

const BuyerLayout = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setProfile, setAddress } = useStore();
  const { data, error, isLoading, isError } = useGetAuthenticatedUser();
  useEffect(() => {
    if (data) {
      const { user, profile, addresses } = data;
      setUser(user);
      setProfile(profile);
      setAddress(addresses);
    }
  }, [data, setUser, setProfile, setAddress]);

  if (isLoading) {
    return <div className="min-h-screen h-full font-bold text-2xl flex items-center justify-center">
      <h1>Loading...</h1>
    </div>
  }

  if (isError) {
    console.error(error);
  }

  return (
    <main>
      <Navbar />
      <main>{children}</main>
    </main>
  );
};

export default BuyerLayout;
