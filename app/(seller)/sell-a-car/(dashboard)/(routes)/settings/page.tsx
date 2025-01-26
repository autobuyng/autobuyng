'use client';
import React, { useState } from 'react';
import EditAddress from './_component/EditAddress';
import EditPersonalInfo from './_component/EditPersonalInfo';
import EditBankInfo from './_component/EditBankInfo';
import { useStore } from '@/store/useStore';
import { useGetAllBankDetials } from '@/app/(seller)/api/user';

const Settings = () => {
  const [editPersonalInfoModal, setEditPersonalInfoModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  const [editBankInfoModal, setEditBankInfoModal] = useState(false);

  const { seller, sellerProfile, isSellerLoading, sellerAddress } = useStore();
  const { data } = useGetAllBankDetials();

  if (isSellerLoading) {
    return <ProfileSettingsSkeleton />;
  }

  return (
    <>
      <main className="mx-4 ">
        <div className="mt-4 mb-10">
          <h1 className=" font-[600] text-2xl my-4">Profile Settings</h1>

          <div className="space-y-4">
            <div className="border border-neutral-300 p-6 rounded-[9px]">
              <div className="flex items-center justify-between">
                <h1 className=" font-bold text-xl mb-4 ">Personal Information</h1>
                <span
                  onClick={() => setEditPersonalInfoModal(true)}
                  className=" cursor-pointer font-bold text-secondary-500"
                >
                  EDIT
                </span>
              </div>

              <div>
                <h1 className="font-semibold">{`${seller?.firstName} ${seller?.lastName}`}</h1>
                <p className="text-neutral-700">{seller?.email}</p>
                <p className="text-neutral-700">{sellerProfile?.phoneNumber}</p>
              </div>
            </div>

            <div className="border border-neutral-300 p-6 rounded-[9px]">
              <div className="flex items-center justify-between">
                <h1 className=" font-bold text-xl mb-4">Address Book</h1>
                <span
                  onClick={() => setEditAddressModal(true)}
                  className="cursor-pointer font-bold text-secondary-500"
                >
                  EDIT
                </span>
              </div>

              {sellerAddress?.map(
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

            <div>
              {data?.length === 0 && (
                <div className="flex items-center justify-between border border-neutral-300  rounded-[9px]  p-6">
                  <h1 className=" font-bold text-xl mb-4 ">Banking Information</h1>
                  <span
                    onClick={() => setEditBankInfoModal(true)}
                    className=" cursor-pointer font-bold text-secondary-500"
                  >
                    ADD
                  </span>
                </div>
              )}
              {(data ?? []).map((bank) => {
                if (bank.isActive) {
                  return (
                    <div key={bank._id} className="border border-neutral-300 p-6 rounded-[9px]">
                      <div className="flex items-center justify-between">
                        <h1 className=" font-bold text-xl mb-4 ">Banking Information</h1>
                        <span
                          onClick={() => setEditBankInfoModal(true)}
                          className=" cursor-pointer font-bold text-secondary-500"
                        >
                          EDIT
                        </span>
                      </div>

                      <div>
                        <h1 className="font-semibold">{bank.bankName}</h1>
                        <p className="text-neutral-700">{bank.accountNumber}</p>
                        <p className="text-neutral-700 uppercase">{bank.accountName}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="border border-neutral-300 p-6 rounded-[9px]">
              <h1 className=" font-bold text-xl mb-4">Secure your Account</h1>

              <div className="space-y-2 text-secondary-500">
                <h1 className="">Change your password</h1>
                <p className="">Forgot your password?</p>
              </div>
            </div>
          </div>
        </div>
        <EditAddress
          editAddressModal={editAddressModal}
          setEditAddressModal={setEditAddressModal}
        />
        <EditPersonalInfo
          editPersonalInfoModal={editPersonalInfoModal}
          setEditPersonalInfoModal={setEditPersonalInfoModal}
        />
        <EditBankInfo
          editBankInfoModal={editBankInfoModal}
          setEditBankInfoModal={setEditBankInfoModal}
        />
      </main>
    </>
  );
};

export default Settings;

const ProfileSettingsSkeleton = () => {
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