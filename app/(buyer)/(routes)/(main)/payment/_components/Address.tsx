'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, Plus } from 'lucide-react';
import { useStore } from '@/store/useStore';
import type { Address } from '@/types/types';
import { useAddAddress } from '@/app/(buyer)/api/user';
import AddressListSkeleton from '@/LoadingSkeleton/AddressSkeleton';

const Address = () => {
  const { user, isLoading, address: Addresses } = useStore();
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  console.log(loading, isLoading, 'loading');
  const [address, setAddress] = useState<Address | null>({
    isActive: false,
    userId: '',
    city: '',
    region: '',
    address: '',
  });
  const { addAddress } = useAddAddress();
  // const { updateAddress } = useUpdateAddAddress();
  const { register, handleSubmit } = useForm<Address>({});
  const handleSubmitForm = async (data: Address) => {
    try {
      const response = await addAddress(data);
      console.log(response, 'add address');
    } catch (error) {
      console.log(error);
    }
    console.log(data, 'address');
    setAddress(data);
    setIsAdding(false);
    setIsEditing(false);
  };

  useEffect(() => {
    setLoading(isLoading);
  }, []);
  // const handleUpdateAddress = async (data: AddressProps, id:string) => {
  //   try {
  //     const response = await updateAddress({values:data,id});
  //     console.log(response, 'add address');
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(data, 'address');
  //   setAddress(data);
  //   setIsAdding(false);
  //   setIsEditing(false);
  // };

  const handleViewDetails = (index: number, id: string) => {
    setAddress(null);
    setEditingIndex(index);
    const address = Addresses?.find((address) => address._id === id);
    if (address) {
      setAddress(address);
    }
  };

  const userData = [
    {
      firstname: 'John',
      lastname: 'Doe',
      phonenumber: '1234567890',
      phonenumber2: '0987654321',
      city: 'New York',
      region: 'New York',
      deliveryAddress: '123 Main Street, Apt 4B',
      additionalInformation: 'Leave at the front door.',
    },
    {
      firstname: 'Jane',
      lastname: 'Smith',
      phonenumber: '2345678901',
      phonenumber2: '8765432109',
      city: 'Los Angeles',
      region: 'California',
      deliveryAddress: '456 Elm Street, Suite 300',
      additionalInformation: 'Call before delivery.',
    },
    {
      firstname: 'Alice',
      lastname: 'Johnson',
      phonenumber: '3456789012',
      phonenumber2: '7654321098',
      city: 'Chicago',
      region: 'Illinois',
      deliveryAddress: '789 Oak Avenue, Unit 12',
      additionalInformation: 'Ring the bell twice.',
    },
  ];

  if (loading || isLoading) {
    return <AddressListSkeleton />;
  }

  return (
    <div className="bg-white shadow-sm rounded-sm px-4 py-4">
      <div className="flex justify-between">
        <h1 className="text-lg font-[600] uppercase py-1.5">Your Address</h1>

        {!isAdding && !isEditing && (
          <p className="text-primary-700 flex cursor-pointer">
            <span className="text-sm">Change</span> <ChevronDown />
          </p>
        )}
      </div>

      <div>
        {userData.length === 0 && (
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
                  <div className="border-[1.5px] border-primary-700 rounded-sm p-2.5">
                    <div className="flex items-center justify-between">
                      <h1 className="font-medium ">{`${data.address} ${''}`}</h1>
                      <span
                        onClick={() => handleViewDetails(index, data._id as string)}
                        className="text-sm"
                      >
                        Edit
                      </span>
                    </div>

                    {/* <p>{address.address}</p> */}
                  </div>
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
                          <label
                            htmlFor="phonenumber"
                            className="block text-xs font-medium text-gray-700"
                          >
                            Phone number
                          </label>

                          <input
                            type="text"
                            id="phonenumber"
                            // {...register('phonenumber')}
                            placeholder=""
                            className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                          />
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="phonenumber2"
                            className="block text-xs font-medium text-gray-700"
                          >
                            Additional phone number
                          </label>

                          <input
                            type="text"
                            id="phonenumber2"
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
                            defaultValue={address?.region}
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
                            defaultValue={address?.city}
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
                            defaultValue={address?.address}
                            // {...register('address')}
                            placeholder=""
                            className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                          />
                        </div>

                        <div className="w-full">
                          <label
                            htmlFor="addionalInfo"
                            className="block text-xs font-medium text-gray-700"
                          >
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

                      <div>
                        <div className="flex items-center gap-4">
                          <input type="checkbox" />
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
                            type="submit"
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
        <p className="text-primary-700 flex mt-2 gap-1">
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
                  <label htmlFor="phonenumber" className="block text-xs font-medium text-gray-700">
                    Phone number
                  </label>

                  <input
                    type="text"
                    id="phonenumber"
                    // {...register('phonenumber')}
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
                    Delivery Address
                  </label>

                  <input
                    type="text"
                    id="deliveryAddress"
                    {...register('address')}
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

              <div>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <p>Set as Default Address</p>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="border border-primary-700 text-primary-700 rounded-sm text-center px-4 py-2"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
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
    </div>
  );
};
export default Address;
