'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { useStore } from '@/store/useStore';
import type { Address } from '@/types/types';
import {
  useAddAddress,
  useDeleteAddress,
  useSetActiveAddress,
  useUpdateAddAddress,
} from '@/app/(buyer)/api/user';
import AddressListSkeleton from '@/LoadingSkeleton/AddressSkeleton';
import { useGetUser } from '@/app/(buyer)/api/auth';

type ShowAddressProps = {
  data: Address;
  index: number;
};
const Address = () => {
  const { user, setUser, setProfile, isLoading, address: Addresses, setAddress } = useStore();
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [isActiveAddress, setIsActiveAddress] = useState(true);

  console.log(loading, isLoading, 'loading');
  const [addressFields, setAddressFields] = useState<Address>({
    city: '',
    region: '',
    address: '',
  });
  const { addAddress, isPending: Adding } = useAddAddress();
  const { getUser } = useGetUser();
  const { updateAddress } = useUpdateAddAddress();
  const { deleteAddress } = useDeleteAddress();
  const { setActiveAddress, isPending } = useSetActiveAddress();
  const { register, handleSubmit } = useForm<Address>({});

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

  const handleSubmitForm = async (data: Address) => {
    try {
      const response = await addAddress(data);
      await updateUserData();
      console.log(response, 'add address');
    } catch (error) {
      console.log(error);
    }
    // setAddressFields(data);
    setIsAdding(false);
    setIsEditing(false);
  };

  useEffect(() => {
    setLoading(isLoading);
  }, []);
  const handleUpdateAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await updateAddress({ values: addressFields, id: addressFields._id! });
      await updateUserData();
      console.log(response, 'update address');
      setEditingIndex(-1);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteAddress = async (e: React.MouseEvent<HTMLElement>, data: { id: string }) => {
    e.preventDefault();
    try {
      const response = await deleteAddress({ id: data.id });
      await updateUserData();
      console.log(response, 'update address');
      setEditingIndex(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetActiveAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    const address = Addresses?.find((address) => address._id === addressFields._id);
    if (!address) return;
    address.isActive = true;

    try {
      const response = await setActiveAddress({ id: addressFields._id! });
      await updateUserData();
      console.log(response, 'update address');
    } catch (error) {
      console.error(error);
      address.isActive = false;
    }
  };

  const handleViewDetails = (index: number, id: string) => {
    setAddressFields({
      city: '',
      region: '',
      address: '',
    });
    setEditingIndex(index);
    const address = Addresses?.find((address) => address._id === id);
    if (address) {
      setAddressFields(address);
    }
  };

  if (loading || isLoading) {
    return <AddressListSkeleton />;
  }

  const ShowAddress = ({ data, index }: ShowAddressProps) => {
    return (
      <div className="border-[1.5px] border-primary-700 rounded-sm p-2.5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-medium ">{`${user?.firstName} ${user?.lastName}`}</h1>
            <p className="">{`${data.address} ${''}`}</p>
          </div>

          <div className="flex items-center gap-2">
            <span
              onClick={() => handleViewDetails(index, data._id as string)}
              className="text-sm cursor-pointer"
            >
              Edit
            </span>
            <span
              onClick={(e) => handleDeleteAddress(e, { id: data._id! })}
              className="text-sm cursor-pointer"
            >
              Delete
            </span>
          </div>
        </div>
        {data.isActive && (
          <p className="text-sm bg-primary-700 text-white rounded-sm w-fit px-2 py-1 mt-1.5">
            Default Address
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-sm px-4 py-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-[600] uppercase py-1.5">Your Address</h1>

        {!isAdding && !isEditing && (
          <p
            onClick={() => setIsActiveAddress(!isActiveAddress)}
            className="text-primary-700 flex cursor-pointer  items-center"
          >
            <span className="text-sm">Change</span>

            {isActiveAddress ? <ChevronDown /> : <ChevronUp />}
          </p>
        )}
      </div>

      <div>
        {Addresses?.length === 0 && (
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-red-500"></p>
            <button onClick={() => setIsAdding(true)} className="text-sm">
              Add
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {Addresses?.map((data, index) => {
          return (
            <React.Fragment key={data._id}>
              {editingIndex != index ? (
                <div>
                  {isActiveAddress && data.isActive && <ShowAddress data={data} index={index} />}
                  {!isActiveAddress && <ShowAddress data={data} index={index} />}
                </div>
              ) : (
                <div className="w-full mt-4">
                  <form action="" className="w-full">
                    <div className="w-full space-y-4">
                      <section className="flex items-center gap-4 w-full">
                        <div className="w-full  ">
                          <label
                            htmlFor="firstname"
                            className="block  text-xs font-medium text-gray-700"
                          >
                            Firstname
                          </label>

                          <input
                            type="text"
                            id="firstname"
                            defaultValue={user?.firstName}
                            // {...register('firstname')}
                            placeholder=""
                            className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                          />
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="lastname"
                            className="block text-xs font-medium text-gray-700"
                          >
                            Lastname
                          </label>

                          <input
                            type="text"
                            id="lastname"
                            defaultValue={user?.lastName}
                            // {...register('lastname')}
                            placeholder=""
                            className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
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
                            defaultValue={addressFields?.region}
                            onChange={(e) =>
                              setAddressFields({ ...addressFields, region: e.target.value })
                            }
                            // {...register('region')}
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
                            defaultValue={addressFields?.city}
                            onChange={(e) =>
                              setAddressFields({ ...addressFields, city: e.target.value })
                            }
                            // {...register('city')}
                            placeholder=""
                            className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                          />
                        </div>
                      </section>

                      <section className="flex items-center gap-4 w-full">
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
                            defaultValue={addressFields?.address}
                            // {...register('address')}
                            onChange={(e) =>
                              setAddressFields({ ...addressFields, address: e.target.value })
                            }
                            placeholder=""
                            className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                          />
                        </div>
                      </section>

                      <div>
                        <div className="flex items-center pt-1.5 pb-2.5 gap-4">
                          <input
                            type="checkbox"
                            onChange={handleSetActiveAddress}
                            disabled={isPending}
                            checked={addressFields?.isActive}
                          />
                          <p>Set as Default Address</p>
                        </div>

                        <div className="flex items-center justify-end gap-4">
                          <button
                            onClick={() => setEditingIndex(-1)}
                            className="border border-primary-700 text-primary-700 rounded-sm text-center px-4 py-2"
                          >
                            Cancel
                          </button>

                          <button
                            onClick={handleUpdateAddress}
                            className="bg-primary-700 text-white rounded-sm text-center px-4 py-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </React.Fragment>
          );
        })}
        <p className="text-primary-700 flex mt-2 gap-1 cursor-pointer">
          <Plus />
          <span onClick={() => setIsAdding(true)}>Add New address</span>
        </p>
      </div>

      {isAdding && (
        <div className="w-full mt-4">
          <form action="" onSubmit={handleSubmit(handleSubmitForm)} className="w-full">
            <div className="w-full space-y-4">
              <section className="flex items-center gap-4 w-full">
                <div className="w-full  ">
                  <label htmlFor="firstname" className="block  text-xs font-medium text-gray-700">
                    Firstname
                  </label>

                  <input
                    type="text"
                    id="firstname"
                    value={user?.firstName}
                    // {...register('firstname')}
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
                    value={user?.lastName}
                    // {...register('lastname')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
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
                    {...register('region')}
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
                    {...register('city')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <section className="flex items-center gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="deliveryAddress"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    id="Address"
                    {...register('address')}
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                  />
                </div>
              </section>

              <div>
                <div className="flex items-center justify-end gap-4">
                  <button
                    onClick={() => setIsAdding(false)}
                    className="border border-primary-700 text-primary-700 rounded-sm text-center px-4 py-2 cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-primary-700 text-white rounded-sm text-center px-4 py-2 cursor-pointer"
                  >
                    {Adding ? 'Adding...' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default Address;
