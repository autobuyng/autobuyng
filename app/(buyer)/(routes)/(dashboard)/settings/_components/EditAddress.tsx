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

const EditAddress = ({
  editAddressModal,
  setEditAddressModal,
}: {
  editAddressModal: boolean;
  setEditAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeChoice, setActiveChoice] = useState(1);
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
            <div
              className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-2', {
                'outline outline-[4px]  outline-[#0382c8]/25': activeChoice === 1,
              })}
            >
              <div
                onClick={() => setActiveChoice(1)}
                className={cn(
                  'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                  {
                    ' border-8 border-primary-700': activeChoice === 1,
                  },
                )}
              ></div>
              <p className="w-full text-sm flex items-center">
                3517 W. Gray St. Utica, Pennsylvania 57867
              </p>
            </div>

            <div
              className={cn('flex gap-4 border border-neutral-100 rounded-md mt-4 px-4 py-2', {
                'outline outline-[4px]  outline-[#0382c8]/25': activeChoice === 2,
              })}
            >
              <div
                onClick={() => setActiveChoice(2)}
                className={cn(
                  'h-8 w-8 border  border-neutral-300 outline-8 rounded-[50%] cursor-pointer',
                  {
                    ' border-8 border-primary-700': activeChoice === 2,
                  },
                )}
              ></div>
              <p className="w-full text-sm flex items-center">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
          </section>

          <Separator />

          <form action="" className="w-full space-y-4 mt-4">
            <h1 className="font-bold text-2xl">Add New Address</h1>
            <div className="w-full space-y-4">
              <section className="flex items-center gap-4 w-full">
                <div className="w-full  ">
                  <label htmlFor="firstname" className="block  text-xs font-medium text-gray-700">
                    Firstname
                  </label>

                  <input
                    type="text"
                    id="firstname"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>

                {/* <div className="w-full">
                  <label htmlFor="lastname" className="block text-xs font-medium text-gray-700">
                    Lastname
                  </label>

                  <input
                    type="text"
                    id="lastname"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div> */}
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="phonenumber" className="block text-xs font-medium text-gray-700">
                    Phone number
                  </label>

                  <input
                    type="text"
                    id="phonenumber"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="phonenumber2" className="block text-xs font-medium text-gray-700">
                    Additional phone number
                  </label>

                  <input
                    type="text"
                    id="phonenumber2"
                    placeholder=""
                    className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex flex-col  gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="deliveryAddress"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Delivery Address
                  </label>

                  <input
                    type="text"
                    id="deliveryAddress"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="addionalInfo" className="block text-xs font-medium text-gray-700">
                    Additonal Information
                  </label>

                  <input
                    type="text"
                    id="additionalInformation"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="" className="block text-xs font-medium text-gray-700">
                    Region
                  </label>

                  <input
                    type="text"
                    id="region"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                    City
                  </label>

                  <input
                    type="text"
                    id="city"
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
                    Save Changes
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
