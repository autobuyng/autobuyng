'use client';
import React, { useEffect, useState } from 'react';

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
import { useForm } from 'react-hook-form';
import { BankAccount, BankDetailsProps, } from '@/types/types';
import {
  useAddBankDetails,
  useDeleteBankDetails,
  useGetAllBankDetials,
  useSetActiveBank,
  useUpdateBankDetails,
} from '@/app/(seller)/api/user';
import Edit from '@/app/(seller)/sell-a-car/(dashboard)/(routes)/settings/assets/edit.svg';
import { Loader2, Trash2 } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';

const EditBankInfo = ({
  editBankInfoModal,
  setEditBankInfoModal,
}: {
  editBankInfoModal: boolean;
  setEditBankInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedBank, setSelectedBank] = useState<BankAccount | null>(null);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const { register, handleSubmit, setValue, getValues, watch, reset } = useForm<BankDetailsProps>({
    defaultValues: {
      accountName: '',
      accountNumber: '',
      bankName: '',
    },
  });



  useEffect(() => {
    if (selectedBank) {
      reset({
        accountName: selectedBank.accountName,
        accountNumber: selectedBank.accountNumber,
        bankName: selectedBank.bankName,
      });
    } else {
      reset({
        accountName: '',
        accountNumber: '',
        bankName: '',
      });
    }
  }, [selectedBank, reset]);


  useEffect(() => {

    const fetchBankDetails = async () => {


      const selectedBankName = getValues("bankName");
      if (!selectedBankName) return;


      const selected = BANK_LIST.find((bank) => bank.bankName === selectedBankName);
      console.log(selected, "selectedBank");

      if (selected) {
        setValue("bankCode", selected.bankCode);
        console.log("Bank Code Set:", selected.bankCode);
      }


      const bankCode = getValues("bankCode");
      const accountNumber = getValues("accountNumber")
      if (!bankCode || !accountNumber) return;

      try {
        const response: any = await axios.get(
          `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
          {
            headers: {
              Authorization: `Bearer sk_test_081b9aeac2d10c570a8eb0aef0e2a8ff4f61803f`,
            },
          }
        );
        // setBankDetails(response.data);
        setValue("accountName", response.data.data.account_name)
      } catch (err: any) {
        console.log("Error fetching bank details:", err.message);
      }
    };

    fetchBankDetails();
  }, [watch("bankName"), setValue, getValues]);


  const handleBankSelection = (bank: BankAccount) => {
    setSelectedBank(bank);
  };

  const { addBankDetails, isPending } = useAddBankDetails();
  const { updateBankDetais } = useUpdateBankDetails();
  const { data } = useGetAllBankDetials();
  const { setActiveBank } = useSetActiveBank();
  const { deleBankDetails, isDeleting } = useDeleteBankDetails();

  const handleAddBankDetails = async (data: BankDetailsProps) => {
    try {
      if (selectedBank) {
        await updateBankDetais({ values: data, id: selectedBank._id });
        reset();
        setSelectedBank(null);
      } else {
        await addBankDetails(data);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBank = async (id: string) => {
    // e.preventDefault();
    try {
      const response = await deleBankDetails({ id });
      console.log(response, 'update address');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetActiveBank = async (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();

    const activeBank = data?.find((bank) => bank.isActive);

    if (activeBank) {
      activeBank.isActive = false;
    }

    const bankTosetActive = data?.find((bank) => bank._id === id);
    if (!bankTosetActive) return;
    bankTosetActive.isActive = true;

    try {
      const response = await setActiveBank({ id });

      console.log(response, 'update address');
    } catch (error) {
      console.error(error);
      bankTosetActive.isActive = false;

      if (activeBank) {
        activeBank.isActive = true;
      }
    }
  };

  return (
    <Sheet open={editBankInfoModal} onOpenChange={setEditBankInfoModal}>
      <SheetContent className='sm:max-w-[528px] h-screen overflow-auto w-full">'>
        <div className="w-full  mt-4">
          <SheetHeader className="mb-2">
            <SheetTitle className="-mt-7 mb-4 text-2xl text-black">
              Edit Bank Information
            </SheetTitle>
            <SheetDescription className="text-black ">
              {selectedBank
                ? 'Update your bank account information.'
                : 'Add a new bank account or select an existing one to edit.'}
            </SheetDescription>
          </SheetHeader>

          <section className="space-y-4 h-full mb-3">
            {(data ?? []).map((bank: BankAccount, index) => (
              <div
                key={bank._id}
                className={cn(
                  'flex items-center justify-center  gap-4 border cursor-pointer border-neutral-100 rounded-md mt-4 px-4 py-2',
                  {
                    'outline outline-[4px]  outline-[#0382c8]/25 border-secondary-500':
                      bank.isActive,
                  },
                )}
              >
                <div
                  className={cn(
                    'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                    {
                      ' border-8 border-secondary-500': bank.isActive,
                    },
                  )}
                  onClick={(e) => handleSetActiveBank(e, bank._id as string)}
                ></div>
                <div className="w-full text-sm flex items-center">
                  <div>
                    <h1 className="font-semibold">{bank.bankName}</h1>
                    <p className="text-neutral-700">{bank.accountNumber}</p>
                    <p className="text-neutral-700 capitalize">{bank.accountName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    onClick={() => handleBankSelection(bank)}
                    src={Edit}
                    width={20}
                    height={20}
                    alt="edit"
                    className="cursor-pointer"
                  />
                  {isDeleting && index === deleteIndex ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <Trash2
                      onClick={() => {
                        handleDeleteBank(bank._id as string);
                        setDeleteIndex(index);
                      }}
                      size={30}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
            ))}
          </section>

          <Separator />

          <form onSubmit={handleSubmit(handleAddBankDetails)} className="w-full space-y-4 mt-4">
            <h1 className="font-bold text-2xl">
              {selectedBank ? 'Edit Account' : 'Add New Account'}
            </h1>
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
                    {...register('accountNumber')}
                    id="accountnumber"
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
                    {...register('bankName')}
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
                <input type="hidden" {...register("bankCode")} />
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="accountname" className="block text-xs font-medium text-gray-700">
                    Account Name
                  </label>

                  <input
                    type="text"
                    {...register('accountName')}
                    id="accountname"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>


            </div>
            <SheetFooter className="w-full">
              <div className="w-full  ">
                <div className="flex items-center  gap-4 h-full w-full">
                  <SheetClose
                    className="bg-neutral-300 px-4 py-2 rounded-sm "
                    onClick={() => {
                      setSelectedBank(null);
                      reset();
                    }}
                  >
                    Discard
                  </SheetClose>

                  <button
                    type="submit"
                    className="bg-secondary-700 w-full text-white rounded-sm text-center px-4 py-2"
                  >
                    {isPending ? 'Updating...' : 'Save Changes'}
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
