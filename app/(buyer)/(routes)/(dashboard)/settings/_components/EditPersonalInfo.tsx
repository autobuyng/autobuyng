'use client';
import React, { useEffect } from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useForm } from 'react-hook-form';
import { Profile } from '@/types/types';
import { useStore } from '@/store/useStore';
import { useEditProfile } from '@/app/(buyer)/api/user';
import { useToast } from '@/hooks/use-toast';

const EditPersonalInfo = ({
  editPersonalInfoModal,
  setEditPersonalInfoModal,
}: {
  editPersonalInfoModal: boolean;
  setEditPersonalInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user, profile, setUser, setProfile } = useStore();
  const { toast } = useToast();
  const { register, reset, handleSubmit } = useForm<Profile>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      phoneNumber: profile?.phoneNumber,
      email: user?.email,
      additionalPhoneNumber: profile?.additionalPhoneNumber,
      additionalInformation: profile?.additionalInformation,
    },
  });

  useEffect(() => {
    if (profile) {
      reset({
        firstName: user?.firstName,
        lastName: user?.lastName,
        phoneNumber: profile?.phoneNumber,
        email: user?.email,
        additionalPhoneNumber: profile?.additionalPhoneNumber,
        additionalInformation: profile?.additionalInformation,
      });
    }
  }, []);

  const { editUserProfile, isPending } = useEditProfile();

  const handleOnSubmit = async (data: Profile) => {
    console.log(data);
    try {
      const response = await editUserProfile(data);
      setUser(response.data.user);
      setProfile(response.data.profile);
      setEditPersonalInfoModal(false);

      toast({
        title: 'Profile updated successfully',
        description: 'Your profile has been updated successfully.',
        variant: 'success',
        position: 'top-right',
        duration: 3000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sheet open={editPersonalInfoModal} onOpenChange={setEditPersonalInfoModal}>
      <SheetContent className="h-screen sm:max-w-[528px]">
        <div className="w-full h-full mt-4">
          <SheetHeader className="mb-4">
            <SheetTitle className="-mt-7 mb-4 text-2xl text-black">
              Edit Personal Information
            </SheetTitle>
            <SheetDescription className="text-black ">
              Update your profile, contact details and preferences to personalize your experience.
            </SheetDescription>
          </SheetHeader>

          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="w-full h-[83%]  overflow-auto flex flex-col items-center justify-between"
          >
            <div className="w-full space-y-4 ">
              <section className="flex items-center gap-4 w-full">
                <div className="w-full  ">
                  <label htmlFor="firstname" className="block  text-xs font-medium text-gray-700">
                    Firstname
                  </label>

                  <input
                    type="text"
                    id="firstname"
                    {...register('firstName')}
                    disabled
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="lastname" className="block text-xs font-medium text-gray-700">
                    Lastname
                  </label>

                  <input
                    type="text"
                    id="lastname"
                    {...register('lastName')}
                    disabled
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    disabled
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label htmlFor="phonenumber" className="block text-xs font-medium text-gray-700">
                    Phone number
                  </label>

                  <input
                    type="text"
                    id="phonenumber"
                    {...register('phoneNumber')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="additionalPhoneNumber"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Additional phone number
                  </label>

                  <input
                    type="text"
                    id="additionalPhoneNumber"
                    {...register('additionalPhoneNumber')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="additionalInformation"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Additional Information
                  </label>

                  <input
                    type="text"
                    id="additionalInformation"
                    {...register('additionalInformation')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="" className="block text-xs font-medium text-gray-700">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    id="date"
                    placeholder=""
                    {...register('dob')}
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              {/* <section className="flex items-center gap-4 w-full">
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
              </section> */}
            </div>

            <SheetFooter className="w-full">
              <div className="w-full  ">
                <div className="flex items-center  gap-4 h-full w-full">
                  <SheetClose className="bg-neutral-300 px-4 py-2 rounded-sm ">Discard</SheetClose>

                  <button
                    type="submit"
                    className="bg-primary-700 w-full text-white rounded-sm text-center px-4 py-2"
                  >
                    {isPending ? 'Updating...' : 'Save changes'}
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

export default EditPersonalInfo;
