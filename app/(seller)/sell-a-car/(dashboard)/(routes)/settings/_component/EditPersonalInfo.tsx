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
import { useStore } from '@/store/useStore';
import { useToast } from '@/hooks/use-toast';
import { Profile } from '@/types/types';
import { useForm } from 'react-hook-form';
import { useEditProfile } from '@/app/(seller)/api/user';

const EditPersonalInfo = ({
  editPersonalInfoModal,
  setEditPersonalInfoModal,
}: {
  editPersonalInfoModal: boolean;
  setEditPersonalInfoModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { seller, setSeller, sellerProfile, setSellerProfile } = useStore();
  const { toast } = useToast();
  // const [loading, setLoading] = useState(true);

  const { register, reset, handleSubmit } = useForm<Profile>({
    defaultValues: {
      firstName: seller?.firstName,
      lastName: seller?.lastName,
      phoneNumber: sellerProfile?.phoneNumber,
      email: seller?.email,
      additionalPhoneNumber: sellerProfile?.additionalPhoneNumber,
      additionalInformation: sellerProfile?.additionalInformation,
    },
  });

  useEffect(() => {
    if (sellerProfile) {
      reset({
        firstName: seller?.firstName,
        lastName: seller?.lastName,
        phoneNumber: sellerProfile?.phoneNumber,
        email: seller?.email,
        additionalPhoneNumber: sellerProfile?.additionalPhoneNumber,
        additionalInformation: sellerProfile?.additionalInformation,
      });
    }
  }, []);

  const { editUserProfile } = useEditProfile();

  // useEffect(() => {
  //   setLoading(isPending);
  // }, []);

  // if (loading || isLoading) {
  //   return <ProfileSettingsSkeleton />;
  // }

  const handleOnSubmit = async (data: Profile) => {
    console.log(data);
    try {
      const response = await editUserProfile(data);
      setSeller(response.data.user);
      setSellerProfile(response.data.profile);
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
        <div className="w-full h-full mt-4 pl-1">
          <SheetHeader className="mb-4">
            <SheetTitle className="-mt-7 mb-4 text-2xl text-black">
              Edit Personal Information
            </SheetTitle>
            <SheetDescription className="text-black ">
              Update your sellerProfile, contact details and preferences to personalize your
              experience.
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
                    First name
                  </label>

                  <input
                    type="text"
                    id="fullname"
                    {...register('firstName')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="lastname" className="block text-xs font-medium text-gray-700">
                    Last name
                  </label>

                  <input
                    type="text"
                    id="lastname"
                    {...register('lastName')}
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
                    {...register('email')}
                    id="email"
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
                    id="phonenumber2"
                    {...register('additionalPhoneNumber')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              {/* <section className="">
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
              </section> */}

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

export default EditPersonalInfo;
