import React, { useCallback } from 'react';
import Image from 'next/image';

import Document from '@/app/(seller)/sell-a-car/(dashboard)/assets/document.svg';
import { UploadVehicleDataTypes } from '@/types/types';
import { UseFormRegister } from 'react-hook-form';
import { X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type ForeignUsedProps = {
  register: UseFormRegister<UploadVehicleDataTypes>;
  autionPurchaseReceipt: File[];
  setAuctionPurchaseReceipt: React.Dispatch<React.SetStateAction<File[]>>;
  shippingCustomClearanceDocuments: File[];
  setShippingCustomClearanceDocuments: React.Dispatch<React.SetStateAction<File[]>>;
  allRepairsReceipts: File[];
  setAllRepairReceipts: React.Dispatch<React.SetStateAction<File[]>>;
};
const ForeignUsed = ({
  register,
  autionPurchaseReceipt,
  setAuctionPurchaseReceipt,
  shippingCustomClearanceDocuments,
  setShippingCustomClearanceDocuments,
  allRepairsReceipts,
  setAllRepairReceipts,
}: ForeignUsedProps) => {
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fileType: 'autionPurchaseReceipt' | 'shippingCustomClearanceDocuments' | 'allRepairReceipts',
  ) => {
    const newFile = event.target.files?.[0];

    if (!newFile) {
      return;
    }

    // Create a unique identifier
    const uniqueId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create a new File object with a unique name
    const uniqueFile = new File([newFile], `${uniqueId}_${newFile.name}`, {
      type: newFile.type,
      lastModified: newFile.lastModified,
    });

    if (fileType === 'autionPurchaseReceipt') {
      setAuctionPurchaseReceipt((prevFiles) => [...prevFiles, uniqueFile]);
    } else if (fileType === 'shippingCustomClearanceDocuments') {
      setShippingCustomClearanceDocuments((prevFiles) => [...prevFiles, uniqueFile]);
    } else {
      setAllRepairReceipts((prevFiles) => [...prevFiles, uniqueFile]);
    }

    // Reset the file input
    event.target.value = '';
  };

  const handleRemoveFile = useCallback((file: File, type: string) => {
    // const isAuction = autionPurchaseReceipt.find((f) => f === file);
    // const isCustom = shippingCustomClearanceDocuments.find((f) => f === file);
    if (type === 'autionPurchaseReceipt') {
      setAuctionPurchaseReceipt((prevFiles) => prevFiles.filter((f) => f !== file));
    } else if (type === 'shippingCustomClearanceDocuments') {
      setShippingCustomClearanceDocuments((prevFiles) => prevFiles.filter((f) => f !== file));
    } else {
      setAllRepairReceipts((prevFiles) => prevFiles.filter((f) => f !== file));
    }
  }, []);

  const renderFilePreview = (files: File[], type: string) => (
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
                <span className="text-sm font-medium">{file.name.split('_').pop()}</span>
                <span className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(0)}kb
                </span>
              </div>
              <Progress value={100} className="h-1 bg-[#F5A07B]" />
            </div>

            <div>
              <X
                onClick={() => handleRemoveFile(file, type)}
                size={20}
                className="text-[#F5A07B]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-10">
      <section className="w-full space-y-4">
        <h1 className="font-bold">Auction / Purchase Receipts</h1>
        <div className="w-full relative  border-dashed border-neutral-700 border-2 h-[173px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm text-center">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('auctionPurchaseReceipts')}
            onChange={(e) => handleFileChange(e, 'autionPurchaseReceipt')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm text-center">
            <span className="text-red-500 ">*</span>File supported .png, .jpg, .AVIF, webp, .pdf,
            .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(autionPurchaseReceipt, 'autionPurchaseReceipt')}
        </div>
      </section>

      <section className="w-full space-y-4">
        <h1 className="font-bold">Shipping & Custom Clearance Documents</h1>
        <div className="w-full relative  border-dashed border-neutral-700 border-2 h-[173px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm text-center">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('shippingCustomClearanceDocuments')}
            onChange={(e) => handleFileChange(e, 'shippingCustomClearanceDocuments')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm text-center">
            <span className="text-red-500 text-center">*</span>File supported .png, .jpg, .AVIF,
            webp, .pdf, .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(shippingCustomClearanceDocuments, 'shippingCustomClearanceDocuments')}
        </div>
      </section>

      <section className="w-full space-y-4">
        <h1 className="font-bold">All Repairs Receipts</h1>
        <div className="w-full relative border-dashed border-neutral-700 border-2 h-[173px] grid place-items-center rounded-md">
          <div className="h-[60px] w-[60px] bg-[#F9C4A1] rounded-[50%] flex items-center justify-center">
            <Image src={Document} alt="upload" />
          </div>
          <p className="text-neutral-500 text-sm text-center">
            Click here to upload your file or drag and drop
          </p>
          <input
            type="file"
            {...register('allRepairReceipts')}
            onChange={(e) => handleFileChange(e, 'allRepairReceipts')}
            className="block w-full h-full absolute opacity-0"
          />
          <p className="text-sm text-center">
            <span className="text-red-500 text-center">*</span>File supported .png, .jpg, .AVIF,
            webp, .pdf, .Doc
          </p>
        </div>

        <div>
          <p className="text-secondary-500 font-semibold">Uploaded files</p>
          {renderFilePreview(allRepairsReceipts, 'allRepairsReceipts')}
        </div>
      </section>
    </div>
  );
};

export default ForeignUsed;
