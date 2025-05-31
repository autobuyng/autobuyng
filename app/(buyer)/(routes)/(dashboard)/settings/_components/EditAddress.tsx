'use client';
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
import { useStore } from '@/store/useStore';
import { useAddAddress, useDeleteAddress, useSetActiveAddress } from '@/app/(buyer)/api/user';
import { useGetUser } from '@/app/(buyer)/api/auth';
import { useForm } from 'react-hook-form';
import { Address } from '@/types/types';
import { useToast } from '@/hooks/use-toast';
import Edit from '@/app/(seller)/sell-a-car/(dashboard)/(routes)/settings/assets/edit.svg';
import Image from 'next/image';
import { Loader2, Trash2 } from 'lucide-react';

const EditAddress = ({
  editAddressModal,
  setEditAddressModal,
}: {
  editAddressModal: boolean;
  setEditAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { toast } = useToast();
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const { register, handleSubmit, reset } = useForm<Address>();
  const { address, setUser, setProfile, setAddress } = useStore();
  const { setActiveAddress } = useSetActiveAddress();
  const { addAddress, isPending } = useAddAddress();
  const { deleteAddress, isDeleting } = useDeleteAddress();

  const { getUser } = useGetUser();

  const updateUserData = async () => {
    try {
      const response1 = await getUser();

      setUser(response1.data.user);
      setProfile(response1.data.profile);
      setAddress(response1.data.addresses);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAddress = async (e: React.MouseEvent<SVGSVGElement>, data: { id: string }) => {
    e.preventDefault();
    try {
      await deleteAddress({ id: data.id });
      await updateUserData();
      setDeleteIndex(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitForm = async (data: Address) => {
    try {
      await addAddress(data);
      await updateUserData();
      reset();
    } catch (error: any) {
      const errorMessage = Array.isArray(error?.message)
        ? error.message.join(', ')
        : error?.message || 'An unexpected error occurred';

      toast({
        variant: 'destructive',
        description: errorMessage,
      });
      console.log(error);
    }
    // setAddressFields(data);
  };

  const handleSetActiveAddress = async (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();

    const activeAddress = address?.find((address) => address.isActive);

    if (activeAddress) {
      activeAddress.isActive = false;
    }

    const addressTosetActive = address?.find((address) => address._id === id);
    if (!addressTosetActive) return;
    addressTosetActive.isActive = true;

    try {
      await setActiveAddress({ id });
      await updateUserData();
    } catch (error) {
      console.error(error);
      addressTosetActive.isActive = false;

      if (activeAddress) {
        activeAddress.isActive = true;
      }
    }
  };

  return (
    <Sheet open={editAddressModal} onOpenChange={setEditAddressModal}>
      {/* <SheetTrigger asChild>
        <button>Open</button>
      </SheetTrigger> */}
      <SheetContent className='sm:max-w-[528px] h-screen overflow-auto w-full">'>
        <div className="w-full  mt-4">
          <SheetHeader className="mb-2">
            <SheetTitle className="-mt-7 mb-4 text-2xl text-black">Edit Address</SheetTitle>
            <SheetDescription className="text-black ">
              Update your profile, contact details and preferences to personalize your experience.
            </SheetDescription>
          </SheetHeader>

          <section className="space-y-4 h-full mb-3">
            {address?.map((address, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    'flex items-center justify-  border border-neutral-100 rounded-md mt-4 px-4 py-2',
                    {
                      'outline outline-[4px]  outline-[#0382c8]/25': address.isActive,
                    },
                  )}
                >
                  <div
                    onClick={(e) => handleSetActiveAddress(e, address._id as string)}
                    className={cn(
                      'h-8 w-8 border  border-neutral-300 rounded-full cursor-pointer',
                      {
                        ' border-8 border-primary-700': address.isActive,
                      },
                    )}
                  ></div>
                  <p className="w-full text-sm flex-1 items-center">{`${address.address} ${address.city} ${address.region}`}</p>
                  <div className="flex  justify-between items-center gap-2">
                    <Image
                      src={Edit}
                      width={20}
                      height={20}
                      alt="edit"
                      className="cursor-pointer"
                    />
                    {isDeleting && index === deleteIndex ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <Trash2
                        onClick={(e) => {
                          handleDeleteAddress(e, { id: address._id! });
                          setDeleteIndex(index);
                        }}
                        size={20}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </section>

          <Separator />

          <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full space-y-4 mt-4">
            <h1 className="font-bold text-2xl">Add New Address</h1>
            <div className="w-full space-y-4">
              <section className="flex items-center gap-4 w-full">
                <div className="w-full  ">
                  <label htmlFor="address" className="block  text-xs font-medium text-gray-700">
                    Address
                  </label>

                  <input
                    type="text"
                    id="address"
                    {...register('address')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                    City
                  </label>

                  <input
                    type="text"
                    id="city"
                    {...register('city')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex flex-col  gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="region" className="block text-xs font-medium text-gray-700">
                    Region
                  </label>

                  <input
                    type="text"
                    id="region"
                    {...register('region')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>
            </div>
            <SheetFooter className="w-full">
              <div className="w-full  ">
                <div className="flex items-center  gap-4 h-full w-full">
                  <SheetClose className="bg-neutral-300 px-4 py-2 rounded-sm ">Discard</SheetClose>

                  <button
                    type="submit"
                    className="bg-primary-700 w-full text-white rounded-sm text-center px-4 py-2"
                  >
                    {isPending ? 'Updating...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </SheetFooter>
          </form>
        </div>

        {/* <SheetFooter>
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default EditAddress;
