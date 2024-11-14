import React, { useState } from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';
import { BANK_LIST } from '@/lib/BankList';

const EditBankInfo = ({
  editBankInfoModal,
  setEditBankInfoModal,
}: {
  editBankInfoModal: boolean;
  setEditBankInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeChoice, setActiveChoice] = useState(1);
  return (
    <Sheet open={editBankInfoModal} onOpenChange={setEditBankInfoModal}>
      <SheetContent className='sm:max-w-[528px] h-screen overflow-auto w-full">'>
        <div className="w-full  mt-4">
          <SheetHeader className="mb-2">
            <SheetTitle className="-mt-7 mb-4 text-2xl text-black">
              Edit Bank Information
            </SheetTitle>
            <SheetDescription className="text-black ">
              Update your profile, contact details and preferences to personalize your experience.
            </SheetDescription>
          </SheetHeader>

          <section className="space-y-4 h-full mb-3">
            <div
              className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-2', {
                'outline outline-[4px]  outline-[#0382c8]/25 border-secondary-500':
                  activeChoice === 1,
              })}
            >
              <div
                onClick={() => setActiveChoice(1)}
                className={cn(
                  'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                  {
                    ' border-8 border-secondary-500': activeChoice === 1,
                  },
                )}
              ></div>
              <div className="w-full text-sm flex items-center">
                <div>
                  <h1 className="font-semibold">GUARANTEE TRUST BANK (GTB)</h1>
                  <p className="text-neutral-700">0098122563</p>
                  <p className="text-neutral-700 capitalize">jonathan mandingo</p>
                </div>
              </div>
            </div>

            <div
              className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-2', {
                'outline outline-[4px]  outline-[#0382c8]/25 border-secondary-500':
                  activeChoice === 2,
              })}
            >
              <div
                onClick={() => setActiveChoice(2)}
                className={cn(
                  'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                  {
                    ' border-8 border-secondary-500': activeChoice === 2,
                  },
                )}
              ></div>
              <div className="w-full text-sm flex items-center">
                <div>
                  <h1 className="font-semibold">GUARANTEE TRUST BANK (GTB)</h1>
                  <p className="text-neutral-700">0098122563</p>
                  <p className="text-neutral-700 capitalize">jonathan mandingo</p>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          <form action="" className="w-full space-y-4 mt-4">
            <h1 className="font-bold text-2xl">Add New Account</h1>
            <div className="w-full space-y-4">
              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="accountnumber"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Account Number
                  </label>

                  <input
                    type="text"
                    id="accountnumber"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="accountname" className="block text-xs font-medium text-gray-700">
                    Account Name
                  </label>

                  <input
                    type="text"
                    id="accountname"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex flex-col  gap-4 w-full">
                <div className="w-full  ">
                  <label htmlFor="accountname" className="block text-xs font-medium text-gray-700">
                    Bank Name
                  </label>
                  <select
                    id="bank_name"
                    className="w-full px-1  outline-none border  border-neutral-700 sm:px-5 py-2 mb-3   rounded"
                  >
                    <option value="" disabled selected>
                      Select Bank Name
                    </option>
                    {BANK_LIST.map((bank) => (
                      <option key={bank.bankCode} value={bank.bankName}>
                        {bank.bankName}
                      </option>
                    ))}
                  </select>
                </div>
              </section>
            </div>
            <SheetFooter className="w-full">
              <div className="w-full  ">
                <div className="flex items-center  gap-4 h-full w-full">
                  <SheetClose className="bg-neutral-300 px-4 py-2 rounded-sm ">Discard</SheetClose>

                  <button
                    type="submit"
                    className="bg-secondary-700 w-full text-white rounded-sm text-center px-4 py-2"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </SheetFooter>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditBankInfo;
