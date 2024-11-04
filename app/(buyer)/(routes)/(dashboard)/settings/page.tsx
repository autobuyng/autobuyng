'use client';
import React, { useState } from 'react';
import EditAddress from './_components/EditAddress';
import EditPersonalInfo from './_components/EditPersonalInfo';

const Settings = () => {
  const [editPersonalInfoModal, setEditPersonalInfoModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);
  return (
    <>
      <div className="mt-4 mb-10">
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
              <h1 className="font-semibold">Darlent Rebertson</h1>
              <p className="text-neutral-700">michelle.rivera@example.com</p>
              <p className="text-neutral-700">(684) 555-0102</p>
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

            <div className="space-y-4">
              <p className="text-[#1A1A1A] space-x-3">
                <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
                <span className="text-primary-700 ">Active</span>
              </p>
              <p className="text-neutral-500">4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
          </div>

          <div className="border border-neutral-300 p-6 rounded-[9px]">
            <h1 className=" font-bold text-xl mb-4">Secure your Account</h1>

            <div className="space-y-2 text-primary-700">
              <h1 className="">Change your password</h1>
              <p className="">Forgot your password?</p>
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
