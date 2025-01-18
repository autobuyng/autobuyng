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

  const { seller, sellerProfile, sellerAddress } = useStore();
  const { data } = useGetAllBankDetials();
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
