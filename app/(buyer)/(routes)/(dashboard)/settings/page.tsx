'use client';
import React, { useEffect, useState } from 'react';
import EditAddress from './_components/EditAddress';
import EditPersonalInfo from './_components/EditPersonalInfo';
import { useStore } from '@/store/useStore';
import Link from 'next/link';

const Settings = () => {
  const [editPersonalInfoModal, setEditPersonalInfoModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isLoading, user, profile, address } = useStore();

  useEffect(() => {
    setLoading(isLoading);
  }, []);

  if (loading || isLoading) {
    return <ProfileSettingsSkeleton />;
  }

  return (
    <>
      <div className=" mx-4 mt-4 mb-10">
        <h1 className=" font-[600] text-2xl my-4">Profile Settings</h1>

        <div className="space-y-4">
          <div className="border border-neutral-300 p-6 rounded-[9px]">
            <div className="flex items-center justify-between">
              <h1 className=" font-bold text-xl mb-4 ">Account Details</h1>
              <span
                onClick={() => setEditPersonalInfoModal(true)}
                className=" cursor-pointer font-bold text-primary-700"
              >
                EDIT
              </span>
            </div>

            <div>
              <h1 className="font-semibold">{`${user?.firstName} ${user?.lastName}`}</h1>
              <p className="text-neutral-700">{user?.email}</p>
              <p className="text-neutral-700">{profile?.phoneNumber}</p>
            </div>
          </div>

          <div className="border border-neutral-300 p-6 rounded-[9px]">
            <div className="flex items-center justify-between">
              <h1 className=" font-bold text-xl mb-4">Address Book</h1>
              <span
                onClick={() => setEditAddressModal(true)}
                className="cursor-pointer font-bold text-primary-700"
              >
                EDIT
              </span>
            </div>

            {address?.map(
              (address) =>
                address.isActive && (
                  <div key={address._id} className="space-y-4">
                    <p className="text-[#1A1A1A] space-x-3">
                      <span>{address.address} </span>
                      <span className="text-primary-700 ">Active</span>
                    </p>
                    <p className="text-neutral-500">{address.city}</p>
                  </div>
                ),
            )}
          </div>

          <div className="border border-neutral-300 p-6 rounded-[9px]">
            <h1 className=" font-bold text-xl mb-4">Secure your Account</h1>

            <div className="space-y-2 text-primary-700">
              <h1 className="">Change your password</h1>
              <Link href={'/forgot-password'} className="">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <EditAddress editAddressModal={editAddressModal} setEditAddressModal={setEditAddressModal} />
      <EditPersonalInfo
        editPersonalInfoModal={editPersonalInfoModal}
        setEditPersonalInfoModal={setEditPersonalInfoModal}
      />
    </>
  );
};

export default Settings;

export const ProfileSettingsSkeleton = () => {
  return (
    <div className="max-w-full mx-auto p-4 space-y-6">
      {/* Page Title */}
      <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-md" />

      {/* Account Details Section */}
      <div className="border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
          <div className="h-6 w-16 bg-blue-200 animate-pulse rounded-md" />
        </div>

        <div className="space-y-3">
          <div className="h-5 w-40 bg-gray-200 animate-pulse rounded-md" />
          <div className="h-5 w-56 bg-gray-200 animate-pulse rounded-md" />
          <div className="h-5 w-32 bg-gray-200 animate-pulse rounded-md" />
        </div>
      </div>

      {/* Address Book Section */}
      <div className="border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
          <div className="h-6 w-16 bg-blue-200 animate-pulse rounded-md" />
        </div>

        <div className="space-y-6">
          {/* First Address */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="h-5 w-64 bg-gray-200 animate-pulse rounded-md" />
              <div className="h-5 w-20 bg-blue-200 animate-pulse rounded-md" />
            </div>
          </div>

          {/* Second Address */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="h-5 w-72 bg-gray-200 animate-pulse rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Secure Account Section */}
      <div className="border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded-md" />
        </div>

        <div className="space-y-3">
          <div className="h-5 w-48 bg-blue-200 animate-pulse rounded-md" />
          <div className="h-5 w-44 bg-blue-200 animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
};
