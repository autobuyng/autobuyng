'use client';
import React, { useEffect, useState } from 'react';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';
import Image from 'next/image';
import ForeignUsed from '../_components/ForeignUsed';
import BrandNew from '../_components/BrandNew';
import NigeriaUsed from '../_components/NigeriaUsed';
import { ArrowLeft, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Make, Model, UploadVehicleDataTypes } from '@/types/types';
import { yearsArray } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { useGetVehicleMake, useGetVehicleModel, useUploadVehicle } from '@/app/(seller)/api/upload';
import { useToast } from '@/hooks/use-toast';
import { VEHICLE_TYPE } from '@/constants/constants';

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
  const { make } = useGetVehicleMake();
  const { toast } = useToast();
  const [vehicleMake, setVehicleMake] = useState<string>(make?.[0]?.name || '');
  const { register, getValues, reset, handleSubmit, watch, setValue } =
    useForm<UploadVehicleDataTypes>({
      defaultValues: {
        condition: 'new',
      },
    });

  const { model, refetch } = useGetVehicleModel({ make: vehicleMake });
  const [picturesOfVehicle, setPicturesOfVehicle] = useState<File[]>([]);
  const [purchaseReceipts, setPurchaseReceipts] = useState<File[]>([]);
  const [otherDocuments, setOtherDocuments] = useState<File[]>([]);
  const [autionPurchaseReceipt, setAuctionPurchaseReceipt] = useState<File[]>([]);
  const [shippingCustomClearanceDocuments, setShippingCustomClearanceDocuments] = useState<File[]>(
    [],
  );
  const [allRepairsReceipts, setAllRepairReceipts] = useState<File[]>([]);
  const [certificateProofOfOwnership, setCertificateProofOfOwnership] = useState<File[]>([]);
  const [nationalCertificateOfRoadworthiness, setNationalCertificateOfRoadworthiness] = useState<
    File[]
  >([]);
  const [vehicleLicense, setVehicleLicense] = useState<File[]>([]);

  const { uploadVehicle, isPending } = useUploadVehicle();
  console.log(getValues('make'), 'outside');

  useEffect(() => {
    setVehicleMake(getValues('make'));
    refetch();
  }, [watch(['condition', 'make'])]);

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

    new: {
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
      component: (
        <NigeriaUsed
          register={register}
          certificateProofOfOwnership={certificateProofOfOwnership}
          setCertificateProofOfOwnership={setCertificateProofOfOwnership}
          nationalCertificateOfRoadworthiness={nationalCertificateOfRoadworthiness}
          setNationalCertificateOfRoadworthiness={setNationalCertificateOfRoadworthiness}
          vehicleLicense={vehicleLicense}
          setVehicleLicense={setVehicleLicense}
        />
      ),
    },
  };

  const convertToFormData = (data: FormData): FormData => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((file) => {
          formData.append(key, file, file.name);
        });
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  };

  const handleOnSubmit = async (data: UploadVehicleDataTypes) => {
    const updatedData = {
      ...data,
      ...(picturesOfVehicle.length > 0 && { picturesOfVehicle }),
      ...(purchaseReceipts.length > 0 && { purchaseReceipts }),
      ...(otherDocuments.length > 0 && { otherSupportingDocuments: otherDocuments }),
      ...(autionPurchaseReceipt.length > 0 && { auctionPurchaseReceipts: autionPurchaseReceipt }),
      ...(shippingCustomClearanceDocuments.length > 0 && { shippingCustomClearanceDocuments }),
      ...(allRepairsReceipts.length > 0 && { allRepairReceipts: allRepairsReceipts }),
      ...(certificateProofOfOwnership.length > 0 && { certificateProofOfOwnership }),
      ...(nationalCertificateOfRoadworthiness.length > 0 && {
        nationalCertificateOfRoadworthiness,
      }),
      ...(vehicleLicense.length > 0 && { vehicleLicense }),
    };

    const filteredData = Object.fromEntries(
      Object.entries(updatedData).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) =>
          !(value instanceof FileList || Array.isArray(value)) ||
          ((value instanceof FileList || Array.isArray(value)) && value.length > 0),
      ),
    );

    const formData = convertToFormData(filteredData as unknown as FormData);

    try {
      await uploadVehicle(formData);
      toast({
        variant: 'success',
        description: 'Successfully uploaded a vehicle',
      });

      reset();
      setAuctionPurchaseReceipt([]);
      setAllRepairReceipts([]);
      setCertificateProofOfOwnership([]);
      setNationalCertificateOfRoadworthiness([]);
      setVehicleLicense([]);
      setOtherDocuments([]);
      setPurchaseReceipts([]);
      setShippingCustomClearanceDocuments([]);
      setPicturesOfVehicle([]);
    } catch (error: any) {
      const errorMessage = Array.isArray(error?.message)
        ? error.message.join(', ')
        : error?.message || 'An unexpected error occurred';

      toast({
        variant: 'destructive',
        description: errorMessage,
      });

      console.error(error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files; // Access the selected files

    if (!files || files.length === 0) {
      return;
    }

    const updatedFiles: File[] = Array.from(files).map((file) => {
      // Create a unique identifier for each file
      const uniqueId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Return a new File object with a unique name
      return new File([file], `${uniqueId}_${file.name}`, {
        type: file.type,
        lastModified: file.lastModified,
      });
    });

    // Update the state with the new files
    setPicturesOfVehicle((prev) => [...prev, ...updatedFiles]);
  };
  const handleRemoveFile = (file: File) => {
    setPicturesOfVehicle((prev) => prev.filter((f) => f.name !== file.name));
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
            <section className="flex  items-center gap-4 w-full">
              <div className="w-full">
                <label htmlFor="make" className="block text-xs font-medium text-gray-700">
                  Make
                </label>
                <select
                  defaultValue={make?.[0].name || 'Audi'}
                  {...register('make')}
                  id="make"
                  className="block w-full rounded-md  px-2 py-[9px] mt-1  text-black  border border-neutral-900  text-sm outline-none "
                >
                  {/* <option value="" disabled>
                    Select vehicle condition
                  </option> */}

                  {make &&
                    make.map((vehicle: Make, index) => (
                      <option key={index} value={vehicle.name}>
                        {vehicle.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="model" className="block text-xs font-medium text-gray-700">
                  Model
                </label>

                <select
                  {...register('model')}
                  id="model"
                  className="block w-full rounded-md  px-2 py-[9px] mt-1  text-black  border border-neutral-900  text-sm outline-none "
                >
                  {/* <option value="" disabled>
                    Select vehicle condition
                  </option> */}

                  {(Array.isArray(model) ? model : []).map((vehicle: Model, index) => (
                    <option key={index} value={vehicle.name}>
                      {vehicle.name}
                    </option>
                  ))}
                </select>
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

                  {VEHICLE_TYPE.map((type, index) => (
                    <option key={index} value={type.name}>
                      {type.name}
                    </option>
                  ))}
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
                  Price
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
                  {...register('picturesOfVehicle')}
                  onChange={handleFileChange}
                  multiple
                  className="block w-full h-full absolute opacity-0"
                />
                <p className="text-sm">
                  <span className="text-red-500">*</span>File supported .png, .jpg, .AVIF, webp,
                  .pdf, .Doc
                </p>
              </div>

              <div>
                <p className="text-secondary-500 font-semibold">Uploaded files</p>
                {renderFilePreview(picturesOfVehicle)}
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
                disabled={isPending}
                className="bg-secondary-500 w-full text-white rounded-sm text-center px-4 py-2"
              >
                {isPending ? 'Loading...' : 'Upload'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleVehicle;
