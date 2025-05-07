"use client";
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import { useGetAuthenticatedUser } from '../api/auth';
import { useStore } from '@/store/useStore';

const BuyerLayout = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setProfile, setAddress } = useStore();
  const { data, isLoading, error, isError } = useGetAuthenticatedUser();

  useEffect(() => {
    if (data) {
      const { user, profile, addresses } = data;
      setUser(user);
      setProfile(profile);
      setAddress(addresses);
    }
  }, [data, setUser, setProfile, setAddress]);

  if (isLoading) {
    return <div className="min-h-[90vh] font-bold text-2xl grid place-item-center">Loading...</div>;
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
