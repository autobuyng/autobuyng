'use client';
import React, { useEffect, useState } from 'react';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';
import Image from 'next/image';
import ForeignUsed from '../_components/ForeignUsed';
import BrandNew from '../_components/BrandNew';
import NigeriaUsed from '../_components/NigeriaUsed';
import { ArrowLeft, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { UploadVehicleDataTypes } from '@/types/types';
import { yearsArray } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { useUploadVehicle } from '@/app/(seller)/api/upload';

interface ConditonTypes {
  [key: string]: CarConditions;
}
type CarConditions = {
  id: string;
  title: string;
  description: string;
  component: JSX.Element;
};
const SingleVehicle = () => {
  const { register, getValues, handleSubmit, watch, setValue } = useForm<UploadVehicleDataTypes>({
    defaultValues: {
      condition: 'New',
    },
  });
  const [vehicleLicence, setVehicleLicence] = useState<File[]>([]);
  const [purchaseReceipts, setPurchaseReceipts] = useState<File[]>([]);
  const [otherDocuments, setOtherDocuments] = useState<File[]>([]);
  const [autionPurchaseReceipt, setAuctionPurchaseReceipt] = useState<File[]>([]);
  const [shippingCustomClearanceDocuments, setShippingCustomClearanceDocuments] = useState<File[]>(
    [],
  );
  const [allRepairsReceipts, setAllRepairReceipts] = useState<File[]>([]);
  const { uploadVehicle } = useUploadVehicle();

  useEffect(() => {
    console.log(getValues('condition'), 'testin gset ');
  }, [watch('condition')]);

  const CAR_CONDITION: ConditonTypes = {
    foreign: {
      id: 'foreignused',
      title: 'foreignUsed',
      description: 'Upload your vehicle inventory',
      component: (
        <ForeignUsed
          register={register}
          autionPurchaseReceipt={autionPurchaseReceipt}
          setAuctionPurchaseReceipt={setAuctionPurchaseReceipt}
          shippingCustomClearanceDocuments={shippingCustomClearanceDocuments}
          setShippingCustomClearanceDocuments={setShippingCustomClearanceDocuments}
          allRepairsReceipts={allRepairsReceipts}
          setAllRepairReceipts={setAllRepairReceipts}
        />
      ),
    },

    New: {
      id: 'brandnew',
      title: 'brandNew',
      description: 'Upload your vehicle quantity',
      component: (
        <BrandNew
          register={register}
          setValue={setValue}
          purchaseReceipts={purchaseReceipts}
          setPurchaseReceipts={setPurchaseReceipts}
          otherDocuments={otherDocuments}
          setOtherDocuments={setOtherDocuments}
        />
      ),
    },
    local: {
      id: 'localused',
      title: 'local',
      description: 'Upload your vehicle quantity',
      component: <NigeriaUsed />,
    },
  };

  const handleOnSubmit = async (data: UploadVehicleDataTypes) => {
    console.log({
      ...data,
      vehicleLicense: vehicleLicence,
      purchaseReceipts,
      otherSupportingDocuments: otherDocuments,
    });

    const updatedData = {
      ...data,
      vehicleLicense: vehicleLicence,
      purchaseReceipts,
      otherSupportingDocuments: otherDocuments,
    };

    //      const formData = new FormData();
    //  Object.entries(updatedData).forEach(([key, value]) => {
    //    formData.append(key, value);
    //  });
    try {
      const response = await uploadVehicle(updatedData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    selectedFile;
    if (selectedFile) {
      setVehicleLicence((prev) => [...prev, selectedFile]);
    }
  };

  const handleRemoveFile = (file: File) => {
    setVehicleLicence((prev) => prev.filter((f) => f.name !== file.name));
  };

  const renderFilePreview = (files: File[]) => (
    <div className="flex flex-col gap-2 mt-4">
      {files.map((file, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center justify-between border border-secondary-100 rounded-md py-4 px-2 "
          >
            <div className="group relative block w-10 h-10  space-y-2 rounded-[50%] overflow-hidden">
              {file.type === 'application/pdf' ? (
                <iframe
                  src={URL.createObjectURL(file)}
                  title={`PDF preview`}
                  className="object-cover bg-center w-full border-none outline-none overflow-hidden pointer-events-none"
                />
              ) : (
                <Image
                  src={URL.createObjectURL(file) || '/placeholder.svg'}
                  alt={`File preview`}
                  fill
                  className="object-cover w-full h-full  pointer-events-none"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col gap-1 px-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{file.name}</span>
                <span className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(0)}kb
                </span>
              </div>
              <Progress value={100} className="h-1 bg-[#F5A07B]" />
            </div>

            <div>
              <X onClick={() => handleRemoveFile(file)} size={20} className="text-[#F5A07B]" />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="mx-4 mb-10">
      <div>
        <ArrowLeft className="cursor-pointer" onClick={() => window.history.back()} />
      </div>
      <div className=" max-w-[458px] mx-auto md:ml-16 w-full grid place-items-center ">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full space-y-4 mt-4">
          <h1 className="font-bold text-2xl text-center mb-4">UPLOAD A VEHICLE</h1>

          <div className="w-full space-y-4">
            <section className="flex flex-col items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="make" className="block text-xs font-medium text-gray-700">
                  Make
                </label>

                <input
                  type="text"
                  {...register('make')}
                  id="make"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-700  sm:text-sm"
                />
              </div>
            </section>

            <section className="flex  gap-4 w-full">
              <div className="w-full">
                <label htmlFor="vin" className="block text-xs font-medium text-gray-700">
                  VIN
                </label>

                <input
                  type="text"
                  {...register('vin')}
                  id="vin"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="address" className="block text-xs font-medium text-gray-700">
                  Condition
                </label>

                <select
                  id="condition"
                  {...register('condition')}
                  // value={condition}
                  // onChange={handleChange}
                  className="block w-full rounded-md  px-2 py-[9px] mt-1  text-black  border border-neutral-900  text-sm outline-none "
                >
                  {/* <option value="" disabled>
                    Select vehicle condition
                  </option> */}
                  <option value="new">Brand New</option>
                  <option value="foreign">Foreign Used</option>
                  <option value="local">Local Used</option>
                </select>
              </div>
            </section>

            <section className="flex items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="state" className="block text-xs font-medium text-gray-700">
                  Vehicle Type
                </label>

                <select
                  id="vehicleType"
                  {...register('vehicleType')}
                  className="block w-full rounded-md  px-2 py-[9px] mt-1  text-black  border border-neutral-900  text-sm outline-none "
                >
                  <option value="" disabled>
                    Select vehicle category
                  </option>
                  <option value="brandNew">Brand New</option>
                  <option value="foreignUsed">Foreign Used</option>
                  <option value="nigerianUsed">Nigerian Used</option>
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="city" className="block text-xs font-medium text-gray-700">
                  Vehicle year
                </label>
                <select
                  id="vehcleYear"
                  {...register('vehicleYear')}
                  // value={condition}
                  // onChange={handleChange}
                  className="block w-full rounded-md  px-2 py-[9px] mt-1  text-black  border border-neutral-900  text-sm outline-none "
                >
                  <option value="" disabled>
                    Select vehicle year
                  </option>
                  {yearsArray.map((year, index) => (
                    <option key={index} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            <section className="flex flex-col items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="address" className="block text-xs font-medium text-gray-700">
                  Address
                </label>

                <input
                  type="text"
                  {...register('address')}
                  id="address"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="price" className="block text-xs font-medium text-gray-700">
                  price
                </label>

                <input
                  type="text"
                  {...register('price')}
                  id="price"
                  placeholder=""
                  className="mt-1 w-full rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="time" className="block text-xs font-medium text-gray-700">
                  Note
                </label>

                <textarea
                  {...register('note')}
                  rows={4}
                  id="note"
                  placeholder=""
                  className="mt-1 w-full  rounded-sm outline-none px-2 py-2  border border-neutral-900  sm:text-sm"
                />
              </div>
            </section>

            <section className="w-full space-y-4">
              <h1 className="font-bold">Upload Pictures of your vehicle</h1>
              <div className="w-full relative  border-dashed border-neutral-700 border-2 h-[163px] grid place-items-center rounded-md">
                <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
                  <Image src={Document} alt="upload" />
                </div>
                <p className="text-neutral-500 text-sm">
                  Click here to upload your file or drag and drop
                </p>
                <input
                  type="file"
                  {...register('vehicleLicense')}
                  onChange={handleFileChange}
                  className="block w-full h-full absolute opacity-0"
                />
                <p className="text-sm">
                  <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp,
                  .pdf, .Doc
                </p>
              </div>

              <div>
                <p className="text-secondary-500 font-semibold">Uploaded files</p>
                {renderFilePreview(vehicleLicence)}
              </div>

              <div>
                <div className="w-full">
                  <label htmlFor="link" className="block text-xs font-medium text-gray-700">
                    Video Link
                  </label>

                  <input
                    type="text"
                    id="link"
                    placeholder=""
                    className="mt-1 w-full rounded-sm outline-none px-2 border border-neutral-900 py-2 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" name="" id="" />
                <p className="text-xs">
                  By clicking here, you authorize AutoBuy to continue with collecting your
                  information. We only save this data to schedule a meeting for inspection and
                  provide you a listing to sell your car. We value and protect your privacy check
                  Term and Conditions
                </p>
              </div>
            </section>

            <section>{CAR_CONDITION[getValues('condition')]?.component}</section>
          </div>

          <div className="w-full ">
            <div className="flex items-center  gap-4 h-full w-full">
              <button
                type="submit"
                className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
              >
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleVehicle;
