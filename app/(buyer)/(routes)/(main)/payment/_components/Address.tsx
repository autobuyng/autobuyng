import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, Plus } from 'lucide-react';

type AddressProps = {
  firstname: string;
  lastname: string;
  phonenumber: string;
  phonenumber2: string;
  city: string;
  region: string;
  deliveryAddress: string;
  additionalInformation: string;
};

const Address = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState<AddressProps>({
    firstname: '',
    lastname: '',
    phonenumber: '',
    phonenumber2: '',
    city: '',
    region: '',
    deliveryAddress: '',
    additionalInformation: '',
  });

  const { register, handleSubmit } = useForm<AddressProps>();
  const handleSubmitForm = (data: AddressProps) => {
    setAddress(data);
    setIsAdding(false);
    setIsEditing(false);
  };

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
        {!isAdding && !isEditing && !address.deliveryAddress && (
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-red-500">Kindly provide your delivery information</p>
            <button onClick={() => setIsAdding(true)} className="text-sm">
              Add
            </button>
          </div>
        )}
      </div>

      {!isAdding && !isEditing && address.deliveryAddress && (
        <div>
          <div className="border-[1.5px] border-primary-700 rounded-sm p-2.5 ">
            <div className="flex items-center justify-between">
              <h1 className="font-medium ">{`${address.firstname} ${address.lastname}`}</h1>
              <span className="text-sm">Edit</span>
            </div>

            <p>{address.deliveryAddress}</p>
          </div>

          <p className="text-primary-700 flex mt-2 gap-1">
            <Plus />
            <span>Add New address</span>
          </p>
        </div>
      )}

      {(isAdding || isEditing) && (
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
                    {...register('firstname')}
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
                    {...register('lastname')}
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
                    {...register('phonenumber')}
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
                    {...register('phonenumber2')}
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
                    {...register('deliveryAddress')}
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
                    {...register('additionalInformation')}
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
